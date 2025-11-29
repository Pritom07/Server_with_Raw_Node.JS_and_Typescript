import http, { IncomingMessage, Server, ServerResponse } from "http";
import config from "./config/index";
import { RouteHandlers, routes } from "./helpers/RouteHandlers";
import SendJSON from "./helpers/SendJSON";
import "./routes/index";
import findDynamicRoutes from "./helpers/dynamicRoute";

const { port } = config;
const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const path: string = req.url || " ";
    const method: string = req.method?.toUpperCase() || " ";
    const methodMap: Map<string, RouteHandlers> | undefined =
      routes.get(method);
    const handler: RouteHandlers | undefined = methodMap?.get(path);

    if (handler) {
      handler(req, res);
    } else if (findDynamicRoutes(method, path)) {
      const matched = findDynamicRoutes(method, path);
      (req as any).params = matched?.params;
      matched?.handler(req, res);
    } else {
      SendJSON(res, 404, {
        success: false,
        message: `path '${path}' not found`,
      });
    }
  }
);
server.listen(port, () => {
  console.log(`Server is running at ${port}`);
});

import { RouteHandlers, routes } from "./RouteHandlers";

const findDynamicRoutes = (method: string, path: string) => {
  const methodMap: Map<string, RouteHandlers> | undefined = routes.get(method);
  if (!methodMap) return null;
  for (let [routePath, handler] of methodMap.entries()) {
    const routeParts: Array<string> = routePath.split("/");
    const pathParts: Array<string> = path.split("/");
    if (routeParts.length !== pathParts.length) continue;

    const params: any = {};
    let matched: boolean = true;
    for (let i = 0; i < routeParts.length; i++) {
      if (routeParts[i]?.startsWith(":")) {
        params[routeParts[i]!.substring(1)] = pathParts[i];
      } else if (routeParts[i] !== pathParts[i]) {
        matched = false;
        break;
      }
    }
    if (matched) {
      return { params, handler };
    }
  }
  return null;
};
export default findDynamicRoutes;

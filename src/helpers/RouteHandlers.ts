import { IncomingMessage, ServerResponse } from "http";

export type RouteHandlers = (req: IncomingMessage, res: ServerResponse) => void;
export const routes: Map<string, Map<string, RouteHandlers>> = new Map();

export const addRoute = (
  method: string,
  path: string,
  handler: RouteHandlers
): void => {
  if (!routes.has(method)) {
    routes.set(method, new Map());
  }
  routes.get(method)!.set(path, handler);
};

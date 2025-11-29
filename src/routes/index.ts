import { IncomingMessage, ServerResponse } from "http";
import { addRoute } from "../helpers/RouteHandlers";
import SendJSON from "../helpers/SendJSON";
import parsedBody from "../helpers/parsedBody";
import { getUsers, setUser } from "../helpers/fileDB";

/**GET in root route */
addRoute("GET", "/", (req: IncomingMessage, res: ServerResponse) => {
  SendJSON(res, 200, {
    success: true,
    message: "Get operation successful, WOW!!",
    path: req.url,
  });
});

/**GET a user */
addRoute("GET", "/users/:id", (req: IncomingMessage, res: ServerResponse) => {
  const { id } = (req as any).params;
  const users = getUsers();
  const user = users.find((user: any) => user.id === Number(id));
  SendJSON(res, 200, user);
});

/**GET all users */
addRoute("GET", "/users", (req: IncomingMessage, res: ServerResponse) => {
  const users = getUsers();
  SendJSON(res, 200, users);
});

/**POST a user */
addRoute(
  "POST",
  "/users",
  async (req: IncomingMessage, res: ServerResponse) => {
    const body = await parsedBody(req);
    const users = getUsers();
    users.push(body);
    setUser(users);
    SendJSON(res, 201, {
      success: true,
      message: "User created successfully",
      body: body,
    });
  }
);

/**PATCH a user */
addRoute(
  "PATCH",
  "/users/:id",
  async (req: IncomingMessage, res: ServerResponse) => {
    const { id } = (req as any).params;
    const body = await parsedBody(req);
    const users = getUsers();
    const user = users.find((user: any) => user.id === Number(id));
    const updatedUser = {
      ...user,
      ...body,
    };
    const filteredUser = users.filter((user: any) => user.id !== Number(id));
    filteredUser.push(updatedUser);
    setUser(filteredUser);
    SendJSON(res, 200, {
      success: true,
      message: `User of id : ${id} updated`,
    });
  }
);

/**DELETE a user */
addRoute(
  "DELETE",
  "/users/:id",
  (req: IncomingMessage, res: ServerResponse) => {
    const { id } = (req as any).params;
    const users = getUsers();
    const newUsersArray = users.filter((user: any) => user.id !== Number(id));
    setUser(newUsersArray);
    SendJSON(res, 200, { success: true, message: `id : ${id} deleted.` });
  }
);

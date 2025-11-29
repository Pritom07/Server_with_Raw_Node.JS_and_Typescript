import { ServerResponse } from "http";

const SendJSON = (res: ServerResponse, statusCode: number, body: any) => {
  res.writeHead(statusCode, { "content-type": "application/json" });
  res.end(JSON.stringify(body));
};
export default SendJSON;

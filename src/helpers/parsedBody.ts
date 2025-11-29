import { IncomingMessage } from "http";

const parsedBody = async (req: IncomingMessage): Promise<any> => {
  return new Promise((resolve, reject) => {
    let body: string = " ";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        resolve(body && JSON.parse(body));
      } catch (err) {
        reject(err);
      }
    });
  });
};
export default parsedBody;

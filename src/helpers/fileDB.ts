import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "./src/users/data.json");
type User = {
  id: number;
  name: string;
  role: string;
};

export const getUsers = (): any => {
  try {
    const data: string = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch (err: any) {
    console.log(`Error Occured ${err.message}`);
  }
};

export const setUser = (users: Array<User> | any) => {
  fs.writeFileSync(filePath, JSON.stringify(users));
};

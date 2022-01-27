import axios from "axios";
import { users } from "../users.json";
class Users {
  static all() {
    return axios
      .get("../users.json")
      ?.then((resp) => {
        console.log(users);
        return users;
      })
      .catch(() => users);
  }
}

export default Users;

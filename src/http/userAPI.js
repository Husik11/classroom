import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const login = async (username, password) => {
  const { data } = await $host.post("/admin/login", { username, password });
  console.log(data);
  localStorage.setItem("token", data.access_token);
  return jwt_decode(data.access_token);
};

export const check = async () => {
  const { data } = await $authHost.get("/admin/admin_teams");
  if (data && data.token) {
    localStorage.setItem("token", data.token);
    return jwt_decode(data.token);
  } else {
    throw new Error("Token not found in response data");
  }
};

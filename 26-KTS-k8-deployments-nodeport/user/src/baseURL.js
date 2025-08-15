import axios from "axios";

const userAxios = axios.create({
  baseURL: "http://192.168.49.2:30005",
});
// https://kts-b5lr.onrender.com
export default userAxios;

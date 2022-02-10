import axios from "axios";
import { API_KEY, BASE_URL } from "../constants/consts";

const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;

import axios from "axios";

const instance = axios.create({
  baseURL: "https://sp-globalnomad-api.vercel.app/5-2",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default instance;

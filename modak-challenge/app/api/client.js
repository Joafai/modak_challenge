import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://api.artic.edu/api",
});

export default apiClient;

import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const fetchData = async () => {
  try {
    const response = await api.get("/posts?_limit=10");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export { fetchData };

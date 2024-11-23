import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const fetchAllPosts = async (page) => {
  try {
    const response = await api.get(`/posts?_page=${page}&_limit=3`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const fetchSinglePost = async (id) => {
  try {
    const response = await api.get(`/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export { fetchAllPosts, fetchSinglePost };

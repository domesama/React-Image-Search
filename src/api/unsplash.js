import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID I_hnr8Afk2Fa46w3mzmstSTQM4qa-9DxO5jPJ2skEg0",
  },
});

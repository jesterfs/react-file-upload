import axios from "axios";

export default axios.create({
  baseURL: "https://file-uploader-jester.herokuapp.com",
  headers: {
    "Content-type": "application/json"
  }
});
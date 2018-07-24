import axios from "axios";
const fetchData = async (query = "") => {
  let res = "";
  try {
    const token = localStorage.getItem("accessToken").toString();
    res = await axios({
      method: "get",
      url: "http://127.0.0.1:8848/api/todos" + query,
      headers: {
        "Content-Type": "application/json",
        oauth: token
      }
    });
  } catch (err) {
    alert(err);
    console.log(err);
  }
  return res;
};

export default fetchData;

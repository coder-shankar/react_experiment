import axios from "axios";
const login = async (username, password) => {
  let loginStatus = false;
  try {
    let res = await axios({
      method: "post",
      url: "http://127.0.0.1:8848/api/login",
      data: { email: username, password: password },
      config: {
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      }
    });
    // checking response status
    if (res.status === 200) {
      loginStatus = true;
      const { accessToken, refreshToken } = res.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
    }
  } catch (err) {
    alert("username or password doesnot match");
    console.log(err);
  }

  return loginStatus;
};

export default login;

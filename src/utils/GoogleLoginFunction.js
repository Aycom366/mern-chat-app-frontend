import axios from "axios";
import { useHistory } from "react-router-dom";

export const ResponseSuccessGoogle = async (data, saveUser, setMessage) => {
  const history = useHistory();
  try {
    const response = await axios.post(`/api/auth/google-login`, {
      tokenId: data?.tokenId,
    });
    saveUser(response.data.data);
    setMessage("success", "Redirecting...");
    setTimeout(() => {
      history.push("/chats");
    }, 2000);
  } catch (error) {
    setMessage("error", error.response.data.msg);
  }
};

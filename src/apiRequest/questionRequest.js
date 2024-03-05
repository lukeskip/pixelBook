import axios from "axios";
const questionRequest = async (question, lang = "es") => {
  return await axios.post("http://localhost:3001/question", {
    question,
    lang,
  });
};

export default questionRequest;

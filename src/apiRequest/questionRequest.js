import axios from "axios";
const questionRequest = async (question) => {
  return await axios.post("http://localhost:3001/question", {
    question: question,
  });
};

export default questionRequest;

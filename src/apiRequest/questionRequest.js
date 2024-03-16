import axios from "axios"; 
const HOST = import.meta.env.VITE_URL_HOST; 
const questionRequest = async (question, lang = "es") => {
  console.log(HOST); 
  return await axios.post(HOST, {
    question,
    lang,
  });
};

export default questionRequest;

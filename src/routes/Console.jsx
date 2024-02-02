import TypeIt from "typeit-react";
import typeItDefault from "../configurations/typeit-default.js";
const Console = () => {
  const finish = (instance) => {
    instance.options({
      afterComplete: async (instance) => {
        alert("termino");
      },
    });
    return instance;
  };
  return (
    <div className="container console">
      <TypeIt options={typeItDefault} getAfterInit={finish}>
        [~] Este es una cosa muy chida
      </TypeIt>
    </div>
  );
};

export default Console;

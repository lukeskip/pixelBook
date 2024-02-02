import TypeIt from "typeit-react";
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
      <TypeIt getAfterInit={finish}>[~] Este es uuna cosa muy chida</TypeIt>
    </div>
  );
};

export default Console;

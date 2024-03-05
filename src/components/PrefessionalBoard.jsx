import nestle from "../assets/img/logos/nestle.png";
import loreal from "../assets/img/logos/loreal.png";
import unilever from "../assets/img/logos/unilever.png";
import biotherm from "../assets/img/logos/biotherm.png";

export default function PrefessionalBoard() {
  return (
    <div className="content">
      <h2>Mi experiencia laboral:</h2>
      <p>
        <span className="year">2014</span> a la{" "}
        <span className="year">2016</span> Diseñador Web Senior en Egocentra,
        proyectos para{" "}
        <strong>L'Oreal, Essie, Biotherm, Unilever y Samsung</strong>.
      </p>
      <p>
        <span className="year">2016</span> a <span className="year">2017</span>{" "}
        <strong>Director Creativo</strong> en Egocentra.
      </p>
      <p>
        <span className="year">2017</span> a <span className="year">2018</span>{" "}
        <strong>Desarrollador Web</strong> en el Tribunal Electoral de la Ciudad
        de México.
      </p>
      <p>
        <span className="year">2019</span> a <span className="year">2020</span>{" "}
        Director de Arte y Diseño Soluciones de Comunicación,
        <strong> proyectos para Coca Cola, Siemens, Pepsico.</strong>
      </p>
      <p>
        <span className="year">2020</span> a <span className="year">2023</span>{" "}
        Diversos proyectos freelance para Nestlé, Ferrero Rocher y L’Oreal.
      </p>
      <div className="logos">
        <img className="logo" src={nestle} alt="" />
        <img className="logo" src={unilever} alt="" />
        <img className="logo" src={loreal} alt="" />
        <img className="logo" src={biotherm} alt="" />
      </div>
    </div>
  );
}

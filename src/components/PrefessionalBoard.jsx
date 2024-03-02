import nestle from "../assets/img/logos/nestle.png";
import loreal from "../assets/img/logos/loreal.png";
import unilever from "../assets/img/logos/unilever.png";
import biotherm from "../assets/img/logos/biotherm.png";

export default function PrefessionalBoard() {
  return (
    <div>
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
      <p>
        Reprehenderit anim ad in aliquip aute ipsum. Minim cillum duis velit
        anim. Eiusmod irure qui commodo minim nulla incididunt est id culpa qui
        officia fugiat enim in. Pariatur occaecat eiusmod laboris culpa deserunt
        irure ad nulla aliquip. Cillum ipsum aliqua dolor qui proident aliqua
        dolor duis eu eiusmod dolore excepteur. Nostrud laborum magna deserunt
        magna aliquip sunt officia ut ex laborum. In ut ad esse occaecat
        occaecat.
      </p>
      <p>
        Sunt eu voluptate ea nostrud veniam culpa consequat incididunt. Ea
        fugiat culpa mollit do reprehenderit in cupidatat proident labore est
        dolore ea Lorem. Occaecat sit deserunt magna et. Sunt veniam amet aliqua
        amet. Ad voluptate dolore id tempor fugiat ipsum magna. Laboris sunt
        esse mollit minim consequat laboris laboris laborum labore irure sit
        exercitation tempor.
      </p>
    </div>
  );
}

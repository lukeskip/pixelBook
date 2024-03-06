import nestle from "../assets/img/logos/nestle.png";
import loreal from "../assets/img/logos/loreal.png";
import unilever from "../assets/img/logos/unilever.png";
import biotherm from "../assets/img/logos/biotherm.png";
import Tabs from "./Tabs";

export default function ProfessionalBoard() {
  return (
    <div className="info">
      <Tabs tabs={["Mi Experiencia Profesional", "Experiencia Académica"]}>
        <div>
          <ul>
            <li>
              <strong>2014 a la 2016</strong> Diseñador Web Senior en Egocentra,
              proyectos para L'Oreal, Essie, Biotherm, Unilever y Samsung.
            </li>
            <li>
              <strong>2016 a 2017</strong> Director Creativo en Egocentra.
            </li>
            <li>
              <strong>2017 a 2018</strong> Desarrollador Web en el Tribunal
              Electoral de la Ciudad de México.
            </li>
            <li>
              <strong>2019 a 2020</strong> Director de Arte y Diseño Soluciones
              de Comunicación.
            </li>
            <li>
              <strong>2020 a a la actualidad</strong> diversos proyectos
              freelance para Nestlé, Ferrero Rocher y L’Oreal.
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              Titulado de la carrera de <strong>Comunicación Social</strong>, en
              el área Multimedia de la Universidad Autónoma Metropolitana (UAM).
            </li>
            <li>
              <strong>Cursos de inglés</strong> en Southbourne School of English
              (1 mes) y el International Teaching and Training Centre (4 meses),
              ambas escuelas en <strong>Bournemouth, Inglaterra</strong>.
            </li>
            <li>
              Curso de diseño web avanzado (
              <strong>HTML5, CSS3, JavaScript</strong>), Edumac.
            </li>
            <li>
              Diplomado de mobile development (
              <strong>JavaScript, React y React Native</strong>),{" "}
              <strong>CoderHouse</strong>
            </li>
            <li>
              Diplomado en Marketing Digital en el Centro de Artes Digitales
              ADM.
            </li>
            <li>
              Bootcamp desarrollo Fullstack en Henry (
              <strong>React,NodeJS,Express</strong>)
            </li>
          </ul>
        </div>
      </Tabs>
    </div>
  );
}

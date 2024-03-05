import guitar from "../assets/img/guitar.png";
import poster from "../assets/img/personal-poster.png";

export default function PrefessionalBoard() {
  return (
    <div className="content">
      <h2>Mi experiencia laboral:</h2>
      <img src={guitar} className="guitar" alt="" />
      <img src={poster} className="poster" alt="" />
    </div>
  );
}

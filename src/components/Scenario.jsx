import Menu from "../components/Menu";
import Character from "../components/Character";
import Console from "../components/Console";
import { useSelector } from "react-redux";
import guitar from '../assets/img/guitar.png'
import plant from '../assets/img/plant.png'

export default function Scenario() {
  const category = useSelector((state) => state.category);
  const board = useSelector((state) => state.board);
  const mode = useSelector((state) => state.mode);
  return (
    <div className="scenario">
      <Menu />
      <div className={`veil ${mode !== "stopped" && "disappear"}`}></div>
      
      <div className="content">
        <div><Console /></div>
        <div>
          <img className="guitar" src={guitar} alt="" />
          <img className="plant" src={plant} alt="" />
          <Character />
        </div>
      </div>
    </div>
  );
}

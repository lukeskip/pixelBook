import Slides from "./Slides";
import projects from "../utils/projects.js";

export default function BookBoard() {
  return (
    <div className="info">
      <Slides slides={projects} />
    </div>
  );
}

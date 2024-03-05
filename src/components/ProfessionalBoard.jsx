import nestle from "../assets/img/logos/nestle.png";
import loreal from "../assets/img/logos/loreal.png";
import unilever from "../assets/img/logos/unilever.png";
import biotherm from "../assets/img/logos/biotherm.png";
import Tabs from "./Tabs";

export default function PrefessionalBoard() {
  return (
    <div className="content">
      <Tabs tabs={["primera", "segunda", "tercera"]}>
        <div>
          Proident quis duis reprehenderit velit ex dolor adipisicing fugiat
          consequat id pariatur excepteur. Sit exercitation in Lorem sit
          pariatur cillum laboris labore in. Ut irure exercitation proident
          commodo exercitation amet cillum sint excepteur enim consectetur
          eiusmod. Velit anim proident reprehenderit eiusmod Lorem proident nisi
          commodo officia sit. Ullamco eu est do ut aliqua consequat deserunt.
          Officia nisi est incididunt ex ipsum cupidatat fugiat officia veniam
          excepteur incididunt.
        </div>
        <div>
          Duis laboris qui sunt magna quis cillum elit irure dolore nulla. Esse
          laborum qui ad nulla nostrud deserunt sunt. Non culpa mollit veniam
          cillum cillum ullamco nulla cupidatat veniam consequat ullamco laborum
          tempor excepteur. Id ut cillum eu et ea officia sint enim aliquip.
          Veniam esse exercitation adipisicing dolor officia cupidatat esse do
          esse reprehenderit mollit veniam officia id.
        </div>
        <div>
          Adipisicing ad sint et Lorem do quis aute nisi minim est amet veniam
          ad. Veniam ullamco adipisicing occaecat laboris in. Esse ullamco dolor
          amet occaecat est dolore laborum fugiat. Adipisicing cupidatat
          voluptate labore nisi occaecat sit consectetur sint quis quis nulla.
          Sit labore ullamco anim culpa do veniam ex cillum sit enim duis velit.
          Do eu exercitation sit reprehenderit commodo. Dolor amet elit eiusmod
          quis nostrud labore.
        </div>
      </Tabs>
    </div>
  );
}

import style from "../css/WhyUs.module.css";
import { Link } from "react-router-dom";

import finger from "../media/icons/finger.png";
import quality from "../media/icons/Quality1.png";
import quality2 from "../media/icons/Quality2.png";
import ez from "../media/icons/easy.png";
import popcorn from "../media/popcorn.jpg";

export default function () {
  return (
    <div className={style.why}>
      <h1 className={style.title}>Why Us</h1>

      <div className={style.father}>
        <div className={style.container}>
          <div className={style.row}>
            <div className={style.features}>
              <div>
                <img src={finger}></img>
              </div>
              <div>
                <h1>Unique Feautures</h1>
                <p>Curated movies recommendations tailored for you</p>
              </div>
            </div>

            <div className={style.features}>
              <div>
                <img src={quality2}></img>
              </div>
              <div>
                <h1>Reliable Data</h1>
                <p>Accurate movie info from trusted database</p>
              </div>
            </div>
          </div>

          <div className={style.row}>
            <div className={style.features}>
              <div>
                <img src={quality}></img>
              </div>
              <div>
                <h1>Extra fun</h1>
                <p>Discover hidden gems and detailed movie insights</p>
              </div>
            </div>

            <div className={style.features}>
              <div>
                <img src={ez}></img>
              </div>
              <div>
                <h1>Easy to Use</h1>
                <p>Browse top movies quickly with a simple interface</p>
              </div>
            </div>
          </div>
        </div>

        <div className={style.popcornContain}>
          <img className={style.popcorn} src={popcorn}></img>
          <Link to="/movies">
            <button>Enroll now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

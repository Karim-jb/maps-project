import { Link } from "react-router-dom";
import style from "../css/AboutsUs.module.css";
import img from "../media/a0c4805b20fe15924ec135da2bd4f20f.jpg";

export default function AboutUs() {
  return (
    <>
      <div className={style.father}>
        <div className={style.container}>
          <div className={style.description}>
            <h1 className={style.h1}>Lessons and expreience </h1>
            <h1 className={style.color}>From Years</h1>
            <p>
              Want to grow your movies knowledge as a movies enthusiast? this is
              the perfect place!
            </p>
            <Link to="/movies">
              <button>Start now</button>
            </Link>
          </div>

          <div>
            <img src={img}></img>
          </div>
        </div>
      </div>
    </>
  );
}

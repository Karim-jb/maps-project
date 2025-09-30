import style from "../css/Clients.module.css";

import sony from "../media/Sony.png";
import imdb from "../media/IMDB.png";
import para from "../media/paramount.jpg";
import uni from "../media/universal.png";
import centry from "../media/20th-centry.svg";

export default function Clients() {
  return (
    <div className={style.clients}>
      <h1 className={style.h1}>Our Clients</h1>
      <p>We have been working with some Fortune clients</p>
      <div className={style.container}>
        <img src={sony} alt="sony pics"></img>
        <img src={imdb} alt="imdb pics"></img>
        <img src={para} alt="paramount pics"></img>
        <img src={uni} alt="universal pics"></img>
        <img src={centry} alt="20th-century pics"></img>
      </div>
    </div>
  );
}

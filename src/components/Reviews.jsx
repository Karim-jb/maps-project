import style from "../css/Reviews.module.css";
import star from "../media/icons/star.png";
import quote from "../media/icons/quotes.png";

export default function Reviews() {
  return (
    <>
      <h1 className={style.title}>Testemonials</h1>

      <div className={style.flex}>
        <div className={style.box}>
          <div className={style.mediaBox}>
            <h1>A Happy user</h1>
            <img src={quote}></img>
          </div>
          <div className={style.starFlex}>
            <img src={star}></img>
            <img src={star}></img>
            <img src={star}></img>
            <img src={star}></img>
            <img src={star}></img>
          </div>
          <div className={style.textBox}>
            <p>
              This app made exploring movies so easy and fun. The ui is smooth
              and everything just works perfectly!
            </p>
          </div>
          <h1>@Movies-Hub🧾</h1>
        </div>
        <div className={style.box}>
          <div className={style.mediaBox}>
            <h1>Beta user</h1>
            <img src={quote}></img>
          </div>
          <div className={style.starFlex}>
            <img src={star}></img>
            <img src={star}></img>
            <img src={star}></img>
            <img src={star}></img>
          </div>
          <div className={style.textBox}>
            <p>
              I was able to find hidden gems i`d never heard of. the design is
              clean and user friendly
            </p>
          </div>
          <h1>@Movies-Hub🧾</h1>
        </div>
      </div>
    </>
  );
}

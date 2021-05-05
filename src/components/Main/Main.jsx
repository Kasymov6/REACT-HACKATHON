import React from "react";
import "./Main.css";
import "../../components/Header/Header.css";
import videoMP4 from "../../assets/video/new-datejust-cover-video.webm";
// import videoMp4 from "../../assets/video/Rolex Submariner.mp4";
const Main = () => {
  return (
    <div>
      <div className="main-video">
        <video loop muted autoPlay className="fullscreen-bg__video">
          <source src={videoMP4} type="video/webm" />
        </video>
      </div>
      <h5 className="main-title">
      ROLEX ПРЕДСТАВЛЯЕТ СВОИ ПОСЛЕДНИЕ ТВОРЕНИЯ, В КОТОРЫХ ПРИМЕНЕНО ОРИГИНАЛЬНОЕ НОУ‑ХАУ.
      </h5>
      <p className="main-subTitle">Часы, которые зовут к исследованию земных недр и пределов Солнечной системы, покорению горных вершин и путешествию в дальние полярные территории. Часы, объединившие высокоточные технологии и мастерство часового искусства. Эти модели задуманы как приглашение к исследованию — географического, технического или эстетического характера.</p>
      <div className="main-video2">
        <video loop muted autoPlay className="fullscreen-bg__video">
          <source src={videoMP4} type="video/webm" />
        </video>
      </div>
    </div>
  );
};

export default Main;

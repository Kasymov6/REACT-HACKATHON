import React from "react";
import "./Partners.css";

const Partners = () => {
    return (
        <>
            <div className="contain">
                <div className="opis">
                    <h1 className="text">МИР ROLEX</h1>
                    <h2 className="text-h2">СПОРТ, ИСКУССТВО И ИСЛЕДОВАНИЯ</h2>
                </div>
                <div className="zagol">
                    <h3 className="h3-zag">
                        Вот уже более века часы Rolex сопровождают
                        целеустремленных исследователей во всех уголках планеты
                        – от высочайших горных вершин до океанских глубин.
                    </h3>
                    <p className="pag">
                        Сегодня при содействии Rolex проходят самые престижные
                        соревнования в таких дисциплинах, как гольф, парусный
                        спорт, теннис, автомобильный спорт, турниры по конкуру.
                        Rolex вносит уникальный и действенный вклад в мировую
                        культуру, науку и исследования.
                    </p>
                    <p>Rolex и спонсорская деятельность</p>
                    <img
                        className="img-all"
                        src="https://content.rolex.com/dam/world-of-rolex/hub/hub-watchmaking-sponsoring_ao18jb_853.jpg?imwidth=1140"
                        alt=""
                    />
                    <button className="btn">Подробнее</button>
                    <p className="pag">Rolex и партнеры</p>
                    <p>Rolex и спорт</p>
                    <img
                        className="img-all"
                        src="https://content.rolex.com/dam/world-of-rolex/hub/hub-wor_tennis_rg19ac_0055.jpg?imwidth=1710"
                        alt=""
                    />
                    <button className="btn">Подробнее</button>
                    <p className="pag">Rolex и партнеры</p>

                    <p>Наука и исследования</p>
                    <img
                        className="img-all"
                        src="https://content.rolex.com/dam/world-of-rolex/hub/hub-wor_exploration_cory_richards_ng_cc69_1587746.jpg?imwidth=1710"
                        alt=""
                    />
                    <button className="btn">Подробнее</button>
                    <p className="pag">Rolex и исследования</p>
                    <img
                        className="img-all"
                        src="https://content.rolex.com/dam/world-of-rolex/hub/hub-wor-rae-rae19gp-bm-001-rvb-r.jpg?imwidth=1140"
                        alt=""
                    />
                    <button className="btn">Подробнее</button>
                    <p className="pag">
                        Лауреаты премии ROLEX 2019 на rolex.org
                    </p>
                </div>
            </div>
        </>
    );
};

export default Partners;

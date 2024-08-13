import { useNavigate } from "react-router-dom";
import style from "./news.module.css";
import { useEffect } from "react";

const NEWS_HEADLINES = "Tiêu đề tin tức";

export default function News() {
  const navigate = useNavigate();
  const handleNavigation = (URL) => {
    navigate(URL);
  };
  useEffect(() => {
    window.scrollTo(0,0)
},[])
  return (
    <>
      <div className={style.news}>
        <div className={style.box}>
          <div className={style.nav}>Home/News</div>
          <div className={style.newsHeadline}>the lastest news</div>
          <div className={style.list}>
            {Array(5)
              .fill(null)
              .map((data, index) => (
                <div
                  onClick={() => handleNavigation(`/${NEWS_HEADLINES}`)}
                  key={index}
                  className={style.card}
                >
                  <div className={style.cardImage}>
                    <img alt="card image" src="background/bg5.png" />
                  </div>
                  <div className={style.cardContent}>
                    <div className={style.dateTime}>July 8th</div>
                    <div className={style.title}>title of news</div>
                    <div className={style.describe}>
                      helllllllllllllllllllllllllllllllo
                    </div>
                  </div>
                  <div className={style.cardAction}>
                    <div className={style.actions}>
                      <div className={style.views}>
                        <i>
                          <img src="icon/View_light.png" />
                        </i>
                        <span>0</span>
                      </div>
                      <div className={style.btn}>read more</div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

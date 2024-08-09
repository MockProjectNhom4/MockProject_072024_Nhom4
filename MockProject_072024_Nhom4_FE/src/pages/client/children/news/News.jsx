import style from "./news.module.css";
export default function News() {
  return (
    <>
      <div className={style.news}>
        <div className={style.nav}>Home/News</div>
        <div className={style.newsHeadline}>the lastest news</div>
        <div className={style.list}>
          {Array(5)
            .fill(null)
            .map((data, index) => (
              <div className={style.card}>
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
    </>
  );
}

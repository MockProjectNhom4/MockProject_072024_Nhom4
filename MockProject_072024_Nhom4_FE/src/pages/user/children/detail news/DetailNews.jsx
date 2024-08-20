import { useEffect } from "react";
import style from "./detailNew.module.css";
export default function DetailNews() {
  useEffect(() => {
    const height = document.querySelector(`.${style.contents}`).offsetHeight;
    document.getElementById("box").style.height = `${height - 112}px`;
  });
  return (
    <>
      <div className={style.detailNews}>
        <div
          className={style.headline}
          style={{ backgroundImage: `url(background/bg5.png)` }}
        >
          {/* tiêu đề tin tức */}
          <div className={style.title}>
            Managing Risk: How Executive Protection Helps Mitigate Threats
          </div>
        </div>
        <div className={style.newsContent}>
          <div id="box" className={style.box}>
            <div className={style.contents}>
              {/* nội dung tin tức */}
              <div className={style.content}>
                Risk management has become a crucial aspect of corporate
                strategy in today’s dynamic and unpredictable business
                environment. Organizations must mitigate potential threats to
                safeguard their assets, reputation, and business continuity. One
                key tool in managing risk effectively is executive protection.
                This comprehensive approach not only ensures the safety of
                high-level executives but also helps mitigate threats and keep
                the organization secure.
                <br />
                <br />
                Understanding Executive Protection Executive protection refers
                to the measures taken to protect individuals who hold
                high-ranking positions within an organization. These individuals
                are often targeted due to their influence, access to sensitive
                information, or their overall impact on the organization’s
                operations. The ultimate goal of executive protection services
                is to provide a secure environment for executives to conduct
                their business activities, both domestically and
                internationally. This involves implementing a range of security
                protocols, employing trained professionals, and utilizing
                advanced technologies to counter potential risks. But what
                exactly does executive protection entail? Let’s delve deeper
                into the topic to gain a comprehensive understanding.
              </div>
              {/* tác giả tin tức */}
              <div className={style.author}>
                <div className={style.avtAuthor}>
                  <img alt="avatar author" src="author.png" />
                </div>
                <div className={style.nameAuthor}>Norman</div>
              </div>
              {/* phần bình luận */}
              <div className={style.comments}>
                <h1>Leave a replay</h1>
                <div className={style.data}>
                  <div>0 comments</div>
                  <div>
                    sort by
                    <select>
                      <option>Newest</option>
                      <option>Oldest</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div className={style.lists}>
                    <div className={style.comment}>
                      <div className={style.info}>
                        <div className={style.avtUser}>
                          <img alt="avt" src="author.png" />
                        </div>
                        <div className={style.infoUser}>
                          <div className={style.nameUser}>Name user</div>
                          <div className={style.contentCmt}>
                            content
                            cmtdfasdfasdljhfaskjdhfkajlshdfkljasdhfkljasdhfkasjdfhaskjdfgaskjdfgasjdfgajskhdfgajkhsdfgasjkdhfgasjhdfgasjhdfgajsdhgf
                          </div>
                          <ul className={style.navAction}>
                            <li>Like</li>
                            <li>Reply</li>
                          </ul>
                        </div>
                      </div>
                      <div>haha</div>
                    </div>
                  </div>
                  <div className={style.inputComment}>
                    <img alt="img" src="author.png" />
                    <input type="text" placeholder="Add a comment" />
                  </div>
                </div>
              </div>
            </div>

            {/* about us */}
            <div className={style.about}>
              <h1>About us</h1>
              <p>
                After five decades serving in the industry, MPS Security has
                developed a team of elite experts focused on cultivating
                protection services that are unparalleled to that of industry
                standards.
              </p>
              <h1>recent posts</h1>
              <div className={style.recentPosts}>
                {Array(4)
                  .fill(null)
                  .map((data, index) => (
                    <div key={index} className={style.recentPost}>
                      <div className={style.illustration}>
                        <img alt="img" src="background/bg5.png" />
                      </div>
                      <div className={style.titleRecentPost}>
                        <div className={style.contentRecentPost}>
                          Managing Risk: How Executive Protection Helps Mitigate
                          Threats
                        </div>
                        <div>Read more</div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

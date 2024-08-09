import style from "./footer.module.css";
export default function Footer() {
  return (
    <>
      <div className={style.navItem}>
        <ul className={style.items}>
          <li className={style.title}>useful links</li>
          <li>Home</li>
          <li>News</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Recruitment</li>
        </ul>

        <ul className={style.items}>
          <li className={style.title}>More Info</li>
          <li>
            <i>
              <img src={"icon/Subtract.png"} alt="icon" />
            </i>
            <span>new york</span>
          </li>

          <li>
            <i>
              <img src={"icon/Vector 189.png"} alt="icon" />
            </i>
            <span>xxx.xxx.xxx</span>
          </li>

          <li>
            <i>
              <img
                style={{ width: "21px" }}
                src={"icon/Message_fill.png"}
                alt="icon"
              />
            </i>
            <span>Email@gmail.com</span>
          </li>
        </ul>

        <ul className={style.items}>
          <li className={style.title}>find us on</li>
          <ul className={style.itemsSocial}>
            <li>
              <i>
                <img src="icon/Social Icons.png" alt="icon" />
              </i>
            </li>
            <li>
              <i>
                <img src="icon/Social Icons (3).png" alt="icon" />
              </i>
            </li>
            <li>
              <i>
                <img src="icon/Social Icons (4).png" alt="icon" />
              </i>
            </li>
            <li>
              <i>
                <img src="icon/Social Icons (5).png" alt="icon" />
              </i>
            </li>
          </ul>
        </ul>
      </div>
    </>
  );
}

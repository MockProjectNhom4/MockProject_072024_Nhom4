import style from './navbar.module.css'
export default function Navbar() {
    return(
        <>
            <div className={style.navbar}>
                <div className={"col col-l-2"}>
                    <div className={style.logo}>
                        <img alt={"logo"} src={"logo.png"}/>
                    </div>
                </div>

                <div className={"col col-l-10"}>
                    <ul className={style.navItem}>
                        <li>home</li>
                        <li>about us</li>
                        <li>services</li>
                        <li>recruitment</li>
                        <li>contact us</li>
                        <li>
                            <button>Login</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
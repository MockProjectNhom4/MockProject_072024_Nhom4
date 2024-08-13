import style from "./Request.module.css";



function Request() {
  return (
    <>
      <div
        className={style.banner}
        style={{ backgroundImage: `url(background/bg5.png)`  }}
      >
    
        <div className={style.slogan}>Request page. Request page</div>
      </div>
      
    </>
  );
}

export default Request;

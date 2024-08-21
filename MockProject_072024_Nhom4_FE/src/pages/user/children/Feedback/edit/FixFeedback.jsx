import style from "./FixFeedback.module.css";

export default function EditFeedback() {
  return (
    <>
     {/* header */}
        <div className={style.addfeedback}>
            <h1>Edit FeedBack</h1>
            <div className={style.datafeedback}>
                <p>Id Contract</p>
                <select name="idcontract" className={style.idcontract}>
                    <option value="3">HD0003</option>
                </select>
            </div>
        
            <div className={style.datafeedback}>
                <p>Evaluae</p>
                <select name="evaluate" className={style.evaluate}>
                    <option value="1">Good</option>
                    <option value="2">Normal</option>
                    <option value="3">Bad</option>
                </select>
            </div>

            <div className={style.datafeedback}>
                <p>Message:</p>
                <input type="text" value={"tesst sadsajdh kjashd kad"}/>
            </div>

            <div className={style.datafeedback}>
                <button>save</button>
            </div>
        </div>
    </>
  );
}

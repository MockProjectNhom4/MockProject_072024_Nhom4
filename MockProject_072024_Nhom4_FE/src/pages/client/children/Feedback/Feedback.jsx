import style from "./Feedback.module.css";

export default function Feedback() {
  return (
    <>
      <div className={style.feedback}>
      <div className={style.feedbackheader}>
        <div className={style.seach}>
          <input type="text" name="" id=""/>
          <div>
            <img src="../background/feedback_seach.png" alt=""/>
          </div>
        </div>
    </div>
    <div className={style.feedbackbody}>
      <h1>Feedback List</h1>
      <div className={style.table}>
        <table>
          <tr>
            <th>ID Contract</th>
            <th>Service</th>
            <th>Contract value</th>
            <th>start date</th>
            <th>End date</th>
            <th>rating</th>
            <th></th>
          </tr>
          
          {Array(15)
            .fill(null)
            .map((data, index) => (
               <tr>
                <td>CT0002</td>
                <td>Mariaádasdasd ádasdas ád ádasd </td>
                <td>Germa ádasd ád ád ád ád âsd ny</td>
                <td>09/08/2024</td>
                <td>09/08/2024</td>
                <td>rating2</td>
                <td>
                    <div>
                      <button>Sửa</button>
                      <button>Xóa</button>
                    </div>
                </td>
              </tr>
            ))}

        
         
        </table>
      </div>
    </div>
    </div>
    </>
  );
}

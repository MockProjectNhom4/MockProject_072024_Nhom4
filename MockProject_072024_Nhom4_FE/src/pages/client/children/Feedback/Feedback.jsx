import style from "./Feedback.module.css";

export default function Feedback() {
  return (
    <>
     {/* header */}
     <div className={style.headfeedback}></div>
     <div className={style.feedback}>
      <h1>Feedback</h1>

      <div className={style.feedback_seach}>
        <div className={style.seach}>
          <input type="text" name="" id="" placeholder="Search"/>
          <div>
            <img src="../icon/feedback_seach.png" alt=""/>
          </div>
        </div>
      </div>

      <div className={style.feedback_create}>
        <h2>Feedback List</h2>
        <button>Create</button>
      </div>

      <div className={style.table}>
        <table>
          
          
          <tr>
            <th>ID Contract</th>
            <th>Service</th>
            <th>Cost</th>
            <th>start time</th>
            <th>End time</th>
            <th>rate</th>
            <th>Action</th>
          </tr>

          {Array(5)
            .fill(null)
            .map((data, index) => (
                <tr>
                <td>HD00001</td>
                <td>Corporate security</td>
                <td>$2000</td>
                <td>09/08/2024</td>
                <td>09/08/2024</td>
                <td>4/5</td>
                <td>
                    <div className={style.action}>
                      <img src="../icon/feedback_edit.png" alt=""/>
                      <img src="../icon/feedback_dell.png" alt=""/>
                    </div>
                </td>
              </tr>
            ))}


          <tr>
            <td colspan="7" className={style.listpage_bottom}>
              <div className={style.feeback_listpage}>
                <div className={style.page}>
                  <img src="../icon/feedbacl_expand.png" />
                  <span>1</span>
                </div>
                <div className={style.listpage}>
                  <select name="" id="">
                    <option value="">10 / page</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
            </td>
          </tr>
        
         
        </table>
      </div>
    </div>
    </>
  );
}

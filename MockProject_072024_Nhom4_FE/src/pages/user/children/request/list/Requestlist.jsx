import style from "./Requestlist.module.css";


const items = [
  { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
]

function ListRequest() {
  return (
    <>
      {/* header */}
      <div className={style.request}>
        <h1>Request</h1>

        <div className={style.request_search}>
          <div className={style.seach}>
            <input type="text" name="" id="" placeholder="Search" />
            <div>
              <svg class="h-16 w-16 text-black" fill="none" viewBox="0 0 24 20" stroke="currentColor" >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>

            </div>
          </div>
        </div>



        <div className={style.request_table}>
          <div className={style.request_create}>
            <h2>Request List</h2>
            <button>Create</button>
          </div>

          <div className={style.request_border_table}>
            <table>
              <tr>
                <th>ID</th>
                <th>Full Name</th>
                <th>Phone</th>
                <th>Mail</th>
                <th>Subject</th>
                <th>Service</th>
                <th>Message</th>
                <th>Creation time</th>
                <th>Status</th>
              </tr>

              {Array(5)
                .fill(null)
                .map((data, index) => (
                  <tr>
                    <td>1</td>
                    <td>John Smith</td>
                    <td>0130xxxx</td>
                    <td>abc@example.com</td>
                    <td>Invidual</td>
                    <td>Service XXX</td>
                    <td>Message</td>
                    <td>Creation Time</td>
                    <td>Status</td>
                  </tr>
                ))}


              <tr>
                <td colspan="10" className={style.listpage_bottom}>
                  <div className={style.request_listpage}>
                    <div className={style.page}>


                      <svg class="h-max w-10 text-black" viewBox="0 0 18 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <polyline points="15 18 9 12 15 6" /></svg>

                      <div className={style.page_nunber}>1</div>

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


      </div>

    </>
  );
}

export default ListRequest;

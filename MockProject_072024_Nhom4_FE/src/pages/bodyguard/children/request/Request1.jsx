import './Request1.css' 

export default function Request1() {
    return(
        <div className="MainSection">
            <div className="TitlePage">
                <h1>Request Day Off</h1>
            </div>
            <div className="DayOffForm">
                <form className='DayOff'>
                    <div className="IdInput">
                        <h3>ID:</h3>
                        <input type="text" name="ID" className='Inp1'/>
                    </div>
                    <div className="NameInput">
                        <h3>Name:</h3>
                        <input type="text" name="name" className='Inp1'/>
                    </div>
                    <div className="ReasonInput">
                        <h3>Reasons: </h3>
                        <textarea
                            rows="7"
                            cols="50"
                        />
                    </div>
                    <div className="Time">
                        <h3>From: 
                            <input type="date" name="from"/>
                        </h3>
                        <h3>To: 
                            <input type="date" name="from"/>
                        </h3>
                    </div>
                    <button type='submit' className='SubmitBtn'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
import femaleProfile from "./images/femaleProfile.jpg"
import maleProfile from "./images/maleProfile.jpg"

const Employees = ({ employees, handleTeamSelect, selectedTeam, handleEmployeeCardClick }) => {

  return (
    <main className="container px-5">
      <div className="row justify-content-center">
        <div className="col-8">
          <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelect}>
            <option value="TeamA">Team A</option>
            <option value="TeamB">Team B</option>
            <option value="TeamC">Team C</option>
            <option value="TeamD">Team D</option>
          </select>
        </div>
      </div>
      <div className="row">
        {
          employees.map((emp) => (
            <div className="col-lg-4 col-sm-6 my-3">
              <div key={emp.ame} id={emp.id} className={(emp.teamName === selectedTeam ? "card standout" : "card")} style={{ cursor: "pointer" }} onClick={handleEmployeeCardClick}>
                {(emp.gender === "female") ? <img src={femaleProfile} className="card-img-top" alt="femaleProfileImg" /> : <img src={maleProfile} className="card-img-top" alt="maleProfileImg" />}
                <div className="card-body">
                  <h5 className="card-title">Full Name: {emp.fullName}</h5>
                  <p className="card-text"><b>Employee Designation: </b>{emp.designation}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </main>
  )
}

export default Employees;
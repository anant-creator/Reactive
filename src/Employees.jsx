import femaleProfile from "./images/femaleProfile.jpg"
import maleProfile from "./images/maleProfile.jpg";
import Teams from "./Teams.jsx";


const Employees = ({ employees, handleTeamSelect, selectedTeam, handleEmployeeCardClick }) => {

  return (
    <main className="container px-5">
      <div className="row justify-content-center">
        <div className="col-8">
          <Teams selectedTeam={selectedTeam} handleTeamSelect={handleTeamSelect} />
        </div>
      </div>
      <div className="row">
        {
          employees.map((emp) => (
            
          ))
        }
      </div>
    </main>
  )
}

export default Employees;
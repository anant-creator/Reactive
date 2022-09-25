import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";

const TeamMemberCard = ({ employee, selectedTeam, handleEmployeeCardClick }) => {
  return (
    <div className="col-lg-4 col-sm-6 my-3">
      <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam ? "card standout" : "card")} style={{ cursor: "pointer" }} onClick={handleEmployeeCardClick}>
        {(employee.gender === "female") ? <img src={femaleProfile} className="card-img-top" alt="femaleProfileImg" /> : <img src={maleProfile} className="card-img-top" alt="maleProfileImg" />}
        <div className="card-body">
          <h5 className="card-title">Full Name: {employee.fullName}</h5>
          <p className="card-text"><b>Employee Designation: </b>{employee.designation}</p>
        </div>
      </div>
    </div>
  )
}

export default TeamMemberCard;
const TeamMemberCard = () => {
  return (
    <div className="col-lg-4 col-sm-6 my-3">
      <div key={emp.id} id={emp.id} className={(emp.teamName === selectedTeam ? "card standout" : "card")} style={{ cursor: "pointer" }} onClick={handleEmployeeCardClick}>
        {(emp.gender === "female") ? <img src={femaleProfile} className="card-img-top" alt="femaleProfileImg" /> : <img src={maleProfile} className="card-img-top" alt="maleProfileImg" />}
        <div className="card-body">
          <h5 className="card-title">Full Name: {emp.fullName}</h5>
          <p className="card-text"><b>Employee Designation: </b>{emp.designation}</p>
        </div>
      </div>
    </div>
  )
}

export default TeamMembers;
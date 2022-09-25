import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {


  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

  function groupTeamMembers() {
    const teams = [];

    var teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA');
    var teamA = { id: uuidv4(), team: 'TeamA', members: teamAMembers, collapsed: selectedTeam === 'TeamA' ? false : true };
    teams.push(teamA);

    var teamBMembers = employees.filter((employee) => employee.teamName === 'TeamB');
    var teamB = { id: uuidv4(), team: 'TeamB', members: teamBMembers, collapsed: selectedTeam === 'TeamB' ? false : true };
    teams.push(teamB);

    var teamCMembers = employees.filter((employee) => employee.teamName === 'TeamC');
    var teamC = { id: uuidv4(), team: 'TeamC', members: teamCMembers, collapsed: selectedTeam === 'TeamC' ? false : true };
    teams.push(teamC);

    var teamDMembers = employees.filter((employee) => employee.teamName === 'TeamD');
    var teamD = { id: uuidv4(), team: 'TeamD', members: teamDMembers, collapsed: selectedTeam === 'TeamD' ? false : true };
    teams.push(teamD);
    console.log(teamC)
    return teams;
  }

  function handleTeamClick(event) {
    var newGroupedData = groupedEmployees.map((groupedData) => groupedData.team === event.currentTarget.id ? { ...groupedData, collapsed: !groupedData.collapsed } : groupedData);
    setGroupedData(newGroupedData);
    setTeam(event.currentTarget.id);
  }

  return (
    <main className="container my-4">
      {
        groupedEmployees.map((item) => {
          return (
            <div key={item.id} className="card mt-2" style={{ cursor: "pointer" }}>
              <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
                Team Name: {item.team}
              </h4>
              <div id={'collapse_' + item.team} className={item.collapsed === true ? "collapse" : ""}>
                <hr />
                {
                  item.members.map(member => {
                    return (
                      <>
                        <h5 className="card-title mt-2">
                          <span className="text-dark">Full Name: {member.fullName}</span>
                        </h5>
                        <p>Designation: {member.designation}</p>
                      </>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </main >
  )
}

export default GroupedTeamMembers;
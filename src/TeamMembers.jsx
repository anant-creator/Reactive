const TeamMembers = ({ employees, handleEmployeeCardClick, SelectedTeams }) => {
  return (
    employees.map((employee) => {
      <TeamMemberCard handleEmployeeCardClick={handleEmployeeCardClick} selectedTeam={selectedTeam} />
    })
  )
}

export default TeamMembers;
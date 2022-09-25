const Header = ({ selectedTeam, teamMemberCount }) => {

  return (
    <header className="container my-4">
      <h1>Team Member Allocation</h1>
      <h3>{selectedTeam} has {teamMemberCount} {teamMemberCount > 1 ? "members" : "member"}</h3>
    </header>
  )
}

export default Header;
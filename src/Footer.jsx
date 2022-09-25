const Footer = () => {

  const today = new Date();
  return (
    <footer className="container my-4">
      <h4>Team managing software - {today.getFullYear()}</h4>
    </footer>
  )
}

export default Footer;
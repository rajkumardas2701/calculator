const NavBar = () => (
  <nav>
    <h1 data-testid="navBar-header">Math Magicians</h1>
    <div className="rightNav" data-testid="navBar-test">
      <div><a href="/">Home</a></div>
      <div><a href="/calculator">Calculator</a></div>
      <div><a href="/quote">Quotes</a></div>
    </div>
  </nav>
);

export default NavBar;

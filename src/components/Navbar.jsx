import "./Navbar.css"

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <a href="/">Shhh Store</a>
          </div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
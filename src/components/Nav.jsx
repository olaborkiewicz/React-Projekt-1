const Nav = () => {
  return (
    <nav className="nav_bar">
      <div className="container container-row">
        <a href="#main_section" className="company">
          moja firma
        </a>
        <ul className="menu">
          <li>
            <a href="#about" className="nav_li">
              o nas
            </a>
          </li>
          <li>
            <a href="#offer" className="nav_li">
              oferta
            </a>
          </li>
          <li>
            <a href="#contact" className="disabled_items">
              kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;

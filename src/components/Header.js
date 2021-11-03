import NavBar from "./NavBar";

const Header = () => {
  return (
    <header>
      <div className="header-wrapper">
        <img
          alt="logo"
          src="https://martin-holland.github.io/assets/LogoWhite.svg"
        />
        <h1>Animals App</h1>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;

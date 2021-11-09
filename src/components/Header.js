import NavBar from "./NavBar";

const Header = () => {
  return (
    <header>
      <h1>Animals App</h1>
      <div className="header-wrapper">
        <img
          alt="logo"
          src="https://martin-holland.github.io/assets/LogoWhite.svg"
        />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;

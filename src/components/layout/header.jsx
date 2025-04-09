import logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <header className="p-4 w-full max-w-6xl mx-auto">
      {/* logo */}
      <div>
        <img src={logo} alt="Food Hut logo" />
      </div>

      <nav></nav>

      {/* hamburger menu */}
      <div>
        <i class="ri-menu-line"></i>
      </div>
    </header>
  );
}

import logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <header className="p-4 w-full max-w-6xl mx-auto flex items-center justify-between">
      {/* logo */}
      <div>
        <img src={logo} alt="Food Hut logo" />
      </div>

      <nav></nav>

      {/* hamburger menu */}
      <div>
        <i class="ri-menu-line text-2xl"></i>
      </div>
    </header>
  );
}

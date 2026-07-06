import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-10 py-6 sticky top-0 z-50
  backdrop-blur-lg
  bg-white/5
  border-b border-white/10
  px-10 py-4">
<div className="flex items-center justify-between">
  <div className="flex items-center gap-3">
    <img
      src={logo}
      alt="NoteForge AI"
      className="w-10 h-10"
    />

    <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
      NoteForge AI
    </span>
  </div>

</div>
    </nav>
  );
}

export default Navbar;
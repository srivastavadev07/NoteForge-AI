import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <footer className="w-full mt-16 py-6 border-t border-white/10 text-center text-gray-400">
      <p>
        © 2026 DeepLearn AI • Built with ❤️ by{" "}
        <a
          href="https://github.com/srivastavadev07"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 font-semibold hover:text-purple-300 transition"
        >
          Devansh Srivastava
        </a>
      </p>
    </footer>
  );
}

export default Footer;
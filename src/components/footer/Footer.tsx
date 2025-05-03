import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-brandwheat text-darkceladon py-4 px-6 flex justify-between items-center">
      <p>2025 Urban Design Guide</p>
      <div className="flex space-x-4 ml-auto">
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-darkceladon hover:text-gray-400 text-2xl" />
        </a>
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-darkceladon hover:text-gray-400 text-2xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
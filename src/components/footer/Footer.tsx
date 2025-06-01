import { FaGithub, FaLinkedin } from "react-icons/fa"; 

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-white text-black py-1 px-10 flex justify-between items-center border-t border-black">
      <p style={{ fontFamily: "'Public Sans', sans-serif", fontWeight: 700 }}>2025 Urban Design Guide</p>
      <div className="flex space-x-4 ml-auto">
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-black hover:text-gray-500 text-2xl" />
        </a>
        
      </div>
    </footer>
  );
};

export default Footer;
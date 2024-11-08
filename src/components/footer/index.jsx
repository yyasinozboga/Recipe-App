import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-jet py-5 xl:p-10 flex flex-col items-center gap-3">
      <div
        className="flex items-center justify-center p-1 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <figure className="w-[60px] md:w-[60px]">
          <img src="/logo.png" alt="logo" className="size-full object-cover" />
        </figure>
        <h1 className="font-handlee text-3xl md:text-4xl text-white">
          find<span className="text-orange">Recipe.</span>
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-2 divide-white w-full lg:w-[40%]">
        <span className="text-battleship-gray font-medium hover:text-white duration-500">
          Recipe Glossary
        </span>
        <span className="text-battleship-gray font-medium hover:text-white duration-500">
          Press & Media
        </span>
        <span className="text-battleship-gray font-medium hover:text-white duration-500">
          Privacy Policy
        </span>
        <span className="text-battleship-gray font-medium hover:text-white duration-500">
          Terms & Conditions
        </span>
      </div>

      <div className="flex justify-center items-center gap-3 mt-3">
        <a
          href="https://www.facebook.com/?locale=tr_TR"
          target="_blank"
          className="social-media"
        >
          <FaFacebookSquare color="white" size={22} />
        </a>
        <a
          href="https://twitter.com/home"
          target="_blank"
          className="social-media"
        >
          <FaTwitter color="white" size={22} />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          className="social-media"
        >
          <FaInstagram color="white" size={22} />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          className="social-media"
        >
          <FaYoutube color="white" size={22} />
        </a>
        <a
          href="https://tr.pinterest.com/"
          target="_blank"
          className="social-media"
        >
          <FaPinterest color="white" size={22} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

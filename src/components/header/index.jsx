import {
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebookSquare,
} from "react-icons/fa";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="flex justify-center gap-5 p-3 md:p-5 bg-gray/20">
        <a
          href="https://www.facebook.com/?locale=tr_TR"
          target="_blank"
          className="text-gray text-xl"
        >
          <FaFacebookSquare />
        </a>
        <a
          href="https://twitter.com/home"
          target="_blank"
          className="text-gray text-xl"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          className="text-gray text-xl"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          className="text-gray text-xl"
        >
          <FaYoutube />
        </a>
      </div>

      <div
        className="flex w-[280px] mx-auto justify-center items-center p-3 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <figure className="w-[40px] md:w-[80px]">
          <img src="/logo.png" alt="logo" className="size-full object-cover" />
        </figure>
        <h1 className="font-handlee text-2xl md:text-4xl">
          find<span className="text-orange">Recipe.</span>
        </h1>
      </div>

      <Navbar />
    </header>
  );
};

export default Header;

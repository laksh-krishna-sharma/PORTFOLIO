import logo from '../assets/Lk_logo.svg';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

function Navbar(): JSX.Element {
  return (
    <>
      <nav className="mb-20 flex justify-between items-center py-6">
        <div className="flex flex-shrink-0 items-center">
          <img className="mx-2 w-[80px]" src={logo} alt="logo" />
        </div>
        <div className="flex item-center m-6 justify-center gap-4 text-2xl">
          <FaLinkedin />
          <FaGithub />
          <FaSquareXTwitter />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
import { navItems } from "../configuration/NavbarConfig";
import NavbarItem from "./NavbarItem";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
const Header = () => {
  return (
    <div>
      <header className=" w-full ">
        <nav className=" w-full text-white py-1 px-3 flex flex-col  justify-between lg:flex-row ">
          <div className="logo my-3 text-red-600 font-extrabold font-serif text-4xl">
            LETSWATCH
          </div>
          <ul className=" flex flex-row justify-around my-3">
            {navItems.map((item) => (
              <NavbarItem
                title={item.title}
                url={item.url}
                key={item.id}
                className=" text-white"
              />
            ))}
          </ul>
          <div className="flex justify-around my-3">
            <div className="search">
              <AiOutlineSearch className=" text-2xl text-[#ff7a7a] mx-2" />
            </div>
            <div className="notifications">
              <BsBell className=" text-2xl text-[#ffc874] mx-2" />
            </div>
            <div className="profile">
              <MdAccountCircle className=" text-2xl mx-2" />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;

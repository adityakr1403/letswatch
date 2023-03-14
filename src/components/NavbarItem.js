import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavbarItem = ({ props, title, url, className }) => {
  const [visible, setVisible] = useState("hidden");
  const changeOnHover = (isHover) => {
    isHover === true ? setVisible("visible") : setVisible("hidden");
  };
  return (
    <li className={className + " flex flex-col mx-3 "}>
      <Link
        to={url}
        onMouseOver={() => changeOnHover(true)}
        onMouseLeave={() => changeOnHover(false)}
      >
        {title}
      </Link>
      <div
        className=" h-0.5 bg-red-500 mt-2"
        style={{ visibility: visible }}
      ></div>
    </li>
  );
};

export default NavbarItem;

import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import Logo from "../asstes/logo.svg";

import { SlMenu } from "react-icons/sl";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const navClass = active ? "nav active" : "nav";

  const handleClick = () => {
    setActive((active) => !active);
  };

  return (
    <nav className={navClass}>
      <Link href="/" className="nav__logo">
        <Image src={Logo} alt="" width={60} height={60} />
        <span className="nav__logo-txt">rentPurpose</span>
      </Link>
      <button className="nav__burger" onClick={handleClick}>
        {!active ? <SlMenu /> : <AiOutlineClose />}
      </button>
      <ul className="nav__list">
        <li className="nav__item">
          <Link href="/" onClick={handleClick}>
            home
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/search" onClick={handleClick}>
            search
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/search?purpose=for-rent" onClick={handleClick}>
            rent property
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/search?purpose=for-sale" onClick={handleClick}>
            buy property
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

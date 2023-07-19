import React from "react";
import Image from "next/image";
import Logo from "/public/panaverse-logo.webp";
import Link from "next/link";
import Wrapper from "@/components/shared/Wrapper";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white backdrop-blur bg-opacity-90">
      <Wrapper>
        <div className="flex justify-between items-center py-4">
          <div>
            <Link href={"/"}>
              <Image src={Logo} alt="logo-image" height={100} width={100} />
            </Link>
          </div>
          <ul className="flex space-x-8 font-medium">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/courses"}>Courses</Link>
            </li>
          </ul>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;

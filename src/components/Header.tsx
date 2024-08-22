'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleHamburger = () => {
    setIsOpened(!isOpened);
  };

  useEffect(() => {

  }, [isOpened])

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold color-secondary">
          <Link href="/">REIVAX</Link>
        </div>
        <div className='flex items-center justify-between space-x-16'>
          <div className={'menu ' + (isOpened ? 'opened' : '')}>
            <button className='menu-hamburger' onClick={() => toggleHamburger()}>
              {
                isOpened ?
                  <IoCloseOutline size={24} /> :
                  <RxHamburgerMenu size={24} />
              }
            </button>
            <nav className={"flex space-x-4"}>
              <Link href="quem-somos" className="text-gray-800 hover:text-blue-600 transition duration-300">Quem Somos</Link>
              <Link href="servicos" className="text-gray-800 hover:text-blue-600 transition duration-300">Serviços</Link>
              <Link href="/#galeria" className="text-gray-800 hover:text-blue-600 transition duration-300">Galeria</Link>
              <Link href="contato" className="text-gray-800 hover:text-blue-600 transition duration-300">Contato</Link>
            </nav>
          </div>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a
              href="https://instagram.com/seuperfil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://facebook.com/seuperfil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition duration-300"
            >
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
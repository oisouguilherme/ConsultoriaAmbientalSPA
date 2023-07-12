"use client";
import Image from "next/image";

import { useState } from "react";

import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="z-50 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="cursor-pointer ">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo Goistore"
              width={200}
              height={100}
              className="w-44"
            />
          </Link>
        </div>
        <div className="lg:hidden">
          <div
            className={`fixed top-0 left-0 right-0 bottom-0 z-30 bg-black opacity-50 ${
              isOpen ? "block" : "hidden"
            }`}
            onClick={toggleMenu}
          ></div>
          <div
            className={`fixed top-0 right-0 bottom-0 bg-white z-40 w-64 transform transition-transform ease-in-out duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <ul className="p-8 space-y-4 text-2xl">
              <li className="cursor-pointer text-green-900 font-medium duration-300">
                <Link href="/">Página Inicial</Link>
              </li>
              <li className="cursor-pointer text-green-900 font-medium duration-300">
                <Link href="/sobre">Sobre Nós</Link>
              </li>
              <li className="cursor-pointer text-green-900 font-medium duration-300">
                <Link onClick={toggleMenu} href="/projetos">
                  Projetos
                </Link>
              </li>
              <li className="cursor-pointer text-green-900 font-medium duration-300">
                <Link onClick={toggleMenu} href="/noticias">
                  Noticias
                </Link>
              </li>
              <li className="cursor-pointer text-green-900 font-medium duration-300">
                <Link onClick={toggleMenu} href="/contato">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:block">
          <ul className="flex space-x-12 font-medium text-center items-center text-lg">
            <li className="cursor-pointer duration-300">
              <Link href="/">Página Inicial</Link>
            </li>
            <li className="cursor-pointer duration-300">
              <Link href="/sobre">Sobre Nós</Link>
            </li>
            <li className="cursor-pointer duration-300">
              <Link href="/projetos">Projetos</Link>
            </li>
            <li className="cursor-pointer duration-300">
              <Link href="/noticias">Noticias</Link>
            </li>
            <li className="cursor-pointer duration-300">
              <Link href="/contato">Contato</Link>
            </li>
          </ul>
        </div>
        <div className="hamburger lg:hidden" onClick={toggleMenu}>
          <span className="block w-6 h-1 bg-black mb-1"></span>
          <span className="block w-6 h-1 bg-black mb-1"></span>
          <span className="block w-6 h-1 bg-black"></span>
        </div>
      </div>
    </section>
  );
}

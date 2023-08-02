import logoPage from '../../assets/logo.svg'
import { useState , useEffect } from 'react';

export const NavBar = () => {

  const [navbarBg, setNavbarBg] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 700; // Punto específico donde quieres que cambie el fondo

      if (scrollY > threshold) {
        setNavbarBg('#F2FAFF'); // Cambiar el color de fondo cuando se supera el punto específico
      } else {
        setNavbarBg('transparent'); // Volver al color de fondo original si se encuentra por debajo del punto específico
      }
    };

    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 


  return (
    <header 
    style={{ backgroundColor: navbarBg }}
      className="transition-colors duration-700 flex z-50 backdrop-blur backdrop-filter bg-opacity-75 fixed font-body justify-between items-center bg-transparent backdrop:blur-sm w-full h-[65px] px-20">
        <section>
            <img src={logoPage} className="w-24" />
        </section>
        <ul className="flex display-block gap-14 pr-10 ">
            <li><a className="text-black duration-500  hover:text-blue-900 transition-all font-medium"  href="">Home</a></li>
            <li><a className="text-black duration-500  hover:text-blue-900 transition-all font-medium" href="">About</a></li>
            <li><a className="text-black duration-500  hover:text-blue-900 transition-all font-medium" href="">Products</a></li>
            <li><a className="text-black duration-500  hover:text-blue-900 transition-all font-medium" href="">Blog</a></li>
            <li><a className="text-black duration-500  hover:text-blue-900 transition-all font-medium" href="">Contact</a></li>
        </ul>
    </header>
  )
}

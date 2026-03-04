import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { TopNavBarMap } from "../../utils/mapping/TopNavBarMap";

export default function TopNavBar() {
  const navigate = useNavigate();
  const [actualIndex, setActualIndex] = useState<number>(1);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(window.scrollY);
  const touchTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 40) {
        setShowNav(false); // Scrolling down
      } else {
        setShowNav(true); // Scrolling up
      }
      lastScrollY.current = currentScrollY;
    };

    const handleTouch = () => {
      setShowNav(true);
      if (touchTimeout.current) clearTimeout(touchTimeout.current);
      touchTimeout.current = setTimeout(() => setShowNav(false), 2000);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouch);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouch);
      if (touchTimeout.current) clearTimeout(touchTimeout.current);
    };
  }, []);

  const handleNavigation = (index: number, path: string) => {
    setActualIndex(index);
    navigate(path);
  };

  return (
    <nav
      className={`w-screen h-16 flex items-center justify-between px-6 shadow-md rounded-md fixed top-0 left-0 z-50 transition-transform duration-300 backdrop-blur-md ${showNav ? 'translate-y-0' : '-translate-y-20'}`}
    >
      {/* Logo / Brand */}
      <div className="text-white font-semibold tracking-wide flex items-center gap-2">
        <img src={Logo} className="md:size-20 size-15" />
        <h1 className="text-xl md:text-2xl font-bold dmc-font hidden sm:block">Johandry Luna</h1>
      </div>

      {/* Links */}
      <ul className="flex items-center gap-6 text-zinc-300">
        {TopNavBarMap.map((item) => (
          <li
            key={item.id}
            onClick={() => handleNavigation(item.id, item.path)}
            role="button"
            tabIndex={0}
            className={`hover:text-red-600 ${item.id == actualIndex ? 'text-red-600' : ''} cursor-pointer transition-colors dmc-font text-xl justify-center items-center flex`}
          >
            {item.label}
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="flex items-center gap-4 px-12">
        <span className="hover:text-red-600 cursor-pointer transition-colors dmc-font text-2xl">Jackpot</span>
      </div>
    </nav>
  );
}


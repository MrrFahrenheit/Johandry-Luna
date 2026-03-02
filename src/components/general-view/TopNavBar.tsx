import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { TopNavBarMap } from "../../utils/mapping/TopNavBarMap";
import { useState } from "react";

export default function TopNavBar() {
  const navigate = useNavigate();
  const [actualIndex, setActualIndex] = useState<number>(1);
  
  const handleNavigation = (index: number, path: string) => {
    setActualIndex(index);
    navigate(path);
  }

  return (
    <nav className="w-screen h-16 flex items-center justify-between px-6 shadow-md  rounded-md fixed">
      
      {/* Logo / Brand */}
      <div className="text-white font-semibold tracking-wide flex items-center gap-2">
        <img src={Logo} className="md:size-20 size-15" />
        <h1 className="text-xl md:text-2xl font-bold dmc-font">Johandry Luna</h1>
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


import {
  Bell,
  Bolt,
  Handshake,
  HomeIcon,
  InfoIcon,
  LogOut,
  Map,
  PhoneCall,
  User2,
} from "lucide-react";
import { MutableRefObject, useEffect, useRef } from "react";
import { SideBarProp } from "./types";
import TrainingIcon from "../../assets/sidebar/training-icon.svg";
import BgMenu from "../../assets/bgMenu.svg";
import IconRec from "../../assets/icon-logo-recife-white.svg";

export const SideBar = ({ firstNameUser, isOpen, setIsOpen }: SideBarProp) => {
  const isExpanded = isOpen ? "w-56 h-screen left-0" : "z-0";

  const sidebarRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <nav
      ref={sidebarRef}
      className={`absolute z-30 ${isExpanded} flex-col bg-slate-300`}
    >
      <div ref={sidebarRef} className="flex flex-col mt-14 ">
        <div className="flex flex-col gap-2 items-center">
          <img className="rounded-full bg-slate-950 w-12 h-12" />
          <div className="flex gap-1">
            <p className="font-bold text-blue-600">Olá,</p>
            <p className="font-bold ">{firstNameUser}</p>
          </div>
        </div>
        <div className="flex flex-col ml-9 mt-14 gap-4">
          <div className="flex gap-2 text-blue-950">
            <User2 className="w-6 h-6" />
            <a href="http://localhost:5173/login">Entrar</a>
          </div>
          <div className="flex gap-2 text-blue-950">
            <Map className="w-6 h-6" />
            <a href="http://localhost:5173/map">Mapa</a>
          </div>
          <div className="flex gap-2 text-blue-950">
            <HomeIcon className="w-6 h-6" />
            <a href="#">Abrigos</a>
          </div>
          <div className="flex gap-2 text-blue-950">
            <Handshake className="w-6 h-6" />
            <a href="#">Comunidades</a>
          </div>
          <div className="flex gap-2 text-blue-950">
            <img src={TrainingIcon} className="w-6 h-6" />
            <a href="#">Treinamentos</a>
          </div>
          <div className="flex gap-2 text-blue-950">
            <PhoneCall className="w-6 h-6" />
            <a href="#">Telefones úteis</a>
          </div>
          <div className="flex gap-2 text-blue-950">
            <Bell className="w-6 h-6" />
            <a href="#">Notification</a>
          </div>
          <div className="flex gap-2 text-blue-950">
            <Bolt className="w-6 h-6" />
            <a href="#">Configurações</a>
          </div>
          <div className="flex gap-2 text-blue-950">
            <InfoIcon className="w-6 h-6" />
            <a href="#">Sobre</a>
          </div>
          <div className="flex gap-2 text-blue-950">
            <LogOut className="w-6 h-6" />
            <a href="#">Sair</a>
          </div>
        </div>
        <div>
          <img className="absolute w-screen bottom-0" src={BgMenu} />
          <img className="absolute w-82 h-12 bottom-4 left-6" src={IconRec} />
        </div>
      </div>
    </nav>
  );
};

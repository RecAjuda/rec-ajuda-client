import { useState } from "react";
import { iconsNotification } from "./types"

export const ModalNotif = () => {

    const [isClicked , setClicked] = useState(false)
        const handleStyle = () => {
            setClicked(!isClicked)
        
    }
    const styleForClickedElement = isClicked ? "text-white w-20 bg-[#187BCD]" :"text-blue-700 w-20 bg-[#CED7DC]";

    return (
        <div className="bg-white w-screen px-3 py-2 flex flex-col items-center justify-center rounded-lg">
            <div className="flex h-30 mt-20 items-center ">
                <div className="ml-2">
                <p className={`font-bold text-blue-950 text-lg`}>Notificação</p>
                </div>
            </div>
            <div className="grid grid-cols-3 m-6 gap-x-8 gap-y-4">
                <div className={`${styleForClickedElement} rounded-lg py-1 px-3`} onClick={handleStyle}>
                    <p>Geral</p>
                </div>
                <div className={`${styleForClickedElement} rounded-lg py-1 px-3`} onClick={handleStyle}>
                    <p>Bairros</p>
                </div>
                <div className={`${styleForClickedElement} rounded-lg py-1 px-3`} onClick={handleStyle}>
                    <p>Abrigo</p>
                </div>
            </div>
            <div className="h-0.5 w-screen bg-[#D9D9D9]"/>
            <div className="flex flex-col justify-between">
                <div className="flex gap-6 items-start  w-screen mt-2 mb-3">
                    <img className="w-10 h-6.8 ml-3.5 mt-1" src={iconsNotification["greenIcon"]}/>
                    <p className="w-3/1"><strong>Defesa Civil:</strong> ALERTA URGENTE – Devido aos índices acumulados de chuvas, a Defesa Civil do Recife orienta apopulação residente em áreas de risco a deixar suas residências imediatamente e procurar abrigo em locais seguro. A Defesa Civil pode ser acionada pelo fone 0800 081 3400. A ligação é gratuita e acentral funciona 24h.</p>
                    <img className="w-4 h-4 ml-3.5 mt-1 mr-3.5" src={iconsNotification["elipseIcon"]}/>
                </div>
                <div className="flex justify-end mb-3 mr-3">
                    <p className="text-[#2A9DF4]">Hoje, 14:40h</p>
                </div>
                <div className="h-0.5 w-screen bg-[#D9D9D9]"/>
                <div className="flex gap-6 items-start  w-screen mt-2 mb-3">
                    <img className="w-10 h-6.8 ml-3.5 mt-1" src={iconsNotification["greenIcon"]}/>
                    <p className="w-3/1"><strong>Defesa Civil:</strong> ALERTA DE CHUVAS INTENSAS/RAIOS na Região Metropolitana do Recife. Monitore e proteja-se em local seguro.</p>
                    <img className="w-4 h-4 ml-3.5 mt-1 mr-3.5" src={iconsNotification["elipseIcon"]}/>
                </div>
                <div className="flex justify-end mb-3 mr-3">
                    <p className="text-[#2A9DF4]">Hoje, 14:40h</p>
                </div>
                <div className="h-0.5 w-screen bg-[#D9D9D9]"/>
                
            </div>
           

        </div>


    );
};
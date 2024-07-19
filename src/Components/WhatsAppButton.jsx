import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {

    const [vibrate, setVibrate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVibrate(true);
      setTimeout(() => setVibrate(false), 300); // duration of the vibrate animation
    }, 2000); // interval between vibrations

    return () => clearInterval(interval);
  }, []);


  return (
    <a
      href="https://wa.me/8507740935" // Your WhatsApp number here
      className={`whatsapp-button h-[50px] w-[50px] items-center justify-center flex fixed bottom-[20px] right-[20px] bg-[#25D366] text-white rounded-full ${vibrate ? "vibrate" : ""}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={35} />
    </a>
  );
}

export default WhatsAppButton;

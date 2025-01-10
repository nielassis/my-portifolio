import React from "react";
import Socials from ".";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export default function SocialsBar() {
  return (
    <>
      <Socials
        link="https://github.com/nielassis"
        tooltip="Github"
        icon={Github}
        className="text-gray-700 hover:text-violet-500"
      />
      <Socials
        link="https://www.linkedin.com/in/nielassis/"
        tooltip="LinkedIn"
        icon={Linkedin}
        className="text-gray-700 hover:text-blue-500"
      />
      <Socials
        link=""
        tooltip="WhatsApp Business"
        icon={MessageCircle}
        className="text-gray-700 hover:text-green-500"
      />
      <Socials
        link="mailto:nielvitorba@gmail.com"
        tooltip="Email"
        icon={Mail}
        className="text-gray-700 hover:text-red-500"
      />
    </>
  );
}

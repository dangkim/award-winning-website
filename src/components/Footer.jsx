import { useState } from "react";
import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";
import PrivacyPolicyModal from "./PrivacyPolicyModal";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  // Add null check for translations
  if (!t?.footer) {
    console.error('Missing footer translations');
    return null;
  }

  return (
    <>
      <footer className="w-screen bg-[#5542ff] py-4 text-black">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <p className="text-center text-sm font-light md:text-left">
            {t.footer.rights}
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="text-sm font-medium hover:text-white transition-colors"
            >
              {language === 'en' ? 'VN' : 'EN'}
            </button>

            <div className="flex justify-center gap-4 md:justify-start">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black transition-colors duration-500 ease-in-out hover:text-white"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="text-center text-sm font-light hover:underline md:text-right"
          >
            {t.footer.privacyPolicy}
          </button>
        </div>
      </footer>
      <PrivacyPolicyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Footer;

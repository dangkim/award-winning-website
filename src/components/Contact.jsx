import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass, alt }) => (
  <div className={clipClass}>
    <img src={src} alt={alt} />
  </div>
);

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1"
            alt={language === 'en' ? 'Contact image 1' : 'Hình ảnh liên hệ 1'}
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
            alt={language === 'en' ? 'Contact image 2' : 'Hình ảnh liên hệ 2'}
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
            alt={language === 'en' ? 'Swordman partial' : 'Hình ảnh kiếm sĩ một phần'}
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
            alt={language === 'en' ? 'Swordman' : 'Hình ảnh kiếm sĩ'}
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            {t.contact.joinText}
          </p>

          <AnimatedTitle
            title={t.contact.title}
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <Button 
            title={t.contact.buttonText} 
            containerClass="mt-10 cursor-pointer" 
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

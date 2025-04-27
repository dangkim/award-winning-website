import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const t = translations[language];

  if (!isOpen) return null;
  
  if (!t?.privacyPolicy) {
    console.error('Missing translations for privacy policy');
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="relative max-h-[90vh] w-[90%] max-w-2xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <div className="prose prose-slate max-w-none">
          <h2 className="mb-4 text-2xl font-bold">{t.privacyPolicy.title}</h2>
          <p className="mb-2 text-gray-600">{t.privacyPolicy.effectiveDate}</p>

          <h3 className="mt-6 text-xl font-bold">{t.privacyPolicy.welcome}</h3>
          <p className="mb-8 text-gray-700">{t.privacyPolicy.introText}</p>

          <div className="space-y-8">
            {Object.entries(t.privacyPolicy.sections).map(([key, section]) => (
              <div key={key}>
                <h4 className="mb-4 text-lg font-bold">{section.title}</h4>
                {section.content && (
                  <p className="mb-4 text-gray-700">{section.content}</p>
                )}
                {section.items && (
                  <ul className="list-disc space-y-2 pl-5">
                    {section.items.map((item, index) => (
                      <li key={index} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                )}
                {key === 'contact' && (
                  <div className="mt-4 space-y-2 text-gray-700">
                    <p>{section.email}</p>
                    <p>{section.phone}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
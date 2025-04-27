const PrivacyPolicyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
        <div className="prose max-w-none">
          <h2 className="mb-4 text-2xl font-bold">Privacy Policy</h2>
          <p className="mb-2">Effective Date: April 27, 2025</p>

          <h3 className="mt-6 font-bold">Welcome to English Coffee Club!</h3>
          <p>We are committed to protecting your personal information and respecting your privacy. This Privacy Policy explains how we collect, use, and protect your information when you interact with us.</p>

          <h4 className="mt-4 font-bold">1. Information We Collect</h4>
          <ul>
            <li>Contact Information: Name, phone number, email address (if you register).</li>
            <li>Participation Info: Your session attendance, feedback, and basic preferences.</li>
            <li>Media: Photos or videos during events (only if you give permission).</li>
          </ul>

          <h4 className="mt-4 font-bold">2. How We Use Your Information</h4>
          <ul>
            <li>To manage your event registration and communication.</li>
            <li>To improve our club activities and create better experiences for you.</li>
            <li>To occasionally send you news about upcoming sessions, special offers, or important updates (you can opt out anytime).</li>
          </ul>

          <h4 className="mt-4 font-bold">3. How We Protect Your Information</h4>
          <ul>
            <li>We store your information securely and limit access only to authorized team members.</li>
            <li>We never sell, rent, or trade your information to third parties.</li>
          </ul>

          <h4 className="mt-4 font-bold">4. Your Rights</h4>
          <ul>
            <li>You can request to view, update, or delete your information at any time by contacting us.</li>
            <li>You can opt out of receiving marketing communications at any time.</li>
          </ul>

          <h4 className="mt-4 font-bold">5. Media Consent</h4>
          <p>We may take photos or short videos during club activities to promote the club (such as on social media or our website).</p>
          <p>You always have the right to say no to being photographed or filmed — just let us know!</p>

          <h4 className="mt-4 font-bold">6. Changes to This Policy</h4>
          <p>We may update this Privacy Policy if needed. If we make changes, we will notify you by posting the update on our website.</p>

          <h4 className="mt-4 font-bold">7. Contact Us</h4>
          <p>If you have any questions about this Privacy Policy or your personal information, please contact us:</p>
          <p>📩 Email: tamchitrung@gmail.com</p>
          <p>📱 Phone: 0902532732</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
import React, { useState } from 'react';
import { Heart, X } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showPrivacyDialog, setShowPrivacyDialog] = useState(false);
  const [showTermsDialog, setShowTermsDialog] = useState(false);

  const openPrivacyDialog = (e) => {
    e.preventDefault();
    setShowPrivacyDialog(true);
  };

  const closePrivacyDialog = () => {
    setShowPrivacyDialog(false);
  };

  const openTermsDialog = (e) => {
    e.preventDefault();
    setShowTermsDialog(true);
  };

  const closeTermsDialog = () => {
    setShowTermsDialog(false);
  };

  return (
    <>
      <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4 animate-fade-in-up">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent animate-gradient-shift">
                Anushka Umayanga
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Mobile Application Developer specializing in Android & iOS development with Python expertise. 
                Passionate about creating innovative solutions that make a difference.
              </p>
            </div>

            // Quick Links
            <div className="space-y-4 animate-fade-in-up animation-delay-200">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector(`#${link.toLowerCase()}`);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            // services
            <div className="space-y-4 animate-fade-in-up animation-delay-400">
              <h4 className="text-lg font-semibold">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors duration-300">Android App Development</li>
                <li className="hover:text-white transition-colors duration-300">iOS App Development</li>
                <li className="hover:text-white transition-colors duration-300">Cross-Platform Development</li>
                <li className="hover:text-white transition-colors duration-300">Python Development</li>
                <li className="hover:text-white transition-colors duration-300">App Maintenance & Support</li>
              </ul>
            </div>
          </div>

          // Bottom section
          <div className="border-t border-gray-800 pt-8 animate-fade-in-up animation-delay-600">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm flex items-center gap-2">
                © {currentYear} @Anushka Umayanga - All Rights Reserved.
              </p>
              
              <div className="flex gap-6 text-sm text-gray-400">
                <a 
                  href="#" 
                  className="hover:text-white transition-colors duration-300 cursor-pointer"
                  onClick={openPrivacyDialog}
                >
                  Privacy Policy
                </a>
                <a 
                  href="#" 
                  className="hover:text-white transition-colors duration-300 cursor-pointer"
                  onClick={openTermsDialog}
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Dialog */}
      {showPrivacyDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden">
            {/* Dialog Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Privacy Policy</h2>
              <button
                onClick={closePrivacyDialog}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
              >
                <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[60vh] text-gray-700 dark:text-gray-300">
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    Last updated: {new Date().toLocaleDateString()}
                  </p>
                </div>

                <section>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">1. Information We Collect</h3>
                  <p className="mb-3">
                    We collect information you provide directly to us, such as when you contact us through our website, 
                    request services, or communicate with us about our mobile application development services.
                  </p>
                  <p>
                    This may include your name, email address, phone number, company information, and project requirements.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">2. How We Use Your Information</h3>
                  <p className="mb-3">We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Provide and improve our mobile application development services</li>
                    <li>Respond to your inquiries and communicate with you</li>
                    <li>Send you updates about our services and projects</li>
                    <li>Analyze usage patterns to enhance user experience</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">3. Information Sharing</h3>
                  <p>
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                    except as described in this privacy policy or as required by law.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">4. Data Security</h3>
                  <p>
                    We implement appropriate security measures to protect your personal information against unauthorized access, 
                    alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">5. Cookies and Tracking</h3>
                  <p>
                    Our website may use cookies and similar tracking technologies to enhance your browsing experience 
                    and analyze website traffic. You can control cookie settings through your browser preferences.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">6. Third-Party Services</h3>
                  <p>
                    We may use third-party services for analytics, hosting, and other business purposes. 
                    These services have their own privacy policies governing the use of your information.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">7. Your Rights</h3>
                  <p className="mb-3">You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Access and update your personal information</li>
                    <li>Request deletion of your data</li>
                    <li>Opt-out of marketing communications</li>
                    <li>File a complaint with relevant authorities</li>  
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">8. Contact Information</h3>
                  <p>
                    If you have questions about this Privacy Policy or our data practices, please contact us at:
                  </p>
                  <div className="mt-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="font-medium">Anushka Umayanga - AppStaticsX</p>
                    <p>Email: uanushka2001@gmail.com</p>
                    <p>Website: www.appstaticsx.com</p>
                  </div>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">9. Changes to This Policy</h3>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by 
                    posting the new Privacy Policy on this website with an updated "Last updated" date.
                  </p>
                </section>
              </div>
            </div>

            <div className="flex justify-end p-6 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={closePrivacyDialog}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {showTermsDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden">
            {/* Dialog Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Terms of Service</h2>
              <button
                onClick={closeTermsDialog}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
              >
                <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[60vh] text-gray-700 dark:text-gray-300">
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    Last updated: {new Date().toLocaleDateString()}
                  </p>
                </div>

                <section>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">1. Acceptance of Terms</h3>
                  <p>
                    By accessing and using our website and services, you accept and agree to be bound by the terms 
                    and provision of this agreement. These Terms of Service govern your use of our mobile application 
                    development services provided by Anushka Umayanga (AppStaticsX).
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">2. Service Description</h3>
                  <p className="mb-3">
                    We provide professional mobile application development services including:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Android application development</li>
                    <li>iOS application development</li>
                    <li>Cross-platform mobile solutions</li>
                    <li>Python development services</li>
                    <li>App maintenance and support</li>
                    <li>Technical consulting and project management</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">3. User Responsibilities</h3>
                  <p className="mb-3">When using our services, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the confidentiality of any login credentials</li>
                    <li>Use our services only for lawful purposes</li>
                    <li>Respect intellectual property rights</li>
                    <li>Communicate professionally and respectfully</li>
                    <li>Pay for services as agreed upon in project contracts</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">4. Intellectual Property</h3>
                  <p className="mb-3">
                    Upon full payment for development services, you will own the intellectual property rights to the 
                    custom application developed specifically for you. However:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>We retain rights to general methodologies, techniques, and know-how</li>
                    <li>Third-party libraries and frameworks remain under their respective licenses</li>
                    <li>We may use project experience for portfolio and marketing purposes (with anonymization)</li>
                    <li>Source code templates and reusable components may be retained for future projects</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">5. Payment Terms</h3>
                  <p className="mb-3">
                    Payment terms will be specified in individual project agreements. Generally:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Projects require an upfront deposit before work begins</li>
                    <li>Payment schedules are based on project milestones</li>
                    <li>Late payments may result in project suspension</li>
                    <li>Refunds are handled on a case-by-case basis</li>
                    <li>Additional work beyond scope requires separate agreements</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">6. Project Delivery & Support</h3>
                  <p className="mb-3">
                    We strive to deliver projects on time and to specification:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Project timelines are estimates and may be adjusted for scope changes</li>
                    <li>We provide reasonable post-launch support as specified in agreements</li>
                    <li>Bug fixes for our development errors are provided at no additional cost</li>
                    <li>Feature requests and enhancements require separate agreements</li>
                    <li>We recommend regular backups and cannot guarantee data recovery</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">7. Limitation of Liability</h3>
                  <p>
                    Our liability is limited to the amount paid for our services. We are not liable for indirect, 
                    incidental, special, consequential, or punitive damages, including but not limited to loss of 
                    profits, data, or business opportunities. We make no warranties regarding third-party services, 
                    app store approvals, or market success of developed applications.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">8. Confidentiality</h3>
                  <p>
                    We respect the confidentiality of your project information and business data. We will not 
                    disclose confidential information to third parties without your consent, except as required 
                    by law. We recommend signing separate Non-Disclosure Agreements for highly sensitive projects.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">9. Termination</h3>
                  <p className="mb-3">
                    Either party may terminate services under certain conditions:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Breach of contract terms by either party</li>
                    <li>Non-payment of agreed fees</li>
                    <li>Mutual agreement to discontinue the project</li>
                    <li>Illegal or unethical use of our services</li>
                  </ul>
                  <p className="mt-3">
                    Upon termination, you will receive all completed work and pay for services rendered up to the termination date.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">10. Dispute Resolution</h3>
                  <p>
                    Any disputes arising from these terms or our services will be resolved through good faith 
                    negotiation first. If resolution cannot be reached, disputes will be handled through 
                    binding arbitration in accordance with local laws.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">11. Changes to Terms</h3>
                  <p>
                    We reserve the right to modify these Terms of Service at any time. Updated terms will be 
                    posted on our website with a new "Last updated" date. Continued use of our services 
                    constitutes acceptance of revised terms.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">12. Contact Information</h3>
                  <p>
                    For questions about these Terms of Service or our business practices, please contact us:
                  </p>
                  <div className="mt-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="font-medium">Anushka Umayanga - AppStaticsX</p>
                    <p>Email: uanushka2001@gmail.com</p>
                    <p>Website: www.appstaticsx.com</p>
                  </div>
                </section>
              </div>
            </div>

            <div className="flex justify-end p-6 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={closeTermsDialog}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2d315e] text-white py-12" id="footernav">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#aboutus"
                  className="hover:text-[#121316] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#why_choose"
                  className="hover:text-[#000000] transition-colors"
                >
                  Why us?
                </Link>
              </li>
              <li>
                <Link
                  href="#laundryservice"
                  className="hover:text-[#000000] transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="#requestservice"
                  className="hover:text-[#000000] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">CONTACT INFO</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:support@iconlaundry.in"
                  className="flex items-center hover:text-[#000000] transition-colors"
                >
                  <Mail size={20} className="mr-2" />
                  <span>support@iconlaundry.in</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/9637764191/"
                  className="flex items-center hover:text-[#000000] transition-colors"
                >
                  <MessageCircle size={20} className="mr-2" />
                  <span>+91 7757867896</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+91 7757867896"
                  className="flex items-center hover:text-[#000000] transition-colors"
                >
                  <Phone size={20} className="mr-2" />
                  <span>+91 7757867896</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">CONNECT WITH US!</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/iconlaundry"
                className="hover:text-[#000000] transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com/iconlaundry"
                className="hover:text-[#000000] transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.youtube.com/@iconlaundry"
                className="hover:text-[#000000] transition-colors"
              >
                <Youtube size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/98815399/admin/feed/posts/"
                className="hover:text-[#000000] transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">DOWNLOAD THE APP</h3>
            <div className="flex space-x-4">
              <a
                href="https://play.google.com/store/apps/details?id=app.iawebtech.iconlaundry&hl=en"
                className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <span>Google Play</span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=app.iawebtech.iconlaundry&hl=en"
                className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                >
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                <span>App Store</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 Icon Laundry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

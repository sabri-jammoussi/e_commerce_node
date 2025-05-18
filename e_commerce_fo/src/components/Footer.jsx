import {
  Armchair,
  Banknote,
  CreditCard,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer>
      <div className="footer_top w-full border-t border-b border-[#e1e3e5] pt-10 pb-8 px-4 sm:px-6 lg:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div>
              <div className="logo_wrapper mb-6">
                <Link
                  to="/"
                  className="text-3xl text-black font-inter font-medium capitalize flex items-center gap-2"
                >
                  <Armchair size="2rem" color="#029fae" /> comforty
                </Link>
              </div>

              <p className="text-base text-[#272343] font-inter font-normal mb-4 max-w-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus repellat vero nulla! Quibusdam, reiciendis maiores
                fugiat atque aliquam molestiae vero?
              </p>

              <div className="footer_social flex flex-wrap items-center gap-3">
                <Link className="p-3 rounded-full border-[#007580] inline-block border-[1px]">
                  <Facebook size="1.5rem" color="#007580" />
                </Link>
                <Link className="p-3 inline-block">
                  <Twitter size="1.5rem" color="#007580" />
                </Link>
                <Link className="p-3 inline-block">
                  <Instagram size="1.5rem" color="#007580" />
                </Link>
                <Link className="p-3 inline-block">
                  <Youtube size="1.5rem" color="#007580" />
                </Link>
              </div>
            </div>

            {/* Category Section */}
            <div className="footer_wrapper">
              <h3 className="text-xl text-[#9a9caa] font-inter font-medium uppercase">
                category
              </h3>
              <ul className="space-y-2 mt-4">
                {[
                  "sofa",
                  "armchair",
                  "wing chair",
                  "desk chair",
                  "wooden chair",
                  "park bench",
                ].map((item) => (
                  <li key={item}>
                    <Link className="text-base text-[#272343] font-inter font-normal capitalize">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Section */}
            <div className="footer_wrapper">
              <h3 className="text-xl text-[#9a9caa] font-inter font-medium uppercase">
                support
              </h3>
              <ul className="space-y-2 mt-4">
                {[
                  "help & support",
                  "terms & condition",
                  "privacy policy",
                  "help",
                ].map((item) => (
                  <li key={item}>
                    <Link className="text-base text-[#272343] font-inter font-normal capitalize">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="newsletter">
              <h3 className="text-xl text-[#9a9caa] font-inter font-medium uppercase mb-4">
                newsletter
              </h3>
              <form className="flex flex-col sm:flex-row items-stretch gap-3 max-w-md">
                <input
                  type="email"
                  placeholder="Your Email.."
                  className="flex-1 h-11 border border-[#e1e3e5] rounded-lg px-3"
                />
                <button
                  type="submit"
                  className="h-11 px-5 bg-[#007580] text-white font-semibold rounded-lg"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer_bottom w-full py-5 px-4 sm:px-6 lg:px-0 bg-white border-t">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-base text-[#9a9caa] font-inter">
            @ 2025 Blogy - Designed & Developed by{" "}
            <span className="text-[#272343]">Lifeonthecode</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <p className="flex items-center gap-2 text-[#9a9caa] text-base">
              Bank Note <Banknote size="1.25rem" />
            </p>
            <p className="flex items-center gap-2 text-[#9a9caa] text-base">
              Credit Card <CreditCard size="1.25rem" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

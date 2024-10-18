import { Button } from "../ui/button";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Select, SelectContent, SelectItem } from "../ui/select";
import { SelectTrigger, SelectValue } from "@radix-ui/react-select";

function Footer() {
  return (
    <footer className="py-20 bg-neutral-100">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="uppecase font-extrabold uppercase mb-5 tracking-wider">
              Quick Links
            </h3>
            <ul className="text-neutral-600 space-y-4">
              <li>
                <Link to="#">New Arrivals</Link>
              </li>
              <li>
                <Link to="#">Flash Deals</Link>
              </li>
              <li>
                <Link to="#">Popular</Link>
              </li>
              <li>
                <Link to="#">Shoes</Link>
              </li>
              <li>
                <Link to="#">Handbags</Link>
              </li>
              <li>
                <Link to="#">Accessories</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="uppecase font-extrabold uppercase mb-5 tracking-wider">
              Help
            </h3>
            <ul className="text-neutral-600 space-y-4">
              <li>
                <Link to="#">Shipping & Delivery</Link>
              </li>
              <li>
                <Link to="#">Return & Exchanges</Link>
              </li>
              <li>
                <Link to="#">Your Account</Link>
              </li>
              <li>
                <Link to="#">FAQS</Link>
              </li>
              <li>
                <Link to="#">Policies</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="uppecase font-extrabold uppercase mb-5 tracking-wider">
              Contact
            </h3>
            <ul className="text-neutral-600 space-y-4">
              <li>
                <Link to="#">support@drukwear.com</Link>
              </li>
              <li>
                <Link to="#">returns@drukwear.com</Link>
              </li>
              <li>
                <Link to="#">sales@drukwear.com</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="uppecase font-extrabold uppercase mb-5 tracking-wider">
              Join our news later
            </h3>
            <p className="text-sm text-neutral-600 mb-3">
              Keep upto date with deals & products
            </p>
            <div>
              <input
                type="text"
                placeholder=""
                className="w-full py-2 px-6 border border-border rounded-md transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-brand"
              />
              <Button className="w-full mt-3 uppercase font-semibold">
                Subscripe
              </Button>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row items-start  md:items-center justify-between  gap-8 mt-11">
          <div className="space-y-6">
            <ul className="flex items-center gap-5">
              <li>
                <Link>
                  <FaFacebookF size={20} />
                </Link>
              </li>
              <li>
                <Link>
                  <FaInstagram size={20} />
                </Link>
              </li>
              <li>
                <Link>
                  <FaXTwitter size={20} />
                </Link>
              </li>
            </ul>
            <ul className="flex items-center text-sm gap-5">
              <li>
                <Link>Terms</Link>
              </li>
              <li>
                <Link>Privacy policy</Link>
              </li>
              <li>
                <Link>Return policy</Link>
              </li>
            </ul>

            <p className="text-sm tracking-wider">
              &copy; 2024 Drukwear Pvt. Ltd
            </p>
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">CAD</SelectItem>
                <SelectItem value="dark">NGU</SelectItem>
                <SelectItem value="system">INR</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        {/* Footer bottom */}
      </div>
    </footer>
  );
}

export default Footer;

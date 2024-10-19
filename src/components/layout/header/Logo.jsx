import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <Link
        to="/"
        className="inline-block text-base md:text-xl font-bold uppercase tracking-widest"
      >
        Drukwear
      </Link>
    </div>
  );
}

export default Logo;

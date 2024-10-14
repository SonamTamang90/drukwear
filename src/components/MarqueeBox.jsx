import { Zap } from "lucide-react";
import Marquee from "react-fast-marquee";

function MarqueeBox() {
  return (
    <Marquee autoFill pauseOnHover>
      <div className="flex items-center gap-3 bg-black text-white py-4 md:py-6 px-4">
        <Zap className="w-5 h-5" />
        <h3 className="text-lg md:text-xl font-semibold tracking-wider">
          Sale Upto 70%: Hurry!
        </h3>
      </div>
    </Marquee>
  );
}

export default MarqueeBox;

import { Button } from "../ui/button";

function Hero() {
  return (
    <section className="">
      <div className="container">
        <div className="grid grid-cols-2 items-center">
          {/* Hero text */}
          <div className="max-w-xl">
            <div className="inline-block bg-brand-100 text-xs font-semibold tracking-wider rounded-full py-1.5 px-3 mb-4">
              <span>Over 300 brands · Trusted by 500k+ customers</span>
            </div>
            <h1 className="text-4xl font-extrabold uppercase tracking-wider leading-snug mb-3">
              Discover your unique look today!
            </h1>
            <p className="text-sm text-neutral-500 mb-11">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              <br />
              Accusamus, et! Adipisci in a aut!
            </p>
            <Button className="px-11 uppercase font-semibold">Shop Now</Button>
          </div>
          {/* Hero text ends here */}
          <div>
            <img src="./hero.png" alt="hero image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

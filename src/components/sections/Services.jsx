import { CreditCard, Headset, TruckIcon, Undo2 } from "lucide-react";

function Services() {
  return (
    <section className="pt-11 pb-20">
      <div className="container">
        <div className="bg-brand/10 p-11 rounded-md">
          <div className="grid grid-cols-2  md:grid-cols-4 gap-8">
            <div className="flex flex-col self-start items-center text-center">
              <TruckIcon size={50} className="mb-4 text-brand" />
              <h3 className="uppercase font-extrabold tracking-widest">
                Free Shipping over $100
              </h3>
            </div>
            <div className="flex flex-col self-start items-center text-center">
              <CreditCard size={50} className="mb-4 text-brand" />
              <h3 className="uppercase font-extrabold tracking-widest">
                Secure Payment
              </h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <Headset size={50} className="mb-4 text-brand" />
              <h3 className="uppercase font-extrabold tracking-widest">
                24/7 Customer support
              </h3>
            </div>
            <div className="flex flex-col self-start items-center text-center">
              <Undo2 size={50} className="mb-4 text-brand" />
              <h3 className="uppercase font-extrabold tracking-widest">
                Free Returns
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

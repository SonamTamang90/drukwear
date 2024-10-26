import ColorOptions from "@/components/ColorOptions";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";

function ProductFilterSidebar() {
  const [selectedColor, setSelectedColor] = useState("black");

  function handleColorChange(color) {
    setSelectedColor(color);
  }

  return (
    <aside>
      <div className="flex items-center gap-3 border-b border-border pb-8">
        <SlidersHorizontal size={18} />
        <h3 className="uppercase tracking-wider font-semibold">Filters</h3>
      </div>

      <div className="">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold py-5">
              Style
            </AccordionTrigger>
            <AccordionContent></AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-bold py-5">Size</AccordionTrigger>
            <AccordionContent>
              {["XS", "S", "M", "L", "XL", "2XL", "3XL"].map((size) => (
                <label key={size} className="flex items-center gap-3 last py-2">
                  <Checkbox />
                  {size}
                </label>
              ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-bold py-5">
              Color
            </AccordionTrigger>
            <AccordionContent>
              {["Black", "Green", "Blue", "Yellow", "Pink", "White"].map(
                (color) => (
                  <label key={color} className="flex items-center gap-3 py-2">
                    <Checkbox />
                    {color}
                  </label>
                )
              )}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="font-bold py-5">
              Brand
            </AccordionTrigger>
            <AccordionContent>
              {["Nike", "Addidas", "Puma", "Reebox", "New Balance"].map(
                (brand) => (
                  <label key={brand} className="flex items-center gap-3 py-2">
                    <Checkbox />
                    {brand}
                  </label>
                )
              )}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="font-bold py-5">
              Price
            </AccordionTrigger>
            <AccordionContent>
              {["Under $50", "$50 To $100", "$100 To $250"].map((price) => (
                <label key={price} className="flex items-center gap-3 py-2">
                  <Checkbox />
                  {price}
                </label>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </aside>
  );
}

export default ProductFilterSidebar;

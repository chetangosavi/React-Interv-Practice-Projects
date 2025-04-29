import { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
const AccordionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isOpen]);

  return (
    <div className="flex flex-col justify-center items-center mt-2">
      <div
        onClick={handleToggle}
        className={`w-1/2 m-auto flex justify-between items-center transition-all duration-300 ease-in-out ${
          isOpen ? "bg-orange-300" : "bg-gray-300"
        } p-2`}
      >
        <span>
          <p className="font-semibold text-sm">I Am Accordion Component</p>
        </span>
        <span>{isOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
      </div>
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className={`w-1/2 m-auto overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "bg-orange-300" : "bg-gray-300"
        } px-2`}
      >
        <span>
          <p className="py-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, culpa
            nulla libero tempore eius illum voluptatibus nam minus dignissimos
            tenetur?
          </p>
        </span>
      </div>
    </div>
  );
};

export default AccordionComponent;

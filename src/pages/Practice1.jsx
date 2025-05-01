import TransferList from "../component/TransferList";
import CouterTimer from "../component/CouterTimer";
import ProgressBar from "../component/ProgressBar";
import PBarPage from "./PBarPage";
import AccordionComponent from "../component/AccordionComponent";
import AcordionComp from "../component/AcoComponent/AcordionComp";

const Practice1 = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className=" mt-10">

      {/* Counter Timer Compoent */}
      <CouterTimer />

      {/* TransferList Component */}
      <TransferList />

      {/* ProgressBar Components */}
      <ProgressBar />
      <PBarPage />

      {/* Accordion Component */}
        <div className="mt-10">
          <div className="text-center text-2xl font-bold">
            Accordion Component
          </div>
          {arr.map((value) => (
            <AccordionComponent key={value} />
          ))}
        </div>

      {/* Accordion Component - Using json file */}
        <div className="mt-20 mb-20">
          <AcordionComp />
        </div>
    </div>
  );
};

export default Practice1;

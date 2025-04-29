import TransferList from "./component/TransferList"

import CouterTimer from "./component/CouterTimer"
import ProgressBar from "./component/ProgressBar"
import PBarPage from "./pages/PBarPage"
import AccordionComponent from "./component/AccordionComponent"
import AcordionComp from "./component/AcoComponent/AcordionComp"

const App = () => {

  const arr = [1,2,3,4,5]
  return (
    <div className=" mt-10">
      <CouterTimer/>
      <TransferList/>
      <ProgressBar/>
      <PBarPage/>

{/* Accordion Component */}
      <div className="mt-10">
        <div className="text-center text-2xl font-bold">Accordion Component</div>
      {
        arr.map(value=> <AccordionComponent key={value}/>)
      }
      </div>


{/* Accordion Component - Using json file */}
    <div className="mt-20 mb-20">
     <AcordionComp/> 
    </div>
        
      
    </div>
  )
}

export default App
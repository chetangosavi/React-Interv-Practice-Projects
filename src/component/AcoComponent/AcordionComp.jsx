import { useState } from "react";
import data from "./Data";

const AcordionComp = () => {
  const [selected, setSelected] = useState(null);
  const [isMultipleEnable, setIsMultipleEnable] = useState(false)
  const [multiple , setMultiple] = useState([])

  console.log( multiple)

  const handleSelected = (id) => {
    id === selected ? setSelected(null) : setSelected(id);
  };

  const handleMultipleSelect = (id)=>{

    const prev = [...multiple]
    let findIndexOf = prev.indexOf(id)

    if(findIndexOf === -1){
        prev.push(id)
    }
    else{
        prev.splice(findIndexOf,1)
    }

    setMultiple(prev)
  }

  return (
    <div className="w-1/2 m-auto">
      <div>
        <div className="flex justify-between items-center"><span className="text-xl font-semibold uppercase"> Multiple Selection</span><span onClick={()=>setIsMultipleEnable(!isMultipleEnable)} className="bg-blue-400 px-4 py-2 mb-6 text-white font-semibold cursor-pointer"> {isMultipleEnable ? "Disable" : "Enable"}</span></div>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id}>
              <div
                className="flex justify-between mt-2 p-2 bg-gray-200"
                onClick={() => isMultipleEnable ? handleMultipleSelect(dataItem.id) : handleSelected(dataItem.id)}
              >
                <span>{dataItem.question}</span>
                <span className="cursor-pointer"> {
                    isMultipleEnable ?
                    multiple.indexOf(dataItem.id) !== -1 ? '-' : '+'
                    : selected === dataItem.id ? '-' : '+'}</span>
              </div>
              <div className="px-2 bg-gray-200">
                {
                        isMultipleEnable ? 
                        multiple.indexOf(dataItem.id) !== -1 && <div className="py-2">{dataItem.ans}</div> 
                        
                        :selected === dataItem.id && <div className="py-2">{dataItem.ans}</div>
                        
                }
              </div>
            </div>
          ))
        ) : (
          <div>No Data Found !</div>
        )}
      </div>
    </div>
  );
};

export default AcordionComp;

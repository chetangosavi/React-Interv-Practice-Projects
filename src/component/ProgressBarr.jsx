import { useEffect, useState } from "react"

/* eslint-disable react/prop-types */
const ProgressBarr = ({value = 0}) => {

    const [percentage, setPercentage] = useState(0);
    console.log(percentage)

    useEffect(()=>{
        setPercentage(Math.min(100,Math.max(Math.round(value),0)))
    },[value])
  return (
    <div>
        <div className="relative w-1/2 m-auto bg-gray-200 h-8 rounded-md overflow-hidden">
            <span className="absolute w-[100%] flex justify-center items-center ">{percentage}%</span>
            <div style={{width :`${percentage}%`}} className="h-8 bg-green-400">

            </div>
        </div>
    </div>
  )
}

export default ProgressBarr
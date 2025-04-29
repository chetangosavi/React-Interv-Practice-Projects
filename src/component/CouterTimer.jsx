
import { useEffect, useState } from "react";

const CouterTimer = () => {
  const [hour, setHour] = useState(0);
  const [minutes, setMinutues] = useState(0);
  const [sec, setSec] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  console.log(hour, minutes,sec)

    useEffect(()=>{
        let timer
        if(isRunning){
            timer = setInterval(()=>{
                if(sec > 0){
                    setSec((prev)=>prev-1)
                }else{
                    if(minutes > 0){
                        setMinutues((prev=>prev-1))
                        setSec(59)
                    }
                    else{
                        if(hour > 0){
                            setHour((prev)=>prev-1)
                            setMinutues(59)
                        }
                        else{
                            clearInterval(timer)
                            setIsRunning(false)
                        }
                    }
                }
            },1000)
        }
        return ()=>clearInterval(timer)

    },[isRunning,hour,minutes,sec])

  //common function to set values of hour min and sec
  const handleOnInput = (e, setter) => {
    let input = e.target.value;
    if (input.length > 2) {
      input = input.slice(0, 2);
    }
    setter(Number(input));
  };


  //start function

  const handleStart = () => {
    if(hour > 0 || minutes > 0 || sec > 0){
        setIsRunning(true)
    }
  }
  //Reset Function
  const handleReset = () => {
    setHour(0);
    setMinutues(0);
    setSec(0);
    setIsRunning(false);
  };

  //handleStop

  const handleStop = ()=>{
    setIsRunning(false)
  }

  return (
    <div className="bg-white p-5">
      <div className="flex gap-8 font-bold text-xl justify-center uppercase">
        <h1>Hours</h1>
        <h1>Minutes</h1>
        <h1>Seconds</h1>
      </div>
      <div className=" flex gap-12 justify-center mt-2">
        <input
          type="number"
          onChange={(e) => handleOnInput(e, setHour)}
          disabled = {isRunning}
          value={hour}
          maxLength={2}
          className="border p-2 w-[80px]"
          placeholder="00:00"
          min={0}
          max={60}
        />
        <input
          type="number"
          onChange={(e) => handleOnInput(e, setMinutues)}
          disabled = {isRunning}
          value={minutes}
          maxLength={2}
          className="border p-2 w-[80px]"
          placeholder="00:00"
          min={0}
          max={60}
        />
        <input
          type="number"
          onChange={(e) => handleOnInput(e, setSec)}
          disabled = {isRunning}
          value={sec}
          maxLength={2}
          className="border p-2 w-[80px]"
          placeholder="00:00"
          min={0}
          max={60}
        />
      </div>
      <div className="flex gap-8 justify-center mt-2">
        <button className="px-5 py-2 rounded-lg font-bold bg-green-500 " onClick={handleStart}>
          Start
        </button>
        <button className ={`px-5 py-2 rounded-lg font-bold bg-red-500 ${!isRunning ? 'disabled cursor-not-allowed bg-gray-400':''}`} onClick={handleStop} disabled={!isRunning}>
          Stop
        </button>
        <button
          className="px-5 py-2 rounded-lg font-bold bg-blue-500 "
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CouterTimer;

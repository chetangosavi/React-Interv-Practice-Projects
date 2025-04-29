
import { useEffect, useState } from "react";
import ProgressBarr from "../component/ProgressBarr";
const PBarPage = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress( progress => {
        if(progress >= 100){
          clearInterval(interval)
          return 100
        }
        return progress + 1
      } )
    }, 100);

    return ()=>clearInterval(interval)
  }, []);

  return (
    <div>
      <ProgressBarr value={progress} />
    </div>
  );
};

export default PBarPage;

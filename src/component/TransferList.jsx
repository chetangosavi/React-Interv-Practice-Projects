import { useState } from "react"

const TransferList = () => {
    const [left,setLeft] =  useState([1,2,3,4])
    const [right,setRight] =  useState([5,6,7,8])
    const [checked, setChecked] = useState([])
    // console.log(checked)

    function intersection(checked,arr){
        return checked.filter(elm=>arr.indexOf(elm)!== -1)

    }
    function not(a,b){
        return a.filter(value => b.indexOf(value) === -1)
    }
    const handleChecked = (value)=>{
        // console.log("Value is: ",value)
        const currentIndex = checked.indexOf(value);
        // console.log("Current index is: ",currentIndex)

        const newChecked = [...checked]
        if(currentIndex == -1){
            newChecked.push(value)
        }
        else{
            newChecked.splice(currentIndex,1)
        }
        setChecked(newChecked)       
    }

    const customeList = (items)=>(
        <div>
            {
                items.map(value =>(
                    <div key={value} className="flex list-none text-xl">      
                        <li><input type="checkbox" id="checkBox" onChange={()=>handleChecked(value)}/> Item {value}</li>
                    </div>
                ))
            }
        </div>
    )

    const handleAllRightShift = ()=>{
        setRight(right.concat(left))
        setLeft([])
    }

    const handleAllLeftShift = ()=>{
        setLeft(left.concat(right))
        setRight([])
    }

    // console.log("Left AR: ", left)
    // console.log("Checked: ",checked)
    const leftChecked = intersection(checked,left)
    const rightChecked = intersection(checked,right)

    console.log("Left Chekecked: ",leftChecked)
    console.log("Right Checked", rightChecked)

    const handleRightChecked = ()=>{
        setRight(right.concat(leftChecked))
        setLeft(not(left,leftChecked))
        setChecked(not(checked,leftChecked))
        // console.log(checked)
    }

    const handleLeftChecked = ()=>{
        setLeft(left.concat(rightChecked))
        setRight(not(right,rightChecked))
        setChecked(not(checked,rightChecked))
    }

  return (
    
    <div className="bg-black">
        <div className="uppercase text-white text-2xl font-bold text-center p-2">Transfer List</div>
        <div className="h-[600px] p-8 flex justify-center gap-4">
        

        {/* Left List conatiner */}
        <div className="bg-red-400 text-white w-[20%] p-3">{customeList(left)}</div>

        {/* buttons conatiner */}
        <div className="text-white  w-[10%] flex flex-col items-center justify-center gap-4 ">
            <div onClick={handleAllRightShift} className="bg-white cursor-pointer rounded-md p-2 transition ease-in  hover:bg-gray-300 ">
                <button>⏩</button>
            </div>
            <div onClick={handleRightChecked} className="bg-white rounded-md p-2 transition ease-in  hover:bg-gray-300">
                <button>➡️</button>
            </div>
            <div onClick={handleLeftChecked} className="bg-white rounded-md p-2 transition ease-in  hover:bg-gray-300">
                <button>⬅️</button></div>
            <div onClick={handleAllLeftShift} className="bg-white rounded-md p-2 cursor-pointer transition ease-in  hover:bg-gray-300">
                <button>⏪</button>
            </div>  
        </div>

        {/* Right list container */}
        <div className="text-white bg-green-400 w-[20%] p-3">{customeList(right)}</div>
    </div>
    </div>
  )
}

export default TransferList
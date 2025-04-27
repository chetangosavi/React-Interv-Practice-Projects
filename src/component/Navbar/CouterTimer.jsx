
const CouterTimer = () => {
  return (
    <div className="bg-white p-5">
        <div className="flex gap-8 font-bold text-xl justify-center uppercase">
            <h1>Hours</h1>
            <h1>Minutes</h1>
            <h1>Seconds</h1>
        </div>
        <div className=" flex gap-12 justify-center mt-2">
            <input type="number"  maxLength={2} className="border p-2 w-[80px]" placeholder="00:00" min={0} max={99}/>
            <input type="number"  maxLength={2} className="border p-2 w-[80px]" placeholder="00:00" min={0} max={99}/>
            <input type="number"  maxLength={2} className="border p-2 w-[80px]" placeholder="00:00" min={0} max={99}/>
        </div>
    </div>
  )
}

export default CouterTimer
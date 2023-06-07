import { useState } from "react"

const FuncS=({Values})=>{
    const [Value,setValue]=useState([])
    return(
        <div>
             <h1>this is using Props and States</h1>
             {Values}
             <button onClick={()=>{
                setValue(...Value,Values,console.log(Value))
             }}>
                Add To Data
             </button>
             {Value}
        </div>
    )
}

export default FuncS
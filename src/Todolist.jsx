import { useState } from "react"

function Todolist(){


const[task,settask]=useState(["eat","sleep","sex"])
const[newtask,setnewtask]=useState("")

function handelchange(e){
setnewtask(e.target.value);
    }
    function addtask(){
        settask([...task, newtask])
        setnewtask("")
    }
    function deletetask(index){
 const updatetask=task.filter((filter,i)=>i !==index);
 settask(updatetask);
    }
    function moveuptask(index){

    }
function downtask(index){

}
        return(
        <div>
                <h2>LIST OF TASK</h2><br/>
             
        <input type="text" value={newtask} onChange={handelchange} placeholder="enter the task"></input>
        <button onClick={addtask}>ADD</button><br/>
        <ol>
            {task.map((task,index)=>
                <li key={index}>
            <span >{task}</span><br/>
            <button onClick={()=>deletetask(index)}>
                DELETE
            </button>
                    <button onClick={() => moveuptask(index)}>
                       UP
                    </button>
                    <button onClick={() => downtask(index)}>
                    DOWN
                    </button>
                
            </li>
        )}
        </ol>
            </div>
        
        )
    }
    export default Todolist;
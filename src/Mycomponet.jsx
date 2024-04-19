import { useState } from "react";

function Mycomponet() {

    const [name, setname] = useState()
    const [age, setage] = useState(0)
    const [student,setstudent]=useState(true)
    const updatename = () => {
        setname("yonas");
    }
    const updateage = () => {

        setage(age + 1)
    }
    const updatestud =()=>{
      setstudent(!student)
    }
    return (
        <div>
            <p>Name:{name}</p>
            <p>AGE:{age}</p>
            <p>students:{student ?"Yes":"no"}</p>
            <button onClick={updatename}>click me</button><br /><br/>
            <button onClick={updateage}>increment</button><br /><br />
            <button onClick={updatestud}>checking</button>
        </div>
    )
}
export default Mycomponet;
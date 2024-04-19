import { useState } from "react";

function Counter() {

    const [plus, setplus] = useState(0)
    const [minus, setminus] = useState()
    const [muliti, setmuliti] = useState()
    const [avar,setavar]=useState()

    const onplus = () => {
        setplus(plus + 1)
    }
    const onminus = () => {
        setminus(plus - 1)
    }
    const onmuliti = () => {
        setmuliti(plus * minus)
    }
    const avarage = ()=>{
        setavar(plus+minus+muliti/3)

    }
    return (
        <div className="maths">
            <p className="increments">increment:{plus}</p>
            <p className="decrements">decrement:{minus}</p>
            <p className="multiples">multiple:{muliti}</p>

            <h2 className="avarages">Avarage:{avar}</h2>
        <div className="btn">
                <button onClick={onplus}>plus</button><br /><br />
                <button onClick={onminus}>Minus</button><br /><br />
                <button onClick={onmuliti}>multiple</button><br /><br />
                <button onClick={avarage}>avarage</button><br /><br />
        </div>
         
        </div>
    )
}
export default Counter;
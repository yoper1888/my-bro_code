import { useState } from "react";


function Change() {

    const [name, setname] = useState("")
    const [sex, setsex] = useState("")
    const [age, setage] = useState()
    const handelchange = (e) => {
        setname(e.target.value)
    }
    const handelsex = (e) => {
        setsex(e.target.value)
    }
    const handelage = (e) => {
        setage(e.target.value)
    }
    return (
        <div>
            <h2>write:{name}</h2>
            <textarea value={name} onChange={handelchange} /><br /><br /><br />
            <h3>sex:{sex}</h3>
            <h2>age:{age}</h2>
            <select value={sex} onChange={handelsex}>
                <option value="men">men</option>
                <option value="women">women</option>
                <option value="tranas">tranas</option>
                <option value="both">both</option>
            </select>
            <input type="number" value={age} onChange={handelage} />
        </div>
    )
}
export default Change;
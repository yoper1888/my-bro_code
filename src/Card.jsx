import Profiles from "./assets/profilepic.jpg"

function Card (){
    return(
            <div classname="cards">
    <img src={Profiles} className="cardimg" alt="profilepict"></img>
    <h2 className="title">yonas daniel</h2>
    <p>i am student and half time techer</p>
            </div>
    )
}
export default Card;
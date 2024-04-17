
function Greeting(props){
    return (props.islogin ? <h2>wellcome{props.username}</h2>:
                            <h2>please insert username</h2>)
}
export default Greeting;




function Student(props) {
    return (
        <div>
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Student:{props.isStudents ? "yes" : "No"}</p>

        </div>
    )
}
Student.defaultprops = {
    name: "guest",
    age: 0,
    isStudents: no,
}
export default Student;
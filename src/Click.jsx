

function Click() {
    let count = 0;

    const handleClick = () => {
        count++;
        console.log('Clicked', count, 'times');
    };

    return (
        <div>
            <button onClick={handleClick}>click me</button>
        </div>
    );
}

export default Click;




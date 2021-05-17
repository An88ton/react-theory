
// class Car extends Component{
//     render() {
//         const divStyle = {
//           textAlign: 'left'
//         };
//         return (
//             <div style={divStyle}>
//                 <h1 style={{color: "red", fontSize: "50px"}}>Car component</h1>
//             </div>
//         )
//     }
// }

const car = (props) => (
    <div style={{
        border: '1px solid #ccc',
        marginBottom: '10px'
    }}>
        <h3>Car name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        <input type="text" onChange={props.onChangeName}/>
        {<button onClick={props.onChangeTitle}>Click</button>}
    </div>
)

export default car;
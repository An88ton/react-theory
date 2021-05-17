import './App.css';
import Car from "./Car/Car";
import {Component} from "react";

class App extends Component {

    state = {
        cars: [
            {name: 'Ford', year: 2019},
            {name: 'Audi', year: 2021},
            {name: 'Tesla', year: 2021}
        ],
        pageTitle: 'Cars',
        showCars: false
    }

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        })
    }

    onChangeName(name, index) {
        console.log(name, index);
        const car = this.state.cars[index];
        car.name = name;
    }
    handleInput = (event) => {
        this.setState({
            pageTitle: event.target.value
        });
    }

    render() {
        const divStyle = {
            textAlign: 'center'
        }
        //const cars = this.state.cars

        return (
            <div style={divStyle}>
                <h1 style={{color: "green"}}>{this.state.pageTitle}</h1>

                <input type="text" onChange={this.handleInput}/>
                <br />
                <br />
                <button
                    onClick={this.toggleCarsHandler}
                >Toggle cars
                </button>

                {this.state.showCars
                    ? this.state.cars.map((car, index) => {
                        return (
                            <Car
                                key={index}
                                name={car.name}
                                year={car.year}
                                onChangeName={(event) => this.onChangeName(event.target.value, index)}
                            />
                        )
                    })
                    :
                        null}
                {/*<Car*/}
                {/*    name={cars[0].name}*/}
                {/*    year={cars[0].year}*/}
                {/*    onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}*/}
                {/*/>*/}
                {/*<Car*/}
                {/*    name={cars[1].name}*/}
                {/*    year={cars[1].year}*/}
                {/*    onChangeTitle={this.changeTitleHandler.bind(this, cars[1].name)}*/}
                {/*>*/}
                {/*    <p style={{color: "red"}}>Color</p>*/}
                {/*</Car>*/}
                {/*<Car*/}
                {/*    name={cars[2].name}*/}
                {/*    year={cars[2].year}*/}
                {/*    onChangeTitle={ () => this.changeTitleHandler(cars[2].name)}*/}
                {/*/>*/}
            </div>
        );
    }
}

export default App;

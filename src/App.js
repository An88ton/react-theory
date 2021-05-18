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
        const car = this.state.cars[index];
        car.name = name;
        const cars = [...this.state.cars];
        cars[index] = car;
        this.setState({cars})
    }
    handleInput = (event) => {
        this.setState({
            pageTitle: event.target.value
        });
    }


    deleteHandler(index) {
        const cars = this.state.cars.concat();
        cars.splice(index, 1);
        this.setState({cars});
    }

    render() {
        const divStyle = {
            textAlign: 'center'
        }
        //const cars = this.state.cars

        return (
            <div style={divStyle}>
                <h1 style={{color: "green"}}>{this.state.pageTitle || 'Cars'}</h1>

                <input type="text" onChange={this.handleInput}/>
                <br />
                <br />
                <button
                    onClick={this.toggleCarsHandler}
                >Toggle cars
                </button>

                <div style={{
                    width: 400,
                    margin: 'auto',
                    paddingTop: '20px'
                }}>
                {this.state.showCars
                    ? this.state.cars.map((car, index) => {
                        return (
                            <Car
                                key={index}
                                name={car.name}
                                year={car.year}
                                onDelete={this.deleteHandler.bind(this, index)}
                                onChangeName={(event) => this.onChangeName(event.target.value, index)}
                            />
                        )
                    })
                    :
                        null}
                </div>
            </div>
        );
    }
}

export default App;

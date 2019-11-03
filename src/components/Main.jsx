import React, { Component } from 'react';
import 'date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import CircularProgress from '@material-ui/core/CircularProgress';
import DateFnsUtils from '@date-io/date-fns';
import TextField from '@material-ui/core/TextField';

import FlightTable from './FlightTable';

class Main extends Component {
    initialState = {
        date: new Date(),
        flights: [],
        firstLoaded: false,
        searchFlightNum: '',
        searchOrigin: '',
        searchDestination: ''
    };

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    componentDidMount() {
        this.handleDateChange(this.state.date);
    }

    getFormattedDate = date => {
        const year = date.getFullYear();
        const month = (1 + date.getMonth()).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return year + '-' + month + '-' + day;
    };

    handleDateChange = async date => {
        const flightData = await fetch(`https://flight-info.herokuapp.com/flights?date=${this.getFormattedDate(date)}`);
        const flightList = await flightData.json();
        this.setState({ firstLoaded: true });
        this.setState({ date: date });
        this.setState({ flights: flightList });
    };

    handleFlightNum = event => {
        this.setState({ searchFlightNum: event.target.value });
    }

    handleOrigin = event => {
        this.setState({ searchOrigin: event.target.value });
    }

    handleDestination = event => {
        this.setState({ searchDestination: event.target.value });
    }

    render() {
        const { date, flights, searchFlightNum, searchOrigin, searchDestination } = this.state;

        const filteredFlights = flights.filter(flight => {
            return flight.flightNumber.includes(searchFlightNum)
            && (flight.origin.city.toLowerCase().includes(searchOrigin.toLowerCase())
            || flight.origin.code.toLowerCase().includes(searchOrigin.toLowerCase()))
            && (flight.destination.city.toLowerCase().includes(searchDestination.toLowerCase())
            || flight.destination.code.toLowerCase().includes(searchDestination.toLowerCase()));
        });

        return (
            <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Pick a Date"
                        value={date}
                        onChange={this.handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
                <div>
                    <TextField
                        id="outlined-search"
                        label="Search by Flight #"
                        type="search"
                        name="flightNum"
                        defaultValue=""
                        onChange={this.handleFlightNum}
                        style={{
                            margin: 10,
                            minWidth: 250
                        }}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-search"
                        label="Search by Origin"
                        type="search"
                        name="origin"
                        defaultValue=""
                        onChange={this.handleOrigin}
                        style={{
                            margin: 10,
                            minWidth: 250
                        }}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-search"
                        label="Search by Destination"
                        type="search"
                        name="destination"
                        defaultValue=""
                        onChange={this.handleDestination}
                        style={{
                            margin: 10,
                            minWidth: 250
                        }}
                        margin="normal"
                        variant="outlined"
                    />
                </div>
                {filteredFlights.length ? <FlightTable flights={filteredFlights} /> : this.state.firstLoaded ? <h1>No flights found!</h1> : <CircularProgress disableShrink />}
            </div>
        );
    }
}

export default Main;
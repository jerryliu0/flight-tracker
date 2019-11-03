import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import AircraftDialog from './AircraftDialog';

const useStyles = makeStyles({
    root: {
        width: '75%',
        overflowX: 'auto',
        margin: 'auto'
    },
    table: {
        minWidth: 650,
    },
});

const FlightTable = ({ flights }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Flight #</TableCell>
                        <TableCell align="right">Origin</TableCell>
                        <TableCell align="right">Destination</TableCell>
                        <TableCell align="right">Distance (miles)</TableCell>
                        <TableCell align="right">Duration</TableCell>
                        <TableCell align="right">Aircraft</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {flights.map(flight => (
                        <TableRow key={flight.flightNumber
                                + flight.origin.city
                                + flight.destination.city
                                + flight.distance
                                + flight.duration.hours
                                + flight.duration.minutes
                                + flight.aircraft.model}>
                            <TableCell component="th" scope="row">
                                {flight.flightNumber}
                            </TableCell>
                            <TableCell align="right">{`${flight.origin.city} (${flight.origin.code})`}</TableCell>
                            <TableCell align="right">{`${flight.destination.city} (${flight.destination.code})`}</TableCell>
                            <TableCell align="right">{flight.distance}</TableCell>
                            <TableCell align="right">{`${flight.duration.hours}h ${flight.duration.minutes}m`}</TableCell>
                            <TableCell align="right"><AircraftDialog aircraft={flight.aircraft.model} /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
};

export default FlightTable;

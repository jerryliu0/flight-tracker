import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Boeing738 from '../assets/738.png';
import AirbusA321 from '../assets/321.png';
import Boeing757 from '../assets/757.png';

class AircraftDialog extends Component {
    aircraftMap = {
        '738': Boeing738,
        '321': AirbusA321,
        '757': Boeing757
    }

    initialState = {
        open: false,
        image: null
    }

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    handleClickOpen = () => {
        this.setState({ open: true });
        this.setState({ image: this.aircraftMap[this.props.aircraft] })
    };

    handleClose = () => {
        this.setState({ open: false });
        this.setState({ image: null })
    };

    render() {
        return (
            <div>
                <Button onClick={this.handleClickOpen}>
                    <b>{this.props.aircraft}</b>
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <img src={this.state.image} alt={this.props.aircraft} />
                </Dialog>
            </div>
        );
    }
};

export default AircraftDialog;
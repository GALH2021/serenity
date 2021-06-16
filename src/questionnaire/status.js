import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Dialog from '@material-ui/core/Dialog';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

class Status extends Component {
    nextScreen = event => {
        event.preventDefault()
        this.props.goToNext()
    }

    prevScreen = event => {
        event.preventDefault()
        this.props.goBack()
    }

    render() {
        const { topics, handleInputChange } = this.props

        return (
            <React.Fragment>
                <Dialog
                    open
                    fullWidth
                    maxWidth='sm'
                >
                    <AppBar position='static' title='What would you like to share with the community?' style={{ backgroundColor: '#CDD8F4', color: 'black' }}>
                        <h1>What would you like to share with the community?</h1>
                    </AppBar>
                    <TextField
                        placeholder='What emoji describes your mood today?'
                        label='emoji'
                        onChange={handleInputChange}
                        defaultValue={topics.emoji}
                        margin='normal'
                        fullWidth
                    />
                    <TextField
                        placeholder='Share a thought with the community'
                        label='thought'
                        onChange={handleInputChange}
                        defaultValue={topics.though}
                        margin='normal'
                        fullWidth
                    />
                    <FormControlLabel
                        control={<Checkbox
                            checked={topics.share}
                            onChange={handleInputChange}
                            name='share'
                            color='primary'
                            value={topics.share}
                        />
                        }
                        label='Check to Share'
                    />
                    <br />
                    <Button
                        style={{ backgroundColor: '#CDD8F4' }}
                        variant="contained"
                        onClick={this.nextScreen}
                    >Continue</Button>
                    <br />
                    <Button
                        color="default"
                        variant="contained"
                        onClick={this.prevScreen}
                    >Back</Button>

                </Dialog>
            </React.Fragment>
        );
    }
}

export default Status;
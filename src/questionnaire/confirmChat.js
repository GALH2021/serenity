import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions'
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';


class ConfirmChat extends Component {
    
    nextScreen = event => {
        event.preventDefault()
        this.props.goToNext()
    }

    prevScreen = event => {
        event.preventDefault()
        this.props.goBack()
    }

    goToChat = event => {
        event.preventDefault()
        this.props.submitChat()
    }

    exitToHome = event => {
        event.preventDefault()
        this.props.exitChat()
    }

    render() {
        const { openChats, handleInputChange } = this.props
        return (
            <React.Fragment>
                <Dialog
                    open
                    fullWidth
                    maxWidth='sm'
                >
                    <AppBar position='static' title='Pick your chat!' style={{ backgroundColor: '#CDD8F4', color: 'black' }}>
                        <h1>Pick your chat!</h1>
                    </AppBar>
                    <br />
                    <div>
                        {openChats.chats.map(chat => (
                            <Paper key={chat.id} elevation={3}>
                                <FormGroup>
                                    <FormControlLabel
                                    control={<Checkbox
                                        color='primary'
                                        checked={openChats.chat}
                                        onChange={handleInputChange}
                                        name={chat}
                                        value={chat}
                                     />
                                    }
                                    label={chat}
                                    />
                                </FormGroup>
                            </Paper>
                        ))}
                        <br />
                    </div>
                    <br />
                    <DialogActions>
                    <Button
                        style={{ backgroundColor: '#CDD8F4' }}
                        variant="contained"
                        onClick={this.goToChat}
                    >Chat</Button>
                    <br />
                    <Button
                        color="default"
                        variant="contained"
                        onClick={this.exitToHome}
                    >Exit</Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        );
    }
}

export default ConfirmChat;
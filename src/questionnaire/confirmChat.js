import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Dialog from '@material-ui/core/Dialog';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';


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

    render() {
        const { openChats } = this.props
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
                            <Paper key={chat.id} elevation={5}>
                                <span>
                                    <Checkbox
                                        color='primary'
                                        name={chat}
                                     />
                                    <p>{chat}</p>
                                </span>
                            </Paper>
                        ))}
                    </div>
                    <br />
                    <Button
                        style={{ backgroundColor: '#CDD8F4' }}
                        variant="contained"
                        onClick={this.goToChat}
                    >Chat</Button>
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

export default ConfirmChat;
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { withSnackbar } from 'notistack'

const isTrue = function(array) {
    let trueCount = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] === true) {
            trueCount++
        }
    }
    return trueCount
}

class TopicFilter extends Component {
    nextScreen = event => {

        event.preventDefault()
        const { topics, enqueueSnackbar } = this.props
        const topicsValuesArray = Object.values(topics)
        // console.log(topicsValuesArray)
        const validSelection = isTrue(topicsValuesArray)
        // console.log(validSelection)
        if (validSelection === 1) {
            this.props.goToNext()
        } else if (validSelection < 1){
           return (
               enqueueSnackbar('Please make one selection or press exit', {
                   preventDuplicate: true
               })
           )
        } else if (validSelection > 1) {
            return (
                enqueueSnackbar('Please make only one selection', {
                    preventDuplicate: true
                })
            )
        }

    }

    exitToHome = event => {
        event.preventDefault()
        this.props.exitChat()
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
                    <AppBar position='static' title='What topic is on your mind today?' style={{ backgroundColor: '#CDD8F4', color: 'black' }}>
                        <h1>What topic is on your mind?</h1>
                        <p>Please make one selection</p>
                    </AppBar>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox
                                        checked={topics.selfCare}
                                        onChange={handleInputChange}
                                        name='selfCare'
                                        color='primary'
                                        value={topics.selfCare}
                                    />
                            }
                            label='Selfcare'
                        />
                        <FormControlLabel
                            control={<Checkbox
                                checked={topics.loss}
                                onChange={handleInputChange}
                                name='loss'
                                color='primary'
                                value={topics.loss}
                            />
                            }
                            label='Loss'
                        />
                        <FormControlLabel
                            control={<Checkbox
                                checked={topics.sharingGoodMemories}
                                onChange={handleInputChange}
                                name='sharingGoodMemories'
                                color='primary'
                                value={topics.sharingGoodMemories}
                            />
                            }
                            label='Sharing Good Memories'
                        />
                        <FormControlLabel
                            control={<Checkbox
                                checked={topics.venting}
                                onChange={handleInputChange}
                                name='venting'
                                color='primary'
                                value={topics.venting}
                            />
                            }
                            label='Venting'
                        />
                        <FormControlLabel
                            control={<Checkbox
                                checked={topics.advice}
                                onChange={handleInputChange}
                                name='advice'
                                color='primary'
                                value={topics.advice}
                            />
                            }
                            label='Advice'
                        />
                        <FormControlLabel
                            control={<Checkbox
                                checked={topics.none1}
                                onChange={handleInputChange}
                                name='none1'
                                color='primary'
                                value={topics.none1}
                            />
                            }
                            label='None of these'
                        />
                        <br />
                        <DialogActions>
                        <Button
                            style={{ backgroundColor: '#CDD8F4' }}
                            variant="contained"
                            onClick={this.nextScreen}
                        >Continue</Button>
                            <br />
                            <Button
                                color="default"
                                variant="contained"
                                onClick={this.exitToHome}
                            >Exit</Button>
                        </DialogActions>
                    </FormGroup>
                </Dialog>
            </React.Fragment>
        )
    }
}

export default withSnackbar(TopicFilter);
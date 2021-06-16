import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Dialog from '@material-ui/core/Dialog';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

class PersonFilter extends Component {
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
                    <AppBar position='static' title='Who would you like to chat with?'>
                        <h1>Who would you like to chat with?</h1>
                    </AppBar>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox
                                checked={topics.nurseDoctor}
                                onChange={handleInputChange}
                                name='nurseDoctor'
                                color='primary'
                                value={topics.nurseDoctor}
                            />
                            }
                            label='Nurse/Doctor'
                        />
                        <FormControlLabel
                            control={<Checkbox
                                checked={topics.familyCaregiver}
                                onChange={handleInputChange}
                                name='familyCaregiver'
                                color='primary'
                                value={topics.familyCaregiver}
                            />
                            }
                            label='Family Caregiver'
                        />
                        <FormControlLabel
                            control={<Checkbox
                                checked={topics.professionalCaregiver}
                                onChange={handleInputChange}
                                name='professionalCaregiver'
                                color='primary'
                                value={topics.professionalCaregiver}
                            />
                            }
                            label='Professional Caregiver'
                        />
                        <FormControlLabel
                            control={<Checkbox
                                checked={topics.independentCaregiver}
                                onChange={handleInputChange}
                                name='independentCaregiver'
                                color='primary'
                                value={topics.independentCaregiver}
                            />
                            }
                            label='Independent Caregiver'
                        />
                        <FormControlLabel
                            control={<Checkbox
                                checked={topics.privateDutyCaregiver}
                                onChange={handleInputChange}
                                name='privateDutyCaregiver'
                                color='primary'
                                value={topics.privateDutyCaregiver}
                            />
                            }
                            label='Private Duty Caregiver'
                        />
                        <FormControlLabel
                            control={<Checkbox
                                checked={topics.informalCaregiver}
                                onChange={handleInputChange}
                                name='informalCaregiver'
                                color='primary'
                                value={topics.informalCaregiver}
                            />
                            }
                            label='Informal Caregiver'
                        />
                        <FormControlLabel
                            control={<Checkbox
                                checked={topics.volunteerCaregiver}
                                onChange={handleInputChange}
                                name='volunteerCaregiver'
                                color='primary'
                                value={topics.volunteerCaregiver}
                            />
                            }
                            label='Volunteer Caregiver'
                        />
                        <FormControlLabel
                            control={<Checkbox
                                checked={topics.none2}
                                onChange={handleInputChange}
                                name='none2'
                                color='primary'
                                value={topics.none2}
                            />
                            }
                            label='None of these'
                        />
                        <br />
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={this.nextScreen}
                        >Continue</Button>
                        <br />
                        <Button
                            color="default"
                            variant="contained"
                            onClick={this.prevScreen}
                        >Back</Button>

                    </FormGroup>
                </Dialog>
            </React.Fragment>
        );
    }
}

export default PersonFilter;
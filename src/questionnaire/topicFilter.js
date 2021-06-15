import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

class topicFilter extends Component {
    render() {
        const { topics, handleInputChange, checked1 } = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='What topic is on your mind today?' />
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox
                                        checked={checked1}
                                        onChange={() => {
                                            handleInputChange(topics.selfCare)
                                        }}
                                        name='selfCare'
                                        color='primary'
                                        value='selfCare'
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
                            />
                            }
                            label='Advice'
                        />
                        <FormControlLabel
                            control={<Checkbox
                                checked={topics.none1}
                                onChange={handleInputChange}
                                name='none'
                                color='primary'
                            />
                            }
                            label='None of these'
                        />
                    </FormGroup>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default topicFilter;
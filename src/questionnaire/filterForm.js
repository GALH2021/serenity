import React, { Component } from 'react';
import TopicFilter from './topicFilter'
import PersonFilter from './personFilter'
import Status from './status'
import ConfirmChat from './confirmChat'

class filterForm extends Component {
    constructor (props) {
        super(props)
        this.state = {
            step: 1,
            selfCare: false,
            loss: false, 
            sharingGoodMemories: false,
            venting: false, 
            advice: false,
            none1: false,
            nurseDoctor: false, 
            familyCaregiver: false,
            professionalCaregiver: false,
            independentCaregiver: false, 
            privateDutyCaregiver: false,
            informalCaregiver: false,
            volunteerCaregiver: false,
            none2: false,
            share: false,
            emoji: '',
            thought: '',
        }
    }

    // go to next step in form
    goToNext = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }

    // go back to prev step in form
    goBack = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    // handle input changes
    handleInputChange = event => {
        const isChecked = !this.state[event.target.name]
        this.setState({ [event.target.name]: isChecked })
    }

    render() {
        const { step } = this.state 
        
        const { selfCare, loss, sharingGoodMemories, venting, advice, none1, nurseDoctor, familyCaregiver, professionalCaregiver, independentCaregiver, privateDutyCaregiver, informalCaregiver, volunteerCaregiver, none2 } = this.state
        
        const topics = { selfCare, loss, sharingGoodMemories, venting, advice, none1, nurseDoctor, familyCaregiver, professionalCaregiver, independentCaregiver, privateDutyCaregiver, informalCaregiver, volunteerCaregiver, none2 }
        switch(step) {
            case 1:
                return (
                    <TopicFilter
                        goToNext={this.goToNext}
                        handleInputChange={this.handleInputChange}
                        topics={topics}
                     />
                )
            case 2:
                return (
                    <PersonFilter
                        goToNext={this.goToNext}
                        goBack={this.goBack}
                        handleInputChange={this.handleInputChange}
                        topics={topics}
                     />
                )
            case 3: 
                return (
                    <Status />
                )
            case 4: 
                return (
                    <ConfirmChat />
                )
        }
    }
}

export default filterForm;
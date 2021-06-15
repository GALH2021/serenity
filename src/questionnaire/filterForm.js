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
            checked1: false,
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
    handleInputChange = event => value => {
        console.log(event.target.value)
        // this.setState({ ...this.state, [event.target.value]: !value })
    }

    render() {
        const { step } = this.state 
        const { selfCare, loss, sharingGoodMemories, venting, advice, none1 } = this.state
        const { checked1 } = this.state
        const topics = { selfCare, loss, sharingGoodMemories, venting, advice, none1 }
        switch(step) {
            case 1:
                return (
                    <TopicFilter
                        goToNext={this.goToNext}
                        handleInputChange={this.handleInputChange}
                        topics={topics}
                        checked1={checked1}
                     />
                )
            case 2:
                return (
                    <PersonFilter />
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
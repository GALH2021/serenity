import React, { Component } from 'react';
import TopicFilter from './topicFilter'
import PersonFilter from './personFilter'
import Status from './status'
import ConfirmChat from './confirmChat'
import Success from './success'
import chatRooms from './chatRooomData';

const topicsList = ['selfCare', 'loss', 'sharingGoodMemories', 'venting', 'advice', 'none1']
const peopleList = ['nurseDoctor', 'familyCaregiver', 'professionalCaregiver', 'independentCaregiver', 'privateDutyCaregiver', 'informalCaregiver', 'volunteerCaregiver', 'none2']

const findIndexValue = function(string, array) {
    return array.indexOf(string)
}

const hashValue = function(firstValue, secondValue) {
    let hashId = 1
    if (firstValue >= 1) {
        let hashId = ((firstValue * 8) + secondValue) + 1
        return hashId
    } else if (firstValue < 1) {
        let hashId = (firstValue + secondValue) + 1
        return hashId   
    }
    return hashId
}

function findChat(id) {
    return chatRooms.find(function (rooms) {
        return rooms.id === id
    })
}

class filterForm extends Component {

    constructor (props) {
        super(props)
        this.state = {
            step: 1,
            userChats: '',
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

    submitChat = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }

    // handle input changes
    handleInputChange = event => {
        const isChecked = !this.state[event.target.name]
        this.setState({ [event.target.name]: isChecked })
    }

    // handle submit
    handleSumbit = () => {

        const { userChats } = this.state
        // function to take in state and analyze which options are 'true'
        const stateArray = Object.entries(this.state)
        const userChoices = stateArray.filter(([key, value]) => value === true)
        const [topicPick] = userChoices[0]
        const [peoplePick] = userChoices[1]
        const topicValue = findIndexValue(topicPick, topicsList)
        const peopleValue = findIndexValue(peoplePick, peopleList)
        const chatHash = hashValue(topicValue, peopleValue).toString()
        const foundChats = findChat(chatHash)
        // console.log(foundChats.chats)
        if (foundChats && !userChats) {
            this.setState({
                userChats: foundChats
            })
        }

    }

    render() {
        const { step } = this.state 
        
        const { userChats, selfCare, loss, sharingGoodMemories, venting, advice, none1, nurseDoctor, familyCaregiver, professionalCaregiver, independentCaregiver, privateDutyCaregiver, informalCaregiver, volunteerCaregiver, none2, share, emoji, thought } = this.state
        
        const topics = { selfCare, loss, sharingGoodMemories, venting, advice, none1, nurseDoctor, familyCaregiver, professionalCaregiver, independentCaregiver, privateDutyCaregiver, informalCaregiver, volunteerCaregiver, none2, share, emoji, thought }
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
                    <Status
                        goToNext={this.goToNext}
                        goBack={this.goBack}
                        handleSumbit={this.handleSumbit()}
                        handleInputChange={this.handleInputChange}
                        topics={topics}
                     />
                )
            case 4: 
                return (
                    <ConfirmChat
                        goBack={this.goBack}
                        goToNext={this.goToNext}
                        submitChat={this.submitChat}
                        handleSumbit={this.handleSumbit()}
                        topics={topics}
                        openChats={userChats}
                    />
                )
            case 5:
                return (
                    <Success
                        goBack={this.goBack}
                        goToNext={this.goToNext}
                        submitChat={this.submitChat}
                        handleSumbit={this.handleSumbit()}
                        topics={topics}
                        openChats={userChats}
                    />
                )
            default: 
                (console.log('Chat filter step form'))
        }
    }
}

export default filterForm;
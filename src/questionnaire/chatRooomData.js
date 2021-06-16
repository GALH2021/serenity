const chatRooms = [
    {
        id: '1',
        chats: ['Selfcare Tips w. Nurses/Doctors', 'Selfcare for Beginners w. Nurses/Doctors', 'Selfcare Wins w. Nurses/Doctors']
    },
    {
        id: '2',
        chats: ['Selfcare for Beginners w. Family Caregivers', 'Selfcare for Beginners w. Family Caregivers']
    },
    {
        id: '3',
        chats: ['Selfcare Tips w. Professional Caregivers', 'Selfcare for Beginners w. Professional Caregivers', 'Selfcare Wins w. Professional Caregivers']
    },
    {
        id: '4',
        chats: ['Selfcare Tips w. Independent Caregivers', 'Selfcare for Beginners w. Independent Caregivers', 'Selfcare Wins w. Independent Caregivers']
    },
    {
        id: '5',
        chats: ['Selfcare Tips w.Private Duty Caregivers', 'Selfcare for Beginners w. Private Duty Caregivers', 'Selfcare Wins w. Private Duty Caregivers']
    },
    {
        id: '6',
        chats: ['Selfcare Tips w. Informal Caregivers', 'Selfcare for Beginners w. Informal Caregivers', 'Selfcare Wins w. Informal Caregivers']
    },
    {
        id: '7',
        chats: ['Selfcare Tips w. Volunteer Caregivers', 'Selfcare for Beginners w. Volunteer Caregivers', 'Selfcare Wins w. Volunteer Caregivers']
    },
    {
        id: '8',
        chats: ['Selfcare Tips', 'Selfcare Tips', 'Selfcare Wins']
    },
    {
        id: '9',
        chats: ['Loss w. Nurses/Doctors', 'First Time Loss w. Nurses/Doctors', 'Expected Loss w. Nurses/Doctors', 'Sudden Loss w. Nurses/Doctors']
    },
    {
        id: '10',
        chats: ['Loss w. Family Caregivers', 'First Time Loss w. Family Caregivers', 'Expected Loss w. Family Caregivers', 'Sudden Loss w. Family Caregivers']
    },
    {
        id: '11',
        chats: ['Loss w. Professional Caregivers', 'First Time Loss w. Professional Caregivers', 'Expected Loss w. Professional Caregivers', 'Sudden Loss w. Professional Caregivers']
    },
    {
        id: '12',
        chats: ['Loss w. Independent Caregivers', 'First Time Loss w. Independent Caregivers', 'Expected Loss w. Independent Caregivers', 'Sudden Loss w. Independent Caregivers']
    },
    {
        id: '13',
        chats: ['Loss w. Private Duty Caregivers', 'First Time Loss w. Private Duty Caregivers', 'First Time Loss w. Private Duty Caregivers', 'Sudden Loss w. Private Duty Caregivers']
    },
    {
        id: '14',
        chats: ['Loss w. Private Informal Caregivers', 'First Time Loss w. Informal Caregivers', 'Expected Loss w. Informal Caregivers', 'Sudden Loss w. Informal Caregivers']
    },
    {
        id: '15',
        chats: ['Sudden Loss w. Informal Caregivers', 'Sudden Loss w. Informal Caregivers', 'Expected Loss w. Volunteer Caregivers', 'Sudden Loss w. Volunteer Caregivers']
    },
    {
        id: '16',
        chats: ['Loss', 'First Time Loss', 'Expected Loss', 'Sudden Loss']
    },
    {
        id: '17',
        chats: ['SGM w. Nurses/Doctors']
    },
    {
        id: '18',
        chats: ['SGM w. Family Caregivers']
    },
    {
        id: '19',
        chats: ['SGM w. Professional Caregivers']
    },
    {
        id: '20',
        chats: ['SGM w. Independent Caregivers']
    },
    {
        id: '21',
        chats: ['SGM w. Private Duty Caregivers']
    },
    {
        id: '22',
        chats: ['SGM w. Informal Caregivers']
    },
    {
        id: '23',
        chats: ['SGM w. Volunteer Caregivers']
    },
    {
        id: '24',
        chats: ['Sharing Good Memories']
    },
    {
        id: '25',
        chats: ['Venting w. Nurses/Doctors', 'Venting Uncensored w. Nurses/Doctors']
    },
    {
        id: '26',
        chats: ['Venting w. Family Caregivers', 'Venting Uncensored w. Family Caregivers']
    },
    {
        id: '27',
        chats: ['Venting w. Professional Caregivers', 'Venting Uncensored w. Professional Caregivers']
    },
    {
        id: '28',
        chats: ['Venting w. Independent Caregivers', 'Venting Uncensored w. Independent Caregivers']
    },
    {
        id: '29',
        chats: ['Venting w. Private Duty Caregivers', 'Venting Uncensored w. Private Duty Caregivers']
    },
    {
        id: '30',
        chats: ['Venting w. Informal Caregivers', 'Venting Uncensored w. Informal Caregivers']
    },
    {
        id: '31',
        chats: ['Venting w. Volunteer Caregivers', 'Venting Uncensored w. Volunteer Caregivers']
    },
    {
        id: '32',
        chats: ['Venting', 'Venting Uncensored']
    },
    {
        id: '33',
        chats: ['Advice w. Nurses/Doctors']
    },
    {
        id: '34',
        chats: ['Advice w. Family Caregivers']
    },
    {
        id: '35',
        chats: ['Advice w. Professional Caregivers']
    },
    {
        id: '36',
        chats: ['Advice w. Independent Caregivers']
    },
    {
        id: '37',
        chats: ['Advice w. Private Duty Caregivers']
    },
    {
        id: '38',
        chats: ['Advice w. Private Informal Caregivers']
    },
    {
        id: '39',
        chats: ['Advice w. Volunteer Caregivers']
    },
    {
        id: '40',
        chats: ['General Advice']
    },
    {
        id: '41',
        chats: ['Questions About Serenity w. Nurses/Doctors', 'General Q&A w. Nurses/Doctors', 'Introductions & Recommendations w. Nurses/Doctors']
    },
    {
        id: '42',
        chats: ['Questions About Serenity w. Family Caregivers', 'General Q&A w. Family Caregivers', 'Introductions & Recommendations w. Family Caregivers']
    },
    {
        id: '43',
        chats: ['Questions About Serenity w. Professional Caregivers', 'General Q&A w. Professional Caregivers', 'Introductions & Recommendations w. Professional Caregivers']
    },
    {
        id: '44',
        chats: ['Questions About Serenity w. Independent Caregivers', 'General Q&A w. Independent Caregivers', 'Introductions & Recommendations w. Independent Caregivers']
    },
    {
        id: '45',
        chats: ['Questions About Serenity w. Private Duty Caregivers', 'General Q&A w. Private Duty Caregivers', 'Introductions & Recommendations w. Private Duty Caregivers']
    },
    {
        id: '46',
        chats: ['Questions About Serenity w. Informal Caregivers', 'General Q&A w. Informal Caregivers', 'Introductions & Recommendations w. Informal Caregivers']
    },
    {
        id: '47',
        chats: ['Questions About Serenity w. Volunteer Caregivers', 'General Q&A w. Volunteer Caregivers', 'Introductions & Recommendations w. Volunteer Caregivers']
    },
    {
        id: '48',
        chats: ['Questions About Serenity', 'General Q&A', 'Introductions & Recommendations']
    }
]

export default chatRooms

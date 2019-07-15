const users = [
    {
       id:1, name: "Blaken Bowen", status: "On Probation", address: "808 Catherine Lane San Francisco, CA 15642", phone: "351.153.3215", services: '05', serviceProvider: '05',
        assigned_task:13, completed_task:2, remaining_task:11, task_table: [ 
            { title: "gardening", type: "one time", description:"cut all unwanted grassess from the lawn", start_date: "24/05/2019", points: 10, award_status: "Awarded", redeem_status: "redeemed"}
        ],
    },
    {
        id:2,  name: "Charlie May", status: "On Probation", address: "327 Paris hill San Francisco, CA 15642", phone: "412.500.1425", services: '02', serviceProvider: '03',
        assigned_task: 6, completed_task: 5, remaining_task: 4, task_table: [ 
            { title: "wash dishes", type: "recuuring", description:"wash the dishes two time a day", start_date: "1/05/2019", points: 10, award_status: "Awarded", redeem_status: "redeemed"}
        ],
    },
    {
        id:3,  name: "lily Mia", status: "--", address: "401 Wintergreen San Francisco, CA 15642", phone: "132.500.1425", services: '06' , serviceProvider: '07',
        assigned_task: 9, completed_task: 3, remaining_task: 15, task_table: [ 
            { title: "car wash", type: "one time", description:"wash the car at the morning", start_date: "1/05/2019", points: 10, award_status: "Awarded", redeem_status: "redeemed"}
        ],
    },
]

export default users;
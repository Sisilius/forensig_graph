// export const socialNetwork = [
//     {
//         id: '1',
//         name: 'Nikita',
//         friends: ['2', '3']
//     },
//     {
//         id:'2',
//         name: 'Ruslan',
//         friends: ['3', '4']
//     },
//     {
//         id:'3',
//         name: 'Kirill',
//         friends: ['4', '5']
//     },
//     {
//         id:'4',
//         name: 'Olya',
//         friends: ['5', '6']
//     },
//     {
//         id:'5',
//         name: 'Sasha',
//         friends: ['6', '1']
//     },
//     {
//         id:'6',
//         name: 'Diana',
//         friends: ['1', '2']
//     },
//   ]

export const socialNetwork = {
    links: [
        {
            source: '1',
            target: '2',
        },
        {
            source: '2',
            target: '3',
        },
        {
            source: '3',
            target: '4',
        },
    ],
    nodes: [
        {
            id: '1',
            label: 'Incident 1'
        },
        {
            id: '2',
            label: 'Incident 2'
        },
        {
            id: '3',
            label: 'Incident 3'
        },
        {
            id: '4',
            label: 'Incident 4'
        },

    ]
}

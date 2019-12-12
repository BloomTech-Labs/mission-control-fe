// Expected data received back from the Labs API to
// https://cr0ydt7cm4.execute-api.us-east-1.amazonaws.com/dev/
// with the x-api-key present in the header and the GraphQL query body
// of:

//  query {
//     projects{
//         id
//         name
//     }
// }

// const res = {
//     "data": {
//         "projects": [{
//                 "id": "ck16r63qy3rhg0a308gtdjm47",
//                 "name": "Cryptolytic"
//             },
//             {
//                 "id": "ck16r63qy3rhg0a308gtdjm47",
//                 "name": "Baseball Game Predictor"
//             },
//             {
//                 "id": "ck16r63qy3rhg0a308gtdjm47",
//                 "name": "Forest Fire Watch"
//             },
//             {
//                 "id": "ck16r63qy3rhg0a308gtdjm47",
//                 "name": "RV Road Life"
//             },
//             {
//                 "id": "ck16r63qy3rhg0a308gtdjm47",
//                 "name": "Project Firefly"
//             },
//             {
//                 "id": "ck16r63qy3rhg0a308gtdjm47",
//                 "name": "Allegiance"
//             },
//             {
//                 "id": "ck16r63qy3rhg0a308gtdjm47",
//                 "name": "WellDone"
//             },
//             {
//                 "id": "ck16r63qy3rhg0a308gtdjm47",
//                 "name": "Didact"
//             },
//             {
//                 "id": "ck16r63qy3rhg0a308gtdjm47",
//                 "name": "Buddy App"
//             },
//             {
//                 "id": "ck16r63qy3rhg0a308gtdjm47",
//                 "name": "Brew Plans"
//             },
//             {
//                 "id": "ck16r63qy3rhg0a308gtdjm47",
//                 "name": "Coach Me"
//             },
//             {
//                 "id": "ck16r63qy3rhg0a308gtdjm47",
//                 "name": "Connect Our Kids React Native App"
//             },
//             {
//                 "id": "ck16r63qy3rhg0a308gtdjm47",
//                 "name": "Cooking Recipe Source Control"
//             },
//             {
//                 "id": "ck16r63qy3rhg0a308gtdjm47",
//                 "name": "Impact - Connect Our Kids"
//             },
//             {
//                 "id": "ck16r63qy3rhg0a308gtdjm47",
//                 "name": "Asset Manager"
//             },
//             {
//                 "id": "ck16r63qy3rhg0a308gtdjm47",
//                 "name": "Mission Control"
//             },
//             {
//                 "id": "ck16r63qy3rhg0a308gtdjm47",
//                 "name": "SAFE Mothers"
//             },
//             {
//                 "id": "ck16r63qy3rhg0a308gtdjm47",
//                 "name": "School Calendar"
//             },
//             {
//                 "id": "ck16r63qy3rhg0a308gtdjm47",
//                 "name": "Speak Out"
//             },
//             {
//                 "id": "ck16r63qy3rhg0a308gtdjm47",
//                 "name": "Work Order Management"
//             },
//             {
//                 "id": "ck16r63qy3rhg0a308gtdjm47",
//                 "name": "Councils"
//             },
//             {
//                 "id": "ck16r63qy3rhg0a308gtdjm47",
//                 "name": "Saudi Africa Market Prices"
//             },
//         ]
//     }
// };

// export default res;
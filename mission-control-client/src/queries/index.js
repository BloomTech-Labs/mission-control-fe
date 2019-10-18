
// const GET_PERSON = `
//     query ($id: ID) {
//         person(where:{ id: $id }) {
//             id
//             firstname
//             githubId
//             lastname
//             program
//             slackId
//             timezone
//         }
//     }
// `;

// const getPerson = (id) => `
//     query {
//         person(where:{ id: "${id}" }) {
//             id
//             firstname
//             githubId
//             lastname
//             program
//             slackId
//             timezone
//         }
//     }
// `

const persons = `
    query {
        persons {
        id
        firstname
        githubId
        lastname
        program
        slackId
        timezone
        }
    }
`;

const person = (id) => `
    query {
        person(where:{id:"${id}"}) {
        id
        firstname
        githubId
        lastname
        program
        slackId
        timezone
        }
    }
`;

// Requires email, firstname, githubId, lastname, program, slackId, timezone 
const createPerson = (params) => `

`;

export {
    persons,
    person,
    createPerson,
    updatePerson,
    deletePerson,
    products,
    product,
    createProduct,
    updateProduct,
    deleteProduct,
    projectGroups,
    projectGroup,
    createProjectGroup,
    updateProjectGroup,
    deleteProjectGroup,
    roles,
    role,
    createRole,
    updateRole,
    deleteRole,
    peopleGroups,
    peopleGroup,
    createPeopleGroup,
    updatePeopleGroup,
    deletePeopleGroup,
    lambdaRoles,
    lambdaRole,
    createLambdaRole,
    updateLambdaRole,
    deleteLambdaRole,
    peopleGroupMembers,
    peopleGroupMember,
    createPeopleGroupMember,
    updatePeopleGroupMember,
    deletePeopleGroupMember,
    productRoles,
    productRole,
    createProductRole,
    updateProductRole,
    deleteProductRole,
    projects,
    project,
    createProject,
    updateProject,
    deleteProject,
    projectGroupMembers,
    projectGroupMember,
    createProjectGroupMember,
    updateProjectGroupMember,
    deleteProjectGroupMember,
    projectRoles,
    projectRole,
    createProjectRole,
    updateProjectRole,
    deleteProjectRole,

    // Created previously
    createProject,
    getProducts,
    getProjects,
    getPersons,
    // GET_PERSON,
    getPerson,
};

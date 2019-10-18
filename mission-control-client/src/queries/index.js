
const GET_PRODUCTS = `
    query {
        products {
            id
            productName
        }
    }
`;

const GET_PROJECTS = `
    query {
        projects {
            id
            name
        }
    }
`;

const GET_PERSONS = `
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

const GET_PERSON = `
    query ($id: ID) {
        person(where:{ id: $id }) {
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

const getPerson = (id) => `
    query {
        person(where:{ id: "${id}" }) {
            id
            firstname
            githubId
            lastname
            program
            slackId
            timezone
        }
    }
`

export {
    GET_PRODUCTS,
    GET_PROJECTS,
    GET_PERSONS,
    GET_PERSON,
    getPerson
};


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

const person = id => `
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

const products = `
    query {
        products {
            id
            productName
        }
    }
`;

const product = id => `
    query {
        product(where:{id:"${id}"}) {
            id
            productName
        }
    }
`;

const projectGroups = `
    query {
        projectGroups {
            id
            name
        }
    }
`;

const projectGroup = id => `
    query {
        projectGroup(where:{id:"${id}"}) {
            id
            name
        }
    }
`;

const roles = `
    query {
        roles {
            id
            roleName
            type
        }
    }
`;

const role = id => `
    query {
        role(where:{id:"${id}"}) {
            id
            roleName
            type
        }
    }
`;

const peopleGroups = `
    query {
        peopleGroups{
            id
            name
        }
    }
`;

const peopleGroup = id => `
    query {
        peopleGroup(where:{id:"${id}"}){
        id
            name
        }
    }
`;

const lambdaRoles = `
    query {
        lambdaRoles{
            id
            person{
            id
            firstname
            githubId
            lastname
            program
            slackId
            timezone
            }
            role{
                id
                roleName
                type
            }
        }
    }
`;

const lambdaRole = id => `
    query {
        lambdaRole(where:{id:"${id}"}){
            id
            person{
            id
            firstname
            githubId
            lastname
            program
            slackId
            timezone
            }
            role{
                id
                roleName
                type
            }
        }
    }
`;

const peopleGroupMembers = `
    query {
        peopleGroupMembers{
            person {
            id
            email
            firstname
            githubId
            lastname
            program
            slackId
            timezone
            }
            peopleGroup{
                id
                name
            }
        }
    }
`;

const peopleGroupMember = id => `
    query {
        peopleGroupMember(where:{id:"${id}"}){
            person {
            id
            email
            firstname
            githubId
            lastname
            program
            slackId
            timezone
            }
            peopleGroup{
                id
                name
            }
        }
    }
`;

const productRoles = `
    query {
        productRoles{
            id
            person {
            id
            email
            firstname
            githubId
            lastname
            program
            slackId
            timezone
            }
            product {
                id
                productName
            }
            role {
                id
                roleName
                type
            }
        }
    }
`;

const productRole = id => `
    query {
        productRole(where:{id:"${id}"}){
            id
            person {
            id
            email
            firstname
            githubId
            lastname
            program
            slackId
            timezone
            }
            product {
                id
                productName
            }
            role {
                id
                roleName
                type
            }
        }
    }
`;

const projects = `
    query {
        projects{
            id
        }
    }
`;

const project = id => `
    query {
        project(where:{id:"${id}"}){
        id
            end
            name
            start
            product {
                id
                productName
            }
        }
    }
`;

const projectGroupMembers = `
    query {
        projectGroupMembers{
            id
            project {
                id
                end
                name
                start
                product {
                    id
                    productName
                }
            }
            projectGroup {
                id
                name
            }
        }
    }
`;

const projectGroupMember = id => `
    query {
        projectGroupMember(where:{id:"${id}"}) {
            id
            project {
                id
                end
                name
                start
                product {
                    id
                    productName
                }
            }
            projectGroup {
                id
                name
            }
        }
    }
`;

const projectRoles = `
    query {
        projectRoles {
            id
            person {
                email
            }
            project{
                name
            }
            role {
                roleName
            }
        }
    }
`;

const projectRole = id => `
    query {
        projectRoles(where:{id:"${id}"}) {
            id
            person {
                id
                firstname
                githubId
                lastname
                program
                slackId
                timezone
            }
            project {
                id
                end
                name
                start
                product {
                    id
                    productName
                }
            }
            role {
                id
                type
                roleName
            }
        }
    }
`;

// Commented out exports are to be built into a full-CRUD release canvas
export {
    persons,
    person,
    // createPerson,
    // updatePerson,
    // deletePerson,
    products,
    product,
    // createProduct,
    // updateProduct,
    // deleteProduct,
    projectGroups,
    projectGroup,
    // createProjectGroup,
    // updateProjectGroup,
    // deleteProjectGroup,
    roles,
    role,
    // createRole,
    // updateRole,
    // deleteRole,
    peopleGroups,
    peopleGroup,
    // createPeopleGroup,
    // updatePeopleGroup,
    // deletePeopleGroup,
    lambdaRoles,
    lambdaRole,
    // createLambdaRole,
    // updateLambdaRole,
    // deleteLambdaRole,
    peopleGroupMembers,
    peopleGroupMember,
    // createPeopleGroupMember,
    // updatePeopleGroupMember,
    // deletePeopleGroupMember,
    productRoles,
    productRole,
    // createProductRole,
    // updateProductRole,
    // deleteProductRole,
    projects,
    project,
    // createProject,
    // updateProject,
    // deleteProject,
    projectGroupMembers,
    projectGroupMember,
    // createProjectGroupMember,
    // updateProjectGroupMember,
    // deleteProjectGroupMember,
    projectRoles,
    projectRole,
    // createProjectRole,
    // updateProjectRole,
    // deleteProjectRole,
};

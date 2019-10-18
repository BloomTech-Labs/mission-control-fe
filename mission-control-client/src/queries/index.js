//done
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
//done
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

// done
const products = `
    query {
        products {
            id
            productName
        }
    }
`;

// done
const product = id => `
    query {
        product(where:{id:"${id}"}) {
            id
            productName
        }
    }
`;

// TODO NEEDS LOOKING INTO RETURNS UNDEFINED
const projectGroups = `
    query {
        projectGroups {
            id
            name
        }
    }
`;

// TODO NEEDS LOOKING INTO RETURNS UNDEFINED
const projectGroup = id => `
    query {
        projectGroup(where:{id:"${id}"}) {
            id
            name
        }
    }
`;

//done
const roles = `
    query {
        roles {
            id
            roleName
            type
        }
    }
`;

//done
const role = id => `
    query {
        role(where:{id:"${id}"}) {
            id
            roleName
            type
        }
    }
`;

// TODO EMPTY DATASET NEEDS WORK
const peopleGroups = `
    query {
        peopleGroups{
            id
            name
        }
    }
`;

// TODO EMPTY DATASET NEEDS WORK
const peopleGroup = id => `
    query {
        peopleGroup(where:{id:"${id}"}){
        id
            name
        }
    }
`;

//DONE
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

//DONE
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

// done
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

// done
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

// done
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

// done
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

// done
const projects = `
    query {
        projects{
            id
            name
        }
    }
`;

// done
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

// done
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

// done
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

// done
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

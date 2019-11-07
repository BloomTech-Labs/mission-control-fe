//Done
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
//Done
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

// Done
const products = `
    query {
        products {
            id
            name
            projects {
                id
                name
                start
                end
            }
        }
    }
`;

// Done
const product = id => `
    query {
        product(where:{id:"${id}"}) {
            id
            name
            projects {
                id
                name
                start
                end
            }
        }
    }
`;

// TODO
// ProjectGroups is not a type on the new API
// Will need to build a custom query to fetch something similar
const projectGroups = `
    query {
        projectGroups {
            id
            name
        }
    }
`;

//Done
const roles = `
    query {
        roles {
            id
            name
            type
        }
    }
`;

//Done
const role = id => `
    query {
        role(where:{id:"${id}"}) {
            id
            roleName
            type
        }
    }
`;

// TODO
// PeopleGroups is not a type on the new API
// Will need to build a custom query to fetch something similar
const peopleGroups = `
    query {
        peopleGroups{
            id
            name
        }
    }
`;

//Done
const lambdaRoles = `
query {
    lambdaRoles {
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
        role {
            id
            name
            type
        }
    }
}`;

//Done
const lambdaRole = id => `
    query {
        lambdaRole(where:{id:"${id}"}){
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
            role {
                id
                name
                type
            }
        }
    }
`;

// TODO
// PeopleGroupMembers is not a type on the new API
// Will need to build a custom query to fetch something similar
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

// Done
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
                name
            }
            role {
                id
                name
                type
            }
        }
    }
`;

// Done
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
                name
            }
            role {
                id
                name
                type
            }
        }
    }
`;

// Done
const projects = `
    query {
        projects{
            id
            name
            start
            end
            product {
                id
                name
            }
        }
    }
`;

// Done
const project = id => `
    query {
        project(where:{id:"${id}"}){
            id
            end
            name
            start
            product {
                id
                name
            }
        }
    }
`;

// TODO
// PeopleGroupMembers is not a type on the new API
// Will need to build a custom query to fetch something similar
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

// Done
const projectRoles = `
    query {
        projectRoles {
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
            project {
                id
                end
                name
                start
                product {
                    id
                    name
                }
            }
            role {
                id
                name
                type
            }
        }
    }
`;

// Done
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
                    name
                }
            }
            role {
                id
                type
                name
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
    // createProjectGroup,
    // updateProjectGroup,
    // deleteProjectGroup,
    roles,
    role,
    // createRole,
    // updateRole,
    // deleteRole,
    peopleGroups,
    // createPeopleGroup,
    // updatePeopleGroup,
    // deletePeopleGroup,
    lambdaRoles,
    lambdaRole,
    // createLambdaRole,
    // updateLambdaRole,
    // deleteLambdaRole,
    peopleGroupMembers,
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
    // createProjectGroupMember,
    // updateProjectGroupMember,
    // deleteProjectGroupMember,
    projectRoles,
    projectRole,
    // createProjectRole,
    // updateProjectRole,
    // deleteProjectRole,
};

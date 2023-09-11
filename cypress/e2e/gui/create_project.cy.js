import { faker } from '@faker-js/faker'

describe('Create Project', () => {
    beforeEach(() => {
      cy.api_deleteProjects()
      cy.login()
    })
    it('successfully', () => {
        const project = {
            name:`project-${faker.datatype.uuid()}`,
            description: faker.random.words(10)
        }
      
      cy.create_project(project)
  
      cy.get('.avatar-tile').should('be.visible')
      cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)
      cy.contains(project.name).should('be.visible')
      cy.contains(project.description).should('be.visible')
    })
  })
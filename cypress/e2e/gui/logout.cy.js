describe('Logout', () => {
    it('successfully', () => {
  
      cy.login()
  
      cy.visit('/')
  
      cy.logout()

      cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
    })
  })
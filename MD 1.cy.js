describe('DEMOQA', () => {
  context('Selectable Grid Test', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/selectable');
      //TextBoxPage.visit();
    });
 




    it('Grid Selection', () => {

        // b. Click "Grid"
        cy.get('#demo-tab-grid').click()

        // c. Click - “Two”, “Four”, “Six”, “Eight”
        cy.contains('li', 'Two').click();
        cy.contains('li', 'Four').click();
        cy.contains('li', 'Six').click();
        cy.contains('li', 'Eight').click();
        
        // d. Even numbers should be blue highlighted
        cy.contains('li', 'Two').should('have.class', 'active')
        cy.contains('li', 'Four').should('have.class', 'active')
        cy.contains('li', 'Six').should('have.class', 'active')
        cy.contains('li', 'Eight').should('have.class', 'active')
        
        // e. Odd numbers should NOT be blue
        cy.contains('li', 'One').should('not.have.class', 'active')
        cy.contains('li', 'Three').should('not.have.class', 'active')
        cy.contains('li', 'Five').should('not.have.class', 'active')
        cy.contains('li', 'Seven').should('not.have.class', 'active')
        cy.contains('li', 'Nine').should('not.have.class', 'active') 
    });
  });

});
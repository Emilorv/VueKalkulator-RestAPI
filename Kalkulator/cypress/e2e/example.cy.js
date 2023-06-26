// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Kalkulator!");
  });
});

describe('Form submission', () => {
  it('should submit successfully if form is valid', ()=>{
    cy.visit('/kontaktskjema')
    cy.get('#nameInput').type('John');
    cy.get('#emailInput').type('John@Doe.com')
    cy.get("#melding").type('Hallo')
    cy.get("button[type=submit]").click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`success`)
    })
  })
  
  it('should disable submit button if form is empty', () => {
    let spy = cy.spy(window, 'alert');
    cy.visit('/kontaktskjema')
    cy.get('#nameInput').type('John');
    cy.get('#emailInput').type('John@Doe.com')
    cy.get("#melding").type('Hallo')
    cy.get("button[type=submit]").click()
    .wait(4000)
    .then(() => {
        expect(spy).to.haveOwnProperty('callCount');
        expect(spy).to.not.be.called;
    });

  })
})



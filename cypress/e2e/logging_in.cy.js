describe('Log in functionality', () => {
  it('successful login', () => {
    cy.visit('localhost:3000');
    cy.get("#handle").type("kay");
    cy.get("#password").type("mypassword", { force: true });
    cy.get("#login-btn").click({ force: true });
    cy.get(".peep-input").should("exist");
  })
  it('unsuccessful login', () => {
    cy.visit('localhost:3000');
    cy.get("#handle").type("kay");
    cy.get("#password").type("wrong", { force: true });
    cy.get("#login-btn").click({ force: true });
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Incorrect Details");
    });
  })
})
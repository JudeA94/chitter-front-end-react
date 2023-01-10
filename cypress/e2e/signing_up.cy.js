describe('Signing up functionality', () => {
  it('successful login', () => {
    cy.visit('localhost:3000');
    cy.get("#sign-up").click({force: true});
    cy.get("#signup-handle").type("testHandle", {force: true});
    cy.get("#signup-password").type("testHandle", {force: true});
    cy.get("#signup-btn").click({force: true});
    cy.on("window:alert", (str) => {
      expect(str).to.equal("You can now log in");
    });
  })
})
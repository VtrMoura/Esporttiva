describe("Authentication", () => {
  it("should register a new user", () => {
    cy.visit("/cadastro");
    cy.get('input[name="name"]').type("Teste Usuario");
    cy.get('input[name="email"]').type("teste@email.com");
    cy.get('input[name="password"]').type("senha123");
    cy.get('input[name="confirmPassword"]').type("senha123");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/dashboard");
  });

  it("should login an existing user", () => {
    cy.visit("/login");
    cy.get('input[name="email"]').type("usuario@email.com");
    cy.get('input[name="password"]').type("senha123");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/dashboard");
  });
});

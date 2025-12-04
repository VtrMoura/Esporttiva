describe("Home Page", () => {
  it("should load the home page successfully", () => {
    cy.visit("/");
    cy.contains("Jogue. Conecte.").should("be.visible");
    cy.contains("Viva o esporte.").should("be.visible");
  });

  it("should have navigation links", () => {
    cy.visit("/");
    cy.contains("Sobre").should("be.visible");
    cy.contains("Ajuda").should("be.visible");
    cy.contains("Entrar").should("be.visible");
    cy.contains("Cadastrar").should("be.visible");
  });

  it("should navigate to spaces page", () => {
    cy.visit("/");
    cy.contains("Ver espaços").first().click();
    cy.url().should("include", "/espacos");
  });
});

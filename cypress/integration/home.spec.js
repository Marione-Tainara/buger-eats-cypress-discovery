describe("home page", () => {
  it("app deve estar online", () => {
    cy.visit("/");
    // para encontrar um teste na
    cy.get("#page-home main  h1").should(
      "have.text",
      "Seja um parceiro entregador pela Buger Eats"
    );
  });
});

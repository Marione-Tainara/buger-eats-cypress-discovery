describe("home page", () => {
  it("app deve estar online", () => {
    // resolução da tela
    cy.viewport(1440, 900);
    cy.visit("https://buger-eats-qa.vercel.app/");

    // para encontrar um teste na
    cy.get("#page-home main  h1").should(
      "have.text",
      "Seja um parceiro entregador pela Buger Eats"
    );
  });
});

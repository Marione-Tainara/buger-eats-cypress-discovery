class signupPage {
  go() {
    cy.viewport(1440, 900);
    cy.visit("/");

    cy.get('a[href="/deliver"]').click();
    cy.get("#page-deliver form h1").should(
      "have.text",
      "Cadastre-se para  fazer entregas"
    );
  }
  fillForm(deliver) {
    //pegando informações pelo input e atribuito name, pega a variável de cima e ponto o dado que quero buscar dentro dela
    cy.get('input[name="fullName"]').type(deliver.name);
    cy.get('input[name="cpf"]').type(deliver.cpf);
    cy.get('input[name="email"]').type(deliver.email);
    cy.get('input[name="whatsapp"]').type(deliver.whatsapp);
    cy.get('input[name="postalcode"]').type(deliver.address.cep);
    cy.get('input[type="button"][value="Buscar CEP"]').click();
    cy.get('input[name="address-number"]').type(deliver.address.number);
    cy.get('input[name="address-details"]').type(deliver.address.details);
    cy.get('input[name="address"]').should(
      "have.value",
      deliver.address.street
    );
    cy.get('input[name="district"]').should(
      "have.value",
      deliver.address.district
    );
    cy.get('input[name="city-uf"]').should(
      "have.value",
      deliver.address.city_state
    );

    cy.contains(".delivery-method li", deliver.metodo_entrega).click();
    cy.get('input[accept^="image"]').attachFile("/img/" + deliver.cnh);
  }
  submit() {
    cy.get('form button[type="submit"]').click();
  }
  modalContentShouldBe(expectMessage) {
    cy.get(".swal2-container .swal2-html-container").should(
      "have.text",
      expectMessage
    );
  }
  alertMessageShouldBe(expectMessage) {
    // cy.get('div [class="alert-error"]').should("have.text", expectMessage);
    // combinação de localizador e texto
    cy.contains(".alert-error", expectMessage).should("be.visible");
  }
}

//exportando como uma nova estancia
export default new signupPage();

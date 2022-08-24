import signup from "../pages/SignupPage";
import SignupFactory from "../factories/SignupFactory";
import SignupPage from "../pages/SignupPage";

describe("Signup", () => {
  it("user should become a deliverer", function () {
    var deliver = SignupFactory.deliver();
    signup.go();
    signup.fillForm(deliver);
    signup.submit();

    const expectMessage =
      "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.";
    SignupPage.modalContentShouldBe(expectMessage);
  });

  it("incorrect document", function () {
    var deliver = SignupFactory.deliver();

    deliver.cpf = "000000141aa";

    signup.go();
    signup.fillForm(deliver);
    signup.submit();
    signup.alertMessageShouldBe("Oops! CPF inválido");
  });

  it("incorrect email", function () {
    var deliver = SignupFactory.deliver();

    deliver.email = "mari.com.br";

    signup.go();
    signup.fillForm(deliver);
    signup.submit();
    signup.alertMessageShouldBe("Oops! Email com formato inválido.");
  });

  context("requeride field", function () {
    const messages = [
      {
        field: "name",
        output: "É necessário informar o nome",
      },
      {
        field: "cpf",
        output: "É necessário informar o CPF",
      },
      {
        field: "email",
        output: "É necessário informar o email",
      },
      {
        field: "psotalcode",
        output: "É necessário informar o CEP",
      },
      {
        field: "number",
        output: "É necessário informar o número do endereço",
      },
      {
        field: "delivery_method",
        output: "Selecione o método de entrega",
      },
      {
        field: "cnh",
        output: "Adicione uma foto da sua CNH",
      },
    ];
    before(function () {
      signup.go();
      signup.submit();
    });
    messages.forEach(function (msg) {
      it(`${msg.field} is requerid`, function () {
        SignupPage.alertMessageShouldBe(msg.output);
      });
    });
  });
});


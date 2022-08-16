// import { faker } from "@faker-js/faker";

var faker = require("faker");
var cpf = require("gerador-validador-cpf");

export default {
  deliver: function () {
    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();

    var data = {
      name: `${firstName} ${lastName}`,
      cpf: cpf.generate(),
      email: faker.internet.email(firstName),
      whatsapp: "51999999999",
      address: {
        cep: "91350090",
        street: "Rua Roque Calage",
        number: "180",
        details: "apto 210",
        district: "Passo da Areia",
        city_state: "Porto Alegre/RS",
      },
      metodo_entrega: "Moto",
      cnh: "cnh-digital.jpg",
    };
    return data;
  },
};

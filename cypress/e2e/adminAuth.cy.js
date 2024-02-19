import loginData from "../fixtures/loginData.json";

describe("Авторизация админа", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Успешная авторизация", () => {
    cy.get(loginData.selectors.emailInput).type(loginData.happyPath.email);
    cy.get(loginData.selectors.passwordInput).type(
      loginData.happyPath.password
    );
    cy.get(loginData.selectors.submitButton).click();
    cy.url().should("include", "/index");
    cy.get(loginData.selectors.confTitle)
      .contains("Управление залами")
      .should("be.visible");
  });

  it("Неуспешная авторизация, валидация поля Логин", () => {
    cy.get(loginData.selectors.emailInput).type(loginData.sadPath2.email);
    cy.get(loginData.selectors.passwordInput).type(loginData.sadPath2.password);
    cy.get(loginData.selectors.submitButton).click();
    cy.get(loginData.selectors.emailInput).then(($input) => {
      expect($input[0].validationMessage).to.not.be.empty;
    });
  });

  it("Неуспешная авторизация, неверный пароль", () => {
    cy.get(loginData.selectors.emailInput).type(loginData.sadPath.email);
    cy.get(loginData.selectors.passwordInput).type(loginData.sadPath.password);
    cy.get(loginData.selectors.submitButton).click();
    cy.url().should("include", "/scripts/authorization");
    cy.get(loginData.selectors.body).should(
      "contain.text",
      "Ошибка авторизации!"
    );
  });
});

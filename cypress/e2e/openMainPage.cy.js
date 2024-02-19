import loginData from "../fixtures/loginData.json";

describe("Главная страница", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('Проверка текстов "Идём" и "Авторизация" на странице админа', () => {
    cy.get(loginData.selectors.h1Title)
      .contains(loginData.texts.h1Text)
      .should("be.visible");
    cy.get(loginData.selectors.h2Title)
      .contains(loginData.texts.h2Text)
      .should("be.visible");
  });
});


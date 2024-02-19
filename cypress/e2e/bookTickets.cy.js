import loginData from "../fixtures/loginData.json";

describe("Бронировать билеты", () => {
  beforeEach(() => {
    cy.visit(Cypress.config("secondaryUrl"));
  });

  it("Проверка страницы для заказа билетов", () => {
    cy.get(loginData.selectors.headerTitle)
      .should("exist")
      .and("contain", "Идём");
    cy.get(".page-nav").should("exist");
    cy.get(".page-nav__day_today > .page-nav__day-week");
  });

  it("Переход к дню недели и заказ билета", () => {
    cy.get(`[data-time-stamp="1708462800"] > .page-nav__day-week`).click();
    cy.get(".movie")
      .eq(1)
      .find(".movie-seances__time")
      .contains("11:00")
      .should("be.visible")
      .click();
    cy.get(".buying-scheme");
    cy.get(".buying-scheme__wrapper")
      .find(".buying-scheme__row")
      .eq(1)
      .find(".buying-scheme__chair.buying-scheme__chair_standart")
      .eq(5)
      .click();
    cy.get(".acceptin-button")
      .click({ force: true })
      .then(() => {
        cy.contains(
          "[onclick=\"location.href='scripts/sale_save.php'\"]",
          "Получить код бронирования"
        ).click();
      });

    //cy.get(".acceptin-button").click({ force: true });
    //cy.get(".acceptin-button").contains("Получить код бронирования").click();
    cy.get(".ticket__info-qr");
    cy.get(".ticket__details ticket__chairs").contains("2/9");
    // последняя строчка теста не проверяемая из-за функционала сайта
  });
});

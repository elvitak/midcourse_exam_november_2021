/* eslint-disable no-undef */
describe("User that visits the website", () => {
  before(() => {
    cy.intercept("GET", "https://api.github.com/search/users**", {
      fixture: "search_response.json",
    });
    cy.visit("/");
  });

  it("is expected to see search input field", () => {
    cy.get("[data-cy=search_input]").should("be.visible");
  });
});

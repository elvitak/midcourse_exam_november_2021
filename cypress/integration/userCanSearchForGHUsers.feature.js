/* eslint-disable no-undef */
describe("User that visits the website", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.github.com/search/users**", {
      fixture: "search_response.json",
    });
    cy.visit("/");
  });

  it("is expected to see search input field", () => {
    cy.get("[data-cy=search_input]").should("be.visible");
  });

  it("is expected to see 3 search results after typing barack", () => {
    cy.get("[data-cy=search_input]").type("barack");
    cy.get("[data-cy=search_btn]").click();
    cy.get("[data-cy=search_results]").children().should("have.length", 3);
    cy.get("[data-cy=search_results]").first().should("contain", "barack");
  });
});

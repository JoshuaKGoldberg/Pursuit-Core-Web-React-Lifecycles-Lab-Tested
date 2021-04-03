describe("feature two", () => {
  it("adds a todo and toast when submitted", () => {
    cy.visit("http://localhost:3000");
    cy.get("input").type("say hello");
    cy.get("form").submit();
    cy.get("#todos").contains("say hello");
    cy.contains("New todo added: say hello");
    cy.contains("Remaining todos: 1")
  });

  it("adds a second todo and toast when submitted", () => {
    cy.visit("http://localhost:3000");
    cy.get("input").type("say hello");
    cy.get("form").submit();
    cy.get("input").clear().type("go away");
    cy.get("form").submit();
    cy.get("#todos").contains("go away");
    cy.contains("New todo added: go away");
    cy.contains("Remaining todos: 2")
  });

  it("deletes one todo with a toast when one is deleted", () => {
    cy.visit("http://localhost:3000");
    cy.get("input").type("say hello");
    cy.get("form").submit();
    cy.get("input").clear().type("go away");
    cy.get("form").submit();
    cy.get("button").eq(4).click();
    cy.get("#todos").contains("go away");
    cy.contains("Todo deleted: say hello");
    cy.contains("Remaining todos: 1")
  });
});
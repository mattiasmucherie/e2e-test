describe("Just visit e2e test", () => {
  it("should visit and click the button 3 times", () => {
    cy.visit("/");
    const button = cy.get("button");
    button.dblclick();
    button.click();
    button.contains("count is 3");
  });
});

/// <reference types = "Cypress" />

describe('checking the counter application', () => {
 
  beforeEach(()=>{
    cy.visit('http://localhost:3000')
  })
 
  // it('should be able to vistit the application url', () => {
  //   cy.visit('http://localhost:3000')
  // })

  // it('should have all the components', () => {
  //   cy.visit('http://localhost:3000')
  //   cy.get("h2").should("exist")
  //   cy.get(".addButton").should("exist")
  //   cy.get(".reduceButton").should("exist")
  // })

  // it('should be able to increment the count', () => {
  //   cy.visit('http://localhost:3000');
  //   cy.get("h2").should("have.text", "The current count is 0")
  //   cy.get(".addButton").click();
  //   cy.get("h2").should("have.text", "The current count is 1")
  // })

  // it('should be able to decrement the count', () => {
  //   cy.visit('http://localhost:3000');
  //   cy.get("h2").should("have.text", "The current count is 0")
  //   cy.get(".reduceButton").click();
  //   cy.get("h2").should("have.text", "The current count is -1")
  // })

  // it('should be label of Add on the increment button', () => {
  //   cy.visit('http://localhost:3000');
    
  //   cy.get(".addButton").should("have.text","Add");
    
  // })

 
  it('should intercept get request', () => {
    cy.visit('http://localhost:3000');
    cy.intercept("GET", "http://localhost:8080/counter",{
      value: 34
    }).as("getRequest")

    cy.wait("@getRequest").should((data)=>{
      console.log("The data", data)
    })
  })

  it('should intercept POST request', () => {
    cy.visit('http://localhost:3000');
    cy.intercept("GET", "http://localhost:8080/counter",{
      fixture : "counter",
    }).as("getReq")

    cy.intercept("POST", "http://localhost:8080/counter",{
      value: 234
    }).as("postReq")

    cy.wait("@getReq")
    cy.get(".addButton").click()
    cy.wait("@postReq").then((r)=>{
      console.log("Post response",r);
    })
    cy.get("h2").should("have.text", "The current count is 234")
  })

})
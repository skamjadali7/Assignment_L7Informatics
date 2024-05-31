import data from '../fixtures/data.json'
describe("Test Good Page",()=> {
    it ("navigate URL and do the validation for good page",()=>{
        cy.visit('/index.html')
        cy.get('h1').should('contain',data.headerTextGood)
        cy.get('p').should('contain',data.paragraphTextGood)
        cy.get('body').should('have.css','background-color','rgb(0, 0, 0)')
        cy.get('body').should('have.css','color','rgb(227, 227, 227)')
    })
})
describe("Test Bad Page",()=> {
    it ("navigate URL and do the validation for bad page",()=>{
        cy.visit('/index-bad.html')
        cy.get('h1').should('contain',data.headerTextBad)
        cy.get('p').should('contain',data.paragraphTextBad)
        cy.get('body').should('have.css','background-color','rgb(0, 0, 0)')
        cy.get('body').should('have.css','color','rgb(53, 53, 53)')
    })
})
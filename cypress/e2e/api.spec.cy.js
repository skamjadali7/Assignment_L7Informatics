const apiUrl = "http://localhost:7668"
describe("Test L7 api page and endpoints validation",()=> {
    it("L7 API get request verification",()=>{
        cy.request({
            method:'GET',
            url:apiUrl+'/greeting',
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body).to.eq('Hello!');
        })
    })
    it ("L7 API post request verification",()=>{
        cy.request({
            method:'POST',
            url:apiUrl+'/reset-api'
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body).to.eq('reset');
        })
    })
    it ("L7 API get request 404 verification",()=>{
        cy.clock() // this will deplay to make API is ready to use
        cy.request({
            method:'GET',
            url:apiUrl+'/greeting',
            failOnStatusCode: false
        }).then((res)=>{
            expect(res.status).to.eq(404)
        })
    })
})

describe('UI spec', () => {
  it('passes', () => {
    // Visit page
    cy.visit('https://automationexercise.com/') 
    cy.contains('Signup').click()

    // Sign Up with all the required and non required fields (Date of Birth).
    cy.get('input[name="name"]').type('testuser')
    const uuid = () => Cypress._.random(0, 1e6)
    const id = uuid()
    cy.get('input[name="email"]').eq(1).type(id+'@aharotest.com')
    cy.get('button[type="submit"]').eq(1).click()
    cy.get('input[id="id_gender1"]').click()
    cy.get('input[id="password"]').type('testuser01')
    cy.get('select[id="days"]').select("5")
    cy.get('select[id="months"]').select("May")
    cy.get('select[id="years"]').select("1990")
    cy.get('input[id="first_name"]').type('test')
    cy.get('input[id="last_name"]').type('user01')
    cy.get('input[id="company"]').type('test')
    cy.get('input[id="address1"]').type('120 test')
    cy.get('select[id="country"]').select("Canada")
    cy.get('input[id="state"]').type('test')
    cy.get('input[id="city"]').type('test')
    cy.get('input[id="zipcode"]').type('1000')
    cy.get('input[id="mobile_number"]').type('1000')
    cy.get('button[type="submit"]').eq(0).click()
    cy.get('a').contains('Continue').click()

    //Click `KIDS dress` from category and Select the most valued product from the page > Add it to the cart.
    cy.get('.pull-right').eq(3).scrollIntoView().click()
    cy.get('a[href*="/product_details/22"]').scrollIntoView().click()
    cy.get('.cart').click()
    cy.get('a[href*="/view_cart"]').eq(1).click()

    // From the cart > proceed to checkout
    cy.get('.check_out').click()
    cy.get('a').contains('Place Order').click()

    //Add dummy payment data.
    cy.get('input[name="name_on_card"]').type('testuser')
    cy.get('input[name="card_number"]').type('9999999')
    cy.get('input[name="cvc"]').type('999')
    cy.get('input[name="expiry_month"]').type('09')
    cy.get('input[name="expiry_year"]').type('2028')
    cy.get('button').contains('Pay and Confirm Order').click()

    //verify that the order has been placed and Download the invoice
    cy.get('p').should('include.text','Your order has been confirmed')
    cy.get('a').contains('Download Invoice').click().end()
    //cy.readFile(".location").should('contain', 'Text for comparison')



  })
})
describe('users API', () => {

  it('verify the request returns the correct status code', () => {
    cy.request('https://jsonplaceholder.typicode.com/users/2').its('status').should('be.equal', 200)
  })

  it('verify the request returns 10 items', () => {
    cy.request('https://jsonplaceholder.typicode.com/users').its('body').should('have.length', 10)
  })

  it('should create post', () => {
    cy.request({
      metood: 'Post',
      url: 'https://jsonplaceholder.typicode.com/posts' ,
      body: {
        userid: '10',
        id: '101',
        title: 'laboriosam dolor voluptates',
        body: 'doloremque ex facilis sit sint culpa\nsoluta'
      }
    })
  })
})

/// <reference types="cypress" />

Cypress.Commands.add('login', (user, pass) => {
    const fd = new FormData()
    fd.append('username', user)
    fd.append('password', pass)
    fd.append('woocommerce-login-nonce', "f052895d86")
    fd.append('_wp_http_referer', `minha-conta/`)
    fd.append('login', "Login")
    cy.request({
        url: 'minha-conta/',
        method: 'POST',
        body: fd
    }).then(resp => {
        resp.headers['set-cookie']?.forEach(cookie => {
            cy.log(resp.headers)
            const firstPart = cookie.split(';')[0]
            const divisor = firstPart.indexOf('=')
            const key = firstPart.substring(0, divisor)
            const value = firstPart.substring(divisor + 1)
            cy.setCookie(key, value)
        })
    })
    cy.visit('minha-conta/')
})


Cypress.Commands.add('checkout', () => {
    cy.request({
        url: 'minha-conta/customer-logout/?_wpnonce=08b88be764',
        method: 'GET'
    })
    cy.visit('minha-conta/customer-logout/?_wpnonce=8284762935')
})

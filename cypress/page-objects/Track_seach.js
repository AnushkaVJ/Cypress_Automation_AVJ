class trackseach{
    Clicksearch(){
        cy.get('#musicsearch > div> p').click()
    }
    clicksearchbutton(){
        cy.get('#subHeader > div > div > form > div > div> div > div > div > div > button:nth-child(3)').click()
    }
    Checktrack(){
        cy.get('#fa596d83-a3ad-423a-b80e-556c6a8ce66d > td:nth-child(1) > span > span > input').check()
    }
    ClickTrack3dots(){
        cy.xpath('//*[@id="7547a4c3-68b3-453c-8ed3-473e3da7094f"]/td[9]/button/span[1]').click()
    }
    clickrunclearance(){
        cy.get('body > div> div> ul > li:nth-child(9)').click()
    }
}

export default trackseach
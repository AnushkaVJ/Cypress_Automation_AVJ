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
        cy.xpath('//*[contains(@class, "MuiTable-stickyHeader")]/tbody/tr[1]/td[9]/button').click()
        //*[@id="ef7d4529-0940-48b5-874b-c2cd59964834"]/td[9]/button/span[1]
    }
    clickrunclearance(){
        cy.contains('Run Clearance').click()
    }
}

export default trackseach
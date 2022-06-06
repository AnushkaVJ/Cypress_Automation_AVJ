var locators = require('../page-objects/locators.json')
class clearanceWizard{
    ProducrtionName(Name){
        cy.get(locators.CW_ProductionName).type(Name)
        return this
    }
    Genre(){
        cy.xpath(locators.CW_Genre).click()
        cy.get(locators.CW_SelectGenre).click()
    }

    DeadlineDate(){
        cy.get(locators.CW_Deadline).click()
        cy.get(locators.CW_selectDeadline).click()
    }

    Clicknext(){
        cy.get(locators.CW_NextBUtton).click()
    }

    Clicksave(){
        cy.xpath(locators.CW_Savebutton).click()
    }

    ClickClose(){
        cy.xpath(locators.CW_Closebutton).click()
    }

    



}

export default clearanceWizard
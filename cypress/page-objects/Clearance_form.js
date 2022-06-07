var locators = require('../page-objects/locators.json') 

class clearanceformcreate{
    ClickClearanceButton(){
        cy.get(locators.LN_Clearance).click({force:true})
    }

    AddformButton(){
        cy.get(locators.CF_AddformButton).click()
    }
    
    PRODUCTIONNAMEInput(ProductionName){
        cy.xpath(locators.CF_Productionname).type(ProductionName);
        return this
    }

    GenreDropdown(){
        cy.xpath(locators.CF_GenreDropdown).click()
        cy.get(locators.CF_SelectChildrenandEducation_genre).click()
        
    }

    DeadlineDate(){
        cy.xpath(locators.CF_DeadlineDate).click()
        cy.xpath(locators.CF_selectdeadline).click()

    }

    CreateForm(){
        cy.get(locators.CF_CreateForm).click()
        
    }

    FirstFormName(){
        cy.xpath(locators.Auto_Create_FormName)
    }

    ClearanceFormInput_synopsis(Synopsis){
        cy.get(locators.CF_Synopsis).type(Synopsis);
        return this
    }

    ClearanceFormInput_Notes(notes){
        cy.get(locators.CF_Notes).type(notes);
        return this
    }
   
    
}
export default clearanceformcreate

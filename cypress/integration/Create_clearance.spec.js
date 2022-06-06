
import LoginPages from "../page-objects/Login_page"
import login from "../page-objects/main"
import clearanceformcreate from "../page-objects/Clearance_form"
import trackseach from "../page-objects/Track_seach"
import clearanceWizard from "../page-objects/Clearance_Wizard"
var locators = require('../page-objects/locators.json') 
var cred = require('../page-objects/cred.json')

describe('Clearance',function(){
    const CC = new clearanceformcreate();
    const Trksearch = new trackseach();
    const Cwizard = new clearanceWizard();
    it('Should Login', () => {
        login(
          cred.EmailT,
          cred.PasswordT
        )
      })
    
    it('Access clearance forms page',function(){
        
        CC.ClickClearanceButton();
        cy.url().should('equal','https://soundmouse.net/admintools/ml-test/mllicensing/forms')
        
    })

    it('Verify Create Clearance Form',function (){
        CC.AddformButton();
        CC.PRODUCTIONNAMEInput('Automation 1');
        CC.GenreDropdown();
        CC.DeadlineDate();
        CC.CreateForm();
        cy.wait(2000);
        
        cy.xpath(locators.formname).invoke('text').then((value)=>{
            const value1 = value;
            cy.log(value1)
            expect(value1).to.eq('test manual ')
        })

    })

    it('Check mandatory fields in Create clearance form',function(){
        CC.AddformButton();
        CC.CreateForm();
        cy.wait(2000);
        cy.xpath(locators.CF_ProductionName_Mand).invoke('text').then((Name_mandatory)=>{
           const value2 = Name_mandatory;
           expect(value2).to.eq(' Name should not be empty.') 
        })
        cy.xpath(locators.CF_Genre_Mand).invoke('text').then((Genre_mandatory)=>{
            const value3 = Genre_mandatory;
            expect(value3).to.eq('Genre should not be empty.') 
        })
        cy.xpath(locators.CF_Deadline_mand).invoke('text').then((Deadline_mandatory)=>{
            const value4 = Deadline_mandatory;
            expect(value4).to.eq('Deadline should not be empty.') 
         })
    })
    
    it('Verify Create Clearance Form Validation messages',function(){
        CC.PRODUCTIONNAMEInput('long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter lo');
        CC.GenreDropdown();
        CC.DeadlineDate();
        CC.ClearanceFormInput_synopsis('long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long c');
        CC.ClearanceFormInput_Notes('long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long chaeacter long c')
        CC.CreateForm();
        cy.get(locators.CF_ProductionName_length).invoke('text').then((Name_CharacterLimit)=>{
            const value5 = Name_CharacterLimit;
            expect(value5).to.eq('Name should be less than 256 characters.')
        })
        cy.get(locators.CF_Synopsis_Length).invoke('text').then((Synopsis_characterlimit)=>{
            const value6 = Synopsis_characterlimit;
            expect(value6).to.eq('Synopsis should be less than 500 characters.')
        })
        cy.get(locators.CF_Notes_Length).invoke('text').then((Notes_characterLimit)=>{
            const value7 = Notes_characterLimit;
            expect(value7).to.eq('Clearance form notes should be less than 500 characters.')
        })
    })

    it('Verify Run Clearance from tracks',function(){
        Trksearch.Clicksearch();
        Trksearch.clicksearchbutton();
        //Trksearch.Checktrack();
        Trksearch.ClickTrack3dots();
        Trksearch.clickrunclearance();
        Cwizard.ProducrtionName('Automation 2');
        Cwizard.Genre();
        Cwizard.DeadlineDate();
        Cwizard.Clicknext();
        Cwizard.Clicksave();
        Cwizard.ClickClose();
        cy.get(locators.FormName_InsideForm).invoke('text').then((Formname_inside)=>{
            const value8 = Formname_inside;
            expect(value8).to.eq('Automation 2') 
         })
    })

   

})



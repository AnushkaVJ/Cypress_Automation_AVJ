/// <reference types="cypress" />

var locators = require('../page-objects/locators.json');
var data = require('../page-objects/data.json');

export function GoToUpload() {
  cy.wait(1000)
  cy.get(locators.Uploads).click({ force: true })
}

export function GoToUploadAlbums() {
  GoToUpload()
  cy.xpath(locators.UploadsAlbums).click({ force: true })
}

export function CreateUploadAlbums(UploadTrackEditParameter,Year,NoOfDiscs) {
  cy.xpath(locators.UploadsCreateAlbum).click({ force: true })
  for (let n = 1; n < 7; n++) {
    cy.xpath(`//*[@id="root"]/div/div/div/div/div/div[1]/div/div[2]/div/div/div[2]/div[2]/div/div/div/div[1]/div/div[1]/div/div[${n}]/div/div/input`).type(UploadTrackEditParameter)
  }
  for (let n = 1; n < 4; n=n+2) {
    cy.xpath(`//*[@id="root"]/div/div/div/div/div/div[1]/div/div[2]/div/div/div[2]/div[2]/div/div/div/div[1]/div/div[2]/div/div[${n}]/div/div/input`).type(UploadTrackEditParameter)
  }
  cy.xpath(`//*[@id="root"]/div/div/div/div/div/div[1]/div/div[2]/div/div/div[2]/div[2]/div/div/div/div[1]/div/div[2]/div/div[5]/div/div/div/input`).type(UploadTrackEditParameter)
  cy.xpath(`//*[@id="root"]/div/div/div/div/div/div[1]/div/div[2]/div/div/div[2]/div[2]/div/div/div/div[1]/div/div[2]/div/div[2]/div/div/input`).click()
  cy.xpath(locators.DatePickerYear).click()
  cy.wait(1000)
  cy.xpath(locators.BaseDatePicker).contains(Year).click({ force: true })
  cy.wait(1000)
  cy.xpath(locators.DatePickerN).contains('4').click({ force: true })
  cy.xpath(`//*[@id="root"]/div/div/div/div/div/div[1]/div/div[2]/div/div/div[2]/div[2]/div/div/div/div[1]/div/div[2]/div/div[4]/div/div/input`).type(NoOfDiscs)
  cy.xpath(locators.UploadsAlbumCreateButton).click({ force: true })
}

export function AlbumEditAssertion() {
  cy.wait(13000)

  for (let n = 2; n < 6; n++) {
    cy.xpath(`//*[@id="full-width-tabpanel-0"]/div/div/div/div[${n}]/div[3]`, { timeout: 1000 }).invoke('text').then((FieldValue) => {
      const FV = FieldValue;
      cy.xpath(`//*[@id="full-width-tabpanel-0"]/div/div/div/div[${n}]/div[1]`, { timeout: 1000 }).invoke('text').then((FieldName) => {
        const FN = FieldName;
        expect(data.UploadTrackEditParameter).to.eq(FV)
        cy.log(FN + ' =')
        cy.log(data.UploadTrackEditParameter)
      })
    })
  }
  cy.xpath(`//*[@id="full-width-tabpanel-0"]/div/div/div/div[7]/div[3]/time`, { timeout: 1000 }).invoke('text').then((FieldValue) => {
    const FV = FieldValue;
    cy.xpath(`//*[@id="full-width-tabpanel-0"]/div/div/div/div[7]/div[1]`, { timeout: 1000 }).invoke('text').then((FieldName) => {
      const FN = FieldName;
      expect('04/06/2022 12:00:00 AM').to.eq(FV)
      cy.log(FN + ' =')
      cy.log(FV)
    })
  })
  cy.xpath(`//*[@id="full-width-tabpanel-0"]/div/div/div/div[8]/div[3]`, { timeout: 1000 }).invoke('text').then((FieldValue) => {
    const FV = FieldValue;
    cy.xpath(`//*[@id="full-width-tabpanel-0"]/div/div/div/div[8]/div[1]`, { timeout: 1000 }).invoke('text').then((FieldName) => {
      const FN = FieldName;
      expect('5').to.eq(FV)
      cy.log(FN + ' =')
      cy.log(FV)
    })
  })

  for (let n = 9; n < 13; n++) {
    cy.xpath(`//*[@id="full-width-tabpanel-0"]/div/div/div/div[${n}]/div[3]`, { timeout: 1000 }).invoke('text').then((FieldValue) => {
      const FV = FieldValue;
      cy.xpath(`//*[@id="full-width-tabpanel-0"]/div/div/div/div[${n}]/div[1]`, { timeout: 1000 }).invoke('text').then((FieldName) => {
        const FN = FieldName;
        expect(data.UploadTrackEditParameter).to.eq(FV)
        cy.log(FN + ' =')
        cy.log(data.UploadTrackEditParameter)
      })
    })
  }
}


export function AddToAlbumAssertion() {
  cy.wait(25000)
  cy.xpath(`//*[@id="full-width-tabpanel-0"]/div/div/div/div[23]/div[3]`, { timeout: 1000 }).invoke('text').then((FieldValue) => {
    const FV = FieldValue;
    cy.xpath(`//*[@id="full-width-tabpanel-0"]/div/div/div/div[23]/div[1]`, { timeout: 1000 }).invoke('text').then((FieldName) => {
      const FN = FieldName;
      expect('Anushka').to.eq(FV)
      cy.log(FN + ' =')
      cy.log(FV)
    })
  })
}


export function GoToUploadSession(SelectedSession) {
  cy.wait(1000)
  cy.get(locators.Uploads).click({ force: true })
  cy.toast('Go to Upload Session', {
    duration: 3000,
    blocking: false,
  })
  cy.wait(1000)
  cy.xpath(locators.UploadsSession).click({ force: true })
  cy.wait(1000)
  // cy.get('body').then($body => {
  //   if ($body.find(SelectedSession).length) {
  //     cy.contains(SelectedSession).click({ force: true })
  //   } else {
  //     cy.xpath(locators.Pagination2).click()
  //     cy.wait(1500)
  //     cy.contains(SelectedSession).click({ force: true })
  //   }
  // })
  cy.contains(SelectedSession).click({ force: true })
  cy.wait(1000)
}
export function GoToTrackEditbyClickingOn3DOt(UploadsTrack3dot, UploadTrackEdit1) {
  cy.xpath(UploadsTrack3dot).click({ force: true })
  cy.wait(1000)
  cy.xpath(UploadTrackEdit1).click()
  cy.wait(1000)
  cy.toast('Edit Track', {
    duration: 3000,
    blocking: false,
  })
}

export function AddToAlbumByClickingOn3DOt(UploadsTrack3dot, UploadAddToAlbum) {
  cy.xpath(UploadsTrack3dot).click({ force: true })
  cy.wait(1000)
  cy.xpath(UploadAddToAlbum).click()
  cy.wait(1000)
  cy.xpath(locators.SelectAlbum).click()
  cy.wait(1000)
  cy.xpath(locators.AddToAlbumButton).click()
  cy.wait(1000)
}

export function TrackEditwithANDOR(UploadsTrack3dot, UploadTrackEdit1, UploadTrackTitleAND) {
  cy.xpath(UploadsTrack3dot).click({ force: true })
  cy.wait(1000)
  cy.xpath(UploadTrackEdit1).click()
  cy.wait(1000)
  cy.toast('Edit Track', {
    duration: 3000,
    blocking: false,
  })
  for (let n = 1; n < 32; n++) {
    cy.get(".MuiGrid-root").then($root => {
      if ($root.find(`#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(${n}) > div > div > input`).length > 0) {
        cy.get(`#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(${n}) > div > div > input`).then($foundelement => {
          if ($foundelement.hasClass('MuiOutlinedInput-input')) {
            cy.get(`#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(${n}) > div > div > input`).clear({ force: true })
            cy.get(`#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(${n}) > div > div > input`).type(UploadTrackTitleAND)
          }
        })
      }
      else if ($root.find(`#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(${n}) > div > div > div > input`).length > 0) {
        for (let i = 1; i < 5; i++) {
          cy.get(`#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(${n}) > div > div > div > input`).type('{backspace}')
        }
        cy.get(`#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(${n}) > div > div > div > input`).type(UploadTrackTitleAND)
      }
    });
  }

  cy.get(`#full-width-tab-0 > div > div > div > div > div:nth-child(9) > div:nth-child(2) > div > div > input`).clear({ force: true })
  cy.get(`#full-width-tab-0 > div > div > div > div > div:nth-child(9) > div:nth-child(2) > div > div > input`).type(UploadTrackTitleAND)


  cy.xpath(locators.TrackEditTags).click()

  for (let n = 1; n < 10; n++) {
    cy.get(".MuiGrid-root").then($root => {
      if ($root.find(`#full-width-tab-1 > div > div > div > div:nth-child(${n}) > div > div > div > input`).length > 0) {
        cy.get(`#full-width-tab-1 > div > div > div > div:nth-child(${n}) > div > div > div > input`).then($foundelement => {
          if ($foundelement.hasClass('MuiInputBase-input')) {
            for (let i = 1; i < 5; i++) {
              cy.get(`#full-width-tab-1 > div > div > div > div:nth-child(${n}) > div > div > div > input`).type('{backspace}')
            }
            cy.get(`#full-width-tab-1 > div > div > div > div:nth-child(${n}) > div > div > div > input`).type(UploadTrackTitleAND)
          }
        })
      }
    });
  }

  cy.get(locators.TrackEditAlbumMetadata).click()

  for (let n = 1; n < 5; n++) {
    cy.get(".MuiGrid-root").then($root => {
      if ($root.find(`#full-width-tab-2 > div > div > div > div > div:nth-child(${n}) > div > div > input`).length > 0) {
        cy.get(`#full-width-tab-2 > div > div > div > div > div:nth-child(${n}) > div > div > input`).then($foundelement => {
          if ($foundelement.hasClass('MuiInputBase-input')) {
            cy.get(`#full-width-tab-2 > div > div > div > div > div:nth-child(${n}) > div > div > input`).clear({ force: true })
            cy.get(`#full-width-tab-2 > div > div > div > div > div:nth-child(${n}) > div > div > input`).type(UploadTrackTitleAND)
          }
        })
      }
    });
  }
  for (let n = 7; n < 20; n++) {
    cy.get(".MuiGrid-root").then($root => {
      if ($root.find(`#full-width-tab-2 > div > div > div > div > div:nth-child(${n}) > div > div > input`).length > 0) {
        cy.get(`#full-width-tab-2 > div > div > div > div > div:nth-child(${n}) > div > div > input`).then($foundelement => {
          if ($foundelement.hasClass('MuiInputBase-input')) {
            cy.get(`#full-width-tab-2 > div > div > div > div > div:nth-child(${n}) > div > div > input`).clear({ force: true })
            cy.get(`#full-width-tab-2 > div > div > div > div > div:nth-child(${n}) > div > div > input`).type(UploadTrackTitleAND)
          }
        })
      }
    });
  }
  for (let i = 1; i < 5; i++) {
    cy.get(`#full-width-tab-2 > div > div > div > div > div > div > div > div > input`).type('{backspace}')
  }
  cy.get(`#full-width-tab-2 > div > div > div > div > div > div > div > div > input`).type(UploadTrackTitleAND)
}

export function SaveUploadEditTrack() {
  cy.wait(1000)
  cy.xpath(locators.UploadEditSaveButton).click()
  cy.wait(2000)
  cy.xpath(locators.UploadEditSaveConfirmation).click()
}

export function TrackEdit2(SelectDropdown1, SelectDropdown2, SelectDropdown3, UploadTrackEditParameter, PickValidDateFrom, PickValidDateTo, Year) {
  /////////////////////////////////////////////////////////////////
  cy.xpath(locators.TrackEditAlbumReleaseDate).click()
  cy.wait(1000)
  cy.xpath(locators.DatePickerYear).click()
  cy.wait(1000)
  cy.xpath(locators.BaseDatePicker).contains(Year).click({ force: true })
  cy.wait(1000)
  cy.xpath(locators.DatePickerN).contains(PickValidDateFrom).click({ force: true })
  cy.wait(1000)
  ////////////////////////////////////////////////////////////////
  cy.wait(1000)
  cy.xpath(locators.TrackEditNoOfDiscs).clear()
  cy.xpath(locators.TrackEditNoOfDiscs).type('{rightArrow}')
  cy.xpath(locators.TrackEditNoOfDiscs).type('5')
  cy.wait(1000)
  ///////////Go to Track Metadata//////////////////
  cy.get(locators.TrackEditTrackMetadata).click()
  cy.wait(1000)
  cy.get(locators.TrackEditOrigin).click()
  cy.wait(1000)
  cy.xpath(SelectDropdown1).click({ force: true })
  cy.wait(1000)
  cy.get(locators.TrackEditSubOrigin).click()
  cy.xpath(SelectDropdown2).click({ force: true })
  cy.wait(1000)
  cy.xpath(locators.TrackEditPosition).clear()
  cy.xpath(locators.TrackEditPosition).type('5')
  cy.wait(1000)
  cy.xpath(locators.TrackEditDiscNumber).clear()
  cy.xpath(locators.TrackEditDiscNumber).type('5')
  cy.wait(1000)
  cy.get(locators.TrackEditPlayoutContributorRole).click()
  cy.xpath(SelectDropdown3).click({ force: true })
  cy.wait(1000)
  cy.xpath(locators.TrackEditPlayoutContributorName).type(UploadTrackEditParameter)
  cy.wait(1000)
  cy.xpath(locators.TrackEditPlayoutContributorAdd).click()
  cy.wait(1000)
  /////////////////////////////////////////////////////////////////
  cy.xpath(locators.TrackEditValidFrom).click()
  cy.wait(1000)
  cy.xpath(locators.DatePickerYear).click()
  cy.wait(1000)
  cy.xpath(locators.BaseDatePicker).contains(Year).click({ force: true })
  cy.wait(1000)
  cy.xpath(locators.DatePickerN).contains(PickValidDateFrom).click({ force: true })
  cy.wait(1000)
  ////////////////////////////////////////////////////////////////
  cy.xpath(locators.TrackEdirValidTo).click()
  cy.wait(1000)
  cy.xpath(locators.DatePickerYear).click()
  cy.wait(1000)
  cy.xpath(locators.BaseDatePicker).contains(Year).click({ force: true })
  cy.wait(1000)
  cy.xpath(locators.DatePickerN).contains(PickValidDateTo).click({ force: true })
}

export function TrackEditAssertion() {
  cy.wait(1000)
  cy.get(locators.TrackAllTab).click({force: true})
  cy.wait(1000)

  for (let n = 2; n < 31; n++) {
    cy.xpath(`//*[@id='full-width-tabpanel-2']/div/div/div/div[${n}]/div[3]`, { timeout: 1000 }).invoke('text').then((FieldValue) => {
      const FV = FieldValue;
      cy.xpath(`//*[@id="full-width-tabpanel-2"]/div/div/div/div[${n}]/div[1]`, { timeout: 1000 }).invoke('text').then((FieldName) => {
        const FN = FieldName;
        expect(data.UploadTrackEditParameter).to.eq(FV)
        cy.log(FN + ' =')
        cy.log(data.UploadTrackEditParameter)
      })
    })
  }

  for (let i = 32; i < 37; i++) {
    cy.xpath(`//*[@id="full-width-tabpanel-2"]/div/div/div/div[${i}]/div/span`, { timeout: 1000 }).invoke('text').then((FieldValue) => {
      const FV = FieldValue;
      cy.xpath(`//*[@id="full-width-tabpanel-2"]/div/div/div/div[${i}]/label`, { timeout: 1000 }).invoke('text').then((FieldName) => {
        const FN = FieldName;
        expect(data.UploadTrackEditParameter).to.eq(FV)
        cy.log(FN + ' =')
        cy.log(data.UploadTrackEditParameter)
      })
    })
  }

  for (let i = 37; i < 40; i++) {
    cy.xpath(`//*[@id="full-width-tabpanel-2"]/div/div/div/div[${i}]/div[3]`, { timeout: 1000 }).invoke('text').then((FieldValue) => {
      const FV = FieldValue;
      cy.xpath(`//*[@id="full-width-tabpanel-2"]/div/div/div/div[${i}]/div[1]`, { timeout: 1000 }).invoke('text').then((FieldName) => {
        const FN = FieldName;
        expect('5').to.eq(FV)
        cy.log(FN + ' =')
        cy.log('5')
      })
    })
  }

  //dates
  for (let i = 40; i < 43; i++) {
    cy.xpath(`//*[@id="full-width-tabpanel-2"]/div/div/div/div[${i}]/div[3]/time`, { timeout: 1000 }).invoke('text').then((FieldValue) => {
      const FV = FieldValue;
      cy.xpath(`//*[@id="full-width-tabpanel-2"]/div/div/div/div[${i}]/div[1]`, { timeout: 1000 }).invoke('text').then((FieldName) => {
        const FN = FieldName;
        expect('04/06/2022 12:00:00 AM').to.eq(FV)
        cy.log(FN + ' =')
        cy.log('04/06/2022 12:00:00 AM')
      })
    })
  }
}

export function DeleteCreatedAlbum() {
  cy.wait(1000)
  cy.xpath(locators.UploadsAlbum3Dot).click()
  cy.xpath(locators.UploadsDeleteAlbums).click()
  cy.contains(locators.UploadsDeleteAlbumsConfirmation).click()
}

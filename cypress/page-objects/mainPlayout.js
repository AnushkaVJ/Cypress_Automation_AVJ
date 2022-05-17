/// <reference types="cypress" />
var locators = require('./locators.json');


//Playout
export function GoInsideMyPlaylist() {
  cy.wait(4000)
  cy.get(locators.MyPlaylists).click({ force: true })
  cy.wait(2000)
  cy.get(locators.InsidePlaylist).click({ force: true })
  cy.wait(2000)
}

//////////////////////////////////
export function MultipleTracksSelectionInsidePlaylist() {
  cy.get(locators.Checkbox1InsidePlaylist).click()
  cy.wait(1000)
  cy.get(locators.Checkbox2InsidePlaylist).click()
  cy.wait(1000)
}

export function MultipleTracksAddtoPlayout() {
  ///////////////////////////////=============================
  cy.get(locators.CreatedPlayoutSessionAction).click()
  cy.wait(2500)
  cy.xpath(locators.PlaylistAddtoPlayoutMultiple).click({ force: true })
  cy.wait(1000)
}
export function MultipleTracksPublishtoPlayout() {
  cy.get(locators.CreatedPlayoutSessionAction).click()
  cy.wait(3500)
  cy.xpath(locators.MultipleTracksPublishtoPlayout).click({ force: true })
  cy.wait(2500)
}

export function ClickOnCreatedPlayoutSession() {
  cy.xpath(locators.CreatedPlayoutSession).click({ force: true })
  cy.wait(2000)
}
export function PlayoutTrackTitleSort() {
  cy.xpath(locators.SearchTrackTitleSort).click({ force: true })
  cy.wait(2500)
}

export function AddtoPlayoutAssertion(DHIDinMYPlaylist, DHIDinPlayout) {
  cy.xpath(DHIDinMYPlaylist, { timeout: 1000 }).invoke('text').then((myplaylistdhid1) => {
    const myplaylistdh1 = myplaylistdhid1;

    GotoPlayoutAndSelectCreatedPlayout()

    cy.get(DHIDinPlayout, { timeout: 1000 }).invoke('text').then((playoutdhid1) => {
      const playoutdh1 = playoutdhid1;

      if (expect(myplaylistdh1).to.eq(playoutdh1)) {
        cy.log('**Add to Playout is Success ==> Data Hub ID in MyPlaylist/Search is Equal to Data Hub ID in Playout**')
      }
    });
  });
}




export function GotoPlayout() {
  cy.get(locators.Playout).click({ force: true })

  cy.get('body').then($body => {
    if ($body.find(locators.PlayoutStatusClearButton).length) {
      ClickOnPlayoutStatusClearButton()
    }
    cy.get(locators.PlayoutStatusDropdown).click()
    cy.get(locators.PlayoutStatusDropdownCreated).click()
    cy.wait(2000)
    cy.get(locators.PlayoutSearch).click({ force: true })
    cy.wait(1000)

  })
}

export function ClickOnPlayoutStatusClearButton() {
  cy.get(locators.PlayoutStatusClearButton).click({ force: true })
  cy.wait(1000)
}
export function GotoPlayoutAndSelectCreatedPlayout() {
  GotoPlayout()
  cy.xpath(locators.CreatedPlayoutSession).click({ force: true })
  cy.wait(2000)
}
export function MultipleTracksAddtoPlayoutAssertion(DHIDinsSearchorPlaylist, DHIDinPlayout) {
  cy.xpath(DHIDinsSearchorPlaylist, { timeout: 1000 }).invoke('text').then((myplaylistdhid1) => {
    const myplaylistdh1 = myplaylistdhid1;
    cy.wait(2000)
    cy.xpath(locators.Row2InsidePlaylist).click()
    cy.wait(2000)
    cy.xpath(DHIDinsSearchorPlaylist, { timeout: 1000 }).invoke('text').then((myplaylistdhid2) => {
      const myplaylistdh2 = myplaylistdhid2;

      GotoPlayoutAndSelectCreatedPlayout()

      PlayoutTrackTitleSort()
      cy.get(DHIDinPlayout, { timeout: 1000 }).invoke('text').then((playoutdhid1) => {
        const playoutdh1 = playoutdhid1;

        cy.wait(2000)
        cy.xpath(locators.Row2InsidePlaylist).click()
        cy.wait(2000)

        cy.get(DHIDinPlayout, { timeout: 1000 }).invoke('text').then((playoutdhid2) => {
          const playoutdh2 = playoutdhid2;

          if (expect(myplaylistdh1).to.eq(playoutdh1)) {
            cy.log('**Track1 Add to Playout is Success ==> Data Hub ID of Track1 in MyPlaylist/Search is Equal to Data Hub ID of Track1 in Playout**')
          }
          if (expect(myplaylistdh2).to.eq(playoutdh2)) {
            cy.log('**Track2 Add to Playout is Success ==> Data Hub ID of Track2 in MyPlaylist/Search is Equal to Data Hub ID of Track2 in Playout**')
          }
        });
      });
    });
  });
}

export function MultipleTracksAddtoPlayoutAssertionForMultiTrackPlaylist(DHIDinsSearchorPlaylist, DHIDinPlayout) {
  cy.xpath(DHIDinsSearchorPlaylist, { timeout: 1000 }).invoke('text').then((myplaylistdhid1) => {
    const myplaylistdh1 = myplaylistdhid1;
    cy.wait(2000)
    cy.xpath(locators.Row2InsidePlaylist).click()
    cy.wait(2000)
    cy.xpath(DHIDinsSearchorPlaylist, { timeout: 1000 }).invoke('text').then((myplaylistdhid2) => {
      const myplaylistdh2 = myplaylistdhid2;

      GotoPlayoutAndSelectCreatedPlayout()
      //Comment this line to run Add to playout multiple tracks by playlist
      // PlayoutTrackTitleSort()
      cy.get(DHIDinPlayout, { timeout: 1000 }).invoke('text').then((playoutdhid1) => {
        const playoutdh1 = playoutdhid1;

        cy.wait(2000)
        cy.xpath(locators.Row2InsidePlaylist).click()
        cy.wait(2000)

        cy.get(DHIDinPlayout, { timeout: 1000 }).invoke('text').then((playoutdhid2) => {
          const playoutdh2 = playoutdhid2;

          if (expect(myplaylistdh1).to.eq(playoutdh1)) {
            cy.log('**Track1 Add to Playout is Success ==> Data Hub ID of Track1 in MyPlaylist/Search is Equal to Data Hub ID of Track1 in Playout**')
          }
          if (expect(myplaylistdh2).to.eq(playoutdh2)) {
            cy.log('**Track2 Add to Playout is Success ==> Data Hub ID of Track2 in MyPlaylist/Search is Equal to Data Hub ID of Track2 in Playout**')
          }
        });
      });
    });
  });
}




export function RemoveTracksInPlayout() {
  // GotoPlayoutAndSelectCreatedPlayout()
  SelectResultPerPageinPagination(locators.Pagination, locators.Pagination200)
  cy.get(locators.CreatedPlayoutSessionCheckAll).click()
  cy.wait(1000)
  cy.get(locators.CreatedPlayoutSessionAction).click()
  cy.wait(1000)
  cy.get(locators.CreatedPlayoutSessionActionRemove).click()
  cy.wait(1000)
  cy.get(locators.CreatedPlayoutSessionActionRemoveYes).click()
}
export function GotoSearchTracks() {
  cy.wait(1000)
  cy.get(locators.SearchModule).click({ force: true })
  cy.wait(1000)
  cy.xpath(locators.SearchButton).click()
  cy.wait(1000)
  cy.xpath(locators.SearchTrackTitleSort).click()
  cy.wait(2500)
}

export function AddorPublishtoPlayout(InsidePlaylist3dot, PlaylistAddorPublishtoPlayout) {
  cy.xpath(InsidePlaylist3dot).click()
  cy.wait(1000)
  cy.get(PlaylistAddorPublishtoPlayout).click()
  cy.wait(1000)
}

export function GotoPlayoutForPublish() {
  cy.get(locators.Playout).click()
  cy.wait(1000)
  cy.xpath(locators.PlayoutStatus, { timeout: 1000 }).invoke('text').then((playoutstatuscheck) => {
    const playoutstatus = playoutstatuscheck;
    cy.xpath(locators.LatestPlayoutSession).click({ force: true })
    cy.wait(1000)
    cy.xpath(locators.PlayoutTrackTitleSort).click()
    cy.wait(2500)

    if (expect(playoutstatus).to.eq('Published')) {
      cy.log('**Publish to Playout Status ==> Published**')
    }
  });
}

export function PublishtoPlayoutAssertion(DHIDinMYPlaylist, DHIDinPlayout, CWRRadioStationSearch, PublishtoPlayoutRadioStationNext, PublishtoPlayoutClassical, PublishtoPlayoutPublishButton) {
  cy.xpath(DHIDinMYPlaylist, { timeout: 1000 }).invoke('text').then((myplaylistdhid1) => {
    const myplaylistdh1 = myplaylistdhid1;

    cy.xpath(CWRRadioStationSearch).click()
    cy.wait(1000)
    cy.xpath(PublishtoPlayoutRadioStationNext).click()
    cy.wait(1000)
    cy.xpath(PublishtoPlayoutClassical).click()
    cy.wait(1000)
    cy.xpath(PublishtoPlayoutPublishButton).click()

    GotoPlayoutForPublish()
    cy.xpath(locators.PlayoutTrackType, { timeout: 1000 }).invoke('text').then((playouttracktype) => {
      const tracktype = playouttracktype;

      cy.get(DHIDinPlayout, { timeout: 1000 }).invoke('text').then((playoutdhid1) => {
        const playoutdh1 = playoutdhid1;

        if (expect(myplaylistdh1).to.eq(playoutdh1))
          if (expect(tracktype).to.eq('Classical')) {
            cy.log('**Publish to Playout is Success ==> Data Hub ID is matching & Track Type is Classical**')
          }
      });
    });
  });
}


export function PublishtoPlayoutAssertionMultiple(DHIDinMYPlaylist, DHIDinPlayout, CWRRadioStationSearch, PublishtoPlayoutRadioStationNext, PublishtoPlayoutClassical, PublishtoPlayoutPublishButton) {
  cy.xpath(DHIDinMYPlaylist, { timeout: 1000 }).invoke('text').then((myplaylistdhid1) => {
    const myplaylistdh1 = myplaylistdhid1;

    cy.xpath(locators.Row2InsidePlaylist).click({ force: true })

    cy.xpath(DHIDinMYPlaylist, { timeout: 1000 }).invoke('text').then((myplaylistdhid2) => {
      const myplaylistdh2 = myplaylistdhid2;

      MultipleTracksPublishtoPlayout()

      cy.xpath(CWRRadioStationSearch).click()
      cy.wait(1000)
      cy.xpath(PublishtoPlayoutRadioStationNext).click()
      cy.wait(3000)
      cy.xpath(PublishtoPlayoutClassical).click()
      cy.wait(1000)
      cy.xpath(PublishtoPlayoutPublishButton).click()

      GotoPlayoutForPublish()
      cy.xpath(locators.PlayoutTrackType, { timeout: 1000 }).invoke('text').then((playouttracktype) => {
        const tracktype = playouttracktype;

        cy.get(DHIDinPlayout, { timeout: 1000 }).invoke('text').then((playoutdhid1) => {
          const playoutdh1 = playoutdhid1;

          cy.xpath(locators.Row2InsidePlaylist).click()

          cy.xpath(locators.PlayoutTrackType, { timeout: 1000 }).invoke('text').then((playouttracktype) => {
            const tracktype2 = playouttracktype;

            cy.get(DHIDinPlayout, { timeout: 1000 }).invoke('text').then((playoutdhid1) => {
              const playoutdh2 = playoutdhid1;

              if (expect(tracktype).to.eq('Classical'))
                if (expect(myplaylistdh1).to.eq(playoutdh1))
                  if (expect(tracktype2).to.eq('Classical'))
                    if (expect(myplaylistdh2).to.eq(playoutdh2)) {
                      cy.log('**Publish to Playout is Success ==> Data Hub ID is matching & Track Type is Classical in both Tracks**')
                    }
            });
          });
        });
      });
    });
  });
}

export function PublishButtonShouldEnableinCreatedStatus() {
  cy.xpath(locators.Playout3dot).click({ force: true })
  cy.wait(1000)
  if (cy.xpath(locators.PublishbyPlayout).not('have.class', 'Mui-disabled')) {
    cy.log('**Publish Button is Enabled ==> Not have Mui-disabled Class**')
  }
  cy.wait(1000)
}

export function PublishButtonShouldNotEnable() {
  cy.xpath(locators.Playout3dot).click({ force: true })
  cy.wait(2000)
  if (cy.xpath(locators.PublishbyPlayout).should('have.class', 'Mui-disabled')) {
    cy.log('**Publish Button is Disabled ==> Have Mui-disabled Class**')
  }
  cy.wait(1000)
}

export function GoBackToPlayoutSessions() {
  cy.xpath(locators.GoBackPlayoutSessions).click({ force: true })
  cy.wait(1000)
}
export function SelectPublishedStatus(PlayoutStatusDropdown) {
  cy.xpath(locators.RemoveCloseButtonInPlayoutStatus).click({ force: true })
  cy.wait(1000)
  cy.get(locators.PlayoutStatusDropdown).click({ force: true })
  cy.xpath(PlayoutStatusDropdown).click({ force: true })
  cy.get(locators.PlayoutSearch).click({ force: true })
}

export function ShouldNotEnableRemove() {
  cy.wait(2000)
  cy.xpath(locators.InsidePlayout3dot).click({ force: true })
  cy.wait(1000)
  if (cy.xpath(locators.PlayOutTrackRemoveButtonInsideGrid).should('have.class', 'Mui-disabled')) {
    cy.log('**Remove Button is Disabled in Single Track==> Have Mui-disabled Class**')
  }
  cy.get(locators.CreatedPlayoutSessionCheckAll).click({ force: true })
  cy.wait(1000)
  cy.get(locators.CreatedPlayoutSessionAction).click({ force: true })
  cy.wait(1000)
  if (cy.xpath(locators.PlayOutTrackRemoveButton).should('have.class', 'Mui-disabled')) {
    cy.log('**Remove Button is Disabled in Multiple Track==> Have Mui-disabled Class**')
  }
  cy.wait(1000)
}






export function VerifyValidationMessage() {
  cy.wait(1000)
  cy.get(locators.ValidationAlert, { timeout: 1000 }).invoke('text').then((ValidationAlert) => {
    const STValidationAlert = ValidationAlert;
    if (expect(STValidationAlert).to.eq("1 Track(s) Exist.")) {
      cy.log('**Validation Alert Displayed When Adding Same Track To Playout==> Track(s) Exist.**')
    }
  });
  cy.xpath(locators.PublishtoPlayoutRadioStationNextMultiple).click({ force: true })
}

export function SelectResultPerPageinPagination(Pagination, Pagination25) {
  cy.xpath(Pagination).click({ force: true })
  cy.wait(1000)
  cy.xpath(Pagination25).click({ force: true })
  cy.wait(1000)
}

export function SelectAll() {
  cy.get(locators.CreatedPlayoutSessionCheckAll).click({ force: true })
  cy.wait(1000)
}

export function SelectUpToGivenCount(count) {
  for (let n = 1; n < count; n++) {
    cy.get(`#mm-viewPort > table > tbody > tr:nth-child(${n}) > td:nth-child(1)>span>span>input`).click({ force: true })
  }
  cy.wait(1000)
}

export function VerifyTracksAddedToasterMessage() {
  cy.xpath(locators.TracksAddedToasterMessage, { timeout: 1000 }).invoke('text').then((TracksAddedToasterMessage) => {
    const ToasterMessage = TracksAddedToasterMessage;

    cy.xpath(locators.PaginationTrackCount).invoke('text').then((text) => {
      if (text.includes('50')) {
        expect(ToasterMessage).to.eq("50/50 Track(s) Added to Playout 1298")
        // cy.log('**50 Tracks Added to Playout Sucess**')
      }
      else {
        (text.includes('25'))
        expect(ToasterMessage).to.eq("25/25 Track(s) Added to Playout 1298")
        // cy.log('**25 Tracks Added to Playout Sucess**')
      }
    })
  });
}

export function VerifyTracksAddedToasterMessageForMoreThan50Tracks() {
  cy.xpath(locators.TracksAddedToasterMessage).invoke('text').then((TracksAddedToasterMessage) => {
    const ToasterMessage = TracksAddedToasterMessage;
    if (expect(ToasterMessage).to.eq("Sorry, You can add only total of 50 tracks to a library!")) {
      cy.log('**Validation Toaster Message Displayed ==> Sorry, You can add only total of 50 tracks to a library!**')
    }
  });
}


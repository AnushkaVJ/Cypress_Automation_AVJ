/// <reference types="cypress" />
import {
  navigate,
  login,signout,}from'../page-objects/main'

import {
  AddorPublishtoPlayout,
  GotoSearchTracks,
  PublishButtonShouldEnableinCreatedStatus,
  GotoPlayout,
  RemoveTracksInPlayout,
  ClickOnCreatedPlayoutSession,
  GoBackToPlayoutSessions,
  SelectPublishedStatus,
  PublishButtonShouldNotEnable,
  ShouldNotEnableRemove,
  PlayoutTrackTitleSort,
} from '../page-objects/mainPlayout'

var locators = require('../page-objects/locators.json');
var cred = require('../page-objects/cred.json');

before(() => {
  navigate()
})

beforeEach(() => {
  cy.viewport(1920, 1080)
})

describe('Publish by Playout', () => {
  it('Should Login', () => {
    login(
      cred.Email,
      cred.Password
    )
  })
  it('Go to Search Tracks', () => {
    GotoSearchTracks()
  })
  it('Add to Playout by Search', () => {
    AddorPublishtoPlayout(
      locators.InsideSearch3Dot, 
      locators.SearchAddtoPlayout
    )
  })
  it('Go to Playout and Select "Created" Status', () => {
    GotoPlayout()
  })
  it('Publish Button Should Enable in Created Status', () => {
    PublishButtonShouldEnableinCreatedStatus()
  })
  it('Click On Created Playout Session', () => {
    ClickOnCreatedPlayoutSession()
  })
  it('Remove If Tracks are In The Playout Session', () => {
    RemoveTracksInPlayout()
  })
  it('Go Back To Playout Sessions', () => {
    GoBackToPlayoutSessions()
  })



  it('Select Published Status', () => {
    SelectPublishedStatus(locators.PlayoutStatusDropdownPublished)
  })
  it('Publish Button Should Not Enable in Published Status', () => {
    PublishButtonShouldNotEnable()
  })
  it('Go Inside Published Playout Session', () => {
    ClickOnCreatedPlayoutSession()
  })
  it('Should Not Enable Remove[Single,Multiple]', () => {
    ShouldNotEnableRemove()
  })
  it('Go Back To Playout Sessions', () => {
    GoBackToPlayoutSessions()
  })
  

  
  it('Select Completed Status', () => {
    SelectPublishedStatus(locators.PlayoutStatusDropdownCompleted)
  })
  it('Publish Button Should Not Enable in Completed Status', () => {
    PublishButtonShouldNotEnable()
  })
  it('Go Inside Published Completed Session', () => {
    ClickOnCreatedPlayoutSession()
  })
  it('Should Not Enable Remove[Single,Multiple]', () => {
    ShouldNotEnableRemove()
  })
  it('Go Back To Playout Sessions', () => {
    GoBackToPlayoutSessions()
  })






  it('Select Error Status', () => {
    SelectPublishedStatus(locators.PlayoutStatusDropdownError)
  })
  it('Publish Button Should Not Enable in Error Status', () => {
    PublishButtonShouldNotEnable()
  }) 
  it('Go Inside Error Playout Session', () => {
    ClickOnCreatedPlayoutSession()
  })
  it('Should Not Enable Remove[Single,Multiple]', () => {
    ShouldNotEnableRemove()
  })
  it('Go Back To Playout Sessions', () => {
    GoBackToPlayoutSessions()
  })



  it('Select Archived Status', () => {
    SelectPublishedStatus(locators.PlayoutStatusDropdownArchived)
  })
  it('Publish Button Should Not Enable in Archived Status', () => {
    PublishButtonShouldNotEnable()
  })
  it('Sort to Find Arhived Playout Sessions with Tracks', () => {
    PlayoutTrackTitleSort()
  })
  it('Go Inside Archived Playout Session', () => {
    ClickOnCreatedPlayoutSession()
  })
  it('Should Not Enable Remove[Single,Multiple]', () => {
    ShouldNotEnableRemove()
  })
  it('Go Back To Playout Sessions', () => {
    GoBackToPlayoutSessions()
  })



  // it('Select Publish Failed Status', () => {
  //   SelectPublishedStatus(locators.PlayoutStatusDropdownPublishFailed)
  // })
  // it('Publish Button Should Not Enable in Publish Failed Status', () => {
  //   PublishButtonShouldNotEnable()
  // })

  it('Should Signout', () => {
    signout()
  })
})




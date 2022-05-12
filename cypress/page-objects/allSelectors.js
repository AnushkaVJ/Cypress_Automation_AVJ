const allSelectors = {
    Smdadaptor: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(2) > div > a > strong'],
    Smdadminnotes: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(3) > div:nth-child(3)'],
    Smdadmintags: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(4) > div:nth-child(3)'],
    Smdalbumadminnotes: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(6) > div:nth-child(3)'],
    Smdalternatetitle: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(7) > div:nth-child(3)'],
    Smdarranger: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(10) > div> a > strong'],
    Smdbbcalbumbarcode: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(11) > div:nth-child(3)'],
    Smdbpm: ['//*[@id="full-width-tabpanel-2"]/div/div/div/div[12]/text()'],
    Smdcatalogid: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(13) > div:nth-child(3)'],
    Smdcomposer: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(18) > div > a > strong'],
    Smdcomlyricist: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(19) > div:nth-child(3)'],
    Smdcontributortype: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(20) > div > span > i'],
    Smdcontributorname: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(20) > div > span > b'],
    Smdinstruments: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(27) > div > span'],
    Smdisrc: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(28) > div:nth-child(3)'],
    Smdiswc: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(29) > div:nth-child(3)'],
    Smdkeywords: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(30) > div > span'],
    Smdgenres: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(26) > div > span'],
    Smdlyricist: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(34) > div > a > strong'],
    Smdmoods: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(35) > div > span'],
    Smdorigin: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(36) > div:nth-child(3)'],
    Smdsuborigin: ['//*[@id="full-width-tabpanel-2"]/div/div/div/div[37]/div[3]'],
    Smdoripublisher: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(38) > div > a > strong'],
    Smdpline: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(39) > div:nth-child(3)'],
    Smdperformer: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(40) > div > a > strong'],
    Smdposition: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(41) > div:nth-child(3)'],
    Smdalbumartist: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(46) > div > a > strong'],
    Smddiscnumber: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(47) > div:nth-child(3)'],
    Smdalbumtitle: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(48) > div > a > strong'],
    Smdalbumnotes: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(49) > div:nth-child(3)'],
    Smdnumberofdiscs: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(50) > div:nth-child(3)'],
    Smdreleasedate: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(51) > div > time'],
    Smdpublisher: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(60) > div > a > strong'],
    Smdrecordlabel: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(61) > div:nth-child(3)'],
    Smdstyles: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(65) > div > span'],
    Smdsubadaptor: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(66) > div > a > strong'],
    Smdsubarranger: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(67) > div > a > strong'],
    Smdsublyricist: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(69) > div > a > strong'],
    Smdsubpublisher: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(70) > div > a > strong'],
    Smdtempo: ['//*[@id="full-width-tabpanel-2"]/div/div/div/div[73]/text()'],
    Smdtracknotes: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(75) > div:nth-child(3)'],
    Smdtracktitle: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(76) > div:nth-child(3)'],
    Smdversiontitle: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(77) > div:nth-child(3)'],
    Smdtranslator: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(78) > div > a > strong'],
    Smdvalidfrom: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(79) > div:nth-child(3)'],
    Smdvalidto: ['#full-width-tabpanel-2 > div > div > div > div:nth-child(80) > div:nth-child(3)'],



    Spplsearchbutton: ['#subHeader > div > form > div > div > button'],
    Sconfirmationdialogboxupdate: ['body > div.dialogBox > div > div > div > button:nth-child(1)'],
    Suploadstags: ['#simple-tab-1'],
    Suploadsalbummetadata: ['#simple-tab-2'],
    Suploadsavebutton: ['#full-width-tab-2 > div > div > div > div > div > button:nth-child(2)'],
    Sdatepickerto: ['body > div:nth-child(9) > div > div > div > div> div > div:nth-child(5) > div:nth-child(5) > button'],
    Sdatepickerfrom: ['body > div:nth-child(9) > div > div > div> div > div > div:nth-child(1) > div:nth-child(5) > button'],
    Scontributoraddbutton: ['#full-width-tab-0 > div > div > div > div > div:nth-child(9) > div:nth-child(1) > div > div > div > div > button:nth-child(1)'],
    Scontributorname: ['#full-width-tab-0 > div > div > div > div> div:nth-child(9) > div:nth-child(1) > div > div > div:nth-child(2) > div > div > input'],
    Scontributorsrole: ['#menu-role > div> ul > li:nth-child(1)'],
    Slicensingdescription: ['#mm-viewPort > table > thead > tr > th:nth-child(3) > span > label'],
    Sreportstatus: ['#mm-viewPort > table > thead > tr > th:nth-child(5) > span > label'],
    Susername: ['#mm-viewPort > table > thead > tr > th:nth-child(3) > span > label'],
    Screqueststype: ['#mm-viewPort > table > thead > tr > th:nth-child(6) > span > label'],
    Sworkspacen: ['#mm-viewPort > table > thead > tr > th:nth-child(2) > span > label'],
    Splayoutlib: ['#subHeader > div > form > div > div> span > div > h2'],
    Sclearanceformsgenre: ['#mm-viewPort > table > thead > tr > th:nth-child(4) > span > label'],
    Stracksduration: ['#mm-viewPort > table > thead > tr > th:nth-child(3) > span > label'],
    Scontentrequests: ['#trackercontent > ul > a:nth-child(1)'],
    Scontentalerts: ['#trackercontent > ul > a:nth-child(2)'],
    Smyplaylists: ['#playlistcontent > ul > a:nth-child(1)'],
    Smyplaylistsinbox: ['#playlistcontent > ul > a:nth-child(2)'],
    Smyplaylistsoutbox: ['#playlistcontent > ul > a:nth-child(3)'],
    Smyplaylistspromo: ['#playlistcontent > ul > a:nth-child(4)'],
    Smyplaylisttitle: ['#mm-viewPort > table > thead > tr > th:nth-child(4) > span > label'],
    Swrongcred: [
        '#root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-6.MuiGrid-grid-md-6.MuiGrid-grid-lg-4 > div > form > p',
    ],
    Suploadsession2: ['#mm-viewPort > table > tbody > tr:nth-child(2)'],

    Suploadtrackedit: ['body > div:nth-child(10) > div > ul > li:nth-child(1)'],

    Sinvalidemail: ['#email-helper-text'],
    Semail: ['#email'],
    Spassword: ['#password'],
    Sloginbutton2: ['[type="submit"]'],
    Sloginbutton: [
        '#root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-6.MuiGrid-grid-md-6.MuiGrid-grid-lg-4 > div > form > button',
    ],
    Susersettingbutton: [
        '#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(1)>div:nth-child(1)>div:nth-child(2)>div>div>div:nth-child(4)',
    ],
    Ssearch: [
        '#subHeader > div > div > form > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-8 > div > div.jss697 > div.jss698 > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.jss648.jss742.MuiButton-containedPrimary',
    ],
    Ssignout: [
        'body > div> div > div > div > button',
    ],

    Sform: [
        '#root > div > div > div > div > form',
    ],
    Stable: ['table'],
    Ssearchinput: [
        '#subHeader > div > div > form > div > div:nth-child(3) > div > div > div > div > div > div > div > div > input',
    ],

    SsearchinputMember: [
        '#mm-viewPort > table > thead > tr > th:nth-child(2) > div > div > div > input',
    ],
    SsearchinputLabel: [
        '#mm-viewPort > table > thead > tr > th:nth-child(3) > div > div > div > input',
    ],
    SsearchinputSource: [
        '#mm-viewPort > table > thead > tr > th:nth-child(5) > div > div > div > input'
    ],
    Ssource: ['#mm-viewPort > table > thead > tr > th:nth-child(5) > div > div'],
    Sversion: [
        '#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div > div > span',

    ],
    Smusicsearch: ['#musicsearch'],
    Stracks: [
        '#root > div > div > div > div > div >div:nth-child(1)>div>div:nth-child(2)>div>div>div:nth-child(1)>div>div:nth-child(2)>div:nth-child(2)>div>div>div>div>ul>a:nth-child(1)',
    ],
    Salbums: [
        '#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div > div> div:nth-child(1) > div >div:nth-child(2)>div:nth-child(2)>div>div>div>div>ul>a:nth-child(2)',
    ],
    Sbody: ['body'],
    Sadvsearch: ['#subHeader > div > div > form > div > div > div > div > div > div:nth-child(1)'],
    Spersonal: [
        '#menu-advsearch > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(3)',
    ],
    Scustomsearch: [
        '#menu-advsearch > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(4)',
    ],
    Ssearchtags: [
        '#menu-advsearch > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(2)',
    ],
    Saddorremove: [
        '#subHeader > div > div > form > div > div > div >div>div:nth-child(2)>div>button:nth-child(8)',
    ],

    Sformseditbutton: [
        '#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2)> div > div > div:nth-child(2)>div>div:nth-child(2)>div>table>tbody>tr:nth-child(1)>td:nth-child(10)>button>span:nth-child(1)',
    ],

    Slicensingruleseditbutton: [
        '#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2)> div > div > div:nth-child(2)>div>div:nth-child(2)>div>table>tbody>tr:nth-child(2)>td:nth-child(9)>button',
    ],

    Slicensingparaeditbutton: [
        '#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2)> div > div > div:nth-child(2)>div>div:nth-child(2)>div>table>tbody>tr:nth-child(2)>td:nth-child(10)>button',
    ],

    Slicensingparaedit: [
        'body > div:nth-child(16) > div > ul > li:nth-child(1)',
    ],

    Sctagruleseditbutton: [
        'body > div:nth-child(11) > div> ul > li:nth-child(1)',
    ],

    Srunclearanceoredit: [
        'body > div:nth-child(14) > div > ul > div > li',
    ],

    Sctagedit: [
        '#mm-viewPort > table > tbody > tr:nth-child(1)> td:nth-child(10) > button',
    ],

    Sctageditbutton: [
        'body > div:nth-child(9) > div> ul > li:nth-child(1)',
    ],

    Sctagrulesedit: [
        '#mm-viewPort > table > tbody > tr:nth-child(2)> td:nth-child(9) > button',
    ],

    Sppllabelsedit: [
        '#mm-viewPort > table > tbody > tr:nth-child(1) > td:nth-child(6) > button',
    ],

    Sppllabelseditbutton: [
        'body > div:nth-child(10) > div> ul > li',
    ],

    Slicensingstatuseseditbutton: [
        '#mm-viewPort > table > tbody > tr:nth-child(1) > td:nth-child(11) > button',
    ],

    Sstatusesedit: [
        'body > div:nth-child(16) > div > ul > li:nth-child(1)',
    ],

    Scloseb: ['body > div > div > div > div > div > button:nth-child(2)'],
    Scloseb2: ['#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div > div > div > div > div > div > button:nth-child(3)'],
    Scloseb3: ['#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div > div > div > div > div > button:nth-child(3)'],

    Sadminusersedit: [
        '#mm-viewPort > table > tbody > tr:nth-child(10) > td:nth-child(12) > button',
    ],

    Sadminuserseditbutton: [
        'body > div:nth-child(25) > div> ul > li:nth-child(1)',

    ],

    Sadminrolesedit: [
        '#mm-viewPort > table > tbody > tr:nth-child(2) > td:nth-child(9) > button',
    ],

    Sadminsettingsedit: [
        '#mm-viewPort > table > tbody > tr:nth-child(2) > td:nth-child(10) > button',
    ],

    Sadminsettingseditbutton: [
        'body > div:nth-child(16) > div > ul > li:nth-child(1)',
    ],

    Sadminplaylisteditbutton: [
        'body > div:nth-child(14) > div > ul > li:nth-child(1)',
    ],

    Suploadsalbumsedit: [
        '#mm-viewPort > table > tbody > tr > td:nth-child(8) > button',
    ],

    Suploadsalbumseditbutton: [
        'body > div > div > ul > li',
    ],

    Sreportsedit: [
        '#mm-viewPort > table > tbody > tr > td:nth-child(7) > button',
    ],

    Sreportseditbutton: [
        'body > div:nth-child(12) > div > ul > li:nth-child(1)',
    ],

    Sactivitylimitationedit: [
        '#mm-viewPort > table > tbody > tr > td:nth-child(9) > button',
    ],

    Sactivitylimitationeditbutton: [
        'body > div:nth-child(14) > div > ul > li:nth-child(1)',
    ],




    Stracktitle: ['#trackTitle'],
    Slibname: ['#libName'],
    Sprodname: ['#prodName'],
    Scatno: ['#catNo'],
    Sisrc: ['#isrc'],
    Siswc: ['#iswc'],
    Sprs: ['#prs'],
    Strackalternativetitle: ['#alternativeTitle'],
    Strackversiontitle: ['#trackVersionTitle'],
    Sduration: ['#duration'],
    Sposition: ['#position'],
    Ssubindex: ['#subindex'],
    Sperformer: ['#performer'],
    Sarranger: ['#arranger'],
    Spublisher: ['#publisher'],
    Stranslator: ['#translator'],
    Srecordlabel: ['#recordLabel'],
    Scomposer: ['#composer'],
    Slyricist: ['#lyricist'],
    Sprodyear: ['#prodYear'],
    Sgenres: ['#genres'],
    Sstyles: ['#styles'],
    Smoods: ['#moods'],
    Sinstruments: ['#instruments'],
    Stempo: ['#tempo'],
    Skeywords: ['#keywords'],
    Stags: ['#tags'],
    Stracknotes: ['#trackNotes'],
    Sprodnotes: ['#prodNotes'],
    Swsid: ['#wsId'],
    Swsname: ['#wsName'],
    Sbpm: ['#bpm'],
    Sviewertpe: ['#viewerType'],
    Slistview: ['#menu-viewerType > div > ul > li:nth-child(2)'],


    Smemfilterbutton: ['#mm-viewPort > table > thead > tr > th:nth-child(2) > div > button:nth-child(1)'],
    Slablfilterbutton: ['#mm-viewPort > table > thead > tr > th:nth-child(3) > div > button:nth-child(1)'],
    Ssourcefilterbutton: ['#mm-viewPort > table > thead > tr > th:nth-child(5) > div > button:nth-child(1)'],

    Sfiltericon: [
        '#subHeader > div > div > form > div > div:nth-child(3) > div > div > div > div > div > button',
    ],

    Scontainsfilter: [
        '#column-filter > div> ul > li:nth-child(1)',
    ],

    Snotcontainsfilter: [
        '#column-filter > div> ul > li:nth-child(2)',
    ],

    Sstartswithfilter: [
        '#column-filter > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(3)',
    ],

    Spplexactfilter2: [
        '#column-filter > div:nth-child(3) > ul > li:nth-child(7)',
    ],

    Spplexactfilter: [
        '#column-filter > div:nth-child(3) > ul > li:nth-child(7)',
    ],


    Snotstartswithfilter: [
        '#column-filter > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(4)',
    ],

    SendsWithfilter: [
        '#column-filter > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(5)',
    ],

    SnotendsWithfilter: [
        '#column-filter > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(6)',
    ],

    Sexactfilter: [
        '#column-filter > div> ul > li:nth-child(3)',
    ],

    snotexactfilter: [
        '#column-filter > div> ul > li:nth-child(4)',
    ],

    SnotEqualsfilter: [
        '#column-filter > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(2)',
    ],

    Sgreaterthanfilter: [
        '#column-filter > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li=nth-child(3)',
    ],

    Slessthanfilter: [
        '#column-filter > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(4)',
    ],

    Sgreaterthanorequalsfilter: [
        '#column-filter > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(5)',
    ],

    Slessthanorequalsfilter: [
        '#column-filter > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(6)',
    ],

    Sclearancetab: ['#clearance'],

    Strackdetailsfilter: [
        '#mm-viewPort > table > thead > tr > th:nth-child(5) > div > button',
    ],
    Strackdetailssearchinput: [
        '#mm-viewPort > table > thead > tr > th:nth-child(5) > div > div > div > input',
    ],
    Ssavedsearch: ['#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div > div> div:nth-child(1) > div >div:nth-child(2)>div:nth-child(2)>div>div>div>div>ul>a:nth-child(3)'],

    Smyplaylist: [
        '#root > div > div > div > div > div >div:nth-child(1)>div>div:nth-child(2)>div>div>div:nth-child(1)>div>div:nth-child(3)>div:nth-child(2)>div>div>div>div>ul>a:nth-child(1)',
    ],

    Slicensingrules: [
        '#root > div > div > div > div > div > div:nth-child(1) >div>div:nth-child(2)>div>div>div:nth-child(1)>div>div:nth-child(5)>div:nth-child(2)>div>div>div>div>ul>a:nth-child(1)',
    ],

    Spromoplaylist: [
        '#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) >div>div>div:nth-child(1)>div:nth-child(1)>div:nth-child(3)>div:nth-child(2)>div>div>div>div>ul>a:nth-child(1)',
    ],
    Splaylist: ['#playlist'],

    Seditbutton: [
        '#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) >div>div>div:nth-child(2)>div>div:nth-child(2)>div>table>tbody>tr>td:nth-child(16)>button',
    ],

    Splaylistshare: [
        'body > div:nth-child(20) > div> ul > li:nth-child(3)',
    ],

    Screateplaylist: [
        '#subHeader > div > form > div > div > div > button',
    ],

    Splaylistshareclose: [
        'body > div > div > div > button',
    ],

    Sinbox: [
        '#root > div > div > div > div > div > div:nth-child(1) > div:nth-child(1)  > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(1)> div:nth-child(1)> div:nth-child(3)> div:nth-child(2) > div >div > div>div>ul>a:nth-child(3)',
    ],
    Soutbox: [
        '#root > div > div > div > div > div > div:nth-child(1) > div:nth-child(1)  > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(1)> div:nth-child(1)> div:nth-child(3)> div:nth-child(2) > div >div > div>div>ul>a:nth-child(4)',
    ],
    Sclearancetracks: [
        '#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) >div>div>div:nth-child(1)>div>div:nth-child(4)>div:nth-child(2)>div>div>div>div>ul>a:nth-child(2)',
    ],
    Sclearanceforms: [
        '#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) >div>div>div:nth-child(1)>div>div:nth-child(4)>div:nth-child(2)>div>div>div>div>ul>a:nth-child(1)',
    ],
    Slicensing: ['#mlliadmin'],

    Scontentadmin: ['#ml-admin'],

    Scontenttracker: ['#content-tracker'],

    Sppllabels: ['#mladmincontent > ul > a:nth-child(5)'],

    Sprioapproval: ['#mladmincontent > ul > a:nth-child(6)'],

    Sctags: ['#mladmincontent > ul > a:nth-child(3)'],

    Sctagrules: ['#mladmincontent > ul > a:nth-child(4)'],

    Sadmin: ['#mladmin'],

    Suploads: ['#uploads'],

    Splayout: ['#playout'],

    Suploadsinsidesession: ['#mm-viewPort > table > tbody > tr:nth-child(3) > td:nth-child(2) > a'],

    Suploadsis3dot: ['#mm-viewPort > table > tbody > tr:nth-child(1) > td:nth-child(16) > button'],

    Ssmadmin: ['#sm-content-admin'],

    Ssmsysadmin: ['#smadmin'],

    Sactivitylog: [
        '#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div > div > ul > a:nth-child(1)',
    ],

    Sreport: [
        '#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div > div > ul > a:nth-child(2)',
    ],

    Sstatuses: [
        '#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) >div>div>div:nth-child(1)>div>div:nth-child(5)>div:nth-child(2)>div>div>div>div>ul>a:nth-child(2)',
    ],

    Sparameters: [
        '#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) >div>div>div:nth-child(1)>div>div:nth-child(5)>div:nth-child(2)>div>div>div>div>ul>a:nth-child(3)',
    ],

    Scontentadminworkspaces: [
        '#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) >div>div>div:nth-child(1)>div>div:nth-child(6)>div:nth-child(2)>div>div>div>div>ul>a:nth-child(1)',
    ],
    Scontentadminlibraries: [
        '#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) >div>div>div:nth-child(1)>div>div:nth-child(6)>div:nth-child(2)>div>div>div>div>ul>a:nth-child(2)',
    ],
    Scontentadminctag: [
        '#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) >div>div>div:nth-child(1)>div>div:nth-child(6)>div:nth-child(2)>div>div>div>div>ul>a:nth-child(3)',
    ],
    Scontentadminctagrules: [
        '#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) >div>div>div:nth-child(1)>div>div:nth-child(6)>div:nth-child(2)>div>div>div>div>ul>a:nth-child(4)',
    ],

    Scontentadminppllabels: [
        '#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) >div>div>div:nth-child(1)>div>div:nth-child(6)>div:nth-child(2)>div>div>div>div>ul>a:nth-child(5)',
    ],

    Sadminusers: [
        '#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) >div>div>div:nth-child(1)>div>div:nth-child(8)>div:nth-child(2)>div>div>div>div>ul>a:nth-child(1)',
    ],

    Sadmingroups: [
        '#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) >div>div>div:nth-child(1)>div>div:nth-child(8)>div:nth-child(2)>div>div>div>div>ul>a:nth-child(2)',
    ],
    Sadminroles: [
        '#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) >div>div>div:nth-child(1)>div>div:nth-child(8)>div:nth-child(2)>div>div>div>div>ul>a:nth-child(3)',
    ],
    Sadminsettings: [
        '#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) >div>div>div:nth-child(1)>div>div:nth-child(8)>div:nth-child(2)>div>div>div>div>ul>a:nth-child(4)',
    ],
    Sadmintrackranking: [
        '#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) >div>div>div:nth-child(1)>div>div:nth-child(8)>div:nth-child(2)>div>div>div>div>ul>a:nth-child(5)',
    ],

    Sadminalbumranking: [
        '#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) >div>div>div:nth-child(1)>div>div:nth-child(8)>div:nth-child(2)>div>div>div>div>ul>a:nth-child(6)',
    ],

    Sadminactivitylimitation: [
        '#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) >div>div>div:nth-child(1)>div>div:nth-child(8)>div:nth-child(2)>div>div>div>div>ul>a:nth-child(7)',
    ],
    Sadminplaylist: [
        '#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) >div>div>div:nth-child(1)>div>div:nth-child(8)>div:nth-child(2)>div>div>div>div>ul>a:nth-child(8)',
    ],

    Sadminhelp: [
        '#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) >div>div>div:nth-child(1)>div>div:nth-child(8)>div:nth-child(2)>div>div>div>div>ul>a:nth-child(9)',
    ],

    Suploadssession: [
        '#root > div > div > div > div > div > div:nth-child(1)>div>div:nth-child(2)>div>div>div:nth-child(1)>div>div:nth-child(11)>div:nth-child(2)>div>div>div>div>ul>a:nth-child(1)',
    ],
    Suploadstracks: [
        '#root > div > div > div > div > div > div:nth-child(1)>div>div:nth-child(2)>div>div>div:nth-child(1)>div>div:nth-child(11)>div:nth-child(2)>div>div>div>div>ul>a:nth-child(2)',
    ],
    Suploadsalbums: [
        '#root > div > div > div > div > div > div:nth-child(1)>div>div:nth-child(2)>div>div>div:nth-child(1)>div>div:nth-child(11)>div:nth-child(2)>div>div>div>div>ul>a:nth-child(3)',
    ],

    Ssmadminworkspaces: [
        '#root > div > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) >div>div>div:nth-child(1)>div>div:nth-child(10)>div:nth-child(2)>div>div>div>div>ul>a:nth-child(1)',
    ],
    Ssmadminlibraries: [
        '#sm-content-admin-content > ul > a:nth-child(2)',
    ],
    Sorigin: [
        '#subHeader > div > div > form > div > div > div > div > div > div > div > span > div',
    ],
    Sorilibrary: [
        '#menu-origin > div > ul > li:nth-child(4)',
    ],
    Sorilibthreedots: [
        '#root > div > div > div > div > div >div:nth-child(1)>div>div:nth-child(2)>div>div>div:nth-child(2)>div>div:nth-child(2)>div:nth-child(1)>table>tbody>tr:nth-child(1)>td:nth-child(9)>button',
    ],
    Sorilibthreedotsrunclearance: [
        'body > div:nth-child(7) > div > ul > li:nth-child(5)',
    ],
    Sclearme: [
        'body > div > div > div > div:nth-child(3)',
    ],
    Sclearancedropdown: [
        '#panel1d-content > div > div > div > div > div > div > div > div > div > div > div',
    ],
    Sclearancedropdowntv: [
        '#menu- > div > ul > li:nth-child(1)',
    ],
    Sclearancedropdownradio: [
        '#menu- > div > ul > li:nth-child(2)',
    ],
    Sclearancedropdownpodcasts: [
        '#menu- > div > ul > li:nth-child(3)',
    ],
    Sclearancedropdownonline: [
        '#menu- > div > ul > li:nth-child(4)',
    ],
    Sclearancedropdownsocial: [
        '#menu- > div > ul > li:nth-child(5)',
    ],
    Sclearancedropdownpromos: [
        '#menu- > div > ul > li:nth-child(6)',
    ],


    Stracktitle: ['#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(1) > div > div > input'],
    Salternatetitle: ['#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(2) > div > div > input'],
    Sversiontitle: ['#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(3) > div > div > input'],
    Sperformer: ['#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(4) > div > div > div > input'],
    Sorigin: ['#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(5) > div > div  > input'],
    Ssuborigin: ['#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(6) > div > div  > input'],
    Sorigindropdownli: ['#menu-musicorigin > div > ul > li:nth-child(1)'],
    Ssuborigindropdownli: ['#menu-sub_origin > div > ul > li:nth-child(2)'],
    Spositionu: ['#full-width-tab-0 > div > div > div > div> div:nth-child(2) > div:nth-child(7)>div>div>input'],
    Sdiscnumber: ['#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(8) > div > div > input'],
    Spublisher: ['#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(9) > div > div > div > input'],
    Scomposer: ['#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(10) > div > div > div > input'],
    Sarranger: ['#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(11) > div > div > div > input'],
    Ssubarranger: ['#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(12) > div > div > div > input'],
    Slyricist: ['#full-width-tab-0 > div > div > div > div> div:nth-child(2) > div:nth-child(13) > div > div > div > input'],
    Ssublyricist: ['#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(14) > div > div > div > input'],
    Scomposerlyricist: ['#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(15) > div > div > div > input'],
    Sadaptor: ['#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(16) > div > div > div > input'],
    Ssubadaptor: ['#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(17) > div > div > div > input'],
    Stranslator: ['#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(18) > div > div > div > input'],
    Soriginalpublisher: ['#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(19) > div > div > div > input'],
    Ssubpublisher: ['#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(20) > div > div > div > input'],
    Stracknote: ['#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(21) > div > div > input'],
    Sadminnotes: ['#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(22) > div > div > input'],
    Sbpm: ['#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(23) > div > div > input'],
    Stempo: ['#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(24) > div > div > input'],
    Sisrc: ['#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(25) > div > div > input'],
    Siswc: ['#full-width-tab-0 > div > div > div > div > div:nth-child(2) > div:nth-child(26) > div > div > input'],
    // Sdatahubprs: [],
    // Sprstunecode: [],
    // Sexternalprspublishers: [],
    // Sexternalprsworktitle: [],
    // Sexternalprstunecode: [],
    // Sexternalprswriters: [],

    Srole: ['#Role'],
    Sname: ['#full-width-tab-0 > div > div > div > div > div:nth-child(9) > div:nth-child(1) > div > div > div:nth-child(2) > div > div > input'],
    Spline: ['#full-width-tab-0 > div > div > div > div > div:nth-child(9) > div:nth-child(2) > div > div > input'],
    Svalidfrom: ['#full-width-tab-0 > div > div > div > div > div:nth-child(9) > div:nth-child(3) > div > div > input'],
    Svalidto: ['#full-width-tab-0 > div > div > div > div > div:nth-child(9) > div:nth-child(4) > div > div > input'],

    Smood: ['#full-width-tab-1 > div > div > div > div:nth-child(1) > div > div > div > input'],
    Sstyle: ['#full-width-tab-1 > div > div > div > div:nth-child(2) > div > div > div > input'],
    Sgenre: ['#full-width-tab-1 > div > div > div > div:nth-child(3) > div > div > div > input'],
    Sinstrument: ['#full-width-tab-1 > div > div > div > div:nth-child(4) > div > div > div > input'],
    Skeyword: ['#full-width-tab-1 > div > div > div > div:nth-child(5) > div > div > div > input'],
    Stags: ['#full-width-tab-1 > div > div > div > div:nth-child(6) > div > div > div > input'],

    Salbumtitle: ['#full-width-tab-2 > div > div > div > div > div:nth-child(1) > div > div > input'],
    Srecordlabel: ['#full-width-tab-2 > div > div > div > div > div:nth-child(2) > div > div > input'],
    Scatalogno: ['#full-width-tab-2 > div > div > div > div > div:nth-child(3) > div > div > input'],
    Salbumartist: ['#full-width-tab-2 > div > div > div > div > div:nth-child(4) > div > div > input'],
    Salbumreleasedate: ['#full-width-tab-2 > div > div > div > div > div:nth-child(5) > div > div > input'],
    Snumberofdiscs: ['#full-width-tab-2 > div > div > div > div > div:nth-child(6) > div > div > input'],
    Salbumnotes: ['#full-width-tab-2 > div > div > div > div > div:nth-child(7) > div > div > input'],
    Stag: ['#full-width-tab-2 > div > div > div > div > div > div > div > div > input'],
    Sadminnotes: ['#full-width-tab-2 > div > div > div > div > div:nth-child(9) > div > div > input'],
    Scline: ['#full-width-tab-2 > div > div > div > div > div:nth-child(10) > div > div > input'],
    Supc: ['#full-width-tab-2 > div > div > div > div > div:nth-child(11) > div > div > input'],
    Sbbcalbumbarcode: ['#full-width-tab-2 > div > div > div > div > div:nth-child(12) > div > div > input'],
};

module.exports = {
    allSelectors,
};
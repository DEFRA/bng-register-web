module.exports = {
  siteInEngland: {
    error: 'Select yes if the biodiversity gain site is in England',
    title: 'Is the biodiversity gain site in England?',
    name: 'inEngland',
    options: {
      hint: {
        text: 'The boundary of the biodiversity gain site cannot be in Scotland or Wales.'
      }
    }
  },
  consent: {
    error: 'Select yes if you have consent to register the biodiversity gain site',
    title: 'Do you have consent to register the biodiversity gain site?',
    name: 'consent',
    options: {
      hint: {
        html: "<span class='govuk-!-display-block govuk-hint'>You'll need the consent of all landowners listed on the title register for the land.</span><span class='govuk-!-display-block govuk-hint'>You could be prosecuted or have to pay a fine if you register a biodiversity gain site without the landowners' consent.</span>"
      }
    }
  },
  legalAgreement: {
    error: 'Select yes if you have a legal agreement securing the biodiversity gain site',
    title: 'Do you have a legal agreement securing your biodiversity gain site?',
    name: 'legalAgreement',
    options: {
      hint: {
        html: "You will need to secure your site with either a <a href='https://www.gov.uk/guidance/planning-obligations'>planning obligation (S106 agreement)</a> or a <a href='https://www.gov.uk/guidance/getting-and-using-a-conservation-covenant-agreement'>conservation covenant</a>, for at least 30 years."
      }
    }
  }
}

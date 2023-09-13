const keys = require('./keys').eligibility

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
        html: `<span class='govuk-!-display-block govuk-hint'>You'll need the consent of all landowners listed on the title register for the land.</span>
          <span class='govuk-!-display-block govuk-hint'>You could be prosecuted or have to pay a fine if you register a biodiversity gain site without the landowners' consent.</span>`
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
  },
  ownershipProof: {
    error: 'Select yes if you have proof of ownership for the land',
    title: 'Do you have proof of ownership for the land?',
    name: 'ownershipProof',
    options: {
      hint: {
        html: `<span class='govuk-!-display-block govuk-hint'>You'll need to upload a proof of ownership document. We'll use this to check who owns the land where the biodiversity gain site is.</span>
          <span class='govuk-!-display-block govuk-hint'>Documents we'll accept as proof are, a copy of the:</span>
          <ul class='govuk-list govuk-list--bullet app-secondary-text-colour'>
          <li>title deeds - the title register and the title plan</li>
          <li>lease agreement - as long as it covers the duration of the legal agreement that secures the biodiversity gain site</li>
          </ul>`
      }
    }
  },
  boundary: {
    error: 'Select yes if you have a file that shows the boundary of the biodiversity gain site',
    title: 'Do you have a file that shows the boundary of the biodiversity gain site?',
    name: 'boundary',
    options: {
      hint: {
        html: `<span class='govuk-!-display-block govuk-hint'>Do you have a file showing the boundary of the biodiversity gain site?</span>
        <span class='govuk-!-display-block govuk-hint'>You can upload a:</span>
        <ul class='govuk-list govuk-list--bullet app-secondary-text-colour'>
         <li>document</li>
         <li>image</li>
         <li>geospatial file</li>
       </ul>
       <span class='govuk-!-display-block govuk-hint'>If you upload a document or image you also need to know the grid reference and area in hectares.</span>`
      }
    }
  },
  biodiversityMetric: {
    error: 'Select yes if you have a completed Biodiversity Metric 4.0 for the biodiversity gain site',
    title: 'Do you have a completed Biodiversity Metric 4.0 for the biodiversity gain site?',
    name: 'metric',
    options: {
      hint: {
        html: `You need to calculate the biodiversity value of the land using <a href='http://publications.naturalengland.org.uk/publication/6049804846366720'>Natural England's biodiversity metric</a>.`
      }
    }
  },
  habitatManagementPlan: {
    error: 'Select yes if you have a habitat management and monitoring plan for the biodiversity gain site',
    title: 'Do you have a habitat management and monitoring plan for the biodiversity gain site?',
    name: 'hmmp',
    options: {
      hint: {
        html: `<span class='govuk-!-display-block govuk-hint'>The plan should detail how the habitats will be managed and monitored for the time set out in the legal agreement.</span>
            <span class='govuk-!-display-block govuk-hint'>We'll also ask for the start date of the:</span>
            <ul class='govuk-list govuk-list--bullet govuk-!-margin-bottom-3 app-secondary-text-colour'>
              <li>habitat creation and enhancement works</li>
              <li>30 year management and monitoring period</li>
            </ul>
            <span class='govuk-!-display-block govuk-hint'>You can upload a Word document or PDF, it should not be larger than 50MB.</span>`
      }
    }
  },
  results: {
    html: {
      [keys.consent]: '<li>consent from the landowner</li>',
      [keys.legalAgreement]: '<li>a legal agreement securing the habitat enhancements for 30 years</li>',
      [keys.ownershipProof]: '<li>proof of ownership of the land</li>',
      [keys.boundary]: '<li>the boundary of the land</li>',
      [keys.biodiversityMetric]: '<li>a completed Biodiversity metric (Secretary of State version) for the land</li>',
      [keys.habitatManagementPlan]: '<li>a habitat management and monitoring plan</li>'
    }
  }
}

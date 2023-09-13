module.exports = {
  siteInEngland: {
    get: '/land/site-in-england',
    post: '/land/site-in-england',
    view: 'eligibility/site-in-england',
    redirect: { 
      success: 'consent',
      fail: 'cannot-continue'
    }
  },
  consent: {
    get: '/land/consent',
    post: '/land/consent',
    view: 'eligibility/consent',
    redirect: {
      success: 'legal-agreement',
    }
  },
  legalAgreement: {
    get: '/land/legal-agreement',
    post: '/land/legal-agreement',
    view: 'eligibility/legal-agreement',
    redirect: {
      success: 'legal-agreement',
    }
  }
}

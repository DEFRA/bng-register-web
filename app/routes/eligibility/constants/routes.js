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
      success: 'ownership-proof',
    }
  },
  ownershipProof: {
    get: '/land/ownership-proof',
    post: '/land/ownership-proof',
    view: 'eligibility/ownership-proof',
    redirect: {
      success: 'boundary',
    }
  },
  boundary: {
    get: '/land/boundary',
    post: '/land/boundary',
    view: 'eligibility/boundary',
    redirect: {
      success: 'biodiversity-metric',
    }
  },
  biodiversityMetric: {
    get: '/land/biodiversity-metric',
    post: '/land/biodiversity-metric',
    view: 'eligibility/biodiversity-metric',
    redirect: {
      success: 'habitat-management-plan',
    }
  },
  habitatManagementPlan: {
    get: '/land/habitat-management-plan',
    post: '/land/habitat-management-plan',
    view: 'eligibility/habitat-management-plan',
    redirect: {
      success: 'results',
    }
  },
  results: {
    get: '/land/results',
    post: '/land/results',
    view: 'eligibility/results',
    redirect: {
      success: 'name',
    }
  }
}

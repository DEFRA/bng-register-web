module.exports = {
  siteInEngland: {
    get: '/site-in-england',
    post: '/site-in-england',
    view: 'eligibility/site-in-england',
    redirect: {
      success: 'consent',
      fail: 'cannot-continue'
    }
  },
  consent: {
    get: '/consent',
    post: '/consent',
    view: 'eligibility/consent',
    redirect: {
      success: 'legal-agreement'
    }
  },
  legalAgreement: {
    get: '/legal-agreement',
    post: '/legal-agreement',
    view: 'eligibility/legal-agreement',
    redirect: {
      success: 'ownership-proof'
    }
  },
  ownershipProof: {
    get: '/ownership-proof',
    post: '/ownership-proof',
    view: 'eligibility/ownership-proof',
    redirect: {
      success: 'boundary'
    }
  },
  boundary: {
    get: '/boundary',
    post: '/boundary',
    view: 'eligibility/boundary',
    redirect: {
      success: 'biodiversity-metric'
    }
  },
  biodiversityMetric: {
    get: '/biodiversity-metric',
    post: '/biodiversity-metric',
    view: 'eligibility/biodiversity-metric',
    redirect: {
      success: 'habitat-management-plan'
    }
  },
  habitatManagementPlan: {
    get: '/habitat-management-plan',
    post: '/habitat-management-plan',
    view: 'eligibility/habitat-management-plan',
    redirect: {
      success: 'results'
    }
  },
  results: {
    get: '/results',
    post: '/results',
    view: 'eligibility/results',
    redirect: {
      success: 'name'
    }
  }
}

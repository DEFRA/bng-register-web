const { get, set } = require('../../../session')
const keys = require('./keys')

const entries = {
  eligibility: 'eligibility'
}

const getInEngland = (request) => {
  return get(request, entries.eligibility, keys.check.inEngland)
}

const setInEngland = (request, value) => {
  set(request, entries.eligibility, keys.check.inEngland, value)
}

const getConsent = (request) => {
  return get(request, entries.eligibility, keys.eligibility.consent)
}

const setConsent = (request, value) => {
  set(request, entries.eligibility, keys.eligibility.consent, value)
}

const getLegalAgreement = (request) => {
  return get(request, entries.eligibility, keys.eligibility.legalAgreement)
}

const setLegalAgreement = (request, value) => {
  set(request, entries.eligibility, keys.eligibility.legalAgreement, value)
}

const getOwnershipProof = (request) => {
  return get(request, entries.eligibility, keys.eligibility.ownershipProof)
}

const setOwnershipProof = (request, value) => {
  set(request, entries.eligibility, keys.eligibility.ownershipProof, value)
}

const getBoundary = (request) => {
  return get(request, entries.eligibility, keys.eligibility.boundary)
}

const setBoundary = (request, value) => {
  set(request, entries.eligibility, keys.eligibility.boundary, value)
}

const getBiodiversityMetric = (request) => {
  return get(request, entries.eligibility, keys.eligibility.biodiversityMetric)
}

const setBiodiversityMetric = (request, value) => {
  set(request, entries.eligibility, keys.eligibility.biodiversityMetric, value)
}

const getHabitatManagementPlan = (request) => {
  return get(request, entries.eligibility, keys.eligibility.habitatManagementPlan)
}

const setHabitatManagementPlan = (request, value) => {
  set(request, entries.eligibility, keys.eligibility.habitatManagementPlan, value)
}

const getResults = (request) => {
  const eligibilityResults = {
    yes: [],
    no: [],
    'not sure': []
  }

  for (const key in keys.eligibility) {
    if (Object.hasOwn(keys.eligibility, key)) {
      const sessionValue = get(request, entries.eligibility, key)
      if (sessionValue) {
        eligibilityResults[sessionValue].push(key)
      }
    }
  }

  return eligibilityResults
}

module.exports = {
  getInEngland,
  setInEngland,
  getConsent,
  setConsent,
  getLegalAgreement,
  setLegalAgreement,
  getOwnershipProof,
  setOwnershipProof,
  getBoundary,
  setBoundary,
  getBiodiversityMetric,
  setBiodiversityMetric,
  getHabitatManagementPlan,
  setHabitatManagementPlan,
  getResults
}

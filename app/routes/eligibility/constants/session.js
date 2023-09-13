const { get, set } = require('../../../session')
const keys = require('./keys')

const entries = {
  eligibility: 'eligibility',
}

const getInEngland = (request) => {
  return get(request, entries.eligibility, keys.eligibility.inEngland)
}

const setInEngland = (request, value) => {
  set(request, entries.eligibility, keys.eligibility.inEngland, value)
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

module.exports = {
  getInEngland,
  setInEngland,
  getConsent,
  setConsent,
  getLegalAgreement,
  setLegalAgreement
}

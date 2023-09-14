const routes = [].concat(
  require('../routes/home'),
  require('../routes/check-you-can-register'),
  require('../routes/register-land-task-list'),
  require('../routes/eligibility/site-in-england'),
  require('../routes/eligibility/consent'),
  require('../routes/eligibility/legal-agreement'),
  require('../routes/eligibility/ownership-proof'),
  require('../routes/eligibility/boundary'),
  require('../routes/eligibility/biodiversity-metric'),
  require('../routes/eligibility/habitat-management-plan'),
  require('../routes/eligibility/results'),
  require('../routes/upload/upload-land-boundary'),
  require('../routes/cookie'),
  require('../routes/healthy'),
  require('../routes/healthz'),
  require('../routes/static')
)

module.exports = {
  plugin: {
    name: 'router',
    register: (server, options) => {
      server.route(routes)
    }
  }
}

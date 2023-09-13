module.exports = {
  method: 'GET',
  path: '/land/check-you-can-register',
  options: {
    handler: async (request, h) => {
      return h.view('check/check-you-can-register')
    }
  }
}

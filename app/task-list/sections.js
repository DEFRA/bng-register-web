const statuses = require('./statuses')

module.exports = {
  taskList: [
    {
      taskTitle: 'Your details',
      tasks: [
        {
          title: 'Add your details',
          status: statuses.DEFAULT,
          completedTaskUrl: 'constants.routes.CHECK_YOUR_DETAILS',
          startTaskUrl: 'constants.routes.NAME',
          inProgressUrl: '',
          id: 'add-your-details'
        }
      ]
    },
    {
      taskTitle: 'Land information',
      tasks: [
        {
          title: 'Add land boundary details',
          status: statuses.DEFAULT,
          completedTaskUrl: 'constants.routes.CHECK_LAND_BOUNDARY_DETAILS',
          startTaskUrl: 'constants.routes.CHOOSE_LAND_BOUNDARY_UPLOAD',
          inProgressUrl: '',
          id: 'add-land-boundary'
        },
        {
          title: 'Add land ownership details',
          status: statuses.DEFAULT,
          completedTaskUrl: 'constants.routes.CHECK_OWNERSHIP_DETAILS',
          startTaskUrl: 'constants.routes.UPLOAD_LAND_OWNERSHIP',
          inProgressUrl: '',
          id: 'add-land-ownership'
        }
      ]
    },
    {
      taskTitle: 'Habitat information',
      tasks: [
        {
          title: 'Upload Biodiversity Metric',
          status: statuses.DEFAULT,
          completedTaskUrl: 'constants.routes.CHECK_METRIC_DETAILS',
          startTaskUrl: 'constants.routes.UPLOAD_METRIC',
          inProgressUrl: '',
          id: 'add-habitat-information'
        },
        {
          title: 'Add habitat management and monitoring details',
          status: statuses.DEFAULT,
          completedTaskUrl: 'constants.routes.CHECK_MANAGEMENT_MONITORING_DETAILS',
          startTaskUrl: 'constants.routes.UPLOAD_MANAGEMENT_PLAN',
          inProgressUrl: '',
          id: 'add-habitat-management'
        }
      ]
    },
    {
      taskTitle: 'Legal information',
      tasks: [
        {
          title: 'Add legal agreement details',
          status: statuses.DEFAULT,
          completedTaskUrl: 'constants.routes.CHECK_LEGAL_AGREEMENT_DETAILS',
          startTaskUrl: 'constants.routes.LEGAL_AGREEMENT_TYPE',
          inProgressUrl: '',
          id: 'add-legal-agreement'
        },
        {
          title: 'Add local land charge search certificate',
          status: statuses.DEFAULT,
          completedTaskUrl: 'constants.routes.CHECK_LOCAL_LAND_CHARGE_FILE',
          startTaskUrl: 'constants.routes.UPLOAD_LOCAL_LAND_CHARGE',
          inProgressUrl: '',
          id: 'add-local-land-charge-search-certificate'
        }
      ]
    },
    {
      taskTitle: 'Submit your biodiversity gain site information',
      tasks: [
        {
          title: 'Check your answers and submit information',
          status: 'CANNOT START YET',
          completedTaskUrl: 'constants.routes.CHECK_AND_SUBMIT',
          startTaskUrl: 'constants.routes.CHECK_AND_SUBMIT',
          inProgressUrl: '',
          id: 'check-your-answers'
        }
      ]
    }
  ]
}

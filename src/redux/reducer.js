import produce from 'immer'

import { ActionTypes } from './actions'

const initialState = {
  cases: [],
  isLoadingCases: false,
  updatingCaseId: 0,
  errorMessage: ''
}

export default produce((draft, action) => {
  switch (action.type) {
    case ActionTypes.GET_DATA:
      draft.isLoadingCases = true
      draft.errorMessage = ''
      break
    case ActionTypes.GET_DATA_SUCCESS:
      draft.isLoadingCases = false
      draft.cases = action.payload.data.map(({...props}) => ({...props}))
      draft.errorMessage = ''
      break
    case ActionTypes.GET_DATA_FAILED:
      draft.isLoadingCases = false
      draft.errorMessage = action.payload.errorMessage
      break
    case ActionTypes.ADD_CASE:
      draft.errorMessage = ''
      break
    case ActionTypes.ADD_CASE_SUCCESS:
      draft.cases.push(action.payload.data)
      break
    case ActionTypes.ADD_CASE_ERROR:
      draft.errorMessage = action.payload.errorMessage
      break
    case ActionTypes.UPDATE_CASE:
      draft.updatingCaseId = action.payload.caseId
      draft.errorMessage = ''
      break
    case ActionTypes.UPDATE_CASE_SUCCESS: {
      draft.updatingCaseId = 0
      const updatedCase = draft.cases.find(({ id }) => id === action.payload.caseData.id)
      updatedCase.status = action.payload.caseData.status
      break
    }
    case ActionTypes.UPDATE_CASE_ERROR:
      draft.updatingCaseId = 0
      draft.errorMessage = action.payload.errorMessage
      break
  }
}, initialState)

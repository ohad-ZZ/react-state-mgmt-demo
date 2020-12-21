export const ActionTypes = {
  GET_DATA: 'getData',
  GET_DATA_SUCCESS: 'getDataSuccess',
  GET_DATA_FAILED: 'getDataFailed',

  ADD_CASE: 'addCase',
  ADD_CASE_SUCCESS: 'addCaseSuccess',
  ADD_CASE_ERROR: 'addCaseError',

  UPDATE_CASE: 'updateCaseStatus',
  UPDATE_CASE_SUCCESS: 'updateCaseSuccess',
  UPDATE_CASE_ERROR: 'updateCaseError'
}

export const getData = () => ({ type: ActionTypes.GET_DATA })

export const getDataSuccess = (data) => ({ type: ActionTypes.GET_DATA_SUCCESS, payload: { data } })

export const getDataFailed = (errorMessage) => ({ type: ActionTypes.GET_DATA_FAILED, payload: { errorMessage } })

export const addCase = (caseData) => ({ type: ActionTypes.ADD_CASE, payload: { data: caseData } })

export const addCaseSuccess = (caseData) => ({ type: ActionTypes.ADD_CASE_SUCCESS, payload: { data: caseData } })

export const addCaseError = (errorMessage) => ({ type: ActionTypes.ADD_CASE_ERROR, payload: { errorMessage } })

export const updateCaseStatus = (status, caseId) => ({ type: ActionTypes.UPDATE_CASE, payload: { status, caseId } })

export const updateCaseStatusSuccess = (caseData) => ({ type: ActionTypes.UPDATE_CASE_SUCCESS, payload: { caseData } })

export const updateCaseError = (errorMessage) => ({ type: ActionTypes.UPDATE_CASE_ERROR, payload: { errorMessage } })

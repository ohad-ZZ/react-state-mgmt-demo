import { takeLatest, takeEvery, call, put } from 'redux-saga/effects'

import {
  ActionTypes,
  getDataSuccess,
  getDataFailed,
  addCaseSuccess,
  addCaseError,
  updateCaseStatusSuccess,
  updateCaseError
} from './actions'
import * as coronaApi from '../api/coronaApi'

export default function * appSaga () {
  yield takeLatest(ActionTypes.GET_DATA, getData)
  yield takeEvery(ActionTypes.ADD_CASE, createCase)
  yield takeEvery(ActionTypes.UPDATE_CASE, updateCase)
}

function * getData () {
  try {
    const data = yield call(coronaApi.getCases)
    yield put(getDataSuccess(data))
  } catch (error) {
    yield put(getDataFailed(error.message || 'Failed loading cases data'))
  }
}

function * createCase ({ payload: { data }}) {
  try {
    const caseResource = yield call(coronaApi.addCase, data)
    yield put(addCaseSuccess(caseResource))
  } catch (error) {
    yield put(addCaseError(error.message || 'Failed adding a case'))
  }
}

function * updateCase ({ payload: { status, caseId }}) {
  try {
    const caseResource = yield call(coronaApi.updateCaseStatus, caseId, status)
    yield put(updateCaseStatusSuccess(caseResource))
  } catch (error) {
    yield put(updateCaseError(error.message || 'Failed updating case'))
  }
}

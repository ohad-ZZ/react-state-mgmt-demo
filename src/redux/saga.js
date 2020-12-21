import { takeLatest, takeEvery, call, put } from 'redux-saga/effects'

import { actions } from './reducer'
import * as coronaApi from '../api/coronaApi'

export default function * appSaga () {
  yield takeLatest(actions.getData, getData)
  yield takeEvery(actions.addCase, createCase)
  yield takeEvery(actions.updateCaseStatus, updateCase)
}

function * getData () {
  try {
    const data = yield call(coronaApi.getCases)
    yield put(actions.getDataSuccess(data))
  } catch (error) {
    yield put(actions.getDataFailed(error.message || 'Failed loading cases data'))
  }
}

function * createCase ({ payload: data }) {
  try {
    const caseResource = yield call(coronaApi.addCase, data)
    yield put(actions.addCaseSuccess(caseResource))
  } catch (error) {
    yield put(actions.addCaseError(error.message || 'Failed adding a case'))
  }
}

function * updateCase ({ payload: { status, caseId }}) {
  try {
    const caseResource = yield call(coronaApi.updateCaseStatus, caseId, status)
    yield put(actions.updateCaseStatusSuccess(caseResource))
  } catch (error) {
    yield put(actions.updateCaseError(error.message || 'Failed updating case'))
  }
}

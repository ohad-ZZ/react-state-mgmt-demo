import { createSelector } from '@reduxjs/toolkit'
import { isSameDay } from 'date-fns'

import { simpleSelectors } from './reducer'
import { CaseStatus } from '../common/constants'

const getCases = simpleSelectors.selectAll

export const getCasesOrderedByDate = simpleSelectors.selectAll

export const getIsLoadingData = (state) => state.isLoadingCases

export const getUpdatedCaseId = (state) => state.updatingCaseId

export const getTotalCases = simpleSelectors.selectTotal

export const getAddedToday = createSelector(getCases, (cases) => {
  const now = Date.now()
  return cases.reduce((acc, { created}) => {
    if (isSameDay(now, created)) {
      acc += 1;
    }
    return acc
  }, 0)
})

export const getRecoveredCount = createSelector(getCases, (cases) => (
  cases.reduce((acc, { status }) => {
    if (status === CaseStatus.Recovered) {
      acc += 1
    }
    return acc
  }, 0)
))

export const getDeathsCount = createSelector(getCases, (cases) => (
  cases.reduce((acc, { status }) => {
    if (status === CaseStatus.Dead) {
      acc += 1
    }
    return acc
  }, 0)
))

export const getMildCasesCount = createSelector(getCases, (cases) => (
  cases.reduce((acc, { status }) => {
    if (status === CaseStatus.ActiveMild) {
      acc += 1
    }
    return acc
  }, 0)
))

export const getSevereCasesCount = createSelector(getCases, (cases) => (
  cases.reduce((acc, { status }) => {
    if (status === CaseStatus.ActiveSevere) {
      acc += 1
    }
    return acc
  }, 0)
))

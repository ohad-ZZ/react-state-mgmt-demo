import { atom, selector } from 'recoil'
import { isSameDay } from 'date-fns'

import { cache } from './utils'
import { CaseStatus } from '../common/constants'

// Atoms
export const caseIdsAtom = atom({
  key: 'caseIdsList',
  default: []
})

const caseAtomStateWithId = cache((id) => atom({
  key: `case-${id}`,
  default: { id }
}))

// Selector
export const caseWithIdSelector = cache((id) => selector({
  key: `case-with-id-${id}`,
  get: ({ get }) => {
    return get(caseAtomStateWithId(id))
  },
  set: ({ set }, newValue) => {
    const state = caseAtomStateWithId(id)
    set(state, newValue)
  }
}))

export const getTotalCases = selector({
  key: 'total-cases',
  get: ({ get }) => {
    const caseIds = get(caseIdsAtom)
    return caseIds.length
  }
})

export const getAddedToday = selector({
  key: 'added-today-cases',
  get: ({ get }) => {
    const today = Date.now()
    const caseIds = get(caseIdsAtom)
    let addedToday = 0
    for (const caseId of caseIds) {
      console.log(caseId)
      const { created } = get(caseWithIdSelector(caseId))
      if (isSameDay(today, created)) {
        addedToday += 1
      }
    }
    return addedToday
  }
})

export const getRecoveredCount = selector({
  key: 'recovered-count',
  get: ({ get }) => {
    const caseIds = get(caseIdsAtom)
    let count = 0
    for (const caseId of caseIds) {
      const { status } = get(caseWithIdSelector(caseId))
      if (status === CaseStatus.Recovered) {
        count += 1
      }
    }
    return count
  }
})

export const getDeathsCount = selector({
  key: 'death-count',
  get: ({ get }) => {
    const caseIds = get(caseIdsAtom)
    let count = 0
    for (const caseId of caseIds) {
      const { status } = get(caseWithIdSelector(caseId))
      if (status === CaseStatus.Dead) {
        count += 1
      }
    }
    return count
  }
})

export const getMildCasesCount = selector({
  key: 'active-mild-count',
  get: ({ get }) => {
    const caseIds = get(caseIdsAtom)
    let count = 0
    for (const caseId of caseIds) {
      const { status } = get(caseWithIdSelector(caseId))
      if (status === CaseStatus.ActiveMild) {
        count += 1
      }
    }
    return count
  }
})

export const getSevereCasesCount = selector({
  key: 'active-severe-count',
  get: ({ get }) => {
    const caseIds = get(caseIdsAtom)
    let count = 0
    for (const caseId of caseIds) {
      const { status } = get(caseWithIdSelector(caseId))
      if (status === CaseStatus.ActiveSevere) {
        count += 1
      }
    }
    return count
  }
})

export const getCasesOrderedByDate = selector({
  key: 'cases-ids-by-date',
  get: ({ get }) => {
    const caseIds = get(caseIdsAtom)
    return caseIds
      .map((id) => get(caseWithIdSelector(id)))
      .sort(({ created: createdA }, { created: createdB }) => createdB - createdA)
      .map(({ id }) => id)
  }
})

export const addCaseId = selector({
  key: 'add-case-id-to-list',
  set: ({ get, set }, newValue) => {
    const caseIdsList = get(caseIdsAtom)
    set(caseIdsAtom, [...caseIdsList, newValue])
  }
})

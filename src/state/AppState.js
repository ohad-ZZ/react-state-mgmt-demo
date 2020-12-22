import { atom } from 'recoil'

export const isLoadingCasesAtom = atom({
  key: 'is-loading-cases',
  default: false
})

export const currentlyUpdatedCaseId = atom({
  key: 'currently-updated-case-id',
  default: 0
})

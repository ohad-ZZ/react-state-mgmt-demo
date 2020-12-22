import { useRecoilCallback } from 'recoil'

import * as coronaApi from '../api/coronaApi'

import { caseIdsAtom, caseWithIdSelector, addCaseId } from './CaseState'
import { isLoadingCasesAtom, currentlyUpdatedCaseId } from './AppState'

export function useLoadCases () {
  return useRecoilCallback(({ set }) => async () => {
    set(isLoadingCasesAtom, true)
    const cases = await coronaApi.getCases()
    const casesIds = cases.map((caseInstance) => {
        set(caseWithIdSelector(caseInstance.id), {...caseInstance})
        return caseInstance.id;
      })
    set(caseIdsAtom, casesIds)
    set(isLoadingCasesAtom, false)
  }, [])
}

export function useUpdateCaseStatus (id) {
  return useRecoilCallback(({ set }) => async (status) => {
    set(currentlyUpdatedCaseId, id)
    const updatedCase = await coronaApi.updateCaseStatus(id, status)
    set(caseWithIdSelector(id), {...updatedCase})
    set(currentlyUpdatedCaseId, 0)
  }, [])
}

export function useAddCase () {
  return useRecoilCallback(({ set }) => async (caseInfo) => {
    const newCase = await coronaApi.addCase({ ...caseInfo })
    set(caseWithIdSelector(newCase.id), {...newCase})
    set(addCaseId, newCase.id)
  }, [])
}

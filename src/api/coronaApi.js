import { cases } from './data'
import { CaseStatus } from '../common/constants'

const generateTimeoutPromise = () => new Promise((resolve) => { setTimeout(resolve, Math.round(Math.random() * 2000)) })

export async function getCases () {
  await generateTimeoutPromise()
  return cases
}

export async function addCase (caseData) {
  await generateTimeoutPromise()
  if (!caseData.status || !caseData.age) {
    throw new Error('invalid data')
  }
  caseData.id = cases.length + 1
  caseData.created = Date.now()
  cases.push({ ...caseData })
  return caseData
}

export async function updateCaseStatus (caseId, status) {
  await generateTimeoutPromise()
  const validCaseStatus = Object.values(CaseStatus)
  const updatedCase = cases.find(({ id }) => id === caseId)
  if (!validCaseStatus.includes(status)) {
    throw new Error('Invalid case status')
  } else if (!updatedCase) {
    throw new Error('No match for case id')
  }
  updatedCase.status = status
  return updatedCase
}

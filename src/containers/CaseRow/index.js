import { useRecoilValue } from 'recoil'

import { caseWithIdSelector } from '../../state/CaseState'
import { currentlyUpdatedCaseId } from '../../state/AppState'
import { useUpdateCaseStatus } from '../../state/hooks'

import { CaseRow } from '../../components'

const CaseRowContainer = ({ id }) => {
  const { age, status, created } = useRecoilValue(caseWithIdSelector(id))
  const updateCaseStatus = useUpdateCaseStatus(id)
  const currentUpdatingStatus = useRecoilValue(currentlyUpdatedCaseId)

  return (
    <CaseRow
      key={id}
      age={age}
      created={created}
      id={id}
      status={status}
      isStatusUpdating={currentUpdatingStatus === id}
      onSelect={updateCaseStatus}
    />
  )
}

export default CaseRowContainer

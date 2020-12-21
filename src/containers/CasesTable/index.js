import { useDispatch, useSelector } from 'react-redux'

import { CasesTable as CasesTableComponent } from '../../components'
import { actions } from '../../redux/reducer'
import { getCasesOrderedByDate, getUpdatedCaseId } from '../../redux/selectors'

const CasesTable = () => {
  const dispatch = useDispatch()
  const cases = useSelector(getCasesOrderedByDate)
  const updatedCaseId = useSelector(getUpdatedCaseId)

  return (
    <CasesTableComponent
      cases={cases}
      updatedCaseId={updatedCaseId}
      onCaseStatusChange={(value, id) => {
        dispatch(actions.updateCaseStatus(value, id))
      }}
    />
  )
}

export default CasesTable

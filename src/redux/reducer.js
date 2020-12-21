import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

const casesAdapter = createEntityAdapter({
  sortComparer: (({ created: createdA }, { created: createdB}) => createdB - createdA)
})

const { reducer, actions } = createSlice({
  name: 'cases',
  initialState: casesAdapter.getInitialState({
    isLoadingCases: false,
    updatingCaseId: 0,
    errorMessage: ''
  }),
  reducers: {
    getData: (state) => {
      state.isLoadingCases = true
      state.errorMessage = ''
    },
    getDataSuccess: (state, action) => {
      state.isLoadingCases = false
      state.errorMessage = ''
      casesAdapter.setAll(state, action.payload.map(({ ...props }) => ({ ...props })))
    },
    getDataFailed: (state, action) => {
      state.isLoadingCases = false
      state.errorMessage = action.payload
    },
    addCase: (state) => {
      state.errorMessage = ''
    },
    addCaseSuccess: (state, action) => {
      casesAdapter.addOne(state, { ...action.payload })
    },
    addCaseError: (state, action) => {
      state.errorMessage = action.payload
    },
    updateCaseStatus: {
      reducer: (state, action) => {
        state.updatingCaseId = action.payload.caseId
        state.errorMessage = ''
      },
      prepare: (value, id) => ({ payload: { caseId: id, status: value}})
    },
    updateCaseStatusSuccess: (state, action) => {
      state.updatingCaseId = 0
      // casesAdapter.updateOne doesn't update whole state
      casesAdapter.removeOne(state, action.payload.id)
      casesAdapter.addOne(state, {...action.payload})
    },
    updateCaseError: (state, action) => {
      state.updatingCaseId = 0
      state.errorMessage = action.payload
    }
  }
})
export const simpleSelectors = casesAdapter.getSelectors()
export default reducer
export { actions }

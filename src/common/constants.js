export const CaseStatus = {
  ActiveSevere: 1,
  ActiveMild: 2,
  Dead: 3,
  Recovered: 4
}

export const CaseStatusOptions = [
  { value: CaseStatus.ActiveSevere, label: 'Active - Severe'},
  { value: CaseStatus.ActiveMild, label: 'Active - Mild'},
  { value: CaseStatus.Dead, label: 'Dead'},
  { value: CaseStatus.Recovered, label: 'Recovered'},
]

import { CaseStatus } from '../common/constants'

const cases = []

for (let i=1; i <= 200; i++) {
  const date = new Date()
  const reducedDays = Math.floor((200 - i) * 30 / 200) * 24 * 60 * 60 * 1000
  const random = Math.random()
  let status = CaseStatus.Recovered
  if (random > 0.95) {
    status = CaseStatus.Dead
  } else if (random > 0.8) {
    status = CaseStatus.ActiveSevere
  } else if (random > 0.5) {
    status = CaseStatus.ActiveMild
  }
  cases.push({
    id: i,
    status,
    age: Math.ceil(Math.random() * 70 + 10),
    created: date - reducedDays
  })
}

export { cases }

import { useState } from 'react'
import Select from 'react-dropdown-select'

import { CaseStatusOptions } from '../../common/constants'
import { useAddCase } from '../../state/hooks'

import styles from './AddCaseForm.module.scss'

const CreateCaseForm = () => {
  const [age, setAge] = useState('')
  const [status, setStatus] = useState('')
  const addCase = useAddCase()

  function handleSubmit (event) {
    event.preventDefault()
    if (typeof age === 'number' && age > 0 && CaseStatusOptions.map(({ value }) => value).includes(status)) {
      addCase({ age, status })
      setStatus('')
      setAge('')
    } else {
      window.alert('invalid inputs')
    }
  }

  function handleAgeChange (event) {
    const ageValue = event.target.value
    if (!isNaN(ageValue)) {
      setAge(parseInt(ageValue))
    }
  }

  function handleStatusChange (values) {
    setStatus(values?.[0]?.value)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formItem}>
        <label htmlFor='age'>Age: </label>
        <input value={age} id='age' onChange={handleAgeChange} type='number' />
      </div>
      <div className={styles.formItem}>
        <label>Status: </label>
        <Select
          multi={false}
          options={CaseStatusOptions}
          searchable={false}
          values={status ? [CaseStatusOptions.find(({ value }) => value === status)] : []}
          onChange={handleStatusChange}
        />
      </div>
      <button className={styles.submitButton}>Add Case</button>
    </form>
  )
}

export default CreateCaseForm

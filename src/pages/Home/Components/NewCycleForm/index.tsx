import { FormContainer, MinutesAmountsInput, TaskInput } from './styles'

import { useContext } from 'react'
// import { useFormContext } from 'react-hook-form/dist/useFormContext'
import { UseFormRegister } from 'react-hook-form'
import { CyclesContext } from '../../../../Context/CycleContext'

interface newCycleForm {
  register: UseFormRegister<{
    task: string
    minutesAmount: number
  }>
}

export function NewCycleForm({ register }: newCycleForm) {
  // const { register } = useFormContext()
  const { activeCycle } = useContext(CyclesContext)

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        type="text"
        id="task"
        placeholder="Dê um nome para o seu projeto"
        list="task-suggestions"
        {...register('task')}
        disabled={!!activeCycle}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountsInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={0}
        max={60}
        {...register('minutesAmount', {
          valueAsNumber: true,
        })}
        disabled={!!activeCycle}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}

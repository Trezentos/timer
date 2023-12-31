import { Cycle } from './reducer'
import {} from 'immer'

export enum ActionsType {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionsType.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function interruptCurrentCycleAction(activeCycleId: string | null) {
  return {
    type: ActionsType.INTERRUPT_CURRENT_CYCLE,
    payload: {
      activeCycleId,
    },
  }
}

export function markCurrentCycleAsFinishedAction(activeCycleId: string | null) {
  return {
    type: ActionsType.MARK_CURRENT_CYCLE_AS_FINISHED,
    payload: {
      activeCycleId,
    },
  }
}

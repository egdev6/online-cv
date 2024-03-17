import { atom } from 'nanostores'

export const currentStep = atom<number>(0)

export function setCurrentStep(step: number) {
  currentStep.set(step)
}

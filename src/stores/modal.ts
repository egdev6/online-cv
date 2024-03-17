import { atom } from 'nanostores'

export const showModal = atom<boolean>(false)

export function setShowModal(show: boolean) {
  showModal.set(show)
}

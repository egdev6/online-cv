import { atom } from 'nanostores'

export const blockScroll = atom<boolean>(false)

export function setBlockScroll(block: boolean) {
  blockScroll.set(block)
}

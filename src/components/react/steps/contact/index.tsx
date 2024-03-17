import { type FC, useEffect, useRef } from 'react'
import { useStore } from '@nanostores/react'
import { currentStep } from 'src/stores/steps'
import * as S from './styled'

const Contact: FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const current = useStore(currentStep)

  useEffect(() => {
    if (current === 5) {
      ref.current?.classList.add('start-animation')
    }
  }, [current])

  return (
    <S.ContactContainer id='contact' ref={ref}>
      <h2>Contacto</h2>
    </S.ContactContainer>
  )
}

export default Contact

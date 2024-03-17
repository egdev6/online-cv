import { type FC, useEffect, useRef } from 'react'
import { useStore } from '@nanostores/react'
import { currentStep } from 'src/stores/steps'
import * as S from './styled'

const Experience: FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const current = useStore(currentStep)

  useEffect(() => {
    if (current === 3) {
      ref.current?.classList.add('start-animation')
    }
  }, [current])

  return (
    <S.ExperienceContainer id='experience' ref={ref}>
      <h2>Experiencia</h2>
    </S.ExperienceContainer>
  )
}

export default Experience

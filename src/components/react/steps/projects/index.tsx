import { type FC, useEffect, useRef } from 'react'
import { useStore } from '@nanostores/react'
import { currentStep } from 'src/stores/steps'
import * as S from './styled'

const Projects: FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const current = useStore(currentStep)

  useEffect(() => {
    if (current === 4) {
      ref.current?.classList.add('start-animation')
    }
  }, [current])

  return (
    <S.ProjectsContainer id='projects' ref={ref}>
      <h2>Proyectos</h2>
    </S.ProjectsContainer>
  )
}

export default Projects

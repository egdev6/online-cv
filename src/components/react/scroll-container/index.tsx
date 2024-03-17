import { type FC, useEffect, type PropsWithChildren, useRef } from 'react'
import { useStore } from '@nanostores/react'
import { currentStep, setCurrentStep } from 'src/stores/steps'
import Home from '@icons/home.svg?react'
import Me from '@icons/me.svg?react'
import Skills from '@icons/skills.svg?react'
import Experience from '@icons/experience.svg?react'
import Projects from '@icons/projects.svg?react'
import Contact from '@icons/contact.svg?react'
import { useTranslation } from 'react-i18next'
import * as S from './styled'
import { showModal } from 'src/stores/modal'

const ScrollContainer: FC<PropsWithChildren> = ({ children }) => {
  const current = useStore(currentStep)
  const modal = useStore(showModal)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scrollTimeout = useRef<any>(undefined)
  const { t } = useTranslation()

  const steps = [
    document.getElementById('step1'),
    document.getElementById('step2'),
    document.getElementById('step3'),
    document.getElementById('step4'),
    document.getElementById('step5'),
    document.getElementById('step6'),
  ]

  const stepIcons = [
    <Home key='1' />,
    <Me key='2' />,
    <Skills key='3' />,
    <Experience key='4' />,
    <Projects key='5' />,
    <Contact key='6' />,
  ]

  const stepTitles = [
    t('steps.step1'),
    t('steps.step2'),
    t('steps.step3'),
    t('steps.step4'),
    t('steps.step5'),
    t('steps.step6'),
  ]

  useEffect(() => {
    const container = steps[current]
    if (container) {
      container.scrollIntoView({ block: 'start', behavior: 'smooth' })
    } else {
      window.scrollTo(0, 0)
    }
  }, [current])

  useEffect(() => {
    if (modal) return () => false // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleScroll = (e: any) => {
      e.preventDefault()
      e.stopPropagation()
      const direction = e.deltaY > 0 ? 'next' : 'previous'
      const step = current
      clearTimeout(scrollTimeout.current)
      scrollTimeout.current = setTimeout(() => {
        if (direction === 'next') {
          if (step < steps.length - 1) {
            setCurrentStep(step + 1)
          } else {
            setCurrentStep(steps.length - 1)
          }
        } else {
          if (step > 0) {
            setCurrentStep(step - 1)
          } else {
            setCurrentStep(0)
          }
        }
      }, 200) // 500ms delay
    }

    window.addEventListener('wheel', handleScroll)

    return () => {
      window.removeEventListener('wheel', handleScroll)
    }
  }, [modal, current])

  const renderDots = () => {
    return steps.map((_step, index) => {
      return (
        <li
          key={index}
          className={`tooltip-left${current === index ? ' active' : ''}`}
          onClick={() => setCurrentStep(index)}
          data-tooltip={stepTitles[index]}
        >
          <S.FloatingTitle className='step-title'>
            <div>
              <p>{stepTitles[index]}</p>
            </div>
          </S.FloatingTitle>
          {stepIcons[index]}
        </li>
      )
    })
  }

  return (
    <S.ScrollContainer>
      {children}
      <S.NavigationDots>
        <ul>{renderDots()}</ul>
      </S.NavigationDots>
    </S.ScrollContainer>
  )
}

export default ScrollContainer

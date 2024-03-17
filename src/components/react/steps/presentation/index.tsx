import { type FC, useEffect, useRef } from 'react'
import { useStore } from '@nanostores/react'
import { currentStep } from 'src/stores/steps'
import { useTranslation } from 'react-i18next'
import * as S from './styled'

const Presentation: FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const current = useStore(currentStep)
  const { t } = useTranslation('translation')

  useEffect(() => {
    if (current === 0) {
      ref.current?.classList.add('start-animation')
    }
  }, [current])

  return (
    <S.PresentationContainer id='presentation' ref={ref}>
      <S.PresentationText className='presentation-text'>
        <h4>{t('presentation.welcome')}</h4>
        <div className='presentation-header'>
          <h1>{t('presentation.position')}</h1>
          <h1> {t('presentation.position2')}</h1>
        </div>
        <div className='presentation-separator'></div>
        <p>{t('presentation.description')}</p>
      </S.PresentationText>
      <S.PresentationImage className='presentation-image'>
        <div className='presentation-image-filter'></div>
        <img src='src/assets/images/office.jpg' alt='Egdev' />
      </S.PresentationImage>
      <S.PresentationMe className='presentation-me'>
        <img src='src/assets/images/yo.png' alt='Egdev' />
      </S.PresentationMe>
    </S.PresentationContainer>
  )
}

export default Presentation

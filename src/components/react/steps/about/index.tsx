import { type FC, useEffect, useRef, useState } from 'react'
import { useStore } from '@nanostores/react'
import { currentStep } from 'src/stores/steps'
import Arrow from '@icons/arrow.svg?react'
import { useTranslation, Trans } from 'react-i18next'
import * as S from './styled'

const About: FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const current = useStore(currentStep)
  const { t } = useTranslation()
  const [activeContent, setActiveContent] = useState<'personal' | 'professional' | undefined>(undefined)

  useEffect(() => {
    if (current === 1) {
      ref.current?.classList.add('start-animation')

      if (!activeContent) {
        setTimeout(() => {
          setActiveContent('professional')
        }, 200)
      }
    }
  }, [current])

  return (
    <S.AboutContainer id='about' ref={ref}>
      <h3>{t('about.title')}</h3>
      <S.AboutWrapper className={`about-wrapper${activeContent === 'professional' ? ' active' : ''}`}>
        <S.AboutProfessional className='about-professional'>
          <div className='about-professional-info'>
            <h5>{t('about.professional')}</h5>
            <div className='presentation-separator'></div>
            <div>
              <p>
                <Trans i18nKey='about.professionalDescription'>
                  Soy desarrollador con <strong>más de 8 años de experiencia</strong>. De los cuales, 6 de ellos
                  centrado en el desarrollo frontend.
                </Trans>
              </p>
              <p>
                <Trans i18nKey='about.professionalDescription2'>
                  Estoy <strong>especializado en entornos web</strong> con HTML, CSS y Javascript, realizando gran parte
                  de mi trabajo en ecosistema <strong>React / Next.js. / Redux</strong>.
                </Trans>
              </p>
              <p>
                <Trans i18nKey='about.professionalDescription3'>
                  Me apasiona la vertiente más creativa y funcional del desarrollo. Poseo
                  <strong>conocimientos de diseño UI / UX y accesibilidad</strong> y manejo con soltura herramientas de
                  diseño como Figma o Adobe XD.
                </Trans>
              </p>
              <p>
                <Trans i18nKey='about.professionalDescription4'>
                  Me gusta asumir nuevos retos con un <strong>alto grado de compromiso</strong>. Soy autodidacta y
                  tremendamente inquieto a la hora de investigar y experimentar con nuevas tecnologías.
                </Trans>
              </p>
              <p>
                <Trans i18nKey='about.professionalDescription5'>
                  A lo largo de mi trayectoria profesional he trabajado también con otras tecnologías como Twig o PHP,
                  aunque en menor medida.
                </Trans>
              </p>
            </div>
          </div>
        </S.AboutProfessional>
        <S.AboutSelection className='about-selection-professional'>
          <S.AboutButton>
            <img src='src/assets/images/personal.jpg' alt='Personal' />
            <div className='filter-background professional-dist'></div>
            <button className='professional-button' onClick={() => setActiveContent('personal')}>
              <p>{t('about.personal')}</p>
              <Arrow />
            </button>
          </S.AboutButton>
        </S.AboutSelection>
      </S.AboutWrapper>
      <S.AboutWrapper className={`about-wrapper${activeContent === 'personal' ? ' active' : ' unactive'}`}>
        <S.AboutSelection className='about-selection-personal'>
          <S.AboutButton>
            <img src='src/assets/images/personal.jpg' alt='Personal' />
            <div className='filter-background personal-dist'></div>
            <button className='personal-button' onClick={() => setActiveContent('professional')}>
              <Arrow />
              <p>{t('about.professional')}</p>
            </button>
          </S.AboutButton>
        </S.AboutSelection>
        <S.AboutPersonal className={'about-personal'}>
          <div className='about-personal-info'>
            <h5>{t('about.personal')}</h5>
            <div className='presentation-separator'></div>
            <div>
              <p>
                <Trans i18nKey='about.personalDescription'>Tengo 42 años y resido en Sagunto, Valencia, España.</Trans>
              </p>
              <p>
                <Trans i18nKey='about.personalDescription2'>
                  Me considero una persona alegre, persistente, creativa, positiva, con buenas habilidades comunicativas
                  y de trabajo en equipo. Soy organizado, perfeccionista, proactivo y me manejo bien en situaciones de
                  alta presión.
                </Trans>
              </p>
              <p>
                <Trans i18nKey='about.personalDescription4'>
                  Soy autodidacta. Me gusta estar al día de las novedades en el mundo del desarrollo frontend y en
                  tecnología. Soy tremendamente inquieto a la hora de experimentar con nuevas tecnologías.
                </Trans>
              </p>
              <p>
                <Trans i18nKey='about.personalDescription3'>
                  Mis aficiones son jugar a videojuegos, ver series y películas, escuchar música, viajar y compartir
                  tiempo con mi familia y amigos.
                </Trans>
              </p>
            </div>
          </div>
        </S.AboutPersonal>
      </S.AboutWrapper>
    </S.AboutContainer>
  )
}

export default About

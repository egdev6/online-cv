import { type FC, useEffect, useRef, useState } from 'react'
import { useStore } from '@nanostores/react'
import { currentStep } from '@stores/steps'
import { useTranslation } from 'react-i18next'
import experienceList from '@config/experienceList'
import { type Experience } from '@model/experience'
import { setBlockScroll } from 'src/stores/block-scroll'
import Modal from '@react-components/modal'
import { differenceInMonths, differenceInYears, format, isAfter } from 'date-fns'
import Eye from '@icons/eye.svg?react'
import Arrow from '@icons/arrow.svg?react'
import * as S from './styled'

const Experience: FC = () => {
  const { t } = useTranslation()
  const ref = useRef<HTMLDivElement>(null)
  const refList = useRef<HTMLDivElement>(null)
  const current = useStore(currentStep)
  const [showModal, setShowModal] = useState(false)
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null)

  const handleSelect = (experience: Experience) => {
    setSelectedExperience(experience)
    setShowModal(true)
    setBlockScroll(true)
  }

  const handleClose = () => {
    setShowModal(false)
    setBlockScroll(false)
  }

  useEffect(() => {
    if (current === 3) {
      ref.current?.classList.add('start-animation')

      setTimeout(() => {
        refList.current?.classList.add('fixed')
      }, 2000)
    }
  }, [current])

  const renderExperienceList = () => {
    return experienceList.map((experience: Experience, index) => {
      if (!experience) return null
      const years = differenceInYears(experience.finishDate || new Date(), experience.startDate)
      const months = (differenceInMonths(experience.finishDate || new Date(), experience.startDate) % 12) + 1

      return (
        <S.ExperienceItem key={index} onClick={() => handleSelect(experience)} className='experience-item'>
          <div className='hover-wrapper'>
            <Eye />
            <h6>{experience.company} </h6>
          </div>
          <div className='image-wrapper'>
            <img src={experience.image} alt={experience.company} />
          </div>
          <h6 className='experience-title'>{experience.title}</h6>
          <p className='experience-dates'>
            {isAfter(new Date(experience.startDate), new Date())
              ? t('messages.future')
              : `${format(experience.startDate, 'MMM yyyy')} - ${experience.finishDate ? format(experience.finishDate, 'MMM yyyy') : t('messages.current')}`}
          </p>
          <p className='experience-period'>
            {experience.finishDate &&
              `${years} ${years > 1 ? t('messages.years') : t('messages.year')} ${months} ${months > 1 ? t('messages.months') : t('monthmessages.')}`}
          </p>
          <p className='experience-location'>
            {experience.location} - {experience.modality}
          </p>
        </S.ExperienceItem>
      )
    })
  }

  const ModalHeading = () => {
    if (!selectedExperience) return null
    const years = differenceInYears(selectedExperience.finishDate || new Date(), selectedExperience.startDate)
    const months =
      (differenceInMonths(selectedExperience.finishDate || new Date(), selectedExperience.startDate) % 12) + 1
    return (
      <S.ModalHeading>
        <h5>{selectedExperience?.title}</h5>
        <img src={selectedExperience?.image} alt={selectedExperience?.company} />
        <h6>{selectedExperience?.company}</h6>
        <p className='experience-dates'>
          {isAfter(new Date(selectedExperience.startDate), new Date())
            ? t('messages.future')
            : `${format(selectedExperience.startDate, 'MMM yyyy')} - ${selectedExperience.finishDate ? format(selectedExperience.finishDate, 'MMM yyyy') : t('messages.current')}`}
        </p>
        <p className='experience-period'>
          {selectedExperience.finishDate &&
            `${years} ${years > 1 ? t('messages.years') : t('messages.year')} ${months} ${months > 1 ? t('messages.months') : t('monthmessages.')}`}
        </p>
        <p className='experience-location'>
          {selectedExperience.location} - {selectedExperience.modality}
        </p>
      </S.ModalHeading>
    )
  }

  const ModalContent = () => {
    if (!selectedExperience) return null
    return (
      <S.ModalContent>
        <h6>{t('experience.description')}</h6>
        <div>
          {selectedExperience?.competencies.length > 0 ? (
            <ul>
              {selectedExperience?.competencies.map((competency: JSX.Element, index: number) => {
                return (
                  <li key={index}>
                    <Arrow />
                    <p>{competency}</p>
                  </li>
                )
              })}
            </ul>
          ) : (
            t('messages.future')
          )}
        </div>
      </S.ModalContent>
    )
  }

  return (
    <S.ExperienceContainer id='experience' ref={ref}>
      <img src='src/assets/images/experience.png' alt='Experience' />
      <div className='image-wrapper'></div>
      <h3>{t('experience.title')}</h3>
      <S.ExperienceList className='experience-list' ref={refList}>
        {renderExperienceList()}
      </S.ExperienceList>
      <Modal open={showModal} onClose={handleClose} heading={<ModalHeading />} content={<ModalContent />} />
    </S.ExperienceContainer>
  )
}

export default Experience

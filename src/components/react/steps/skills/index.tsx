import { type FC, useEffect, useRef, useState } from 'react'
import { useStore } from '@nanostores/react'
import { currentStep } from 'src/stores/steps'
import Modal from '@react-components/modal'
import skillsList from 'src/config/skillsList'
import { useTranslation } from 'react-i18next'
import { type Skill } from 'src/model/skill'
import * as S from './styled'
import { showModal, setShowModal } from 'src/stores/modal'
import Favorite from '@icons/favorite.svg?react'
import Arrow from '@icons/arrow.svg?react'

const Skills: FC = () => {
  const { t } = useTranslation()
  const ref = useRef<HTMLDivElement>(null)
  const refList = useRef<HTMLDivElement>(null)
  const current = useStore(currentStep)
  const modal = useStore(showModal)
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)

  useEffect(() => {
    if (current === 2) {
      ref.current?.classList.add('start-animation')

      setTimeout(() => {
        refList.current?.classList.add('fixed')
      }, 2000)
    }
  }, [current])

  const handleSelect = (skill: Skill) => {
    setSelectedSkill(skill)
    setShowModal(true)
  }

  const renderList = () => {
    return skillsList.map((skill, index) => {
      return (
        <S.SkillItem key={index} $child={index} className='skill-item' onClick={() => handleSelect(skill)}>
          <div className='skill-item-content'>
            {skill.icon}
            <div className='skill-item-info'>
              {skill.mainStack && <Favorite />}
              <p>{skill.title}</p>
            </div>
          </div>
        </S.SkillItem>
      )
    })
  }

  return (
    <S.SkillsContainer id='skills' ref={ref}>
      <img src='src/assets/images/desktop.png' alt='Skills' />
      <div className='image-wrapper'></div>
      <h3>{t('skills.title')}</h3>
      <S.SkillsWrapper className='skills-grid' ref={refList}>
        <div>{renderList()}</div>
      </S.SkillsWrapper>
      <Modal open={modal} onClose={setShowModal} skill={selectedSkill}>
        <S.ModalContent>
          <h6>{t('skills.description')}</h6>
          <div>{selectedSkill?.detail}</div>
          {selectedSkill?.links && selectedSkill?.links.length > 0 && (
            <>
              <h6>{t('skills.links')}</h6>
              <ul>
                {selectedSkill?.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} target='_blank' rel='noreferrer'>
                      <Arrow /> {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </S.ModalContent>
      </Modal>
    </S.SkillsContainer>
  )
}

export default Skills

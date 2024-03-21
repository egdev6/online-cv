import {
  type FC,
  type PropsWithChildren,
  type ReactNode,
  type TransitionEventHandler,
  useCallback,
  useEffect,
  useState,
} from 'react'
import Close from '@icons/close.svg?react'
import classNames from 'classnames'
import ReactDOM from 'react-dom'
import { type Skill } from 'src/model/skill'
import Favorite from '@icons/favorite.svg?react'
import { useTranslation } from 'react-i18next'

import * as S from './styled'

interface ModalProps {
  onClose: (value: boolean) => void
  open?: boolean
  className?: string
  skill?: Skill | null
}

const getModalContainer = (): HTMLDivElement => {
  let container = document.querySelector<HTMLDivElement>('body > .modal-root')
  if (!container) {
    container = document.createElement('div')
    container.classList.add('modal-root')
    container.setAttribute('role', 'dialog')
    container.setAttribute('aria-modal', 'true')
    document.body.appendChild(container)
  }

  return container
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({ children, className, onClose, open = false, skill }) => {
  const { t } = useTranslation()
  const [content, setContent] = useState<ReactNode>(null)
  const [fadeIn, setFadeIn] = useState(false)

  const handleEsc = ({ key }: KeyboardEvent) => {
    if (content && key === 'Escape') {
      onClose(false)
    }
  }

  const handleTransitionEnd: TransitionEventHandler = useCallback(({ propertyName, currentTarget, target }) => {
    if (target === currentTarget && propertyName === 'opacity' && !currentTarget.classList.contains('fade-in')) {
      setContent(null)
    }
  }, [])

  useEffect(() => {
    if (content) {
      window.addEventListener('keydown', handleEsc, false)
    }

    return () => window.removeEventListener('keydown', handleEsc, false)
  }, [content])

  useEffect(() => {
    if (open) {
      setContent(children)
      setTimeout(() => setFadeIn(true), 100)
    } else {
      setFadeIn(false)
    }
  }, [open, children])

  if (!content) {
    return null
  }

  const container = getModalContainer()

  const ModalContent = (
    <S.Backdrop className={classNames(className, { 'fade-in': fadeIn })} onTransitionEnd={handleTransitionEnd}>
      <S.Content>
        <S.Heading>
          <h5>{skill?.title}</h5>
          {skill?.icon}
          {skill?.mainStack && (
            <p className='main-stack'>
              <Favorite /> {t('messages.mainStack')}
            </p>
          )}
          <p className='skill-description'>{skill?.description}</p>
        </S.Heading>
        <S.ContentWrapper>
          <button onClick={() => onClose(false)}>
            <Close />
          </button>
          <S.ChildrenContent>{content}</S.ChildrenContent>
        </S.ContentWrapper>
      </S.Content>
    </S.Backdrop>
  )

  return ReactDOM.createPortal(ModalContent, container)
}

export default Modal

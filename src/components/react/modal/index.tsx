import {
  type FC,
  type PropsWithChildren,
  type ReactNode,
  type TransitionEventHandler,
  useCallback,
  useEffect,
  useState,
} from 'react'
import classNames from 'classnames'
import ReactDOM from 'react-dom'
import Close from '@icons/close.svg?react'
import * as S from './styled'

interface ModalProps {
  onClose: (value: boolean) => void
  open?: boolean
  className?: string
  heading?: JSX.Element
  content?: JSX.Element
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

const Modal: FC<PropsWithChildren<ModalProps>> = ({ className, onClose, open = false, heading, content }) => {
  const [modalContent, setModalContent] = useState<ReactNode>(null)
  const [modalHeading, setModalHeading] = useState<ReactNode>(null)
  const [fadeIn, setFadeIn] = useState(false)

  const handleEsc = ({ key }: KeyboardEvent) => {
    if (content && key === 'Escape') {
      onClose(false)
    }
  }

  const handleTransitionEnd: TransitionEventHandler = useCallback(({ propertyName, currentTarget, target }) => {
    if (target === currentTarget && propertyName === 'opacity' && !currentTarget.classList.contains('fade-in')) {
      setModalContent(null)
      setModalHeading(null)
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
      setModalContent(content)
      setModalHeading(heading)
      setTimeout(() => setFadeIn(true), 100)
    } else {
      setFadeIn(false)
    }
  }, [open, content, heading])

  if (!modalContent && !modalHeading) {
    return null
  }

  const container = getModalContainer()

  const ModalContent = (
    <S.Backdrop className={classNames(className, { 'fade-in': fadeIn })} onTransitionEnd={handleTransitionEnd}>
      <S.Content>
        <S.Heading>{modalHeading}</S.Heading>
        <S.ContentWrapper>
          <button onClick={() => onClose(false)}>
            <Close />
          </button>
          <S.ChildrenContent>{modalContent}</S.ChildrenContent>
        </S.ContentWrapper>
      </S.Content>
    </S.Backdrop>
  )

  return ReactDOM.createPortal(ModalContent, container)
}

export default Modal

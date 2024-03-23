import { type FC } from 'react'
import Facebook from '@icons/facebook.svg?react'
import Instagram from '@icons/instagram.svg?react'
import X from '@icons/x.svg?react'
import Linkedin from '@icons/linkedin.svg?react'
import Arrow from '@icons/arrow.svg?react'
import Mouse from '@icons/mouse.svg?react'
import * as S from './styled'
import { useStore } from '@nanostores/react'
import { currentStep } from '@stores/steps'
import { blockScroll } from '@stores/block-scroll'

const Footer: FC = () => {
  const current = useStore(currentStep)
  const blocked = useStore(blockScroll)

  return (
    <S.FooterContainer>
      <ul>
        <li>
          <a href='https://www.linkedin.com/in/egdev/' target='_blank' rel='noreferrer'>
            <Linkedin />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/kede_frikdas/' target='_blank' rel='noreferrer'>
            <Instagram />
          </a>
        </li>
        <li>
          <a href='https://www.facebook.com/kede6/' target='_blank' rel='noreferrer'>
            <Facebook />
          </a>
        </li>
        <li>
          <a href='https://twitter.com/egdev66' target='_blank' rel='noreferrer'>
            <X />
          </a>
        </li>
      </ul>
      {!blocked && (
        <S.MouseContainer>
          <div className={`arrow-up-icon${current > 0 ? ' show' : ' hidden'}`}>
            <Arrow />
          </div>
          <div className='mouse-icon'>
            <Mouse />
          </div>
          <div className={`arrow-down-icon${current < 5 ? ' show' : ' hidden'}`}>
            <Arrow />
          </div>
        </S.MouseContainer>
      )}
    </S.FooterContainer>
  )
}

export default Footer

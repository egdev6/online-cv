import { useRef, type FC, useState, useEffect } from 'react'
import Logo from 'src/assets/vector/logo.svg?react'
import ES from '@icons/es.svg?react'
import EN from '@icons/en.svg?react'
import { useTranslation } from 'react-i18next'
import * as S from './styled'

const Menu: FC = () => {
  const input = useRef<HTMLInputElement>(null)
  const [currentLanguage, setCurrentLanguage] = useState('es')
  const { i18n } = useTranslation()

  const handleOnClick = () => {
    if (input.current?.checked) {
      setCurrentLanguage('en')
    } else {
      setCurrentLanguage('es')
    }
  }

  useEffect(() => {
    if (currentLanguage) {
      i18n.changeLanguage(currentLanguage)
    }
  }, [currentLanguage])

  return (
    <S.MenuContainer>
      <S.LogoContainer>
        <Logo />
        <h4>
          Eg<span>dev</span>
        </h4>
      </S.LogoContainer>
      <S.LanguageContainer>
        <center>
          <div className='switch'>
            <input
              id='language-toggle'
              ref={input}
              className='check-toggle-round-flat'
              type='checkbox'
              onChange={() => handleOnClick()}
            />
            <label htmlFor='language-toggle'></label>
            <span className={`on${currentLanguage === 'en' ? ' grey' : ''}`}>
              <ES />
            </span>
            <span className={`off${currentLanguage === 'en' ? '' : ' grey'}`}>
              <EN />
            </span>
          </div>
        </center>
      </S.LanguageContainer>
    </S.MenuContainer>
  )
}

export default Menu

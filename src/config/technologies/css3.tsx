import { Trans } from 'react-i18next'
import CSS3 from '@icons/CSS3.svg?react'
import { type Skill } from '@model/skill'

const css3: Skill = {
  title: 'CSS3',
  icon: <CSS3 />,
  mainStack: true,
  description: <Trans i18nKey='skills.descriptions.css' />,
  detail: (
    <Trans i18nKey='skills.details.css'>
      <p>
        Soy un apasionado de las hojas de estilo y de la maquetación web. Me gusta experimentar con las últimas
        tecnologías y tendencias para mejorar la experiencia de usuario.
      </p>
      <p>
        He trabajado con CSS en proyectos de todo tipo, desde pequeñas webs hasta aplicaciones web complejas. Tanto
        mobile-first como desktop-first, siempre intento seguir las mejores prácticas.
      </p>
    </Trans>
  ),
  links: [
    {
      title: 'CSS3',
      url: 'https://lenguajecss.com/css/',
    },
  ],
}

export default css3

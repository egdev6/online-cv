import { Trans } from 'react-i18next'
import HTML5Icon from '@icons/HTML5.svg?react'
import { type Skill } from '@model/skill'

const html5: Skill = {
  title: 'HTML5',
  icon: <HTML5Icon />,
  mainStack: true,
  description: <Trans i18nKey='skills.descriptions.html' />,
  detail: (
    <Trans i18nKey='skills.details.html'>
      <p>Llevo usando html como lenguaje de marcado desde que empecé a programar en entornos web.</p>
      <p>
        Intento mantenerme actualizado con las últimas novedades y buenas prácticas para mejorar la accesibilidad y la
        semántica de mis proyectos.
      </p>
    </Trans>
  ),
  links: [
    {
      title: 'HTML5',
      url: 'https://lenguajehtml.com/html/',
    },
  ],
}

export default html5

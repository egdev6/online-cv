import { Trans } from 'react-i18next'
import SassIcon from '@icons/Sass.svg?react'
import { type Skill } from '@model/skill'

const sass: Skill = {
  title: 'Sass',
  icon: <SassIcon />,
  mainStack: false,
  description: <Trans i18nKey='skills.descriptions.sass' />,
  detail: (
    <Trans i18nKey='skills.details.sass'>
      <p>
        Utilizo habitualmente su sintaxis anidada en mis proyectos, ya que me parece una forma muy cómoda de escribir
        estilos CSS.
      </p>
      <p>
        Me gusta la posibilidad de utilizar variables y funciones que ofrece Sass, ya que me permiten reutilizar estilos
        y hacer el código más mantenible.
      </p>
    </Trans>
  ),
  links: [
    {
      title: 'Sass',
      url: 'https://sass-lang.com/',
    },
  ],
}

export default sass

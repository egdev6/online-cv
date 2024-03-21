import { Trans } from 'react-i18next'
import AstroIcon from '@icons/Astro.svg?react'
import { type Skill } from '@model/skill'

const astro: Skill = {
  title: 'Astro',
  icon: <AstroIcon />,
  mainStack: false,
  description: <Trans i18nKey='skills.descriptions.astro' />,
  detail: (
    <Trans i18nKey='skills.details.astro'>
      <p>
        He empezado a usar Astro recientemente y me ha sorprendido gratamente. Me encanta la idea de poder utilizar
        componentes de diferentes tecnologías en un mismo proyecto.
      </p>
      <p>
        El paradigma de componetización por islas me parece muy interesante y creo que aporta muchos beneficios a la
        hora de desarrollar aplicaciones web. Su rendimiento y su facilidad de uso son dos de sus puntos fuertes.
      </p>
    </Trans>
  ),
  links: [
    {
      title: 'Astro',
      url: 'https://astro.build/',
    },
  ],
}

export default astro

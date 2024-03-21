import { Trans } from 'react-i18next'
import ThreejsIcon from '@icons/Threejs.svg?react'
import { type Skill } from '@model/skill'
const threejs: Skill = {
  title: 'Three.js',
  icon: <ThreejsIcon />,
  mainStack: false,
  description: <Trans i18nKey='skills.descriptions.threejs' />,
  detail: (
    <Trans i18nKey='skills.details.threejs'>
      <p>
        Estoy empezando a experimientar con Three.js, construyendo pequeños proyectos y aprendiendo a crear escenas 3D.
      </p>
      <p>Me parece super interesante y divertido, y estoy deseando poder aplicarlo en proyectos reales.</p>
    </Trans>
  ),
  links: [
    {
      title: 'Three.js',
      url: 'https://threejs.org/',
    },
  ],
}

export default threejs

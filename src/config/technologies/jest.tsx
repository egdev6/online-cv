import { Trans } from 'react-i18next'
import JestIcon from '@icons/Jest.svg?react'
import { type Skill } from '@model/skill'

const jest: Skill = {
  title: 'Jest',
  icon: <JestIcon />,
  mainStack: true,
  description: <Trans i18nKey='skills.descriptions.jest' />,
  detail: (
    <Trans i18nKey='skills.details.jest'>
      <p>He realizado pruebas unitarias y de integración en algunos proyectos.</p>
      <p>
        Llevo poco tiempo usándolo pero tiene una sintaxis muy clara y sencilla, lo que facilita la escritura de pruebas
        para el código.
      </p>
    </Trans>
  ),
  links: [
    {
      title: 'Jest',
      url: 'https://jestjs.io/',
    },
  ],
}

export default jest

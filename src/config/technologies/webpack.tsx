import { Trans } from 'react-i18next'
import WebpackIcon from '@icons/Webpack.svg?react'
import { type Skill } from '@model/skill'

const webpack: Skill = {
  title: 'Webpack',
  icon: <WebpackIcon />,
  mainStack: false,
  description: <Trans i18nKey='skills.descriptions.webpack' />,
  detail: (
    <Trans i18nKey='skills.details.webpack'>
      <p>He usado Webpack como empaquetador de módulos durante bastante tiempo, en proyectos de React.</p>
      <p>He tenido que realizar alguna vez configuraciones avanzadas, como la configuración de loaders y plugins.</p>
    </Trans>
  ),
  links: [
    {
      title: 'Webpack',
      url: 'https://webpack.js.org/',
    },
  ],
}

export default webpack

import { Trans } from 'react-i18next'
import JavaScript from '@icons/JavaScript.svg?react'
import { type Skill } from '@model/skill'

const javascript: Skill = {
  title: 'Javascript',
  icon: <JavaScript />,
  mainStack: true,
  description: <Trans i18nKey='skills.descriptions.javascript' />,
  detail: (
    <Trans i18nKey='skills.details.javascript'>
      <p>
        Llevo utilizando Javascript desde que empecé a programar, es un lenguaje que me encanta por su versatilidad y
        por la cantidad de cosas que se pueden hacer con él.
      </p>
      <p>He usado desde vanilla o JQuery hasta las últimas versiones de Ecmascript.</p>
      <p>También he usado tanto componentes de clase como funcionales.</p>
    </Trans>
  ),
  links: [
    {
      title: 'Javascript',
      url: 'https://lenguajejs.com/javascript/introduccion/que-es-javascript/',
    },
    {
      title: 'JQuery',
      url: 'https://jquery.com/',
    },
    {
      title: 'ECMAScript',
      url: 'https://lenguajejs.com/javascript/introduccion/ecmascript/',
    },
  ],
}
export default javascript

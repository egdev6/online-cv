import { Trans } from 'react-i18next'
import TypeScriptIcon from '@icons/TypeScript.svg?react'
import { type Skill } from '@model/skill'

const typescript: Skill = {
  title: 'Typescript',
  icon: <TypeScriptIcon />,
  mainStack: true,
  description: <Trans i18nKey='skills.descriptions.typescript' />,
  detail: (
    <Trans i18nKey='skills.details.typescript'>
      <p>
        Es cierto que TypeScript añade una capa de complejidad a los proyectos, pero también es cierto que aporta muchas
        ventajas. La detección de errores en tiempo de compilación y la mejora de la autocompletación son dos de las
        características que más me gustan.
      </p>
      <p>
        Además, TypeScript es un lenguaje que está en constante evolución y que cada vez tiene más aceptación en la
        comunidad. Creo que es una herramienta muy potente que puede ayudar a mejorar la calidad de los proyectos.
      </p>
    </Trans>
  ),
  links: [
    {
      title: 'TypeScript',
      url: 'https://www.typescriptlang.org/',
    },
  ],
}

export default typescript

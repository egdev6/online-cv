import { Trans } from 'react-i18next'
import StyledComponentsIcon from '@icons/StyledComponents.svg?react'
import { type Skill } from '@model/skill'

const styledComponents: Skill = {
  title: 'Styled Components',
  icon: <StyledComponentsIcon />,
  mainStack: true,
  description: <Trans i18nKey='skills.descriptions.styledComponents' />,
  detail: (
    <Trans i18nKey='skills.details.styledComponents'>
      <p>Styled components es mi librería preferida para utilizar CSS en JS.</p>
      <p>
        Me encanta la posibilidad de escribir CSS dentro de mis componentes y de poder reutilizarlo de una forma muy
        sencilla. Además, me permite trabajar con temas y estilos dinámicos de una forma muy cómoda.
      </p>
    </Trans>
  ),
  links: [
    {
      title: 'Styled Components',
      url: 'https://styled-components.com/',
    },
  ],
}

export default styledComponents

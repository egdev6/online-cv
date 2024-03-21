export type Skill = {
  title: string
  icon: JSX.Element
  mainStack: boolean
  description: JSX.Element | string
  detail: JSX.Element | string
  links?: Array<{ title: string; url: string }> | []
}

export type Experience = {
  title: string
  company: string
  image: string
  startDate: Date
  finishDate: Date | null
  location: string
  modality: JSX.Element
  competencies: JSX.Element[]
}

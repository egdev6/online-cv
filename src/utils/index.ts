/* Defining a custom function which returns a random number 
between min and max, including min and max */
export const generateRandomNumber = (min: string, max: string): number => {
  const randomNumber = Math.floor(Math.random() * (parseFloat(max) - parseFloat(min))).toFixed(1)
  console.log(randomNumber)
  return parseFloat(randomNumber)
}

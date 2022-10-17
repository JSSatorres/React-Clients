export const dataApi = async () => {
  try {
    const data = await fetch(`http://localhost:3000/todos`)
    return data.json()
  } catch (error) {
    console.log(error)
  }
}

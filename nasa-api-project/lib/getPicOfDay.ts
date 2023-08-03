const api = process.env.NASA_API_KEY

export default async function getPicOfDay() {

    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=' + api)

    return response.json()
}
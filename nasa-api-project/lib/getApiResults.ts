export default async function getApiResults(searchTerm: string) {

    const searchParams = new URLSearchParams({
        q: searchTerm,
        media_type: "image",
        page_size: '10'
    })

    const response = await fetch('http://images-api.nasa.gov/search?' + searchParams)

    return response.json()
}
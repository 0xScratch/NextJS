import getApiResults from "@/lib/getApiResults";
import Item from "./components/Item";

type Props = {
    params: {
        searchTerm: string
    }
}

export async function generateMetadata({ params: { searchTerm } }: Props){
    const apiData: Promise<SearchResult> = getApiResults(searchTerm)
    const data = await apiData
    const displayTerm = searchTerm.replaceAll('%20', ' ')

    if (!data?.collection?.items) {
        return {
            title: `${displayTerm} Not Found`
        }
    }

    return {
        title: displayTerm,
        description: `Search results for ${displayTerm}`
    }
}

export default async function page({ params: {searchTerm } }: Props) {
    const apiData: Promise<SearchResult> = getApiResults(searchTerm)
    const data = await apiData

    const results: Result[] | undefined = data?.collection?.items
    

    const content = (
        <main className="flex flex-col w-[80%] m-auto">
            {
                results ? 
                Object.values(results).map(result => {
                    return <Item key={result.data?.nasa_id} result={result}></Item>
                })
                : <h2>{`${searchTerm} not Found`}</h2>
            }
        </main>
    )

    return content
}
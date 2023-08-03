import getApiResults from "@/lib/getApiResults";

type Props = {
    params: {
        searchTerm: string
    }
}

export default async function page({ params: {searchTerm } }: Props) {
    const apiData: Promise<SearchResult> = getApiResults(searchTerm)
    const data = await apiData

    const result: Result[] | undefined = data?.collection?.items

    return (
        <div>page</div>
    )
}
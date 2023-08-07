type Props = {
    result: Result
}

export default function Item({ result }: Props) {
    const content = (
        <article className="flex mb-8 gap-4">
            <div className="image-section">
                <img src={result.links[0].href} alt="" width={150} />
            </div>
            <div className="text-section">
                <h1>{result.data[0].title}</h1>
                <p>{result.data[0].description}</p>
            </div>
        </article>
    )

    return content
}
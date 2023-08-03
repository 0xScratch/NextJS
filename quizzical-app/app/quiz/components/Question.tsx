type Props = {
    question: string
}
export default function Question({ question }: Props) {
    return (
        <h1>{question}</h1>
    )
}
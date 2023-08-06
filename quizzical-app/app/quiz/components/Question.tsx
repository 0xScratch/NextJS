type Props = {
    question: string
}
export default function Question({ question }: Props) {
    return (
        <h1 className="w-[95%] leading-4 text-[#293264] font-semibold mb-2 text-sm">
            {question}
        </h1>
    )
}
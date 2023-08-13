type Props = {
    checkAnswer: () => void
}

export default function Button({ checkAnswer }: Props) {
  return (
    <div className="flex justify-center mt-8">
        <button className="text-sm font-semibold bg-[#4d589e] text-[#f5f7fb] py-2 px-3 rounded-lg mb-3" onClick={checkAnswer}>Check answers</button>
    </div>
  )
}
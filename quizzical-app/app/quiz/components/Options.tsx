import he from "he"

type Props = {
    options: string[]
}

export default function Options({ options }: Props) {
    return (
        <div className="flex">
          {options.map((option, index) => (
            <button
              key={index} // Make sure to provide a unique key for each button"
              className="mr-2 text-xs text-[#293264] border-solid border-[#293264] border-[1px] py-[0.5px] px-2 rounded-xl hover:bg-[#d6dbf5] transition duration-200"
            >
              <p>{he.decode(option)}</p>
            </button>
          ))}
        </div>
      );
}
import he from "he"

type Props = {
    options: string[]
}

export default function Options({ options }: Props) {
    return (
        <div>
          {options.map((option, index) => (
            <button
              key={index} // Make sure to provide a unique key for each button"
              className="mr-2"
            >
              {he.decode(option)}
            </button>
          ))}
        </div>
      );
}
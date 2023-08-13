import he from "he";

type Props = {
  value: string,
  isSelected: boolean,
  onSelect: () => void,
  isCorrect: boolean
};

export default function Option({ value, isSelected, onSelect, isCorrect }: Props) {
  const nature = isSelected ? "#d6dbf5" : "#f5f7fb"
  const styles = {
    backgroundColor: isCorrect ? "#94d7a2" : nature
  };

  const handleClick = () => {
    if (!isSelected){
      onSelect()
    }
  }

  return (
    <button
      className="mr-2 text-xs text-[#293264] border-solid border-[#293264] border-[1px] py-[0.5px] px-2 rounded-xl hover:bg-[#d6dbf5] transition duration-200"
      style={styles}
      onClick={handleClick}
    >
      {he.decode(value)}
    </button>
  );
}
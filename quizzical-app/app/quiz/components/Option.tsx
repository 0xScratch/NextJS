import he from "he";

type Props = {
  value: string,
  isSelected: boolean,
  onClick: () => void,
};

export default function Option({ value, isSelected, onClick }: Props) {
  const styles = {
    backgroundColor: isSelected ? "#d6dbf5" : "#f5f7fb"
  };

  return (
    <button
      className="mr-2 text-xs text-[#293264] border-solid border-[#293264] border-[1px] py-[0.5px] px-2 rounded-xl hover:bg-[#d6dbf5] transition duration-200"
      style={styles}
      onClick={onClick}
    >
      {he.decode(value)}
    </button>
  );
}
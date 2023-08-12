'use client'

import { useState } from 'react';
import Option from "./Option";

type Props = {
  options: string[];
};

export default function OptionFrame({ options }: Props) {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);

  const handleOptionClick = (index: number) => {
    setSelectedOptionIndex(index === selectedOptionIndex ? null : index);
  };

  const optionElements = options.map((option, index) => (
    <Option
      key={index}
      value={option}
      isSelected={index === selectedOptionIndex}
      onClick={() => handleOptionClick(index)}
    />
  ));

  return (
    <div className="flex">
      {optionElements}
    </div>
  );
}

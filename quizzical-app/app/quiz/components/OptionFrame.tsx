'use client'

import { useState } from 'react';
import Option from "./Option";

type Props = {
  options: string[]
  correctAnswer: string
  checkAnswers: boolean
};


export default function OptionFrame({ options, correctAnswer, checkAnswers }: Props) {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  let correct_option: number = 5

  const handleOptionClick = (index: number) => {
    setSelectedOptionIndex(index === selectedOptionIndex ? null : index);
  };

  if(checkAnswers === true){
    for (let i = 0; i < 4; i++){
      if (options[i] === correctAnswer){
        correct_option = i
      }
    }
  }

  const optionElements = options.map((option, index) => (
    <Option
      key={index}
      value={option}
      isSelected={index === selectedOptionIndex}
      onSelect={() => handleOptionClick(index)}
      isCorrect={index === correct_option}
    />
  ));

  return (
    <div className="flex">
      {optionElements}
    </div>
  );
}

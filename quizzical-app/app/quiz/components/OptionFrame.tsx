import he from "he"
import { nanoid } from "nanoid";
import Option from "./Option";
import { useState } from 'react'

type Props = {
    options: string[]
}

export default function OptionFrame({ options }: Props) {
    // Start from here, you have to implement that select feature

    const selectOption = (id: number) => {
      
    }
    const optionElements = options.map((option, index) => (
      <Option 
        key={index}
        value={option}
        isSelected={false}
      />
    ))
    return (
        <div className="flex">
          {optionElements}
        </div>
      );
}
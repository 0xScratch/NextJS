import Question from "./Question"
import OptionFrame from "./OptionFrame"

import he from "he"
import { nanoid } from "nanoid"
import getQuestions from "@/lib/getQuestions"

export default async function Frames() {
    const mcqData: Promise<Results> = getQuestions()
    const data = await mcqData
    const results: MCQ[] | undefined = data.results

    function shuffleArray(array: string[]) {
        const shuffledArray = [...array]; // Create a copy of the original array
      
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
      
        return shuffledArray;
    }

    const frameElements = results?.map(item => {
        const options_array = item.incorrect_answers
        const incorrect = options_array.push(item.correct_answer)
        const newArray = shuffleArray(options_array)
        return (
            <div key={nanoid()}>    
                <Question question={he.decode(item.question)}/>
                <OptionFrame options={newArray}/>
                <hr className="bg-[#DBDEF0] mt-3 mb-4"/>
            </div>
        )
    })

    return (
        <div>
            {frameElements}
            <div className="flex justify-center mt-8">
                <button className="text-sm font-semibold bg-[#4d589e] text-[#f5f7fb] py-2 px-3 rounded-lg mb-3">Check answers</button>
            </div>
        </div>
    )
}
import Question from "./Question"
import OptionFrame from "./OptionFrame"

import he from "he"
import { nanoid } from "nanoid"
import getQuestions from "@/lib/getQuestions"
import Button from "./Button"

export default async function Frames() {
    let checkAnswers = false;
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

    const checkAnswer = () => {
        checkAnswers = true
    }

    const frameElements = results?.map(item => {
        const options_array = item.incorrect_answers
        const incorrect = options_array.push(item.correct_answer)
        const newArray = shuffleArray(options_array)
        return (
            <div key={nanoid()}>    
                <Question question={he.decode(item.question)}/>
                <OptionFrame options={newArray} correctAnswer={item.correct_answer} checkAnswers={checkAnswers}/>
                <hr className="bg-[#DBDEF0] mt-3 mb-4"/>
            </div>
        )
    })

    return (
        <div>
            {frameElements}
            <Button checkAnswer={checkAnswer}/>
        </div>
    )
}
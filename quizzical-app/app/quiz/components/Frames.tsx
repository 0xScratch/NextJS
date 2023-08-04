import Question from "./Question"
import Options from "./Options"

import he from "he"
import { nanoid } from "nanoid"

export default function Frames() {
    const set = [
        {
            id: nanoid(),
            "question":"What breed of dog was Marley in the film &quot;Marley &amp; Me&quot; (2008)?",
            "correct_answer": "Dalmation",
            "incorrect_answers": ["Golden Retriever","Shiba Inu", "Labrador"]
        },
        {
            id: nanoid(),   
            "question":"What breed of dog was Marley in the film &quot;Marley &amp; Me&quot; (2008)?",
            "correct_answer": "Labrador",
            "incorrect_answers": ["Golden Retriever","Shiba Inu", "Dalmation"]
        },
        {
            id: nanoid(),
            "question":"What breed of dog was Marley in the film &quot;Marley &amp; Me&quot; (2008)?",
            "correct_answer": "Dalmation",
            "incorrect_answers": ["Golden Retriever","Shiba Inu", "Labrador"]
        },
        {
            id: nanoid(),
            "question":"What breed of dog was Marley in the film &quot;Marley &amp; Me&quot; (2008)?",
            "correct_answer": "Golden Retriever",
            "incorrect_answers": ["Dalmation","Shiba Inu", "Labrador"]
        },
        {
            id: nanoid(),
            "question":"What breed of dog was Marley in the film &quot;Marley &amp; Me&quot; (2008)?",
            "correct_answer": "Shiba Inu",
            "incorrect_answers": ["Golden Retriever","Dalmation", "Labrador"]
        }
    ]

    function shuffleArray(array: string[]) {
        const shuffledArray = [...array]; // Create a copy of the original array
      
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
      
        return shuffledArray;
    }

    const frameElements = set.map(item => {
        const options_array = item.incorrect_answers
        const incorrect = options_array.push(item.correct_answer)
        const newArray = shuffleArray(options_array)
        return (
            <div key={item.id}>
                <Question question={he.decode(item.question)}/>
                <Options options={newArray}/>
                <br />
            </div>
        )
    })

    return (
        <div>
            {frameElements}
        </div>
    )
}
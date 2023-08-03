import Question from "./Question"

import he from "he"

export default function Frames() {
    const set = [
        {
            id: 1,
            "question":"What breed of dog was Marley in the film &quot;Marley &amp; Me&quot; (2008)?",
            "options": ["Golden Retriever","Dalmatian","Shiba Inu", "Labrador"]
        },
        {   
            id: 2,
            "question":"Who is the protagonist in the game &quot;The Walking Dead: Season One&quot;?",
            "options": ["Clementine","Kenny","Rick Grimes", "Lee Everett"]
        },
        {
            id: 3,
            "question": "What is the shape of the toy invented by Hungarian professor Ern\u0151 Rubik?",
            "options": ["Sphere","Cylinder","Pyramid", "Cube"]
        },
    ]

    const frameElements = set.map(item => {
        return (
            <div key={item.id}>
                <Question question={he.decode(item.question)}/>
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
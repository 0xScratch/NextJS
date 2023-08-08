export default async function getQuestions() {
    const response = await fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple", { cache: "no-store" })

    return response.json()
}
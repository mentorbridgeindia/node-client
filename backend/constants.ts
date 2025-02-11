export const STUBLAB_DB =
  "mongodb+srv://mentorbridgeindia:mentorbridgeindia@cluster0.nf4qj.mongodb.net/";

export const STUBLAB_DB_NAME = "StubLab";

export const STUBLAB_DB_OPTIONS =
  "?retryWrites=true&w=majority&appName=Cluster0";

export const STUPRO_DB =
  "mongodb+srv://st2proindia:St2pro%402024@stuproindia.ad8mv.mongodb.net/StuPro?retryWrites=true&w=majority&appName=Cluster0";

export const REPHRASE_PROMPT =
  'Generate content for below given title using simple words and split content into paragraphs not exceeding 650 characters each paragraph. I need minimum of 6 paragraphs and minimum 600 chatacter each paragraph. Also rephrase the title if necessary for this content. Add necessaary content to make it more engaging. Generate schema like this: {"title": string, "content": string}';

export const MODEL_LIST_GEN_PROMPT =
  "Generate a popular data for given model schema. The list should reflect a data objects within the domain, while still reflecting current popularity. Never use placeholder values. List should be in JSON format. Total number of objects should be ";

export const MODEL_OBJECT_GEN_PROMPT =
  "Generate a popular data for given model schema. The object should reflect a data object within the domain, while still reflecting current popularity. Never use placeholder values. Object should be in JSON format.";

export const SENTENCE_OF_THE_DAY_PROMPT =
  "I want to learn new sentence/phrase (in simple words) daily to excel in English. Give me a sentence for the day. Also share me few examples in detail related to Corporate and day-to-day activities. Everything in simple english. Generate minimum 7 paragraphs (maximum 400 characters) with 1st - Meaning of the sentence in detail (include synommys), 2nd - 6th examples. I want the output in json format. {title (sentence of the day), content having list of objects (content: {heading (ignore corproate/day-day), paragraph})}";

export const CODING_CHALLENGE_PROMPT =
  "Generate a coding challenge (as a beginner). Give me smaller step by step of instuctions and cover important topics one by one. Prepare a json response which should give me an object {title: string, goal: string, steps: details[], learnings: details[] }. detail: {title string, paragrapgh: string }. steps should have minimum of 6 paragrpahs each not exceeding 450 characters and learning should not exceed 2 paragrpahs not exceeding 450 each.  Language: ";

export const QUIZ_PROMPT =
  "Generate me a quiz on below topic. Quiz should contain 5 questions. Each question should have 4 options. Response object. {topic: string, quiz: {  question: string, answer: string, options: string[], answerDetail: string, trickOrTip: string }[]} answerDetail should not exceed maximum of 450 characters and must be in very simple english. Topic: ";

export const PUZZLE_PROMPT =
  "Generate me a puzzle on below topic. Puzzle should contain 5 questions. Each question should have 4 options. Response object. [{  question: string, answer: string, options: string[], answerDetail: string}] answerDetail should not exceed maximum of 400 characters and must be in very simple english. Prepare resposne so that I can parse to JSON without any error. ";

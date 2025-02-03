export const STUBLAB_DB =
  "mongodb+srv://mentorbridgeindia:mentorbridgeindia@cluster0.nf4qj.mongodb.net/StubLab?retryWrites=true&w=majority&appName=Cluster0";

export const STUPRO_DB =
  "mongodb+srv://st2proindia:St2pro%402024@stuproindia.ad8mv.mongodb.net/StuPro?retryWrites=true&w=majority&appName=Cluster0";

export const REPHRASE_PROMPT =
  'Generate content for below given title using simple words and split content into paragraphs not exceeding 650 characters each paragraph. I need minimum of 6 paragraphs and minimum 600 chatacter each paragraph. Also rephrase the title if necessary for this content. Add necessaary content to make it more engaging. Generate schema like this: {"title": string, "content": string}';

export const MODEL_LIST_GEN_PROMPT =
  "Generate a popular data for given model schema. The list should reflect a data objects within the domain, while still reflecting current popularity. Never use placeholder values. List should be in JSON format. Total number of objects should be ";

export const MODEL_OBJECT_GEN_PROMPT =
  "Generate a popular data for given model schema. The object should reflect a data object within the domain, while still reflecting current popularity. Never use placeholder values. Object should be in JSON format.";

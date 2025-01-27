export const getResponseFromAI = (type,count,response) => {
let prompt  = "Generate a ";

prompt = prompt + type;

if (type== "list") {
    prompt = prompt+ "of" +count + "diverse,";
}
prompt ="popular data for given model schema. The list should reflect a variety of categories or types within the domain, while still reflecting current popularity. Never use placeholder values." + JSON.stringify(response) + "Return:" +type; 
return prompt;
};                 
import OpenAI from 'openai';
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});
async function callApi(){
    const response = await openai.completions.create({
        model: "gpt-3.5-turbo-0301",
        prompt: "This story begins",
        max_tokens: 30,
      });
      console.log(response.data.choices[0].text);
}
async function getModels() {
    try {
      const models = await openai.models.list();
      console.log(models.data);
    } catch (error) {
      console.error('Error retrieving models:', error);
    }
  }
  
//getModels();
callApi();
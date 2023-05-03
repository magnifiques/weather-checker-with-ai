import { OpenAIApi, Configuration } from "openai";

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

const openAI = new OpenAIApi(configuration);

export default openAI;

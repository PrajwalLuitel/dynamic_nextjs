export async function get_description(content: string) {
  const axios = require("axios");

  const options = {
    method: "POST",
    url: "https://chatgpt-42.p.rapidapi.com/conversationgpt4",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "5ef2b39154msh39d7b565703b601p10528ajsn60d0b31d9cb3",
      "X-RapidAPI-Host": "chatgpt-42.p.rapidapi.com",
    },
    data: {
      messages: [
        {
          role: "professional content writer",
          content:
            "You are an expert content writer, give me a description for the website for the topic: " +
            content +
            " Make sure to give the content clean and not include anything extra.",
        },
      ],
      system_prompt: "",
      temperature: 0.9,
      top_k: 5,
      top_p: 0.9,
      max_tokens: 256,
      web_access: false,
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function get_image(content: string) {
  const axios = require("axios");

  const options = {
    method: "POST",
    url: "https://ai-image-generator10.p.rapidapi.com/image_gen_v2",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "5ef2b39154msh39d7b565703b601p10528ajsn60d0b31d9cb3",
      "X-RapidAPI-Host": "ai-image-generator10.p.rapidapi.com",
    },
    data: {
      query: "a beautiful " + content,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

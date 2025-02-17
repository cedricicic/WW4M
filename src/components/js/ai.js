import Anthropic from "@anthropic-ai/sdk";

const SYSTEM_PROMPT = `
You are an assistant that receives a resume and a job title and description and writes a cover letter for the user (a Waterloo student) to apply for the job. 
Tailor cover letter to job posting, role, and organization. Highlight relevant skills, experience, and qualifications from résumé. Provide specific examples
of transferable skills. Explain interest in the role and how employer benefits from hiring. Address unconventional background if needed. Reflect personality, 
values, and communication skills. Demonstrate research and writing ability. Follow standard formatting: 1-page, 3+ paragraphs, professional tone. Address hiring manager if known. 
Close with gratitude and interest in next steps Format your response in markdown to make it easier to render to a web page. the generated cover letter should be around 250 words
`;

const anthropic = new Anthropic({
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function generateCoverLetter(resume, jobDescription) {
  const msg = await anthropic.messages.create({
    model: "claude-3-haiku-20240307",
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: `
        Here is my resume: 
        ${resume}

        Here is the job description: 
        ${jobDescription}

        Please generate a tailored cover letter for this job application.
        `,
      },
    ],
  });

  return msg.content[0].text;
}

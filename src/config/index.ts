import { createPinoLogger } from "@voltagent/logger";

export const logger = createPinoLogger({
  name: "production-os",
  level: (process.env.LOG_LEVEL as any) || "info",
});

export const config = {
  openaiApiKey: process.env.OPENAI_API_KEY,
  model: "openai/gpt-4o-mini",
  embeddingModel: "openai/text-embedding-3-small",
};

import { Agent } from "@voltagent/core";
import { memory } from "../memory/index.js";
import { config } from "../config/index.js";
import { commanderPrompt } from "../prompts/commander.js";
import { integratorPrompt } from "../prompts/integrator.js";
import { auditorPrompt } from "../prompts/auditor.js";
import { memoryPrompt } from "../prompts/memory.js";

export const commander = new Agent({
  name: "Commander",
  instructions: commanderPrompt,
  model: config.model,
  memory: memory,
});

export const integrator = new Agent({
  name: "Integrator",
  instructions: integratorPrompt,
  model: config.model,
  memory: memory,
});

export const auditor = new Agent({
  name: "Auditor",
  instructions: auditorPrompt,
  model: config.model,
  memory: memory,
});

export const memoryAgent = new Agent({
  name: "MemoryAgent",
  instructions: memoryPrompt,
  model: config.model,
  memory: memory,
});

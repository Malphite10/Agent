import { Agent } from "@voltagent/core";
import { CONSTITUTION } from "../prompts/constitution";
import { knowledgeMemory } from "../memory";

// Layer 1 & 9 — Memory Core Agent
const MEMORY_PROMPT = `
${CONSTITUTION}

ROLE: MEMORY
You manage the system's state, context, and knowledge bases across Working, Project, Organizational, and Knowledge Memories.

SELF-IMPROVEMENT (Layer 9):
After each project, identify:
- What worked?
- What failed?
- What repeated?
- What should become a standard?
Store these insights and feed them back into the Organizational Memory.
`;

export const memoryAgent = new Agent({
  name: "Memory",
  instructions: MEMORY_PROMPT,
  model: "openai/gpt-4o",
  memory: knowledgeMemory,
});

import { Agent } from "@voltagent/core";
import { CONSTITUTION } from "../prompts/constitution";
import { workingMemory } from "../memory";

// Layer 1 & 2 — Commander Core Agent
const COMMANDER_PROMPT = `
${CONSTITUTION}

ROLE: COMMANDER
You are the central orchestrator of the Production Execution OS.

INTERNAL COMPONENTS (Layer 2):
- INTENT ENGINE: Convert user input into Objective, Deliverable, and Success Criteria.
- PRIORITY ENGINE: Rank tasks as Critical, Important, Optional, or Ignore.
- RISK ENGINE: Identify Unknowns, Dependencies, and Blockers before execution.
- PLANNING ENGINE: Build execution DAGs (dependency graphs, not simple task lists).

PRODUCTION CONTROL LOOP (Layer 6):
Drive the process: PLAN -> EXECUTE -> VERIFY -> REMEDIATE -> REVERIFY -> RELEASE.
`;

export const commander = new Agent({
  name: "Commander",
  instructions: COMMANDER_PROMPT,
  model: "openai/gpt-4o",
  memory: workingMemory,
});

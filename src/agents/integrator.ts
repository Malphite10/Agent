import { Agent } from "@voltagent/core";
import { CONSTITUTION } from "../prompts/constitution";
import { workingMemory } from "../memory";

// Layer 1 & 3 — Integrator Core Agent
const INTEGRATOR_PROMPT = `
${CONSTITUTION}

ROLE: INTEGRATOR
You execute the tasks defined by the Commander's DAGs.

INTERNAL SUBSYSTEMS (Layer 3):
- RESEARCHER: Finds facts and gathers information.
- BUILDER: Creates outputs and implements solutions.
- CONNECTOR: Handles APIs and external integrations.
- PACKAGER: Prepares final artifacts for release.
`;

export const integrator = new Agent({
  name: "Integrator",
  instructions: INTEGRATOR_PROMPT,
  model: "openai/gpt-4o",
  memory: workingMemory,
});

import { Agent } from "@voltagent/core";
import { CONSTITUTION } from "../prompts/constitution";
import { workingMemory } from "../memory";

// Layer 1 & 4 — Auditor Core Agent
const AUDITOR_PROMPT = `
${CONSTITUTION}

ROLE: AUDITOR
You verify outputs, ensure requirements are met, and manage failures.

INTERNAL SUBSYSTEMS (Layer 4):
- VALIDATOR: Requirement matching against Success Criteria.
- CRITIC: Challenges reasoning and implementation details.
- SECURITY: Looks for exposure and vulnerabilities.
- STRESS TESTER: Finds edge cases and potential failure points.

METRICS ENGINE (Layer 7):
Track Completion Rate, Error Rate, Audit Failure Rate, Remediation Count, Cycle Time, Context Loss Incidents.

FAILURE MANAGEMENT (Layer 8):
Classify failures (F1 Context, F2 Planning, F3 Execution, F4 Validation, F5 Knowledge, F6 Integration). Generate remediation tasks automatically.
`;

export const auditor = new Agent({
  name: "Auditor",
  instructions: AUDITOR_PROMPT,
  model: "openai/gpt-4o",
  memory: workingMemory,
});

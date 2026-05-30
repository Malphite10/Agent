import { Agent, Memory, VoltAgent } from "@voltagent/core";
import { LibSQLMemoryAdapter, LibSQLVectorAdapter } from "@voltagent/libsql";
import { createPinoLogger } from "@voltagent/logger";
import { honoServer } from "@voltagent/server-hono";

// Create logger
const logger = createPinoLogger({
  name: "Production-OS",
  level: "info",
});

// Layer 0 — Constitution
const CONSTITUTION = `
CONSTITUTION:
Truth > Completion
Completion > Speed
Speed > Elegance

NON-NEGOTIABLES:
- No invented facts
- No hidden assumptions
- No fake confidence
- No skipped validation
- No context loss
`;

// Layer 5 — Memory Architecture
// Working Memory: Active state (Current task)
const workingMemory = new Memory({
  storage: new LibSQLMemoryAdapter(),
  embedding: "openai/text-embedding-3-small",
  vector: new LibSQLVectorAdapter(),
  generateTitle: true,
});

// Project Memory: Requirements, Decisions, Artifacts (Current project)
const projectMemory = new Memory({
  storage: new LibSQLMemoryAdapter(),
  embedding: "openai/text-embedding-3-small",
  vector: new LibSQLVectorAdapter(),
  generateTitle: true,
});

// Organizational Memory: Standards, Patterns, Lessons (Cross-project)
const organizationalMemory = new Memory({
  storage: new LibSQLMemoryAdapter(),
  embedding: "openai/text-embedding-3-small",
  vector: new LibSQLVectorAdapter(),
  generateTitle: true,
});

// Knowledge Memory: Documentation, Research, Facts (Reference material)
const knowledgeMemory = new Memory({
  storage: new LibSQLMemoryAdapter(),
  embedding: "openai/text-embedding-3-small",
  vector: new LibSQLVectorAdapter(),
  generateTitle: true,
});


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

const commander = new Agent({
  name: "Commander",
  instructions: COMMANDER_PROMPT,
  model: "openai/gpt-4o",
  memory: workingMemory,
});


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

const integrator = new Agent({
  name: "Integrator",
  instructions: INTEGRATOR_PROMPT,
  model: "openai/gpt-4o",
  memory: workingMemory,
});


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

const auditor = new Agent({
  name: "Auditor",
  instructions: AUDITOR_PROMPT,
  model: "openai/gpt-4o",
  memory: workingMemory,
});


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

const memoryAgent = new Agent({
  name: "Memory",
  instructions: MEMORY_PROMPT,
  model: "openai/gpt-4o",
  memory: knowledgeMemory,
});


// Boot up the Production OS
new VoltAgent({
  agents: { commander, integrator, auditor, memoryAgent },
  server: honoServer(),
  logger,
});

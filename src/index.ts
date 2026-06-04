import { VoltAgent } from "@voltagent/core";
import { honoServer } from "@voltagent/server-hono";
import { logger } from "./config/index.js";
import { commander, integrator, auditor, memoryAgent } from "./agents/index.js";

new VoltAgent({
  agents: {
    commander,
    integrator,
    auditor,
    memoryAgent
  },
  server: honoServer(),
  logger,
});

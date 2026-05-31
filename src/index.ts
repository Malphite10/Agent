import { VoltAgent } from "@voltagent/core";
import { honoServer } from "@voltagent/server-hono";
import { logger } from "./config/logger";
import { commander, integrator, auditor, memoryAgent } from "./agents";

// Boot up the Production OS
new VoltAgent({
  agents: { commander, integrator, auditor, memoryAgent },
  server: honoServer(),
  logger,
});

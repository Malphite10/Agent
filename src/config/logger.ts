import { createPinoLogger } from "@voltagent/logger";

export const logger = createPinoLogger({
  name: "Production-OS",
  level: "info",
});

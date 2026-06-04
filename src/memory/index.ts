import { Memory } from "@voltagent/core";
import { LibSQLMemoryAdapter, LibSQLVectorAdapter } from "@voltagent/libsql";
import { config } from "../config/index.js";

export const memory = new Memory({
  storage: new LibSQLMemoryAdapter(),
  embedding: config.embeddingModel,
  vector: new LibSQLVectorAdapter(),
  generateTitle: true,
});

import { Memory } from "@voltagent/core";
import { LibSQLMemoryAdapter, LibSQLVectorAdapter } from "@voltagent/libsql";

// Layer 5 — Memory Architecture

// Working Memory: Active state (Current task)
export const workingMemory = new Memory({
  storage: new LibSQLMemoryAdapter(),
  embedding: "openai/text-embedding-3-small",
  vector: new LibSQLVectorAdapter(),
  generateTitle: true,
});

// Project Memory: Requirements, Decisions, Artifacts (Current project)
export const projectMemory = new Memory({
  storage: new LibSQLMemoryAdapter(),
  embedding: "openai/text-embedding-3-small",
  vector: new LibSQLVectorAdapter(),
  generateTitle: true,
});

// Organizational Memory: Standards, Patterns, Lessons (Cross-project)
export const organizationalMemory = new Memory({
  storage: new LibSQLMemoryAdapter(),
  embedding: "openai/text-embedding-3-small",
  vector: new LibSQLVectorAdapter(),
  generateTitle: true,
});

// Knowledge Memory: Documentation, Research, Facts (Reference material)
export const knowledgeMemory = new Memory({
  storage: new LibSQLMemoryAdapter(),
  embedding: "openai/text-embedding-3-small",
  vector: new LibSQLVectorAdapter(),
  generateTitle: true,
});

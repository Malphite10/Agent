# Agent 
<div align="center">
<a href="https://voltagent.dev/">
<img width="1800" alt="435380213-b6253409-8741-462b-a346-834cd18565a9" src="https://github.com/user-attachments/assets/452a03e7-eeda-4394-9ee7-0ffbcf37245c" />
</a>

<br/>
<br/>

<div align="center">
    <a href="https://voltagent.dev">Home Page</a> |
    <a href="https://voltagent.dev/docs/">Documentation</a> |
    <a href="https://github.com/voltagent/voltagent/tree/main/examples">Examples</a> |
    <a href="https://s.voltagent.dev/discord">Discord</a> |
    <a href="https://voltagent.dev/blog/">Blog</a>
</div>
</div>

<br/>

<div align="center">
    <strong>VoltAgent is an open source TypeScript framework for building and orchestrating AI agents.</strong><br>
Escape the limitations of no-code builders and the complexity of starting from scratch.
    <br />
    <br />
</div>

<div align="center">
    
[![npm version](https://img.shields.io/npm/v/@voltagent/core.svg)](https://www.npmjs.com/package/@voltagent/core)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](CODE_OF_CONDUCT.md)
[![Discord](https://img.shields.io/discord/1361559153780195478.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://s.voltagent.dev/discord)
[![Twitter Follow](https://img.shields.io/twitter/follow/voltagent_dev?style=social)](https://twitter.com/voltagent_dev)
    
</div>

<br/>

<div align="center">
<a href="https://voltagent.dev/">
<img width="896" alt="VoltAgent Schema" src="https://github.com/user-attachments/assets/f0627868-6153-4f63-ba7f-bdfcc5dd603d" />
</a>

</div>

## VoltAgent: Build AI Agents Fast and Flexibly

VoltAgent is an open-source TypeScript framework for creating and managing AI agents. It provides modular components to build, customize, and scale agents with ease. From connecting to APIs and memory management to supporting multiple LLMs, VoltAgent simplifies the process of creating sophisticated AI systems. It enables fast development, maintains clean code, and offers flexibility to switch between models and tools without vendor lock-in.

## Try Example

```bash
npm create voltagent-app@latest -- --example base
```
# Production Execution OS Implementation Summary

We have successfully transformed the initial "four-agent model" into a robust **Production Execution Operating System** using the VoltAgent framework. Here is a summary of the key architectural implementations and structural refactoring completed:

## 1. Architectural Implementation (The Production OS)
- **Layer 0 (Constitution):** Established the immutable rules (`Truth > Completion > Speed > Elegance`) and non-negotiables (no invented facts, no hidden assumptions, etc.) as the foundational prompt for all agents.
- **Layer 1 (Core Agents):** Implemented the 4 Core Agents: `Commander`, `Integrator`, `Auditor`, and `Memory`.
- **Layers 2, 3, & 4 (Internal Subsystems):** Embedded the specific engines into the agent instructions:
  - **Commander:** Intent Engine, Priority Engine, Risk Engine, Planning Engine (DAGs).
  - **Integrator:** Researcher, Builder, Connector, Packager.
  - **Auditor:** Validator, Critic, Security, Stress Tester.
- **Layer 5 (Memory Architecture):** Refactored the generic memory store into 4 distinct, purpose-driven `LibSQL` vector memory instances: `Working Memory`, `Project Memory`, `Organizational Memory`, and `Knowledge Memory`.
- **Layers 6, 7, 8, & 9 (Production Loops & Engines):** Integrated the Production Control Loop (`PLAN -> EXECUTE -> VERIFY -> REMEDIATE -> REVERIFY -> RELEASE`), Metrics Engine tracking, Failure Management (F1-F6 classifications), and Self-Improvement loops directly into the responsibilities of the respective agents.

## 2. CI/CD & Build Pipeline Fixes
- Addressed GitHub Actions CI failures caused by missing Webpack configurations.
- Installed `webpack`, `webpack-cli`, `ts-loader`, and `node-loader`.
- Configured `webpack.config.js` to correctly bundle the application for production, while ignoring native SQL bindings (`@libsql`) that shouldn't be bundled.

## 3. Structural Reorganization (Code Maintainability)
- Migrated from a single, flat `index.ts` file to a modular `src/` directory structure, optimizing the codebase for future agent additions and maintainability.
- **New Structure:**
  - `src/agents/`: Individual files for `commander.ts`, `integrator.ts`, `auditor.ts`, and `memoryAgent.ts`.
  - `src/memory/index.ts`: Centralized configuration for the 4 distinct memory architectures.
  - `src/prompts/constitution.ts`: Extracted the core system rules.
  - `src/config/logger.ts`: Centralized the Pino logger initialization.
  - `src/index.ts`: Clean, minimal entry point to boot the `VoltAgent` application.
- Updated `tsconfig.json` and `package.json` to reflect the new structure.

The system is now running cleanly, passing its build checks, and is architecturally aligned with the Production OS specifications.

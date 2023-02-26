import type { Config } from "@jest/types";
import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";
export default async (): Promise<Config.InitialOptions> => {
  return {
    preset: "ts-jest",
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
    displayName: {
      name: "flojoy unit-testing",
      color: "greenBright",
    },
    verbose: true,
    setupFiles: ["dotenv/config"],
    testMatch: ["**/**/*.test.{ts,tsx,js}"],
    testEnvironment: "jsdom",
    detectOpenHandles: true,
    collectCoverage: true,
    forceExit: true,
    clearMocks: true,
    coverageThreshold: {
      global: {
        lines: 0, // TODO: increamentially increase coverage threshold
      },
    },
    roots: ["<rootDir>"],
    modulePaths: ["."],
    moduleNameMapper: {
      "\\.(css|less)$": "<rootDir>/src/__tests__/config/CSSStub.js",
      ...pathsToModuleNameMapper(compilerOptions.paths),
    },
  };
};

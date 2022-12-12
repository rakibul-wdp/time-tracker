import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import svgrPlugin from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const envWithProcessPrefix = Object.entries(env).reduce((prev, [key, val]) => {
    return {
      ...prev,
      ["process.env." + key]: `"${val}"`,
    };
  }, {});

  return {
    define: envWithProcessPrefix,
    plugins: [
      // Added to .storybook/webpack.config.js as well
      // as a module `moduleName.default()`
      tsconfigPaths(),
      react({
        exclude: ["**/node_modules/**", "**/vite.config.ts"],
        include: [
          "./vite.config.ts",
          "my-api-node/**/*.tsx",
          "my-api-node/**/*.ts",
          "my-api-node/**/*.jsx",
          "my-api-node/**/*.js",
          "srmy-api-react/**/*.tsx",
          "my-api-reactrc/**/*.ts",
          "my-api-react/**/*.jsx",
          "my-api-reactrc/**/*.js",
          "my-api-react-auth/**/*.tsx",
          "my-api-react-auth/**/*.ts",
          "my-api-react-auth/**/*.jsx",
          "my-api-react-auth/**/*.js",
          "srmy-api-react-awaneek/**/*.tsx",
          "my-api-react-awaneekrc/**/*.ts",
          "my-api-react-awaneek/**/*.jsx",
          "my-api-react-awaneekrc/**/*.js",
          "my-api-react-public/**/*.tsx",
          "my-api-react-public/**/*.ts",
          "my-api-react-public/**/*.jsx",
          "my-api-react-public/**/*.js",
          "@/**/*.tsx",
          "@/**/*.ts",
          "@/**/*.jsx",
          "@/**/*.js",
          "src/**/*.tsx",
          "src/**/*.ts",
          "src/**/*.jsx",
          "src/**/*.js",
        ],
      }),
      svgrPlugin({
        svgrOptions: {
          icon: true,
        },
      }),
    ],
  };
});

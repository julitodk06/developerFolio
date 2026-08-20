import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  {ignores: ["build", "dist", "node_modules"]},
  js.configs.recommended,
  reactHooks.configs.flat.recommended,
  reactRefresh.configs.vite,
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {...globals.browser, ...globals.node},
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: {jsx: true},
        sourceType: "module"
      }
    }
  }
];

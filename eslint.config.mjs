import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // JS files with recommended JS rules
  { 
    files: ["**/*.{js,mjs,cjs,jsx}"], 
    plugins: { js }, 
    extends: ["js/recommended"],
    languageOptions: { 
      globals: { ...globals.browser, ...globals.node } 
    }
  },

  // CommonJS for .js files
  { 
    files: ["**/*.js"], 
    languageOptions: { sourceType: "commonjs" } 
  },

  // React plugin only for React JSX files
  {
    files: ["**/*.jsx", "**/*.tsx"],
    ...pluginReact.configs.flat.recommended,
    plugins: { react: pluginReact }
  },

  // JSON files
  { 
    files: ["**/*.json"], 
    plugins: { json }, 
    language: "json/json", 
    extends: ["json/recommended"] 
  },
  { 
    files: ["**/*.jsonc"], 
    plugins: { json }, 
    language: "json/jsonc", 
    extends: ["json/recommended"] 
  },
  { 
    files: ["**/*.json5"], 
    plugins: { json }, 
    language: "json/json5", 
    extends: ["json/recommended"] 
  },

  // Markdown files
  { 
    files: ["**/*.md"], 
    plugins: { markdown }, 
    language: "markdown/gfm", 
    extends: ["markdown/recommended"] 
  },

  // CSS files
  { 
    files: ["**/*.css"], 
    plugins: { css }, 
    language: "css/css", 
    extends: ["css/recommended"] 
  },
]);

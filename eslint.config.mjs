import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import globals from "globals";

export default tseslint.config(
  { ignores: ["dist/**", ".astro/**", "node_modules/**"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  {
    languageOptions: {
      globals: { ...globals.browser },
    },
    rules: {
      // Scripts do cliente são pequenos e isolados; o bundler do Astro é quem garante escopo.
      "no-console": "off",
    },
  },
);

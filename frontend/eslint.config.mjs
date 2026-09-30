import nextVitals from "eslint-config-next/core-web-vitals";

const config = [
  ...nextVitals,
  { ignores: [".next/**", "out/**", "build/**", "next-env.d.ts", "src/sway-api/**"] },
];

export default config;

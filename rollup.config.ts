import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";
import image from "@rollup/plugin-image";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

import dts from "rollup-plugin-dts";

import packageJson from "./package.json" assert { type: "json" };

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        interop: "auto",
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        interop: "auto",
      },
    ],
    plugins: [
      babel(),
      commonjs(),
      resolve(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      postcss({ extensions: [".css"], inject: true, extract: false }),
      terser(),
      image(),
      peerDepsExternal(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];

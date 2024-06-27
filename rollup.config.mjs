import * as fs from 'fs';
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";
import image from "@rollup/plugin-image";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { dts } from "rollup-plugin-dts";

const packageJson = JSON.parse(fs.readFileSync('./package.json'));

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        interop: "compat",
        exports: "named",
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        interop: "compat",
        exports: "named",
      },
    ],
    plugins: [
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
      }),  
      commonjs(),
      resolve(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      postcss({
        config: {
          ctx: null,
          path: "./postcss.config.ts",
        },
        extensions: [".css"],
        minimize: true,
        inject: {
          insertAt: "top",
        },
      }),
      terser(),
      image(),
      peerDepsExternal(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: `${packageJson.types}`, format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];

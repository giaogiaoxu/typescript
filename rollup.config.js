import ts from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import path, { format } from "path";
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url); //当前配置文件的绝对路径
const __dirname = path.dirname(__fileName); //当前配置文件所在目录的绝对路径（不包含文件名）
export default {
  input: "./src/index.ts",
  output: {
    file: path.resolve(__dirname, "dist/bundle.js"),
    format: "iife",
  },
  plugins: [
    nodeResolve({
      extensions: [".js", ".ts"],
    }),
    ts({
      tsconfig: path.resolve(__dirname, "tsconfig.json"),
    }),
  ],
};

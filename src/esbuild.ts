import type { ParserBuildOptions } from "peggy";
import loader from './peg-loader.js'
import { Plugin } from "esbuild";

export default function(opts : ParserBuildOptions = {}) : Plugin {
    return loader(opts)
}
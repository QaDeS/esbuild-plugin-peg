import type { ParserBuildOptions } from "peggy";
import loader from './peg-loader.js'
import { BunPlugin } from "bun";

function peg(opts : ParserBuildOptions = {}) : BunPlugin {
    return loader(opts)
}

export default peg
import type { PluginBuild } from "esbuild";
import type { ParserBuildOptions } from "peggy";

function plugin (opts : ParserBuildOptions = {}) : any {
    return {
        name: "Peggy",
        async setup (build : PluginBuild) {
            const peggy = await import("peggy");
            const { readFile } = await import("fs/promises");
            const { generate } = (peggy.default || peggy)

            build.onLoad({ filter: /\.(peggy|pegjs)$/ }, async ({ path }) => {
                const grammar = await readFile(path, 'utf8')
                const mode = (globalThis as any).Bun
                    ? 'parser'
                    : build.initialOptions.sourcemap
                    ? 'source-with-inline-map'
                    : 'source'
                const parser = generate(grammar, Object.assign({
                    grammarSource: path,
                    output: mode,
                    format: mode === 'parser' ? 'bare' : 'es'
                }, opts))

                let result = {}
                if( mode == 'parser' ) {
                    const {parse, SyntaxError} = parser
                    result = {
                        watchFiles: [path],
                        exports: {parse, SyntaxError},
                        loader: "object",
                    };
                } else {
                    //const contents = `const {parse, SyntaxError} = ${parser}; export {parse, SyntaxError};`;
                    result = {
                        watchFiles: [path],
                        contents: parser,
                        loader: "js",
                    };    
                }
                return result
            });
        },
    }
};

export default plugin;
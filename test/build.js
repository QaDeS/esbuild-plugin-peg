import * as esbuild from 'esbuild'
import peg from 'esbuild-plugin-peg'

await esbuild.build({
  entryPoints: ['import.test.ts'],
  bundle: true,
  outfile: 'test.js', 
  plugins: [peg()]
})
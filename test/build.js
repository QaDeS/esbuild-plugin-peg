import * as esbuild from 'esbuild'
import peg from 'peg-loader'

await esbuild.build({
  entryPoints: ['import.test.ts'],
  bundle: true,
  outfile: 'test.js', 
  plugins: [peg()]
})
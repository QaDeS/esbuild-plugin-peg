import { plugin } from 'bun'
import peg from 'esbuild-plugin-peg/bun'

await plugin(peg())

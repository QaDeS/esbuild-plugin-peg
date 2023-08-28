import { plugin } from 'bun'
import peg from 'peg-loader/bun'

await plugin(peg())

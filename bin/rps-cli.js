#! /usr/bin/env node

import { rps } from '../lib/rpsls.js'
import minimist from 'minimist'

const args = minimist(process.argv.slice(2))

// check for help flag
if (args.h || args.help) {
  console.log(`Usage: node-rps [SHOT]
  Play Rock Paper Scissors (RPS)
    -h, --help      display this help message and exit
    -r, --rules     display the rules and exit
  Examples:
    node-rps        Return JSON with single player RPS result.
                    e.g. {"player":"rock"}
    node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"scissors","result":"win"}`)
  
  process.exit(0)
}

// check for rules flag
if (args.r || args.rules) {
  console.log(`Rules for Rock Paper Scissors:

  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock CRUSHES Scissors`)

  process.exit(0)
}

if (args._[0]) { // array of unnnamed args
  try {
    console.log(JSON.stringify(rps(args._[0])))
  } catch (error) {
    // TODO should not repeat these long strings
    console.error(`Supplied argument ${args._[0]} is out of range.`)
    console.log(	
    `Usage: node-rps [SHOT]
    Play Rock Paper Scissors (RPS)
      -h, --help      display this help message and exit
      -r, --rules     display the rules and exit
    Examples:
      node-rps        Return JSON with single player RPS result.
                      e.g. {"player":"rock"}
      node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                      e.g {"player":"rock","opponent":"scissors","result":"win"}

    Rules for Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors`)

    process.exit(1)
  }
} else {
  console.log(JSON.stringify(rps()))
}

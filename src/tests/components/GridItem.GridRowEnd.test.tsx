// Libraries
import React from 'react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module
import GridItem from '../../components/GridItem'

describe('<GridItem /> - grid-row-end', () => {
  it('allows grid-row-end to be manually set as a number', async () => {
    const component = <GridItem rowEnd={10} />
    const snapshot = `
<div
  style="grid-row-end: 10;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows grid-row-end to be manually set as a string', async () => {
    const component = <GridItem rowEnd='six' />
    const snapshot = `
<div
  style="grid-row-end: six;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

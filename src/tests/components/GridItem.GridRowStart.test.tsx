// Libraries
import React from 'react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module
import GridItem from '../../components/GridItem'

describe('<GridItem /> - grid-row-start', () => {
  it('allows grid-row-start to be manually set as a number', async () => {
    const component = <GridItem rowStart={2} />
    const snapshot = `
<div
  style="grid-row-start: 2;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows grid-row-start to be manually set as a string', async () => {
    const component = <GridItem rowStart='five' />
    const snapshot = `
<div
  style="grid-row-start: five;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

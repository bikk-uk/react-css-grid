// Libraries
import React from 'react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module
import GridItem from '../../components/GridItem'

describe('<GridItem /> - grid-column-start', () => {
  it('allows grid-column-start to be manually set as a number', async () => {
    const component = <GridItem columnStart={2} />
    const snapshot = `
<div
  style="grid-column-start: 2;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows grid-column-start to be manually set as a string', async () => {
    const component = <GridItem columnStart='five' />
    const snapshot = `
<div
  style="grid-column-start: five;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

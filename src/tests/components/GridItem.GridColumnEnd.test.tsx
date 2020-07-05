// Libraries
import React from 'react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module
import GridItem from '../../components/GridItem'

describe('<GridItem /> - grid-column-end', () => {
  it('allows grid-column-end to be manually set as a number', async () => {
    const component = <GridItem columnEnd={10} />
    const snapshot = `
<div
  style="grid-column-end: 10;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows grid-column-end to be manually set as a string', async () => {
    const component = <GridItem columnEnd='six' />
    const snapshot = `
<div
  style="grid-column-end: six;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

// Libraries
import React from 'react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module
import GridItem from '../../components/GridItem'

describe('<GridItem /> - grid-row', () => {
  it('allows grid-row to be manually set as a number', async () => {
    const component = <GridItem row={5} />
    const snapshot = `
<div
  style="grid-row: 5;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows grid-row to be manually set as a string', async () => {
    const component = <GridItem row='seven' />
    const snapshot = `
<div
  style="grid-row: seven;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

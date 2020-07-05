// Libraries
import React from 'react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module
import GridItem from '../../components/GridItem'

describe('<GridItem /> - grid-column', () => {
  it('allows grid-column to be manually set as a number', async () => {
    const component = <GridItem column={5} />
    const snapshot = `
<div
  style="grid-column: 5;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows grid-column to be manually set as a string', async () => {
    const component = <GridItem column='seven' />
    const snapshot = `
<div
  style="grid-column: seven;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

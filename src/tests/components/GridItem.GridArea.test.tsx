// Libraries
import React from 'react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module
import GridItem from '../../components/GridItem'

describe('<GridItem /> - grid-area', () => {
  it('allows grid-area to be manually set as a number', async () => {
    const component = <GridItem area={6} />
    const snapshot = `
<div
  style="grid-area: 6;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows grid-area to be manually set as a string', async () => {
    const component = <GridItem area='header' />
    const snapshot = `
<div
  style="grid-area: header;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

// Libraries
import React from 'react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module
import GridContainer from '../../components/GridContainer'

describe('<GridContainer /> - grid-auto-columns', () => {
  it('allows grid-auto-columns to be manually set', async () => {
    const component = <GridContainer autoColumns='min-content' />
    const snapshot = `
<div
  style="display: grid; grid-auto-columns: min-content;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

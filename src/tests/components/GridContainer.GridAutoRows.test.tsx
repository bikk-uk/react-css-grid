// Libraries
import React from 'react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module
import GridContainer from '../../components/GridContainer'

describe('<GridContainer /> - grid-auto-rows', () => {
  it('allows grid-auto-rows to be manually set', async () => {
    const component = <GridContainer autoRows='min-content max-content auto' />
    const snapshot = `
<div
  style="display: grid; grid-auto-rows: min-content max-content auto;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

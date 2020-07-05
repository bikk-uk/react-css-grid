// Libraries
import React from 'react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module
import GridContainer from '../../components/GridContainer'

describe('<GridContainer /> - grid-template-rows', () => {
  it('allows grid-template-rows to be manually set', async () => {
    const component = <GridContainer rows='50px 70px' />
    const snapshot = `
<div
  style="display: grid; grid-template-rows: 50px 70px;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

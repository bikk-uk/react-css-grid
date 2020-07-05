// Libraries
import React from 'react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module
import GridContainer from '../../components/GridContainer'

describe('<GridContainer /> - row-gap', () => {
  it('allows row-gap to be manually set', async () => {
    const component = <GridContainer rowGap='15px' />
    const snapshot = `
<div
  style="display: grid; row-gap: 15px;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

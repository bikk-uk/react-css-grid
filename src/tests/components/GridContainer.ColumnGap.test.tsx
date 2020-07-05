// Libraries
import React from 'react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module
import GridContainer from '../../components/GridContainer'

describe('<GridContainer /> - column-gap', () => {
  it('allows column-gap to be manually set', async () => {
    const component = <GridContainer columnGap='3em' />
    const snapshot = `
<div
  style="display: grid; column-gap: 3em;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

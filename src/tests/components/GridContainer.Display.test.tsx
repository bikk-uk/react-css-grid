// Libraries
import React from 'react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module
import GridContainer from '../../components/GridContainer'

describe('<GridContainer /> - display', () => {
  it('renders an empty inline grid container', async () => {
    const component = <GridContainer inline />
    const snapshot = `
<div
  style="display: inline-grid;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

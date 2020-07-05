// Libraries
import React from 'react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module (export named as it would be)
import Grid from '../../components/GridWrapper'

describe('<GridWrapper />', () => {
  it('renders an empty grid container', async () => {
    const component = <Grid />
    const snapshot = `
<div
  style="display: grid;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

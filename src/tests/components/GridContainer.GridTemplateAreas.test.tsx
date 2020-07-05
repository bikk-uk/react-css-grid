// Libraries
import React from 'react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module
import GridContainer from '../../components/GridContainer'

describe('<GridContainer /> - grid-template-areas', () => {
  it('allows grid-template-areas to be manually set', async () => {
    const component = <GridContainer areas='header header' />
    const snapshot = `
<div
  style="display: grid; grid-template-areas: header header;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

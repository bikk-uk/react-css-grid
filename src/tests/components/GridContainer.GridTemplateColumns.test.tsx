// Libraries
import React from 'react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module
import GridContainer from '../../components/GridContainer'

describe('<GridContainer /> - grid-template-columns', () => {
  it('allows grid-template-columns to be manually set', async () => {
    const component = <GridContainer columns='10px 20px 30px' />
    const snapshot = `
<div
  style="display: grid; grid-template-columns: 10px 20px 30px;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

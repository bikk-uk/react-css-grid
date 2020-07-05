// Libraries
import React from 'react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module
import GridContainer from '../../components/GridContainer'

describe('<GridContainer /> - grid-gap (now gap)', () => {
  it('allows gap to be manually set', async () => {
    const component = <GridContainer gap='35%' />
    const snapshot = `
<div
  style="display: grid; gap: 35%;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows grid-gap to be manually set', async () => {
    const component = <GridContainer gridGap='10%' />
    const snapshot = `
<div
  style="display: grid; gap: 10%;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

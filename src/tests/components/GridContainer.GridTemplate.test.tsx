// Libraries
import React from 'react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module
import GridContainer from '../../components/GridContainer'

describe('<GridContainer /> - grid-template', () => {
  it('allows grid-template to be manually set', async () => {
    const component = <GridContainer template='auto 1fr / auto 1fr auto' />
    const snapshot = `
<div
  style="display: grid; grid-template: auto 1fr / auto 1fr auto;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

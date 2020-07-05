// Libraries
import React from 'react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module
import GridContainer from '../../components/GridContainer'

describe('<GridContainer /> - place-items', () => {
  it('allows place-items to be manually set', async () => {
    const component = <GridContainer placeItems='start end' />
    const snapshot = `
<div
  style="display: grid; place-items: start end;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

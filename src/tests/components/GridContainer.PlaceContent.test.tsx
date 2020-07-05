// Libraries
import React from 'react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module
import GridContainer from '../../components/GridContainer'

describe('<GridContainer /> - place-content', () => {
  it('allows place-content to be manually set', async () => {
    const component = <GridContainer placeContent='end space-evenly' />
    const snapshot = `
<div
  style="display: grid; place-content: end space-evenly;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

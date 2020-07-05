// Libraries
import React from 'react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module
import GridItem from '../../components/GridItem'

describe('<GridItem /> - place-self', () => {
  it('allows place-self to be manually set', async () => {
    const component = <GridItem placeSelf='center' />
    const snapshot = `
<div
  style="place-self: center;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

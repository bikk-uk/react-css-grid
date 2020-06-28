// Libraries
import React from 'react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module (export named as it would be)
import Grid from '../../components/GridWrapper'

describe('<FlexWrapper />', () => {
  it('renders an empty div', async () => {
    const component = <Grid />
    const snapshot = `<div />`
    matchesSnapshot(component, snapshot)
  })
})

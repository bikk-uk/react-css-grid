// Libraries
import React from 'react'
import { render } from '@testing-library/react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module
import GridContainer from '../../components/GridContainer'

jest.spyOn(global.console, 'warn').mockImplementation(() => undefined)

describe('<GridContainer /> - align-items', () => {
  it('allows align-items to be manually set', async () => {
    const component = <GridContainer alignItems='end' />
    const snapshot = `
<div
  style="display: grid; align-items: end;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows align-items start to be set', async () => {
    const component = <GridContainer alignItemsStart />
    const snapshot = `
<div
  style="display: grid; align-items: start;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows align-items end to be set', async () => {
    const component = <GridContainer alignItemsEnd />
    const snapshot = `
<div
  style="display: grid; align-items: end;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows align-items center to be set', async () => {
    const component = <GridContainer alignItemsCenter />
    const snapshot = `
<div
  style="display: grid; align-items: center;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows align-items stretch to be set', async () => {
    const component = <GridContainer alignItemsStretch />
    const snapshot = `
<div
  style="display: grid; align-items: stretch;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('warns if multiple short values have been provided for align-items - part 1', async () => {
    const component = <GridContainer alignItemsStart alignItemsEnd />

    render(component)

    const expectedMessage = '[@react-css/grid] Multiple values have been provided for align-items.'
    expect(global.console.warn).toHaveBeenCalledTimes(1)
    expect(global.console.warn).toHaveBeenCalledWith(expectedMessage)
  })

  it('warns if multiple short values have been provided for align-items - part 2', async () => {
    const component = <GridContainer alignItemsCenter alignItemsStretch />

    render(component)

    const expectedMessage = '[@react-css/grid] Multiple values have been provided for align-items.'
    expect(global.console.warn).toHaveBeenCalledTimes(1)
    expect(global.console.warn).toHaveBeenCalledWith(expectedMessage)
  })
})

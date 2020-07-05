// Libraries
import React from 'react'
import { render } from '@testing-library/react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module
import GridContainer from '../../components/GridContainer'

jest.spyOn(global.console, 'warn').mockImplementation(() => undefined)

describe('<GridContainer /> - justify-items', () => {
  it('allows justify-items to be manually set', async () => {
    const component = <GridContainer justifyItems='stretch' />
    const snapshot = `
<div
  style="display: grid; justify-items: stretch;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows justify-items start to be set', async () => {
    const component = <GridContainer justifyItemsStart />
    const snapshot = `
<div
  style="display: grid; justify-items: start;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows justify-items end to be set', async () => {
    const component = <GridContainer justifyItemsEnd />
    const snapshot = `
<div
  style="display: grid; justify-items: end;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows justify-items center to be set', async () => {
    const component = <GridContainer justifyItemsCenter />
    const snapshot = `
<div
  style="display: grid; justify-items: center;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows justify-items stretch to be set', async () => {
    const component = <GridContainer justifyItemsStretch />
    const snapshot = `
<div
  style="display: grid; justify-items: stretch;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('warns if multiple short values have been provided for justify-items - part 1', async () => {
    const component = <GridContainer justifyItemsStart justifyItemsEnd />

    render(component)

    const expectedMessage = '[@react-css/grid] Multiple values have been provided for justify-items.'
    expect(global.console.warn).toHaveBeenCalledTimes(1)
    expect(global.console.warn).toHaveBeenCalledWith(expectedMessage)
  })

  it('warns if multiple short values have been provided for justify-items - part 2', async () => {
    const component = <GridContainer justifyItemsCenter justifyItemsStretch />

    render(component)

    const expectedMessage = '[@react-css/grid] Multiple values have been provided for justify-items.'
    expect(global.console.warn).toHaveBeenCalledTimes(1)
    expect(global.console.warn).toHaveBeenCalledWith(expectedMessage)
  })
})

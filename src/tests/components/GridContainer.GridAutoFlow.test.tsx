// Libraries
import React from 'react'
import { render } from '@testing-library/react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module
import GridContainer from '../../components/GridContainer'

jest.spyOn(global.console, 'warn').mockImplementation(() => undefined)

describe('<GridContainer /> - grid-auto-flow', () => {
  it('allows grid-auto-flow to be manually set', async () => {
    const component = <GridContainer autoFlow='column' />
    const snapshot = `
<div
  style="display: grid; grid-auto-flow: column;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows grid-auto-flow row to be set', async () => {
    const component = <GridContainer autoFlowRow />
    const snapshot = `
<div
  style="display: grid; grid-auto-flow: row;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows grid-auto-flow column to be set', async () => {
    const component = <GridContainer autoFlowColumn />
    const snapshot = `
<div
  style="display: grid; grid-auto-flow: column;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows grid-auto-flow dense to be set', async () => {
    const component = <GridContainer autoFlowDense />
    const snapshot = `
<div
  style="display: grid; grid-auto-flow: dense;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('warns if multiple short values have been provided for grid-auto-flow - part 1', async () => {
    const component = <GridContainer autoFlowRow autoFlowColumn />

    render(component)

    const expectedMessage = '[@react-css/grid] Multiple values have been provided for grid-auto-flow.'
    expect(global.console.warn).toHaveBeenCalledTimes(1)
    expect(global.console.warn).toHaveBeenCalledWith(expectedMessage)
  })

  it('warns if multiple short values have been provided for grid-auto-flow - part 2', async () => {
    const component = <GridContainer autoFlowColumn autoFlowDense />

    render(component)

    const expectedMessage = '[@react-css/grid] Multiple values have been provided for grid-auto-flow.'
    expect(global.console.warn).toHaveBeenCalledTimes(1)
    expect(global.console.warn).toHaveBeenCalledWith(expectedMessage)
  })
})

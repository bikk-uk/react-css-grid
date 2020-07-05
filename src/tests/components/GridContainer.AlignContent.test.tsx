// Libraries
import React from 'react'
import { render } from '@testing-library/react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module
import GridContainer from '../../components/GridContainer'

jest.spyOn(global.console, 'warn').mockImplementation(() => undefined)

describe('<GridContainer /> - align-content', () => {
  it('allows align-content to be manually set', async () => {
    const component = <GridContainer alignContent='stretch' />
    const snapshot = `
<div
  style="display: grid; align-content: stretch;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows align-content start to be set', async () => {
    const component = <GridContainer alignContentStart />
    const snapshot = `
<div
  style="display: grid; align-content: start;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows align-content end to be set', async () => {
    const component = <GridContainer alignContentEnd />
    const snapshot = `
<div
  style="display: grid; align-content: end;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows align-content center to be set', async () => {
    const component = <GridContainer alignContentCenter />
    const snapshot = `
<div
  style="display: grid; align-content: center;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows align-content stretch to be set', async () => {
    const component = <GridContainer alignContentStretch />
    const snapshot = `
<div
  style="display: grid; align-content: stretch;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows align-content space-around to be set', async () => {
    const component = <GridContainer alignContentSpaceAround />
    const snapshot = `
<div
  style="display: grid; align-content: space-around;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows align-content space-between to be set', async () => {
    const component = <GridContainer alignContentSpaceBetween />
    const snapshot = `
<div
  style="display: grid; align-content: space-between;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows align-content space-evenly to be set', async () => {
    const component = <GridContainer alignContentSpaceEvenly />
    const snapshot = `
<div
  style="display: grid; align-content: space-evenly;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('warns if multiple short values have been provided for align-content - part 1', async () => {
    const component = <GridContainer alignContentStart alignContentEnd />

    render(component)

    const expectedMessage = '[@react-css/grid] Multiple values have been provided for align-content.'
    expect(global.console.warn).toHaveBeenCalledTimes(1)
    expect(global.console.warn).toHaveBeenCalledWith(expectedMessage)
  })

  it('warns if multiple short values have been provided for align-content - part 2', async () => {
    const component = <GridContainer alignContentCenter alignContentStretch />

    render(component)

    const expectedMessage = '[@react-css/grid] Multiple values have been provided for align-content.'
    expect(global.console.warn).toHaveBeenCalledTimes(1)
    expect(global.console.warn).toHaveBeenCalledWith(expectedMessage)
  })

  it('warns if multiple short values have been provided for align-content - part 3', async () => {
    const component = <GridContainer alignContentSpaceAround alignContentSpaceBetween />

    render(component)

    const expectedMessage = '[@react-css/grid] Multiple values have been provided for align-content.'
    expect(global.console.warn).toHaveBeenCalledTimes(1)
    expect(global.console.warn).toHaveBeenCalledWith(expectedMessage)
  })

  it('warns if multiple short values have been provided for align-content - part 4', async () => {
    const component = <GridContainer alignContentSpaceBetween alignContentSpaceEvenly />

    render(component)

    const expectedMessage = '[@react-css/grid] Multiple values have been provided for align-content.'
    expect(global.console.warn).toHaveBeenCalledTimes(1)
    expect(global.console.warn).toHaveBeenCalledWith(expectedMessage)
  })
})

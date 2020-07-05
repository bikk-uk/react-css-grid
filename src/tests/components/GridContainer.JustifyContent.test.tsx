// Libraries
import React from 'react'
import { render } from '@testing-library/react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module
import GridContainer from '../../components/GridContainer'

jest.spyOn(global.console, 'warn').mockImplementation(() => undefined)

describe('<GridContainer /> - justify-content', () => {
  it('allows justify-content to be manually set', async () => {
    const component = <GridContainer justifyContent='space-around' />
    const snapshot = `
<div
  style="display: grid; justify-content: space-around;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows justify-content start to be set', async () => {
    const component = <GridContainer justifyContentStart />
    const snapshot = `
<div
  style="display: grid; justify-content: start;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows justify-content end to be set', async () => {
    const component = <GridContainer justifyContentEnd />
    const snapshot = `
<div
  style="display: grid; justify-content: end;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows justify-content center to be set', async () => {
    const component = <GridContainer justifyContentCenter />
    const snapshot = `
<div
  style="display: grid; justify-content: center;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows justify-content stretch to be set', async () => {
    const component = <GridContainer justifyContentStretch />
    const snapshot = `
<div
  style="display: grid; justify-content: stretch;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows justify-content space-around to be set', async () => {
    const component = <GridContainer justifyContentSpaceAround />
    const snapshot = `
<div
  style="display: grid; justify-content: space-around;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows justify-content space-between to be set', async () => {
    const component = <GridContainer justifyContentSpaceBetween />
    const snapshot = `
<div
  style="display: grid; justify-content: space-between;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows justify-content space-evenly to be set', async () => {
    const component = <GridContainer justifyContentSpaceEvenly />
    const snapshot = `
<div
  style="display: grid; justify-content: space-evenly;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('warns if multiple short values have been provided for justify-content - part 1', async () => {
    const component = <GridContainer justifyContentStart justifyContentEnd />

    render(component)

    const expectedMessage = '[@react-css/grid] Multiple values have been provided for justify-content.'
    expect(global.console.warn).toHaveBeenCalledTimes(1)
    expect(global.console.warn).toHaveBeenCalledWith(expectedMessage)
  })

  it('warns if multiple short values have been provided for justify-content - part 2', async () => {
    const component = <GridContainer justifyContentCenter justifyContentStretch />

    render(component)

    const expectedMessage = '[@react-css/grid] Multiple values have been provided for justify-content.'
    expect(global.console.warn).toHaveBeenCalledTimes(1)
    expect(global.console.warn).toHaveBeenCalledWith(expectedMessage)
  })

  it('warns if multiple short values have been provided for justify-content - part 3', async () => {
    const component = <GridContainer justifyContentSpaceAround justifyContentSpaceBetween />

    render(component)

    const expectedMessage = '[@react-css/grid] Multiple values have been provided for justify-content.'
    expect(global.console.warn).toHaveBeenCalledTimes(1)
    expect(global.console.warn).toHaveBeenCalledWith(expectedMessage)
  })

  it('warns if multiple short values have been provided for justify-content - part 4', async () => {
    const component = <GridContainer justifyContentSpaceBetween justifyContentSpaceEvenly />

    render(component)

    const expectedMessage = '[@react-css/grid] Multiple values have been provided for justify-content.'
    expect(global.console.warn).toHaveBeenCalledTimes(1)
    expect(global.console.warn).toHaveBeenCalledWith(expectedMessage)
  })
})

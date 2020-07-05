// Libraries
import React from 'react'
import { render } from '@testing-library/react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module
import GridItem from '../../components/GridItem'

jest.spyOn(global.console, 'warn').mockImplementation(() => undefined)

describe('<GridItem /> - justify-self', () => {
  it('allows justify-self to be manually set', async () => {
    const component = <GridItem justifySelf='center' />
    const snapshot = `
<div
  style="justify-self: center;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows justify-self start to be set', async () => {
    const component = <GridItem justifySelfStart />
    const snapshot = `
<div
  style="justify-self: start;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows justify-self end to be set', async () => {
    const component = <GridItem justifySelfEnd />
    const snapshot = `
<div
  style="justify-self: end;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows justify-self center to be set', async () => {
    const component = <GridItem justifySelfCenter />
    const snapshot = `
<div
  style="justify-self: center;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows justify-self stretch to be set', async () => {
    const component = <GridItem justifySelfStretch />
    const snapshot = `
<div
  style="justify-self: stretch;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('warns if multiple short values have been provided for justify-self - part 1', async () => {
    const component = <GridItem justifySelfStart justifySelfEnd />

    render(component)

    const expectedMessage = '[@react-css/grid] Multiple values have been provided for justify-self.'
    expect(global.console.warn).toHaveBeenCalledTimes(1)
    expect(global.console.warn).toHaveBeenCalledWith(expectedMessage)
  })

  it('warns if multiple short values have been provided for justify-self - part 2', async () => {
    const component = <GridItem justifySelfCenter justifySelfStretch />

    render(component)

    const expectedMessage = '[@react-css/grid] Multiple values have been provided for justify-self.'
    expect(global.console.warn).toHaveBeenCalledTimes(1)
    expect(global.console.warn).toHaveBeenCalledWith(expectedMessage)
  })
})

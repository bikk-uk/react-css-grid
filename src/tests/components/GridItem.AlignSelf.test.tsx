// Libraries
import React from 'react'
import { render } from '@testing-library/react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module
import GridItem from '../../components/GridItem'

jest.spyOn(global.console, 'warn').mockImplementation(() => undefined)

describe('<GridItem /> - align-self', () => {
  it('allows align-self to be manually set', async () => {
    const component = <GridItem alignSelf='center' />
    const snapshot = `
<div
  style="align-self: center;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows align-self start to be set', async () => {
    const component = <GridItem alignSelfStart />
    const snapshot = `
<div
  style="align-self: start;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows align-self end to be set', async () => {
    const component = <GridItem alignSelfEnd />
    const snapshot = `
<div
  style="align-self: end;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows align-self center to be set', async () => {
    const component = <GridItem alignSelfCenter />
    const snapshot = `
<div
  style="align-self: center;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows align-self stretch to be set', async () => {
    const component = <GridItem alignSelfStretch />
    const snapshot = `
<div
  style="align-self: stretch;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('warns if multiple short values have been provided for align-self - part 1', async () => {
    const component = <GridItem alignSelfStart alignSelfEnd />

    render(component)

    const expectedMessage = '[@react-css/grid] Multiple values have been provided for align-self.'
    expect(global.console.warn).toHaveBeenCalledTimes(1)
    expect(global.console.warn).toHaveBeenCalledWith(expectedMessage)
  })

  it('warns if multiple short values have been provided for align-self - part 2', async () => {
    const component = <GridItem alignSelfCenter alignSelfStretch />

    render(component)

    const expectedMessage = '[@react-css/grid] Multiple values have been provided for align-self.'
    expect(global.console.warn).toHaveBeenCalledTimes(1)
    expect(global.console.warn).toHaveBeenCalledWith(expectedMessage)
  })
})

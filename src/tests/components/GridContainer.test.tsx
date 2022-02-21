// Libraries
import React from 'react'
import { render, fireEvent } from '@testing-library/react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module
import GridContainer from '../../components/GridContainer'

jest.spyOn(global.console, 'warn').mockImplementation(() => undefined)

describe('<GridContainer /> - General', () => {
  it('renders an empty grid container', async () => {
    const component = <GridContainer />
    const snapshot = `
<div
  style="display: grid;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('renders an empty grid container with tagName', async () => {
    const component = <GridContainer as='main' />
    const snapshot = `
<main
  style="display: grid;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('applies custom style to the div', async () => {
    const component = (
      <GridContainer
        style={{
          color: 'pink',
        }}
      />
    )
    const snapshot = `
<div
  style="display: grid; color: pink;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  test('custom styles can be an override to the props', async () => {
    const component = (
      <GridContainer
        style={{
          display: 'none',
        }}
      />
    )
    const snapshot = `
<div
  style="display: none;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('exposes existing div props', async () => {
    const component = <GridContainer id='123' />
    const snapshot = `
  <div
    id="123"
    style="display: grid;"
  />
  `
    matchesSnapshot(component, snapshot)
  })

  it('exposes existing div event handlers', async () => {
    const onClick = jest.fn()
    const component = <GridContainer data-testid='grid' onClick={onClick} />

    const { findByTestId } = render(component)

    fireEvent.click(await findByTestId('grid'))
    expect(onClick).toHaveBeenCalled()
  })
})

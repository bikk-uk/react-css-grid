// Libraries
import React from 'react'
import { render, fireEvent } from '@testing-library/react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module
import GridItem from '../../components/GridItem'

jest.spyOn(global.console, 'warn').mockImplementation(() => undefined)

describe('<GridItem /> - General', () => {
  it('renders an empty grid item', async () => {
    const component = <GridItem />
    const snapshot = `<div />`
    matchesSnapshot(component, snapshot)
  })

  it('renders an empty grid item with tagName', async () => {
    const component = <GridItem as='section' />
    const snapshot = `<section />`
    matchesSnapshot(component, snapshot)
  })

  it('applies custom style to the div', async () => {
    const component = (
      <GridItem
        style={{
          color: 'green',
        }}
      />
    )
    const snapshot = `
<div
  style="color: green;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('exposes existing div props', async () => {
    const component = <GridItem id='123' />
    const snapshot = `
<div
  id="123"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('exposes existing div event handlers', async () => {
    const onClick = jest.fn()
    const component = <GridItem data-testid='grid-item' onClick={onClick} />

    const { findByTestId } = render(component)

    fireEvent.click(await findByTestId('grid-item'))
    expect(onClick).toHaveBeenCalled()
  })
})

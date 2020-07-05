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

describe('<GridContainer /> - Inline', () => {
  it('renders an empty inline grid container', async () => {
    const component = <GridContainer inline />
    const snapshot = `
<div
  style="display: inline-grid;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

describe('<GridContainer /> - grid-template-columns', () => {
  it('allows grid-template-columns to be manually set', async () => {
    const component = <GridContainer columns='10px 20px 30px' />
    const snapshot = `
<div
  style="display: grid; grid-template-columns: 10px 20px 30px;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

describe('<GridContainer /> - grid-template-rows', () => {
  it('allows grid-template-rows to be manually set', async () => {
    const component = <GridContainer rows='50px 70px' />
    const snapshot = `
<div
  style="display: grid; grid-template-rows: 50px 70px;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

describe('<GridContainer /> - grid-template-areas', () => {
  it('allows grid-template-areas to be manually set', async () => {
    const component = <GridContainer areas='header header' />
    const snapshot = `
<div
  style="display: grid; grid-template-areas: header header;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

describe('<GridContainer /> - grid-template', () => {
  it('allows grid-template to be manually set', async () => {
    const component = <GridContainer template='auto 1fr / auto 1fr auto' />
    const snapshot = `
<div
  style="display: grid; grid-template: auto 1fr / auto 1fr auto;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

describe('<GridContainer /> - grid-gap (now gap)', () => {
  it('allows gap to be manually set', async () => {
    const component = <GridContainer gap='35%' />
    const snapshot = `
<div
  style="display: grid; gap: 35%;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('allows grid-gap to be manually set', async () => {
    const component = <GridContainer gridGap='10%' />
    const snapshot = `
<div
  style="display: grid; gap: 10%;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

describe('<GridContainer /> - column-gap', () => {
  it('allows column-gap to be manually set', async () => {
    const component = <GridContainer columnGap='3em' />
    const snapshot = `
<div
  style="display: grid; column-gap: 3em;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

describe('<GridContainer /> - row-gap', () => {
  it('allows row-gap to be manually set', async () => {
    const component = <GridContainer rowGap='15px' />
    const snapshot = `
<div
  style="display: grid; row-gap: 15px;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

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

// Libraries
import React from 'react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module (export named as it would be)
import Grid from '../../components/GridWrapper'

describe('<GridWrapper />', () => {
  it('renders an empty grid container', async () => {
    const component = <Grid />
    const snapshot = `
<div
  style="display: grid;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('renders a grid container with string content', async () => {
    const component = <Grid>Children</Grid>
    const snapshot = `
<div
  style="display: grid;"
>
  Children
</div>
`
    matchesSnapshot(component, snapshot)
  })

  it('renders a grid container with children', async () => {
    const component = (
      <Grid>
        <div>Children</div>
      </Grid>
    )
    const snapshot = `
<div
  style="display: grid;"
>
  <div>
    Children
  </div>
</div>
`
    matchesSnapshot(component, snapshot)
  })

  it('renders a grid container with a grid item', async () => {
    const component = (
      <Grid>
        <Grid.Item>Item 1</Grid.Item>
      </Grid>
    )
    const snapshot = `
<div
  style="display: grid;"
>
  <div>
    Item 1
  </div>
</div>
`
    matchesSnapshot(component, snapshot)
  })

  it('renders a grid container with a grid item, both support independent props', async () => {
    const component = (
      <Grid rows='10px' columns='10px'>
        <Grid.Item alignSelfCenter>Item 1</Grid.Item>
      </Grid>
    )
    const snapshot = `
<div
  style="display: grid; grid-template-columns: 10px; grid-template-rows: 10px;"
>
  <div
    style="align-self: center;"
  >
    Item 1
  </div>
</div>
`
    matchesSnapshot(component, snapshot)
  })

  it('renders a grid container with grid items, both support independent props', async () => {
    const component = (
      <Grid rows='4em' columns='2em 2em'>
        <Grid.Item alignSelfStretch>Item 1</Grid.Item>
        <Grid.Item column={1}>Item 2</Grid.Item>
      </Grid>
    )
    const snapshot = `
<div
  style="display: grid; grid-template-columns: 2em 2em; grid-template-rows: 4em;"
>
  <div
    style="align-self: stretch;"
  >
    Item 1
  </div>
  <div
    style="grid-column: 1;"
  >
    Item 2
  </div>
</div>
`
    matchesSnapshot(component, snapshot)
  })

  it('renders a grid container with grid items, rendered as different tag names', async () => {
    const component = (
      <Grid as='main' alignContentCenter justifyContentSpaceBetween>
        <Grid.Item as='section' alignSelfStretch>
          Item 1
        </Grid.Item>
        <Grid.Item as='section' alignSelfStretch>
          Item 2
        </Grid.Item>
      </Grid>
    )
    const snapshot = `
<main
  style="display: grid; justify-content: space-between; align-content: center;"
>
  <section
    style="align-self: stretch;"
  >
    Item 1
  </section>
  <section
    style="align-self: stretch;"
  >
    Item 2
  </section>
</main>
`
    matchesSnapshot(component, snapshot)
  })
})

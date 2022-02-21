// Libraries
import React from 'react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module
import GridContainer from '../../components/GridContainer'

describe('<GridContainer /> - as', () => {
  it('defaults to rendering as a <div/>', async () => {
    const component = <GridContainer />
    const snapshot = `
<div
  style="display: grid;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('renders explicitly as a <div/>', async () => {
    const component = <GridContainer as='div' />
    const snapshot = `
<div
  style="display: grid;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('renders as a <nav/>', async () => {
    const component = <GridContainer as='nav' />
    const snapshot = `
<nav
  style="display: grid;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('renders as a <main/>', async () => {
    const component = <GridContainer as='main' />
    const snapshot = `
<main
  style="display: grid;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('renders as an <aside/>', async () => {
    const component = <GridContainer as='aside' />
    const snapshot = `
<aside
  style="display: grid;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('renders as an <article/>', async () => {
    const component = <GridContainer as='article' />
    const snapshot = `
<article
  style="display: grid;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('renders as a <header/>', async () => {
    const component = <GridContainer as='header' />
    const snapshot = `
<header
  style="display: grid;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('renders as a <section/>', async () => {
    const component = <GridContainer as='section' />
    const snapshot = `
<section
  style="display: grid;"
/>
`
    matchesSnapshot(component, snapshot)
  })

  it('renders as a <footer/>', async () => {
    const component = <GridContainer as='footer' />
    const snapshot = `
<footer
  style="display: grid;"
/>
`
    matchesSnapshot(component, snapshot)
  })
})

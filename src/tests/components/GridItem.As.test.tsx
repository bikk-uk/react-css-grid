// Libraries
import React from 'react'

// Helpers
import { matchesSnapshot } from '../helpers/snapshots'

// Tested Module
import GridItem from '../../components/GridItem'

describe('<GridItem /> - as', () => {
  it('defaults to rendering as a <div/>', async () => {
    const component = <GridItem />
    const snapshot = `<div />`
    matchesSnapshot(component, snapshot)
  })

  it('renders explicitly as a <div/>', async () => {
    const component = <GridItem as='div' />
    const snapshot = `<div />`
    matchesSnapshot(component, snapshot)
  })

  it('renders as a <nav/>', async () => {
    const component = <GridItem as='nav' />
    const snapshot = `<nav />`
    matchesSnapshot(component, snapshot)
  })

  it('renders as a <main/>', async () => {
    const component = <GridItem as='main' />
    const snapshot = `<main />`
    matchesSnapshot(component, snapshot)
  })

  it('renders as an <aside/>', async () => {
    const component = <GridItem as='aside' />
    const snapshot = `<aside />`
    matchesSnapshot(component, snapshot)
  })

  it('renders as an <article/>', async () => {
    const component = <GridItem as='article' />
    const snapshot = `<article />`
    matchesSnapshot(component, snapshot)
  })

  it('renders as a <header/>', async () => {
    const component = <GridItem as='header' />
    const snapshot = `<header />`
    matchesSnapshot(component, snapshot)
  })

  it('renders as a <section/>', async () => {
    const component = <GridItem as='section' />
    const snapshot = `<section />`
    matchesSnapshot(component, snapshot)
  })

  it('renders as a <footer/>', async () => {
    const component = <GridItem as='footer' />
    const snapshot = `<footer />`
    matchesSnapshot(component, snapshot)
  })
})

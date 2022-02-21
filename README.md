# @react-css/grid

A thin wrapper to help make CSS Grid simpler and more expressive

[![Build and Test](https://github.com/bikk-uk/react-css-grid/actions/workflows/build-test.yml/badge.svg?branch=master)](https://github.com/bikk-uk/react-css-grid/actions/workflows/build-test.yml)
[![Coverage Status](https://coveralls.io/repos/github/bikk-uk/react-css-grid/badge.svg?branch=master)](https://coveralls.io/github/bikk-uk/react-css-grid?branch=master)
[![react-css-test](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/hksco8/main&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/hksco8/runs)
[![Known Vulnerabilities](https://snyk.io/test/github/bikk-uk/react-css-grid/badge.svg?targetFile=package.json)](https://snyk.io/test/github/bikk-uk/react-css-grid?targetFile=package.json)
![GitHub package.json version](https://img.shields.io/github/package-json/v/bikk-uk/react-css-grid?label=github)
![npm](https://img.shields.io/npm/v/@react-css/grid)
![NPM](https://img.shields.io/npm/l/@react-css/grid)

## Getting Started

Installation:

`yarn add @react-css/grid`

`npm install @react-css/grid`

Importing:

```typescript
import Grid from '@react-css/grid'
```

## Usage

All components are `<div />`s with the React typed props fully exposed. You can change what is rendered for both `<Grid />` and `<Grid.Item />` via the `as` prop:

```tsx
<Grid as='main'>
  <MyComponent />
</Grid>
```

### Grid

To get a basic CSS Grid:

```tsx
<Grid>
  <MyComponent />
</Grid>
```

#### Inline

For an inline CSS Grid:

```tsx
<Grid inline>
  <MyComponent />
</Grid>
```

#### Grid Template Rows

To modify `grid-template-rows`:

```tsx
<Grid rows='50px auto 25px'>
  <MyComponent />
</Grid>
```

#### Grid Template Columns

To modify `grid-template-columns`:

```tsx
<Grid columns='10px 20px 30px'>
  <MyComponent />
</Grid>
```

#### Gap (Grid Gap)

To modify `gap` (`grid-gap`):

```tsx
<Grid gap='1em'>
  <MyComponent />
</Grid>
```

#### Row Gap (Grid Row Gap)

To modify `row-gap` (`grid-row-gap`):

```tsx
<Grid rowGap='5px'>
  <MyComponent />
</Grid>
```

#### Column Gap (Grid Column Gap)

To modify `column-gap` (`grid-column-gap`):

```tsx
<Grid columnGap='10px'>
  <MyComponent />
</Grid>
```

#### Justify Items

To modify `justify-items`:

```tsx
<Grid justifyItems='end'>
  <MyComponent />
</Grid>
```

To simplify, you can use:

```tsx
<Grid justifyItemsStart></Grid> // justify-items: start;
<Grid justifyItemsEnd></Grid> // justify-items: end;
<Grid justifyItemsCenter></Grid> // justify-items: center;
<Grid justifyItemsStretch></Grid> // justify-items: stretch;
```

_These are first come first served, in this order. They cannot be used if you have already provided the `justifyItems` prop. Providing multiple will result in a console warning._

#### Align Items

To modify `align-items`:

```tsx
<Grid alignItems='stretch'>
  <MyComponent />
</Grid>
```

To simplify, you can use:

```tsx
<Grid alignItemsStart></Grid> // align-items: start;
<Grid alignItemsEnd></Grid> // align-items: end;
<Grid alignItemsCenter></Grid> // align-items: center;
<Grid alignItemsStretch></Grid> // align-items: stretch;
```

_These are first come first served, in this order. They cannot be used if you have already provided the `alignItems` prop. Providing multiple will result in a console warning._

#### Justify Content

To modify `justify-content`:

```tsx
<Grid justifyContent='start'>
  <MyComponent />
</Grid>
```

To simplify, you can use:

```tsx
<Grid justifyContentStart></Grid> // justify-content: start;
<Grid justifyContentEnd></Grid> // justify-content: end;
<Grid justifyContentCenter></Grid> // justify-content: center;
<Grid justifyContentStretch></Grid> // justify-content: stretch;
<Grid justifyContentSpaceAround></Grid> // justify-content: space-around;
<Grid justifyContentSpaceBetween></Grid> // justify-content: space-between;
<Grid justifyContentSpaceEvenly></Grid> // justify-content: space-evenly;
```

_These are first come first served, in this order. They cannot be used if you have already provided the `justifyContent` prop. Providing multiple will result in a console warning._

#### Align Content

To modify `align-content`:

```tsx
<Grid alignContent='space-around'>
  <MyComponent />
</Grid>
```

To simplify, you can use:

```tsx
<Grid alignContentStart></Grid> // align-content: start;
<Grid alignContentEnd></Grid> // align-content: end;
<Grid alignContentCenter></Grid> // align-content: center;
<Grid alignContentStretch></Grid> // align-content: stretch;
<Grid alignContentSpaceAround></Grid> // align-content: space-around;
<Grid alignContentSpaceBetween></Grid> // align-content: space-between;
<Grid alignContentSpaceEvenly></Grid> // align-content: space-evenly;
```

_These are first come first served, in this order. They cannot be used if you have already provided the `alignContent` prop. Providing multiple will result in a console warning._

#### Grid Auto Flow

To modify `grid-auto-flow`:

```tsx
<Grid autoFlow='column'>
  <MyComponent />
</Grid>
```

To simplify, you can use:

```tsx
<Grid autoFlowRow></Grid> // grid-auto-flow: row;
<Grid autoFlowColumn></Grid> // grid-auto-flow: column;
<Grid autoFlowDense></Grid> // grid-auto-flow: dense;
```

_These are first come first served, in this order. They cannot be used if you have already provided the `autoFlow` prop. Providing multiple will result in a console warning._

#### Grid Auto Rows

To modify `grid-auto-rows`:

```tsx
<Grid autoRows='50px'>
  <MyComponent />
</Grid>
```

#### Grid Auto Columns

To modify `grid-auto-columns`:

```tsx
<Grid autoColumns='min-content'>
  <MyComponent />
</Grid>
```

#### Grid Template (Shorthand)

To modify `grid-template`:

```tsx
<Grid template='initial'>
  <MyComponent />
</Grid>
```

#### Place Items (Shorthand)

To modify `place-items`:

```tsx
<Grid placeItems='start end'>
  <MyComponent />
</Grid>
```

#### Place Content (Shorthand)

To modify `place-content`:

```tsx
<Grid placeContent='end space-between'>
  <MyComponent />
</Grid>
```

### Grid Items

To help with structuring your components, a Grid Item is also available.

```tsx
<Grid rows='6em' columns='4em 2em'>
  <Grid.Item justifySelfStart>
    <MyFirstComponent />
  </Grid.Item>
  <Grid.Item justifySelfEnd>
    <MySecondComponent />
  </Grid.Item>
</Grid>
```

#### Grid Column Start | Grid Column End

To modify `grid-column-start` or `grid-column-end`:

```tsx
<Grid>
  <Grid.Item columnStart={2} columnEnd={5}>
    <MyComponent />
  </Grid.Item>
</Grid>
```

#### Grid Column (Shorthand)

To modify `grid-column`:

```tsx
<Grid>
  <Grid.Item column='2 / 5'>
    <MyComponent />
  </Grid.Item>
</Grid>
```

#### Grid Row Start | Grid Row End

To modify `grid-row-start` or `grid-row-end`:

```tsx
<Grid>
  <Grid.Item rowStart='span' rowEnd='row1-end'>
    <MyComponent />
  </Grid.Item>
</Grid>
```

#### Grid Row (Shorthand)

To modify `grid-row`:

```tsx
<Grid>
  <Grid.Item row='3 / 6'>
    <MyComponent />
  </Grid.Item>
</Grid>
```

#### Grid Area (Shorthand)

To modify `grid-area`:

```tsx
<Grid>
  <Grid.Item area='header'>
    <MyComponent />
  </Grid.Item>
</Grid>
```

#### Justify Self

To modify `justify-self`:

```tsx
<Grid>
  <Grid.Item justifySelf='center'>
    <MyComponent />
  </Grid.Item>
</Grid>
```

To simplify, you can use:

```tsx
<Grid.Item justifySelfStart></Grid.Item> // justify-self: start;
<Grid.Item justifySelfEnd></Grid.Item> // justify-self: end;
<Grid.Item justifySelfCenter></Grid.Item> // justify-self: center;
<Grid.Item justifySelfStretch></Grid.Item> // justify-self: stretch;
```

_These are first come first served, in this order. They cannot be used if you have already provided the `justifySelf` prop. Providing multiple will result in a console warning._

#### Align Self

To modify `align-self`:

```tsx
<Grid>
  <Grid.Item alignSelf='end'>
    <MyComponent />
  </Grid.Item>
</Grid>
```

To simplify, you can use:

```tsx
<Grid.Item alignSelfStart></Grid.Item> // align-self: start;
<Grid.Item alignSelfEnd></Grid.Item> // align-self: end;
<Grid.Item alignSelfCenter></Grid.Item> // align-self: center;
<Grid.Item alignSelfStretch></Grid.Item> // align-self: stretch;
```

_These are first come first served, in this order. They cannot be used if you have already provided the `alignSelf` prop. Providing multiple will result in a console warning._

#### Place Self (Shorthand)

To modify `place-self`:

```tsx
<Grid>
  <Grid.Item placeSelf='center'>
    <MyComponent />
  </Grid.Item>
</Grid>
```

## Notes

### Exposed Props

All the React `div` props and TypeScript definitions are exposed/passed through. This allows for an identical development experience whilst being able to ignore any Grid related CSS.

```tsx
<Grid rows='50px auto' columns='4em auto 10em' onMouseEnter={onMouseEnter}>
  <Grid.Item alignSelfCenter>
    <MyComponent />
  </Grid.Item>
  <Grid.Item placeSelf='end' onClick={handleItemClick}>
    <MyComponent />
  </Grid.Item>
</Grid>
```

### Style Override

CSS provided via `styles` will be applied last, this allows all generated CSS to be overridden.

```tsx
<Grid
  inline // this will get overridden
  style={{
    display: 'grid', // this will override everything else
  }}>
  <Grid.Item>
    <MyComponent />
  </Grid.Item>
</Grid>
```

### Rendering as different elements

If the `as` prop is not provided, it will default to a `<div />`. The supported `as` values are:

- `div`
- `nav`
- `main`
- `aside`
- `article`
- `header`
- `section`
- `footer`

### Limitations

Whilst the type definitions prevent you from using both the short and manual prop for each style, it is not feasible to expand this to stop you from being able to provide more than one of the short props for each style. These were implemented but due to the possible number of combinations, the developer experience was poor as VS Code tried to work out the Props via IntelliSense.

To help prevent accidentally doing this, a warning will log if you have provided multiple values that would overlap/contradict.

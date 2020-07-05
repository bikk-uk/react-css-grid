# @react-css/grid

A thin wrapper to help make CSS Grid simpler and more expressive

[![Build Status](https://travis-ci.org/bikk-uk/react-css-grid.svg?branch=master)](https://travis-ci.org/bikk-uk/react-css-grid)
[![Coverage Status](https://coveralls.io/repos/github/bikk-uk/react-css-grid/badge.svg?branch=master)](https://coveralls.io/github/bikk-uk/react-css-grid?branch=master)
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

All components are `<div />`s with the React typed props fully exposed. Each additional Grid related prop also uses `React.CSSProperties` types (provided by the underlying [csstype](https://www.npmjs.com/package/csstype) library).

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

## Notes

### Exposed Props

All the React `div` props and TypeScript definitions are exposed/passed through. This allows for an identical development experience whilst being able to ignore any Grid related CSS.

```tsx
<Grid column onMouseEnter={onMouseEnter}>
  <Grid.Item rows='50px auto 25px' columns='10px 20px 30px'>
    <MyComponent />
  </Grid.Item>
  <Grid.Item inline onClick={handleItemClick}>
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

### Limitations

Whilst the type definitions prevent you from using both the short and manual prop for each style, it is not feasible to expand this to stop you from being able to provide more than one of the short props for each style. These were implemented but due to the possible number of combinations, the developer experience was poor as VS Code tried to work out the Props via IntelliSense.

To help prevent accidentally doing this, a warning will log if you have provided multiple values that would overlap/contradict.

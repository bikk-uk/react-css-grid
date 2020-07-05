// Libraries
import React from 'react'

// Types
import type { GridItemProps } from '../index'

function GridItem({
  // required
  style = {},
  children,
  ...rest
}: GridItemProps): React.ReactElement {
  return (
    <div
      style={{
        ...style,
      }}
      {...rest}>
      {children}
    </div>
  )
}

export default GridItem

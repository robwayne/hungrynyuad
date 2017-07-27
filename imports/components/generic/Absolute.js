import React from 'react'

export default ({t, l, b, r, w, h, children}) => {
  const style = {
    position: 'absolute',
    ...t && {top: t},
    ...l && {left: l},
    ...b && {bottom: b},
    ...r && {right: r},
    ...w && {width: w},
    ...h && {height: h},
  }
  return (
    <div style={style}>
      {children}
    </div>
  )
}

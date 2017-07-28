import { StyleSheet } from 'aphrodite'

export const theme = {
  borderRadius: '5px',
  boxShadow: '0px 0px 45px rgba(0,0,0,0.5)',
  primaryFontFace: 'Futura',
  fontSizeSmall: '14px',
  fontSizeMedium: '20px',
  fontSizeLarge: '36px',
  lightTransparent: 'rgba(255,255,255,0.5)',
  mediumTransparent: 'rgba(255,255,255,0.25)',
  opacityTransition: 'opacity 0.2s ease-in-out',
}

export const pseudoShadow = {
  content: "''",
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: -1,
  width: '100%',
  height: '100%',
  borderRadius: theme.borderRadius,
  opacity: 0,
  transition: 'opacity 0.2s ease-in-out',
  boxShadow: theme.boxShadow,
  backfaceVisibility: 'hidden',
}
export const pseudoShadowOnHover = {
  opacity: 1,
}

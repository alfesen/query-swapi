import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { NavLink as Link } from 'react-router-dom'

const NavContainerStyles = css({
  backgroundColor: '#333',
  color: '#fff',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '2rem',
  fontSize: '2rem',
  '@media (max-width: 768px)': {
    alignItems: 'flex-start',
  },
})
const NavLinkContainerStyles = css({
  backgroundColor: 'inherit',
  display: 'flex',
  gap: '2rem',
  marginRight: '1rem',
  '@media (max-width: 768px)': {
    zIndex: '300',
    position: 'absolute',
    flexDirection: 'column',
    height: '100vh',
    width: '30rem',
    right: '0',
    margin: '0',
    alignItems: 'end',
    padding: '4rem',
  },
})
const NavLinkStyles = css({
  color: '#fff',
  textDecoration: 'none',
  '&.active': {
    textDecoration: 'underline',
  },
})

export const NavContainer = styled.nav(NavContainerStyles)
export const NavLinkContainer = styled.div(NavLinkContainerStyles)
export const NavLink = styled(Link)(NavLinkStyles)

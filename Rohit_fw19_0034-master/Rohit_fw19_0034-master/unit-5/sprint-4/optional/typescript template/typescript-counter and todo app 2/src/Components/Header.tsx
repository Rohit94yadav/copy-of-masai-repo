import React from 'react'

interface HeaderProps{
    textLabel?: string
    childeren ?: JSX.Element | JSX.Element[]
}
const Header = ({textLabel = "default props"}: HeaderProps) => {
  return (
    <h1>
      {textLabel}
    </h1>
  )
}

export default Header

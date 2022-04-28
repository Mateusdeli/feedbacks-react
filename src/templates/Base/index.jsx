import React from 'react'
import Header from '../../components/Header'
import useUserContext from '../../hooks/useUserContext'

export default function Base({ children }) {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>{children}</main>
    </div>
  )
}

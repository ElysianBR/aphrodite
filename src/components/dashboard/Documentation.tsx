"user client"

import Provider from '@/provider/provider'
import React from 'react'

export default function Documentation() {
  return (
    <iframe
      src={`${new Provider().getUri()}/swagger`}
      style={{
        width: '100%',
        height: '80vh',
        border: 'none',
      }}
    />
  )
}

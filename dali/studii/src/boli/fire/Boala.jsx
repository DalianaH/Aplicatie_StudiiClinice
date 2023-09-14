import React from 'react'
import { BoliIndiv } from './BoliIndiv'
export const Boala= ({boli}) => {
  return boli.map((boalaIndiv)=>(
      <BoliIndiv
          key={boalaIndiv.ID}
      boalaIndiv={boalaIndiv}
      />
  ))
}

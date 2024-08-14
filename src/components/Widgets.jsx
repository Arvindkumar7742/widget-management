import React from 'react'
import { Card } from './Card'
import { AddWidget } from './AddWidget'

export const Widgets = ({cat_id,widgets}) => {
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 p-2 gap-1'>
        {
            widgets.map((widget)=>(
                <Card key={widget.id} cat_id={cat_id} widget={widget}/>
            ))
        }
        <AddWidget cat_id={cat_id}/>
    </div>

  )
}

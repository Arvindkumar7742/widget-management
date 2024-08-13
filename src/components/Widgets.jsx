import React from 'react'
import { Card } from './Card'
import { AddWidget } from './AddWidget'

export const Widgets = ({cat_id,widgets}) => {
  return (
    <div>
        {
            widgets.map((widget)=>(
                <Card key={widget.id} cat_id={cat_id} widget={widget}/>
            ))
        }
        <AddWidget cat_id={cat_id}/>
    </div>
  )
}

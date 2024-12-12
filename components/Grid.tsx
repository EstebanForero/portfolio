
import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'

const gridItems = [
  { id: 0, title: "Title 1", description: "Description 1" }
] 

const Grid = () => {
  return (
    <section id='about'>
      <BentoGrid>
        {gridItems.map(item => (
          <BentoGridItem
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid

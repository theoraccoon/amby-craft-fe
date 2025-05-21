import { Box, Grid } from '@chakra-ui/react'
import React from 'react'
import { CardsIProps } from './types/types'
import clsx from 'clsx'
import { FlashCard } from './components/flash-card'

export const FlashCardGrid = ({cards}:CardsIProps)=> {
  return (
    <Grid className={clsx('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6')}>
      {cards.map((card, index)=>(<FlashCard key={index} front={card.front} back={card.back}/>))}
    </Grid>
  )
}


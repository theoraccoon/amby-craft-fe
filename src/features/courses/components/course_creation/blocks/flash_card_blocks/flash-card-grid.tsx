import React from 'react'

import { FlashCard } from './components/flash-card'
import { CardsIProps } from './types/types'
import { Box, Grid } from '@chakra-ui/react'
import clsx from 'clsx'

export const FlashCardGrid = ({ cards }: CardsIProps) => {
  return (
    <Grid gridColumn={{ base: '1', md: '2', lg: '3' }} gap={6}>
      {cards.map((card, index) => (
        <FlashCard key={index} front={card.front} back={card.back} />
      ))}
    </Grid>
  )
}

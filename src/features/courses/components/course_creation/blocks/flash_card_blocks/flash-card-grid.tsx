import { Box, Grid } from '@chakra-ui/react'
import React from 'react'
import { CardsIProps } from './types/types'
import clsx from 'clsx'

export const FlashCardGrid = ({cards}:CardsIProps)=> {
  return (
    <Grid className={clsx('grid grid-cols-2 gap-4')}>
      
    </Grid>
  )
}


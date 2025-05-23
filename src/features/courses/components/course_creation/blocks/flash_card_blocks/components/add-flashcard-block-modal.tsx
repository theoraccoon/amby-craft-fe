'use client'

import React, { useCallback, useEffect, useState } from 'react'


import { TextBlock } from '@/types'
import { FLASH_CARD_BLOCKS } from './flash-card-data'
import { Box } from '@chakra-ui/react'

function AddFlashCardBlockModal({
  type,
  onClose,
  onAddBlock,
  onTypeChange,
}: {
  type: TextBlock['type']
  onClose: () => void
  onAddBlock: (block: TextBlock) => void
  onTypeChange: (block: TextBlock) => void
}) {

  return (
    <Box>
      {/* Add flash card block component here */}
    </Box>
  )
}

export default AddFlashCardBlockModal

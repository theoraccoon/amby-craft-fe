import { useState } from 'react'

import { FlashCardIProps } from '../types/types'
import { Box } from '@chakra-ui/react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

export const FlashCard = ({ front, back, className }: FlashCardIProps) => {
  const [flipped, setFlipped] = useState(false)

  const handleFlipped = () => {
    setFlipped(!flipped)
  }

  return (
    <Box w={'64'} h={'40'} className={className} onClick={handleFlipped}>
      <motion.div
        className="relative w-full h-full transition duration-500 transform-style preserve-3d"
        animate={{ rotateY: flipped ? 180 : 0 }}
      >
        <div className="absolute w-full h-full backface-hidden">{front}</div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180">{back}</div>
      </motion.div>
    </Box>
  )
}

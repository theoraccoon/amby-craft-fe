import { ReactNode } from 'react'

import { Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'

type SearchInputFieldProps = {
  placeholder?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

const SearchInputField = ({
  placeholder = 'Search content',
  leftIcon,
  rightIcon,
}: SearchInputFieldProps) => {
  return (
    <InputGroup w="full" h="40px" borderRadius="60px" bg="#2C2C2C">
      {leftIcon && (
        <InputLeftElement pointerEvents="auto" height="full">
          {leftIcon}
        </InputLeftElement>
      )}
      <Input
        placeholder={placeholder}
        borderRadius="60px"
        h="40px"
        border="none"
        className="!text-[#FFFFFF80] !text-xs"
        bg="transparent"
        pl={leftIcon ? '40px' : '16px'}
        pr={rightIcon ? '40px' : '16px'}
        _placeholder={{ color: 'gray.500' }}
        _focus={{
          boxShadow: '0 0 0 1px #F8AF43',
        }}
      />
      {rightIcon && <InputRightElement height="full">{rightIcon}</InputRightElement>}
    </InputGroup>
  )
}

export default SearchInputField

import React from 'react'
import { ReactNode } from 'react'

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
} from '@chakra-ui/react'
import { FaRegEyeSlash } from 'react-icons/fa6'
import { IoEyeOutline } from 'react-icons/io5'

interface InputFieldProps extends InputProps {
  label?: string
  error?: string
  highlight?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  leftLabel?: string
  rightLabel?: string
  rightLabelClick?: () => void
}

const InputField = ({
  label,
  type,
  error,
  highlight,
  isDisabled,
  leftIcon,
  rightIcon,
  rightLabelClick,
  // leftLabel,
  rightLabel,
  ...rest
}: InputFieldProps) => {
  const highlightStyles = highlight
    ? {
        borderColor: 'orange.400',
        boxShadow: '0 0 0 1px orange',
      }
    : {}

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <FormControl isInvalid={!!error} isDisabled={isDisabled}>
      {(label || rightLabel) && (
        <div className="flex justify-between text-white text-xs mt-1 ">
          <FormLabel
            color="white"
            fontSize={['12px', '15px']}
            fontFamily={"'Open Sans', sans-serif"}
          >
            {label}
          </FormLabel>
          {rightLabel && (
            <FormLabel
              onClick={rightLabelClick}
              className="cursor-pointer font-semibold"
              color="#f8af43"
              fontSize={['12px', '15px']}
              fontWeight={600}
              fontFamily={"'Open Sans', sans-serif"}
            >
              {rightLabel}
            </FormLabel>
          )}
        </div>
      )}
      <InputGroup>
        {leftIcon && <InputLeftElement pointerEvents="none">{leftIcon}</InputLeftElement>}

        {rightIcon && (
          <InputRightElement pointerEvents="none" marginTop={2}>
            {rightIcon}
          </InputRightElement>
        )}

        <Input
          type={type === 'password' && show ? 'text' : type}
          {...rest}
          {...highlightStyles}
          isDisabled={isDisabled}
          borderColor={error ? 'red.500' : 'white'}
          _focus={{ borderColor: '#F8AF43', boxShadow: 'sm' }}
          width="full"
          height={['40px', '45px', '50px']}
          fontSize={['sm', 'md', 'lg']}
          backgroundColor="#333333"
          color="white"
          borderRadius={'10px'}
        />

        {type === 'password' && (
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="md" onClick={handleClick} className="!bg-transparent" top={2}>
              {show ? (
                <IoEyeOutline color="white" width={20} height={20} />
              ) : (
                <FaRegEyeSlash color="white" width={20} height={20} />
              )}
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  )
}

export default InputField

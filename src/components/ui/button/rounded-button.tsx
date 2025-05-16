import { Button, ButtonProps } from '@chakra-ui/react'
import { ReactNode, ReactElement } from 'react'

const buttonVariants = {
  primary: {
    bg: '#F8AF43',
    color: '#000000',
    _hover: { bg: '#F5A500' },
  },
  secondary: {
    bg: '#FFFFFF',
    color: '#181818',
    _hover: { bg: '#181818', color: 'white', borderColor: '#F5A500' },
  },
  outline: {
    bg: 'transparent',
    color: '#F8AF43',
    border: '2px solid #F8AF43',
    _hover: { bg: '#F5A500', color: 'white', borderColor: '#F5A500' },
  },
  tertiary: {
    bg: '#000000',
    color: '',
    border: '2px solid #FFFFFF',
    _hover: { bg: '#F5A500', color: 'white', borderColor: '#F5A500' },
  },
  danger: {
    bg: 'red.500',
    color: 'white',
    _hover: { bg: 'red.600' },
  },
}

interface RoundedButtonProps extends ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'tertiary' | 'danger'
  leftIcon?: ReactElement
  rightIcon?: ReactElement
}

const RoundedButton = ({
  children,
  variant = 'primary',
  leftIcon,
  rightIcon,
  ...rest
}: RoundedButtonProps) => {
  const variantStyles = buttonVariants[variant] || buttonVariants.primary

  return (
    <Button
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="fit-content"
      height={['40px']}
      fontSize={['xs']}
      bg={variantStyles.bg}
      color={variantStyles.color}
      _hover={variantStyles._hover}
      borderRadius="30px"
      size="md"
      className="shadow-md"
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default RoundedButton

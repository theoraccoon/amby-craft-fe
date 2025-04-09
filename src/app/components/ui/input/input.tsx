import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    InputProps,
  } from "@chakra-ui/react";
  
  interface InputFieldProps extends InputProps {
    label?: string;
    error?: string;
    highlight?: boolean;
  }
  
  const InputField = ({
    label,
    error,
    highlight,
    isDisabled,
    ...rest
  }: InputFieldProps) => {
    const highlightStyles = highlight
      ? {
          borderColor: "orange.400",
          boxShadow: "0 0 0 1px orange",
        }
      : {};
  
    return (
      <FormControl isInvalid={!!error} isDisabled={isDisabled}>
        {label && <FormLabel>{label}</FormLabel>}
        <Input
          {...rest}
          {...highlightStyles}
          isDisabled={isDisabled}
          borderColor={error ? "red.500" : "gray.300"}
          _focus={{ borderColor: "blue.500", boxShadow: "sm" }}
          height="40px"
          width="300px"
        />
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
      </FormControl>
    );
  };
  
  export default InputField;
  
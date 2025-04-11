import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  InputProps,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface InputFieldProps extends InputProps {
  label?: string;
  error?: string;
  highlight?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  leftLabel?: string;
  rightLabel?: string;
}

const InputField = ({
  label,
  error,
  highlight,
  isDisabled,
  leftIcon,
  rightIcon,
  leftLabel,
  rightLabel,
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
      {(label || rightLabel) &&<div className="flex justify-between text-white text-xs mt-1">
        <FormLabel color="white" fontSize={["sm", "md", "lg"]}>{label}</FormLabel>
          <FormLabel color="#f8af43" fontSize={["sm", "md", "lg"]} >{rightLabel}</FormLabel>
        </div>}
      <InputGroup>
        {leftIcon && (
          <InputLeftElement pointerEvents="none" >
            {leftIcon}
          </InputLeftElement>
        )}

        {rightIcon && (
          <InputRightElement pointerEvents="none" marginTop={2}>
            {rightIcon}
          </InputRightElement>
        )}

        <Input
          {...rest}
          {...highlightStyles}
          isDisabled={isDisabled}
          borderColor={error ? "red.500" : "white"}
          _focus={{ borderColor: "#F8AF43", boxShadow: "sm" }}
          width="full"
          height={["40px", "45px", "50px"]}
          fontSize={["sm", "md", "lg"]}
          backgroundColor="#333333"
          color="white"
          // pl={leftIcon ? "2.5rem" : undefined}
          // pr={rightIcon ? "2.5rem" : undefined}
        />
      </InputGroup>


     
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export default InputField;

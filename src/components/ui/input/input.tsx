import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  InputProps,
  InputGroup,
  InputLeftElement,
  InputRightElement,
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
  rightLabelClick?: () => void;
}


const InputField = ({
  label,
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
        borderColor: "orange.400",
        boxShadow: "0 0 0 1px orange",
      }
    : {}; 

  return (
    <FormControl isInvalid={!!error} isDisabled={isDisabled}>
    {(label || rightLabel) && (
  <div className="flex justify-between text-white text-xs mt-1 ">
    <FormLabel color="white" fontSize={["12px","15px"]}  fontFamily={"'Open Sans', sans-serif"} >
      {label}
    </FormLabel>
    {rightLabel && (
      <FormLabel
        onClick={rightLabelClick}
        className="cursor-pointer font-semibold"
        color="#f8af43"
        fontSize={["12px","15px"]}
        fontWeight={600}
        fontFamily={"'Open Sans', sans-serif"}
      >
        {rightLabel}
      </FormLabel>
    )}
  </div>
)}
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
          borderRadius={"10px"}
        />
      </InputGroup> 
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export default InputField;

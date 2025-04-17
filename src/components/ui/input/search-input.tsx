import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi"; 

const SearchInputField = () => {
  return (
    <InputGroup
      w="280px"
      h="40px"
      borderRadius="60px"
      bg="#2C2C2C"
    >
      <InputLeftElement
        pointerEvents="none"
        height="full"
        children={<BiSearch color="#A0AEC0" size="20px" />}
      />
      <Input
        placeholder="Search..."
        borderRadius="60px"
        h="40px"
        border="none"
        color="white"
        bg="transparent"
        _placeholder={{ color: "gray.500" }}
        _focus={{
          boxShadow: "0 0 0 1px #F8AF43",
        }}
      />
    </InputGroup>
  );
};

export default SearchInputField;

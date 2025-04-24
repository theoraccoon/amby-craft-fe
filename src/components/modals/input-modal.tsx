import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import React from "react";

interface TextInputModalProps {
  isOpen: boolean;
  onClose: () => void;
  value: string;
  onChange: (value: string) => void;
  onDone: () => void;
  title?: string;
  label?: string;
  placeholder?: string;
  confirmText?: string;
  cancelText?: string;
}

const TextInputModal: React.FC<TextInputModalProps> = ({
  isOpen,
  onClose,
  value,
  onChange,
  onDone,
  title = "",
  label = "",
  placeholder = "Type here...",
  confirmText = "Done",
  cancelText = "Cancel",
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        bg="#181818"
        color="white"
        fontFamily="'Comfortaa', sans-serif"
        px="10px"
        py="8px"
        borderRadius="15px"
      >
        <ModalHeader fontSize="24px" fontWeight="bold">
          {title}
        </ModalHeader>
        <ModalBody pb={4}>
          <FormControl>
            <FormLabel>{label}</FormLabel>
            <Input
              _placeholder={{
                color: "#A0AEC0",
                fontsize: "14px",
              }}
              placeholder={placeholder}
              value={value}
              onChange={(e) => onChange(e.target.value)}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            onClick={onClose}
            mr={3}
            color="white"
            bg="transparent"
            _hover={{ bg: "#2D2D2D" }}
            _active={{ bg: "#444444" }}
            fontSize="14px"
            fontFamily="Open sans"
            fontWeight="600"
            px="38px"
            py="10px"
          >
            {cancelText}
          </Button>
          <Button
            backgroundColor="#F8AF43"
            color="#333333"
            onClick={onDone}
            fontFamily="Open sans"
            fontSize="14px"
            fontWeight="600"
            px="38px"
            py="10px"
          >
            {confirmText}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TextInputModal;

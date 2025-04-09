import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

// Define possible variants for buttons
const buttonVariants = {
    primary: {
        bg: "#F8AF43", 
        color: "white",
        _hover: { bg: "#F5A500" },
    },
    secondary: {
        bg: "gray.500",
        color: "white",
        _hover: { bg: "gray.600" },
    },
    outline: {
        bg: "transparent",
        color: "#F8AF43", 
        border: "2px solid #F8AF43",
        _hover: { bg: "#F5A500", color: "white", borderColor: "#F5A500" },
    },
    tertiary:{
        bg: "#333333",
        color: "#FFFFFF",
        border: "2px solid #FFFFFF",
        _hover: { bg: "#F5A500", color: "white", borderColor: "#F5A500" },
      
    },
    danger: {
        bg: "red.500",
        color: "white",
        _hover: { bg: "red.600" },
    },
};

interface CustomButtonProps extends ButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline" | "tertiary"| "danger"; 
}

const CustomButton = ({ children, variant = "primary", ...rest }: CustomButtonProps) => {
    const variantStyles = buttonVariants[variant] || buttonVariants.primary;

    return (
        <Button
            width="225px"
            height="40px"
            _hover={variantStyles._hover}
            bg={variantStyles.bg}
            color={variantStyles.color}
            borderRadius="10px"
            size="md"
            className="shadow-md"
            {...rest}
        >
            {children}
        </Button>
    );
};

export default CustomButton;

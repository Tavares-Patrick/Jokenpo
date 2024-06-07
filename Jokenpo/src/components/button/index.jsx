import { StyledButton } from "./style"

//import ( StyledInput)

export const Button = ({ children, onClick }) => {
    return <StyledButton onClick={onClick}>{children}</StyledButton>
};
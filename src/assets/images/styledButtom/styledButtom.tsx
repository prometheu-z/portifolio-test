import styled from "@emotion/styled"
import theme from "../../../theme"
import type { ReactNode } from "react"


interface StyledButtomProos{
    children: ReactNode
}

const StyledButtom: React.FC<StyledButtomProos> = ({children}) => {



    const StyledButtom = styled("button")(() => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap:"10px",
        '&:hover':{
            backgroundColor: theme.palette.secondary.main
        }

        
    }))


  return (
    <>
        <StyledButtom>
            {children}
        </StyledButtom>
    </>
  )
}

export default StyledButtom

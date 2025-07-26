import styled from "@emotion/styled"
import Avatar from "../../../../assets/images/avatar.png"
import { Button, Container, Grid, Typography } from "@mui/material"
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import EmailIcon from '@mui/icons-material/Email';
import StyledButtom from "../../../../assets/images/styledButtom/styledButtom";
import theme from "../../../../theme";

const Hero = () => {


    const StyleHero = styled("div")(() => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",

    }))


    const StyleImg = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%",

    }))

  return (
    <>
        <StyleHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid size={{xs: 12, md:4}}>
                        <StyleImg src={Avatar}/>
                    </Grid>
                    <Grid size={{xs:12, md:8}}>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center">Gabriel Sampaio</Typography>
                        <Typography color="primary.contrastText" variant="h2" textAlign="center">Gabriel Sampaio</Typography>
                        
                        <Grid container display={"flex"} justifyContent={"center"}>
                            <Grid size={{xs:12, md:4}} display={"flex"} justifyContent={"center"}>
                                <Button color="secondary" >
                                    <ArrowCircleDownIcon/>
                                    Donload CV
                                </Button>
                                <StyledButtom>

                                </StyledButtom>
                            </Grid>
                            <Grid size={{xs:12,md:4}} display={"flex"} justifyContent={"center"}>
                                <Button>
                                    <EmailIcon/>
                                    contact me
                                </Button>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Container>
        </StyleHero>
    </>
  )
}


export default Hero

import styled from "@emotion/styled"
import Avatar from "../../../../assets/images/avatar.png"
import { Button, Container, Grid, Typography } from "@mui/material"
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {


    const StyleHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.contrastText,
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
                        <Typography color="primary" variant="h2" textAlign="center">Gabriel Sampaio</Typography>
                        
                        <Grid container display={"flex"} justifyContent={"center"}>
                            <Grid size={{xs:12, md:4}} display={"flex"} justifyContent={"center"}>
                                <Button>
                                    <ArrowCircleDownIcon/>
                                    Donload CV
                                </Button>
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

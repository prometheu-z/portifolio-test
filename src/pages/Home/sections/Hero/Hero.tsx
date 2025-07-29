import styled from "@emotion/styled"
import Avatar from "../../../../assets/images/avatar.png"
import { Box, Container, Grid, Typography } from "@mui/material"
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import EmailIcon from '@mui/icons-material/Email';
import StyledButtom from "../../../../assets/images/styledButtom/styledButtom";
import theme from "../../../../theme";
import { AnimatedBackground } from "../../../../components/AnimatedBackgroud";

const Hero = () => {


    const StyleHero = styled("div")(() => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        padding: "200px 0 0 0",

    }))


    const StyleImg = styled("img")(() => ({
        width: "80%",
        borderRadius: "50%",
        border: `1px solid  ${theme.palette.primary.contrastText}`,

    }))

  return (
    <>
        <StyleHero>
            <Container maxWidth="lg">
                <Grid  container spacing={2}>
                    <Grid size={{xs: 12, md:5}}>
                        <Box position={"relative"}>

                        
                            <Box position="absolute"  width={"120%"} top={-100} right={0}>
                                <AnimatedBackground/>
                            </Box>
                            <Box position={"relative"} textAlign={"center"}>
                                <StyleImg src={Avatar}/>
                            </Box>
                        </Box>
                        
                    </Grid>
                    <Grid size={{xs:12, md:7}}>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center" paddingBottom={2}>Gabriel Sampaio</Typography>
                        <Typography color="primary.contrastText" variant="h2" textAlign="center" >Gabriel Sampaio</Typography>
                        
                        <Grid container display={"flex"} justifyContent={"center"} spacing={3} pt={3}>
                            <Grid size={{xs:12, md:4}} display={"flex"} justifyContent={"center"}>
                                
                                <StyledButtom>
                                    <ArrowCircleDownIcon/>
                                    <Typography>
                                        Download CV
                                    </Typography>
                                </StyledButtom>
                            </Grid>
                            <Grid size={{xs:12,md:4}} display={"flex"} justifyContent={"center"}>
                                <StyledButtom>
                                    <EmailIcon/>
                                    <Typography>
                                        contact me
                                    </Typography>
                                </StyledButtom>
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

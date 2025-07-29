import styled from "@emotion/styled"
import { AppBar, MenuItem, Toolbar } from "@mui/material"

const NavBar = () => {

    const Styledtoobar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-between",

    }))

  return (
    <>
      <AppBar position="absolute">
        <Styledtoobar>
            <MenuItem>About</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>About</MenuItem>
        </Styledtoobar>
      </AppBar>
    </>
  )
}

export default NavBar

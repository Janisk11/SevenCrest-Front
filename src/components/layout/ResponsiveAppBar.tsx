import * as React from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  Avatar,
  MenuItem,
  Container,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import logo from '../../static/images/sclogo.png'

// ✅ Define top-level pages
const pages = [
  { name: 'Home', whereto: '/' },
  {
    name: 'Shop',
    submenu: [
      { name: 'Gents', whereto: '/gents' },
      { name: 'Ladies', whereto: '/ladies' },
      { name: 'Kids', whereto: '/kids' },
    ],
  },
  { name: 'About', whereto: '/about' },
  { name: 'Contact', whereto: '/contact' },
]

const ResponsiveAppBar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElShop, setAnchorElShop] = React.useState<null | HTMLElement>(
    null
  )

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleOpenShopMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElShop(event.currentTarget)
  }
  const handleCloseShopMenu = () => {
    setAnchorElShop(null)
  }

  return (
    <AppBar position="sticky" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Desktop logo */}
          <Avatar
            alt="logo"
            src={logo}
            sx={{
              width: 60,
              height: 60,
              display: { xs: 'none', md: 'flex' },
              mr: 1,
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            SEVEN CREST
          </Typography>

          {/* Mobile menu button */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) =>
                page.submenu ? (
                  <Box key={page.name}>
                    <MenuItem disabled>{page.name}</MenuItem>
                    {page.submenu.map((sub) => (
                      <MenuItem
                        key={sub.name}
                        component={Link}
                        to={sub.whereto}
                        onClick={handleCloseNavMenu}
                        sx={{ pl: 4 }}
                      >
                        {sub.name}
                      </MenuItem>
                    ))}
                  </Box>
                ) : (
                  <MenuItem
                    key={page.name}
                    component={Link}
                    to={page.whereto!}
                    onClick={handleCloseNavMenu}
                  >
                    {page.name}
                  </MenuItem>
                )
              )}
            </Menu>
          </Box>

          {/* Mobile logo */}
          <Avatar
            alt="logo"
            src={logo}
            sx={{
              width: 40,
              height: 40,
              display: { xs: 'flex', md: 'none' },
              mr: 1,
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SEVEN CREST
          </Typography>

          {/* Desktop navigation */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              mx: 6,
            }}
          >
            {pages.map((page) =>
              page.submenu ? (
                <Box key={page.name}>
                  <Button
                    onClick={handleOpenShopMenu}
                    sx={{ my: 2, color: 'white', fontWeight: 600 }}
                  >
                    {page.name}
                  </Button>
                  <Menu
                    anchorEl={anchorElShop}
                    open={Boolean(anchorElShop)}
                    onClose={handleCloseShopMenu}
                  >
                    {page.submenu.map((sub) => (
                      <MenuItem
                        key={sub.name}
                        component={Link}
                        to={sub.whereto}
                        onClick={handleCloseShopMenu}
                      >
                        {sub.name}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) : (
                <Button
                  component={Link}
                  to={page.whereto!}
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', fontWeight: 600 }}
                >
                  {page.name}
                </Button>
              )
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default ResponsiveAppBar

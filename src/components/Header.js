import * as React from "react"; 
import { useState } from "react";

import AppBar from "@mui/material/AppBar"; 
import Toolbar from "@mui/material/Toolbar"; 
import Typography from "@mui/material/Typography"; 
import IconButton from "@mui/material/IconButton"; 
import MenuIcon from "@mui/icons-material/Menu"; 
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const theme = createTheme({
	palette: {
		primary: {
			main: '#808080',
		},
	},
});

export default function Header() { 
	const [menuOpen, setMenuOpen] = useState(null);

	const handleMenuOpen = (event) => {
		setMenuOpen(event.currentTarget);
	};

	const handleMenuClose = () => {
		setMenuOpen(null);
	};

	return ( 
		<ThemeProvider theme={theme}>
			<AppBar position="static"> 
				<Toolbar> 
				<IconButton 
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{ mr: 2 }} 
					onClick={handleMenuOpen}
				> 
					<MenuIcon /> 
				</IconButton> 
				<Menu
					anchorEl={menuOpen}
					open={Boolean(menuOpen)}
					onClose={handleMenuClose}
				>
					<MenuItem component={Link} to="/" onClick={handleMenuClose}>Home</MenuItem>
					<MenuItem component={Link} to="/project" onClick={handleMenuClose}>Project</MenuItem>
					<MenuItem component={Link} to="/aboutme" onClick={handleMenuClose}>About Me</MenuItem>
					<MenuItem component={Link} to="/contact" onClick={handleMenuClose}>Contact</MenuItem>
				</Menu>

				<Typography variant="h6"
					component="div" sx={{ flexGrow: 1 }}> 
					Justin Lee's Portfoilo
				</Typography> 
				</Toolbar> 
			</AppBar> 
		</ThemeProvider>
	); 
}

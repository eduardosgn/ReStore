import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, IconButton, List, ListItem, Switch, Toolbar, Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
};

const middleLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' },
];

const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' },
];

const navStyles = {
    color: 'inherit',
    typography: 'body.2',
    textDecoration: 'none',
    letterSpacing: '.5px',
    transition: '.08s ease-in-out',
    '&:hover': {
        color: 'grey.300'
    },
    '&:active': {
        color: 'grey.500'
    },
};

export default function Header({ darkMode, handleThemeChange } : Props) {
    return (
        <AppBar position="static" sx={{ mb: 6 }}>

            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                <Box display='flex' alignItems='center'>
                    <Typography variant="h6" component={NavLink} exact to='/' sx={navStyles}>
                        ReStore
                    </Typography>

                    <Switch checked={ darkMode } onChange={ handleThemeChange } />
                </Box>

                <List sx={{ display: 'flex' }}>
                    {middleLinks.map(({ title, path }) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={navStyles}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>

                <Box display='flex' alignItems='center'>
                    <IconButton sx={{ color: 'inherit' }}>
                        <Badge badgeContent={4} color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>

                    <List sx={{ display: 'flex' }}>
                        {rightLinks.map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>

            </Toolbar>

        </AppBar>
    );
};
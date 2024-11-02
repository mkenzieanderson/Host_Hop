import React from 'react';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

function HomeButton () {

    return (
        <IconButton aria-label="home" href="/">
            <HomeIcon fontSize="xl"/>
        </IconButton>
    );
};

export default HomeButton;
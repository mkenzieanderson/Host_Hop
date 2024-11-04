import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import './CreateAccount.css'

function CreateAccountForm () {
    return (
        <Box 
            component="form"
            sx={{ '& > :not(style)': { m: 1 } }}
            noValidate
            autoComplete="off"
        >
            <div>
                <span className="first-name">
                    <FormControl variant="standard">
                        <InputLabel htmlFor="first-name">First Name</InputLabel>
                        <Input
                            id="first-name"
                            aria-describedby="first-name"
                        />
                    </FormControl>
                </span>
                <span className="last-name">
                    <FormControl variant="standard">
                        <InputLabel htmlFor="last-name">Last Name</InputLabel>
                        <Input
                            id="last-name"
                            aria-describedby="last-name"
                        />
                    </FormControl>
                </span>
            </div>
            <div className="email">
                <FormControl 
                    variant="standard" 
                    sx={{ width: '40%' }}
                >
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
                        id="email"
                        aria-describedby="email"
                        placeholder="example@domain.com"
                    />
                </FormControl>
            </div>
            <div className="username">
                <FormControl 
                    variant="standard" 
                    sx={{ width: '40%' }}
                >
                    <InputLabel htmlFor="username">Username</InputLabel>
                    <Input
                        id="username"
                        aria-describedby="username"
                    />
                    <FormHelperText id="username-info-button">
                        <Tooltip 
                            title="Username must be between 5 and 15 characters, and can only contain letters,
                             numbers, and underscores."
                        >
                            <IconButton size="small">
                                <InfoIcon sx={{ fontSize: 17 }} />
                            </IconButton>
                        </Tooltip>
                    </FormHelperText>
                </FormControl>
            </div>
            <div className="password">
                <FormControl 
                    variant="standard"
                    sx={{ width: '40%' }}
                >
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                        id="password"
                        aria-describedby="password"
                    />
                    <FormHelperText id="password-info-button">
                        <Tooltip 
                            title="Passwords must be between 8 and 15 characters, and must contain at least one 
                            uppercase letter, at least one lowercase letter, and at least one number"
                        >
                            <IconButton size="small">
                                <InfoIcon sx={{ fontSize: 17 }} />
                            </IconButton>
                        </Tooltip>
                    </FormHelperText>
                </FormControl>
            </div>
        </Box> 
      );
    }

export default CreateAccountForm;
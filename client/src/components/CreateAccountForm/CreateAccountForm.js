import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
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
                </FormControl>
            </div>
        </Box> 
      );
    }

export default CreateAccountForm;


<div>
<Box
component="form"
sx={{ '& .MuiTextField-root': { m: 1, width: '35ch' } }}
noValidate
autoComplete="off"
>
<div>
    <TextField
        required
        id="outlined-required"
        label="First Name"
        slotProps={{
            inputLabel: {
            shrink: true,
            },
        }}
    />
    <TextField
        required
        id="outlined-required"
        label="Last Name"
        slotProps={{
            inputLabel: {
            shrink: true,
            },
        }}
    />
    </div>
</Box>
<Box
    component="form"
    sx={{ '& .MuiTextField-root': { m: 1, width: '50ch' } }}
    noValidate
    autoComplete="off"
>
<div>
    <TextField
        required
        id="outlined-required"
        label="Email"
        defaultValue="example@domain.com"
    />
    {/* <TextField
        required
        id="outlined-required"
        label={"Username", <InfoIcon />}
        slotProps={{
            inputLabel: {
            shrink: true,
            },
        }}
    /> */}
    <Box display="flex" alignItems="center">
        <InputLabel htmlFor="outlined-required" shrink>
            Username
        </InputLabel>
        <Tooltip title="Username must be between 3 and 15 characters, and can only contain letters and numbers.">
            <IconButton size="small">
            <InfoIcon fontSize="small" />
            </IconButton>
        </Tooltip>
        <TextField
            required
            id="outlined-required"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{ marginTop: 0 }} // Adjust spacing to keep it aligned
        />
    </Box>
    <TextField
        required
        id="outlined-required"
        label="Password"
        slotProps={{
            inputLabel: {
            shrink: true,
            },
        }}
    />
</div>
</Box>
</div>
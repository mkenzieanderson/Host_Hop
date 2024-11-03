import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function CreateAccountForm () {
    return (
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
                <TextField
                    required
                    id="outlined-required"
                    label="Username"
                    slotProps={{
                        inputLabel: {
                        shrink: true,
                        },
                    }}
                />
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
      );
    }

export default CreateAccountForm;
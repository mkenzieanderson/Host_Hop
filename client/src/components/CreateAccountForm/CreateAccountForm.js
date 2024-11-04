import React, {useState} from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import './CreateAccount.css';

function CreateAccountForm () {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [openConfirmation, setOpenConfirmation] = useState(false);
    const [openSuccessMsg, setOpenSuccessMsg] = useState(false);

    const handleOpenConfirmation = () => {
        setOpenConfirmation(true);
      };
    
      const handleCloseConfirmation = () => {
        setOpenConfirmation(false);
      };

    const resetDataFields = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setUsername('');
        setPassword('');
    };

    const handleOpenSuccessMsg = () => {
        setOpenSuccessMsg(true);
    };

    const handleCloseSuccessMsg = () => {
        setOpenSuccessMsg(false);
    };


    const handleNewAccountCreation = async (event) => {
        const data = { firstName, lastName, email, username, password }
        if (data) {
            try {
                const response = await fetch('/account', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                });
                if (response.ok) {
                    console.log("Account created successfully");
                    handleOpenSuccessMsg();
                    
                } else {
                    console.error("Failed to create account");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }
        resetDataFields();
        handleCloseConfirmation();
    };


    return (
        <div>
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
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}

                            />
                        </FormControl>
                    </span>
                    <span className="last-name">
                        <FormControl variant="standard">
                            <InputLabel htmlFor="last-name">Last Name</InputLabel>
                            <Input
                                id="last-name"
                                aria-describedby="last-name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
            <div className="sign-up-button">
                <Button 
                    variant="contained"
                    color="success"
                    onClick={handleOpenConfirmation}
                >
                    Sign Up
                </Button>
                <Dialog
                    open={openConfirmation}
                    onClose={handleCloseConfirmation}
                >
                    <DialogTitle className="are-you-sure-title">
                        Are you sure that you want to create a new account?
                    </DialogTitle>
                    <DialogContent>
                        <Typography>
                            Usernames cannot be modified once an account is created.
                        </Typography>
                    </DialogContent>
                    <DialogActions className="confirmation-buttons">
                        <Button 
                            variant="contained"
                            onClick={handleCloseConfirmation} 
                            color="error"
                            className="cancel-button"
                        >
                            Cancel
                        </Button>
                        <Button 
                            variant="contained"
                            onClick={handleNewAccountCreation} 
                            color="success"
                            className="continue-button"
                        >
                            Continue
                        </Button>
                    </DialogActions>
                </Dialog>
            </div> 
            <Dialog
                open={openSuccessMsg}
                onClose={handleCloseSuccessMsg}
            >
                <DialogTitle className="create-account-success">
                    Your account was successfully created!
                </DialogTitle>
                <DialogActions className="confirmation-buttons">
                    <Button 
                        variant="contained"
                        onClick={handleCloseSuccessMsg} 
                        color="success"
                        className="close-success-msg-button"
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
      );
    }

export default CreateAccountForm;
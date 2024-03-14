import { Container, InputBase, IconButton, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import companyLogo from './../../../src/assets/images/bigbasket2.png';

const Header = () => {
    return (
        <div style={{
            height: '6rem', width: '100%',
            background: '#FFFFFF',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            margin: 0,
            display: 'flex',
            alignItems: 'center', // Align items vertically
        }}>
            <Container>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',}}>
                    <div>
                        <img src={companyLogo} alt="Company Logo" style={{ height: 'auto', width: '120px', }} />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '4px', padding: '4px', marginLeft: '8px' }}>
                        <IconButton color="primary" aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            placeholder="Search..."
                            inputProps={{ 'aria-label': 'search' }}
                            style={{ width: '500px' }}
                        />
                    </div>

                    <div style={{ display: 'flex', marginLeft: '8px' }}>
                        <Button variant="contained" color="primary" style={{ marginRight: '8px',width:"220px" ,textTransform:"capitalize"}}>
                          Select Location
                        </Button>
                        <Button variant="contained" color="secondary" style={{width:"180px",textTransform:"capitalize",marginRight: '8px',backgroundColor:"black",color:"white"}}>
                        Login/Sign Up
                        </Button>
                        <Button variant="contained" color="secondary" style={{width:"10px",textTransform:"capitalize",}}>
                        Login
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Header;

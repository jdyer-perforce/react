import Helmet from 'react-helmet'
import { Box, AppBar, Toolbar, Button} from '@mui/material'

const App = () => {
    return (
        <Box>
            <Helmet>
                <title>My Title</title>
                <meta name="description" content="My Description" />
                <meta name="keywords" content="My, Keywords" />
                <meta name="author" content="Jonathan Dyer" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default App
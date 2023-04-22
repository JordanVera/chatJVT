import { Box, Grid } from '@mui/material';

const WelcomeMessage = () => {
  return (
    <Box id="welcomeMessage">
      <h1>Welcome to JordanGPT</h1>
      <Grid container spacing={2}>
        <Grid item sm={4}>
          {' '}
          <div className="examples">
            <h2>Examples</h2>
            <Box className="card">
              <p>"Explain quantum computing in simple terms"</p>
            </Box>
            <Box className="card">
              <p>"How do I make an HTTP request in javascript?"</p>
            </Box>
            <Box className="card">
              <p>"Help me plan a 16 year olds birthday party"</p>
            </Box>
          </div>
        </Grid>
        <Grid item sm={4}>
          {' '}
          <div className="capabilities">
            {' '}
            <h2>Capabilities</h2>
            <Box className="card">
              <p>Remembers what user said earlier in the conversation</p>
            </Box>
            <Box className="card">
              <p>Allows user to provide follow-up corrections</p>
            </Box>
            <Box className="card">
              <p>Trained to decline inappropriate requests</p>
            </Box>
          </div>
        </Grid>
        <Grid item sm={4}>
          {' '}
          <div className="limits">
            {' '}
            <h2>Limitations</h2>
            <Box className="card">
              <p>May occasionally generate incorrect information</p>
            </Box>
            <Box className="card">
              <p>
                May occasionally produce harmful instructions or biased content
              </p>
            </Box>
            <Box className="card">
              <p>Limited knowledge of world and events after 2021</p>
            </Box>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};
export default WelcomeMessage;

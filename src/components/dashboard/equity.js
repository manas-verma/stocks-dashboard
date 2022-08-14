import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MoneyIcon from '@mui/icons-material/Money';

export function Equity(props) {

  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const equity_str = formatter.format(props.value || 25000);
  const gains = props.gains || 0.12;
  const is_postive = (gains >= 0);
  const gains_str = Math.abs(gains * 100).toFixed(2) + "%";

  return (
    <Card
      sx={{ height: '100%' }}
      {...props}
    >
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="overline"
            >
              EQUITY
            </Typography>
            <Typography
              color="textPrimary"
              variant="h4"
            >
              {equity_str}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: 'success.main',
                height: 56,
                width: 56
              }}
            >
              <MoneyIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          sx={{
            pt: 2,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {is_postive ? <ArrowUpwardIcon color="success" /> :
                        <ArrowDownwardIcon color="error" />}
          <Typography
            color={is_postive ? "success" : "error"}
            sx={{
              mr: 1
            }}
            variant="body2"
          >
            {gains_str}
          </Typography>
          <Typography
            color="textSecondary"
            variant="caption"
          >
            Since 24hrs ago
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
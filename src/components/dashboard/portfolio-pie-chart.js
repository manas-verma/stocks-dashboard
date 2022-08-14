import { Doughnut } from 'react-chartjs-2';
import { Box, Card, CardContent, CardHeader, Divider, Typography, useTheme } from '@mui/material';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PhoneIcon from '@mui/icons-material/Phone';
import TabletIcon from '@mui/icons-material/Tablet';

export function PortfolioPieChart(props) {
  const theme = useTheme();

  const portfolio = props.portfolio;

  const data = {
    datasets: [
      {
        data: portfolio ? portfolio.market_value : [1],
        backgroundColor: '#1a237e #388e3c #afb42b #FFB020 #D14343 '.repeat(10).split(" "),
        borderWidth: 8,
        borderColor: '#FFFFFF',
        hoverBorderColor: '#FFFFFF'
      }
    ],
    labels: portfolio ? portfolio.symbol : ["Cash"]
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  // const devices = [
  //   {
  //     title: 'Desktop',
  //     value: 63,
  //     icon: LaptopMacIcon,
  //     color: '#3F51B5'
  //   },
  //   {
  //     title: 'Tablet',
  //     value: 15,
  //     icon: TabletIcon,
  //     color: '#E53935'
  //   },
  //   {
  //     title: 'Mobile',
  //     value: 23,
  //     icon: PhoneIcon,
  //     color: '#FB8C00'
  //   }
  // ];

  return (
    <Card {...props}>
      <CardHeader title="Portfolio" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: 'relative'
          }}
        >
          <Doughnut
            data={data}
            options={options}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

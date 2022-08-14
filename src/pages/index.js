import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { Equity } from '../components/dashboard/equity';
import { LatestOrders } from '../components/dashboard/latest-orders';
import { LatestProducts } from '../components/dashboard/latest-products';
import { History } from '../components/dashboard/history';
import { TasksProgress } from '../components/dashboard/tasks-progress';
import { TotalCustomers } from '../components/dashboard/total-customers';
import { TotalProfit } from '../components/dashboard/total-profit';
import { PortfolioPieChart } from '../components/dashboard/portfolio-pie-chart';
import { DashboardLayout } from '../components/dashboard-layout';

function Dashboard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/api/account_details')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const equity = data.equity;
  const gains = data.gains;
  const history = data.history;
  const portfolio = data.portfolio;

  return (
    <>
      <Head>
        <title>
          Dashboard | Material Kit
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Equity value={equity} gains={gains} />
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <History history={history}/>
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <PortfolioPieChart portfolio={portfolio} sx={{ height: '100%' }} />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <LatestProducts sx={{ height: '100%' }} />
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <LatestOrders />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;

import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const AlertsSummary = ({ alerts }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card className="bg-red-100">
        <CardContent>
          <Typography variant="h6">Critical Alerts</Typography>
          <Typography variant="h3">{alerts.critical}</Typography>
        </CardContent>
      </Card>
      <Card className="bg-yellow-100">
        <CardContent>
          <Typography variant="h6">Medium Alerts</Typography>
          <Typography variant="h3">{alerts.medium}</Typography>
        </CardContent>
      </Card>
      <Card className="bg-green-100">
        <CardContent>
          <Typography variant="h6">Low Alerts</Typography>
          <Typography variant="h3">{alerts.low}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default AlertsSummary;
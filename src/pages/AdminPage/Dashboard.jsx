import { Card, CardContent, Typography } from "@mui/material";

const Dashboard = () => (
  <Card>
    <CardContent>
      <Typography variant="h5">Bienvenido al panel de administración</Typography>
      <Typography>Seleccione una sección para comenzar a gestionar los recursos.</Typography>
    </CardContent>
  </Card>
);

export default Dashboard;
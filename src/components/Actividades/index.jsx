import React from "react";
import data from "../../utils/noticias.json";
import './actividades.css';
import {
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
const Actividades = () => {
  const actividades = data.actividades;
  return (
    <>
      <div className="banner-activities">
        <div className="box">
          <h1 className="title-activities">ACTIVIDADES FAGUGARAMISA</h1>
        </div>
      </div>
      <Container maxWidth="xl">
        <Typography variant="h1" component="h2" mt={5}>
          Actividades
        </Typography>
        <p className="parrafo-items">
          Aquí encontrarás todas las items y novedades de nuestro Parque
          Residencial Sol Naciente, nos interesa que estés informado.
        </p>

        <Grid container spacing={5}>
          {actividades.map((item) => (
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/img/activities/activity.jpg"
                  title={item.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.content}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="medium"
                    variant="contained"
                    sx={{
                      width: "200px",
                      height: "50px",
                      marginTop: "20px",
                      backgroundColor: "#1b1e24",
                      color: "white",
                    }}
                  >
                    Ver Actividad
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Button
          variant="contained"
          sx={{
            width: "200px",
            height: "50px",
            marginTop: "20px",
            backgroundColor: "#1b1e24",
            color: "white",
          }}
        >
          Ver más
        </Button>
      </Container>
    </>
  );
};

export default Actividades;

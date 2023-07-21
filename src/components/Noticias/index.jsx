import React from "react";
import data from "../../utils/noticias.json";
import "./noticias.css";
import { Button, Container, Grid, Typography, Card, CardActions, CardContent, CardMedia } from "@mui/material";
const Noticias = () => {
  const noticias = data.noticias;

  return (
    <>
      <div className="banner-news">
        <div className="box">
          <h1 className="title-news">Noticias FAGUGARAMISA</h1>
        </div>
      </div>
      <Container maxWidth="xl">
        <Typography variant="h1" component="h2" mt={5}>
          NOTICIAS
        </Typography>
        <p className="parrafo-noticias">
          Aquí encontrarás todas las noticias y novedades de nuestro Parque
          Residencial Sol Naciente, nos interesa que estés informado.
        </p>

        <Grid container spacing={5}>
          {noticias.map((noticia) => (
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/img/news/noticias.jpg"
                  title={noticia.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {noticia.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {noticia.content}
                  </Typography>
                </CardContent>
                <CardActions>

                  <Button size="medium" 
                  variant="contained" 
                  sx={{
                    width: "200px",
                    height: "50px",
                    marginTop: "20px",
                    backgroundColor: "#1b1e24",
                    color: "white",
                  }}
                  >Ver Noticia</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

      </Container>
    </>
  );
};

export default Noticias;

import React from "react";
import { useState, useEffect } from "react";
import { set, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import "./creaNoticia.css";
import {
  Box,
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
  Stack
} from "@mui/material";
const url = "http://localhost:38600/api/v1/categories";
const CrearNoticia = () => {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState([]);
  const [selectCategory, setSelectCategory] = useState("");
  const [mensaje, setMensaje] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axios.get(`${url}/names`).then((res) => setCategory(res.data));
  }, []);

  const onSubmit = async (data, e) => {
    e.preventDefault();
  
    const { title, contenido } = data;
    const dataNoticia = {
      title,
      image: image,
      category: selectCategory,
      content: contenido,
    };
  
    try {
      const response = await axios.post("http://localhost:38600/api/v1/posts/", dataNoticia);
      if (response.status === 201) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Noticia creada con éxito",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/news");
      }
    } catch (error) {
      console.error("Error al crear la noticia:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ha ocurrido un error al crear la noticia",
      });
    }
  
    console.log({ dataNoticia });
  };

  return (
    <>
      <div className="banner-form">
        <div className="title-banner">
          <h1>Crear Noticia</h1>
        </div>
      </div>
      <div className="form-content">
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              id="title"
              label="Titulo"
              value={nombre}
              variant="outlined"
              placeholder="Escribe un titulo apropiado para la noticia."
              {...register("title", {
                required: "El Titulo es requerido.",
                minLength: {
                  value: 3,
                  message: "El titluo debe tener al menos 3 caracteres.",
                },
                maxLength: {
                  value: 100,
                  message: "El titulo no debe tener mas de 100 caracteres.",
                },
              })}
              onChange={(e) => setNombre(e.target.value)}
              aria-invalid={errors.title ? "true" : "false"}
              fullWidth
              margin="normal"
            />
            <span className="text-alert">
              {errors.title && errors.title.message}
            </span>
              <hr />
            <Stack direction="row" alignItems="center" spacing={4}>
              <Button variant="contained" component="label">
                Subir Imagen
                <input hidden accept="image/*" multiple type="file" id="image" onChange={(e) => setImage(e.target.value)}/>
              </Button>
            </Stack>

            

            <InputLabel id="category">Categoria</InputLabel>

            <Select
              labelId="category"
              id="category"
              value={selectCategory}
              label="Categoria"
              onChange={(e) => setSelectCategory(e.target.value)}
              fullWidth
            >
              <MenuItem value={0}>Seleccione una Categoria</MenuItem>
              {category.map((categoria, index) => (
                <MenuItem key={index} value={categoria._id}>
                  {categoria.name}
                </MenuItem>
              ))}
            </Select>

            <TextField
              id="contenido"
              label="Contenido"
              placeholder="Escribe el cuerpo de la noticia."
              multiline
              fullWidth
              margin="normal"
              minRows={5}
              {...register("contenido", {
                required: "El cuerpo de la noticia es requerido.",
                minLength: {
                  value: 20,
                  message:
                    "El cuerpo de la noticia debe tener al menos 20 caracteres.",
                },
              })}
              aria-invalid={errors.contenido ? "true" : "false"}
              onChange={(e) => setMensaje(e.target.value)}
            />
            <span className="text-alert">
              {errors.contenido && errors.contenido.message}
            </span>
            <Button
              variant="contained"
              type="submit"
              sx={{
                width: "200px",
                height: "50px",
                marginTop: "20px",
                backgroundColor: "#1b1e24",
                color: "white",
              }}
            >
              Enviar
            </Button>
          </form>
        </Box>
      </div>
    </>
  );
};

export default CrearNoticia;

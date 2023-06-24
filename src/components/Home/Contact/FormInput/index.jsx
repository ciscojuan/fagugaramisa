import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import './formInput.css'

const FormInput = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = ( data, e) => {
    alert(JSON.stringify(data));
    reset()
  };
  return (
    <Box>
      <TextField
        id="name"
        label="Escribe tu nombre."
        variant="outlined"
        placeholder="Escribe el nombre."
        {...register("name", {
          required: "El Nombre es requerido.",
          minLength: {
            value: 3,
            message: "El nombre debe tener al menos 3 caracteres.",
          },
          maxLength: {
            value: 20,
            message: "El nombre debe tener menos de 20 caracteres.",
          },
        })}
        aria-invalid={errors.name ? "true" : "false"}
        fullWidth
        margin="normal"
        
        
      />
      <span className="text-alert">{errors.name && errors.name.message}</span>
      <TextField
        id="email"
        label="Escribe tu email"
        variant="outlined"
        type="email"
        placeholder="Escribe el email."
        fullWidth
        margin="normal"
        {...register("email", {
          required: "El email es requerido.",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "El email no es válido.",
          },
        })}
        aria-invalid={errors.email ? "true" : "false"}
        //onChange={(e)=> setEmail(email)}
      />
      <span className="text-alert">{errors.email && errors.email.message}</span>

      <TextField
        id="mensaje"
        label="Escribe el mensaje"
        placeholder="Escribe el mensaje."
        multiline
        fullWidth
        margin="normal"
        minRows={5}
        {...register("mensaje", {
          required: "El email es requerido.",
          minLength: {
            value: 20,
            message: "El mensaje debe tener al menos 20 caracteres.",
          },
        })}
        aria-invalid={errors.mensaje ? "true" : "false"}
      />
      <span className="text-alert">{errors.mensaje && errors.mensaje.message}</span>
      <Button 
      variant="contained" 
      type="submit" 
      sx={{ mt: 2 }}
      onClick={handleSubmit(onSubmit)}>
        Enviar
      </Button>
    </Box>
  );
};

export default FormInput;

import React from "react";
import { useForm } from "react-hook-form";
import "../styles/formulario.css";

const Formulario = () => {
  const { register, handleSubmit, errors } = useForm();

  function onSubmit(data) {}

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          ref={register({
            required: "Informe Seu Nome Complete",
            pattern: {
              value: /^[A-Z]+$/i,
              message: "Informe Seu Nome Complete",
            },
          })}
        />
        {errors.nome && <p className="error">{errors.nome.message}</p>}

        <label htmlFor="Tfilho">possui filho ?</label>

        <select>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select>

        <label htmlFor="nFilho">Nome do Filho</label>
        <input type="text" name="nFilho" />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Formulario;

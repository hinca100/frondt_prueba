import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { LIST_OF_USERS } from "../Services/EndPoints";
import { NUMBER_CITIES } from "../Services/EndPoints";

const Users = () => {
  const [dataUsuarios, setDataUsuarios] = useState([]);
  const [dataNumLocalidades, setDataNumLocalidades] = useState();

  useEffect(() => {
    fetchNewValues();
    fetchNewValues2();
  }, []);

  const fetchNewValues = async () => {
    const url = LIST_OF_USERS;
    try {
      const result = await axios({
        method: "GET",
        url: url,
        headers: {
          "Content-Type": "application/json ",
        },
      });
      if (result) {
        setDataUsuarios(result.data);
      }
      throw Error("error");
    } catch (error) {
      console.log("entro al error ");
      return false;
    }
  };

  const fetchNewValues2 = async () => {
    const url = NUMBER_CITIES;
    try {
      const result = await axios({
        method: "GET",
        url: url,
        headers: {
          "Content-Type": "application/json ",
        },
      });
      if (result) {
        setDataNumLocalidades(result.data[0].localidades);
      }
      throw Error("error");
    } catch (error) {
      console.log("entro al error ");
      return false;
    }
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Nombre de Usuarios</th>
              <th scope="col">Total Localidades : {dataNumLocalidades}</th>
            </tr>
          </thead>

          {dataUsuarios.length > 0 ? (
            dataUsuarios.map((aux, id) => {
              return (
                <tbody>
                  <tr key={id} value={aux.id}>
                    <td>{aux.nombre_COMPLETO}</td>
                    <td>{}</td>
                  </tr>
                </tbody>
              );
            })
          ) : (
            <div></div>
          )}
        </table>
      </div>
    </div>
  );
};

export default Users;

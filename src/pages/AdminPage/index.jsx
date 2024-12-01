import React from "react";
import { Admin, Resource } from "react-admin";
// import mockDataProvider from "./mockDataProvider";
import { UserList, UserEdit, UserCreate } from "../../components/AdminLists/UserList";
import Dashboard from './Dashboard';
import restProvider from 'ra-data-simple-rest';
import { NewsList, NewsCreate, NewsEdit } from '../../components/AdminLists/NewsList';
import { CentroCreate, CentroEdit, CentroList } from "../../components/AdminLists/Centro";
// Placeholders para futuros recursos
const PasantiaList = () => <div>Sección en construcción</div>;
const EmpresaList = () => <div>Sección en construcción</div>;
const DocenteList = () => <div>Sección en construcción</div>;
const SociedadCientificaList = () => <div>Sección en construcción</div>;
const EventoList = () => <div>Sección en construcción</div>;
const AlumniList = () => <div>Sección en construcción</div>;

const AdminPage = () => {
  return (
    <Admin basename="/admin" dataProvider={restProvider('http://localhost:4000/api')} dashboard={Dashboard}>
      <Resource name="auth" list={UserList} edit={UserEdit} create={UserCreate} options={{ label: "Usuarios" }}/>
      <Resource name="pasantias" list={PasantiaList} options={{ label: "Pasantías" }} />
      <Resource name="empresas" list={EmpresaList} options={{ label: "Empresas" }} />
      <Resource name="news" list={NewsList} edit={NewsEdit} create={NewsCreate} options={{ label: "Noticias" }}/>
      <Resource name="docentes" list={DocenteList} options={{ label: "Docentes" }}/>
      <Resource name="centro"  list={CentroList} edit={CentroEdit} create={CentroCreate} options={{ label: "Centro de Estudiantes" }} />
      <Resource name="sociedadCientifica" list={SociedadCientificaList} options={{ label: "Sociedad Cientifica" }}/>
      <Resource name="eventos" list={EventoList} options={{ label: "Eventos" }}/>
      <Resource name="alumni" list={AlumniList} options={{ label: "Ex-Alumnos" }}/>
      
    </Admin>
  );
};

export default AdminPage;
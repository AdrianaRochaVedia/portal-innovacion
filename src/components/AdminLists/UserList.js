import React from 'react';
import { List, Datagrid, TextField, EmailField, BooleanField, TextInput, Filter, SimpleForm, BooleanInput, Edit, Create, required, email, Pagination, SelectInput} from 'react-admin';

const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Buscar por nombre" source="name" alwaysOn />
  </Filter>
);

const roleOptions = [
    { id: 'docente', name: 'Docente' },
    { id: 'estudiante', name: 'Estudiante' },
    { id: 'administrador', name: 'Administrador' },
];


export const UserList = (props) => (
    <List {...props} filters={<UserFilter />}>
      <Datagrid>
        <TextField source="id" label="ID" />
        <TextField source="name" label="Nombre" />
        <EmailField source="email" label="Correo Electrónico" />
        <TextField source="rol" label="Rol" />
        <BooleanField source="isDeleted" label="¿Eliminado?" />
        <BooleanField source="isCentro" label="Centro" />
        <BooleanField source="isSociedad" label="Sociedad Científica" />
        <BooleanField source="isDocente" label="Docente" />
        <BooleanField source="isGraduado" label="Graduado" />
      </Datagrid>
    </List>
);

export const UserEdit = (props) => (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="id" label="ID" />
        <TextInput source="name" label="Nombre" validate={required()} />
        <TextInput source="email" label="Correo Electrónico" validate={[required(), email()]} />
        <TextInput source="password" label="Contraseña" validate={required()} />
        
        <SelectInput 
          source="rol" 
          label="Rol" 
          choices={roleOptions} 
          validate={required()} 
        />
  
        <BooleanInput source="isDeleted" label="¿Eliminado?" />
        <BooleanInput source="isCentro" label="Centro" />
        <BooleanInput source="isSociedad" label="Sociedad Científica" />
        <BooleanInput source="isDocente" label="Docente" />
        <BooleanInput source="isGraduado" label="Graduado" />
      </SimpleForm>
    </Edit>
  );
  
  export const UserCreate = (props) => (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" label="Nombre" validate={required()} />
        <TextInput source="email" label="Correo Electrónico" validate={[required(), email()]} />
        <TextInput source="password" label="Contraseña" validate={required()} />
        
        <SelectInput 
          source="rol" 
          label="Rol" 
          choices={roleOptions} 
          validate={required()} 
        />
  
        <BooleanInput source="isDeleted" label="¿Eliminado?" />
        <BooleanInput source="isCentro" label="Centro" />
        <BooleanInput source="isSociedad" label="Sociedad Científica" />
        <BooleanInput source="isDocente" label="Docente" />
        <BooleanInput source="isGraduado" label="Graduado" />
      </SimpleForm>
    </Create>
  );
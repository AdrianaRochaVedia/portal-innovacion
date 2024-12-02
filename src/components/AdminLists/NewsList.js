import React from 'react';
import { 
  List, 
  Datagrid, 
  TextField, 
  DateField, 
  BooleanField, 
  TextInput, 
  SimpleForm, 
  Edit, 
  Create, 
  required, 
  ReferenceField, 
  SelectInput, 
  ReferenceInput, 
  Filter, 
  DeleteButton 
} from 'react-admin';

const NewsFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Buscar por título" source="title" alwaysOn />
    <TextInput label="Categoría" source="category" />
  </Filter>
);

export const NewsList = (props) => (
  <List {...props} filters={<NewsFilter />} pagination={true} perPage={10}>
    <Datagrid rowClick="edit">
      <TextField source="_id" label="ID" />
      <TextField source="title" label="Título" />
      <TextField source="category" label="Categoría" />
      <DateField source="start" label="Fecha de inicio" />
      <BooleanField source="state" label="Publicado" />
      <ReferenceField source="user" reference="auth" label="Usuario">
        <TextField source="name" />
      </ReferenceField>
      <DeleteButton />
    </Datagrid>
  </List>
);

export const NewsCreate = (props) => (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="title" label="Título" validate={required()} />
        <TextInput source="description" label="Descripción" multiline />
        <DateField source="start" label="Fecha de inicio" validate={required()} />
        <ReferenceInput source="user" reference="auth" label="Usuario">
          <SelectInput optionText="name" validate={required()} />
        </ReferenceInput>
        <TextInput source="category" label="Categoría" />
        <TextInput source="tags" label="Etiquetas (separadas por comas)" />
        <TextInput source="image" label="URL de imagen" />
        <BooleanField source="state" label="Publicado" defaultValue={true} />
      </SimpleForm>
    </Create>
);

export const NewsEdit = (props) => (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="title" label="Título" validate={required()} />
        <TextInput source="description" label="Descripción" multiline />
        <DateField source="start" label="Fecha de inicio" validate={required()} />
        <ReferenceInput source="user" reference="auth" label="Usuario">
          <SelectInput optionText="name" validate={required()} />
        </ReferenceInput>
        <TextInput source="category" label="Categoría" />
        <TextInput source="tags" label="Etiquetas (separadas por comas)" />
        <TextInput source="image" label="URL de imagen" />
        <BooleanField source="state" label="Publicado" />
      </SimpleForm>
    </Edit>
  );
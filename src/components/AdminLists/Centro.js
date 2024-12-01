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
    ArrayInput, 
    SimpleFormIterator, 
    SelectInput 
} from 'react-admin';

export const CentroList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" label="ID" />
            <TextField source="name" label="Nombre" />
            <TextField source="objetive" label="Objetivo" />
            <DateField source="start" label="Fecha de inicio" />
            <DateField source="end" label="Fecha de fin" />
            <BooleanField source="isDeleted" label="Eliminado" />
        </Datagrid>
    </List>
);

export const CentroCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" label="Nombre" validate={required()} />
            <TextInput source="objetive" label="Objetivo" validate={required()} multiline />
            <TextInput source="image" label="URL de imagen" />
            <BooleanField source="isDeleted" label="Eliminado" />
            <TextInput
                        source="socialLinks"
                label="Enlaces sociales (separados por comas)"
                defaultValue={[]} // Valor predeterminado como array vacío
                parse={(v) => (v ? v.split(',') : [])}
                format={(v) => (Array.isArray(v) ? v.join(', ') : '')}
            />
            <DateField source="start" label="Fecha de inicio" validate={required()} />
            <DateField source="end" label="Fecha de fin" validate={required()} />
            <ArrayInput source="members" label="Miembros">
                <SimpleFormIterator>
                    <ReferenceField source="user" reference="Usuario" label="Usuario" />
                    <SelectInput source="role" label="Rol" choices={[
                        { id: 'admin', name: 'Administrador' },
                        { id: 'member', name: 'Miembro' }
                    ]} validate={required()} />
                    <TextInput source="photo" label="Foto (URL)" validate={required()} />
                    <TextInput
                        source="socialLinks"
                        label="Enlaces sociales (separados por comas)"
                        defaultValue={[]} // Valor predeterminado como array vacío
                        parse={(v) => (v ? v.split(',') : [])}
                        format={(v) => (Array.isArray(v) ? v.join(', ') : '')}
                    />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
);
export const CentroEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" label="Nombre" validate={required()} />
            <TextInput source="objetive" label="Objetivo" validate={required()} multiline />
            <TextInput source="image" label="URL de imagen" />
            <BooleanField source="isDeleted" label="Eliminado" />
            <TextInput
                source="socialLinks"
                label="Enlaces sociales (separados por comas)"
                defaultValue={[]} // Valor predeterminado como array vacío
                parse={(v) => (v ? v.split(',') : [])}
                format={(v) => (Array.isArray(v) ? v.join(', ') : '')}
            />
            <DateField source="start" label="Fecha de inicio" validate={required()} />
            <DateField source="end" label="Fecha de fin" validate={required()} />
            <ArrayInput source="members" label="Miembros">
                <SimpleFormIterator>
                    <ReferenceField source="user" reference="Usuario" label="Usuario" />
                    <SelectInput source="role" label="Rol" choices={[
                        { id: 'admin', name: 'Administrador' },
                        { id: 'member', name: 'Miembro' }
                    ]} validate={required()} />
                    <TextInput source="photo" label="Foto (URL)" validate={required()} />
                    <TextInput
                        source="socialLinks"
                        label="Enlaces sociales (separados por comas)"
                        defaultValue={[]} // Valor predeterminado como array vacío
                        parse={(v) => (v ? v.split(',') : [])}
                        format={(v) => (Array.isArray(v) ? v.join(', ') : '')}
                    />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);
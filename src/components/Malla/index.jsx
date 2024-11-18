import React, { useState } from "react";
import TableHeader from "./TableHeader.jsx";
import TableRow from "./TableRow.jsx";
import Tarjeta from "./Tarjeta.jsx";

const Titulares = [
    { name: "S" },
    { name: "BÁSICAS Y GENÉRICAS" },
    { name: "INNOVACIÓN EMPRESARIAL" },
    { name: "GESTIÓN EMPRESARIAL" },
    { name: "TECNOLOGÍA Y SISTEMAS DE INFORMACIÓN" }
];

const materias = [
    { id: 1, sigla: "MAT-132", nombre: "Cálculo I", prerequisitos: [], abre: ["MAT-133","MAT-142"] , semestre: 1, titular: "BÁSICAS Y GENÉRICAS", costo: "Créditos 5" },
    { id: 2, sigla: "ECO-100", nombre: "Economía General", prerequisitos: [], abre: [], semestre: 1, titular: "BÁSICAS Y GENÉRICAS", costo: "Créditos 5" },
    { id: 3, sigla: "CAR-109", nombre: "Escritura Académica", prerequisitos: [], abre: [], semestre: 1, titular: "BÁSICAS Y GENÉRICAS", costo: "Créditos 5" },
    { id: 4, sigla: "MAT-133", nombre: "Cálculo II", prerequisitos: ["MAT-132"], abre: [], semestre: 2, titular: "BÁSICAS Y GENÉRICAS", costo: "Créditos 5" },
    { id: 5, sigla: "ADM-181", nombre: "Métodos y Técnicas de Investigación", abre: [], prerequisitos: [], semestre: 2, titular: "BÁSICAS Y GENÉRICAS", costo: "Créditos 7" },
    { id: 6, sigla: "MAT-123", nombre: "Álgebra Lineal", prerequisitos: [], abre: ["MAT-251"], semestre: 3, titular: "BÁSICAS Y GENÉRICAS", costo: "Créditos 5" },
    { id: 7, sigla: "MAT-142", nombre: "Probabilidad y Estadística I", prerequisitos: ["MAT-132"], abre: ["ICO-211","MAT-143"], semestre: 3, titular: "BÁSICAS Y GENÉRICAS", costo: "Créditos 5" },
    { id: 8, sigla: "FHC-142", nombre: "Formación Humano Cristiana I", prerequisitos: [], abre: ["FHC-240"], semestre: 3, titular: "BÁSICAS Y GENÉRICAS", costo: "Créditos 5" },
    { id: 9, sigla: "MAT-143", nombre: "Probabilidad y Estadística II", prerequisitos: ["MAT-142"], abre: [], semestre: 4, titular: "BÁSICAS Y GENÉRICAS", costo: "Créditos 5" },
    { id: 10, sigla: "FHC-240", nombre: "Formación Humano Cristiana II", prerequisitos: ["FHC-142"], abre: ["FHC-340"], semestre: 6, titular: "BÁSICAS Y GENÉRICAS", costo: "Créditos 5" },
    { id: 11, sigla: "FHC-340", nombre: "Formación Humano Cristiana III", prerequisitos: ["FHC-240"], abre: [], semestre: 7, titular: "BÁSICAS Y GENÉRICAS", costo: "Créditos 5" },
    { id: 12, sigla: "IIE-382", nombre: "Prácticas Preprofesionales", prerequisitos: ["FHC-240","ADM-214","ADM-261","IIE-300","ADM-263","MAT-252"], abre: [], semestre: 8, titular: "BÁSICAS Y GENÉRICAS", costo: "Créditos 5" },
    { id: 13, sigla: "IEE-383", nombre: "Taller de Grado I", prerequisitos: ["FHC-340","MAT-252","ADM-212","ICO-232","ADM-281","SIS-324"], abre: ["IIE-384"], semestre: 8, titular: "BÁSICAS Y GENÉRICAS", costo: "Créditos 15" },
    { id: 14, sigla: "IIE-384", nombre: "Taller de Grado II", prerequisitos: ["IEE-383"], abre: [], semestre: 9, titular: "BÁSICAS Y GENÉRICAS", costo: "Créditos 15" },

    { id: 15, sigla: "ADM-251", nombre: "Emprendimientos I", prerequisitos: ["IIE-102"], abre: ["ADM-252","ICO-342"], semestre: 4, titular: "INNOVACIÓN EMPRESARIAL", costo: "Créditos 7" },
    { id: 16, sigla: "IIE-200", nombre: "Creatividad aplicada a los Negocios", prerequisitos: [], abre: [], semestre: 4, titular: "INNOVACIÓN EMPRESARIAL", costo: "Créditos 7" },
    { id: 17, sigla: "ADM-252", nombre: "Emprendimientos II", prerequisitos: ["ADM-251"], abre: [], semestre: 5, titular: "INNOVACIÓN EMPRESARIAL", costo: "Créditos 7" },
    { id: 18, sigla: "ICO-342", nombre: "Taller de Innovación y Desarrollo de Productos ", abre: [], prerequisitos: ["ADM-251"], semestre: 5, titular: "INNOVACIÓN EMPRESARIAL", costo: "Créditos 7" },
    { id: 19, sigla: "ADM-262", nombre: "Gestión de Procesos ", prerequisitos: ["IIE-102"], abre: ["ADM-261","ADM-212"], semestre: 5, titular: "INNOVACIÓN EMPRESARIAL", costo: "Créditos 7" },
    { id: 20, sigla: "ICO-233", nombre: "Innovación, Desarrollo y Tecnología", prerequisitos: ["ICO-131"], abre: [], semestre: 5, titular: "INNOVACIÓN EMPRESARIAL", costo: "Créditos 7" },
    { id: 21, sigla: "ADM-214", nombre: "Innovación Empresarial ", prerequisitos: ["IIE-102"], abre: [], semestre: 6, titular: "INNOVACIÓN EMPRESARIAL", costo: "Créditos 7" },
    { id: 22, sigla: "ADM-261", nombre: "Gerencia de Operaciones y Tecnología ", prerequisitos: ["ADM-262"], abre: ["ICO-232"], semestre: 6, titular: "INNOVACIÓN EMPRESARIAL", costo: "Créditos 7" },
    { id: 23, sigla: "", nombre: "Optativa I", prerequisitos: [],abre: [], semestre: 6, titular: "INNOVACIÓN EMPRESARIAL", costo: "" },

    { id: 24, sigla: "CPA-111", nombre: "Contabilidad Básica", prerequisitos: [], abre: ["ICO-221"], semestre: 1, titular: "GESTIÓN EMPRESARIAL", costo: "Créditos 7" },
    { id: 25, sigla: "IIE-101", nombre: "Gestión de la Innovación Empresarial I", prerequisitos: [], abre: ["IIE-102"], semestre: 1, titular: "GESTIÓN EMPRESARIAL", costo: "Créditos 7" },
    { id: 26, sigla: "ICO-111", nombre: "Fundamentos del Marketing", prerequisitos: [], abre: ["ADM-212"], semestre: 2, titular: "GESTIÓN EMPRESARIAL", costo: "Créditos 5" },
    { id: 27, sigla: "IIE-102", nombre: "Gestión de la Innovación Empresarial II", prerequisitos: ["IIE-101"], abre: ["ADM-251","ADM-262","ADM-214","ADM-223"], semestre: 2, titular: "GESTIÓN EMPRESARIAL", costo: "Créditos 7" },
    { id: 28, sigla: "ICO-221", nombre: "Finanzas I", prerequisitos: ["CPA-111"], abre: ["ADM-212"], semestre: 3, titular: "GESTIÓN EMPRESARIAL", costo: "Créditos 7" },
    { id: 29, sigla: "ADM-223", nombre: "Comportamiento Organizacional", prerequisitos: ["IIE-102"], abre: ["ADM-281","ADM-263"], semestre: 3, titular: "GESTIÓN EMPRESARIAL", costo: "Créditos 7" },
    { id: 30, sigla: "ICO-211", nombre: "Investigación de Mercados I", prerequisitos: ["MAT-142"], abre: [], semestre: 4, titular: "GESTIÓN EMPRESARIAL", costo: "Créditos 7" },
    { id: 31, sigla: "ADM-212", nombre: "Dirección Estratégica I", prerequisitos: ["ICO-111","ADM-262","ICO-221"], abre: [], semestre: 7, titular: "GESTIÓN EMPRESARIAL", costo: "Créditos 7" },
    { id: 32, sigla: "ICO-232", nombre: "Logística y Cadena de Suministros", prerequisitos: ["ADM-261"], abre: [], semestre: 7, titular: "GESTIÓN EMPRESARIAL", costo: "Créditos 7" },
    { id: 33, sigla: "ADM-281", nombre: "Ética y Responsabilidad Social", prerequisitos: ["ADM-223"], abre: [], semestre: 7, titular: "GESTIÓN EMPRESARIAL", costo: "Créditos 5" },

    { id: 34, sigla: "SIS-141", nombre: "Introducción a los Sistemas de Información", prerequisitos: [], abre: ["SIS-142"], semestre: 2, titular: "TECNOLOGÍA Y SISTEMAS DE INFORMACIÓN", costo: "Créditos 5" },
    { id: 35, sigla: "SIS-111", nombre: "Introducción a la Programación", prerequisitos: [], abre: ["SIS-112"], semestre: 2, titular: "TECNOLOGÍA Y SISTEMAS DE INFORMACIÓN", costo: "Créditos 6" },
    { id: 36, sigla: "SIS-142", nombre: "Sistemas de Información", prerequisitos: ["SIS-141"], abre: ["IIE-300"], semestre: 3, titular: "TECNOLOGÍA Y SISTEMAS DE INFORMACIÓN", costo: "Créditos 7" },
    { id: 37, sigla: "SIS-112", nombre: "Programación I", prerequisitos: ["SIS-111"], abre: [], semestre: 3, titular: "TECNOLOGÍA Y SISTEMAS DE INFORMACIÓN", costo: "Créditos 6" },
    { id: 38, sigla: "ICO-131", nombre: "Tecnologías y Sistemas de Información", prerequisitos: [], abre: [], semestre: 4, titular: "TECNOLOGÍA Y SISTEMAS DE INFORMACIÓN", costo: "Créditos 7" },
    { id: 39, sigla: "INF-104", nombre: "Informática Aplicada a la Gestión Empresarial", prerequisitos: [],abre: [], semestre: 5, titular: "TECNOLOGÍA Y SISTEMAS DE INFORMACIÓN", costo: "Créditos 6" },
    { id: 40, sigla: "MAT-251", nombre: "Investigación Operativa I", prerequisitos: ["MAT-123"], abre: ["MAT-252"], semestre: 5, titular: "TECNOLOGÍA Y SISTEMAS DE INFORMACIÓN", costo: "Créditos 5" },
    { id: 41, sigla: "IIE-300", nombre: "Business Intelligence", prerequisitos: ["SIS-142"], abre: ["SIS-324"], semestre: 6, titular: "TECNOLOGÍA Y SISTEMAS DE INFORMACIÓN", costo: "Créditos 7" },
    { id: 42, sigla: "ADM-263", nombre: "Gestión del Conocimiento Inteligencia Artificial", prerequisitos: ["ADM-233"], abre: [], semestre: 6, titular: "TECNOLOGÍA Y SISTEMAS DE INFORMACIÓN", costo: "Créditos 7" },
    { id: 43, sigla: "MAT-252", nombre: "Investigación Operativa II", prerequisitos: ["MAT-251"], abre: [], semestre: 6, titular: "TECNOLOGÍA Y SISTEMAS DE INFORMACIÓN", costo: "Créditos 5" },
    { id: 44, sigla: "", nombre: "Optativa II", prerequisitos: [], abre: [], semestre: 7, titular: "TECNOLOGÍA Y SISTEMAS DE INFORMACIÓN", costo: "" },
    { id: 45, sigla: "SIS-324", nombre: "Auditoría de Sistemas", prerequisitos: ["IIE-300"], abre: [], semestre: 7, titular: "TECNOLOGÍA Y SISTEMAS DE INFORMACIÓN", costo: "Créditos 6" },
];

const Malla = () => {
    const [selectedMateria, setSelectedMateria] = useState(null);

    const groupedBySemestre = materias.reduce((acc, materia) => {
        if (!acc[materia.semestre]) acc[materia.semestre] = [];
        acc[materia.semestre].push(materia);
        return acc;
    }, {});

    const handleMouseEnter = (materia) => {
        materia.prerequisitos.forEach((req) => {
            const elem = document.getElementById(`materia-${req}`);
            if (elem) elem.classList.add('prerequisitoHighlight');
        });
    
        materia.abre.forEach((abre) => {
            const elem = document.getElementById(`materia-${abre}`);
            if (elem) elem.classList.add('abreHighlight');
        });
    };
    
    const handleMouseLeave = (materia) => {
        materia.prerequisitos.forEach((req) => {
            const elem = document.getElementById(`materia-${req}`);
            if (elem) elem.classList.remove('prerequisitoHighlight');
        });
    
        materia.abre.forEach((abre) => {
            const elem = document.getElementById(`materia-${abre}`);
            if (elem) elem.classList.remove('abreHighlight');
        });
    };

    return (
        <div className={"table-container"}>
            <table className={"curriculum-table"}>
                <thead>
                    <tr className={"header"}>
                        <TableHeader titulares={Titulares} />
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(groupedBySemestre).map(([semestre, materias]) => (
                        <TableRow
                            key={semestre}
                            semestre={semestre}
                            materias={materias}
                            titulares={Titulares}
                            handleMouseEnter={handleMouseEnter}
                            handleMouseLeave={handleMouseLeave}
                            setSelectedMateria={setSelectedMateria}
                        />
                    ))}
                </tbody>
            </table>
            <Tarjeta selectedMateria={selectedMateria} onClose={() => setSelectedMateria(null)} />
        </div>
    );
}; export default Malla;
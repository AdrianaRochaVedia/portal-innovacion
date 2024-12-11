import React, { useState, useEffect } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import FaqOne from '../../components/Faq/index';
import {loginAndFetchFaqs} from '../../queries/faqs';
import faqImg from '../../assets/img/faq/thumb-1.jpg';

const FaqMain = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores


  useEffect(() => {
    const loadFaqs = async () => {

      try {
        const data = await loginAndFetchFaqs(); // Llama a la función para obtener FAQs
        const formattedData = data.map((faq) => ({
          id: faq._id,
          btnText: faq.title,
          description: faq.description,
          faqImage: faq.image || "", // Usa un valor predeterminado si no hay imagen
        }));
        setItems(formattedData); // Actualiza el estado con los datos
      } catch (err) {
        setError("Error al cargar las FAQs"); // Establece un mensaje de error
        console.error(err);
      } finally {
        setLoading(false); // Oculta el spinner
      }
  
    };
    loadFaqs();
  }, []); 



  if (loading) {
    return <p>Cargando FAQs...</p>; // Muestra un spinner o mensaje de carga
  }

  if (error) {
    return <p>{error}</p>; // Muestra el mensaje de error
  }

  return (
    <main>
      <Breadcrumb title="Faqs" />

      <div className="it-faq-area p-relative pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="it-faq-wrap">
                <FaqOne
                  itemClass="it-custom-accordion it-custom-accordion-style-3 inner-style"
                  items={items}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default FaqMain;

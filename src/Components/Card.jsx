import React from 'react'


const Card = ({ data }) => {
    return (
      <div style={styles.card}>
        <h2>Información del Usuario</h2>
        <p><strong>Nombre:</strong> {data.name}</p>
        <p><strong>Ciudad:</strong> {data.city}</p>
      </div>
    );
  };
  
  const styles = {
    card: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      maxWidth: '300px',
      margin: '20px auto',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
  };
  
  export default Card;
import React, { useState } from 'react'
import Card from './Card';

const Form = () => {

    const [usuario, setUsuario] = useState({
        name: "",
        city: "",
    });
    
    const [error, setError] = useState('');
    const [cardData, setCardData] = useState(null);

    const handleChangeName = (event) => {
        setUsuario({ ...usuario, name: event.target.value });
    };
    const handleChangeCity = (event) => {
        setUsuario({ ...usuario, city: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        let valid = true;
        let errorMessage = '';

        if (usuario.name.trim().length < 3 || usuario.name !== usuario.name.trimStart()) {
            valid = false;
        }

        if (usuario.city.length < 6) {
            valid = false;
        }

        if (valid) {
            setError('');
            setCardData(usuario);
            setUsuario({ name: "", city: "" });
        } else {
            errorMessage = 'Por favor chequea que la información sea correcta';
            setError(errorMessage);
            setCardData(null);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Nombre:</label>
                <input
                    type="text"
                    value={usuario.name}
                    onChange={handleChangeName}
                />
                <label>Ciudad:</label>
                <input
                    type="text"
                    value={usuario.city}
                    onChange={handleChangeCity}
                />
                <button type="submit">Enviar</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
            {cardData && <Card data={cardData} />}
        </div>
    )
}

export default Form
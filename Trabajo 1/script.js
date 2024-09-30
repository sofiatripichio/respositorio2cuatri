
fetch("https://jsonplaceholder.typicode.com/users") //solicitu de HTTP a la API JSONPLACEHOLDER 
    .then(response => response.json()) //procesar la respuesta una vez que se completa la solicitud y convierte la respuesta en formato JSON 
    //para poder manipularlo
    .then(usuarios => { 
        const container = document.getElementById('cards-contenedor');

        usuarios.forEach(usuario => { 
            // Creamos el elemento card
            const card = document.createElement("div");
            card.className = "card";

            // Añadimos contenido a la card, incluyendo nombre, email, website, dirección y teléfono
            card.innerHTML = `
                <h2>${usuario.name}</h2>
                <p>Email: ${usuario.email}</p>
                <p>Página Web: <a href="http://${usuario.website}" target="_blank">${usuario.website}</a></p>
                <p>Teléfono:${usuario.phone}</p>
                <p>Dirección:${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city}, ${usuario.address.zipcode}</p>
            `;

            // Añadimos cada card creada al contenedor.
            container.appendChild(card); 
        });
    })
    .catch(error => console.error("Error al obtener los datos:", error));

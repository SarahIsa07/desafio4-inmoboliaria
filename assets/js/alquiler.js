const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        costo: 2200,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Departamento a la orilla de la playa',
        src: 'https://http2.mlstatic.com/D_NQ_NP_882280-MLC71457094128_092023-O.webp',
        descripcion: 'Este dpto tiene una amplia terraza con vista al mar',
        ubicacion: '585 Lago Link, Lake City, CA 98',
        habitaciones: 2,
        costo: 2100,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Cabaña en medio de la naturaleza',
        src: 'https://villalaangostura.com.ar/wp-content/uploads/2024/03/foto_775343883-8.jpg',
        descripcion: 'Esta cabaña cuenta con un hermoso jardín para disfrutar',
        ubicacion: '876 Bosque Mile, Avenue 42',
        habitaciones: 5,
        costo: 6500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Lujosa casa en condominio a las afueras de la ciudad',
        src: 'https://hips.hearstapps.com/hmg-prod/images/casa-arquitectura-moderna-bosque16-1622308618.jpg?resize=980:*',
        descripcion: 'Esta hermosa casa rodeada de naturaleza incluye inolvidables amaneceres',
        ubicacion: 'West longe 659, 90 Avenue',
        habitaciones: 4,
        costo: 4700,
        smoke: false,
        pets: false
    }
]

const alquiler = document.querySelector('#propiedades-alquiler');
let alquilerdptos = ""

for (let PropiedadesAlquiler of propiedades_alquiler) {
    alquilerdptos += `
    <div class="col-md-4 mb-4">
    <div class="card">
    <img class="card-img-top" src="${PropiedadesAlquiler.src}" alt=${PropiedadesAlquiler.nombre}"/>
    <div class="card-body">
    <h2 class="card-title">${PropiedadesAlquiler.nombre}</h2>
    <p>${PropiedadesAlquiler.descripcion}</p>
    <p><i class="fas fa-map-marker-alt"></i> Ubicación: ${PropiedadesAlquiler.ubicacion}</p>
    <p><i class="fas fa-bed"></i> Habitaciones: ${PropiedadesAlquiler.habitaciones}</p>
    <p>Precio: <i class="fas fa-dollar-sign"></i>${PropiedadesAlquiler.costo}</p>
    ${PropiedadesAlquiler.smoke ? '<p class="text-success"><i class="fas fa-smoking"></i>Se permite fumar</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban"></i>No se permite fumar</p>'}
    ${PropiedadesAlquiler.pets ? '<p class="text-success"><i class="fas fa-paw"></i> Se permiten mascotas</p>' : '<p class="text-danger"><i class="fas fa-ban"></i>No se permiten mascotas</p>'}
    </div>
    </div>
    </div>
    `
}

alquiler.innerHTML = alquilerdptos
const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa lujosa a orillas del lago',
        src: 'https://i.pinimg.com/originals/69/85/38/698538cacb7f8a352078af9a91c0eba5.jpg',
        descripcion: 'Esta casa brinda un espacio relajante en contacto con la naturaleza',
        ubicacion: '585 Lago Link, Lake City, CA 98',
        habitaciones: 3,
        costo: 9000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Cabaña acogedora y minimalista en el bosque',
        src: 'https://images.adsttc.com/media/images/6234/0105/3e4b/313b/6f00/00b8/newsletter/01aldo_lanzi.jpg?1647575296',
        descripcion: 'Esta cabaña familiar en medio del bosque cuenta con vista a lindo paisaje',
        ubicacion: '876 Bosque Fox, Avenue 33',
        habitaciones: 4,
        costo: 7500,
        smoke: true,
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

const venta = document.querySelector('#propiedades-venta');
let ventadptos = ""

for (let PropiedadesVenta of propiedades_venta) {
    ventadptos += `
    <div class="col-md-4 mb-4">
    <div class="card">
    <img class="card-img-top" src="${PropiedadesVenta.src}" alt=${PropiedadesVenta.nombre}"/>
    <div class="card-body">
    <h2 class="card-title">${PropiedadesVenta.nombre}</h2>
    <p>${PropiedadesVenta.descripcion}</p>
    <p><i class="fas fa-map-marker-alt"></i> Ubicación: ${PropiedadesVenta.ubicacion}</p>
    <p><i class="fas fa-bed"></i> Habitaciones: ${PropiedadesVenta.habitaciones}</p>
    <p>Precio: <i class="fas fa-dollar-sign"></i>${PropiedadesVenta.costo}</p>
    ${PropiedadesVenta.smoke ? '<p class="text-success"><i class="fas fa-smoking"></i>Se permite fumar</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban"></i>No se permite fumar</p>'}
    ${PropiedadesVenta.pets ? '<p class="text-success"><i class="fas fa-paw"></i> Se permiten mascotas</p>' : '<p class="text-danger"><i class="fas fa-ban"></i>No se permiten mascotas</p>'}
    </div>
    </div>
    </div>
    `
}

venta.innerHTML = ventadptos

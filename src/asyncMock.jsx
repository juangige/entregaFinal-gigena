const productos = [
    {
        id: 1,
        nombre: 'Tarjeta gráfica NVIDIA GeForce RTX 3080',
        descripcion: 'Tarjeta gráfica de alta gama con tecnología de trazado de rayos para una experiencia de juego increíblemente realista.',
        imagenUrl: 'https://imgs.search.brave.com/ddd81KHAQO8rUzQGqp4axOwxbq1Ov53WQWuIEyKv0i0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvMGJj/ODhlMGUtOWM0MC00/NGM0LTg1M2MtOTgy/MTVmMDg0ZTgzLmFl/M2NiNzQ4MjkxODI4/ODA4MzkxYjYwMTIx/OGUzMDg2LmpwZWc_/b2RuSGVpZ2h0PTYx/MiZvZG5XaWR0aD02/MTImb2RuQmc9RkZG/RkZG',
        stock: 10,
        precio: 799.99,
      },
      {
        id: 2,
        nombre: 'Procesador AMD Ryzen 9 5900X',
        descripcion: 'Procesador de alto rendimiento con 12 núcleos y 24 hilos para manejar las tareas más exigentes con facilidad.',
        imagenUrl: 'https://fullh4rd.com.ar/img/productos/1/micro-amd-ryzen-9-5900x-scooler-svideo-0.jpg',
        stock: 5,
        precio: 549.99,
      },
      {
        id: 3,
        nombre: 'Placa base ASUS ROG Strix X570-E Gaming',
        descripcion: 'Placa base para entusiastas con soporte para PCIe 4.0, Wi-Fi 6 y una variedad de características para mejorar tu experiencia de juego.',
        imagenUrl: 'https://innovapc.pe/tienda/525-large_default/placa-asus-rog-strix-x570-e-gaming-amd-x570-am4-ddr4-atx-sata-6gbs-usb-32-gen-.jpg',
        stock: 8,
        precio: 299.99,
      }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(productos)
        }, 2000)
    })
}
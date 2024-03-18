const productos = [
  {
      id: 1,
      nombre: 'Tarjeta gráfica NVIDIA GeForce RTX 3080',
      descripcion: 'Tarjeta gráfica de alta gama con tecnología de trazado de rayos para una experiencia de juego increíblemente realista.',
      imagenUrl: 'https://imgs.search.brave.com/ddd81KHAQO8rUzQGqp4axOwxbq1Ov53WQWuIEyKv0i0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvMGJj/ODhlMGUtOWM0MC00/NGM0LTg1M2MtOTgy/MTVmMDg0ZTgzLmFl/M2NiNzQ4MjkxODI4/ODA4MzkxYjYwMTIx/OGUzMDg2LmpwZWc_/b2RuSGVpZ2h0PTYx/MiZvZG5XaWR0aD02/MTImb2RuQmc9RkZG/RkZG',
      stock: 10,
      precio: 799.99,
      category: 'hardware',
  },
  {
      id: 2,
      nombre: 'Procesador AMD Ryzen 9 5900X',
      descripcion: 'Procesador de alto rendimiento con 12 núcleos y 24 hilos para manejar las tareas más exigentes con facilidad.',
      imagenUrl: 'https://fullh4rd.com.ar/img/productos/1/micro-amd-ryzen-9-5900x-scooler-svideo-0.jpg',
      stock: 5,
      precio: 549.99,
      category: 'hardware',
  },
  {
      id: 3,
      nombre: 'Placa base ASUS ROG Strix X570-E Gaming',
      descripcion: 'Placa base para entusiastas con soporte para PCIe 4.0, Wi-Fi 6 y una variedad de características para mejorar tu experiencia de juego.',
      imagenUrl: 'https://innovapc.pe/tienda/525-large_default/placa-asus-rog-strix-x570-e-gaming-amd-x570-am4-ddr4-atx-sata-6gbs-usb-32-gen-.jpg',
      stock: 8,
      precio: 299.99,
      category: 'hardware',
  },
  {
      id: 4,
      nombre: 'Monitor LG Ultragear 27GL850-B',
      descripcion: 'Monitor gaming con tecnología Nano IPS y una tasa de refresco de 144Hz para una experiencia de juego fluida.',
      imagenUrl: 'https://imgs.search.brave.com/kODlIvp8l2ub46nhDzA0in_AhCMGbwLOpt2TYxGHdrE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/YmhwaG90b3ZpZGVv/LmNvbS9jZG4tY2dp/L2ltYWdlL2Zvcm1h/dD1hdXRvLGZpdD1z/Y2FsZS1kb3duLHdp/ZHRoPTUwMCxxdWFs/aXR5PTk1L2h0dHBz/Oi8vd3d3LmJocGhv/dG92aWRlby5jb20v/aW1hZ2VzL2ltYWdl/czUwMHg1MDAvbGdf/MjdnbDg1MF9iXzI3/X3VsdHJhZ2Vhcl9u/YW5vX2lwc18xNTYz/Mzg2ODAxXzE0ODg4/OTAuanBn',
      stock: 15,
      precio: 499.99,
      category: 'monitores',
  },
  {
      id: 5,
      nombre: 'Teclado mecánico Corsair K95 RGB Platinum XT',
      descripcion: 'Teclado mecánico premium con interruptores Cherry MX y retroiluminación RGB personalizable para una experiencia de escritura y gaming excepcional.',
      imagenUrl: 'https://imgs.search.brave.com/eqoTQT83ZAiDRazMuPdTK9yLAMzq8G60RvkJQx7UhjA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxbmlRaUtMOWxM/LmpwZw',
      stock: 20,
      precio: 199.99,
      category: 'perifericos',
  },
  {
      id: 6,
      nombre: 'Ratón gaming Logitech G Pro X Superlight',
      descripcion: 'Ratón ultraligero con sensor HERO y diseño ambidiestro para un rendimiento óptimo en juegos competitivos.',
      imagenUrl: 'https://imgs.search.brave.com/c-yOwHxJz0_GlKRSKhvJChDueQm5o9Yn7bNQphBwvXI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/MzF1eU5pSmpqeUwu/anBn',
      stock: 30,
      precio: 149.99,
      category: 'perifericos',
  },
  {
      id: 7,
      nombre: 'Auriculares inalámbricos Sony WH-1000XM4',
      descripcion: 'Auriculares con cancelación de ruido y tecnología LDAC para una experiencia auditiva de alta calidad.',
      imagenUrl: 'https://imgs.search.brave.com/HzFBZx_lA5fy_zXlaN7mZduskXF36CYXJ_Ca-xyJ2HE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzUxU0ttdTJHOUZM/LmpwZw',
      stock: 25,
      precio: 349.99,
      category: 'perifericos',
  },
  {
      id: 8,
      nombre: 'Samsung Odyssey G7 Gaming',
      descripcion: 'Monitor de juego curvo de 32 pulgadas con frecuencia de actualización de 240 Hz para una experiencia de juego fluida y sin tartamudeos.',
      imagenUrl: 'https://imgs.search.brave.com/PZnUOZqOlniK0yet6q6jOTUvM7T35WLSrWkHSjeVAv8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFNTXNtY0lYQUwu/anBn',
      stock: 12,
      precio: 699.99,
      category: 'monitores',
  },
  {
      id: 9,
      nombre: 'SSD Samsung 970 EVO Plus 1TB',
      descripcion: 'SSD de alta velocidad con tecnología V-NAND y velocidades de lectura/escritura secuenciales de hasta 3,500/3,300 MB/s.',
      imagenUrl: 'https://imgs.search.brave.com/u5Zb0_G0dS4mjhnrQ5Xa_EzDiwAORCxEP36ntpAylJ0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxZkZVZDh1ZjNM/LmpwZw',
      stock: 18,
      precio: 149.99,
      category: 'hardware',
  },
  {
    id: 10,
    nombre: 'PC Gamer Alienware Aurora R10',
    descripcion: 'PC de escritorio diseñada para gaming de alta gama con procesador Ryzen 9 5900X, tarjeta gráfica NVIDIA GeForce RTX 3080, y 32GB de RAM.',
    imagenUrl: 'https://imgs.search.brave.com/3-LtXqaNpX7xgo4lSsngexX4WjTMBtJsM3kFef70yrI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxRXY3VTA2S3RM/LmpwZw',
    stock: 9,
    precio: 2299.99,
    category: 'hardware',
    },
    {
        id: 11,
        nombre: 'Notebook ASUS ROG Zephyrus G14',
        descripcion: 'Notebook gaming ultradelgada con procesador AMD Ryzen 9 5900HS, tarjeta gráfica NVIDIA GeForce RTX 3060 y pantalla QHD de 14 pulgadas.',
        imagenUrl: 'https://imgs.search.brave.com/hR2yGpmivebr2aq50n_bzxt5_qvBIThGyGfd3AXIvr0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDF4Ryt6V2x3T0wu/anBn',
        stock: 7,
        precio: 1499.99,
        category: 'notebooks',
    },
    {
        id: 12,
        nombre: 'Notebook HP Spectre x360',
        descripcion: 'Notebook convertible premium con procesador Intel Core i7, pantalla táctil 4K de 13.3 pulgadas y diseño elegante de aluminio.',
        imagenUrl: 'https://imgs.search.brave.com/knodXjiz9C6zmUh3slnkQM5YlMa-nHNlycMBPvOhrQg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFnbEdQdkNJVkwu/anBn',
        stock: 6,
        precio: 1699.99,
        category: 'notebooks',
      },
      {
        id: 13,
        nombre: 'Notebook Dell XPS 15',
        descripcion: 'Notebook ultradelgada con procesador Intel Core i9, pantalla OLED 4K de 15.6 pulgadas y tarjeta gráfica NVIDIA GeForce GTX 1650 Ti.',
        imagenUrl: 'https://imgs.search.brave.com/1npnRapsOKeouV4hHmppzl46gZxrtaPhyZTxKoCiavw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tdWx0/aW1lZGlhLmJieWNh/c3RhdGljLmNhL211/bHRpbWVkaWEvcHJv/ZHVjdHMvNTAweDUw/MC8xNzAvMTcwNjMv/MTcwNjM1NTYuanBn',
        stock: 4,
        precio: 2199.99,
        category: 'notebooks',
      },
      {
        id: 14,
        nombre: 'Notebook Lenovo ThinkPad X1 Carbon',
        descripcion: 'Notebook empresarial ultraligera con procesador Intel Core i7, pantalla HDR Dolby Vision de 14 pulgadas y teclado retroiluminado.',
        imagenUrl: 'https://imgs.search.brave.com/-PhyAXSbQvvTPFo6YSU8CTy-bV17fFq74GntRd_lajs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/Lzcxd0pKTDdxOG5M/LmpwZw',
        stock: 3,
        precio: 1799.99,
        category: 'notebooks',
      },
      {
        id: 15,
        nombre: 'Notebook Apple MacBook Pro M2',
        descripcion: 'Notebook profesional con procesador M2 de Apple, pantalla Retina de 13.3 pulgadas y hasta 20 horas de duración de la batería.',
        imagenUrl: 'https://imgs.search.brave.com/En0lOV02fNAVEau-yc6hPWwVGrWdYNOPo1sPfFs8ZUY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/YXBwbGUuY29tL25l/d3Nyb29tL2ltYWdl/cy9wcm9kdWN0L21h/Yy9zdGFuZGFyZC9B/cHBsZS1NYWNCb29r/LVByby1YQ29kZS0y/MzAxMTdfYmlnLmpw/Zy5sYXJnZS5qcGc',
        stock: 5,
        precio: 1799.99,
        category: 'notebooks',
      },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(productos)
        }, 1000)
    })
}

export const getProductsById = (id) => {
    return productos.find((prod) => prod.id == id);
  };

  export const getProductsByCate = (category) => {
    return new Promise((resolve, reject) => {
        // filtramos los productos por la categoria especificada
        const productosFiltrados = productos.filter(producto => producto.category === category);
        if (productosFiltrados.length > 0) {
            resolve(productosFiltrados); // muestra los productos
        } else {
            reject(`No se encontraron productos en: '${category}'`);
        }
    });
};

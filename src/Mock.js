const productos = [
    {
        id:"1",
        img:"https://i.blogs.es/86b11e/ps51/1366_2000.jpeg",
        nombre:"Play station 5",
        category:"consola",
        detalle:"PS5 calidad 4k realidad virtual 60fps",
        precio:3000,
        stock:10,
    },

    {   
        id:"2",
        category:"consola",
        img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6428/6428324_sd.jpg",
        nombre:"Xbox One",
        detalle:"xbox 360 con 2 controles y un casco de realidad virtual",
        precio:500,
        stock:10,},
        

    { 
        id:"3",
        category:"notebook",
        img:"https://http2.mlstatic.com/D_NQ_NP_878660-MLA41444063860_042020-O.jpg",
        nombre:"HP-1035",
        detalle:"HP 15 pulgadas con procesador ryzen 3 apta para juegos",
        precio:600,
        stock:10,},

    {   
        id:"4",
        category:"notebook",
        img:"https://www.computools.com.ar/Temp/App_WebSite/App_PictureFiles/Items/195477109315_800.jpg",
        nombre:"Lenovo 82fg",
        detalle:"Lenovo con procesador i7 touch 17 pulgadas gamer con la mejor velocidad en juegos",
        precio:150,
        stock:10,}
]



export const getFetch = new Promise((respuesta,rejected)=>{
    let url = "www.productosholistica.com.ar";

    if(url === "www.productosholistica.com.ar"){
        setTimeout(()=>{
            respuesta(productos);
        },1000)
    }else{
        rejected("400 not found")
    }

    
})

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(()=> {
            resolve(productos.find((prod) => {
                return prod.id === id
            } ))
        },1000)

    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(()=> {
            resolve(productos.filter((prod) => {
                return prod.category === categoryId
            } ))
        },1000)

    })
}
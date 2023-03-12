import MOCK_DATA from '../data/MOCK_DATA.json'

export const pedirDatos = () => {

    return new Promise((resolve, reject) => {
       setTimeout(()=>{
           resolve(MOCK_DATA)
       }, 1500)
       
   })
}



export const pedirItemPorId = (id) => {

    return new Promise((resolve, reject) => {
       setTimeout(()=>{
           const item = MOCK_DATA.find((el) => el.id === id)

           if (item) {
                resolve(item)
           } else {
                reject({
                    error: 'Producto no encontrado.'
                })
           }
       }, 500)
       
   })
}

export default function NumeroAleatorio() {
 
    const NumeroAleatorio = Math.floor(Math.random() * 100);
    console.log (NumeroAleatorio)
 
 
    return (
    <>
    <h2>Número Aleatório:</h2>
    <p>{NumeroAleatorio} </p>
    

    </>
  )
}

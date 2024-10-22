
function Itens(props){
    return(
        <li>Joy soy {props.carro}</li>
    )
}


function Lista(){
const marcas = [
    {id:1,carro:"Camaro SS"},
    {id:2,carro:'Fusca'},
    {id:3,carro:'BMW 320i'}
]

return(
    <>
        <h1>Carros da minha garagem</h1>
        <ol>{marcas.map((marcas) => <Itens key={marcas.id} carro= {marcas.carro}/>)}</ol>
    </>
)

}

export default Lista
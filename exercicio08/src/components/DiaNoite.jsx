function DiaNoite(props){

    var X = props.diaOuNoite

    return (
        <>
            {X == true ? (<><h1>Bom Dia</h1></>) :(<><h1>Boa Noite</h1></>)}
        </>
    )

}

export default DiaNoite


function Div(props){

    return(
        <>
            <div className="content" >
                <h1 style={{backgroundColor:props.backColor, color:props.color, margin:props.margin,borderRadius:props.borderR, padding:props.padding}}> {props.texto}</h1>
            </div>
        </>
    )

}

export default Div
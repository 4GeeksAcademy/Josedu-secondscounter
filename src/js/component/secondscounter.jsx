import React from "react";
import Icono from "./icono";


const SecondsCounter = (props)=>{
    let unidades = props.seconds % 10;
    let decenas = Math.trunc ((props.seconds / 10 ) % 10);
    let centenas = Math.trunc ((props.seconds / 100) % 10);
    let milesimas =Math.trunc ((props.seconds / 1000) % 10);
    let cienmilesimas =Math.trunc ((props.seconds / 10000) % 10);
    let milmilesimas =Math.trunc ((props.seconds / 100000) % 10);
    return(
        <div className="container bg-dark m-5 p-2 rounded">
            <div className="row text-center d-flex justify-content-around mt-2">
                <Icono />
                <p className="col-1 bg-secondary card text-bg-primary justify-content-center fs-1 display-5 " style={{ height: '6rem' }}>{milmilesimas}</p>   
                <p className="col-1 bg-secondary card text-bg-primary justify-content-center fs-1 display-5" style={{ height: '6rem' }}>{cienmilesimas}</p> 
                <p className="col-1 bg-secondary card text-bg-primary justify-content-center fs-1 display-5" style={{ height: '6rem' }}>{milesimas}</p>   
                <p className="col-1 bg-secondary card text-bg-primary justify-content-center fs-1 display-5" style={{ height: '6rem' }}>{centenas}</p>
                <p className="col-1 bg-secondary card text-bg-primary justify-content-center fs-1 display-5" style={{ height: '6rem' }}>{decenas}</p>
                <p className="col-1 bg-secondary card text-bg-primary justify-content-center fs-1 display-5" style={{ height: '6rem' }}>{unidades}</p>
            </div>   
        </div>
    )
}

export default SecondsCounter
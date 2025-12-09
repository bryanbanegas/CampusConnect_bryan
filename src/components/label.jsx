import { useMemo } from "react";

const Label = ({title}) => {
    const color = useMemo(()=>{
        if(title==="Editar") return "#0f16a2ff";
        if(title==="Crear") return "#64ff6cff";
        return "#b30f0fff"
    }, []);

    return(
        <div>
            <button>{title}</button>
        </div>
    )
};

export default Label;
export const Modulo2Page = () => {
    
    type Ingrediente = "azucar" | "cafe" | "agua";
    
    type RecetaCafe = {
        agua: number;
        cafe: number;
        azucar: number;
    };

    type CafePreparado = {
        mensaje:string;
        intensidad: "suave" | "fuerte";
    };

    function prepararCafe(receta: RecetaCafe): CafePreparado {
        const intensidad = receta.cafe > 10 ? "fuerte" : "suave";
        return {
            mensaje: `Café preparado con ${receta.agua}ml de agua, 
            ${receta.cafe}g de café,` + (receta.azucar ? ` ${receta.azucar}g de azúcar `: ""), 
            
            intensidad,
        };
    }

    const onCafe = () => {
        const resultado = prepararCafe({agua: 200, cafe: 5, azucar: 5});
        alert(resultado.mensaje + "con intensidad " + resultado.intensidad);
    }

    //Interfaces
    type CardProps = { title: string; };

    interface CardPropsInterf {
        title: string; 
    }

    interface Battle {arena: string;}
    interface Battle{ki:number;}
    
    //Variables de tipo interface (combina las propiedades de ambas interfaces)
    const peleanOk: Battle = {arena: "Namek", ki: 1500};

    //INTERFACE PADRE
    interface RecetaBase {
        agua: number;
        cafe: number;
    }
    //INTERFACE HIJA
    interface RecetaAzucar extends RecetaBase {azucar: number;}
    interface MaquinaCafe {modelo:string}
    
    interface MaquinaCafe {aguaMax: number}
    const maquina: MaquinaCafe = {modelo: "Kame-500", aguaMax: 2000};

    //Funciones con interfaces
    interface CafePreparadoI {mensaje:string; intensidad: "suave" | "fuerte";}
    
    function prepararCafeI(receta: RecetaAzucar): CafePreparadoI {
        const intensidad = receta.cafe > 10 ? "fuerte" : "suave";
        return {
            mensaje: `Café listo (INTERF) con ${receta.agua}ml de agua, 
            ${receta.cafe}g de café, +  ${receta.azucar}g de azúcar `, 
            
            intensidad,
        };
    }

    const onCafeI = () => {
        const resultado = prepararCafeI({agua: 200, cafe: 5, azucar: 5});
        alert(resultado.mensaje + "con intensidad " + resultado.intensidad);
    }

    return (
        <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
            <div className="mx-auto max-w-3xl p-8">
                <header>
                    <h1 className="text-3xl font-semibold text-blue-500 mt-2">
                        Módulo 2
                    </h1>
                </header>
                <button onClick ={onCafe} className="mt-4 px-4 py-2 bg-amber-950 text-white rounded-lg shadow-md"> 
                    Hacer café con el uso de Type
                </button>
            </div>
            <div>
                <h1 className="text-2xl font-semibold text-blue-500 mt-2">
                    Interfaces
                </h1>
                <span className="text-sm text-neutral-400 gap-4">
                    Funciones tipadas con interfaces
                </span>
            
            <div className="mx-auto p-4">
                <button onClick ={onCafeI} className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-lg shadow-md"> 
                    Hacer café con el uso de INTERFACES
                </button>
            </div>
            </div>
        </main>
    );
}
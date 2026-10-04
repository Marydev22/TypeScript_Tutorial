import { useState } from "react";

//Contador
type ContadorProps = {
    initial?: number;
    step?: number;
}

export const Modulo2Page = ({ initial = 0, step = 1 }: ContadorProps) => {
    const [count, setCount] = useState<number>(initial);
    const inc = () => setCount((c) => c + step);
    const dec = () => setCount((c) => c - step);
    
    //Tipado inferido con useState
    const [tazas, setTazas] = useState<number>(1) //inferido como number

    type Ingrediente = "azucar" | "cafe" | "agua";
    
    type RecetaCafe = {
        agua?: number;
        cafe?: number;
        azucar?: number;
    };

    type CafePreparado = {
        mensaje:string;
        intensidad: "suave" | "fuerte";
    };
    //Tipasdo explicito con useState (union literal)
    const [intensidadUI, setIntensidadUI] = useState<CafePreparado["intensidad"]>("suave") //tipado de la intensidad

    //Explicito con null
    const [ultimoCafe, setUltimoCafe] = useState<CafePreparado | null>(null);
    //Valores que pueden ser undefined
    const [azucarIn, setAzucarIn] = useState<number | undefined>(undefined);

//Implemtacion de valores por default modficados con ?
    function prepararCafe({agua=0, cafe=0, azucar=0}: RecetaCafe): CafePreparado {
        const intensidad = cafe > 10 ? "fuerte" : "suave";
        return {
            mensaje: `Café preparado con ${agua}ml de agua, 
            ${cafe}g de café,` + (azucar ? ` ${azucar}g de azúcar `: ""), 
            
            intensidad,
        };
    }

    const onCafe = () => {
        const resultado = prepararCafe({cafe: 5, azucar: 5});
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

    //INTERCCIONES 
    type A = {nombre: string;}
    type B = {edad: number;}
    type C = {state: boolean;}
    type Persona = A & B & C; //interseccion de tipos

    const mariaObject: Persona = {nombre: "Maria Giron", edad: 22, state: true};


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
                <h1 className="text-2xl font-semibold text-blue-500 mt-2">
                        useState tipados
                </h1>
                <span className="text-sm text-neutral-400 gap-2">
                    {intensidadUI}
                </span>
            <div className="mx-auto p-12">
                <button onClick ={()=>setIntensidadUI("fuerte")} 
                className="mt-2 px-4 py-2 bg-white text-gray-800 rounded-lg shadow-md"> 
                Cambiar State </button>
            </div>

                <h2 className="text-2xl font-semibold text-blue-500 mt-2">
                        Contador
                </h2>
                <span className="min-w-[3ch] text-center text-2xl font-semibold">{count}</span>

            <div className="mx-auto p-4">
                <button onClick ={inc} className="mt-2 px-4 py-2 bg-green-900 text-white rounded-lg shadow-md hover:bg-green-800">Incrementar + </button>
                <button onClick ={dec} className="mt-2 px-4 py-2 bg-red-900 text-white rounded-lg shadow-md hover:bg-red-800 "> Decrementar - </button>
            </div>
                <h2 className="text-2xl font-semibold text-blue-500 mt-2">
                        Intersecciones (&)
                </h2>
                <span className="min-w-[3ch] text-center text-2xl font-semibold">{mariaObject.nombre} - {mariaObject.edad}</span>
                <pre> {JSON.stringify(mariaObject, null, 2)} </pre>
            </div>
        </main>
    );
}   

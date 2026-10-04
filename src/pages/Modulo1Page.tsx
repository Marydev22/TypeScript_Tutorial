import { Link } from "react-router-dom";
import { calcularDanio } from "../utils/CalcularDanio"; // funcion pura del archivo TS
export const Modulo1Page = () => {
    //Inferencia y tipado
    let saga = "Saiyan Saga"; //inferido
    let horasEntrenamiento: number = 36; //tipado

    //2) Tipos básicos
    let gerrero: string = "Goku";
    let ki: number = 9001; //notación "number" para enteros y decimales
    const enCombate: boolean = true;

    //3) Arrays
    const equipoZ: string[] = ["Goku", "Vegeta", "Gohan", "Piccolo"];

    //4) Tuplas
    const coordenadas:[number, number, string] = [42, 17, "Hola fudamentos de TypeScript"];

    //5) Funciiones tipadas (parametros y retorno)
    /*function calcularDanio(base: number, multiplicador: number): number {
        return base * multiplicador;
    }
     */

    //Tipado en funciones flecha
    const calcularDanioFlecha = (base: number, multiplicador: number): 
    number => {
        return base * multiplicador;
    }
   

    //6) Null y undefinede
    let transformacion:string | null = null;
    transformacion = "Super Saiyan";

    let estrategia: string | undefined = undefined;
    estrategia = "Transformarse a aultra instinto";

    //7) valores any y unknown
    let variableLibre: any = "Semilla del ermitaño";
    variableLibre = 42; //no marca error, pero no es recomendable usar any

    let evento: unknown = "Refuerzo"
    let eventoMayus: string | null = null;

    if (typeof evento === "string") {
        eventoMayus = evento.toUpperCase();
    }

return (
    
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
    <div className="mx-auto max-w-3xl p-8">
        <header>
            <Link to="/" className=" px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-md">
                Volver al Home
            </Link>

            <h1 className="text-3xl font-semibold text-blue-500 mt-2">
            React + TypeScript – Módulo 1
            </h1>
            <p className="mt-2 text-sm text-neutral-400">
            Fundamentos: tipos básicos, arrays y tuplas
            </p>
        </header>

        <section className="mb-8">
            <h2 className="text-xl font-medium text-blue-300 mb-2">
                Inferencia y básicos
            </h2>
            <div className="grid grid-cols-1 gap-2 text-neutral-300">
                
                <div>Saga: {saga}</div>  
                <div>Horas de entrenamiento: {horasEntrenamiento}</div>
                <div>Guerrero: {gerrero}</div>
                <div>Ki: {ki}</div>
                <div>En combate: {enCombate ? 'Sí' : 'No'}</div>

            </div>
        <section className="mb-8">
            <h2 className="text-xl font-medium text-blue-300 mb-2">
                Arrays 
            </h2>
            <div>
                Equipo Z: {equipoZ.join(",")}
            </div>

            <h2 className="text-xl font-medium text-blue-300 mb-">
                Tuplas
            </h2>
            <div>
                Coordenadas: [x,y,saludo] : x={coordenadas[0]}, y={1}, hola={coordenadas[2]}
            </div>
            </section>
        </section>

        <section className="mb-8">
            <h2 className="text-xl font-medium text-blue-300 mb-2">
                Funciones tipadas
            </h2>
            <div>
                <p>Danio (base 450 x mult. 2)</p>
                <span>Resultado: {calcularDanio(450, 2)}</span>
            </div>
        </section>
        <section className="mb-8">
            <h2 className="text-xl font-medium text-blue-300 mb-2">
                Valores Any y unknown
            </h2>
            <div>
                Any: {variableLibre}
            </div>
            <div>
                Evento: {eventoMayus}  
            </div>
        </section>

    </div>
    </main>
);
};

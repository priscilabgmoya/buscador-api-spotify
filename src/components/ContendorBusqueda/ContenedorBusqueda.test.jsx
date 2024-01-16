import { BuscarSpotify } from "../../API/buscadorSpotify";
import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import ContenedorBusqueda from "./contenerdorBusqueda";

const infoPrueba = await BuscarSpotify("hola", "tracks"); 

describe("testing de contenedorBusqueda" , ()=> {
    afterEach(cleanup); 
    it("testing de renderizacion de componente", () => {
        render(<ContenedorBusqueda/>); 
    }); 
    it("testing de renderizacion de componente", () => {
        render(<ContenedorBusqueda resultado={infoPrueba}/>); 
        screen.getByText(infoPrueba); 
    });
    it("testing de contenedor de respuesta", ()=>{
        render(<ContenedorBusqueda/>); 
        screen.getByRole("contenedorRes"); 
    })   
}); 
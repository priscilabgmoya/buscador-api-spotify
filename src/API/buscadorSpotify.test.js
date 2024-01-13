import { describe, expect, it } from "vitest";
import { BuscarSpotify } from "./buscadorSpotify";

describe("testing API" , ()=>{
    it("Tiene que existir la funcion", ()=>{
        expect(BuscarSpotify).toBeDefined();
    }); 
    it("se tiene que mostrar un nuevo error al mandar parametros vacios", async ()=>{
        const response = await BuscarSpotify(); 
        expect(response).toBe("ingrese la palabra y el tipo de busqueda");
    });
    it("mostrar un resultado definido cuando mandamos por parametros",  async ()=>{
        const response = await BuscarSpotify("hola", "tracks"); 
        expect(response).toBeTypeOf("object");
    }); 
    it("se tiene que mostrar un nuevo error al mandar uno de los parametros vacios",  async ()=>{
        const response = await BuscarSpotify("tracks"); 
        expect(response).toBe("ingrese la palabra y el tipo de busqueda");
    }); 
}); 
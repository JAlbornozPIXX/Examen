import { NonEmptyArray } from "type-graphql";
import {persona_existenteResolver} from "./schemas/persona-existente/resolvers";
import { Id_cargoResolver } from "./schemas/Id_cargo/resolvers";



export const resolvers: NonEmptyArray<Function> = [
    persona_existenteResolver,
    Id_cargoResolver
]
import { NonEmptyArray } from "type-graphql";
import {personalExistenteResolver} from "./schemas/persona-existente/resolvers";
import { Id_cargoResolver } from "./schemas/Id_cargo/resolvers";



export const resolvers: NonEmptyArray<Function> = [
    personalExistenteResolver,
    Id_cargoResolver
]
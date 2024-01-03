import { NonEmptyArray } from "type-graphql";
import {personalExistenteResolver} from "./schemas/persona-existente/resolvers";
import { cargoResolver } from "./schemas/cargo/resolvers";



export const resolvers: NonEmptyArray<Function> = [
    personalExistenteResolver,
    cargoResolver
]
import { Field, ID, InputType, Int, ObjectType } from "type-graphql";
import { Id_cargo } from "../Id_cargo/type";
import { MaxLength, Min } from "class-validator";




@ObjectType()
export class persona_existente {
    @Field(type => ID)
    id: string;
    @Field()
    created_at: Date;
    @Field()
    Alias: string;
    @Field()
    Nombres: string;
    @Field()
    Apellidos: string;
    @Field(type => Int)
    RUN: number;
    @Field()
    Verificador: string;
    @Field()
    Fecha_modificacion: Date;
    @Field(type => ID)
    User_id: string
    @Field(type => Id_cargo)
    Id_cargo: Id_cargo
}

@InputType()
export class EntradaPersona{
    @Field()
    @MaxLength(30)
    Alias: string;
    @Field()
    @MaxLength(30)
    Nombres: string;
    @Field()
    @MaxLength(30)
    Apellidos: string;
    @Field(type => Int)
    @MaxLength(8)
    RUN: number
    @Field()
    @MaxLength(1)
    Verificador: string;
}
@InputType()
export class EditarPersona{
    @Field()
    @MaxLength(30)
    Alias: string;
    @Field()
    @MaxLength(30)
    Nombres: string;
    @Field()
    @MaxLength(30)
    Apellidos: string;
    @Field(type => Int)
    @MaxLength(8)
    RUN: number
    @Field()
    @MaxLength(1)
    Verificador: string;
}
@InputType()
export class WherePersona{
    @Field()
    @MaxLength(30)
    Alias: string;
    @Field()
    @MaxLength(30)
    Nombres: string;
    @Field()
    @MaxLength(30)
    Apellidos: string;
    @Field(type => Int)
    @MaxLength(8)
    RUN: number
    @Field()
    @MaxLength(1)
    Verificador: string;
}

import { Field, ID, InputType, Int, ObjectType } from "type-graphql";
import { Id_cargo } from "../Id_cargo/type";
import { MaxLength, Min } from "class-validator";




@ObjectType()
export class personal_existente {
    @Field(type => ID)
    id: string;
    @Field({nullable:true})
    created_at: Date;
    @Field({nullable:true})
    Alias: string;
    @Field({nullable:true})
    Nombres: string;
    @Field({nullable:true})
    Apellidos: string;
    @Field(type => Int,{nullable:true})
    RUN: number;
    @Field({nullable:true})
    Verificador: string;
    @Field({nullable:true})
    Fecha_modificacion: Date;
    @Field(type => ID,{nullable:true})
    User_id: string
    @Field(type => Id_cargo,{nullable:true})
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

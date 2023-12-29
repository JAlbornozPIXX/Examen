import { Field, ID, InputType, ObjectType } from "type-graphql";
import { persona_existente } from "../persona-existente/type";
import { MaxLength, maxLength } from "class-validator";


@ObjectType()
export class Id_cargo{
    @Field(type => ID)
    id: string;
    @Field()
    nombre: string;
    @Field()
    created_at: Date;
    @Field(type => [persona_existente])
    persona_existente: persona_existente[]
}

@InputType()
export class whereId_cargo{
    @Field({nullable:true})
    @MaxLength(20)
    nombre: string;
}

@InputType()
export class EntradaCargo{
    @Field()
    @MaxLength(20)
    nombre: string;
}

@InputType()
export class EditarCargo{
    @Field({nullable:true})
    @MaxLength(20)
    nombre: string;
}
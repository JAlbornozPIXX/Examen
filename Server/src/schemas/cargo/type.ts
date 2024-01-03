import { Field, ID, InputType, ObjectType } from "type-graphql";
import { personal_existente } from "../persona-existente/type";
import { MaxLength } from "class-validator";


@ObjectType()
export class cargo{
    @Field(type => ID)
    id: string;
    @Field({nullable:true})
    Nombre: string;
    @Field({nullable:true})
    created_at: Date;
    @Field(type => [personal_existente], {nullable:true})
    persona_existente: personal_existente[]
}

@InputType()
export class wherecargo{
    @Field({nullable:true})
    @MaxLength(20)
    Nombre: string;
}

@InputType()
export class EntradaCargo{
    @Field()
    @MaxLength(20)
    Nombre: string;
}

@InputType()
export class EditarCargo{
    @Field({nullable:true})
    @MaxLength(20)
    Nombre: string;
}
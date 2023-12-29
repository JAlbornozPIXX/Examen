import{Info, Arg, Ctx, Query, Resolver, Mutation} from "type-graphql"
import { EditarPersona, EntradaPersona, persona_existente,WherePersona } from "./type";
import { GraphQLContext } from "../../context";
import { PrismaSelect } from "@paljs/plugins";



@Resolver(persona_existente)
export class persona_existenteResolver{

    @Query(returns => [persona_existente])
    async persona_existente(
      @Ctx() {prisma}: GraphQLContext,
      @Info() info: any,
      @Arg("where",{nullable:true}) where: WherePersona,
    ) {
      const selected = new PrismaSelect(info).value; 
      return prisma.persona.findMany({
          ...selected ,
          where:{
              nombre: where?.Nombres ? {
                  contains:where.Nombres,
                  mode:"insensitive"
              }: {},
          }
      })
    } 

    @Query(returns => persona_existente)
    async persona_existenteByID(
    @Ctx() {prisma}: GraphQLContext,
    @Arg("id",{nullable:false}) id: string,
    @Info() info: any,
  ) {
    const selected = new PrismaSelect(info).value; 
    return prisma.persona.findUnique({
        where:{
            id
        },
        ...selected 
    })
  }
    @Mutation(returns => persona_existente) 
    AddPersonas( 
    @Ctx() {prisma}: GraphQLContext,
    @Arg("EntradaPersonas") InputPersona: EntradaPersona,
    @Info() info: any,
    
  )  {
    const selected = new PrismaSelect(info).value;
    return prisma.persona.create({
        ...selected,

        data: InputPersona
    })
  }

  @Mutation(returns => persona_existente) 
   EditarPersona( 
    @Ctx() {prisma}: GraphQLContext,
    @Arg("id") id: string,
    @Arg("EditarPersona") InputPersona: EditarPersona,
    @Info() info: any
  )  {  
    return prisma.persona.update({
        where:{
            id
        },
        data: InputPersona
         
    })
  }

  @Mutation(returns => persona_existente) 
  EliminarPersona( 
    @Ctx() {prisma}: GraphQLContext,
    @Arg("id") id: string,
    @Info() info: any
  )  {  
    return prisma.persona.delete({
        where:{
            id
        }
    })
  }



}
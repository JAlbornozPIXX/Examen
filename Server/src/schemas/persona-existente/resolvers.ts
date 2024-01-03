import { Info, Arg, Ctx, Query, Resolver, Mutation } from "type-graphql"
import { EditarPersona, EntradaPersona, WherePersona, personal_existente } from "./type";
import { GraphQLContext } from "../../context";
import { PrismaSelect } from "@paljs/plugins";



@Resolver(personal_existente)
export class personalExistenteResolver {

  @Query(returns => [personal_existente])
  async personalExistente(
    @Ctx() { prisma }: GraphQLContext,
    @Info() info: any,
    @Arg("where", { nullable: true }) where: WherePersona,
  ) {
    const selected = new PrismaSelect(info).value;
    return prisma.personal_existente.findMany({
      ...selected,
      where: {
        Nombres: where?.Nombres ? {
          contains: where.Nombres,
          mode: "insensitive"
        } : {},
      }
    })
  }

  @Query(returns => personal_existente)
  async personalExistenteByID(
    @Ctx() { prisma }: GraphQLContext,
    @Arg("id", { nullable: false }) id: string,
    @Info() info: any,
  ) {
    const selected = new PrismaSelect(info).value;
    return prisma.personal_existente.findUnique({
      where: {
        id
      },
      ...selected
    })
  }

  @Mutation(returns => personal_existente)
  NuevoPersonal(
    @Ctx() { prisma }: GraphQLContext,
    @Arg("EntradaPersonas") InputPersona: EntradaPersona,
    @Info() info: any,

  ) {
    const selected = new PrismaSelect(info).value;
    return prisma.personal_existente.create({
      ...selected, 
      data: InputPersona
    })
  }

  @Mutation(returns => personal_existente)
  EditarPersonal(
    @Ctx() { prisma }: GraphQLContext,
    @Arg("id") id: string,
    @Arg("EditarPersona") InputPersona: EditarPersona,
    @Info() info: any
  ) {
    return prisma.personal_existente.update({
      where: {
        id
      },
      data: InputPersona

    })
  }

  @Mutation(returns => personal_existente)
  EliminarPersonal(
    @Ctx() { prisma }: GraphQLContext,
    @Arg("id") id: string,
    @Info() info: any
  ) {
    return prisma.personal_existente.delete({
      where: {
        id
      }
    })
  }
  
}
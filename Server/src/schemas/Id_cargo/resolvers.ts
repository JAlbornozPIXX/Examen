import { Arg, Ctx, Info, Query, Resolver, Mutation } from "type-graphql";
import { EditarCargo, EntradaCargo, Id_cargo, whereId_cargo } from "./type";
import { GraphQLContext } from "../../context";
import { PrismaSelect } from "@paljs/plugins";


@Resolver(Id_cargo)
export class Id_cargoResolver {

    @Query(returns => [Id_cargo])
    Id_cargo(
        @Ctx() { prisma }: GraphQLContext,
        @Info() info: any,
        @Arg("where", { nullable: true }) where: whereId_cargo,
    ) {
        const selected = new PrismaSelect(info).value;
        return prisma.id_cargo.findMany({
            ...selected,
            where: {
                nombre: where?.nombre ? {
                    contains: where.nombre,
                    mode: "insensitive"
                } : {},
            }
        })
    }

    @Query(returns => [Id_cargo])
    Id_cargoByID(
        @Ctx() { prisma }: GraphQLContext,
        @Arg("id", { nullable: false }) id: string,
        @Info() info: any,
    ) {
        const selected = new PrismaSelect(info).value;
        return prisma.id_cargo.findUnique({
            where: {
                id
            },
            ...selected
        })
    }

    @Mutation(returns => Id_cargo)
    AddId_cargo(
        @Ctx() { prisma }: GraphQLContext,
        @Arg("EntradaCargo") InputId_cargo: EntradaCargo,
        @Info() info: any,
    ) {
        const selected = new PrismaSelect(info).value;
        return prisma.id_cargo.create({
            ...selected,
            date: EntradaCargo
        })
    }

    @Mutation(returns => Id_cargo)
    EditarId_cargo(
        @Ctx() { prisma }: GraphQLContext,
        @Arg("id") id: string,
        @Arg("EditarCargo") InputEditarCargo: EditarCargo,
        @Info() info: any
    ) {
        return prisma.id_cargo.update({
            where: {
                id
            },
            data: InputEditarCargo
        })
    }

    @Mutation(returns => Id_cargo)
    EliminarId_cargo(
        @Ctx() { prisma }: GraphQLContext,
        @Arg("id") id: string,
        @Info() info: any
    ) {
        return prisma.id_cargo.delete({
            where: {
                id
            }
        })
    }
}

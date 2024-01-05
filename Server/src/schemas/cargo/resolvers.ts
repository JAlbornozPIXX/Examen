import { Arg, Ctx, Info, Query, Resolver, Mutation } from "type-graphql";
import { EditarCargo, EntradaCargo, cargo, wherecargo } from "./type";
import { GraphQLContext } from "../../context";
import { PrismaSelect } from "@paljs/plugins";


@Resolver(cargo)
export class cargoResolver {

    @Query(returns => [cargo])
    cargo(
        @Ctx() { prisma }: GraphQLContext,
        @Info() info: any,
        @Arg("where", { nullable: true }) where: wherecargo,
    ) {
        const selected = new PrismaSelect(info).value;
        return prisma.cargo.findMany({
            ...selected,
            where: {
                Nombre: where?.Nombre ? {
                    contains: where.Nombre,
                    mode: "insensitive"
                } : {},
            }
        })
    }

    @Query(returns => [cargo])
    cargoByID(
        @Ctx() { prisma }: GraphQLContext,
        @Arg("id", { nullable: false }) id: string,
        @Info() info: any,
    ) {
        const selected = new PrismaSelect(info).value;
        return prisma.cargo.findUnique({
            where: {
                id
            },
            ...selected
        })
    }

    @Mutation(returns => cargo)
    Addcargo(
        @Ctx() { prisma }: GraphQLContext,
        @Arg("EntradaCargo") Inputcargo: EntradaCargo,
        @Info() info: any,
    ) {
        const selected = new PrismaSelect(info).value;
        return prisma.cargo.create({
            ...selected,
            data: Inputcargo
        })
    }

    @Mutation(returns => cargo)
    Editarcargo(
        @Ctx() { prisma }: GraphQLContext,
        @Arg("id") id: string,
        @Arg("EditarCargo") InputEditarCargo: EditarCargo,
        @Info() info: any
    ) {
        return prisma.cargo.update({
            where: {
                id
            },
            data: InputEditarCargo
        })
    }

    @Mutation(returns => cargo)
    Eliminarcargo(
        @Ctx() { prisma }: GraphQLContext,
        @Arg("id") id: string,
        @Info() info: any
    ) {
        return prisma.cargo.delete({
            where: {
                id
            }
        })
    }
}

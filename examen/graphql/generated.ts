import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
};

export type EditarCargo = {
  nombre?: InputMaybe<Scalars['String']['input']>;
};

export type EditarPersona = {
  Alias: Scalars['String']['input'];
  Apellidos: Scalars['String']['input'];
  Nombres: Scalars['String']['input'];
  RUN: Scalars['Int']['input'];
  Verificador: Scalars['String']['input'];
};

export type EntradaCargo = {
  nombre: Scalars['String']['input'];
};

export type EntradaPersona = {
  Alias: Scalars['String']['input'];
  Apellidos: Scalars['String']['input'];
  Nombres: Scalars['String']['input'];
  RUN: Scalars['Int']['input'];
  Verificador: Scalars['String']['input'];
};

export type Id_Cargo = {
  __typename?: 'Id_cargo';
  created_at: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  nombre: Scalars['String']['output'];
  persona_existente: Array<Personal_Existente>;
};

export type Mutation = {
  __typename?: 'Mutation';
  AddId_cargo: Id_Cargo;
  EditarId_cargo: Id_Cargo;
  EditarPersonal: Personal_Existente;
  EliminarId_cargo: Id_Cargo;
  EliminarPersonal: Personal_Existente;
  NuevoPersonal: Personal_Existente;
};


export type MutationAddId_CargoArgs = {
  EntradaCargo: EntradaCargo;
};


export type MutationEditarId_CargoArgs = {
  EditarCargo: EditarCargo;
  id: Scalars['String']['input'];
};


export type MutationEditarPersonalArgs = {
  EditarPersona: EditarPersona;
  id: Scalars['String']['input'];
};


export type MutationEliminarId_CargoArgs = {
  id: Scalars['String']['input'];
};


export type MutationEliminarPersonalArgs = {
  id: Scalars['String']['input'];
};


export type MutationNuevoPersonalArgs = {
  EntradaPersonas: EntradaPersona;
};

export type Query = {
  __typename?: 'Query';
  Id_cargo: Array<Id_Cargo>;
  Id_cargoByID: Array<Id_Cargo>;
  personalExistente: Array<Personal_Existente>;
  personalExistenteByID: Personal_Existente;
};


export type QueryId_CargoArgs = {
  where?: InputMaybe<WhereId_Cargo>;
};


export type QueryId_CargoByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryPersonalExistenteArgs = {
  where?: InputMaybe<WherePersona>;
};


export type QueryPersonalExistenteByIdArgs = {
  id: Scalars['String']['input'];
};

export type WherePersona = {
  Alias: Scalars['String']['input'];
  Apellidos: Scalars['String']['input'];
  Nombres: Scalars['String']['input'];
  RUN: Scalars['Int']['input'];
  Verificador: Scalars['String']['input'];
};

export type Personal_Existente = {
  __typename?: 'personal_existente';
  Alias?: Maybe<Scalars['String']['output']>;
  Apellidos?: Maybe<Scalars['String']['output']>;
  Fecha_modificacion?: Maybe<Scalars['DateTimeISO']['output']>;
  Id_cargo?: Maybe<Id_Cargo>;
  Nombres?: Maybe<Scalars['String']['output']>;
  RUN?: Maybe<Scalars['Int']['output']>;
  User_id?: Maybe<Scalars['ID']['output']>;
  Verificador?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['ID']['output'];
};

export type WhereId_Cargo = {
  nombre?: InputMaybe<Scalars['String']['input']>;
};

export type ListaPersonalExistenteQueryVariables = Exact<{ [key: string]: never; }>;


export type ListaPersonalExistenteQuery = { __typename?: 'Query', personalExistente: Array<{ __typename?: 'personal_existente', id: string, created_at?: any | null, Verificador?: string | null, User_id?: string | null, RUN?: number | null, Nombres?: string | null, Apellidos?: string | null, Fecha_modificacion?: any | null }> };

export const ListaPersonalExistenteDocument = gql`
    query ListaPersonalExistente {
  personalExistente {
    id
    created_at
    Verificador
    User_id
    RUN
    Nombres
    Apellidos
    Fecha_modificacion
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ListaPersonalExistenteGQL extends Apollo.Query<ListaPersonalExistenteQuery, ListaPersonalExistenteQueryVariables> {
    document = ListaPersonalExistenteDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
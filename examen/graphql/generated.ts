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
  Nombre?: InputMaybe<Scalars['String']['input']>;
};

export type EditarPersona = {
  Alias?: InputMaybe<Scalars['String']['input']>;
  Apellidos?: InputMaybe<Scalars['String']['input']>;
  Nombres?: InputMaybe<Scalars['String']['input']>;
  RUN?: InputMaybe<Scalars['Int']['input']>;
  Verificador?: InputMaybe<Scalars['String']['input']>;
};

export type EntradaCargo = {
  Nombre: Scalars['String']['input'];
};

export type EntradaPersona = {
  Alias: Scalars['String']['input'];
  Apellidos: Scalars['String']['input'];
  Nombres: Scalars['String']['input'];
  RUN?: InputMaybe<Scalars['Int']['input']>;
  Verificador: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  Addcargo: Cargo;
  EditarPersonal: Personal_Existente;
  Editarcargo: Cargo;
  EliminarPersonal: Personal_Existente;
  Eliminarcargo: Cargo;
  NuevoPersonal: Personal_Existente;
};


export type MutationAddcargoArgs = {
  EntradaCargo: EntradaCargo;
};


export type MutationEditarPersonalArgs = {
  EditarPersona: EditarPersona;
  id: Scalars['String']['input'];
};


export type MutationEditarcargoArgs = {
  EditarCargo: EditarCargo;
  id: Scalars['String']['input'];
};


export type MutationEliminarPersonalArgs = {
  id: Scalars['String']['input'];
};


export type MutationEliminarcargoArgs = {
  id: Scalars['String']['input'];
};


export type MutationNuevoPersonalArgs = {
  EntradaPersonas: EntradaPersona;
};

export type Query = {
  __typename?: 'Query';
  cargo: Array<Cargo>;
  cargoByID: Array<Cargo>;
  personalExistente: Array<Personal_Existente>;
  personalExistenteByID: Personal_Existente;
};


export type QueryCargoArgs = {
  where?: InputMaybe<Wherecargo>;
};


export type QueryCargoByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryPersonalExistenteArgs = {
  where?: InputMaybe<WherePersona>;
};


export type QueryPersonalExistenteByIdArgs = {
  id: Scalars['String']['input'];
};

export type WherePersona = {
  Alias?: InputMaybe<Scalars['String']['input']>;
  Apellidos?: InputMaybe<Scalars['String']['input']>;
  Nombres?: InputMaybe<Scalars['String']['input']>;
  RUN?: InputMaybe<Scalars['Int']['input']>;
  Verificador?: InputMaybe<Scalars['String']['input']>;
};

export type Cargo = {
  __typename?: 'cargo';
  Nombre?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['ID']['output'];
  persona_existente?: Maybe<Array<Personal_Existente>>;
};

export type Personal_Existente = {
  __typename?: 'personal_existente';
  Alias?: Maybe<Scalars['String']['output']>;
  Apellidos?: Maybe<Scalars['String']['output']>;
  Fecha_modificacion?: Maybe<Scalars['DateTimeISO']['output']>;
  Nombres?: Maybe<Scalars['String']['output']>;
  RUN?: Maybe<Scalars['Int']['output']>;
  User_id?: Maybe<Scalars['ID']['output']>;
  Verificador?: Maybe<Scalars['String']['output']>;
  cargo?: Maybe<Cargo>;
  created_at?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['ID']['output'];
};

export type Wherecargo = {
  Nombre?: InputMaybe<Scalars['String']['input']>;
};

export type ListaPersonalExistenteQueryVariables = Exact<{ [key: string]: never; }>;


export type ListaPersonalExistenteQuery = { __typename?: 'Query', personalExistente: Array<{ __typename?: 'personal_existente', id: string, created_at?: any | null, Verificador?: string | null, User_id?: string | null, RUN?: number | null, Nombres?: string | null, Apellidos?: string | null, Fecha_modificacion?: any | null }> };

export type NuevoPersonalExistenteMutationVariables = Exact<{
  EntradaPersonas?: InputMaybe<EntradaPersona>;
}>;


export type NuevoPersonalExistenteMutation = { __typename?: 'Mutation', NuevoPersonal: { __typename?: 'personal_existente', Alias?: string | null, Apellidos?: string | null, Fecha_modificacion?: any | null, Nombres?: string | null, RUN?: number | null, User_id?: string | null, Verificador?: string | null } };

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
export const NuevoPersonalExistenteDocument = gql`
    mutation NuevoPersonalExistente($EntradaPersonas: EntradaPersona = {Alias: "", Nombres: "", Apellidos: "", Verificador: "", RUN: 10}) {
  NuevoPersonal(EntradaPersonas: $EntradaPersonas) {
    Alias
    Apellidos
    Fecha_modificacion
    Nombres
    RUN
    User_id
    Verificador
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class NuevoPersonalExistenteGQL extends Apollo.Mutation<NuevoPersonalExistenteMutation, NuevoPersonalExistenteMutationVariables> {
    document = NuevoPersonalExistenteDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
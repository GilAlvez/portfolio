/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n\tquery Projects {\n\t\tprojects {\n\t\t\tcreatedAt\n\t\t\tid\n\t\t\tpublishedAt\n\t\t\tslug\n\t\t\ttitle\n\t\t\tupdatedAt\n\t\t\turl\n\t\t}\n\t}\n": types.ProjectsDocument,
};

export function graphql(source: "\n\tquery Projects {\n\t\tprojects {\n\t\t\tcreatedAt\n\t\t\tid\n\t\t\tpublishedAt\n\t\t\tslug\n\t\t\ttitle\n\t\t\tupdatedAt\n\t\t\turl\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery Projects {\n\t\tprojects {\n\t\t\tcreatedAt\n\t\t\tid\n\t\t\tpublishedAt\n\t\t\tslug\n\t\t\ttitle\n\t\t\tupdatedAt\n\t\t\turl\n\t\t}\n\t}\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
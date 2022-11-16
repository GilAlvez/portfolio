/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n\tquery OwnerSEO {\n\t\towners(first: 1) {\n\t\t\tseo {\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t\timage\n\t\t\t\tkeywords\n\t\t\t}\n\t\t}\n\t}\n": types.OwnerSeoDocument,
    "\n\tquery OwnerHeading {\n\t\towners(first: 1) {\n\t\t\tname\n\t\t\tsubtitle\n\t\t}\n\t}\n": types.OwnerHeadingDocument,
    "\n\tquery OwnerAbout {\n\t\towners(first: 1) {\n\t\t\timage {\n\t\t\t\turl\n\t\t\t}\n\t\t\tdescription {\n\t\t\t\thtml\n\t\t\t}\n\t\t}\n\t}\n": types.OwnerAboutDocument,
    "\n\tquery OwnerWorks {\n\t\towners {\n\t\t\tworks {\n\t\t\t\t... on Work {\n\t\t\t\t\tactive\n\t\t\t\t\tslug\n\t\t\t\t\trelease\n\t\t\t\t\ttitle\n\t\t\t\t\tresume\n\t\t\t\t\ttechs\n\t\t\t\t\ttags\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.OwnerWorksDocument,
    "\n\tquery OwnerContact {\n\t\towners(first: 1) {\n\t\t\tsocial {\n\t\t\t\temail\n\t\t\t\tfacebook\n\t\t\t\tgithub\n\t\t\t\tinstagram\n\t\t\t\tlinkedin\n\t\t\t\twhatsapp\n\t\t\t}\n\t\t}\n\t}\n": types.OwnerContactDocument,
    "\n\tquery WorkSlug($active: Boolean!) {\n\t\tworks(where: { active: $active }) {\n\t\t\tslug\n\t\t}\n\t}\n": types.WorkSlugDocument,
    "\n\tquery WorkSEO($slug: String!) {\n\t\twork(where: { slug: $slug }) {\n\t\t\tseo {\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t\timage\n\t\t\t\tkeywords\n\t\t\t}\n\t\t}\n\t}\n": types.WorkSeoDocument,
    "\n\tquery Work($slug: String!) {\n\t\twork(where: { slug: $slug }) {\n\t\t\tactive\n\t\t\tslug\n\t\t\ttitle\n\t\t\trelease\n\t\t\tresponsibilities\n\t\t\ttechs\n\t\t\tresume\n\t\t\tlink\n\t\t\tupdatedAt\n\t\t\tbanner {\n\t\t\t\turl\n\t\t\t}\n\t\t\tcontent {\n\t\t\t\thtml\n\t\t\t}\n\t\t\tseo {\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t\timage\n\t\t\t\tkeywords\n\t\t\t}\n\t\t}\n\t}\n": types.WorkDocument,
};

export function graphql(source: "\n\tquery OwnerSEO {\n\t\towners(first: 1) {\n\t\t\tseo {\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t\timage\n\t\t\t\tkeywords\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery OwnerSEO {\n\t\towners(first: 1) {\n\t\t\tseo {\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t\timage\n\t\t\t\tkeywords\n\t\t\t}\n\t\t}\n\t}\n"];
export function graphql(source: "\n\tquery OwnerHeading {\n\t\towners(first: 1) {\n\t\t\tname\n\t\t\tsubtitle\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery OwnerHeading {\n\t\towners(first: 1) {\n\t\t\tname\n\t\t\tsubtitle\n\t\t}\n\t}\n"];
export function graphql(source: "\n\tquery OwnerAbout {\n\t\towners(first: 1) {\n\t\t\timage {\n\t\t\t\turl\n\t\t\t}\n\t\t\tdescription {\n\t\t\t\thtml\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery OwnerAbout {\n\t\towners(first: 1) {\n\t\t\timage {\n\t\t\t\turl\n\t\t\t}\n\t\t\tdescription {\n\t\t\t\thtml\n\t\t\t}\n\t\t}\n\t}\n"];
export function graphql(source: "\n\tquery OwnerWorks {\n\t\towners {\n\t\t\tworks {\n\t\t\t\t... on Work {\n\t\t\t\t\tactive\n\t\t\t\t\tslug\n\t\t\t\t\trelease\n\t\t\t\t\ttitle\n\t\t\t\t\tresume\n\t\t\t\t\ttechs\n\t\t\t\t\ttags\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery OwnerWorks {\n\t\towners {\n\t\t\tworks {\n\t\t\t\t... on Work {\n\t\t\t\t\tactive\n\t\t\t\t\tslug\n\t\t\t\t\trelease\n\t\t\t\t\ttitle\n\t\t\t\t\tresume\n\t\t\t\t\ttechs\n\t\t\t\t\ttags\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
export function graphql(source: "\n\tquery OwnerContact {\n\t\towners(first: 1) {\n\t\t\tsocial {\n\t\t\t\temail\n\t\t\t\tfacebook\n\t\t\t\tgithub\n\t\t\t\tinstagram\n\t\t\t\tlinkedin\n\t\t\t\twhatsapp\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery OwnerContact {\n\t\towners(first: 1) {\n\t\t\tsocial {\n\t\t\t\temail\n\t\t\t\tfacebook\n\t\t\t\tgithub\n\t\t\t\tinstagram\n\t\t\t\tlinkedin\n\t\t\t\twhatsapp\n\t\t\t}\n\t\t}\n\t}\n"];
export function graphql(source: "\n\tquery WorkSlug($active: Boolean!) {\n\t\tworks(where: { active: $active }) {\n\t\t\tslug\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery WorkSlug($active: Boolean!) {\n\t\tworks(where: { active: $active }) {\n\t\t\tslug\n\t\t}\n\t}\n"];
export function graphql(source: "\n\tquery WorkSEO($slug: String!) {\n\t\twork(where: { slug: $slug }) {\n\t\t\tseo {\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t\timage\n\t\t\t\tkeywords\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery WorkSEO($slug: String!) {\n\t\twork(where: { slug: $slug }) {\n\t\t\tseo {\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t\timage\n\t\t\t\tkeywords\n\t\t\t}\n\t\t}\n\t}\n"];
export function graphql(source: "\n\tquery Work($slug: String!) {\n\t\twork(where: { slug: $slug }) {\n\t\t\tactive\n\t\t\tslug\n\t\t\ttitle\n\t\t\trelease\n\t\t\tresponsibilities\n\t\t\ttechs\n\t\t\tresume\n\t\t\tlink\n\t\t\tupdatedAt\n\t\t\tbanner {\n\t\t\t\turl\n\t\t\t}\n\t\t\tcontent {\n\t\t\t\thtml\n\t\t\t}\n\t\t\tseo {\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t\timage\n\t\t\t\tkeywords\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery Work($slug: String!) {\n\t\twork(where: { slug: $slug }) {\n\t\t\tactive\n\t\t\tslug\n\t\t\ttitle\n\t\t\trelease\n\t\t\tresponsibilities\n\t\t\ttechs\n\t\t\tresume\n\t\t\tlink\n\t\t\tupdatedAt\n\t\t\tbanner {\n\t\t\t\turl\n\t\t\t}\n\t\t\tcontent {\n\t\t\t\thtml\n\t\t\t}\n\t\t\tseo {\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t\timage\n\t\t\t\tkeywords\n\t\t\t}\n\t\t}\n\t}\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
export interface Atom <T> {
  $type: 'atom';
  value: T;
}

export interface Error <T> {
  $type: 'error';
  value: T;
}

export interface Reference {
  $type: 'ref';
  value: Path;
}

export type Key = string | number | boolean;
export type Path = Array<Key>;

export type KeySet = Key | Range | Array<Key | Range>;
export type PathSet = Array<KeySet>;

export interface InvalidPath {
  path: PathSet;
  invalidated: boolean;
}

export interface PathValue <T> {
  path: string | PathSet;
  value: T;
}

export interface JSONEnvelope <T> {
  json: T;
}

export interface JSONGraph {
  [key: string]: string | number | boolean | Atom<any> | Reference | JSONGraph;
}

export interface JSONGraphEnvelope {
  jsonGraph: JSONGraph;
  paths?: Array<PathSet>;
  invalidate?: Array<PathSet>;
}

export interface Props {
  $expires?: number;
}

export type Range = { from: number; to: number } | { from?: number; length: number };

export function ref <P extends Props> (path: string | PathSet, props?: P): Reference & P;
export function atom <T, P extends Props>  (value: T, props?: P): Atom<T> & P;
export function undefined (): Atom<void>;
export function error <T, P> (errorValue: T, props?: P): Error<T> & P;
export function pathValue <T> (path: string | PathSet, value: T): PathValue<T>;
export function pathInvalidation (path: string | PathSet): InvalidPath;

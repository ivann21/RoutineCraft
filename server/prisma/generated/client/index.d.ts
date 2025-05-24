
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Ejercicio
 * 
 */
export type Ejercicio = $Result.DefaultSelection<Prisma.$EjercicioPayload>
/**
 * Model Rutina
 * 
 */
export type Rutina = $Result.DefaultSelection<Prisma.$RutinaPayload>
/**
 * Model RutinaEjercicio
 * 
 */
export type RutinaEjercicio = $Result.DefaultSelection<Prisma.$RutinaEjercicioPayload>
/**
 * Model Calendario
 * 
 */
export type Calendario = $Result.DefaultSelection<Prisma.$CalendarioPayload>
/**
 * Model Entrenador
 * 
 */
export type Entrenador = $Result.DefaultSelection<Prisma.$EntrenadorPayload>
/**
 * Model Contratacion
 * 
 */
export type Contratacion = $Result.DefaultSelection<Prisma.$ContratacionPayload>
/**
 * Model Challenge
 * 
 */
export type Challenge = $Result.DefaultSelection<Prisma.$ChallengePayload>
/**
 * Model UserChallenge
 * 
 */
export type UserChallenge = $Result.DefaultSelection<Prisma.$UserChallengePayload>
/**
 * Model Achievement
 * 
 */
export type Achievement = $Result.DefaultSelection<Prisma.$AchievementPayload>
/**
 * Model UserAchievement
 * 
 */
export type UserAchievement = $Result.DefaultSelection<Prisma.$UserAchievementPayload>
/**
 * Model Comentario
 * 
 */
export type Comentario = $Result.DefaultSelection<Prisma.$ComentarioPayload>
/**
 * Model Metric
 * 
 */
export type Metric = $Result.DefaultSelection<Prisma.$MetricPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ejercicio`: Exposes CRUD operations for the **Ejercicio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ejercicios
    * const ejercicios = await prisma.ejercicio.findMany()
    * ```
    */
  get ejercicio(): Prisma.EjercicioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rutina`: Exposes CRUD operations for the **Rutina** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rutinas
    * const rutinas = await prisma.rutina.findMany()
    * ```
    */
  get rutina(): Prisma.RutinaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rutinaEjercicio`: Exposes CRUD operations for the **RutinaEjercicio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RutinaEjercicios
    * const rutinaEjercicios = await prisma.rutinaEjercicio.findMany()
    * ```
    */
  get rutinaEjercicio(): Prisma.RutinaEjercicioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.calendario`: Exposes CRUD operations for the **Calendario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Calendarios
    * const calendarios = await prisma.calendario.findMany()
    * ```
    */
  get calendario(): Prisma.CalendarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.entrenador`: Exposes CRUD operations for the **Entrenador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entrenadors
    * const entrenadors = await prisma.entrenador.findMany()
    * ```
    */
  get entrenador(): Prisma.EntrenadorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contratacion`: Exposes CRUD operations for the **Contratacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contratacions
    * const contratacions = await prisma.contratacion.findMany()
    * ```
    */
  get contratacion(): Prisma.ContratacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.challenge`: Exposes CRUD operations for the **Challenge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Challenges
    * const challenges = await prisma.challenge.findMany()
    * ```
    */
  get challenge(): Prisma.ChallengeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userChallenge`: Exposes CRUD operations for the **UserChallenge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserChallenges
    * const userChallenges = await prisma.userChallenge.findMany()
    * ```
    */
  get userChallenge(): Prisma.UserChallengeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.achievement`: Exposes CRUD operations for the **Achievement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Achievements
    * const achievements = await prisma.achievement.findMany()
    * ```
    */
  get achievement(): Prisma.AchievementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAchievement`: Exposes CRUD operations for the **UserAchievement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAchievements
    * const userAchievements = await prisma.userAchievement.findMany()
    * ```
    */
  get userAchievement(): Prisma.UserAchievementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comentario`: Exposes CRUD operations for the **Comentario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comentarios
    * const comentarios = await prisma.comentario.findMany()
    * ```
    */
  get comentario(): Prisma.ComentarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metric`: Exposes CRUD operations for the **Metric** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Metrics
    * const metrics = await prisma.metric.findMany()
    * ```
    */
  get metric(): Prisma.MetricDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Ejercicio: 'Ejercicio',
    Rutina: 'Rutina',
    RutinaEjercicio: 'RutinaEjercicio',
    Calendario: 'Calendario',
    Entrenador: 'Entrenador',
    Contratacion: 'Contratacion',
    Challenge: 'Challenge',
    UserChallenge: 'UserChallenge',
    Achievement: 'Achievement',
    UserAchievement: 'UserAchievement',
    Comentario: 'Comentario',
    Metric: 'Metric'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "ejercicio" | "rutina" | "rutinaEjercicio" | "calendario" | "entrenador" | "contratacion" | "challenge" | "userChallenge" | "achievement" | "userAchievement" | "comentario" | "metric"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Ejercicio: {
        payload: Prisma.$EjercicioPayload<ExtArgs>
        fields: Prisma.EjercicioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EjercicioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EjercicioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>
          }
          findFirst: {
            args: Prisma.EjercicioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EjercicioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>
          }
          findMany: {
            args: Prisma.EjercicioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>[]
          }
          create: {
            args: Prisma.EjercicioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>
          }
          createMany: {
            args: Prisma.EjercicioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EjercicioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>[]
          }
          delete: {
            args: Prisma.EjercicioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>
          }
          update: {
            args: Prisma.EjercicioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>
          }
          deleteMany: {
            args: Prisma.EjercicioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EjercicioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EjercicioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>[]
          }
          upsert: {
            args: Prisma.EjercicioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>
          }
          aggregate: {
            args: Prisma.EjercicioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEjercicio>
          }
          groupBy: {
            args: Prisma.EjercicioGroupByArgs<ExtArgs>
            result: $Utils.Optional<EjercicioGroupByOutputType>[]
          }
          count: {
            args: Prisma.EjercicioCountArgs<ExtArgs>
            result: $Utils.Optional<EjercicioCountAggregateOutputType> | number
          }
        }
      }
      Rutina: {
        payload: Prisma.$RutinaPayload<ExtArgs>
        fields: Prisma.RutinaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RutinaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RutinaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>
          }
          findFirst: {
            args: Prisma.RutinaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RutinaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>
          }
          findMany: {
            args: Prisma.RutinaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>[]
          }
          create: {
            args: Prisma.RutinaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>
          }
          createMany: {
            args: Prisma.RutinaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RutinaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>[]
          }
          delete: {
            args: Prisma.RutinaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>
          }
          update: {
            args: Prisma.RutinaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>
          }
          deleteMany: {
            args: Prisma.RutinaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RutinaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RutinaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>[]
          }
          upsert: {
            args: Prisma.RutinaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>
          }
          aggregate: {
            args: Prisma.RutinaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRutina>
          }
          groupBy: {
            args: Prisma.RutinaGroupByArgs<ExtArgs>
            result: $Utils.Optional<RutinaGroupByOutputType>[]
          }
          count: {
            args: Prisma.RutinaCountArgs<ExtArgs>
            result: $Utils.Optional<RutinaCountAggregateOutputType> | number
          }
        }
      }
      RutinaEjercicio: {
        payload: Prisma.$RutinaEjercicioPayload<ExtArgs>
        fields: Prisma.RutinaEjercicioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RutinaEjercicioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RutinaEjercicioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload>
          }
          findFirst: {
            args: Prisma.RutinaEjercicioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RutinaEjercicioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload>
          }
          findMany: {
            args: Prisma.RutinaEjercicioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload>[]
          }
          create: {
            args: Prisma.RutinaEjercicioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload>
          }
          createMany: {
            args: Prisma.RutinaEjercicioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RutinaEjercicioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload>[]
          }
          delete: {
            args: Prisma.RutinaEjercicioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload>
          }
          update: {
            args: Prisma.RutinaEjercicioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload>
          }
          deleteMany: {
            args: Prisma.RutinaEjercicioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RutinaEjercicioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RutinaEjercicioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload>[]
          }
          upsert: {
            args: Prisma.RutinaEjercicioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload>
          }
          aggregate: {
            args: Prisma.RutinaEjercicioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRutinaEjercicio>
          }
          groupBy: {
            args: Prisma.RutinaEjercicioGroupByArgs<ExtArgs>
            result: $Utils.Optional<RutinaEjercicioGroupByOutputType>[]
          }
          count: {
            args: Prisma.RutinaEjercicioCountArgs<ExtArgs>
            result: $Utils.Optional<RutinaEjercicioCountAggregateOutputType> | number
          }
        }
      }
      Calendario: {
        payload: Prisma.$CalendarioPayload<ExtArgs>
        fields: Prisma.CalendarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CalendarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CalendarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarioPayload>
          }
          findFirst: {
            args: Prisma.CalendarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CalendarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarioPayload>
          }
          findMany: {
            args: Prisma.CalendarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarioPayload>[]
          }
          create: {
            args: Prisma.CalendarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarioPayload>
          }
          createMany: {
            args: Prisma.CalendarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CalendarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarioPayload>[]
          }
          delete: {
            args: Prisma.CalendarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarioPayload>
          }
          update: {
            args: Prisma.CalendarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarioPayload>
          }
          deleteMany: {
            args: Prisma.CalendarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CalendarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CalendarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarioPayload>[]
          }
          upsert: {
            args: Prisma.CalendarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarioPayload>
          }
          aggregate: {
            args: Prisma.CalendarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCalendario>
          }
          groupBy: {
            args: Prisma.CalendarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<CalendarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.CalendarioCountArgs<ExtArgs>
            result: $Utils.Optional<CalendarioCountAggregateOutputType> | number
          }
        }
      }
      Entrenador: {
        payload: Prisma.$EntrenadorPayload<ExtArgs>
        fields: Prisma.EntrenadorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntrenadorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntrenadorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadorPayload>
          }
          findFirst: {
            args: Prisma.EntrenadorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntrenadorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadorPayload>
          }
          findMany: {
            args: Prisma.EntrenadorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadorPayload>[]
          }
          create: {
            args: Prisma.EntrenadorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadorPayload>
          }
          createMany: {
            args: Prisma.EntrenadorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EntrenadorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadorPayload>[]
          }
          delete: {
            args: Prisma.EntrenadorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadorPayload>
          }
          update: {
            args: Prisma.EntrenadorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadorPayload>
          }
          deleteMany: {
            args: Prisma.EntrenadorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EntrenadorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EntrenadorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadorPayload>[]
          }
          upsert: {
            args: Prisma.EntrenadorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadorPayload>
          }
          aggregate: {
            args: Prisma.EntrenadorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntrenador>
          }
          groupBy: {
            args: Prisma.EntrenadorGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntrenadorGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntrenadorCountArgs<ExtArgs>
            result: $Utils.Optional<EntrenadorCountAggregateOutputType> | number
          }
        }
      }
      Contratacion: {
        payload: Prisma.$ContratacionPayload<ExtArgs>
        fields: Prisma.ContratacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContratacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContratacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratacionPayload>
          }
          findFirst: {
            args: Prisma.ContratacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContratacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratacionPayload>
          }
          findMany: {
            args: Prisma.ContratacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratacionPayload>[]
          }
          create: {
            args: Prisma.ContratacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratacionPayload>
          }
          createMany: {
            args: Prisma.ContratacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContratacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratacionPayload>[]
          }
          delete: {
            args: Prisma.ContratacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratacionPayload>
          }
          update: {
            args: Prisma.ContratacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratacionPayload>
          }
          deleteMany: {
            args: Prisma.ContratacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContratacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContratacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratacionPayload>[]
          }
          upsert: {
            args: Prisma.ContratacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratacionPayload>
          }
          aggregate: {
            args: Prisma.ContratacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContratacion>
          }
          groupBy: {
            args: Prisma.ContratacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContratacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContratacionCountArgs<ExtArgs>
            result: $Utils.Optional<ContratacionCountAggregateOutputType> | number
          }
        }
      }
      Challenge: {
        payload: Prisma.$ChallengePayload<ExtArgs>
        fields: Prisma.ChallengeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChallengeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChallengeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          findFirst: {
            args: Prisma.ChallengeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChallengeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          findMany: {
            args: Prisma.ChallengeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>[]
          }
          create: {
            args: Prisma.ChallengeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          createMany: {
            args: Prisma.ChallengeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChallengeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>[]
          }
          delete: {
            args: Prisma.ChallengeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          update: {
            args: Prisma.ChallengeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          deleteMany: {
            args: Prisma.ChallengeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChallengeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChallengeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>[]
          }
          upsert: {
            args: Prisma.ChallengeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          aggregate: {
            args: Prisma.ChallengeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChallenge>
          }
          groupBy: {
            args: Prisma.ChallengeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChallengeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChallengeCountArgs<ExtArgs>
            result: $Utils.Optional<ChallengeCountAggregateOutputType> | number
          }
        }
      }
      UserChallenge: {
        payload: Prisma.$UserChallengePayload<ExtArgs>
        fields: Prisma.UserChallengeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserChallengeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserChallengeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>
          }
          findFirst: {
            args: Prisma.UserChallengeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserChallengeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>
          }
          findMany: {
            args: Prisma.UserChallengeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>[]
          }
          create: {
            args: Prisma.UserChallengeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>
          }
          createMany: {
            args: Prisma.UserChallengeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserChallengeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>[]
          }
          delete: {
            args: Prisma.UserChallengeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>
          }
          update: {
            args: Prisma.UserChallengeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>
          }
          deleteMany: {
            args: Prisma.UserChallengeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserChallengeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserChallengeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>[]
          }
          upsert: {
            args: Prisma.UserChallengeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChallengePayload>
          }
          aggregate: {
            args: Prisma.UserChallengeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserChallenge>
          }
          groupBy: {
            args: Prisma.UserChallengeGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserChallengeGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserChallengeCountArgs<ExtArgs>
            result: $Utils.Optional<UserChallengeCountAggregateOutputType> | number
          }
        }
      }
      Achievement: {
        payload: Prisma.$AchievementPayload<ExtArgs>
        fields: Prisma.AchievementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AchievementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AchievementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          findFirst: {
            args: Prisma.AchievementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AchievementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          findMany: {
            args: Prisma.AchievementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          create: {
            args: Prisma.AchievementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          createMany: {
            args: Prisma.AchievementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AchievementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          delete: {
            args: Prisma.AchievementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          update: {
            args: Prisma.AchievementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          deleteMany: {
            args: Prisma.AchievementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AchievementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AchievementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          upsert: {
            args: Prisma.AchievementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          aggregate: {
            args: Prisma.AchievementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAchievement>
          }
          groupBy: {
            args: Prisma.AchievementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AchievementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AchievementCountArgs<ExtArgs>
            result: $Utils.Optional<AchievementCountAggregateOutputType> | number
          }
        }
      }
      UserAchievement: {
        payload: Prisma.$UserAchievementPayload<ExtArgs>
        fields: Prisma.UserAchievementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAchievementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAchievementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          findFirst: {
            args: Prisma.UserAchievementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAchievementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          findMany: {
            args: Prisma.UserAchievementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>[]
          }
          create: {
            args: Prisma.UserAchievementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          createMany: {
            args: Prisma.UserAchievementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAchievementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>[]
          }
          delete: {
            args: Prisma.UserAchievementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          update: {
            args: Prisma.UserAchievementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          deleteMany: {
            args: Prisma.UserAchievementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAchievementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserAchievementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>[]
          }
          upsert: {
            args: Prisma.UserAchievementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          aggregate: {
            args: Prisma.UserAchievementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAchievement>
          }
          groupBy: {
            args: Prisma.UserAchievementGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAchievementGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAchievementCountArgs<ExtArgs>
            result: $Utils.Optional<UserAchievementCountAggregateOutputType> | number
          }
        }
      }
      Comentario: {
        payload: Prisma.$ComentarioPayload<ExtArgs>
        fields: Prisma.ComentarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComentarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComentarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          findFirst: {
            args: Prisma.ComentarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComentarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          findMany: {
            args: Prisma.ComentarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>[]
          }
          create: {
            args: Prisma.ComentarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          createMany: {
            args: Prisma.ComentarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComentarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>[]
          }
          delete: {
            args: Prisma.ComentarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          update: {
            args: Prisma.ComentarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          deleteMany: {
            args: Prisma.ComentarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComentarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComentarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>[]
          }
          upsert: {
            args: Prisma.ComentarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          aggregate: {
            args: Prisma.ComentarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComentario>
          }
          groupBy: {
            args: Prisma.ComentarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComentarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComentarioCountArgs<ExtArgs>
            result: $Utils.Optional<ComentarioCountAggregateOutputType> | number
          }
        }
      }
      Metric: {
        payload: Prisma.$MetricPayload<ExtArgs>
        fields: Prisma.MetricFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetricFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetricFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          findFirst: {
            args: Prisma.MetricFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetricFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          findMany: {
            args: Prisma.MetricFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>[]
          }
          create: {
            args: Prisma.MetricCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          createMany: {
            args: Prisma.MetricCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetricCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>[]
          }
          delete: {
            args: Prisma.MetricDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          update: {
            args: Prisma.MetricUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          deleteMany: {
            args: Prisma.MetricDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetricUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MetricUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>[]
          }
          upsert: {
            args: Prisma.MetricUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          aggregate: {
            args: Prisma.MetricAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetric>
          }
          groupBy: {
            args: Prisma.MetricGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetricGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetricCountArgs<ExtArgs>
            result: $Utils.Optional<MetricCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    ejercicio?: EjercicioOmit
    rutina?: RutinaOmit
    rutinaEjercicio?: RutinaEjercicioOmit
    calendario?: CalendarioOmit
    entrenador?: EntrenadorOmit
    contratacion?: ContratacionOmit
    challenge?: ChallengeOmit
    userChallenge?: UserChallengeOmit
    achievement?: AchievementOmit
    userAchievement?: UserAchievementOmit
    comentario?: ComentarioOmit
    metric?: MetricOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    rutinas: number
    calendario: number
    contrataciones: number
    userChallenges: number
    userAchievements: number
    comentarios: number
    metrics: number
    ejercicios: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutinas?: boolean | UsuarioCountOutputTypeCountRutinasArgs
    calendario?: boolean | UsuarioCountOutputTypeCountCalendarioArgs
    contrataciones?: boolean | UsuarioCountOutputTypeCountContratacionesArgs
    userChallenges?: boolean | UsuarioCountOutputTypeCountUserChallengesArgs
    userAchievements?: boolean | UsuarioCountOutputTypeCountUserAchievementsArgs
    comentarios?: boolean | UsuarioCountOutputTypeCountComentariosArgs
    metrics?: boolean | UsuarioCountOutputTypeCountMetricsArgs
    ejercicios?: boolean | UsuarioCountOutputTypeCountEjerciciosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountRutinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RutinaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountCalendarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalendarioWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountContratacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContratacionWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountUserChallengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserChallengeWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountUserAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAchievementWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountComentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetricWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountEjerciciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EjercicioWhereInput
  }


  /**
   * Count Type EjercicioCountOutputType
   */

  export type EjercicioCountOutputType = {
    rutinaEjercicio: number
  }

  export type EjercicioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutinaEjercicio?: boolean | EjercicioCountOutputTypeCountRutinaEjercicioArgs
  }

  // Custom InputTypes
  /**
   * EjercicioCountOutputType without action
   */
  export type EjercicioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EjercicioCountOutputType
     */
    select?: EjercicioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EjercicioCountOutputType without action
   */
  export type EjercicioCountOutputTypeCountRutinaEjercicioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RutinaEjercicioWhereInput
  }


  /**
   * Count Type RutinaCountOutputType
   */

  export type RutinaCountOutputType = {
    ejercicios: number
    calendario: number
    comentarios: number
  }

  export type RutinaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ejercicios?: boolean | RutinaCountOutputTypeCountEjerciciosArgs
    calendario?: boolean | RutinaCountOutputTypeCountCalendarioArgs
    comentarios?: boolean | RutinaCountOutputTypeCountComentariosArgs
  }

  // Custom InputTypes
  /**
   * RutinaCountOutputType without action
   */
  export type RutinaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaCountOutputType
     */
    select?: RutinaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RutinaCountOutputType without action
   */
  export type RutinaCountOutputTypeCountEjerciciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RutinaEjercicioWhereInput
  }

  /**
   * RutinaCountOutputType without action
   */
  export type RutinaCountOutputTypeCountCalendarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalendarioWhereInput
  }

  /**
   * RutinaCountOutputType without action
   */
  export type RutinaCountOutputTypeCountComentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
  }


  /**
   * Count Type EntrenadorCountOutputType
   */

  export type EntrenadorCountOutputType = {
    contrataciones: number
  }

  export type EntrenadorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contrataciones?: boolean | EntrenadorCountOutputTypeCountContratacionesArgs
  }

  // Custom InputTypes
  /**
   * EntrenadorCountOutputType without action
   */
  export type EntrenadorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntrenadorCountOutputType
     */
    select?: EntrenadorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EntrenadorCountOutputType without action
   */
  export type EntrenadorCountOutputTypeCountContratacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContratacionWhereInput
  }


  /**
   * Count Type ChallengeCountOutputType
   */

  export type ChallengeCountOutputType = {
    userChallenges: number
  }

  export type ChallengeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userChallenges?: boolean | ChallengeCountOutputTypeCountUserChallengesArgs
  }

  // Custom InputTypes
  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeCountOutputType
     */
    select?: ChallengeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeCountUserChallengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserChallengeWhereInput
  }


  /**
   * Count Type AchievementCountOutputType
   */

  export type AchievementCountOutputType = {
    userAchievements: number
  }

  export type AchievementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userAchievements?: boolean | AchievementCountOutputTypeCountUserAchievementsArgs
  }

  // Custom InputTypes
  /**
   * AchievementCountOutputType without action
   */
  export type AchievementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievementCountOutputType
     */
    select?: AchievementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AchievementCountOutputType without action
   */
  export type AchievementCountOutputTypeCountUserAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAchievementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    contraseña: string | null
    fecha_registro: Date | null
    fotoUrl: string | null
    plan: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    contraseña: string | null
    fecha_registro: Date | null
    fotoUrl: string | null
    plan: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    contraseña: number
    fecha_registro: number
    fotoUrl: number
    plan: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    contraseña?: true
    fecha_registro?: true
    fotoUrl?: true
    plan?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    contraseña?: true
    fecha_registro?: true
    fotoUrl?: true
    plan?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    contraseña?: true
    fecha_registro?: true
    fotoUrl?: true
    plan?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nombre: string
    email: string
    contraseña: string
    fecha_registro: Date
    fotoUrl: string | null
    plan: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    contraseña?: boolean
    fecha_registro?: boolean
    fotoUrl?: boolean
    plan?: boolean
    rutinas?: boolean | Usuario$rutinasArgs<ExtArgs>
    calendario?: boolean | Usuario$calendarioArgs<ExtArgs>
    contrataciones?: boolean | Usuario$contratacionesArgs<ExtArgs>
    userChallenges?: boolean | Usuario$userChallengesArgs<ExtArgs>
    userAchievements?: boolean | Usuario$userAchievementsArgs<ExtArgs>
    comentarios?: boolean | Usuario$comentariosArgs<ExtArgs>
    metrics?: boolean | Usuario$metricsArgs<ExtArgs>
    ejercicios?: boolean | Usuario$ejerciciosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    contraseña?: boolean
    fecha_registro?: boolean
    fotoUrl?: boolean
    plan?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    contraseña?: boolean
    fecha_registro?: boolean
    fotoUrl?: boolean
    plan?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    contraseña?: boolean
    fecha_registro?: boolean
    fotoUrl?: boolean
    plan?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "email" | "contraseña" | "fecha_registro" | "fotoUrl" | "plan", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutinas?: boolean | Usuario$rutinasArgs<ExtArgs>
    calendario?: boolean | Usuario$calendarioArgs<ExtArgs>
    contrataciones?: boolean | Usuario$contratacionesArgs<ExtArgs>
    userChallenges?: boolean | Usuario$userChallengesArgs<ExtArgs>
    userAchievements?: boolean | Usuario$userAchievementsArgs<ExtArgs>
    comentarios?: boolean | Usuario$comentariosArgs<ExtArgs>
    metrics?: boolean | Usuario$metricsArgs<ExtArgs>
    ejercicios?: boolean | Usuario$ejerciciosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      rutinas: Prisma.$RutinaPayload<ExtArgs>[]
      calendario: Prisma.$CalendarioPayload<ExtArgs>[]
      contrataciones: Prisma.$ContratacionPayload<ExtArgs>[]
      userChallenges: Prisma.$UserChallengePayload<ExtArgs>[]
      userAchievements: Prisma.$UserAchievementPayload<ExtArgs>[]
      comentarios: Prisma.$ComentarioPayload<ExtArgs>[]
      metrics: Prisma.$MetricPayload<ExtArgs>[]
      ejercicios: Prisma.$EjercicioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      email: string
      contraseña: string
      fecha_registro: Date
      fotoUrl: string | null
      plan: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rutinas<T extends Usuario$rutinasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$rutinasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    calendario<T extends Usuario$calendarioArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$calendarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contrataciones<T extends Usuario$contratacionesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$contratacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContratacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userChallenges<T extends Usuario$userChallengesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$userChallengesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userAchievements<T extends Usuario$userAchievementsArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$userAchievementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comentarios<T extends Usuario$comentariosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$comentariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    metrics<T extends Usuario$metricsArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$metricsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ejercicios<T extends Usuario$ejerciciosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$ejerciciosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly contraseña: FieldRef<"Usuario", 'String'>
    readonly fecha_registro: FieldRef<"Usuario", 'DateTime'>
    readonly fotoUrl: FieldRef<"Usuario", 'String'>
    readonly plan: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.rutinas
   */
  export type Usuario$rutinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    where?: RutinaWhereInput
    orderBy?: RutinaOrderByWithRelationInput | RutinaOrderByWithRelationInput[]
    cursor?: RutinaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RutinaScalarFieldEnum | RutinaScalarFieldEnum[]
  }

  /**
   * Usuario.calendario
   */
  export type Usuario$calendarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendario
     */
    select?: CalendarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendario
     */
    omit?: CalendarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarioInclude<ExtArgs> | null
    where?: CalendarioWhereInput
    orderBy?: CalendarioOrderByWithRelationInput | CalendarioOrderByWithRelationInput[]
    cursor?: CalendarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CalendarioScalarFieldEnum | CalendarioScalarFieldEnum[]
  }

  /**
   * Usuario.contrataciones
   */
  export type Usuario$contratacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratacion
     */
    select?: ContratacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contratacion
     */
    omit?: ContratacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratacionInclude<ExtArgs> | null
    where?: ContratacionWhereInput
    orderBy?: ContratacionOrderByWithRelationInput | ContratacionOrderByWithRelationInput[]
    cursor?: ContratacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContratacionScalarFieldEnum | ContratacionScalarFieldEnum[]
  }

  /**
   * Usuario.userChallenges
   */
  export type Usuario$userChallengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    where?: UserChallengeWhereInput
    orderBy?: UserChallengeOrderByWithRelationInput | UserChallengeOrderByWithRelationInput[]
    cursor?: UserChallengeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserChallengeScalarFieldEnum | UserChallengeScalarFieldEnum[]
  }

  /**
   * Usuario.userAchievements
   */
  export type Usuario$userAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    where?: UserAchievementWhereInput
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    cursor?: UserAchievementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * Usuario.comentarios
   */
  export type Usuario$comentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    cursor?: ComentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Usuario.metrics
   */
  export type Usuario$metricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    where?: MetricWhereInput
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    cursor?: MetricWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * Usuario.ejercicios
   */
  export type Usuario$ejerciciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    where?: EjercicioWhereInput
    orderBy?: EjercicioOrderByWithRelationInput | EjercicioOrderByWithRelationInput[]
    cursor?: EjercicioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EjercicioScalarFieldEnum | EjercicioScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Ejercicio
   */

  export type AggregateEjercicio = {
    _count: EjercicioCountAggregateOutputType | null
    _avg: EjercicioAvgAggregateOutputType | null
    _sum: EjercicioSumAggregateOutputType | null
    _min: EjercicioMinAggregateOutputType | null
    _max: EjercicioMaxAggregateOutputType | null
  }

  export type EjercicioAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type EjercicioSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type EjercicioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    categoria: string | null
    imagenUrl: string | null
    esComun: boolean | null
    usuarioId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EjercicioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    categoria: string | null
    imagenUrl: string | null
    esComun: boolean | null
    usuarioId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EjercicioCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    categoria: number
    imagenUrl: number
    esComun: number
    usuarioId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EjercicioAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type EjercicioSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type EjercicioMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    categoria?: true
    imagenUrl?: true
    esComun?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EjercicioMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    categoria?: true
    imagenUrl?: true
    esComun?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EjercicioCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    categoria?: true
    imagenUrl?: true
    esComun?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EjercicioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ejercicio to aggregate.
     */
    where?: EjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ejercicios to fetch.
     */
    orderBy?: EjercicioOrderByWithRelationInput | EjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ejercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ejercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ejercicios
    **/
    _count?: true | EjercicioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EjercicioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EjercicioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EjercicioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EjercicioMaxAggregateInputType
  }

  export type GetEjercicioAggregateType<T extends EjercicioAggregateArgs> = {
        [P in keyof T & keyof AggregateEjercicio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEjercicio[P]>
      : GetScalarType<T[P], AggregateEjercicio[P]>
  }




  export type EjercicioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EjercicioWhereInput
    orderBy?: EjercicioOrderByWithAggregationInput | EjercicioOrderByWithAggregationInput[]
    by: EjercicioScalarFieldEnum[] | EjercicioScalarFieldEnum
    having?: EjercicioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EjercicioCountAggregateInputType | true
    _avg?: EjercicioAvgAggregateInputType
    _sum?: EjercicioSumAggregateInputType
    _min?: EjercicioMinAggregateInputType
    _max?: EjercicioMaxAggregateInputType
  }

  export type EjercicioGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string | null
    categoria: string | null
    imagenUrl: string | null
    esComun: boolean
    usuarioId: number | null
    createdAt: Date
    updatedAt: Date
    _count: EjercicioCountAggregateOutputType | null
    _avg: EjercicioAvgAggregateOutputType | null
    _sum: EjercicioSumAggregateOutputType | null
    _min: EjercicioMinAggregateOutputType | null
    _max: EjercicioMaxAggregateOutputType | null
  }

  type GetEjercicioGroupByPayload<T extends EjercicioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EjercicioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EjercicioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EjercicioGroupByOutputType[P]>
            : GetScalarType<T[P], EjercicioGroupByOutputType[P]>
        }
      >
    >


  export type EjercicioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    categoria?: boolean
    imagenUrl?: boolean
    esComun?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | Ejercicio$usuarioArgs<ExtArgs>
    rutinaEjercicio?: boolean | Ejercicio$rutinaEjercicioArgs<ExtArgs>
    _count?: boolean | EjercicioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ejercicio"]>

  export type EjercicioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    categoria?: boolean
    imagenUrl?: boolean
    esComun?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | Ejercicio$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["ejercicio"]>

  export type EjercicioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    categoria?: boolean
    imagenUrl?: boolean
    esComun?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | Ejercicio$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["ejercicio"]>

  export type EjercicioSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    categoria?: boolean
    imagenUrl?: boolean
    esComun?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EjercicioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "categoria" | "imagenUrl" | "esComun" | "usuarioId" | "createdAt" | "updatedAt", ExtArgs["result"]["ejercicio"]>
  export type EjercicioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Ejercicio$usuarioArgs<ExtArgs>
    rutinaEjercicio?: boolean | Ejercicio$rutinaEjercicioArgs<ExtArgs>
    _count?: boolean | EjercicioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EjercicioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Ejercicio$usuarioArgs<ExtArgs>
  }
  export type EjercicioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Ejercicio$usuarioArgs<ExtArgs>
  }

  export type $EjercicioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ejercicio"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs> | null
      rutinaEjercicio: Prisma.$RutinaEjercicioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string | null
      categoria: string | null
      imagenUrl: string | null
      esComun: boolean
      usuarioId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ejercicio"]>
    composites: {}
  }

  type EjercicioGetPayload<S extends boolean | null | undefined | EjercicioDefaultArgs> = $Result.GetResult<Prisma.$EjercicioPayload, S>

  type EjercicioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EjercicioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EjercicioCountAggregateInputType | true
    }

  export interface EjercicioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ejercicio'], meta: { name: 'Ejercicio' } }
    /**
     * Find zero or one Ejercicio that matches the filter.
     * @param {EjercicioFindUniqueArgs} args - Arguments to find a Ejercicio
     * @example
     * // Get one Ejercicio
     * const ejercicio = await prisma.ejercicio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EjercicioFindUniqueArgs>(args: SelectSubset<T, EjercicioFindUniqueArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ejercicio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EjercicioFindUniqueOrThrowArgs} args - Arguments to find a Ejercicio
     * @example
     * // Get one Ejercicio
     * const ejercicio = await prisma.ejercicio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EjercicioFindUniqueOrThrowArgs>(args: SelectSubset<T, EjercicioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ejercicio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioFindFirstArgs} args - Arguments to find a Ejercicio
     * @example
     * // Get one Ejercicio
     * const ejercicio = await prisma.ejercicio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EjercicioFindFirstArgs>(args?: SelectSubset<T, EjercicioFindFirstArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ejercicio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioFindFirstOrThrowArgs} args - Arguments to find a Ejercicio
     * @example
     * // Get one Ejercicio
     * const ejercicio = await prisma.ejercicio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EjercicioFindFirstOrThrowArgs>(args?: SelectSubset<T, EjercicioFindFirstOrThrowArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ejercicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ejercicios
     * const ejercicios = await prisma.ejercicio.findMany()
     * 
     * // Get first 10 Ejercicios
     * const ejercicios = await prisma.ejercicio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ejercicioWithIdOnly = await prisma.ejercicio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EjercicioFindManyArgs>(args?: SelectSubset<T, EjercicioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ejercicio.
     * @param {EjercicioCreateArgs} args - Arguments to create a Ejercicio.
     * @example
     * // Create one Ejercicio
     * const Ejercicio = await prisma.ejercicio.create({
     *   data: {
     *     // ... data to create a Ejercicio
     *   }
     * })
     * 
     */
    create<T extends EjercicioCreateArgs>(args: SelectSubset<T, EjercicioCreateArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ejercicios.
     * @param {EjercicioCreateManyArgs} args - Arguments to create many Ejercicios.
     * @example
     * // Create many Ejercicios
     * const ejercicio = await prisma.ejercicio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EjercicioCreateManyArgs>(args?: SelectSubset<T, EjercicioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ejercicios and returns the data saved in the database.
     * @param {EjercicioCreateManyAndReturnArgs} args - Arguments to create many Ejercicios.
     * @example
     * // Create many Ejercicios
     * const ejercicio = await prisma.ejercicio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ejercicios and only return the `id`
     * const ejercicioWithIdOnly = await prisma.ejercicio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EjercicioCreateManyAndReturnArgs>(args?: SelectSubset<T, EjercicioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ejercicio.
     * @param {EjercicioDeleteArgs} args - Arguments to delete one Ejercicio.
     * @example
     * // Delete one Ejercicio
     * const Ejercicio = await prisma.ejercicio.delete({
     *   where: {
     *     // ... filter to delete one Ejercicio
     *   }
     * })
     * 
     */
    delete<T extends EjercicioDeleteArgs>(args: SelectSubset<T, EjercicioDeleteArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ejercicio.
     * @param {EjercicioUpdateArgs} args - Arguments to update one Ejercicio.
     * @example
     * // Update one Ejercicio
     * const ejercicio = await prisma.ejercicio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EjercicioUpdateArgs>(args: SelectSubset<T, EjercicioUpdateArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ejercicios.
     * @param {EjercicioDeleteManyArgs} args - Arguments to filter Ejercicios to delete.
     * @example
     * // Delete a few Ejercicios
     * const { count } = await prisma.ejercicio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EjercicioDeleteManyArgs>(args?: SelectSubset<T, EjercicioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ejercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ejercicios
     * const ejercicio = await prisma.ejercicio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EjercicioUpdateManyArgs>(args: SelectSubset<T, EjercicioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ejercicios and returns the data updated in the database.
     * @param {EjercicioUpdateManyAndReturnArgs} args - Arguments to update many Ejercicios.
     * @example
     * // Update many Ejercicios
     * const ejercicio = await prisma.ejercicio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ejercicios and only return the `id`
     * const ejercicioWithIdOnly = await prisma.ejercicio.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EjercicioUpdateManyAndReturnArgs>(args: SelectSubset<T, EjercicioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ejercicio.
     * @param {EjercicioUpsertArgs} args - Arguments to update or create a Ejercicio.
     * @example
     * // Update or create a Ejercicio
     * const ejercicio = await prisma.ejercicio.upsert({
     *   create: {
     *     // ... data to create a Ejercicio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ejercicio we want to update
     *   }
     * })
     */
    upsert<T extends EjercicioUpsertArgs>(args: SelectSubset<T, EjercicioUpsertArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ejercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioCountArgs} args - Arguments to filter Ejercicios to count.
     * @example
     * // Count the number of Ejercicios
     * const count = await prisma.ejercicio.count({
     *   where: {
     *     // ... the filter for the Ejercicios we want to count
     *   }
     * })
    **/
    count<T extends EjercicioCountArgs>(
      args?: Subset<T, EjercicioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EjercicioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ejercicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EjercicioAggregateArgs>(args: Subset<T, EjercicioAggregateArgs>): Prisma.PrismaPromise<GetEjercicioAggregateType<T>>

    /**
     * Group by Ejercicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EjercicioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EjercicioGroupByArgs['orderBy'] }
        : { orderBy?: EjercicioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EjercicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEjercicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ejercicio model
   */
  readonly fields: EjercicioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ejercicio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EjercicioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends Ejercicio$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, Ejercicio$usuarioArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    rutinaEjercicio<T extends Ejercicio$rutinaEjercicioArgs<ExtArgs> = {}>(args?: Subset<T, Ejercicio$rutinaEjercicioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ejercicio model
   */
  interface EjercicioFieldRefs {
    readonly id: FieldRef<"Ejercicio", 'Int'>
    readonly nombre: FieldRef<"Ejercicio", 'String'>
    readonly descripcion: FieldRef<"Ejercicio", 'String'>
    readonly categoria: FieldRef<"Ejercicio", 'String'>
    readonly imagenUrl: FieldRef<"Ejercicio", 'String'>
    readonly esComun: FieldRef<"Ejercicio", 'Boolean'>
    readonly usuarioId: FieldRef<"Ejercicio", 'Int'>
    readonly createdAt: FieldRef<"Ejercicio", 'DateTime'>
    readonly updatedAt: FieldRef<"Ejercicio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ejercicio findUnique
   */
  export type EjercicioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * Filter, which Ejercicio to fetch.
     */
    where: EjercicioWhereUniqueInput
  }

  /**
   * Ejercicio findUniqueOrThrow
   */
  export type EjercicioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * Filter, which Ejercicio to fetch.
     */
    where: EjercicioWhereUniqueInput
  }

  /**
   * Ejercicio findFirst
   */
  export type EjercicioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * Filter, which Ejercicio to fetch.
     */
    where?: EjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ejercicios to fetch.
     */
    orderBy?: EjercicioOrderByWithRelationInput | EjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ejercicios.
     */
    cursor?: EjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ejercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ejercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ejercicios.
     */
    distinct?: EjercicioScalarFieldEnum | EjercicioScalarFieldEnum[]
  }

  /**
   * Ejercicio findFirstOrThrow
   */
  export type EjercicioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * Filter, which Ejercicio to fetch.
     */
    where?: EjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ejercicios to fetch.
     */
    orderBy?: EjercicioOrderByWithRelationInput | EjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ejercicios.
     */
    cursor?: EjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ejercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ejercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ejercicios.
     */
    distinct?: EjercicioScalarFieldEnum | EjercicioScalarFieldEnum[]
  }

  /**
   * Ejercicio findMany
   */
  export type EjercicioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * Filter, which Ejercicios to fetch.
     */
    where?: EjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ejercicios to fetch.
     */
    orderBy?: EjercicioOrderByWithRelationInput | EjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ejercicios.
     */
    cursor?: EjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ejercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ejercicios.
     */
    skip?: number
    distinct?: EjercicioScalarFieldEnum | EjercicioScalarFieldEnum[]
  }

  /**
   * Ejercicio create
   */
  export type EjercicioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * The data needed to create a Ejercicio.
     */
    data: XOR<EjercicioCreateInput, EjercicioUncheckedCreateInput>
  }

  /**
   * Ejercicio createMany
   */
  export type EjercicioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ejercicios.
     */
    data: EjercicioCreateManyInput | EjercicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ejercicio createManyAndReturn
   */
  export type EjercicioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * The data used to create many Ejercicios.
     */
    data: EjercicioCreateManyInput | EjercicioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ejercicio update
   */
  export type EjercicioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * The data needed to update a Ejercicio.
     */
    data: XOR<EjercicioUpdateInput, EjercicioUncheckedUpdateInput>
    /**
     * Choose, which Ejercicio to update.
     */
    where: EjercicioWhereUniqueInput
  }

  /**
   * Ejercicio updateMany
   */
  export type EjercicioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ejercicios.
     */
    data: XOR<EjercicioUpdateManyMutationInput, EjercicioUncheckedUpdateManyInput>
    /**
     * Filter which Ejercicios to update
     */
    where?: EjercicioWhereInput
    /**
     * Limit how many Ejercicios to update.
     */
    limit?: number
  }

  /**
   * Ejercicio updateManyAndReturn
   */
  export type EjercicioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * The data used to update Ejercicios.
     */
    data: XOR<EjercicioUpdateManyMutationInput, EjercicioUncheckedUpdateManyInput>
    /**
     * Filter which Ejercicios to update
     */
    where?: EjercicioWhereInput
    /**
     * Limit how many Ejercicios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ejercicio upsert
   */
  export type EjercicioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * The filter to search for the Ejercicio to update in case it exists.
     */
    where: EjercicioWhereUniqueInput
    /**
     * In case the Ejercicio found by the `where` argument doesn't exist, create a new Ejercicio with this data.
     */
    create: XOR<EjercicioCreateInput, EjercicioUncheckedCreateInput>
    /**
     * In case the Ejercicio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EjercicioUpdateInput, EjercicioUncheckedUpdateInput>
  }

  /**
   * Ejercicio delete
   */
  export type EjercicioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * Filter which Ejercicio to delete.
     */
    where: EjercicioWhereUniqueInput
  }

  /**
   * Ejercicio deleteMany
   */
  export type EjercicioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ejercicios to delete
     */
    where?: EjercicioWhereInput
    /**
     * Limit how many Ejercicios to delete.
     */
    limit?: number
  }

  /**
   * Ejercicio.usuario
   */
  export type Ejercicio$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * Ejercicio.rutinaEjercicio
   */
  export type Ejercicio$rutinaEjercicioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    where?: RutinaEjercicioWhereInput
    orderBy?: RutinaEjercicioOrderByWithRelationInput | RutinaEjercicioOrderByWithRelationInput[]
    cursor?: RutinaEjercicioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RutinaEjercicioScalarFieldEnum | RutinaEjercicioScalarFieldEnum[]
  }

  /**
   * Ejercicio without action
   */
  export type EjercicioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
  }


  /**
   * Model Rutina
   */

  export type AggregateRutina = {
    _count: RutinaCountAggregateOutputType | null
    _avg: RutinaAvgAggregateOutputType | null
    _sum: RutinaSumAggregateOutputType | null
    _min: RutinaMinAggregateOutputType | null
    _max: RutinaMaxAggregateOutputType | null
  }

  export type RutinaAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type RutinaSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type RutinaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    usuarioId: number | null
    fecha_creacion: Date | null
  }

  export type RutinaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    usuarioId: number | null
    fecha_creacion: Date | null
  }

  export type RutinaCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    usuarioId: number
    fecha_creacion: number
    _all: number
  }


  export type RutinaAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type RutinaSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type RutinaMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    usuarioId?: true
    fecha_creacion?: true
  }

  export type RutinaMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    usuarioId?: true
    fecha_creacion?: true
  }

  export type RutinaCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    usuarioId?: true
    fecha_creacion?: true
    _all?: true
  }

  export type RutinaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rutina to aggregate.
     */
    where?: RutinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutinas to fetch.
     */
    orderBy?: RutinaOrderByWithRelationInput | RutinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RutinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rutinas
    **/
    _count?: true | RutinaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RutinaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RutinaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RutinaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RutinaMaxAggregateInputType
  }

  export type GetRutinaAggregateType<T extends RutinaAggregateArgs> = {
        [P in keyof T & keyof AggregateRutina]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRutina[P]>
      : GetScalarType<T[P], AggregateRutina[P]>
  }




  export type RutinaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RutinaWhereInput
    orderBy?: RutinaOrderByWithAggregationInput | RutinaOrderByWithAggregationInput[]
    by: RutinaScalarFieldEnum[] | RutinaScalarFieldEnum
    having?: RutinaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RutinaCountAggregateInputType | true
    _avg?: RutinaAvgAggregateInputType
    _sum?: RutinaSumAggregateInputType
    _min?: RutinaMinAggregateInputType
    _max?: RutinaMaxAggregateInputType
  }

  export type RutinaGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string
    usuarioId: number
    fecha_creacion: Date
    _count: RutinaCountAggregateOutputType | null
    _avg: RutinaAvgAggregateOutputType | null
    _sum: RutinaSumAggregateOutputType | null
    _min: RutinaMinAggregateOutputType | null
    _max: RutinaMaxAggregateOutputType | null
  }

  type GetRutinaGroupByPayload<T extends RutinaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RutinaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RutinaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RutinaGroupByOutputType[P]>
            : GetScalarType<T[P], RutinaGroupByOutputType[P]>
        }
      >
    >


  export type RutinaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    usuarioId?: boolean
    fecha_creacion?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ejercicios?: boolean | Rutina$ejerciciosArgs<ExtArgs>
    calendario?: boolean | Rutina$calendarioArgs<ExtArgs>
    comentarios?: boolean | Rutina$comentariosArgs<ExtArgs>
    _count?: boolean | RutinaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rutina"]>

  export type RutinaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    usuarioId?: boolean
    fecha_creacion?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rutina"]>

  export type RutinaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    usuarioId?: boolean
    fecha_creacion?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rutina"]>

  export type RutinaSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    usuarioId?: boolean
    fecha_creacion?: boolean
  }

  export type RutinaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "usuarioId" | "fecha_creacion", ExtArgs["result"]["rutina"]>
  export type RutinaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ejercicios?: boolean | Rutina$ejerciciosArgs<ExtArgs>
    calendario?: boolean | Rutina$calendarioArgs<ExtArgs>
    comentarios?: boolean | Rutina$comentariosArgs<ExtArgs>
    _count?: boolean | RutinaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RutinaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type RutinaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $RutinaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rutina"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      ejercicios: Prisma.$RutinaEjercicioPayload<ExtArgs>[]
      calendario: Prisma.$CalendarioPayload<ExtArgs>[]
      comentarios: Prisma.$ComentarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string
      usuarioId: number
      fecha_creacion: Date
    }, ExtArgs["result"]["rutina"]>
    composites: {}
  }

  type RutinaGetPayload<S extends boolean | null | undefined | RutinaDefaultArgs> = $Result.GetResult<Prisma.$RutinaPayload, S>

  type RutinaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RutinaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RutinaCountAggregateInputType | true
    }

  export interface RutinaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rutina'], meta: { name: 'Rutina' } }
    /**
     * Find zero or one Rutina that matches the filter.
     * @param {RutinaFindUniqueArgs} args - Arguments to find a Rutina
     * @example
     * // Get one Rutina
     * const rutina = await prisma.rutina.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RutinaFindUniqueArgs>(args: SelectSubset<T, RutinaFindUniqueArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rutina that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RutinaFindUniqueOrThrowArgs} args - Arguments to find a Rutina
     * @example
     * // Get one Rutina
     * const rutina = await prisma.rutina.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RutinaFindUniqueOrThrowArgs>(args: SelectSubset<T, RutinaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rutina that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaFindFirstArgs} args - Arguments to find a Rutina
     * @example
     * // Get one Rutina
     * const rutina = await prisma.rutina.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RutinaFindFirstArgs>(args?: SelectSubset<T, RutinaFindFirstArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rutina that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaFindFirstOrThrowArgs} args - Arguments to find a Rutina
     * @example
     * // Get one Rutina
     * const rutina = await prisma.rutina.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RutinaFindFirstOrThrowArgs>(args?: SelectSubset<T, RutinaFindFirstOrThrowArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rutinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rutinas
     * const rutinas = await prisma.rutina.findMany()
     * 
     * // Get first 10 Rutinas
     * const rutinas = await prisma.rutina.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rutinaWithIdOnly = await prisma.rutina.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RutinaFindManyArgs>(args?: SelectSubset<T, RutinaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rutina.
     * @param {RutinaCreateArgs} args - Arguments to create a Rutina.
     * @example
     * // Create one Rutina
     * const Rutina = await prisma.rutina.create({
     *   data: {
     *     // ... data to create a Rutina
     *   }
     * })
     * 
     */
    create<T extends RutinaCreateArgs>(args: SelectSubset<T, RutinaCreateArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rutinas.
     * @param {RutinaCreateManyArgs} args - Arguments to create many Rutinas.
     * @example
     * // Create many Rutinas
     * const rutina = await prisma.rutina.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RutinaCreateManyArgs>(args?: SelectSubset<T, RutinaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rutinas and returns the data saved in the database.
     * @param {RutinaCreateManyAndReturnArgs} args - Arguments to create many Rutinas.
     * @example
     * // Create many Rutinas
     * const rutina = await prisma.rutina.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rutinas and only return the `id`
     * const rutinaWithIdOnly = await prisma.rutina.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RutinaCreateManyAndReturnArgs>(args?: SelectSubset<T, RutinaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rutina.
     * @param {RutinaDeleteArgs} args - Arguments to delete one Rutina.
     * @example
     * // Delete one Rutina
     * const Rutina = await prisma.rutina.delete({
     *   where: {
     *     // ... filter to delete one Rutina
     *   }
     * })
     * 
     */
    delete<T extends RutinaDeleteArgs>(args: SelectSubset<T, RutinaDeleteArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rutina.
     * @param {RutinaUpdateArgs} args - Arguments to update one Rutina.
     * @example
     * // Update one Rutina
     * const rutina = await prisma.rutina.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RutinaUpdateArgs>(args: SelectSubset<T, RutinaUpdateArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rutinas.
     * @param {RutinaDeleteManyArgs} args - Arguments to filter Rutinas to delete.
     * @example
     * // Delete a few Rutinas
     * const { count } = await prisma.rutina.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RutinaDeleteManyArgs>(args?: SelectSubset<T, RutinaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rutinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rutinas
     * const rutina = await prisma.rutina.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RutinaUpdateManyArgs>(args: SelectSubset<T, RutinaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rutinas and returns the data updated in the database.
     * @param {RutinaUpdateManyAndReturnArgs} args - Arguments to update many Rutinas.
     * @example
     * // Update many Rutinas
     * const rutina = await prisma.rutina.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rutinas and only return the `id`
     * const rutinaWithIdOnly = await prisma.rutina.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RutinaUpdateManyAndReturnArgs>(args: SelectSubset<T, RutinaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rutina.
     * @param {RutinaUpsertArgs} args - Arguments to update or create a Rutina.
     * @example
     * // Update or create a Rutina
     * const rutina = await prisma.rutina.upsert({
     *   create: {
     *     // ... data to create a Rutina
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rutina we want to update
     *   }
     * })
     */
    upsert<T extends RutinaUpsertArgs>(args: SelectSubset<T, RutinaUpsertArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rutinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaCountArgs} args - Arguments to filter Rutinas to count.
     * @example
     * // Count the number of Rutinas
     * const count = await prisma.rutina.count({
     *   where: {
     *     // ... the filter for the Rutinas we want to count
     *   }
     * })
    **/
    count<T extends RutinaCountArgs>(
      args?: Subset<T, RutinaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RutinaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rutina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RutinaAggregateArgs>(args: Subset<T, RutinaAggregateArgs>): Prisma.PrismaPromise<GetRutinaAggregateType<T>>

    /**
     * Group by Rutina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RutinaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RutinaGroupByArgs['orderBy'] }
        : { orderBy?: RutinaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RutinaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRutinaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rutina model
   */
  readonly fields: RutinaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rutina.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RutinaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ejercicios<T extends Rutina$ejerciciosArgs<ExtArgs> = {}>(args?: Subset<T, Rutina$ejerciciosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    calendario<T extends Rutina$calendarioArgs<ExtArgs> = {}>(args?: Subset<T, Rutina$calendarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comentarios<T extends Rutina$comentariosArgs<ExtArgs> = {}>(args?: Subset<T, Rutina$comentariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rutina model
   */
  interface RutinaFieldRefs {
    readonly id: FieldRef<"Rutina", 'Int'>
    readonly nombre: FieldRef<"Rutina", 'String'>
    readonly descripcion: FieldRef<"Rutina", 'String'>
    readonly usuarioId: FieldRef<"Rutina", 'Int'>
    readonly fecha_creacion: FieldRef<"Rutina", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rutina findUnique
   */
  export type RutinaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * Filter, which Rutina to fetch.
     */
    where: RutinaWhereUniqueInput
  }

  /**
   * Rutina findUniqueOrThrow
   */
  export type RutinaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * Filter, which Rutina to fetch.
     */
    where: RutinaWhereUniqueInput
  }

  /**
   * Rutina findFirst
   */
  export type RutinaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * Filter, which Rutina to fetch.
     */
    where?: RutinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutinas to fetch.
     */
    orderBy?: RutinaOrderByWithRelationInput | RutinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rutinas.
     */
    cursor?: RutinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rutinas.
     */
    distinct?: RutinaScalarFieldEnum | RutinaScalarFieldEnum[]
  }

  /**
   * Rutina findFirstOrThrow
   */
  export type RutinaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * Filter, which Rutina to fetch.
     */
    where?: RutinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutinas to fetch.
     */
    orderBy?: RutinaOrderByWithRelationInput | RutinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rutinas.
     */
    cursor?: RutinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rutinas.
     */
    distinct?: RutinaScalarFieldEnum | RutinaScalarFieldEnum[]
  }

  /**
   * Rutina findMany
   */
  export type RutinaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * Filter, which Rutinas to fetch.
     */
    where?: RutinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutinas to fetch.
     */
    orderBy?: RutinaOrderByWithRelationInput | RutinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rutinas.
     */
    cursor?: RutinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutinas.
     */
    skip?: number
    distinct?: RutinaScalarFieldEnum | RutinaScalarFieldEnum[]
  }

  /**
   * Rutina create
   */
  export type RutinaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * The data needed to create a Rutina.
     */
    data: XOR<RutinaCreateInput, RutinaUncheckedCreateInput>
  }

  /**
   * Rutina createMany
   */
  export type RutinaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rutinas.
     */
    data: RutinaCreateManyInput | RutinaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rutina createManyAndReturn
   */
  export type RutinaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * The data used to create many Rutinas.
     */
    data: RutinaCreateManyInput | RutinaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rutina update
   */
  export type RutinaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * The data needed to update a Rutina.
     */
    data: XOR<RutinaUpdateInput, RutinaUncheckedUpdateInput>
    /**
     * Choose, which Rutina to update.
     */
    where: RutinaWhereUniqueInput
  }

  /**
   * Rutina updateMany
   */
  export type RutinaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rutinas.
     */
    data: XOR<RutinaUpdateManyMutationInput, RutinaUncheckedUpdateManyInput>
    /**
     * Filter which Rutinas to update
     */
    where?: RutinaWhereInput
    /**
     * Limit how many Rutinas to update.
     */
    limit?: number
  }

  /**
   * Rutina updateManyAndReturn
   */
  export type RutinaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * The data used to update Rutinas.
     */
    data: XOR<RutinaUpdateManyMutationInput, RutinaUncheckedUpdateManyInput>
    /**
     * Filter which Rutinas to update
     */
    where?: RutinaWhereInput
    /**
     * Limit how many Rutinas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rutina upsert
   */
  export type RutinaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * The filter to search for the Rutina to update in case it exists.
     */
    where: RutinaWhereUniqueInput
    /**
     * In case the Rutina found by the `where` argument doesn't exist, create a new Rutina with this data.
     */
    create: XOR<RutinaCreateInput, RutinaUncheckedCreateInput>
    /**
     * In case the Rutina was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RutinaUpdateInput, RutinaUncheckedUpdateInput>
  }

  /**
   * Rutina delete
   */
  export type RutinaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * Filter which Rutina to delete.
     */
    where: RutinaWhereUniqueInput
  }

  /**
   * Rutina deleteMany
   */
  export type RutinaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rutinas to delete
     */
    where?: RutinaWhereInput
    /**
     * Limit how many Rutinas to delete.
     */
    limit?: number
  }

  /**
   * Rutina.ejercicios
   */
  export type Rutina$ejerciciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    where?: RutinaEjercicioWhereInput
    orderBy?: RutinaEjercicioOrderByWithRelationInput | RutinaEjercicioOrderByWithRelationInput[]
    cursor?: RutinaEjercicioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RutinaEjercicioScalarFieldEnum | RutinaEjercicioScalarFieldEnum[]
  }

  /**
   * Rutina.calendario
   */
  export type Rutina$calendarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendario
     */
    select?: CalendarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendario
     */
    omit?: CalendarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarioInclude<ExtArgs> | null
    where?: CalendarioWhereInput
    orderBy?: CalendarioOrderByWithRelationInput | CalendarioOrderByWithRelationInput[]
    cursor?: CalendarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CalendarioScalarFieldEnum | CalendarioScalarFieldEnum[]
  }

  /**
   * Rutina.comentarios
   */
  export type Rutina$comentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    cursor?: ComentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Rutina without action
   */
  export type RutinaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
  }


  /**
   * Model RutinaEjercicio
   */

  export type AggregateRutinaEjercicio = {
    _count: RutinaEjercicioCountAggregateOutputType | null
    _avg: RutinaEjercicioAvgAggregateOutputType | null
    _sum: RutinaEjercicioSumAggregateOutputType | null
    _min: RutinaEjercicioMinAggregateOutputType | null
    _max: RutinaEjercicioMaxAggregateOutputType | null
  }

  export type RutinaEjercicioAvgAggregateOutputType = {
    id: number | null
    rutinaId: number | null
    ejercicioId: number | null
    series: number | null
    repeticiones: number | null
    descansoSegundos: number | null
    orden: number | null
  }

  export type RutinaEjercicioSumAggregateOutputType = {
    id: number | null
    rutinaId: number | null
    ejercicioId: number | null
    series: number | null
    repeticiones: number | null
    descansoSegundos: number | null
    orden: number | null
  }

  export type RutinaEjercicioMinAggregateOutputType = {
    id: number | null
    rutinaId: number | null
    ejercicioId: number | null
    series: number | null
    repeticiones: number | null
    descansoSegundos: number | null
    orden: number | null
  }

  export type RutinaEjercicioMaxAggregateOutputType = {
    id: number | null
    rutinaId: number | null
    ejercicioId: number | null
    series: number | null
    repeticiones: number | null
    descansoSegundos: number | null
    orden: number | null
  }

  export type RutinaEjercicioCountAggregateOutputType = {
    id: number
    rutinaId: number
    ejercicioId: number
    series: number
    repeticiones: number
    descansoSegundos: number
    orden: number
    _all: number
  }


  export type RutinaEjercicioAvgAggregateInputType = {
    id?: true
    rutinaId?: true
    ejercicioId?: true
    series?: true
    repeticiones?: true
    descansoSegundos?: true
    orden?: true
  }

  export type RutinaEjercicioSumAggregateInputType = {
    id?: true
    rutinaId?: true
    ejercicioId?: true
    series?: true
    repeticiones?: true
    descansoSegundos?: true
    orden?: true
  }

  export type RutinaEjercicioMinAggregateInputType = {
    id?: true
    rutinaId?: true
    ejercicioId?: true
    series?: true
    repeticiones?: true
    descansoSegundos?: true
    orden?: true
  }

  export type RutinaEjercicioMaxAggregateInputType = {
    id?: true
    rutinaId?: true
    ejercicioId?: true
    series?: true
    repeticiones?: true
    descansoSegundos?: true
    orden?: true
  }

  export type RutinaEjercicioCountAggregateInputType = {
    id?: true
    rutinaId?: true
    ejercicioId?: true
    series?: true
    repeticiones?: true
    descansoSegundos?: true
    orden?: true
    _all?: true
  }

  export type RutinaEjercicioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RutinaEjercicio to aggregate.
     */
    where?: RutinaEjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RutinaEjercicios to fetch.
     */
    orderBy?: RutinaEjercicioOrderByWithRelationInput | RutinaEjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RutinaEjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RutinaEjercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RutinaEjercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RutinaEjercicios
    **/
    _count?: true | RutinaEjercicioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RutinaEjercicioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RutinaEjercicioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RutinaEjercicioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RutinaEjercicioMaxAggregateInputType
  }

  export type GetRutinaEjercicioAggregateType<T extends RutinaEjercicioAggregateArgs> = {
        [P in keyof T & keyof AggregateRutinaEjercicio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRutinaEjercicio[P]>
      : GetScalarType<T[P], AggregateRutinaEjercicio[P]>
  }




  export type RutinaEjercicioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RutinaEjercicioWhereInput
    orderBy?: RutinaEjercicioOrderByWithAggregationInput | RutinaEjercicioOrderByWithAggregationInput[]
    by: RutinaEjercicioScalarFieldEnum[] | RutinaEjercicioScalarFieldEnum
    having?: RutinaEjercicioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RutinaEjercicioCountAggregateInputType | true
    _avg?: RutinaEjercicioAvgAggregateInputType
    _sum?: RutinaEjercicioSumAggregateInputType
    _min?: RutinaEjercicioMinAggregateInputType
    _max?: RutinaEjercicioMaxAggregateInputType
  }

  export type RutinaEjercicioGroupByOutputType = {
    id: number
    rutinaId: number
    ejercicioId: number
    series: number
    repeticiones: number
    descansoSegundos: number
    orden: number
    _count: RutinaEjercicioCountAggregateOutputType | null
    _avg: RutinaEjercicioAvgAggregateOutputType | null
    _sum: RutinaEjercicioSumAggregateOutputType | null
    _min: RutinaEjercicioMinAggregateOutputType | null
    _max: RutinaEjercicioMaxAggregateOutputType | null
  }

  type GetRutinaEjercicioGroupByPayload<T extends RutinaEjercicioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RutinaEjercicioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RutinaEjercicioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RutinaEjercicioGroupByOutputType[P]>
            : GetScalarType<T[P], RutinaEjercicioGroupByOutputType[P]>
        }
      >
    >


  export type RutinaEjercicioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rutinaId?: boolean
    ejercicioId?: boolean
    series?: boolean
    repeticiones?: boolean
    descansoSegundos?: boolean
    orden?: boolean
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rutinaEjercicio"]>

  export type RutinaEjercicioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rutinaId?: boolean
    ejercicioId?: boolean
    series?: boolean
    repeticiones?: boolean
    descansoSegundos?: boolean
    orden?: boolean
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rutinaEjercicio"]>

  export type RutinaEjercicioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rutinaId?: boolean
    ejercicioId?: boolean
    series?: boolean
    repeticiones?: boolean
    descansoSegundos?: boolean
    orden?: boolean
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rutinaEjercicio"]>

  export type RutinaEjercicioSelectScalar = {
    id?: boolean
    rutinaId?: boolean
    ejercicioId?: boolean
    series?: boolean
    repeticiones?: boolean
    descansoSegundos?: boolean
    orden?: boolean
  }

  export type RutinaEjercicioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rutinaId" | "ejercicioId" | "series" | "repeticiones" | "descansoSegundos" | "orden", ExtArgs["result"]["rutinaEjercicio"]>
  export type RutinaEjercicioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }
  export type RutinaEjercicioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }
  export type RutinaEjercicioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }

  export type $RutinaEjercicioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RutinaEjercicio"
    objects: {
      rutina: Prisma.$RutinaPayload<ExtArgs>
      ejercicio: Prisma.$EjercicioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rutinaId: number
      ejercicioId: number
      series: number
      repeticiones: number
      descansoSegundos: number
      orden: number
    }, ExtArgs["result"]["rutinaEjercicio"]>
    composites: {}
  }

  type RutinaEjercicioGetPayload<S extends boolean | null | undefined | RutinaEjercicioDefaultArgs> = $Result.GetResult<Prisma.$RutinaEjercicioPayload, S>

  type RutinaEjercicioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RutinaEjercicioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RutinaEjercicioCountAggregateInputType | true
    }

  export interface RutinaEjercicioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RutinaEjercicio'], meta: { name: 'RutinaEjercicio' } }
    /**
     * Find zero or one RutinaEjercicio that matches the filter.
     * @param {RutinaEjercicioFindUniqueArgs} args - Arguments to find a RutinaEjercicio
     * @example
     * // Get one RutinaEjercicio
     * const rutinaEjercicio = await prisma.rutinaEjercicio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RutinaEjercicioFindUniqueArgs>(args: SelectSubset<T, RutinaEjercicioFindUniqueArgs<ExtArgs>>): Prisma__RutinaEjercicioClient<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RutinaEjercicio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RutinaEjercicioFindUniqueOrThrowArgs} args - Arguments to find a RutinaEjercicio
     * @example
     * // Get one RutinaEjercicio
     * const rutinaEjercicio = await prisma.rutinaEjercicio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RutinaEjercicioFindUniqueOrThrowArgs>(args: SelectSubset<T, RutinaEjercicioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RutinaEjercicioClient<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RutinaEjercicio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaEjercicioFindFirstArgs} args - Arguments to find a RutinaEjercicio
     * @example
     * // Get one RutinaEjercicio
     * const rutinaEjercicio = await prisma.rutinaEjercicio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RutinaEjercicioFindFirstArgs>(args?: SelectSubset<T, RutinaEjercicioFindFirstArgs<ExtArgs>>): Prisma__RutinaEjercicioClient<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RutinaEjercicio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaEjercicioFindFirstOrThrowArgs} args - Arguments to find a RutinaEjercicio
     * @example
     * // Get one RutinaEjercicio
     * const rutinaEjercicio = await prisma.rutinaEjercicio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RutinaEjercicioFindFirstOrThrowArgs>(args?: SelectSubset<T, RutinaEjercicioFindFirstOrThrowArgs<ExtArgs>>): Prisma__RutinaEjercicioClient<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RutinaEjercicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaEjercicioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RutinaEjercicios
     * const rutinaEjercicios = await prisma.rutinaEjercicio.findMany()
     * 
     * // Get first 10 RutinaEjercicios
     * const rutinaEjercicios = await prisma.rutinaEjercicio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rutinaEjercicioWithIdOnly = await prisma.rutinaEjercicio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RutinaEjercicioFindManyArgs>(args?: SelectSubset<T, RutinaEjercicioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RutinaEjercicio.
     * @param {RutinaEjercicioCreateArgs} args - Arguments to create a RutinaEjercicio.
     * @example
     * // Create one RutinaEjercicio
     * const RutinaEjercicio = await prisma.rutinaEjercicio.create({
     *   data: {
     *     // ... data to create a RutinaEjercicio
     *   }
     * })
     * 
     */
    create<T extends RutinaEjercicioCreateArgs>(args: SelectSubset<T, RutinaEjercicioCreateArgs<ExtArgs>>): Prisma__RutinaEjercicioClient<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RutinaEjercicios.
     * @param {RutinaEjercicioCreateManyArgs} args - Arguments to create many RutinaEjercicios.
     * @example
     * // Create many RutinaEjercicios
     * const rutinaEjercicio = await prisma.rutinaEjercicio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RutinaEjercicioCreateManyArgs>(args?: SelectSubset<T, RutinaEjercicioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RutinaEjercicios and returns the data saved in the database.
     * @param {RutinaEjercicioCreateManyAndReturnArgs} args - Arguments to create many RutinaEjercicios.
     * @example
     * // Create many RutinaEjercicios
     * const rutinaEjercicio = await prisma.rutinaEjercicio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RutinaEjercicios and only return the `id`
     * const rutinaEjercicioWithIdOnly = await prisma.rutinaEjercicio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RutinaEjercicioCreateManyAndReturnArgs>(args?: SelectSubset<T, RutinaEjercicioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RutinaEjercicio.
     * @param {RutinaEjercicioDeleteArgs} args - Arguments to delete one RutinaEjercicio.
     * @example
     * // Delete one RutinaEjercicio
     * const RutinaEjercicio = await prisma.rutinaEjercicio.delete({
     *   where: {
     *     // ... filter to delete one RutinaEjercicio
     *   }
     * })
     * 
     */
    delete<T extends RutinaEjercicioDeleteArgs>(args: SelectSubset<T, RutinaEjercicioDeleteArgs<ExtArgs>>): Prisma__RutinaEjercicioClient<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RutinaEjercicio.
     * @param {RutinaEjercicioUpdateArgs} args - Arguments to update one RutinaEjercicio.
     * @example
     * // Update one RutinaEjercicio
     * const rutinaEjercicio = await prisma.rutinaEjercicio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RutinaEjercicioUpdateArgs>(args: SelectSubset<T, RutinaEjercicioUpdateArgs<ExtArgs>>): Prisma__RutinaEjercicioClient<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RutinaEjercicios.
     * @param {RutinaEjercicioDeleteManyArgs} args - Arguments to filter RutinaEjercicios to delete.
     * @example
     * // Delete a few RutinaEjercicios
     * const { count } = await prisma.rutinaEjercicio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RutinaEjercicioDeleteManyArgs>(args?: SelectSubset<T, RutinaEjercicioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RutinaEjercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaEjercicioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RutinaEjercicios
     * const rutinaEjercicio = await prisma.rutinaEjercicio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RutinaEjercicioUpdateManyArgs>(args: SelectSubset<T, RutinaEjercicioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RutinaEjercicios and returns the data updated in the database.
     * @param {RutinaEjercicioUpdateManyAndReturnArgs} args - Arguments to update many RutinaEjercicios.
     * @example
     * // Update many RutinaEjercicios
     * const rutinaEjercicio = await prisma.rutinaEjercicio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RutinaEjercicios and only return the `id`
     * const rutinaEjercicioWithIdOnly = await prisma.rutinaEjercicio.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RutinaEjercicioUpdateManyAndReturnArgs>(args: SelectSubset<T, RutinaEjercicioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RutinaEjercicio.
     * @param {RutinaEjercicioUpsertArgs} args - Arguments to update or create a RutinaEjercicio.
     * @example
     * // Update or create a RutinaEjercicio
     * const rutinaEjercicio = await prisma.rutinaEjercicio.upsert({
     *   create: {
     *     // ... data to create a RutinaEjercicio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RutinaEjercicio we want to update
     *   }
     * })
     */
    upsert<T extends RutinaEjercicioUpsertArgs>(args: SelectSubset<T, RutinaEjercicioUpsertArgs<ExtArgs>>): Prisma__RutinaEjercicioClient<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RutinaEjercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaEjercicioCountArgs} args - Arguments to filter RutinaEjercicios to count.
     * @example
     * // Count the number of RutinaEjercicios
     * const count = await prisma.rutinaEjercicio.count({
     *   where: {
     *     // ... the filter for the RutinaEjercicios we want to count
     *   }
     * })
    **/
    count<T extends RutinaEjercicioCountArgs>(
      args?: Subset<T, RutinaEjercicioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RutinaEjercicioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RutinaEjercicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaEjercicioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RutinaEjercicioAggregateArgs>(args: Subset<T, RutinaEjercicioAggregateArgs>): Prisma.PrismaPromise<GetRutinaEjercicioAggregateType<T>>

    /**
     * Group by RutinaEjercicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaEjercicioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RutinaEjercicioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RutinaEjercicioGroupByArgs['orderBy'] }
        : { orderBy?: RutinaEjercicioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RutinaEjercicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRutinaEjercicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RutinaEjercicio model
   */
  readonly fields: RutinaEjercicioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RutinaEjercicio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RutinaEjercicioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rutina<T extends RutinaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RutinaDefaultArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ejercicio<T extends EjercicioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EjercicioDefaultArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RutinaEjercicio model
   */
  interface RutinaEjercicioFieldRefs {
    readonly id: FieldRef<"RutinaEjercicio", 'Int'>
    readonly rutinaId: FieldRef<"RutinaEjercicio", 'Int'>
    readonly ejercicioId: FieldRef<"RutinaEjercicio", 'Int'>
    readonly series: FieldRef<"RutinaEjercicio", 'Int'>
    readonly repeticiones: FieldRef<"RutinaEjercicio", 'Int'>
    readonly descansoSegundos: FieldRef<"RutinaEjercicio", 'Int'>
    readonly orden: FieldRef<"RutinaEjercicio", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RutinaEjercicio findUnique
   */
  export type RutinaEjercicioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    /**
     * Filter, which RutinaEjercicio to fetch.
     */
    where: RutinaEjercicioWhereUniqueInput
  }

  /**
   * RutinaEjercicio findUniqueOrThrow
   */
  export type RutinaEjercicioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    /**
     * Filter, which RutinaEjercicio to fetch.
     */
    where: RutinaEjercicioWhereUniqueInput
  }

  /**
   * RutinaEjercicio findFirst
   */
  export type RutinaEjercicioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    /**
     * Filter, which RutinaEjercicio to fetch.
     */
    where?: RutinaEjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RutinaEjercicios to fetch.
     */
    orderBy?: RutinaEjercicioOrderByWithRelationInput | RutinaEjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RutinaEjercicios.
     */
    cursor?: RutinaEjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RutinaEjercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RutinaEjercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RutinaEjercicios.
     */
    distinct?: RutinaEjercicioScalarFieldEnum | RutinaEjercicioScalarFieldEnum[]
  }

  /**
   * RutinaEjercicio findFirstOrThrow
   */
  export type RutinaEjercicioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    /**
     * Filter, which RutinaEjercicio to fetch.
     */
    where?: RutinaEjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RutinaEjercicios to fetch.
     */
    orderBy?: RutinaEjercicioOrderByWithRelationInput | RutinaEjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RutinaEjercicios.
     */
    cursor?: RutinaEjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RutinaEjercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RutinaEjercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RutinaEjercicios.
     */
    distinct?: RutinaEjercicioScalarFieldEnum | RutinaEjercicioScalarFieldEnum[]
  }

  /**
   * RutinaEjercicio findMany
   */
  export type RutinaEjercicioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    /**
     * Filter, which RutinaEjercicios to fetch.
     */
    where?: RutinaEjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RutinaEjercicios to fetch.
     */
    orderBy?: RutinaEjercicioOrderByWithRelationInput | RutinaEjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RutinaEjercicios.
     */
    cursor?: RutinaEjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RutinaEjercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RutinaEjercicios.
     */
    skip?: number
    distinct?: RutinaEjercicioScalarFieldEnum | RutinaEjercicioScalarFieldEnum[]
  }

  /**
   * RutinaEjercicio create
   */
  export type RutinaEjercicioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    /**
     * The data needed to create a RutinaEjercicio.
     */
    data: XOR<RutinaEjercicioCreateInput, RutinaEjercicioUncheckedCreateInput>
  }

  /**
   * RutinaEjercicio createMany
   */
  export type RutinaEjercicioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RutinaEjercicios.
     */
    data: RutinaEjercicioCreateManyInput | RutinaEjercicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RutinaEjercicio createManyAndReturn
   */
  export type RutinaEjercicioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * The data used to create many RutinaEjercicios.
     */
    data: RutinaEjercicioCreateManyInput | RutinaEjercicioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RutinaEjercicio update
   */
  export type RutinaEjercicioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    /**
     * The data needed to update a RutinaEjercicio.
     */
    data: XOR<RutinaEjercicioUpdateInput, RutinaEjercicioUncheckedUpdateInput>
    /**
     * Choose, which RutinaEjercicio to update.
     */
    where: RutinaEjercicioWhereUniqueInput
  }

  /**
   * RutinaEjercicio updateMany
   */
  export type RutinaEjercicioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RutinaEjercicios.
     */
    data: XOR<RutinaEjercicioUpdateManyMutationInput, RutinaEjercicioUncheckedUpdateManyInput>
    /**
     * Filter which RutinaEjercicios to update
     */
    where?: RutinaEjercicioWhereInput
    /**
     * Limit how many RutinaEjercicios to update.
     */
    limit?: number
  }

  /**
   * RutinaEjercicio updateManyAndReturn
   */
  export type RutinaEjercicioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * The data used to update RutinaEjercicios.
     */
    data: XOR<RutinaEjercicioUpdateManyMutationInput, RutinaEjercicioUncheckedUpdateManyInput>
    /**
     * Filter which RutinaEjercicios to update
     */
    where?: RutinaEjercicioWhereInput
    /**
     * Limit how many RutinaEjercicios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RutinaEjercicio upsert
   */
  export type RutinaEjercicioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    /**
     * The filter to search for the RutinaEjercicio to update in case it exists.
     */
    where: RutinaEjercicioWhereUniqueInput
    /**
     * In case the RutinaEjercicio found by the `where` argument doesn't exist, create a new RutinaEjercicio with this data.
     */
    create: XOR<RutinaEjercicioCreateInput, RutinaEjercicioUncheckedCreateInput>
    /**
     * In case the RutinaEjercicio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RutinaEjercicioUpdateInput, RutinaEjercicioUncheckedUpdateInput>
  }

  /**
   * RutinaEjercicio delete
   */
  export type RutinaEjercicioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    /**
     * Filter which RutinaEjercicio to delete.
     */
    where: RutinaEjercicioWhereUniqueInput
  }

  /**
   * RutinaEjercicio deleteMany
   */
  export type RutinaEjercicioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RutinaEjercicios to delete
     */
    where?: RutinaEjercicioWhereInput
    /**
     * Limit how many RutinaEjercicios to delete.
     */
    limit?: number
  }

  /**
   * RutinaEjercicio without action
   */
  export type RutinaEjercicioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
  }


  /**
   * Model Calendario
   */

  export type AggregateCalendario = {
    _count: CalendarioCountAggregateOutputType | null
    _avg: CalendarioAvgAggregateOutputType | null
    _sum: CalendarioSumAggregateOutputType | null
    _min: CalendarioMinAggregateOutputType | null
    _max: CalendarioMaxAggregateOutputType | null
  }

  export type CalendarioAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    rutinaId: number | null
  }

  export type CalendarioSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    rutinaId: number | null
  }

  export type CalendarioMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    rutinaId: number | null
    fecha: Date | null
  }

  export type CalendarioMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    rutinaId: number | null
    fecha: Date | null
  }

  export type CalendarioCountAggregateOutputType = {
    id: number
    usuarioId: number
    rutinaId: number
    fecha: number
    _all: number
  }


  export type CalendarioAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    rutinaId?: true
  }

  export type CalendarioSumAggregateInputType = {
    id?: true
    usuarioId?: true
    rutinaId?: true
  }

  export type CalendarioMinAggregateInputType = {
    id?: true
    usuarioId?: true
    rutinaId?: true
    fecha?: true
  }

  export type CalendarioMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    rutinaId?: true
    fecha?: true
  }

  export type CalendarioCountAggregateInputType = {
    id?: true
    usuarioId?: true
    rutinaId?: true
    fecha?: true
    _all?: true
  }

  export type CalendarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Calendario to aggregate.
     */
    where?: CalendarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calendarios to fetch.
     */
    orderBy?: CalendarioOrderByWithRelationInput | CalendarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CalendarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calendarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calendarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Calendarios
    **/
    _count?: true | CalendarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CalendarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CalendarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CalendarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CalendarioMaxAggregateInputType
  }

  export type GetCalendarioAggregateType<T extends CalendarioAggregateArgs> = {
        [P in keyof T & keyof AggregateCalendario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCalendario[P]>
      : GetScalarType<T[P], AggregateCalendario[P]>
  }




  export type CalendarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalendarioWhereInput
    orderBy?: CalendarioOrderByWithAggregationInput | CalendarioOrderByWithAggregationInput[]
    by: CalendarioScalarFieldEnum[] | CalendarioScalarFieldEnum
    having?: CalendarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CalendarioCountAggregateInputType | true
    _avg?: CalendarioAvgAggregateInputType
    _sum?: CalendarioSumAggregateInputType
    _min?: CalendarioMinAggregateInputType
    _max?: CalendarioMaxAggregateInputType
  }

  export type CalendarioGroupByOutputType = {
    id: number
    usuarioId: number
    rutinaId: number
    fecha: Date
    _count: CalendarioCountAggregateOutputType | null
    _avg: CalendarioAvgAggregateOutputType | null
    _sum: CalendarioSumAggregateOutputType | null
    _min: CalendarioMinAggregateOutputType | null
    _max: CalendarioMaxAggregateOutputType | null
  }

  type GetCalendarioGroupByPayload<T extends CalendarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CalendarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CalendarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CalendarioGroupByOutputType[P]>
            : GetScalarType<T[P], CalendarioGroupByOutputType[P]>
        }
      >
    >


  export type CalendarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    rutinaId?: boolean
    fecha?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendario"]>

  export type CalendarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    rutinaId?: boolean
    fecha?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendario"]>

  export type CalendarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    rutinaId?: boolean
    fecha?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendario"]>

  export type CalendarioSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    rutinaId?: boolean
    fecha?: boolean
  }

  export type CalendarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "rutinaId" | "fecha", ExtArgs["result"]["calendario"]>
  export type CalendarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
  }
  export type CalendarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
  }
  export type CalendarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
  }

  export type $CalendarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Calendario"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      rutina: Prisma.$RutinaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      rutinaId: number
      fecha: Date
    }, ExtArgs["result"]["calendario"]>
    composites: {}
  }

  type CalendarioGetPayload<S extends boolean | null | undefined | CalendarioDefaultArgs> = $Result.GetResult<Prisma.$CalendarioPayload, S>

  type CalendarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CalendarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CalendarioCountAggregateInputType | true
    }

  export interface CalendarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Calendario'], meta: { name: 'Calendario' } }
    /**
     * Find zero or one Calendario that matches the filter.
     * @param {CalendarioFindUniqueArgs} args - Arguments to find a Calendario
     * @example
     * // Get one Calendario
     * const calendario = await prisma.calendario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CalendarioFindUniqueArgs>(args: SelectSubset<T, CalendarioFindUniqueArgs<ExtArgs>>): Prisma__CalendarioClient<$Result.GetResult<Prisma.$CalendarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Calendario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CalendarioFindUniqueOrThrowArgs} args - Arguments to find a Calendario
     * @example
     * // Get one Calendario
     * const calendario = await prisma.calendario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CalendarioFindUniqueOrThrowArgs>(args: SelectSubset<T, CalendarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CalendarioClient<$Result.GetResult<Prisma.$CalendarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Calendario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarioFindFirstArgs} args - Arguments to find a Calendario
     * @example
     * // Get one Calendario
     * const calendario = await prisma.calendario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CalendarioFindFirstArgs>(args?: SelectSubset<T, CalendarioFindFirstArgs<ExtArgs>>): Prisma__CalendarioClient<$Result.GetResult<Prisma.$CalendarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Calendario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarioFindFirstOrThrowArgs} args - Arguments to find a Calendario
     * @example
     * // Get one Calendario
     * const calendario = await prisma.calendario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CalendarioFindFirstOrThrowArgs>(args?: SelectSubset<T, CalendarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__CalendarioClient<$Result.GetResult<Prisma.$CalendarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Calendarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Calendarios
     * const calendarios = await prisma.calendario.findMany()
     * 
     * // Get first 10 Calendarios
     * const calendarios = await prisma.calendario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const calendarioWithIdOnly = await prisma.calendario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CalendarioFindManyArgs>(args?: SelectSubset<T, CalendarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Calendario.
     * @param {CalendarioCreateArgs} args - Arguments to create a Calendario.
     * @example
     * // Create one Calendario
     * const Calendario = await prisma.calendario.create({
     *   data: {
     *     // ... data to create a Calendario
     *   }
     * })
     * 
     */
    create<T extends CalendarioCreateArgs>(args: SelectSubset<T, CalendarioCreateArgs<ExtArgs>>): Prisma__CalendarioClient<$Result.GetResult<Prisma.$CalendarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Calendarios.
     * @param {CalendarioCreateManyArgs} args - Arguments to create many Calendarios.
     * @example
     * // Create many Calendarios
     * const calendario = await prisma.calendario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CalendarioCreateManyArgs>(args?: SelectSubset<T, CalendarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Calendarios and returns the data saved in the database.
     * @param {CalendarioCreateManyAndReturnArgs} args - Arguments to create many Calendarios.
     * @example
     * // Create many Calendarios
     * const calendario = await prisma.calendario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Calendarios and only return the `id`
     * const calendarioWithIdOnly = await prisma.calendario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CalendarioCreateManyAndReturnArgs>(args?: SelectSubset<T, CalendarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Calendario.
     * @param {CalendarioDeleteArgs} args - Arguments to delete one Calendario.
     * @example
     * // Delete one Calendario
     * const Calendario = await prisma.calendario.delete({
     *   where: {
     *     // ... filter to delete one Calendario
     *   }
     * })
     * 
     */
    delete<T extends CalendarioDeleteArgs>(args: SelectSubset<T, CalendarioDeleteArgs<ExtArgs>>): Prisma__CalendarioClient<$Result.GetResult<Prisma.$CalendarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Calendario.
     * @param {CalendarioUpdateArgs} args - Arguments to update one Calendario.
     * @example
     * // Update one Calendario
     * const calendario = await prisma.calendario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CalendarioUpdateArgs>(args: SelectSubset<T, CalendarioUpdateArgs<ExtArgs>>): Prisma__CalendarioClient<$Result.GetResult<Prisma.$CalendarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Calendarios.
     * @param {CalendarioDeleteManyArgs} args - Arguments to filter Calendarios to delete.
     * @example
     * // Delete a few Calendarios
     * const { count } = await prisma.calendario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CalendarioDeleteManyArgs>(args?: SelectSubset<T, CalendarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calendarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Calendarios
     * const calendario = await prisma.calendario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CalendarioUpdateManyArgs>(args: SelectSubset<T, CalendarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calendarios and returns the data updated in the database.
     * @param {CalendarioUpdateManyAndReturnArgs} args - Arguments to update many Calendarios.
     * @example
     * // Update many Calendarios
     * const calendario = await prisma.calendario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Calendarios and only return the `id`
     * const calendarioWithIdOnly = await prisma.calendario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CalendarioUpdateManyAndReturnArgs>(args: SelectSubset<T, CalendarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Calendario.
     * @param {CalendarioUpsertArgs} args - Arguments to update or create a Calendario.
     * @example
     * // Update or create a Calendario
     * const calendario = await prisma.calendario.upsert({
     *   create: {
     *     // ... data to create a Calendario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Calendario we want to update
     *   }
     * })
     */
    upsert<T extends CalendarioUpsertArgs>(args: SelectSubset<T, CalendarioUpsertArgs<ExtArgs>>): Prisma__CalendarioClient<$Result.GetResult<Prisma.$CalendarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Calendarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarioCountArgs} args - Arguments to filter Calendarios to count.
     * @example
     * // Count the number of Calendarios
     * const count = await prisma.calendario.count({
     *   where: {
     *     // ... the filter for the Calendarios we want to count
     *   }
     * })
    **/
    count<T extends CalendarioCountArgs>(
      args?: Subset<T, CalendarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CalendarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Calendario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CalendarioAggregateArgs>(args: Subset<T, CalendarioAggregateArgs>): Prisma.PrismaPromise<GetCalendarioAggregateType<T>>

    /**
     * Group by Calendario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CalendarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CalendarioGroupByArgs['orderBy'] }
        : { orderBy?: CalendarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CalendarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalendarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Calendario model
   */
  readonly fields: CalendarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Calendario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CalendarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rutina<T extends RutinaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RutinaDefaultArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Calendario model
   */
  interface CalendarioFieldRefs {
    readonly id: FieldRef<"Calendario", 'Int'>
    readonly usuarioId: FieldRef<"Calendario", 'Int'>
    readonly rutinaId: FieldRef<"Calendario", 'Int'>
    readonly fecha: FieldRef<"Calendario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Calendario findUnique
   */
  export type CalendarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendario
     */
    select?: CalendarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendario
     */
    omit?: CalendarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarioInclude<ExtArgs> | null
    /**
     * Filter, which Calendario to fetch.
     */
    where: CalendarioWhereUniqueInput
  }

  /**
   * Calendario findUniqueOrThrow
   */
  export type CalendarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendario
     */
    select?: CalendarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendario
     */
    omit?: CalendarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarioInclude<ExtArgs> | null
    /**
     * Filter, which Calendario to fetch.
     */
    where: CalendarioWhereUniqueInput
  }

  /**
   * Calendario findFirst
   */
  export type CalendarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendario
     */
    select?: CalendarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendario
     */
    omit?: CalendarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarioInclude<ExtArgs> | null
    /**
     * Filter, which Calendario to fetch.
     */
    where?: CalendarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calendarios to fetch.
     */
    orderBy?: CalendarioOrderByWithRelationInput | CalendarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Calendarios.
     */
    cursor?: CalendarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calendarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calendarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Calendarios.
     */
    distinct?: CalendarioScalarFieldEnum | CalendarioScalarFieldEnum[]
  }

  /**
   * Calendario findFirstOrThrow
   */
  export type CalendarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendario
     */
    select?: CalendarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendario
     */
    omit?: CalendarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarioInclude<ExtArgs> | null
    /**
     * Filter, which Calendario to fetch.
     */
    where?: CalendarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calendarios to fetch.
     */
    orderBy?: CalendarioOrderByWithRelationInput | CalendarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Calendarios.
     */
    cursor?: CalendarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calendarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calendarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Calendarios.
     */
    distinct?: CalendarioScalarFieldEnum | CalendarioScalarFieldEnum[]
  }

  /**
   * Calendario findMany
   */
  export type CalendarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendario
     */
    select?: CalendarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendario
     */
    omit?: CalendarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarioInclude<ExtArgs> | null
    /**
     * Filter, which Calendarios to fetch.
     */
    where?: CalendarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calendarios to fetch.
     */
    orderBy?: CalendarioOrderByWithRelationInput | CalendarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Calendarios.
     */
    cursor?: CalendarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calendarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calendarios.
     */
    skip?: number
    distinct?: CalendarioScalarFieldEnum | CalendarioScalarFieldEnum[]
  }

  /**
   * Calendario create
   */
  export type CalendarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendario
     */
    select?: CalendarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendario
     */
    omit?: CalendarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Calendario.
     */
    data: XOR<CalendarioCreateInput, CalendarioUncheckedCreateInput>
  }

  /**
   * Calendario createMany
   */
  export type CalendarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Calendarios.
     */
    data: CalendarioCreateManyInput | CalendarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Calendario createManyAndReturn
   */
  export type CalendarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendario
     */
    select?: CalendarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Calendario
     */
    omit?: CalendarioOmit<ExtArgs> | null
    /**
     * The data used to create many Calendarios.
     */
    data: CalendarioCreateManyInput | CalendarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Calendario update
   */
  export type CalendarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendario
     */
    select?: CalendarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendario
     */
    omit?: CalendarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Calendario.
     */
    data: XOR<CalendarioUpdateInput, CalendarioUncheckedUpdateInput>
    /**
     * Choose, which Calendario to update.
     */
    where: CalendarioWhereUniqueInput
  }

  /**
   * Calendario updateMany
   */
  export type CalendarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Calendarios.
     */
    data: XOR<CalendarioUpdateManyMutationInput, CalendarioUncheckedUpdateManyInput>
    /**
     * Filter which Calendarios to update
     */
    where?: CalendarioWhereInput
    /**
     * Limit how many Calendarios to update.
     */
    limit?: number
  }

  /**
   * Calendario updateManyAndReturn
   */
  export type CalendarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendario
     */
    select?: CalendarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Calendario
     */
    omit?: CalendarioOmit<ExtArgs> | null
    /**
     * The data used to update Calendarios.
     */
    data: XOR<CalendarioUpdateManyMutationInput, CalendarioUncheckedUpdateManyInput>
    /**
     * Filter which Calendarios to update
     */
    where?: CalendarioWhereInput
    /**
     * Limit how many Calendarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Calendario upsert
   */
  export type CalendarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendario
     */
    select?: CalendarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendario
     */
    omit?: CalendarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Calendario to update in case it exists.
     */
    where: CalendarioWhereUniqueInput
    /**
     * In case the Calendario found by the `where` argument doesn't exist, create a new Calendario with this data.
     */
    create: XOR<CalendarioCreateInput, CalendarioUncheckedCreateInput>
    /**
     * In case the Calendario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CalendarioUpdateInput, CalendarioUncheckedUpdateInput>
  }

  /**
   * Calendario delete
   */
  export type CalendarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendario
     */
    select?: CalendarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendario
     */
    omit?: CalendarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarioInclude<ExtArgs> | null
    /**
     * Filter which Calendario to delete.
     */
    where: CalendarioWhereUniqueInput
  }

  /**
   * Calendario deleteMany
   */
  export type CalendarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Calendarios to delete
     */
    where?: CalendarioWhereInput
    /**
     * Limit how many Calendarios to delete.
     */
    limit?: number
  }

  /**
   * Calendario without action
   */
  export type CalendarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendario
     */
    select?: CalendarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendario
     */
    omit?: CalendarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarioInclude<ExtArgs> | null
  }


  /**
   * Model Entrenador
   */

  export type AggregateEntrenador = {
    _count: EntrenadorCountAggregateOutputType | null
    _avg: EntrenadorAvgAggregateOutputType | null
    _sum: EntrenadorSumAggregateOutputType | null
    _min: EntrenadorMinAggregateOutputType | null
    _max: EntrenadorMaxAggregateOutputType | null
  }

  export type EntrenadorAvgAggregateOutputType = {
    id: number | null
    experiencia: number | null
    precio: number | null
    calificacion: number | null
  }

  export type EntrenadorSumAggregateOutputType = {
    id: number | null
    experiencia: number | null
    precio: number | null
    calificacion: number | null
  }

  export type EntrenadorMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    especialidad: string | null
    descripcion: string | null
    experiencia: number | null
    precio: number | null
    fotoUrl: string | null
    disponible: boolean | null
    calificacion: number | null
  }

  export type EntrenadorMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    especialidad: string | null
    descripcion: string | null
    experiencia: number | null
    precio: number | null
    fotoUrl: string | null
    disponible: boolean | null
    calificacion: number | null
  }

  export type EntrenadorCountAggregateOutputType = {
    id: number
    nombre: number
    especialidad: number
    descripcion: number
    experiencia: number
    precio: number
    fotoUrl: number
    disponible: number
    calificacion: number
    certificaciones: number
    _all: number
  }


  export type EntrenadorAvgAggregateInputType = {
    id?: true
    experiencia?: true
    precio?: true
    calificacion?: true
  }

  export type EntrenadorSumAggregateInputType = {
    id?: true
    experiencia?: true
    precio?: true
    calificacion?: true
  }

  export type EntrenadorMinAggregateInputType = {
    id?: true
    nombre?: true
    especialidad?: true
    descripcion?: true
    experiencia?: true
    precio?: true
    fotoUrl?: true
    disponible?: true
    calificacion?: true
  }

  export type EntrenadorMaxAggregateInputType = {
    id?: true
    nombre?: true
    especialidad?: true
    descripcion?: true
    experiencia?: true
    precio?: true
    fotoUrl?: true
    disponible?: true
    calificacion?: true
  }

  export type EntrenadorCountAggregateInputType = {
    id?: true
    nombre?: true
    especialidad?: true
    descripcion?: true
    experiencia?: true
    precio?: true
    fotoUrl?: true
    disponible?: true
    calificacion?: true
    certificaciones?: true
    _all?: true
  }

  export type EntrenadorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entrenador to aggregate.
     */
    where?: EntrenadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entrenadors to fetch.
     */
    orderBy?: EntrenadorOrderByWithRelationInput | EntrenadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntrenadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entrenadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entrenadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Entrenadors
    **/
    _count?: true | EntrenadorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EntrenadorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EntrenadorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntrenadorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntrenadorMaxAggregateInputType
  }

  export type GetEntrenadorAggregateType<T extends EntrenadorAggregateArgs> = {
        [P in keyof T & keyof AggregateEntrenador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntrenador[P]>
      : GetScalarType<T[P], AggregateEntrenador[P]>
  }




  export type EntrenadorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntrenadorWhereInput
    orderBy?: EntrenadorOrderByWithAggregationInput | EntrenadorOrderByWithAggregationInput[]
    by: EntrenadorScalarFieldEnum[] | EntrenadorScalarFieldEnum
    having?: EntrenadorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntrenadorCountAggregateInputType | true
    _avg?: EntrenadorAvgAggregateInputType
    _sum?: EntrenadorSumAggregateInputType
    _min?: EntrenadorMinAggregateInputType
    _max?: EntrenadorMaxAggregateInputType
  }

  export type EntrenadorGroupByOutputType = {
    id: number
    nombre: string
    especialidad: string
    descripcion: string
    experiencia: number
    precio: number
    fotoUrl: string | null
    disponible: boolean
    calificacion: number | null
    certificaciones: string[]
    _count: EntrenadorCountAggregateOutputType | null
    _avg: EntrenadorAvgAggregateOutputType | null
    _sum: EntrenadorSumAggregateOutputType | null
    _min: EntrenadorMinAggregateOutputType | null
    _max: EntrenadorMaxAggregateOutputType | null
  }

  type GetEntrenadorGroupByPayload<T extends EntrenadorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntrenadorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntrenadorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntrenadorGroupByOutputType[P]>
            : GetScalarType<T[P], EntrenadorGroupByOutputType[P]>
        }
      >
    >


  export type EntrenadorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    especialidad?: boolean
    descripcion?: boolean
    experiencia?: boolean
    precio?: boolean
    fotoUrl?: boolean
    disponible?: boolean
    calificacion?: boolean
    certificaciones?: boolean
    contrataciones?: boolean | Entrenador$contratacionesArgs<ExtArgs>
    _count?: boolean | EntrenadorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entrenador"]>

  export type EntrenadorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    especialidad?: boolean
    descripcion?: boolean
    experiencia?: boolean
    precio?: boolean
    fotoUrl?: boolean
    disponible?: boolean
    calificacion?: boolean
    certificaciones?: boolean
  }, ExtArgs["result"]["entrenador"]>

  export type EntrenadorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    especialidad?: boolean
    descripcion?: boolean
    experiencia?: boolean
    precio?: boolean
    fotoUrl?: boolean
    disponible?: boolean
    calificacion?: boolean
    certificaciones?: boolean
  }, ExtArgs["result"]["entrenador"]>

  export type EntrenadorSelectScalar = {
    id?: boolean
    nombre?: boolean
    especialidad?: boolean
    descripcion?: boolean
    experiencia?: boolean
    precio?: boolean
    fotoUrl?: boolean
    disponible?: boolean
    calificacion?: boolean
    certificaciones?: boolean
  }

  export type EntrenadorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "especialidad" | "descripcion" | "experiencia" | "precio" | "fotoUrl" | "disponible" | "calificacion" | "certificaciones", ExtArgs["result"]["entrenador"]>
  export type EntrenadorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contrataciones?: boolean | Entrenador$contratacionesArgs<ExtArgs>
    _count?: boolean | EntrenadorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EntrenadorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EntrenadorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EntrenadorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Entrenador"
    objects: {
      contrataciones: Prisma.$ContratacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      especialidad: string
      descripcion: string
      experiencia: number
      precio: number
      fotoUrl: string | null
      disponible: boolean
      calificacion: number | null
      certificaciones: string[]
    }, ExtArgs["result"]["entrenador"]>
    composites: {}
  }

  type EntrenadorGetPayload<S extends boolean | null | undefined | EntrenadorDefaultArgs> = $Result.GetResult<Prisma.$EntrenadorPayload, S>

  type EntrenadorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EntrenadorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntrenadorCountAggregateInputType | true
    }

  export interface EntrenadorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Entrenador'], meta: { name: 'Entrenador' } }
    /**
     * Find zero or one Entrenador that matches the filter.
     * @param {EntrenadorFindUniqueArgs} args - Arguments to find a Entrenador
     * @example
     * // Get one Entrenador
     * const entrenador = await prisma.entrenador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntrenadorFindUniqueArgs>(args: SelectSubset<T, EntrenadorFindUniqueArgs<ExtArgs>>): Prisma__EntrenadorClient<$Result.GetResult<Prisma.$EntrenadorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entrenador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EntrenadorFindUniqueOrThrowArgs} args - Arguments to find a Entrenador
     * @example
     * // Get one Entrenador
     * const entrenador = await prisma.entrenador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntrenadorFindUniqueOrThrowArgs>(args: SelectSubset<T, EntrenadorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EntrenadorClient<$Result.GetResult<Prisma.$EntrenadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entrenador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrenadorFindFirstArgs} args - Arguments to find a Entrenador
     * @example
     * // Get one Entrenador
     * const entrenador = await prisma.entrenador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntrenadorFindFirstArgs>(args?: SelectSubset<T, EntrenadorFindFirstArgs<ExtArgs>>): Prisma__EntrenadorClient<$Result.GetResult<Prisma.$EntrenadorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entrenador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrenadorFindFirstOrThrowArgs} args - Arguments to find a Entrenador
     * @example
     * // Get one Entrenador
     * const entrenador = await prisma.entrenador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntrenadorFindFirstOrThrowArgs>(args?: SelectSubset<T, EntrenadorFindFirstOrThrowArgs<ExtArgs>>): Prisma__EntrenadorClient<$Result.GetResult<Prisma.$EntrenadorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entrenadors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrenadorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entrenadors
     * const entrenadors = await prisma.entrenador.findMany()
     * 
     * // Get first 10 Entrenadors
     * const entrenadors = await prisma.entrenador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entrenadorWithIdOnly = await prisma.entrenador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EntrenadorFindManyArgs>(args?: SelectSubset<T, EntrenadorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntrenadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entrenador.
     * @param {EntrenadorCreateArgs} args - Arguments to create a Entrenador.
     * @example
     * // Create one Entrenador
     * const Entrenador = await prisma.entrenador.create({
     *   data: {
     *     // ... data to create a Entrenador
     *   }
     * })
     * 
     */
    create<T extends EntrenadorCreateArgs>(args: SelectSubset<T, EntrenadorCreateArgs<ExtArgs>>): Prisma__EntrenadorClient<$Result.GetResult<Prisma.$EntrenadorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entrenadors.
     * @param {EntrenadorCreateManyArgs} args - Arguments to create many Entrenadors.
     * @example
     * // Create many Entrenadors
     * const entrenador = await prisma.entrenador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EntrenadorCreateManyArgs>(args?: SelectSubset<T, EntrenadorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Entrenadors and returns the data saved in the database.
     * @param {EntrenadorCreateManyAndReturnArgs} args - Arguments to create many Entrenadors.
     * @example
     * // Create many Entrenadors
     * const entrenador = await prisma.entrenador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Entrenadors and only return the `id`
     * const entrenadorWithIdOnly = await prisma.entrenador.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EntrenadorCreateManyAndReturnArgs>(args?: SelectSubset<T, EntrenadorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntrenadorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Entrenador.
     * @param {EntrenadorDeleteArgs} args - Arguments to delete one Entrenador.
     * @example
     * // Delete one Entrenador
     * const Entrenador = await prisma.entrenador.delete({
     *   where: {
     *     // ... filter to delete one Entrenador
     *   }
     * })
     * 
     */
    delete<T extends EntrenadorDeleteArgs>(args: SelectSubset<T, EntrenadorDeleteArgs<ExtArgs>>): Prisma__EntrenadorClient<$Result.GetResult<Prisma.$EntrenadorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entrenador.
     * @param {EntrenadorUpdateArgs} args - Arguments to update one Entrenador.
     * @example
     * // Update one Entrenador
     * const entrenador = await prisma.entrenador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EntrenadorUpdateArgs>(args: SelectSubset<T, EntrenadorUpdateArgs<ExtArgs>>): Prisma__EntrenadorClient<$Result.GetResult<Prisma.$EntrenadorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entrenadors.
     * @param {EntrenadorDeleteManyArgs} args - Arguments to filter Entrenadors to delete.
     * @example
     * // Delete a few Entrenadors
     * const { count } = await prisma.entrenador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EntrenadorDeleteManyArgs>(args?: SelectSubset<T, EntrenadorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entrenadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrenadorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entrenadors
     * const entrenador = await prisma.entrenador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EntrenadorUpdateManyArgs>(args: SelectSubset<T, EntrenadorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entrenadors and returns the data updated in the database.
     * @param {EntrenadorUpdateManyAndReturnArgs} args - Arguments to update many Entrenadors.
     * @example
     * // Update many Entrenadors
     * const entrenador = await prisma.entrenador.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Entrenadors and only return the `id`
     * const entrenadorWithIdOnly = await prisma.entrenador.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EntrenadorUpdateManyAndReturnArgs>(args: SelectSubset<T, EntrenadorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntrenadorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Entrenador.
     * @param {EntrenadorUpsertArgs} args - Arguments to update or create a Entrenador.
     * @example
     * // Update or create a Entrenador
     * const entrenador = await prisma.entrenador.upsert({
     *   create: {
     *     // ... data to create a Entrenador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entrenador we want to update
     *   }
     * })
     */
    upsert<T extends EntrenadorUpsertArgs>(args: SelectSubset<T, EntrenadorUpsertArgs<ExtArgs>>): Prisma__EntrenadorClient<$Result.GetResult<Prisma.$EntrenadorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Entrenadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrenadorCountArgs} args - Arguments to filter Entrenadors to count.
     * @example
     * // Count the number of Entrenadors
     * const count = await prisma.entrenador.count({
     *   where: {
     *     // ... the filter for the Entrenadors we want to count
     *   }
     * })
    **/
    count<T extends EntrenadorCountArgs>(
      args?: Subset<T, EntrenadorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntrenadorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entrenador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrenadorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EntrenadorAggregateArgs>(args: Subset<T, EntrenadorAggregateArgs>): Prisma.PrismaPromise<GetEntrenadorAggregateType<T>>

    /**
     * Group by Entrenador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrenadorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EntrenadorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntrenadorGroupByArgs['orderBy'] }
        : { orderBy?: EntrenadorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EntrenadorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntrenadorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Entrenador model
   */
  readonly fields: EntrenadorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Entrenador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntrenadorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contrataciones<T extends Entrenador$contratacionesArgs<ExtArgs> = {}>(args?: Subset<T, Entrenador$contratacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContratacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Entrenador model
   */
  interface EntrenadorFieldRefs {
    readonly id: FieldRef<"Entrenador", 'Int'>
    readonly nombre: FieldRef<"Entrenador", 'String'>
    readonly especialidad: FieldRef<"Entrenador", 'String'>
    readonly descripcion: FieldRef<"Entrenador", 'String'>
    readonly experiencia: FieldRef<"Entrenador", 'Int'>
    readonly precio: FieldRef<"Entrenador", 'Float'>
    readonly fotoUrl: FieldRef<"Entrenador", 'String'>
    readonly disponible: FieldRef<"Entrenador", 'Boolean'>
    readonly calificacion: FieldRef<"Entrenador", 'Float'>
    readonly certificaciones: FieldRef<"Entrenador", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Entrenador findUnique
   */
  export type EntrenadorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenador
     */
    select?: EntrenadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenador
     */
    omit?: EntrenadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadorInclude<ExtArgs> | null
    /**
     * Filter, which Entrenador to fetch.
     */
    where: EntrenadorWhereUniqueInput
  }

  /**
   * Entrenador findUniqueOrThrow
   */
  export type EntrenadorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenador
     */
    select?: EntrenadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenador
     */
    omit?: EntrenadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadorInclude<ExtArgs> | null
    /**
     * Filter, which Entrenador to fetch.
     */
    where: EntrenadorWhereUniqueInput
  }

  /**
   * Entrenador findFirst
   */
  export type EntrenadorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenador
     */
    select?: EntrenadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenador
     */
    omit?: EntrenadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadorInclude<ExtArgs> | null
    /**
     * Filter, which Entrenador to fetch.
     */
    where?: EntrenadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entrenadors to fetch.
     */
    orderBy?: EntrenadorOrderByWithRelationInput | EntrenadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entrenadors.
     */
    cursor?: EntrenadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entrenadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entrenadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entrenadors.
     */
    distinct?: EntrenadorScalarFieldEnum | EntrenadorScalarFieldEnum[]
  }

  /**
   * Entrenador findFirstOrThrow
   */
  export type EntrenadorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenador
     */
    select?: EntrenadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenador
     */
    omit?: EntrenadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadorInclude<ExtArgs> | null
    /**
     * Filter, which Entrenador to fetch.
     */
    where?: EntrenadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entrenadors to fetch.
     */
    orderBy?: EntrenadorOrderByWithRelationInput | EntrenadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entrenadors.
     */
    cursor?: EntrenadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entrenadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entrenadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entrenadors.
     */
    distinct?: EntrenadorScalarFieldEnum | EntrenadorScalarFieldEnum[]
  }

  /**
   * Entrenador findMany
   */
  export type EntrenadorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenador
     */
    select?: EntrenadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenador
     */
    omit?: EntrenadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadorInclude<ExtArgs> | null
    /**
     * Filter, which Entrenadors to fetch.
     */
    where?: EntrenadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entrenadors to fetch.
     */
    orderBy?: EntrenadorOrderByWithRelationInput | EntrenadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Entrenadors.
     */
    cursor?: EntrenadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entrenadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entrenadors.
     */
    skip?: number
    distinct?: EntrenadorScalarFieldEnum | EntrenadorScalarFieldEnum[]
  }

  /**
   * Entrenador create
   */
  export type EntrenadorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenador
     */
    select?: EntrenadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenador
     */
    omit?: EntrenadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadorInclude<ExtArgs> | null
    /**
     * The data needed to create a Entrenador.
     */
    data: XOR<EntrenadorCreateInput, EntrenadorUncheckedCreateInput>
  }

  /**
   * Entrenador createMany
   */
  export type EntrenadorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Entrenadors.
     */
    data: EntrenadorCreateManyInput | EntrenadorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entrenador createManyAndReturn
   */
  export type EntrenadorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenador
     */
    select?: EntrenadorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenador
     */
    omit?: EntrenadorOmit<ExtArgs> | null
    /**
     * The data used to create many Entrenadors.
     */
    data: EntrenadorCreateManyInput | EntrenadorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entrenador update
   */
  export type EntrenadorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenador
     */
    select?: EntrenadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenador
     */
    omit?: EntrenadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadorInclude<ExtArgs> | null
    /**
     * The data needed to update a Entrenador.
     */
    data: XOR<EntrenadorUpdateInput, EntrenadorUncheckedUpdateInput>
    /**
     * Choose, which Entrenador to update.
     */
    where: EntrenadorWhereUniqueInput
  }

  /**
   * Entrenador updateMany
   */
  export type EntrenadorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Entrenadors.
     */
    data: XOR<EntrenadorUpdateManyMutationInput, EntrenadorUncheckedUpdateManyInput>
    /**
     * Filter which Entrenadors to update
     */
    where?: EntrenadorWhereInput
    /**
     * Limit how many Entrenadors to update.
     */
    limit?: number
  }

  /**
   * Entrenador updateManyAndReturn
   */
  export type EntrenadorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenador
     */
    select?: EntrenadorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenador
     */
    omit?: EntrenadorOmit<ExtArgs> | null
    /**
     * The data used to update Entrenadors.
     */
    data: XOR<EntrenadorUpdateManyMutationInput, EntrenadorUncheckedUpdateManyInput>
    /**
     * Filter which Entrenadors to update
     */
    where?: EntrenadorWhereInput
    /**
     * Limit how many Entrenadors to update.
     */
    limit?: number
  }

  /**
   * Entrenador upsert
   */
  export type EntrenadorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenador
     */
    select?: EntrenadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenador
     */
    omit?: EntrenadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadorInclude<ExtArgs> | null
    /**
     * The filter to search for the Entrenador to update in case it exists.
     */
    where: EntrenadorWhereUniqueInput
    /**
     * In case the Entrenador found by the `where` argument doesn't exist, create a new Entrenador with this data.
     */
    create: XOR<EntrenadorCreateInput, EntrenadorUncheckedCreateInput>
    /**
     * In case the Entrenador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntrenadorUpdateInput, EntrenadorUncheckedUpdateInput>
  }

  /**
   * Entrenador delete
   */
  export type EntrenadorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenador
     */
    select?: EntrenadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenador
     */
    omit?: EntrenadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadorInclude<ExtArgs> | null
    /**
     * Filter which Entrenador to delete.
     */
    where: EntrenadorWhereUniqueInput
  }

  /**
   * Entrenador deleteMany
   */
  export type EntrenadorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entrenadors to delete
     */
    where?: EntrenadorWhereInput
    /**
     * Limit how many Entrenadors to delete.
     */
    limit?: number
  }

  /**
   * Entrenador.contrataciones
   */
  export type Entrenador$contratacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratacion
     */
    select?: ContratacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contratacion
     */
    omit?: ContratacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratacionInclude<ExtArgs> | null
    where?: ContratacionWhereInput
    orderBy?: ContratacionOrderByWithRelationInput | ContratacionOrderByWithRelationInput[]
    cursor?: ContratacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContratacionScalarFieldEnum | ContratacionScalarFieldEnum[]
  }

  /**
   * Entrenador without action
   */
  export type EntrenadorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenador
     */
    select?: EntrenadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenador
     */
    omit?: EntrenadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadorInclude<ExtArgs> | null
  }


  /**
   * Model Contratacion
   */

  export type AggregateContratacion = {
    _count: ContratacionCountAggregateOutputType | null
    _avg: ContratacionAvgAggregateOutputType | null
    _sum: ContratacionSumAggregateOutputType | null
    _min: ContratacionMinAggregateOutputType | null
    _max: ContratacionMaxAggregateOutputType | null
  }

  export type ContratacionAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    entrenadorId: number | null
    precio: number | null
  }

  export type ContratacionSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    entrenadorId: number | null
    precio: number | null
  }

  export type ContratacionMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    entrenadorId: number | null
    fechaInicio: Date | null
    fechaFin: Date | null
    estado: string | null
    planSeleccionado: string | null
    precio: number | null
  }

  export type ContratacionMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    entrenadorId: number | null
    fechaInicio: Date | null
    fechaFin: Date | null
    estado: string | null
    planSeleccionado: string | null
    precio: number | null
  }

  export type ContratacionCountAggregateOutputType = {
    id: number
    usuarioId: number
    entrenadorId: number
    fechaInicio: number
    fechaFin: number
    estado: number
    planSeleccionado: number
    precio: number
    _all: number
  }


  export type ContratacionAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    entrenadorId?: true
    precio?: true
  }

  export type ContratacionSumAggregateInputType = {
    id?: true
    usuarioId?: true
    entrenadorId?: true
    precio?: true
  }

  export type ContratacionMinAggregateInputType = {
    id?: true
    usuarioId?: true
    entrenadorId?: true
    fechaInicio?: true
    fechaFin?: true
    estado?: true
    planSeleccionado?: true
    precio?: true
  }

  export type ContratacionMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    entrenadorId?: true
    fechaInicio?: true
    fechaFin?: true
    estado?: true
    planSeleccionado?: true
    precio?: true
  }

  export type ContratacionCountAggregateInputType = {
    id?: true
    usuarioId?: true
    entrenadorId?: true
    fechaInicio?: true
    fechaFin?: true
    estado?: true
    planSeleccionado?: true
    precio?: true
    _all?: true
  }

  export type ContratacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contratacion to aggregate.
     */
    where?: ContratacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contratacions to fetch.
     */
    orderBy?: ContratacionOrderByWithRelationInput | ContratacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContratacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contratacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contratacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contratacions
    **/
    _count?: true | ContratacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContratacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContratacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContratacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContratacionMaxAggregateInputType
  }

  export type GetContratacionAggregateType<T extends ContratacionAggregateArgs> = {
        [P in keyof T & keyof AggregateContratacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContratacion[P]>
      : GetScalarType<T[P], AggregateContratacion[P]>
  }




  export type ContratacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContratacionWhereInput
    orderBy?: ContratacionOrderByWithAggregationInput | ContratacionOrderByWithAggregationInput[]
    by: ContratacionScalarFieldEnum[] | ContratacionScalarFieldEnum
    having?: ContratacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContratacionCountAggregateInputType | true
    _avg?: ContratacionAvgAggregateInputType
    _sum?: ContratacionSumAggregateInputType
    _min?: ContratacionMinAggregateInputType
    _max?: ContratacionMaxAggregateInputType
  }

  export type ContratacionGroupByOutputType = {
    id: number
    usuarioId: number
    entrenadorId: number
    fechaInicio: Date
    fechaFin: Date | null
    estado: string
    planSeleccionado: string
    precio: number
    _count: ContratacionCountAggregateOutputType | null
    _avg: ContratacionAvgAggregateOutputType | null
    _sum: ContratacionSumAggregateOutputType | null
    _min: ContratacionMinAggregateOutputType | null
    _max: ContratacionMaxAggregateOutputType | null
  }

  type GetContratacionGroupByPayload<T extends ContratacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContratacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContratacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContratacionGroupByOutputType[P]>
            : GetScalarType<T[P], ContratacionGroupByOutputType[P]>
        }
      >
    >


  export type ContratacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    entrenadorId?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    estado?: boolean
    planSeleccionado?: boolean
    precio?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    entrenador?: boolean | EntrenadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contratacion"]>

  export type ContratacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    entrenadorId?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    estado?: boolean
    planSeleccionado?: boolean
    precio?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    entrenador?: boolean | EntrenadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contratacion"]>

  export type ContratacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    entrenadorId?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    estado?: boolean
    planSeleccionado?: boolean
    precio?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    entrenador?: boolean | EntrenadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contratacion"]>

  export type ContratacionSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    entrenadorId?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    estado?: boolean
    planSeleccionado?: boolean
    precio?: boolean
  }

  export type ContratacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "entrenadorId" | "fechaInicio" | "fechaFin" | "estado" | "planSeleccionado" | "precio", ExtArgs["result"]["contratacion"]>
  export type ContratacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    entrenador?: boolean | EntrenadorDefaultArgs<ExtArgs>
  }
  export type ContratacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    entrenador?: boolean | EntrenadorDefaultArgs<ExtArgs>
  }
  export type ContratacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    entrenador?: boolean | EntrenadorDefaultArgs<ExtArgs>
  }

  export type $ContratacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contratacion"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      entrenador: Prisma.$EntrenadorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      entrenadorId: number
      fechaInicio: Date
      fechaFin: Date | null
      estado: string
      planSeleccionado: string
      precio: number
    }, ExtArgs["result"]["contratacion"]>
    composites: {}
  }

  type ContratacionGetPayload<S extends boolean | null | undefined | ContratacionDefaultArgs> = $Result.GetResult<Prisma.$ContratacionPayload, S>

  type ContratacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContratacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContratacionCountAggregateInputType | true
    }

  export interface ContratacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contratacion'], meta: { name: 'Contratacion' } }
    /**
     * Find zero or one Contratacion that matches the filter.
     * @param {ContratacionFindUniqueArgs} args - Arguments to find a Contratacion
     * @example
     * // Get one Contratacion
     * const contratacion = await prisma.contratacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContratacionFindUniqueArgs>(args: SelectSubset<T, ContratacionFindUniqueArgs<ExtArgs>>): Prisma__ContratacionClient<$Result.GetResult<Prisma.$ContratacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contratacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContratacionFindUniqueOrThrowArgs} args - Arguments to find a Contratacion
     * @example
     * // Get one Contratacion
     * const contratacion = await prisma.contratacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContratacionFindUniqueOrThrowArgs>(args: SelectSubset<T, ContratacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContratacionClient<$Result.GetResult<Prisma.$ContratacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contratacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratacionFindFirstArgs} args - Arguments to find a Contratacion
     * @example
     * // Get one Contratacion
     * const contratacion = await prisma.contratacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContratacionFindFirstArgs>(args?: SelectSubset<T, ContratacionFindFirstArgs<ExtArgs>>): Prisma__ContratacionClient<$Result.GetResult<Prisma.$ContratacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contratacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratacionFindFirstOrThrowArgs} args - Arguments to find a Contratacion
     * @example
     * // Get one Contratacion
     * const contratacion = await prisma.contratacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContratacionFindFirstOrThrowArgs>(args?: SelectSubset<T, ContratacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContratacionClient<$Result.GetResult<Prisma.$ContratacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contratacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contratacions
     * const contratacions = await prisma.contratacion.findMany()
     * 
     * // Get first 10 Contratacions
     * const contratacions = await prisma.contratacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contratacionWithIdOnly = await prisma.contratacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContratacionFindManyArgs>(args?: SelectSubset<T, ContratacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContratacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contratacion.
     * @param {ContratacionCreateArgs} args - Arguments to create a Contratacion.
     * @example
     * // Create one Contratacion
     * const Contratacion = await prisma.contratacion.create({
     *   data: {
     *     // ... data to create a Contratacion
     *   }
     * })
     * 
     */
    create<T extends ContratacionCreateArgs>(args: SelectSubset<T, ContratacionCreateArgs<ExtArgs>>): Prisma__ContratacionClient<$Result.GetResult<Prisma.$ContratacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contratacions.
     * @param {ContratacionCreateManyArgs} args - Arguments to create many Contratacions.
     * @example
     * // Create many Contratacions
     * const contratacion = await prisma.contratacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContratacionCreateManyArgs>(args?: SelectSubset<T, ContratacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contratacions and returns the data saved in the database.
     * @param {ContratacionCreateManyAndReturnArgs} args - Arguments to create many Contratacions.
     * @example
     * // Create many Contratacions
     * const contratacion = await prisma.contratacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contratacions and only return the `id`
     * const contratacionWithIdOnly = await prisma.contratacion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContratacionCreateManyAndReturnArgs>(args?: SelectSubset<T, ContratacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContratacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contratacion.
     * @param {ContratacionDeleteArgs} args - Arguments to delete one Contratacion.
     * @example
     * // Delete one Contratacion
     * const Contratacion = await prisma.contratacion.delete({
     *   where: {
     *     // ... filter to delete one Contratacion
     *   }
     * })
     * 
     */
    delete<T extends ContratacionDeleteArgs>(args: SelectSubset<T, ContratacionDeleteArgs<ExtArgs>>): Prisma__ContratacionClient<$Result.GetResult<Prisma.$ContratacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contratacion.
     * @param {ContratacionUpdateArgs} args - Arguments to update one Contratacion.
     * @example
     * // Update one Contratacion
     * const contratacion = await prisma.contratacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContratacionUpdateArgs>(args: SelectSubset<T, ContratacionUpdateArgs<ExtArgs>>): Prisma__ContratacionClient<$Result.GetResult<Prisma.$ContratacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contratacions.
     * @param {ContratacionDeleteManyArgs} args - Arguments to filter Contratacions to delete.
     * @example
     * // Delete a few Contratacions
     * const { count } = await prisma.contratacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContratacionDeleteManyArgs>(args?: SelectSubset<T, ContratacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contratacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contratacions
     * const contratacion = await prisma.contratacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContratacionUpdateManyArgs>(args: SelectSubset<T, ContratacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contratacions and returns the data updated in the database.
     * @param {ContratacionUpdateManyAndReturnArgs} args - Arguments to update many Contratacions.
     * @example
     * // Update many Contratacions
     * const contratacion = await prisma.contratacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contratacions and only return the `id`
     * const contratacionWithIdOnly = await prisma.contratacion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContratacionUpdateManyAndReturnArgs>(args: SelectSubset<T, ContratacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContratacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contratacion.
     * @param {ContratacionUpsertArgs} args - Arguments to update or create a Contratacion.
     * @example
     * // Update or create a Contratacion
     * const contratacion = await prisma.contratacion.upsert({
     *   create: {
     *     // ... data to create a Contratacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contratacion we want to update
     *   }
     * })
     */
    upsert<T extends ContratacionUpsertArgs>(args: SelectSubset<T, ContratacionUpsertArgs<ExtArgs>>): Prisma__ContratacionClient<$Result.GetResult<Prisma.$ContratacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contratacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratacionCountArgs} args - Arguments to filter Contratacions to count.
     * @example
     * // Count the number of Contratacions
     * const count = await prisma.contratacion.count({
     *   where: {
     *     // ... the filter for the Contratacions we want to count
     *   }
     * })
    **/
    count<T extends ContratacionCountArgs>(
      args?: Subset<T, ContratacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContratacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contratacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContratacionAggregateArgs>(args: Subset<T, ContratacionAggregateArgs>): Prisma.PrismaPromise<GetContratacionAggregateType<T>>

    /**
     * Group by Contratacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContratacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContratacionGroupByArgs['orderBy'] }
        : { orderBy?: ContratacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContratacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContratacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contratacion model
   */
  readonly fields: ContratacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contratacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContratacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    entrenador<T extends EntrenadorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EntrenadorDefaultArgs<ExtArgs>>): Prisma__EntrenadorClient<$Result.GetResult<Prisma.$EntrenadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contratacion model
   */
  interface ContratacionFieldRefs {
    readonly id: FieldRef<"Contratacion", 'Int'>
    readonly usuarioId: FieldRef<"Contratacion", 'Int'>
    readonly entrenadorId: FieldRef<"Contratacion", 'Int'>
    readonly fechaInicio: FieldRef<"Contratacion", 'DateTime'>
    readonly fechaFin: FieldRef<"Contratacion", 'DateTime'>
    readonly estado: FieldRef<"Contratacion", 'String'>
    readonly planSeleccionado: FieldRef<"Contratacion", 'String'>
    readonly precio: FieldRef<"Contratacion", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Contratacion findUnique
   */
  export type ContratacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratacion
     */
    select?: ContratacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contratacion
     */
    omit?: ContratacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratacionInclude<ExtArgs> | null
    /**
     * Filter, which Contratacion to fetch.
     */
    where: ContratacionWhereUniqueInput
  }

  /**
   * Contratacion findUniqueOrThrow
   */
  export type ContratacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratacion
     */
    select?: ContratacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contratacion
     */
    omit?: ContratacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratacionInclude<ExtArgs> | null
    /**
     * Filter, which Contratacion to fetch.
     */
    where: ContratacionWhereUniqueInput
  }

  /**
   * Contratacion findFirst
   */
  export type ContratacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratacion
     */
    select?: ContratacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contratacion
     */
    omit?: ContratacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratacionInclude<ExtArgs> | null
    /**
     * Filter, which Contratacion to fetch.
     */
    where?: ContratacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contratacions to fetch.
     */
    orderBy?: ContratacionOrderByWithRelationInput | ContratacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contratacions.
     */
    cursor?: ContratacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contratacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contratacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contratacions.
     */
    distinct?: ContratacionScalarFieldEnum | ContratacionScalarFieldEnum[]
  }

  /**
   * Contratacion findFirstOrThrow
   */
  export type ContratacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratacion
     */
    select?: ContratacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contratacion
     */
    omit?: ContratacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratacionInclude<ExtArgs> | null
    /**
     * Filter, which Contratacion to fetch.
     */
    where?: ContratacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contratacions to fetch.
     */
    orderBy?: ContratacionOrderByWithRelationInput | ContratacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contratacions.
     */
    cursor?: ContratacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contratacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contratacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contratacions.
     */
    distinct?: ContratacionScalarFieldEnum | ContratacionScalarFieldEnum[]
  }

  /**
   * Contratacion findMany
   */
  export type ContratacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratacion
     */
    select?: ContratacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contratacion
     */
    omit?: ContratacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratacionInclude<ExtArgs> | null
    /**
     * Filter, which Contratacions to fetch.
     */
    where?: ContratacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contratacions to fetch.
     */
    orderBy?: ContratacionOrderByWithRelationInput | ContratacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contratacions.
     */
    cursor?: ContratacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contratacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contratacions.
     */
    skip?: number
    distinct?: ContratacionScalarFieldEnum | ContratacionScalarFieldEnum[]
  }

  /**
   * Contratacion create
   */
  export type ContratacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratacion
     */
    select?: ContratacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contratacion
     */
    omit?: ContratacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratacionInclude<ExtArgs> | null
    /**
     * The data needed to create a Contratacion.
     */
    data: XOR<ContratacionCreateInput, ContratacionUncheckedCreateInput>
  }

  /**
   * Contratacion createMany
   */
  export type ContratacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contratacions.
     */
    data: ContratacionCreateManyInput | ContratacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contratacion createManyAndReturn
   */
  export type ContratacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratacion
     */
    select?: ContratacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contratacion
     */
    omit?: ContratacionOmit<ExtArgs> | null
    /**
     * The data used to create many Contratacions.
     */
    data: ContratacionCreateManyInput | ContratacionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratacionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contratacion update
   */
  export type ContratacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratacion
     */
    select?: ContratacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contratacion
     */
    omit?: ContratacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratacionInclude<ExtArgs> | null
    /**
     * The data needed to update a Contratacion.
     */
    data: XOR<ContratacionUpdateInput, ContratacionUncheckedUpdateInput>
    /**
     * Choose, which Contratacion to update.
     */
    where: ContratacionWhereUniqueInput
  }

  /**
   * Contratacion updateMany
   */
  export type ContratacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contratacions.
     */
    data: XOR<ContratacionUpdateManyMutationInput, ContratacionUncheckedUpdateManyInput>
    /**
     * Filter which Contratacions to update
     */
    where?: ContratacionWhereInput
    /**
     * Limit how many Contratacions to update.
     */
    limit?: number
  }

  /**
   * Contratacion updateManyAndReturn
   */
  export type ContratacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratacion
     */
    select?: ContratacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contratacion
     */
    omit?: ContratacionOmit<ExtArgs> | null
    /**
     * The data used to update Contratacions.
     */
    data: XOR<ContratacionUpdateManyMutationInput, ContratacionUncheckedUpdateManyInput>
    /**
     * Filter which Contratacions to update
     */
    where?: ContratacionWhereInput
    /**
     * Limit how many Contratacions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratacionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contratacion upsert
   */
  export type ContratacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratacion
     */
    select?: ContratacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contratacion
     */
    omit?: ContratacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratacionInclude<ExtArgs> | null
    /**
     * The filter to search for the Contratacion to update in case it exists.
     */
    where: ContratacionWhereUniqueInput
    /**
     * In case the Contratacion found by the `where` argument doesn't exist, create a new Contratacion with this data.
     */
    create: XOR<ContratacionCreateInput, ContratacionUncheckedCreateInput>
    /**
     * In case the Contratacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContratacionUpdateInput, ContratacionUncheckedUpdateInput>
  }

  /**
   * Contratacion delete
   */
  export type ContratacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratacion
     */
    select?: ContratacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contratacion
     */
    omit?: ContratacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratacionInclude<ExtArgs> | null
    /**
     * Filter which Contratacion to delete.
     */
    where: ContratacionWhereUniqueInput
  }

  /**
   * Contratacion deleteMany
   */
  export type ContratacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contratacions to delete
     */
    where?: ContratacionWhereInput
    /**
     * Limit how many Contratacions to delete.
     */
    limit?: number
  }

  /**
   * Contratacion without action
   */
  export type ContratacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratacion
     */
    select?: ContratacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contratacion
     */
    omit?: ContratacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratacionInclude<ExtArgs> | null
  }


  /**
   * Model Challenge
   */

  export type AggregateChallenge = {
    _count: ChallengeCountAggregateOutputType | null
    _avg: ChallengeAvgAggregateOutputType | null
    _sum: ChallengeSumAggregateOutputType | null
    _min: ChallengeMinAggregateOutputType | null
    _max: ChallengeMaxAggregateOutputType | null
  }

  export type ChallengeAvgAggregateOutputType = {
    id: number | null
    participantes: number | null
  }

  export type ChallengeSumAggregateOutputType = {
    id: number | null
    participantes: number | null
  }

  export type ChallengeMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    descripcion: string | null
    activo: boolean | null
    fechaInicio: Date | null
    fechaFin: Date | null
    participantes: number | null
    nivel: string | null
    tipo: string | null
    recompensa: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChallengeMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    descripcion: string | null
    activo: boolean | null
    fechaInicio: Date | null
    fechaFin: Date | null
    participantes: number | null
    nivel: string | null
    tipo: string | null
    recompensa: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChallengeCountAggregateOutputType = {
    id: number
    titulo: number
    descripcion: number
    activo: number
    fechaInicio: number
    fechaFin: number
    participantes: number
    nivel: number
    tipo: number
    objetivos: number
    recompensa: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChallengeAvgAggregateInputType = {
    id?: true
    participantes?: true
  }

  export type ChallengeSumAggregateInputType = {
    id?: true
    participantes?: true
  }

  export type ChallengeMinAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    activo?: true
    fechaInicio?: true
    fechaFin?: true
    participantes?: true
    nivel?: true
    tipo?: true
    recompensa?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChallengeMaxAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    activo?: true
    fechaInicio?: true
    fechaFin?: true
    participantes?: true
    nivel?: true
    tipo?: true
    recompensa?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChallengeCountAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    activo?: true
    fechaInicio?: true
    fechaFin?: true
    participantes?: true
    nivel?: true
    tipo?: true
    objetivos?: true
    recompensa?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChallengeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Challenge to aggregate.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Challenges
    **/
    _count?: true | ChallengeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChallengeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChallengeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChallengeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChallengeMaxAggregateInputType
  }

  export type GetChallengeAggregateType<T extends ChallengeAggregateArgs> = {
        [P in keyof T & keyof AggregateChallenge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallenge[P]>
      : GetScalarType<T[P], AggregateChallenge[P]>
  }




  export type ChallengeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeWhereInput
    orderBy?: ChallengeOrderByWithAggregationInput | ChallengeOrderByWithAggregationInput[]
    by: ChallengeScalarFieldEnum[] | ChallengeScalarFieldEnum
    having?: ChallengeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChallengeCountAggregateInputType | true
    _avg?: ChallengeAvgAggregateInputType
    _sum?: ChallengeSumAggregateInputType
    _min?: ChallengeMinAggregateInputType
    _max?: ChallengeMaxAggregateInputType
  }

  export type ChallengeGroupByOutputType = {
    id: number
    titulo: string
    descripcion: string
    activo: boolean
    fechaInicio: Date
    fechaFin: Date
    participantes: number
    nivel: string
    tipo: string
    objetivos: string[]
    recompensa: string
    createdAt: Date
    updatedAt: Date
    _count: ChallengeCountAggregateOutputType | null
    _avg: ChallengeAvgAggregateOutputType | null
    _sum: ChallengeSumAggregateOutputType | null
    _min: ChallengeMinAggregateOutputType | null
    _max: ChallengeMaxAggregateOutputType | null
  }

  type GetChallengeGroupByPayload<T extends ChallengeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChallengeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChallengeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChallengeGroupByOutputType[P]>
            : GetScalarType<T[P], ChallengeGroupByOutputType[P]>
        }
      >
    >


  export type ChallengeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    activo?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    participantes?: boolean
    nivel?: boolean
    tipo?: boolean
    objetivos?: boolean
    recompensa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userChallenges?: boolean | Challenge$userChallengesArgs<ExtArgs>
    _count?: boolean | ChallengeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenge"]>

  export type ChallengeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    activo?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    participantes?: boolean
    nivel?: boolean
    tipo?: boolean
    objetivos?: boolean
    recompensa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["challenge"]>

  export type ChallengeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    activo?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    participantes?: boolean
    nivel?: boolean
    tipo?: boolean
    objetivos?: boolean
    recompensa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["challenge"]>

  export type ChallengeSelectScalar = {
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    activo?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    participantes?: boolean
    nivel?: boolean
    tipo?: boolean
    objetivos?: boolean
    recompensa?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChallengeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descripcion" | "activo" | "fechaInicio" | "fechaFin" | "participantes" | "nivel" | "tipo" | "objetivos" | "recompensa" | "createdAt" | "updatedAt", ExtArgs["result"]["challenge"]>
  export type ChallengeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userChallenges?: boolean | Challenge$userChallengesArgs<ExtArgs>
    _count?: boolean | ChallengeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChallengeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ChallengeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChallengePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Challenge"
    objects: {
      userChallenges: Prisma.$UserChallengePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      descripcion: string
      activo: boolean
      fechaInicio: Date
      fechaFin: Date
      participantes: number
      nivel: string
      tipo: string
      objetivos: string[]
      recompensa: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["challenge"]>
    composites: {}
  }

  type ChallengeGetPayload<S extends boolean | null | undefined | ChallengeDefaultArgs> = $Result.GetResult<Prisma.$ChallengePayload, S>

  type ChallengeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChallengeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChallengeCountAggregateInputType | true
    }

  export interface ChallengeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Challenge'], meta: { name: 'Challenge' } }
    /**
     * Find zero or one Challenge that matches the filter.
     * @param {ChallengeFindUniqueArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChallengeFindUniqueArgs>(args: SelectSubset<T, ChallengeFindUniqueArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Challenge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChallengeFindUniqueOrThrowArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChallengeFindUniqueOrThrowArgs>(args: SelectSubset<T, ChallengeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindFirstArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChallengeFindFirstArgs>(args?: SelectSubset<T, ChallengeFindFirstArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindFirstOrThrowArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChallengeFindFirstOrThrowArgs>(args?: SelectSubset<T, ChallengeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Challenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Challenges
     * const challenges = await prisma.challenge.findMany()
     * 
     * // Get first 10 Challenges
     * const challenges = await prisma.challenge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const challengeWithIdOnly = await prisma.challenge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChallengeFindManyArgs>(args?: SelectSubset<T, ChallengeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Challenge.
     * @param {ChallengeCreateArgs} args - Arguments to create a Challenge.
     * @example
     * // Create one Challenge
     * const Challenge = await prisma.challenge.create({
     *   data: {
     *     // ... data to create a Challenge
     *   }
     * })
     * 
     */
    create<T extends ChallengeCreateArgs>(args: SelectSubset<T, ChallengeCreateArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Challenges.
     * @param {ChallengeCreateManyArgs} args - Arguments to create many Challenges.
     * @example
     * // Create many Challenges
     * const challenge = await prisma.challenge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChallengeCreateManyArgs>(args?: SelectSubset<T, ChallengeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Challenges and returns the data saved in the database.
     * @param {ChallengeCreateManyAndReturnArgs} args - Arguments to create many Challenges.
     * @example
     * // Create many Challenges
     * const challenge = await prisma.challenge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Challenges and only return the `id`
     * const challengeWithIdOnly = await prisma.challenge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChallengeCreateManyAndReturnArgs>(args?: SelectSubset<T, ChallengeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Challenge.
     * @param {ChallengeDeleteArgs} args - Arguments to delete one Challenge.
     * @example
     * // Delete one Challenge
     * const Challenge = await prisma.challenge.delete({
     *   where: {
     *     // ... filter to delete one Challenge
     *   }
     * })
     * 
     */
    delete<T extends ChallengeDeleteArgs>(args: SelectSubset<T, ChallengeDeleteArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Challenge.
     * @param {ChallengeUpdateArgs} args - Arguments to update one Challenge.
     * @example
     * // Update one Challenge
     * const challenge = await prisma.challenge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChallengeUpdateArgs>(args: SelectSubset<T, ChallengeUpdateArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Challenges.
     * @param {ChallengeDeleteManyArgs} args - Arguments to filter Challenges to delete.
     * @example
     * // Delete a few Challenges
     * const { count } = await prisma.challenge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChallengeDeleteManyArgs>(args?: SelectSubset<T, ChallengeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Challenges
     * const challenge = await prisma.challenge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChallengeUpdateManyArgs>(args: SelectSubset<T, ChallengeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenges and returns the data updated in the database.
     * @param {ChallengeUpdateManyAndReturnArgs} args - Arguments to update many Challenges.
     * @example
     * // Update many Challenges
     * const challenge = await prisma.challenge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Challenges and only return the `id`
     * const challengeWithIdOnly = await prisma.challenge.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChallengeUpdateManyAndReturnArgs>(args: SelectSubset<T, ChallengeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Challenge.
     * @param {ChallengeUpsertArgs} args - Arguments to update or create a Challenge.
     * @example
     * // Update or create a Challenge
     * const challenge = await prisma.challenge.upsert({
     *   create: {
     *     // ... data to create a Challenge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Challenge we want to update
     *   }
     * })
     */
    upsert<T extends ChallengeUpsertArgs>(args: SelectSubset<T, ChallengeUpsertArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeCountArgs} args - Arguments to filter Challenges to count.
     * @example
     * // Count the number of Challenges
     * const count = await prisma.challenge.count({
     *   where: {
     *     // ... the filter for the Challenges we want to count
     *   }
     * })
    **/
    count<T extends ChallengeCountArgs>(
      args?: Subset<T, ChallengeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallengeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Challenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChallengeAggregateArgs>(args: Subset<T, ChallengeAggregateArgs>): Prisma.PrismaPromise<GetChallengeAggregateType<T>>

    /**
     * Group by Challenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChallengeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChallengeGroupByArgs['orderBy'] }
        : { orderBy?: ChallengeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChallengeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallengeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Challenge model
   */
  readonly fields: ChallengeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Challenge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChallengeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userChallenges<T extends Challenge$userChallengesArgs<ExtArgs> = {}>(args?: Subset<T, Challenge$userChallengesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Challenge model
   */
  interface ChallengeFieldRefs {
    readonly id: FieldRef<"Challenge", 'Int'>
    readonly titulo: FieldRef<"Challenge", 'String'>
    readonly descripcion: FieldRef<"Challenge", 'String'>
    readonly activo: FieldRef<"Challenge", 'Boolean'>
    readonly fechaInicio: FieldRef<"Challenge", 'DateTime'>
    readonly fechaFin: FieldRef<"Challenge", 'DateTime'>
    readonly participantes: FieldRef<"Challenge", 'Int'>
    readonly nivel: FieldRef<"Challenge", 'String'>
    readonly tipo: FieldRef<"Challenge", 'String'>
    readonly objetivos: FieldRef<"Challenge", 'String[]'>
    readonly recompensa: FieldRef<"Challenge", 'String'>
    readonly createdAt: FieldRef<"Challenge", 'DateTime'>
    readonly updatedAt: FieldRef<"Challenge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Challenge findUnique
   */
  export type ChallengeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge findUniqueOrThrow
   */
  export type ChallengeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge findFirst
   */
  export type ChallengeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Challenges.
     */
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge findFirstOrThrow
   */
  export type ChallengeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Challenges.
     */
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge findMany
   */
  export type ChallengeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenges to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge create
   */
  export type ChallengeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The data needed to create a Challenge.
     */
    data: XOR<ChallengeCreateInput, ChallengeUncheckedCreateInput>
  }

  /**
   * Challenge createMany
   */
  export type ChallengeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Challenges.
     */
    data: ChallengeCreateManyInput | ChallengeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Challenge createManyAndReturn
   */
  export type ChallengeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * The data used to create many Challenges.
     */
    data: ChallengeCreateManyInput | ChallengeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Challenge update
   */
  export type ChallengeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The data needed to update a Challenge.
     */
    data: XOR<ChallengeUpdateInput, ChallengeUncheckedUpdateInput>
    /**
     * Choose, which Challenge to update.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge updateMany
   */
  export type ChallengeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Challenges.
     */
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyInput>
    /**
     * Filter which Challenges to update
     */
    where?: ChallengeWhereInput
    /**
     * Limit how many Challenges to update.
     */
    limit?: number
  }

  /**
   * Challenge updateManyAndReturn
   */
  export type ChallengeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * The data used to update Challenges.
     */
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyInput>
    /**
     * Filter which Challenges to update
     */
    where?: ChallengeWhereInput
    /**
     * Limit how many Challenges to update.
     */
    limit?: number
  }

  /**
   * Challenge upsert
   */
  export type ChallengeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The filter to search for the Challenge to update in case it exists.
     */
    where: ChallengeWhereUniqueInput
    /**
     * In case the Challenge found by the `where` argument doesn't exist, create a new Challenge with this data.
     */
    create: XOR<ChallengeCreateInput, ChallengeUncheckedCreateInput>
    /**
     * In case the Challenge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChallengeUpdateInput, ChallengeUncheckedUpdateInput>
  }

  /**
   * Challenge delete
   */
  export type ChallengeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter which Challenge to delete.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge deleteMany
   */
  export type ChallengeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Challenges to delete
     */
    where?: ChallengeWhereInput
    /**
     * Limit how many Challenges to delete.
     */
    limit?: number
  }

  /**
   * Challenge.userChallenges
   */
  export type Challenge$userChallengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    where?: UserChallengeWhereInput
    orderBy?: UserChallengeOrderByWithRelationInput | UserChallengeOrderByWithRelationInput[]
    cursor?: UserChallengeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserChallengeScalarFieldEnum | UserChallengeScalarFieldEnum[]
  }

  /**
   * Challenge without action
   */
  export type ChallengeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
  }


  /**
   * Model UserChallenge
   */

  export type AggregateUserChallenge = {
    _count: UserChallengeCountAggregateOutputType | null
    _avg: UserChallengeAvgAggregateOutputType | null
    _sum: UserChallengeSumAggregateOutputType | null
    _min: UserChallengeMinAggregateOutputType | null
    _max: UserChallengeMaxAggregateOutputType | null
  }

  export type UserChallengeAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    challengeId: number | null
    progreso: number | null
  }

  export type UserChallengeSumAggregateOutputType = {
    id: number | null
    userId: number | null
    challengeId: number | null
    progreso: number | null
  }

  export type UserChallengeMinAggregateOutputType = {
    id: number | null
    userId: number | null
    challengeId: number | null
    progreso: number | null
    completado: boolean | null
    fechaInicio: Date | null
    ultimoProgreso: Date | null
  }

  export type UserChallengeMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    challengeId: number | null
    progreso: number | null
    completado: boolean | null
    fechaInicio: Date | null
    ultimoProgreso: Date | null
  }

  export type UserChallengeCountAggregateOutputType = {
    id: number
    userId: number
    challengeId: number
    progreso: number
    completado: number
    fechaInicio: number
    ultimoProgreso: number
    _all: number
  }


  export type UserChallengeAvgAggregateInputType = {
    id?: true
    userId?: true
    challengeId?: true
    progreso?: true
  }

  export type UserChallengeSumAggregateInputType = {
    id?: true
    userId?: true
    challengeId?: true
    progreso?: true
  }

  export type UserChallengeMinAggregateInputType = {
    id?: true
    userId?: true
    challengeId?: true
    progreso?: true
    completado?: true
    fechaInicio?: true
    ultimoProgreso?: true
  }

  export type UserChallengeMaxAggregateInputType = {
    id?: true
    userId?: true
    challengeId?: true
    progreso?: true
    completado?: true
    fechaInicio?: true
    ultimoProgreso?: true
  }

  export type UserChallengeCountAggregateInputType = {
    id?: true
    userId?: true
    challengeId?: true
    progreso?: true
    completado?: true
    fechaInicio?: true
    ultimoProgreso?: true
    _all?: true
  }

  export type UserChallengeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserChallenge to aggregate.
     */
    where?: UserChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserChallenges to fetch.
     */
    orderBy?: UserChallengeOrderByWithRelationInput | UserChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserChallenges
    **/
    _count?: true | UserChallengeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserChallengeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserChallengeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserChallengeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserChallengeMaxAggregateInputType
  }

  export type GetUserChallengeAggregateType<T extends UserChallengeAggregateArgs> = {
        [P in keyof T & keyof AggregateUserChallenge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserChallenge[P]>
      : GetScalarType<T[P], AggregateUserChallenge[P]>
  }




  export type UserChallengeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserChallengeWhereInput
    orderBy?: UserChallengeOrderByWithAggregationInput | UserChallengeOrderByWithAggregationInput[]
    by: UserChallengeScalarFieldEnum[] | UserChallengeScalarFieldEnum
    having?: UserChallengeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserChallengeCountAggregateInputType | true
    _avg?: UserChallengeAvgAggregateInputType
    _sum?: UserChallengeSumAggregateInputType
    _min?: UserChallengeMinAggregateInputType
    _max?: UserChallengeMaxAggregateInputType
  }

  export type UserChallengeGroupByOutputType = {
    id: number
    userId: number
    challengeId: number
    progreso: number
    completado: boolean
    fechaInicio: Date
    ultimoProgreso: Date
    _count: UserChallengeCountAggregateOutputType | null
    _avg: UserChallengeAvgAggregateOutputType | null
    _sum: UserChallengeSumAggregateOutputType | null
    _min: UserChallengeMinAggregateOutputType | null
    _max: UserChallengeMaxAggregateOutputType | null
  }

  type GetUserChallengeGroupByPayload<T extends UserChallengeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserChallengeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserChallengeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserChallengeGroupByOutputType[P]>
            : GetScalarType<T[P], UserChallengeGroupByOutputType[P]>
        }
      >
    >


  export type UserChallengeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    challengeId?: boolean
    progreso?: boolean
    completado?: boolean
    fechaInicio?: boolean
    ultimoProgreso?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userChallenge"]>

  export type UserChallengeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    challengeId?: boolean
    progreso?: boolean
    completado?: boolean
    fechaInicio?: boolean
    ultimoProgreso?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userChallenge"]>

  export type UserChallengeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    challengeId?: boolean
    progreso?: boolean
    completado?: boolean
    fechaInicio?: boolean
    ultimoProgreso?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userChallenge"]>

  export type UserChallengeSelectScalar = {
    id?: boolean
    userId?: boolean
    challengeId?: boolean
    progreso?: boolean
    completado?: boolean
    fechaInicio?: boolean
    ultimoProgreso?: boolean
  }

  export type UserChallengeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "challengeId" | "progreso" | "completado" | "fechaInicio" | "ultimoProgreso", ExtArgs["result"]["userChallenge"]>
  export type UserChallengeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }
  export type UserChallengeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }
  export type UserChallengeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }

  export type $UserChallengePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserChallenge"
    objects: {
      user: Prisma.$UsuarioPayload<ExtArgs>
      challenge: Prisma.$ChallengePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      challengeId: number
      progreso: number
      completado: boolean
      fechaInicio: Date
      ultimoProgreso: Date
    }, ExtArgs["result"]["userChallenge"]>
    composites: {}
  }

  type UserChallengeGetPayload<S extends boolean | null | undefined | UserChallengeDefaultArgs> = $Result.GetResult<Prisma.$UserChallengePayload, S>

  type UserChallengeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserChallengeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserChallengeCountAggregateInputType | true
    }

  export interface UserChallengeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserChallenge'], meta: { name: 'UserChallenge' } }
    /**
     * Find zero or one UserChallenge that matches the filter.
     * @param {UserChallengeFindUniqueArgs} args - Arguments to find a UserChallenge
     * @example
     * // Get one UserChallenge
     * const userChallenge = await prisma.userChallenge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserChallengeFindUniqueArgs>(args: SelectSubset<T, UserChallengeFindUniqueArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserChallenge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserChallengeFindUniqueOrThrowArgs} args - Arguments to find a UserChallenge
     * @example
     * // Get one UserChallenge
     * const userChallenge = await prisma.userChallenge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserChallengeFindUniqueOrThrowArgs>(args: SelectSubset<T, UserChallengeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserChallenge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChallengeFindFirstArgs} args - Arguments to find a UserChallenge
     * @example
     * // Get one UserChallenge
     * const userChallenge = await prisma.userChallenge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserChallengeFindFirstArgs>(args?: SelectSubset<T, UserChallengeFindFirstArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserChallenge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChallengeFindFirstOrThrowArgs} args - Arguments to find a UserChallenge
     * @example
     * // Get one UserChallenge
     * const userChallenge = await prisma.userChallenge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserChallengeFindFirstOrThrowArgs>(args?: SelectSubset<T, UserChallengeFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserChallenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChallengeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserChallenges
     * const userChallenges = await prisma.userChallenge.findMany()
     * 
     * // Get first 10 UserChallenges
     * const userChallenges = await prisma.userChallenge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userChallengeWithIdOnly = await prisma.userChallenge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserChallengeFindManyArgs>(args?: SelectSubset<T, UserChallengeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserChallenge.
     * @param {UserChallengeCreateArgs} args - Arguments to create a UserChallenge.
     * @example
     * // Create one UserChallenge
     * const UserChallenge = await prisma.userChallenge.create({
     *   data: {
     *     // ... data to create a UserChallenge
     *   }
     * })
     * 
     */
    create<T extends UserChallengeCreateArgs>(args: SelectSubset<T, UserChallengeCreateArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserChallenges.
     * @param {UserChallengeCreateManyArgs} args - Arguments to create many UserChallenges.
     * @example
     * // Create many UserChallenges
     * const userChallenge = await prisma.userChallenge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserChallengeCreateManyArgs>(args?: SelectSubset<T, UserChallengeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserChallenges and returns the data saved in the database.
     * @param {UserChallengeCreateManyAndReturnArgs} args - Arguments to create many UserChallenges.
     * @example
     * // Create many UserChallenges
     * const userChallenge = await prisma.userChallenge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserChallenges and only return the `id`
     * const userChallengeWithIdOnly = await prisma.userChallenge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserChallengeCreateManyAndReturnArgs>(args?: SelectSubset<T, UserChallengeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserChallenge.
     * @param {UserChallengeDeleteArgs} args - Arguments to delete one UserChallenge.
     * @example
     * // Delete one UserChallenge
     * const UserChallenge = await prisma.userChallenge.delete({
     *   where: {
     *     // ... filter to delete one UserChallenge
     *   }
     * })
     * 
     */
    delete<T extends UserChallengeDeleteArgs>(args: SelectSubset<T, UserChallengeDeleteArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserChallenge.
     * @param {UserChallengeUpdateArgs} args - Arguments to update one UserChallenge.
     * @example
     * // Update one UserChallenge
     * const userChallenge = await prisma.userChallenge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserChallengeUpdateArgs>(args: SelectSubset<T, UserChallengeUpdateArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserChallenges.
     * @param {UserChallengeDeleteManyArgs} args - Arguments to filter UserChallenges to delete.
     * @example
     * // Delete a few UserChallenges
     * const { count } = await prisma.userChallenge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserChallengeDeleteManyArgs>(args?: SelectSubset<T, UserChallengeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserChallenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChallengeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserChallenges
     * const userChallenge = await prisma.userChallenge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserChallengeUpdateManyArgs>(args: SelectSubset<T, UserChallengeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserChallenges and returns the data updated in the database.
     * @param {UserChallengeUpdateManyAndReturnArgs} args - Arguments to update many UserChallenges.
     * @example
     * // Update many UserChallenges
     * const userChallenge = await prisma.userChallenge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserChallenges and only return the `id`
     * const userChallengeWithIdOnly = await prisma.userChallenge.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserChallengeUpdateManyAndReturnArgs>(args: SelectSubset<T, UserChallengeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserChallenge.
     * @param {UserChallengeUpsertArgs} args - Arguments to update or create a UserChallenge.
     * @example
     * // Update or create a UserChallenge
     * const userChallenge = await prisma.userChallenge.upsert({
     *   create: {
     *     // ... data to create a UserChallenge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserChallenge we want to update
     *   }
     * })
     */
    upsert<T extends UserChallengeUpsertArgs>(args: SelectSubset<T, UserChallengeUpsertArgs<ExtArgs>>): Prisma__UserChallengeClient<$Result.GetResult<Prisma.$UserChallengePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserChallenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChallengeCountArgs} args - Arguments to filter UserChallenges to count.
     * @example
     * // Count the number of UserChallenges
     * const count = await prisma.userChallenge.count({
     *   where: {
     *     // ... the filter for the UserChallenges we want to count
     *   }
     * })
    **/
    count<T extends UserChallengeCountArgs>(
      args?: Subset<T, UserChallengeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserChallengeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserChallenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChallengeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserChallengeAggregateArgs>(args: Subset<T, UserChallengeAggregateArgs>): Prisma.PrismaPromise<GetUserChallengeAggregateType<T>>

    /**
     * Group by UserChallenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChallengeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserChallengeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserChallengeGroupByArgs['orderBy'] }
        : { orderBy?: UserChallengeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserChallengeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserChallengeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserChallenge model
   */
  readonly fields: UserChallengeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserChallenge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserChallengeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    challenge<T extends ChallengeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeDefaultArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserChallenge model
   */
  interface UserChallengeFieldRefs {
    readonly id: FieldRef<"UserChallenge", 'Int'>
    readonly userId: FieldRef<"UserChallenge", 'Int'>
    readonly challengeId: FieldRef<"UserChallenge", 'Int'>
    readonly progreso: FieldRef<"UserChallenge", 'Int'>
    readonly completado: FieldRef<"UserChallenge", 'Boolean'>
    readonly fechaInicio: FieldRef<"UserChallenge", 'DateTime'>
    readonly ultimoProgreso: FieldRef<"UserChallenge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserChallenge findUnique
   */
  export type UserChallengeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    /**
     * Filter, which UserChallenge to fetch.
     */
    where: UserChallengeWhereUniqueInput
  }

  /**
   * UserChallenge findUniqueOrThrow
   */
  export type UserChallengeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    /**
     * Filter, which UserChallenge to fetch.
     */
    where: UserChallengeWhereUniqueInput
  }

  /**
   * UserChallenge findFirst
   */
  export type UserChallengeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    /**
     * Filter, which UserChallenge to fetch.
     */
    where?: UserChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserChallenges to fetch.
     */
    orderBy?: UserChallengeOrderByWithRelationInput | UserChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserChallenges.
     */
    cursor?: UserChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserChallenges.
     */
    distinct?: UserChallengeScalarFieldEnum | UserChallengeScalarFieldEnum[]
  }

  /**
   * UserChallenge findFirstOrThrow
   */
  export type UserChallengeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    /**
     * Filter, which UserChallenge to fetch.
     */
    where?: UserChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserChallenges to fetch.
     */
    orderBy?: UserChallengeOrderByWithRelationInput | UserChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserChallenges.
     */
    cursor?: UserChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserChallenges.
     */
    distinct?: UserChallengeScalarFieldEnum | UserChallengeScalarFieldEnum[]
  }

  /**
   * UserChallenge findMany
   */
  export type UserChallengeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    /**
     * Filter, which UserChallenges to fetch.
     */
    where?: UserChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserChallenges to fetch.
     */
    orderBy?: UserChallengeOrderByWithRelationInput | UserChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserChallenges.
     */
    cursor?: UserChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserChallenges.
     */
    skip?: number
    distinct?: UserChallengeScalarFieldEnum | UserChallengeScalarFieldEnum[]
  }

  /**
   * UserChallenge create
   */
  export type UserChallengeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    /**
     * The data needed to create a UserChallenge.
     */
    data: XOR<UserChallengeCreateInput, UserChallengeUncheckedCreateInput>
  }

  /**
   * UserChallenge createMany
   */
  export type UserChallengeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserChallenges.
     */
    data: UserChallengeCreateManyInput | UserChallengeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserChallenge createManyAndReturn
   */
  export type UserChallengeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * The data used to create many UserChallenges.
     */
    data: UserChallengeCreateManyInput | UserChallengeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserChallenge update
   */
  export type UserChallengeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    /**
     * The data needed to update a UserChallenge.
     */
    data: XOR<UserChallengeUpdateInput, UserChallengeUncheckedUpdateInput>
    /**
     * Choose, which UserChallenge to update.
     */
    where: UserChallengeWhereUniqueInput
  }

  /**
   * UserChallenge updateMany
   */
  export type UserChallengeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserChallenges.
     */
    data: XOR<UserChallengeUpdateManyMutationInput, UserChallengeUncheckedUpdateManyInput>
    /**
     * Filter which UserChallenges to update
     */
    where?: UserChallengeWhereInput
    /**
     * Limit how many UserChallenges to update.
     */
    limit?: number
  }

  /**
   * UserChallenge updateManyAndReturn
   */
  export type UserChallengeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * The data used to update UserChallenges.
     */
    data: XOR<UserChallengeUpdateManyMutationInput, UserChallengeUncheckedUpdateManyInput>
    /**
     * Filter which UserChallenges to update
     */
    where?: UserChallengeWhereInput
    /**
     * Limit how many UserChallenges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserChallenge upsert
   */
  export type UserChallengeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    /**
     * The filter to search for the UserChallenge to update in case it exists.
     */
    where: UserChallengeWhereUniqueInput
    /**
     * In case the UserChallenge found by the `where` argument doesn't exist, create a new UserChallenge with this data.
     */
    create: XOR<UserChallengeCreateInput, UserChallengeUncheckedCreateInput>
    /**
     * In case the UserChallenge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserChallengeUpdateInput, UserChallengeUncheckedUpdateInput>
  }

  /**
   * UserChallenge delete
   */
  export type UserChallengeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
    /**
     * Filter which UserChallenge to delete.
     */
    where: UserChallengeWhereUniqueInput
  }

  /**
   * UserChallenge deleteMany
   */
  export type UserChallengeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserChallenges to delete
     */
    where?: UserChallengeWhereInput
    /**
     * Limit how many UserChallenges to delete.
     */
    limit?: number
  }

  /**
   * UserChallenge without action
   */
  export type UserChallengeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChallenge
     */
    select?: UserChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChallenge
     */
    omit?: UserChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChallengeInclude<ExtArgs> | null
  }


  /**
   * Model Achievement
   */

  export type AggregateAchievement = {
    _count: AchievementCountAggregateOutputType | null
    _avg: AchievementAvgAggregateOutputType | null
    _sum: AchievementSumAggregateOutputType | null
    _min: AchievementMinAggregateOutputType | null
    _max: AchievementMaxAggregateOutputType | null
  }

  export type AchievementAvgAggregateOutputType = {
    id: number | null
    valorNecesario: number | null
  }

  export type AchievementSumAggregateOutputType = {
    id: number | null
    valorNecesario: number | null
  }

  export type AchievementMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    descripcion: string | null
    tipo: string | null
    icono: string | null
    criterio: string | null
    valorNecesario: number | null
  }

  export type AchievementMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    descripcion: string | null
    tipo: string | null
    icono: string | null
    criterio: string | null
    valorNecesario: number | null
  }

  export type AchievementCountAggregateOutputType = {
    id: number
    titulo: number
    descripcion: number
    tipo: number
    icono: number
    criterio: number
    valorNecesario: number
    _all: number
  }


  export type AchievementAvgAggregateInputType = {
    id?: true
    valorNecesario?: true
  }

  export type AchievementSumAggregateInputType = {
    id?: true
    valorNecesario?: true
  }

  export type AchievementMinAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    tipo?: true
    icono?: true
    criterio?: true
    valorNecesario?: true
  }

  export type AchievementMaxAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    tipo?: true
    icono?: true
    criterio?: true
    valorNecesario?: true
  }

  export type AchievementCountAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    tipo?: true
    icono?: true
    criterio?: true
    valorNecesario?: true
    _all?: true
  }

  export type AchievementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievement to aggregate.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Achievements
    **/
    _count?: true | AchievementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AchievementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AchievementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AchievementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AchievementMaxAggregateInputType
  }

  export type GetAchievementAggregateType<T extends AchievementAggregateArgs> = {
        [P in keyof T & keyof AggregateAchievement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAchievement[P]>
      : GetScalarType<T[P], AggregateAchievement[P]>
  }




  export type AchievementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchievementWhereInput
    orderBy?: AchievementOrderByWithAggregationInput | AchievementOrderByWithAggregationInput[]
    by: AchievementScalarFieldEnum[] | AchievementScalarFieldEnum
    having?: AchievementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AchievementCountAggregateInputType | true
    _avg?: AchievementAvgAggregateInputType
    _sum?: AchievementSumAggregateInputType
    _min?: AchievementMinAggregateInputType
    _max?: AchievementMaxAggregateInputType
  }

  export type AchievementGroupByOutputType = {
    id: number
    titulo: string
    descripcion: string
    tipo: string
    icono: string
    criterio: string
    valorNecesario: number
    _count: AchievementCountAggregateOutputType | null
    _avg: AchievementAvgAggregateOutputType | null
    _sum: AchievementSumAggregateOutputType | null
    _min: AchievementMinAggregateOutputType | null
    _max: AchievementMaxAggregateOutputType | null
  }

  type GetAchievementGroupByPayload<T extends AchievementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AchievementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AchievementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AchievementGroupByOutputType[P]>
            : GetScalarType<T[P], AchievementGroupByOutputType[P]>
        }
      >
    >


  export type AchievementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    tipo?: boolean
    icono?: boolean
    criterio?: boolean
    valorNecesario?: boolean
    userAchievements?: boolean | Achievement$userAchievementsArgs<ExtArgs>
    _count?: boolean | AchievementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    tipo?: boolean
    icono?: boolean
    criterio?: boolean
    valorNecesario?: boolean
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    tipo?: boolean
    icono?: boolean
    criterio?: boolean
    valorNecesario?: boolean
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectScalar = {
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    tipo?: boolean
    icono?: boolean
    criterio?: boolean
    valorNecesario?: boolean
  }

  export type AchievementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descripcion" | "tipo" | "icono" | "criterio" | "valorNecesario", ExtArgs["result"]["achievement"]>
  export type AchievementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userAchievements?: boolean | Achievement$userAchievementsArgs<ExtArgs>
    _count?: boolean | AchievementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AchievementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AchievementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AchievementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Achievement"
    objects: {
      userAchievements: Prisma.$UserAchievementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      descripcion: string
      tipo: string
      icono: string
      criterio: string
      valorNecesario: number
    }, ExtArgs["result"]["achievement"]>
    composites: {}
  }

  type AchievementGetPayload<S extends boolean | null | undefined | AchievementDefaultArgs> = $Result.GetResult<Prisma.$AchievementPayload, S>

  type AchievementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AchievementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AchievementCountAggregateInputType | true
    }

  export interface AchievementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Achievement'], meta: { name: 'Achievement' } }
    /**
     * Find zero or one Achievement that matches the filter.
     * @param {AchievementFindUniqueArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AchievementFindUniqueArgs>(args: SelectSubset<T, AchievementFindUniqueArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Achievement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AchievementFindUniqueOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AchievementFindUniqueOrThrowArgs>(args: SelectSubset<T, AchievementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindFirstArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AchievementFindFirstArgs>(args?: SelectSubset<T, AchievementFindFirstArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindFirstOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AchievementFindFirstOrThrowArgs>(args?: SelectSubset<T, AchievementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Achievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Achievements
     * const achievements = await prisma.achievement.findMany()
     * 
     * // Get first 10 Achievements
     * const achievements = await prisma.achievement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const achievementWithIdOnly = await prisma.achievement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AchievementFindManyArgs>(args?: SelectSubset<T, AchievementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Achievement.
     * @param {AchievementCreateArgs} args - Arguments to create a Achievement.
     * @example
     * // Create one Achievement
     * const Achievement = await prisma.achievement.create({
     *   data: {
     *     // ... data to create a Achievement
     *   }
     * })
     * 
     */
    create<T extends AchievementCreateArgs>(args: SelectSubset<T, AchievementCreateArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Achievements.
     * @param {AchievementCreateManyArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievement = await prisma.achievement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AchievementCreateManyArgs>(args?: SelectSubset<T, AchievementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Achievements and returns the data saved in the database.
     * @param {AchievementCreateManyAndReturnArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievement = await prisma.achievement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Achievements and only return the `id`
     * const achievementWithIdOnly = await prisma.achievement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AchievementCreateManyAndReturnArgs>(args?: SelectSubset<T, AchievementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Achievement.
     * @param {AchievementDeleteArgs} args - Arguments to delete one Achievement.
     * @example
     * // Delete one Achievement
     * const Achievement = await prisma.achievement.delete({
     *   where: {
     *     // ... filter to delete one Achievement
     *   }
     * })
     * 
     */
    delete<T extends AchievementDeleteArgs>(args: SelectSubset<T, AchievementDeleteArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Achievement.
     * @param {AchievementUpdateArgs} args - Arguments to update one Achievement.
     * @example
     * // Update one Achievement
     * const achievement = await prisma.achievement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AchievementUpdateArgs>(args: SelectSubset<T, AchievementUpdateArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Achievements.
     * @param {AchievementDeleteManyArgs} args - Arguments to filter Achievements to delete.
     * @example
     * // Delete a few Achievements
     * const { count } = await prisma.achievement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AchievementDeleteManyArgs>(args?: SelectSubset<T, AchievementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Achievements
     * const achievement = await prisma.achievement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AchievementUpdateManyArgs>(args: SelectSubset<T, AchievementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements and returns the data updated in the database.
     * @param {AchievementUpdateManyAndReturnArgs} args - Arguments to update many Achievements.
     * @example
     * // Update many Achievements
     * const achievement = await prisma.achievement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Achievements and only return the `id`
     * const achievementWithIdOnly = await prisma.achievement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AchievementUpdateManyAndReturnArgs>(args: SelectSubset<T, AchievementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Achievement.
     * @param {AchievementUpsertArgs} args - Arguments to update or create a Achievement.
     * @example
     * // Update or create a Achievement
     * const achievement = await prisma.achievement.upsert({
     *   create: {
     *     // ... data to create a Achievement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Achievement we want to update
     *   }
     * })
     */
    upsert<T extends AchievementUpsertArgs>(args: SelectSubset<T, AchievementUpsertArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementCountArgs} args - Arguments to filter Achievements to count.
     * @example
     * // Count the number of Achievements
     * const count = await prisma.achievement.count({
     *   where: {
     *     // ... the filter for the Achievements we want to count
     *   }
     * })
    **/
    count<T extends AchievementCountArgs>(
      args?: Subset<T, AchievementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AchievementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AchievementAggregateArgs>(args: Subset<T, AchievementAggregateArgs>): Prisma.PrismaPromise<GetAchievementAggregateType<T>>

    /**
     * Group by Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AchievementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AchievementGroupByArgs['orderBy'] }
        : { orderBy?: AchievementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AchievementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAchievementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Achievement model
   */
  readonly fields: AchievementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Achievement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AchievementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userAchievements<T extends Achievement$userAchievementsArgs<ExtArgs> = {}>(args?: Subset<T, Achievement$userAchievementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Achievement model
   */
  interface AchievementFieldRefs {
    readonly id: FieldRef<"Achievement", 'Int'>
    readonly titulo: FieldRef<"Achievement", 'String'>
    readonly descripcion: FieldRef<"Achievement", 'String'>
    readonly tipo: FieldRef<"Achievement", 'String'>
    readonly icono: FieldRef<"Achievement", 'String'>
    readonly criterio: FieldRef<"Achievement", 'String'>
    readonly valorNecesario: FieldRef<"Achievement", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Achievement findUnique
   */
  export type AchievementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement findUniqueOrThrow
   */
  export type AchievementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement findFirst
   */
  export type AchievementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement findFirstOrThrow
   */
  export type AchievementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement findMany
   */
  export type AchievementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievements to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement create
   */
  export type AchievementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The data needed to create a Achievement.
     */
    data: XOR<AchievementCreateInput, AchievementUncheckedCreateInput>
  }

  /**
   * Achievement createMany
   */
  export type AchievementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Achievements.
     */
    data: AchievementCreateManyInput | AchievementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Achievement createManyAndReturn
   */
  export type AchievementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * The data used to create many Achievements.
     */
    data: AchievementCreateManyInput | AchievementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Achievement update
   */
  export type AchievementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The data needed to update a Achievement.
     */
    data: XOR<AchievementUpdateInput, AchievementUncheckedUpdateInput>
    /**
     * Choose, which Achievement to update.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement updateMany
   */
  export type AchievementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Achievements.
     */
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyInput>
    /**
     * Filter which Achievements to update
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to update.
     */
    limit?: number
  }

  /**
   * Achievement updateManyAndReturn
   */
  export type AchievementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * The data used to update Achievements.
     */
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyInput>
    /**
     * Filter which Achievements to update
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to update.
     */
    limit?: number
  }

  /**
   * Achievement upsert
   */
  export type AchievementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The filter to search for the Achievement to update in case it exists.
     */
    where: AchievementWhereUniqueInput
    /**
     * In case the Achievement found by the `where` argument doesn't exist, create a new Achievement with this data.
     */
    create: XOR<AchievementCreateInput, AchievementUncheckedCreateInput>
    /**
     * In case the Achievement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AchievementUpdateInput, AchievementUncheckedUpdateInput>
  }

  /**
   * Achievement delete
   */
  export type AchievementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter which Achievement to delete.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement deleteMany
   */
  export type AchievementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievements to delete
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to delete.
     */
    limit?: number
  }

  /**
   * Achievement.userAchievements
   */
  export type Achievement$userAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    where?: UserAchievementWhereInput
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    cursor?: UserAchievementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * Achievement without action
   */
  export type AchievementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
  }


  /**
   * Model UserAchievement
   */

  export type AggregateUserAchievement = {
    _count: UserAchievementCountAggregateOutputType | null
    _avg: UserAchievementAvgAggregateOutputType | null
    _sum: UserAchievementSumAggregateOutputType | null
    _min: UserAchievementMinAggregateOutputType | null
    _max: UserAchievementMaxAggregateOutputType | null
  }

  export type UserAchievementAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    achievementId: number | null
  }

  export type UserAchievementSumAggregateOutputType = {
    id: number | null
    userId: number | null
    achievementId: number | null
  }

  export type UserAchievementMinAggregateOutputType = {
    id: number | null
    userId: number | null
    achievementId: number | null
    fechaConseguido: Date | null
  }

  export type UserAchievementMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    achievementId: number | null
    fechaConseguido: Date | null
  }

  export type UserAchievementCountAggregateOutputType = {
    id: number
    userId: number
    achievementId: number
    fechaConseguido: number
    _all: number
  }


  export type UserAchievementAvgAggregateInputType = {
    id?: true
    userId?: true
    achievementId?: true
  }

  export type UserAchievementSumAggregateInputType = {
    id?: true
    userId?: true
    achievementId?: true
  }

  export type UserAchievementMinAggregateInputType = {
    id?: true
    userId?: true
    achievementId?: true
    fechaConseguido?: true
  }

  export type UserAchievementMaxAggregateInputType = {
    id?: true
    userId?: true
    achievementId?: true
    fechaConseguido?: true
  }

  export type UserAchievementCountAggregateInputType = {
    id?: true
    userId?: true
    achievementId?: true
    fechaConseguido?: true
    _all?: true
  }

  export type UserAchievementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAchievement to aggregate.
     */
    where?: UserAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAchievements
    **/
    _count?: true | UserAchievementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAchievementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserAchievementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAchievementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAchievementMaxAggregateInputType
  }

  export type GetUserAchievementAggregateType<T extends UserAchievementAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAchievement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAchievement[P]>
      : GetScalarType<T[P], AggregateUserAchievement[P]>
  }




  export type UserAchievementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAchievementWhereInput
    orderBy?: UserAchievementOrderByWithAggregationInput | UserAchievementOrderByWithAggregationInput[]
    by: UserAchievementScalarFieldEnum[] | UserAchievementScalarFieldEnum
    having?: UserAchievementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAchievementCountAggregateInputType | true
    _avg?: UserAchievementAvgAggregateInputType
    _sum?: UserAchievementSumAggregateInputType
    _min?: UserAchievementMinAggregateInputType
    _max?: UserAchievementMaxAggregateInputType
  }

  export type UserAchievementGroupByOutputType = {
    id: number
    userId: number
    achievementId: number
    fechaConseguido: Date
    _count: UserAchievementCountAggregateOutputType | null
    _avg: UserAchievementAvgAggregateOutputType | null
    _sum: UserAchievementSumAggregateOutputType | null
    _min: UserAchievementMinAggregateOutputType | null
    _max: UserAchievementMaxAggregateOutputType | null
  }

  type GetUserAchievementGroupByPayload<T extends UserAchievementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAchievementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAchievementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAchievementGroupByOutputType[P]>
            : GetScalarType<T[P], UserAchievementGroupByOutputType[P]>
        }
      >
    >


  export type UserAchievementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    achievementId?: boolean
    fechaConseguido?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAchievement"]>

  export type UserAchievementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    achievementId?: boolean
    fechaConseguido?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAchievement"]>

  export type UserAchievementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    achievementId?: boolean
    fechaConseguido?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAchievement"]>

  export type UserAchievementSelectScalar = {
    id?: boolean
    userId?: boolean
    achievementId?: boolean
    fechaConseguido?: boolean
  }

  export type UserAchievementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "achievementId" | "fechaConseguido", ExtArgs["result"]["userAchievement"]>
  export type UserAchievementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }
  export type UserAchievementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }
  export type UserAchievementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }

  export type $UserAchievementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAchievement"
    objects: {
      user: Prisma.$UsuarioPayload<ExtArgs>
      achievement: Prisma.$AchievementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      achievementId: number
      fechaConseguido: Date
    }, ExtArgs["result"]["userAchievement"]>
    composites: {}
  }

  type UserAchievementGetPayload<S extends boolean | null | undefined | UserAchievementDefaultArgs> = $Result.GetResult<Prisma.$UserAchievementPayload, S>

  type UserAchievementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAchievementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAchievementCountAggregateInputType | true
    }

  export interface UserAchievementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAchievement'], meta: { name: 'UserAchievement' } }
    /**
     * Find zero or one UserAchievement that matches the filter.
     * @param {UserAchievementFindUniqueArgs} args - Arguments to find a UserAchievement
     * @example
     * // Get one UserAchievement
     * const userAchievement = await prisma.userAchievement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAchievementFindUniqueArgs>(args: SelectSubset<T, UserAchievementFindUniqueArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAchievement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAchievementFindUniqueOrThrowArgs} args - Arguments to find a UserAchievement
     * @example
     * // Get one UserAchievement
     * const userAchievement = await prisma.userAchievement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAchievementFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAchievementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAchievement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementFindFirstArgs} args - Arguments to find a UserAchievement
     * @example
     * // Get one UserAchievement
     * const userAchievement = await prisma.userAchievement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAchievementFindFirstArgs>(args?: SelectSubset<T, UserAchievementFindFirstArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAchievement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementFindFirstOrThrowArgs} args - Arguments to find a UserAchievement
     * @example
     * // Get one UserAchievement
     * const userAchievement = await prisma.userAchievement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAchievementFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAchievementFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAchievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAchievements
     * const userAchievements = await prisma.userAchievement.findMany()
     * 
     * // Get first 10 UserAchievements
     * const userAchievements = await prisma.userAchievement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAchievementWithIdOnly = await prisma.userAchievement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAchievementFindManyArgs>(args?: SelectSubset<T, UserAchievementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAchievement.
     * @param {UserAchievementCreateArgs} args - Arguments to create a UserAchievement.
     * @example
     * // Create one UserAchievement
     * const UserAchievement = await prisma.userAchievement.create({
     *   data: {
     *     // ... data to create a UserAchievement
     *   }
     * })
     * 
     */
    create<T extends UserAchievementCreateArgs>(args: SelectSubset<T, UserAchievementCreateArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAchievements.
     * @param {UserAchievementCreateManyArgs} args - Arguments to create many UserAchievements.
     * @example
     * // Create many UserAchievements
     * const userAchievement = await prisma.userAchievement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAchievementCreateManyArgs>(args?: SelectSubset<T, UserAchievementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAchievements and returns the data saved in the database.
     * @param {UserAchievementCreateManyAndReturnArgs} args - Arguments to create many UserAchievements.
     * @example
     * // Create many UserAchievements
     * const userAchievement = await prisma.userAchievement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAchievements and only return the `id`
     * const userAchievementWithIdOnly = await prisma.userAchievement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAchievementCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAchievementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserAchievement.
     * @param {UserAchievementDeleteArgs} args - Arguments to delete one UserAchievement.
     * @example
     * // Delete one UserAchievement
     * const UserAchievement = await prisma.userAchievement.delete({
     *   where: {
     *     // ... filter to delete one UserAchievement
     *   }
     * })
     * 
     */
    delete<T extends UserAchievementDeleteArgs>(args: SelectSubset<T, UserAchievementDeleteArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAchievement.
     * @param {UserAchievementUpdateArgs} args - Arguments to update one UserAchievement.
     * @example
     * // Update one UserAchievement
     * const userAchievement = await prisma.userAchievement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAchievementUpdateArgs>(args: SelectSubset<T, UserAchievementUpdateArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAchievements.
     * @param {UserAchievementDeleteManyArgs} args - Arguments to filter UserAchievements to delete.
     * @example
     * // Delete a few UserAchievements
     * const { count } = await prisma.userAchievement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAchievementDeleteManyArgs>(args?: SelectSubset<T, UserAchievementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAchievements
     * const userAchievement = await prisma.userAchievement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAchievementUpdateManyArgs>(args: SelectSubset<T, UserAchievementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAchievements and returns the data updated in the database.
     * @param {UserAchievementUpdateManyAndReturnArgs} args - Arguments to update many UserAchievements.
     * @example
     * // Update many UserAchievements
     * const userAchievement = await prisma.userAchievement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserAchievements and only return the `id`
     * const userAchievementWithIdOnly = await prisma.userAchievement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserAchievementUpdateManyAndReturnArgs>(args: SelectSubset<T, UserAchievementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserAchievement.
     * @param {UserAchievementUpsertArgs} args - Arguments to update or create a UserAchievement.
     * @example
     * // Update or create a UserAchievement
     * const userAchievement = await prisma.userAchievement.upsert({
     *   create: {
     *     // ... data to create a UserAchievement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAchievement we want to update
     *   }
     * })
     */
    upsert<T extends UserAchievementUpsertArgs>(args: SelectSubset<T, UserAchievementUpsertArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementCountArgs} args - Arguments to filter UserAchievements to count.
     * @example
     * // Count the number of UserAchievements
     * const count = await prisma.userAchievement.count({
     *   where: {
     *     // ... the filter for the UserAchievements we want to count
     *   }
     * })
    **/
    count<T extends UserAchievementCountArgs>(
      args?: Subset<T, UserAchievementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAchievementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAchievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAchievementAggregateArgs>(args: Subset<T, UserAchievementAggregateArgs>): Prisma.PrismaPromise<GetUserAchievementAggregateType<T>>

    /**
     * Group by UserAchievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserAchievementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAchievementGroupByArgs['orderBy'] }
        : { orderBy?: UserAchievementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserAchievementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAchievementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAchievement model
   */
  readonly fields: UserAchievementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAchievement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAchievementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    achievement<T extends AchievementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AchievementDefaultArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserAchievement model
   */
  interface UserAchievementFieldRefs {
    readonly id: FieldRef<"UserAchievement", 'Int'>
    readonly userId: FieldRef<"UserAchievement", 'Int'>
    readonly achievementId: FieldRef<"UserAchievement", 'Int'>
    readonly fechaConseguido: FieldRef<"UserAchievement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserAchievement findUnique
   */
  export type UserAchievementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievement to fetch.
     */
    where: UserAchievementWhereUniqueInput
  }

  /**
   * UserAchievement findUniqueOrThrow
   */
  export type UserAchievementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievement to fetch.
     */
    where: UserAchievementWhereUniqueInput
  }

  /**
   * UserAchievement findFirst
   */
  export type UserAchievementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievement to fetch.
     */
    where?: UserAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAchievements.
     */
    cursor?: UserAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAchievements.
     */
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * UserAchievement findFirstOrThrow
   */
  export type UserAchievementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievement to fetch.
     */
    where?: UserAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAchievements.
     */
    cursor?: UserAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAchievements.
     */
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * UserAchievement findMany
   */
  export type UserAchievementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievements to fetch.
     */
    where?: UserAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAchievements.
     */
    cursor?: UserAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievements.
     */
    skip?: number
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * UserAchievement create
   */
  export type UserAchievementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAchievement.
     */
    data: XOR<UserAchievementCreateInput, UserAchievementUncheckedCreateInput>
  }

  /**
   * UserAchievement createMany
   */
  export type UserAchievementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAchievements.
     */
    data: UserAchievementCreateManyInput | UserAchievementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAchievement createManyAndReturn
   */
  export type UserAchievementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * The data used to create many UserAchievements.
     */
    data: UserAchievementCreateManyInput | UserAchievementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAchievement update
   */
  export type UserAchievementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAchievement.
     */
    data: XOR<UserAchievementUpdateInput, UserAchievementUncheckedUpdateInput>
    /**
     * Choose, which UserAchievement to update.
     */
    where: UserAchievementWhereUniqueInput
  }

  /**
   * UserAchievement updateMany
   */
  export type UserAchievementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAchievements.
     */
    data: XOR<UserAchievementUpdateManyMutationInput, UserAchievementUncheckedUpdateManyInput>
    /**
     * Filter which UserAchievements to update
     */
    where?: UserAchievementWhereInput
    /**
     * Limit how many UserAchievements to update.
     */
    limit?: number
  }

  /**
   * UserAchievement updateManyAndReturn
   */
  export type UserAchievementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * The data used to update UserAchievements.
     */
    data: XOR<UserAchievementUpdateManyMutationInput, UserAchievementUncheckedUpdateManyInput>
    /**
     * Filter which UserAchievements to update
     */
    where?: UserAchievementWhereInput
    /**
     * Limit how many UserAchievements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAchievement upsert
   */
  export type UserAchievementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAchievement to update in case it exists.
     */
    where: UserAchievementWhereUniqueInput
    /**
     * In case the UserAchievement found by the `where` argument doesn't exist, create a new UserAchievement with this data.
     */
    create: XOR<UserAchievementCreateInput, UserAchievementUncheckedCreateInput>
    /**
     * In case the UserAchievement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAchievementUpdateInput, UserAchievementUncheckedUpdateInput>
  }

  /**
   * UserAchievement delete
   */
  export type UserAchievementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter which UserAchievement to delete.
     */
    where: UserAchievementWhereUniqueInput
  }

  /**
   * UserAchievement deleteMany
   */
  export type UserAchievementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAchievements to delete
     */
    where?: UserAchievementWhereInput
    /**
     * Limit how many UserAchievements to delete.
     */
    limit?: number
  }

  /**
   * UserAchievement without action
   */
  export type UserAchievementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
  }


  /**
   * Model Comentario
   */

  export type AggregateComentario = {
    _count: ComentarioCountAggregateOutputType | null
    _avg: ComentarioAvgAggregateOutputType | null
    _sum: ComentarioSumAggregateOutputType | null
    _min: ComentarioMinAggregateOutputType | null
    _max: ComentarioMaxAggregateOutputType | null
  }

  export type ComentarioAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    rutinaId: number | null
  }

  export type ComentarioSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    rutinaId: number | null
  }

  export type ComentarioMinAggregateOutputType = {
    id: number | null
    texto: string | null
    usuarioId: number | null
    rutinaId: number | null
    creadoEn: Date | null
  }

  export type ComentarioMaxAggregateOutputType = {
    id: number | null
    texto: string | null
    usuarioId: number | null
    rutinaId: number | null
    creadoEn: Date | null
  }

  export type ComentarioCountAggregateOutputType = {
    id: number
    texto: number
    usuarioId: number
    rutinaId: number
    creadoEn: number
    _all: number
  }


  export type ComentarioAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    rutinaId?: true
  }

  export type ComentarioSumAggregateInputType = {
    id?: true
    usuarioId?: true
    rutinaId?: true
  }

  export type ComentarioMinAggregateInputType = {
    id?: true
    texto?: true
    usuarioId?: true
    rutinaId?: true
    creadoEn?: true
  }

  export type ComentarioMaxAggregateInputType = {
    id?: true
    texto?: true
    usuarioId?: true
    rutinaId?: true
    creadoEn?: true
  }

  export type ComentarioCountAggregateInputType = {
    id?: true
    texto?: true
    usuarioId?: true
    rutinaId?: true
    creadoEn?: true
    _all?: true
  }

  export type ComentarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comentario to aggregate.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comentarios
    **/
    _count?: true | ComentarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComentarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComentarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComentarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComentarioMaxAggregateInputType
  }

  export type GetComentarioAggregateType<T extends ComentarioAggregateArgs> = {
        [P in keyof T & keyof AggregateComentario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComentario[P]>
      : GetScalarType<T[P], AggregateComentario[P]>
  }




  export type ComentarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithAggregationInput | ComentarioOrderByWithAggregationInput[]
    by: ComentarioScalarFieldEnum[] | ComentarioScalarFieldEnum
    having?: ComentarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComentarioCountAggregateInputType | true
    _avg?: ComentarioAvgAggregateInputType
    _sum?: ComentarioSumAggregateInputType
    _min?: ComentarioMinAggregateInputType
    _max?: ComentarioMaxAggregateInputType
  }

  export type ComentarioGroupByOutputType = {
    id: number
    texto: string
    usuarioId: number
    rutinaId: number
    creadoEn: Date
    _count: ComentarioCountAggregateOutputType | null
    _avg: ComentarioAvgAggregateOutputType | null
    _sum: ComentarioSumAggregateOutputType | null
    _min: ComentarioMinAggregateOutputType | null
    _max: ComentarioMaxAggregateOutputType | null
  }

  type GetComentarioGroupByPayload<T extends ComentarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComentarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComentarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComentarioGroupByOutputType[P]>
            : GetScalarType<T[P], ComentarioGroupByOutputType[P]>
        }
      >
    >


  export type ComentarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    texto?: boolean
    usuarioId?: boolean
    rutinaId?: boolean
    creadoEn?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comentario"]>

  export type ComentarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    texto?: boolean
    usuarioId?: boolean
    rutinaId?: boolean
    creadoEn?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comentario"]>

  export type ComentarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    texto?: boolean
    usuarioId?: boolean
    rutinaId?: boolean
    creadoEn?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comentario"]>

  export type ComentarioSelectScalar = {
    id?: boolean
    texto?: boolean
    usuarioId?: boolean
    rutinaId?: boolean
    creadoEn?: boolean
  }

  export type ComentarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "texto" | "usuarioId" | "rutinaId" | "creadoEn", ExtArgs["result"]["comentario"]>
  export type ComentarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
  }
  export type ComentarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
  }
  export type ComentarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
  }

  export type $ComentarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comentario"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      rutina: Prisma.$RutinaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      texto: string
      usuarioId: number
      rutinaId: number
      creadoEn: Date
    }, ExtArgs["result"]["comentario"]>
    composites: {}
  }

  type ComentarioGetPayload<S extends boolean | null | undefined | ComentarioDefaultArgs> = $Result.GetResult<Prisma.$ComentarioPayload, S>

  type ComentarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComentarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComentarioCountAggregateInputType | true
    }

  export interface ComentarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comentario'], meta: { name: 'Comentario' } }
    /**
     * Find zero or one Comentario that matches the filter.
     * @param {ComentarioFindUniqueArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComentarioFindUniqueArgs>(args: SelectSubset<T, ComentarioFindUniqueArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comentario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComentarioFindUniqueOrThrowArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComentarioFindUniqueOrThrowArgs>(args: SelectSubset<T, ComentarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comentario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindFirstArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComentarioFindFirstArgs>(args?: SelectSubset<T, ComentarioFindFirstArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comentario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindFirstOrThrowArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComentarioFindFirstOrThrowArgs>(args?: SelectSubset<T, ComentarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comentarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comentarios
     * const comentarios = await prisma.comentario.findMany()
     * 
     * // Get first 10 Comentarios
     * const comentarios = await prisma.comentario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comentarioWithIdOnly = await prisma.comentario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComentarioFindManyArgs>(args?: SelectSubset<T, ComentarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comentario.
     * @param {ComentarioCreateArgs} args - Arguments to create a Comentario.
     * @example
     * // Create one Comentario
     * const Comentario = await prisma.comentario.create({
     *   data: {
     *     // ... data to create a Comentario
     *   }
     * })
     * 
     */
    create<T extends ComentarioCreateArgs>(args: SelectSubset<T, ComentarioCreateArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comentarios.
     * @param {ComentarioCreateManyArgs} args - Arguments to create many Comentarios.
     * @example
     * // Create many Comentarios
     * const comentario = await prisma.comentario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComentarioCreateManyArgs>(args?: SelectSubset<T, ComentarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comentarios and returns the data saved in the database.
     * @param {ComentarioCreateManyAndReturnArgs} args - Arguments to create many Comentarios.
     * @example
     * // Create many Comentarios
     * const comentario = await prisma.comentario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comentarios and only return the `id`
     * const comentarioWithIdOnly = await prisma.comentario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComentarioCreateManyAndReturnArgs>(args?: SelectSubset<T, ComentarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comentario.
     * @param {ComentarioDeleteArgs} args - Arguments to delete one Comentario.
     * @example
     * // Delete one Comentario
     * const Comentario = await prisma.comentario.delete({
     *   where: {
     *     // ... filter to delete one Comentario
     *   }
     * })
     * 
     */
    delete<T extends ComentarioDeleteArgs>(args: SelectSubset<T, ComentarioDeleteArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comentario.
     * @param {ComentarioUpdateArgs} args - Arguments to update one Comentario.
     * @example
     * // Update one Comentario
     * const comentario = await prisma.comentario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComentarioUpdateArgs>(args: SelectSubset<T, ComentarioUpdateArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comentarios.
     * @param {ComentarioDeleteManyArgs} args - Arguments to filter Comentarios to delete.
     * @example
     * // Delete a few Comentarios
     * const { count } = await prisma.comentario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComentarioDeleteManyArgs>(args?: SelectSubset<T, ComentarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comentarios
     * const comentario = await prisma.comentario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComentarioUpdateManyArgs>(args: SelectSubset<T, ComentarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comentarios and returns the data updated in the database.
     * @param {ComentarioUpdateManyAndReturnArgs} args - Arguments to update many Comentarios.
     * @example
     * // Update many Comentarios
     * const comentario = await prisma.comentario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comentarios and only return the `id`
     * const comentarioWithIdOnly = await prisma.comentario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ComentarioUpdateManyAndReturnArgs>(args: SelectSubset<T, ComentarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comentario.
     * @param {ComentarioUpsertArgs} args - Arguments to update or create a Comentario.
     * @example
     * // Update or create a Comentario
     * const comentario = await prisma.comentario.upsert({
     *   create: {
     *     // ... data to create a Comentario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comentario we want to update
     *   }
     * })
     */
    upsert<T extends ComentarioUpsertArgs>(args: SelectSubset<T, ComentarioUpsertArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioCountArgs} args - Arguments to filter Comentarios to count.
     * @example
     * // Count the number of Comentarios
     * const count = await prisma.comentario.count({
     *   where: {
     *     // ... the filter for the Comentarios we want to count
     *   }
     * })
    **/
    count<T extends ComentarioCountArgs>(
      args?: Subset<T, ComentarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComentarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComentarioAggregateArgs>(args: Subset<T, ComentarioAggregateArgs>): Prisma.PrismaPromise<GetComentarioAggregateType<T>>

    /**
     * Group by Comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComentarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComentarioGroupByArgs['orderBy'] }
        : { orderBy?: ComentarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComentarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComentarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comentario model
   */
  readonly fields: ComentarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comentario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComentarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rutina<T extends RutinaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RutinaDefaultArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comentario model
   */
  interface ComentarioFieldRefs {
    readonly id: FieldRef<"Comentario", 'Int'>
    readonly texto: FieldRef<"Comentario", 'String'>
    readonly usuarioId: FieldRef<"Comentario", 'Int'>
    readonly rutinaId: FieldRef<"Comentario", 'Int'>
    readonly creadoEn: FieldRef<"Comentario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comentario findUnique
   */
  export type ComentarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario findUniqueOrThrow
   */
  export type ComentarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario findFirst
   */
  export type ComentarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario findFirstOrThrow
   */
  export type ComentarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario findMany
   */
  export type ComentarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentarios to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario create
   */
  export type ComentarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Comentario.
     */
    data: XOR<ComentarioCreateInput, ComentarioUncheckedCreateInput>
  }

  /**
   * Comentario createMany
   */
  export type ComentarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comentarios.
     */
    data: ComentarioCreateManyInput | ComentarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comentario createManyAndReturn
   */
  export type ComentarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * The data used to create many Comentarios.
     */
    data: ComentarioCreateManyInput | ComentarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comentario update
   */
  export type ComentarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Comentario.
     */
    data: XOR<ComentarioUpdateInput, ComentarioUncheckedUpdateInput>
    /**
     * Choose, which Comentario to update.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario updateMany
   */
  export type ComentarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comentarios.
     */
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyInput>
    /**
     * Filter which Comentarios to update
     */
    where?: ComentarioWhereInput
    /**
     * Limit how many Comentarios to update.
     */
    limit?: number
  }

  /**
   * Comentario updateManyAndReturn
   */
  export type ComentarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * The data used to update Comentarios.
     */
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyInput>
    /**
     * Filter which Comentarios to update
     */
    where?: ComentarioWhereInput
    /**
     * Limit how many Comentarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comentario upsert
   */
  export type ComentarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Comentario to update in case it exists.
     */
    where: ComentarioWhereUniqueInput
    /**
     * In case the Comentario found by the `where` argument doesn't exist, create a new Comentario with this data.
     */
    create: XOR<ComentarioCreateInput, ComentarioUncheckedCreateInput>
    /**
     * In case the Comentario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComentarioUpdateInput, ComentarioUncheckedUpdateInput>
  }

  /**
   * Comentario delete
   */
  export type ComentarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter which Comentario to delete.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario deleteMany
   */
  export type ComentarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comentarios to delete
     */
    where?: ComentarioWhereInput
    /**
     * Limit how many Comentarios to delete.
     */
    limit?: number
  }

  /**
   * Comentario without action
   */
  export type ComentarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
  }


  /**
   * Model Metric
   */

  export type AggregateMetric = {
    _count: MetricCountAggregateOutputType | null
    _avg: MetricAvgAggregateOutputType | null
    _sum: MetricSumAggregateOutputType | null
    _min: MetricMinAggregateOutputType | null
    _max: MetricMaxAggregateOutputType | null
  }

  export type MetricAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    valor: number | null
  }

  export type MetricSumAggregateOutputType = {
    id: number | null
    userId: number | null
    valor: number | null
  }

  export type MetricMinAggregateOutputType = {
    id: number | null
    userId: number | null
    tipo: string | null
    valor: number | null
    fecha: Date | null
  }

  export type MetricMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    tipo: string | null
    valor: number | null
    fecha: Date | null
  }

  export type MetricCountAggregateOutputType = {
    id: number
    userId: number
    tipo: number
    valor: number
    fecha: number
    _all: number
  }


  export type MetricAvgAggregateInputType = {
    id?: true
    userId?: true
    valor?: true
  }

  export type MetricSumAggregateInputType = {
    id?: true
    userId?: true
    valor?: true
  }

  export type MetricMinAggregateInputType = {
    id?: true
    userId?: true
    tipo?: true
    valor?: true
    fecha?: true
  }

  export type MetricMaxAggregateInputType = {
    id?: true
    userId?: true
    tipo?: true
    valor?: true
    fecha?: true
  }

  export type MetricCountAggregateInputType = {
    id?: true
    userId?: true
    tipo?: true
    valor?: true
    fecha?: true
    _all?: true
  }

  export type MetricAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metric to aggregate.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Metrics
    **/
    _count?: true | MetricCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetricAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetricSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetricMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetricMaxAggregateInputType
  }

  export type GetMetricAggregateType<T extends MetricAggregateArgs> = {
        [P in keyof T & keyof AggregateMetric]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetric[P]>
      : GetScalarType<T[P], AggregateMetric[P]>
  }




  export type MetricGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetricWhereInput
    orderBy?: MetricOrderByWithAggregationInput | MetricOrderByWithAggregationInput[]
    by: MetricScalarFieldEnum[] | MetricScalarFieldEnum
    having?: MetricScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetricCountAggregateInputType | true
    _avg?: MetricAvgAggregateInputType
    _sum?: MetricSumAggregateInputType
    _min?: MetricMinAggregateInputType
    _max?: MetricMaxAggregateInputType
  }

  export type MetricGroupByOutputType = {
    id: number
    userId: number
    tipo: string
    valor: number
    fecha: Date
    _count: MetricCountAggregateOutputType | null
    _avg: MetricAvgAggregateOutputType | null
    _sum: MetricSumAggregateOutputType | null
    _min: MetricMinAggregateOutputType | null
    _max: MetricMaxAggregateOutputType | null
  }

  type GetMetricGroupByPayload<T extends MetricGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetricGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetricGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetricGroupByOutputType[P]>
            : GetScalarType<T[P], MetricGroupByOutputType[P]>
        }
      >
    >


  export type MetricSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tipo?: boolean
    valor?: boolean
    fecha?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metric"]>

  export type MetricSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tipo?: boolean
    valor?: boolean
    fecha?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metric"]>

  export type MetricSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tipo?: boolean
    valor?: boolean
    fecha?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metric"]>

  export type MetricSelectScalar = {
    id?: boolean
    userId?: boolean
    tipo?: boolean
    valor?: boolean
    fecha?: boolean
  }

  export type MetricOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tipo" | "valor" | "fecha", ExtArgs["result"]["metric"]>
  export type MetricInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type MetricIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type MetricIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $MetricPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Metric"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      tipo: string
      valor: number
      fecha: Date
    }, ExtArgs["result"]["metric"]>
    composites: {}
  }

  type MetricGetPayload<S extends boolean | null | undefined | MetricDefaultArgs> = $Result.GetResult<Prisma.$MetricPayload, S>

  type MetricCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetricFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetricCountAggregateInputType | true
    }

  export interface MetricDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Metric'], meta: { name: 'Metric' } }
    /**
     * Find zero or one Metric that matches the filter.
     * @param {MetricFindUniqueArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetricFindUniqueArgs>(args: SelectSubset<T, MetricFindUniqueArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Metric that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetricFindUniqueOrThrowArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetricFindUniqueOrThrowArgs>(args: SelectSubset<T, MetricFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metric that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricFindFirstArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetricFindFirstArgs>(args?: SelectSubset<T, MetricFindFirstArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metric that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricFindFirstOrThrowArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetricFindFirstOrThrowArgs>(args?: SelectSubset<T, MetricFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Metrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Metrics
     * const metrics = await prisma.metric.findMany()
     * 
     * // Get first 10 Metrics
     * const metrics = await prisma.metric.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metricWithIdOnly = await prisma.metric.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MetricFindManyArgs>(args?: SelectSubset<T, MetricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Metric.
     * @param {MetricCreateArgs} args - Arguments to create a Metric.
     * @example
     * // Create one Metric
     * const Metric = await prisma.metric.create({
     *   data: {
     *     // ... data to create a Metric
     *   }
     * })
     * 
     */
    create<T extends MetricCreateArgs>(args: SelectSubset<T, MetricCreateArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Metrics.
     * @param {MetricCreateManyArgs} args - Arguments to create many Metrics.
     * @example
     * // Create many Metrics
     * const metric = await prisma.metric.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetricCreateManyArgs>(args?: SelectSubset<T, MetricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Metrics and returns the data saved in the database.
     * @param {MetricCreateManyAndReturnArgs} args - Arguments to create many Metrics.
     * @example
     * // Create many Metrics
     * const metric = await prisma.metric.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Metrics and only return the `id`
     * const metricWithIdOnly = await prisma.metric.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetricCreateManyAndReturnArgs>(args?: SelectSubset<T, MetricCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Metric.
     * @param {MetricDeleteArgs} args - Arguments to delete one Metric.
     * @example
     * // Delete one Metric
     * const Metric = await prisma.metric.delete({
     *   where: {
     *     // ... filter to delete one Metric
     *   }
     * })
     * 
     */
    delete<T extends MetricDeleteArgs>(args: SelectSubset<T, MetricDeleteArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Metric.
     * @param {MetricUpdateArgs} args - Arguments to update one Metric.
     * @example
     * // Update one Metric
     * const metric = await prisma.metric.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetricUpdateArgs>(args: SelectSubset<T, MetricUpdateArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Metrics.
     * @param {MetricDeleteManyArgs} args - Arguments to filter Metrics to delete.
     * @example
     * // Delete a few Metrics
     * const { count } = await prisma.metric.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetricDeleteManyArgs>(args?: SelectSubset<T, MetricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Metrics
     * const metric = await prisma.metric.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetricUpdateManyArgs>(args: SelectSubset<T, MetricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metrics and returns the data updated in the database.
     * @param {MetricUpdateManyAndReturnArgs} args - Arguments to update many Metrics.
     * @example
     * // Update many Metrics
     * const metric = await prisma.metric.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Metrics and only return the `id`
     * const metricWithIdOnly = await prisma.metric.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MetricUpdateManyAndReturnArgs>(args: SelectSubset<T, MetricUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Metric.
     * @param {MetricUpsertArgs} args - Arguments to update or create a Metric.
     * @example
     * // Update or create a Metric
     * const metric = await prisma.metric.upsert({
     *   create: {
     *     // ... data to create a Metric
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Metric we want to update
     *   }
     * })
     */
    upsert<T extends MetricUpsertArgs>(args: SelectSubset<T, MetricUpsertArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricCountArgs} args - Arguments to filter Metrics to count.
     * @example
     * // Count the number of Metrics
     * const count = await prisma.metric.count({
     *   where: {
     *     // ... the filter for the Metrics we want to count
     *   }
     * })
    **/
    count<T extends MetricCountArgs>(
      args?: Subset<T, MetricCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetricCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Metric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MetricAggregateArgs>(args: Subset<T, MetricAggregateArgs>): Prisma.PrismaPromise<GetMetricAggregateType<T>>

    /**
     * Group by Metric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MetricGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetricGroupByArgs['orderBy'] }
        : { orderBy?: MetricGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MetricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Metric model
   */
  readonly fields: MetricFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Metric.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetricClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Metric model
   */
  interface MetricFieldRefs {
    readonly id: FieldRef<"Metric", 'Int'>
    readonly userId: FieldRef<"Metric", 'Int'>
    readonly tipo: FieldRef<"Metric", 'String'>
    readonly valor: FieldRef<"Metric", 'Float'>
    readonly fecha: FieldRef<"Metric", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Metric findUnique
   */
  export type MetricFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric findUniqueOrThrow
   */
  export type MetricFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric findFirst
   */
  export type MetricFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metrics.
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metrics.
     */
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * Metric findFirstOrThrow
   */
  export type MetricFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metrics.
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metrics.
     */
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * Metric findMany
   */
  export type MetricFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter, which Metrics to fetch.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Metrics.
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * Metric create
   */
  export type MetricCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * The data needed to create a Metric.
     */
    data: XOR<MetricCreateInput, MetricUncheckedCreateInput>
  }

  /**
   * Metric createMany
   */
  export type MetricCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Metrics.
     */
    data: MetricCreateManyInput | MetricCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Metric createManyAndReturn
   */
  export type MetricCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * The data used to create many Metrics.
     */
    data: MetricCreateManyInput | MetricCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Metric update
   */
  export type MetricUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * The data needed to update a Metric.
     */
    data: XOR<MetricUpdateInput, MetricUncheckedUpdateInput>
    /**
     * Choose, which Metric to update.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric updateMany
   */
  export type MetricUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Metrics.
     */
    data: XOR<MetricUpdateManyMutationInput, MetricUncheckedUpdateManyInput>
    /**
     * Filter which Metrics to update
     */
    where?: MetricWhereInput
    /**
     * Limit how many Metrics to update.
     */
    limit?: number
  }

  /**
   * Metric updateManyAndReturn
   */
  export type MetricUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * The data used to update Metrics.
     */
    data: XOR<MetricUpdateManyMutationInput, MetricUncheckedUpdateManyInput>
    /**
     * Filter which Metrics to update
     */
    where?: MetricWhereInput
    /**
     * Limit how many Metrics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Metric upsert
   */
  export type MetricUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * The filter to search for the Metric to update in case it exists.
     */
    where: MetricWhereUniqueInput
    /**
     * In case the Metric found by the `where` argument doesn't exist, create a new Metric with this data.
     */
    create: XOR<MetricCreateInput, MetricUncheckedCreateInput>
    /**
     * In case the Metric was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetricUpdateInput, MetricUncheckedUpdateInput>
  }

  /**
   * Metric delete
   */
  export type MetricDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter which Metric to delete.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric deleteMany
   */
  export type MetricDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metrics to delete
     */
    where?: MetricWhereInput
    /**
     * Limit how many Metrics to delete.
     */
    limit?: number
  }

  /**
   * Metric without action
   */
  export type MetricDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    contraseña: 'contraseña',
    fecha_registro: 'fecha_registro',
    fotoUrl: 'fotoUrl',
    plan: 'plan'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const EjercicioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    categoria: 'categoria',
    imagenUrl: 'imagenUrl',
    esComun: 'esComun',
    usuarioId: 'usuarioId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EjercicioScalarFieldEnum = (typeof EjercicioScalarFieldEnum)[keyof typeof EjercicioScalarFieldEnum]


  export const RutinaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    usuarioId: 'usuarioId',
    fecha_creacion: 'fecha_creacion'
  };

  export type RutinaScalarFieldEnum = (typeof RutinaScalarFieldEnum)[keyof typeof RutinaScalarFieldEnum]


  export const RutinaEjercicioScalarFieldEnum: {
    id: 'id',
    rutinaId: 'rutinaId',
    ejercicioId: 'ejercicioId',
    series: 'series',
    repeticiones: 'repeticiones',
    descansoSegundos: 'descansoSegundos',
    orden: 'orden'
  };

  export type RutinaEjercicioScalarFieldEnum = (typeof RutinaEjercicioScalarFieldEnum)[keyof typeof RutinaEjercicioScalarFieldEnum]


  export const CalendarioScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    rutinaId: 'rutinaId',
    fecha: 'fecha'
  };

  export type CalendarioScalarFieldEnum = (typeof CalendarioScalarFieldEnum)[keyof typeof CalendarioScalarFieldEnum]


  export const EntrenadorScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    especialidad: 'especialidad',
    descripcion: 'descripcion',
    experiencia: 'experiencia',
    precio: 'precio',
    fotoUrl: 'fotoUrl',
    disponible: 'disponible',
    calificacion: 'calificacion',
    certificaciones: 'certificaciones'
  };

  export type EntrenadorScalarFieldEnum = (typeof EntrenadorScalarFieldEnum)[keyof typeof EntrenadorScalarFieldEnum]


  export const ContratacionScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    entrenadorId: 'entrenadorId',
    fechaInicio: 'fechaInicio',
    fechaFin: 'fechaFin',
    estado: 'estado',
    planSeleccionado: 'planSeleccionado',
    precio: 'precio'
  };

  export type ContratacionScalarFieldEnum = (typeof ContratacionScalarFieldEnum)[keyof typeof ContratacionScalarFieldEnum]


  export const ChallengeScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descripcion: 'descripcion',
    activo: 'activo',
    fechaInicio: 'fechaInicio',
    fechaFin: 'fechaFin',
    participantes: 'participantes',
    nivel: 'nivel',
    tipo: 'tipo',
    objetivos: 'objetivos',
    recompensa: 'recompensa',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChallengeScalarFieldEnum = (typeof ChallengeScalarFieldEnum)[keyof typeof ChallengeScalarFieldEnum]


  export const UserChallengeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    challengeId: 'challengeId',
    progreso: 'progreso',
    completado: 'completado',
    fechaInicio: 'fechaInicio',
    ultimoProgreso: 'ultimoProgreso'
  };

  export type UserChallengeScalarFieldEnum = (typeof UserChallengeScalarFieldEnum)[keyof typeof UserChallengeScalarFieldEnum]


  export const AchievementScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descripcion: 'descripcion',
    tipo: 'tipo',
    icono: 'icono',
    criterio: 'criterio',
    valorNecesario: 'valorNecesario'
  };

  export type AchievementScalarFieldEnum = (typeof AchievementScalarFieldEnum)[keyof typeof AchievementScalarFieldEnum]


  export const UserAchievementScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    achievementId: 'achievementId',
    fechaConseguido: 'fechaConseguido'
  };

  export type UserAchievementScalarFieldEnum = (typeof UserAchievementScalarFieldEnum)[keyof typeof UserAchievementScalarFieldEnum]


  export const ComentarioScalarFieldEnum: {
    id: 'id',
    texto: 'texto',
    usuarioId: 'usuarioId',
    rutinaId: 'rutinaId',
    creadoEn: 'creadoEn'
  };

  export type ComentarioScalarFieldEnum = (typeof ComentarioScalarFieldEnum)[keyof typeof ComentarioScalarFieldEnum]


  export const MetricScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tipo: 'tipo',
    valor: 'valor',
    fecha: 'fecha'
  };

  export type MetricScalarFieldEnum = (typeof MetricScalarFieldEnum)[keyof typeof MetricScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    contraseña?: StringFilter<"Usuario"> | string
    fecha_registro?: DateTimeFilter<"Usuario"> | Date | string
    fotoUrl?: StringNullableFilter<"Usuario"> | string | null
    plan?: StringFilter<"Usuario"> | string
    rutinas?: RutinaListRelationFilter
    calendario?: CalendarioListRelationFilter
    contrataciones?: ContratacionListRelationFilter
    userChallenges?: UserChallengeListRelationFilter
    userAchievements?: UserAchievementListRelationFilter
    comentarios?: ComentarioListRelationFilter
    metrics?: MetricListRelationFilter
    ejercicios?: EjercicioListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contraseña?: SortOrder
    fecha_registro?: SortOrder
    fotoUrl?: SortOrderInput | SortOrder
    plan?: SortOrder
    rutinas?: RutinaOrderByRelationAggregateInput
    calendario?: CalendarioOrderByRelationAggregateInput
    contrataciones?: ContratacionOrderByRelationAggregateInput
    userChallenges?: UserChallengeOrderByRelationAggregateInput
    userAchievements?: UserAchievementOrderByRelationAggregateInput
    comentarios?: ComentarioOrderByRelationAggregateInput
    metrics?: MetricOrderByRelationAggregateInput
    ejercicios?: EjercicioOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    contraseña?: StringFilter<"Usuario"> | string
    fecha_registro?: DateTimeFilter<"Usuario"> | Date | string
    fotoUrl?: StringNullableFilter<"Usuario"> | string | null
    plan?: StringFilter<"Usuario"> | string
    rutinas?: RutinaListRelationFilter
    calendario?: CalendarioListRelationFilter
    contrataciones?: ContratacionListRelationFilter
    userChallenges?: UserChallengeListRelationFilter
    userAchievements?: UserAchievementListRelationFilter
    comentarios?: ComentarioListRelationFilter
    metrics?: MetricListRelationFilter
    ejercicios?: EjercicioListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contraseña?: SortOrder
    fecha_registro?: SortOrder
    fotoUrl?: SortOrderInput | SortOrder
    plan?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    contraseña?: StringWithAggregatesFilter<"Usuario"> | string
    fecha_registro?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    fotoUrl?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    plan?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type EjercicioWhereInput = {
    AND?: EjercicioWhereInput | EjercicioWhereInput[]
    OR?: EjercicioWhereInput[]
    NOT?: EjercicioWhereInput | EjercicioWhereInput[]
    id?: IntFilter<"Ejercicio"> | number
    nombre?: StringFilter<"Ejercicio"> | string
    descripcion?: StringNullableFilter<"Ejercicio"> | string | null
    categoria?: StringNullableFilter<"Ejercicio"> | string | null
    imagenUrl?: StringNullableFilter<"Ejercicio"> | string | null
    esComun?: BoolFilter<"Ejercicio"> | boolean
    usuarioId?: IntNullableFilter<"Ejercicio"> | number | null
    createdAt?: DateTimeFilter<"Ejercicio"> | Date | string
    updatedAt?: DateTimeFilter<"Ejercicio"> | Date | string
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    rutinaEjercicio?: RutinaEjercicioListRelationFilter
  }

  export type EjercicioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    categoria?: SortOrderInput | SortOrder
    imagenUrl?: SortOrderInput | SortOrder
    esComun?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    rutinaEjercicio?: RutinaEjercicioOrderByRelationAggregateInput
  }

  export type EjercicioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EjercicioWhereInput | EjercicioWhereInput[]
    OR?: EjercicioWhereInput[]
    NOT?: EjercicioWhereInput | EjercicioWhereInput[]
    nombre?: StringFilter<"Ejercicio"> | string
    descripcion?: StringNullableFilter<"Ejercicio"> | string | null
    categoria?: StringNullableFilter<"Ejercicio"> | string | null
    imagenUrl?: StringNullableFilter<"Ejercicio"> | string | null
    esComun?: BoolFilter<"Ejercicio"> | boolean
    usuarioId?: IntNullableFilter<"Ejercicio"> | number | null
    createdAt?: DateTimeFilter<"Ejercicio"> | Date | string
    updatedAt?: DateTimeFilter<"Ejercicio"> | Date | string
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    rutinaEjercicio?: RutinaEjercicioListRelationFilter
  }, "id">

  export type EjercicioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    categoria?: SortOrderInput | SortOrder
    imagenUrl?: SortOrderInput | SortOrder
    esComun?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EjercicioCountOrderByAggregateInput
    _avg?: EjercicioAvgOrderByAggregateInput
    _max?: EjercicioMaxOrderByAggregateInput
    _min?: EjercicioMinOrderByAggregateInput
    _sum?: EjercicioSumOrderByAggregateInput
  }

  export type EjercicioScalarWhereWithAggregatesInput = {
    AND?: EjercicioScalarWhereWithAggregatesInput | EjercicioScalarWhereWithAggregatesInput[]
    OR?: EjercicioScalarWhereWithAggregatesInput[]
    NOT?: EjercicioScalarWhereWithAggregatesInput | EjercicioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ejercicio"> | number
    nombre?: StringWithAggregatesFilter<"Ejercicio"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Ejercicio"> | string | null
    categoria?: StringNullableWithAggregatesFilter<"Ejercicio"> | string | null
    imagenUrl?: StringNullableWithAggregatesFilter<"Ejercicio"> | string | null
    esComun?: BoolWithAggregatesFilter<"Ejercicio"> | boolean
    usuarioId?: IntNullableWithAggregatesFilter<"Ejercicio"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Ejercicio"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ejercicio"> | Date | string
  }

  export type RutinaWhereInput = {
    AND?: RutinaWhereInput | RutinaWhereInput[]
    OR?: RutinaWhereInput[]
    NOT?: RutinaWhereInput | RutinaWhereInput[]
    id?: IntFilter<"Rutina"> | number
    nombre?: StringFilter<"Rutina"> | string
    descripcion?: StringFilter<"Rutina"> | string
    usuarioId?: IntFilter<"Rutina"> | number
    fecha_creacion?: DateTimeFilter<"Rutina"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    ejercicios?: RutinaEjercicioListRelationFilter
    calendario?: CalendarioListRelationFilter
    comentarios?: ComentarioListRelationFilter
  }

  export type RutinaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    usuarioId?: SortOrder
    fecha_creacion?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    ejercicios?: RutinaEjercicioOrderByRelationAggregateInput
    calendario?: CalendarioOrderByRelationAggregateInput
    comentarios?: ComentarioOrderByRelationAggregateInput
  }

  export type RutinaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RutinaWhereInput | RutinaWhereInput[]
    OR?: RutinaWhereInput[]
    NOT?: RutinaWhereInput | RutinaWhereInput[]
    nombre?: StringFilter<"Rutina"> | string
    descripcion?: StringFilter<"Rutina"> | string
    usuarioId?: IntFilter<"Rutina"> | number
    fecha_creacion?: DateTimeFilter<"Rutina"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    ejercicios?: RutinaEjercicioListRelationFilter
    calendario?: CalendarioListRelationFilter
    comentarios?: ComentarioListRelationFilter
  }, "id">

  export type RutinaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    usuarioId?: SortOrder
    fecha_creacion?: SortOrder
    _count?: RutinaCountOrderByAggregateInput
    _avg?: RutinaAvgOrderByAggregateInput
    _max?: RutinaMaxOrderByAggregateInput
    _min?: RutinaMinOrderByAggregateInput
    _sum?: RutinaSumOrderByAggregateInput
  }

  export type RutinaScalarWhereWithAggregatesInput = {
    AND?: RutinaScalarWhereWithAggregatesInput | RutinaScalarWhereWithAggregatesInput[]
    OR?: RutinaScalarWhereWithAggregatesInput[]
    NOT?: RutinaScalarWhereWithAggregatesInput | RutinaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rutina"> | number
    nombre?: StringWithAggregatesFilter<"Rutina"> | string
    descripcion?: StringWithAggregatesFilter<"Rutina"> | string
    usuarioId?: IntWithAggregatesFilter<"Rutina"> | number
    fecha_creacion?: DateTimeWithAggregatesFilter<"Rutina"> | Date | string
  }

  export type RutinaEjercicioWhereInput = {
    AND?: RutinaEjercicioWhereInput | RutinaEjercicioWhereInput[]
    OR?: RutinaEjercicioWhereInput[]
    NOT?: RutinaEjercicioWhereInput | RutinaEjercicioWhereInput[]
    id?: IntFilter<"RutinaEjercicio"> | number
    rutinaId?: IntFilter<"RutinaEjercicio"> | number
    ejercicioId?: IntFilter<"RutinaEjercicio"> | number
    series?: IntFilter<"RutinaEjercicio"> | number
    repeticiones?: IntFilter<"RutinaEjercicio"> | number
    descansoSegundos?: IntFilter<"RutinaEjercicio"> | number
    orden?: IntFilter<"RutinaEjercicio"> | number
    rutina?: XOR<RutinaScalarRelationFilter, RutinaWhereInput>
    ejercicio?: XOR<EjercicioScalarRelationFilter, EjercicioWhereInput>
  }

  export type RutinaEjercicioOrderByWithRelationInput = {
    id?: SortOrder
    rutinaId?: SortOrder
    ejercicioId?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
    descansoSegundos?: SortOrder
    orden?: SortOrder
    rutina?: RutinaOrderByWithRelationInput
    ejercicio?: EjercicioOrderByWithRelationInput
  }

  export type RutinaEjercicioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RutinaEjercicioWhereInput | RutinaEjercicioWhereInput[]
    OR?: RutinaEjercicioWhereInput[]
    NOT?: RutinaEjercicioWhereInput | RutinaEjercicioWhereInput[]
    rutinaId?: IntFilter<"RutinaEjercicio"> | number
    ejercicioId?: IntFilter<"RutinaEjercicio"> | number
    series?: IntFilter<"RutinaEjercicio"> | number
    repeticiones?: IntFilter<"RutinaEjercicio"> | number
    descansoSegundos?: IntFilter<"RutinaEjercicio"> | number
    orden?: IntFilter<"RutinaEjercicio"> | number
    rutina?: XOR<RutinaScalarRelationFilter, RutinaWhereInput>
    ejercicio?: XOR<EjercicioScalarRelationFilter, EjercicioWhereInput>
  }, "id">

  export type RutinaEjercicioOrderByWithAggregationInput = {
    id?: SortOrder
    rutinaId?: SortOrder
    ejercicioId?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
    descansoSegundos?: SortOrder
    orden?: SortOrder
    _count?: RutinaEjercicioCountOrderByAggregateInput
    _avg?: RutinaEjercicioAvgOrderByAggregateInput
    _max?: RutinaEjercicioMaxOrderByAggregateInput
    _min?: RutinaEjercicioMinOrderByAggregateInput
    _sum?: RutinaEjercicioSumOrderByAggregateInput
  }

  export type RutinaEjercicioScalarWhereWithAggregatesInput = {
    AND?: RutinaEjercicioScalarWhereWithAggregatesInput | RutinaEjercicioScalarWhereWithAggregatesInput[]
    OR?: RutinaEjercicioScalarWhereWithAggregatesInput[]
    NOT?: RutinaEjercicioScalarWhereWithAggregatesInput | RutinaEjercicioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RutinaEjercicio"> | number
    rutinaId?: IntWithAggregatesFilter<"RutinaEjercicio"> | number
    ejercicioId?: IntWithAggregatesFilter<"RutinaEjercicio"> | number
    series?: IntWithAggregatesFilter<"RutinaEjercicio"> | number
    repeticiones?: IntWithAggregatesFilter<"RutinaEjercicio"> | number
    descansoSegundos?: IntWithAggregatesFilter<"RutinaEjercicio"> | number
    orden?: IntWithAggregatesFilter<"RutinaEjercicio"> | number
  }

  export type CalendarioWhereInput = {
    AND?: CalendarioWhereInput | CalendarioWhereInput[]
    OR?: CalendarioWhereInput[]
    NOT?: CalendarioWhereInput | CalendarioWhereInput[]
    id?: IntFilter<"Calendario"> | number
    usuarioId?: IntFilter<"Calendario"> | number
    rutinaId?: IntFilter<"Calendario"> | number
    fecha?: DateTimeFilter<"Calendario"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    rutina?: XOR<RutinaScalarRelationFilter, RutinaWhereInput>
  }

  export type CalendarioOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    rutinaId?: SortOrder
    fecha?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    rutina?: RutinaOrderByWithRelationInput
  }

  export type CalendarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CalendarioWhereInput | CalendarioWhereInput[]
    OR?: CalendarioWhereInput[]
    NOT?: CalendarioWhereInput | CalendarioWhereInput[]
    usuarioId?: IntFilter<"Calendario"> | number
    rutinaId?: IntFilter<"Calendario"> | number
    fecha?: DateTimeFilter<"Calendario"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    rutina?: XOR<RutinaScalarRelationFilter, RutinaWhereInput>
  }, "id">

  export type CalendarioOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    rutinaId?: SortOrder
    fecha?: SortOrder
    _count?: CalendarioCountOrderByAggregateInput
    _avg?: CalendarioAvgOrderByAggregateInput
    _max?: CalendarioMaxOrderByAggregateInput
    _min?: CalendarioMinOrderByAggregateInput
    _sum?: CalendarioSumOrderByAggregateInput
  }

  export type CalendarioScalarWhereWithAggregatesInput = {
    AND?: CalendarioScalarWhereWithAggregatesInput | CalendarioScalarWhereWithAggregatesInput[]
    OR?: CalendarioScalarWhereWithAggregatesInput[]
    NOT?: CalendarioScalarWhereWithAggregatesInput | CalendarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Calendario"> | number
    usuarioId?: IntWithAggregatesFilter<"Calendario"> | number
    rutinaId?: IntWithAggregatesFilter<"Calendario"> | number
    fecha?: DateTimeWithAggregatesFilter<"Calendario"> | Date | string
  }

  export type EntrenadorWhereInput = {
    AND?: EntrenadorWhereInput | EntrenadorWhereInput[]
    OR?: EntrenadorWhereInput[]
    NOT?: EntrenadorWhereInput | EntrenadorWhereInput[]
    id?: IntFilter<"Entrenador"> | number
    nombre?: StringFilter<"Entrenador"> | string
    especialidad?: StringFilter<"Entrenador"> | string
    descripcion?: StringFilter<"Entrenador"> | string
    experiencia?: IntFilter<"Entrenador"> | number
    precio?: FloatFilter<"Entrenador"> | number
    fotoUrl?: StringNullableFilter<"Entrenador"> | string | null
    disponible?: BoolFilter<"Entrenador"> | boolean
    calificacion?: FloatNullableFilter<"Entrenador"> | number | null
    certificaciones?: StringNullableListFilter<"Entrenador">
    contrataciones?: ContratacionListRelationFilter
  }

  export type EntrenadorOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    especialidad?: SortOrder
    descripcion?: SortOrder
    experiencia?: SortOrder
    precio?: SortOrder
    fotoUrl?: SortOrderInput | SortOrder
    disponible?: SortOrder
    calificacion?: SortOrderInput | SortOrder
    certificaciones?: SortOrder
    contrataciones?: ContratacionOrderByRelationAggregateInput
  }

  export type EntrenadorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EntrenadorWhereInput | EntrenadorWhereInput[]
    OR?: EntrenadorWhereInput[]
    NOT?: EntrenadorWhereInput | EntrenadorWhereInput[]
    nombre?: StringFilter<"Entrenador"> | string
    especialidad?: StringFilter<"Entrenador"> | string
    descripcion?: StringFilter<"Entrenador"> | string
    experiencia?: IntFilter<"Entrenador"> | number
    precio?: FloatFilter<"Entrenador"> | number
    fotoUrl?: StringNullableFilter<"Entrenador"> | string | null
    disponible?: BoolFilter<"Entrenador"> | boolean
    calificacion?: FloatNullableFilter<"Entrenador"> | number | null
    certificaciones?: StringNullableListFilter<"Entrenador">
    contrataciones?: ContratacionListRelationFilter
  }, "id">

  export type EntrenadorOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    especialidad?: SortOrder
    descripcion?: SortOrder
    experiencia?: SortOrder
    precio?: SortOrder
    fotoUrl?: SortOrderInput | SortOrder
    disponible?: SortOrder
    calificacion?: SortOrderInput | SortOrder
    certificaciones?: SortOrder
    _count?: EntrenadorCountOrderByAggregateInput
    _avg?: EntrenadorAvgOrderByAggregateInput
    _max?: EntrenadorMaxOrderByAggregateInput
    _min?: EntrenadorMinOrderByAggregateInput
    _sum?: EntrenadorSumOrderByAggregateInput
  }

  export type EntrenadorScalarWhereWithAggregatesInput = {
    AND?: EntrenadorScalarWhereWithAggregatesInput | EntrenadorScalarWhereWithAggregatesInput[]
    OR?: EntrenadorScalarWhereWithAggregatesInput[]
    NOT?: EntrenadorScalarWhereWithAggregatesInput | EntrenadorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Entrenador"> | number
    nombre?: StringWithAggregatesFilter<"Entrenador"> | string
    especialidad?: StringWithAggregatesFilter<"Entrenador"> | string
    descripcion?: StringWithAggregatesFilter<"Entrenador"> | string
    experiencia?: IntWithAggregatesFilter<"Entrenador"> | number
    precio?: FloatWithAggregatesFilter<"Entrenador"> | number
    fotoUrl?: StringNullableWithAggregatesFilter<"Entrenador"> | string | null
    disponible?: BoolWithAggregatesFilter<"Entrenador"> | boolean
    calificacion?: FloatNullableWithAggregatesFilter<"Entrenador"> | number | null
    certificaciones?: StringNullableListFilter<"Entrenador">
  }

  export type ContratacionWhereInput = {
    AND?: ContratacionWhereInput | ContratacionWhereInput[]
    OR?: ContratacionWhereInput[]
    NOT?: ContratacionWhereInput | ContratacionWhereInput[]
    id?: IntFilter<"Contratacion"> | number
    usuarioId?: IntFilter<"Contratacion"> | number
    entrenadorId?: IntFilter<"Contratacion"> | number
    fechaInicio?: DateTimeFilter<"Contratacion"> | Date | string
    fechaFin?: DateTimeNullableFilter<"Contratacion"> | Date | string | null
    estado?: StringFilter<"Contratacion"> | string
    planSeleccionado?: StringFilter<"Contratacion"> | string
    precio?: FloatFilter<"Contratacion"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    entrenador?: XOR<EntrenadorScalarRelationFilter, EntrenadorWhereInput>
  }

  export type ContratacionOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    entrenadorId?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrderInput | SortOrder
    estado?: SortOrder
    planSeleccionado?: SortOrder
    precio?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    entrenador?: EntrenadorOrderByWithRelationInput
  }

  export type ContratacionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContratacionWhereInput | ContratacionWhereInput[]
    OR?: ContratacionWhereInput[]
    NOT?: ContratacionWhereInput | ContratacionWhereInput[]
    usuarioId?: IntFilter<"Contratacion"> | number
    entrenadorId?: IntFilter<"Contratacion"> | number
    fechaInicio?: DateTimeFilter<"Contratacion"> | Date | string
    fechaFin?: DateTimeNullableFilter<"Contratacion"> | Date | string | null
    estado?: StringFilter<"Contratacion"> | string
    planSeleccionado?: StringFilter<"Contratacion"> | string
    precio?: FloatFilter<"Contratacion"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    entrenador?: XOR<EntrenadorScalarRelationFilter, EntrenadorWhereInput>
  }, "id">

  export type ContratacionOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    entrenadorId?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrderInput | SortOrder
    estado?: SortOrder
    planSeleccionado?: SortOrder
    precio?: SortOrder
    _count?: ContratacionCountOrderByAggregateInput
    _avg?: ContratacionAvgOrderByAggregateInput
    _max?: ContratacionMaxOrderByAggregateInput
    _min?: ContratacionMinOrderByAggregateInput
    _sum?: ContratacionSumOrderByAggregateInput
  }

  export type ContratacionScalarWhereWithAggregatesInput = {
    AND?: ContratacionScalarWhereWithAggregatesInput | ContratacionScalarWhereWithAggregatesInput[]
    OR?: ContratacionScalarWhereWithAggregatesInput[]
    NOT?: ContratacionScalarWhereWithAggregatesInput | ContratacionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contratacion"> | number
    usuarioId?: IntWithAggregatesFilter<"Contratacion"> | number
    entrenadorId?: IntWithAggregatesFilter<"Contratacion"> | number
    fechaInicio?: DateTimeWithAggregatesFilter<"Contratacion"> | Date | string
    fechaFin?: DateTimeNullableWithAggregatesFilter<"Contratacion"> | Date | string | null
    estado?: StringWithAggregatesFilter<"Contratacion"> | string
    planSeleccionado?: StringWithAggregatesFilter<"Contratacion"> | string
    precio?: FloatWithAggregatesFilter<"Contratacion"> | number
  }

  export type ChallengeWhereInput = {
    AND?: ChallengeWhereInput | ChallengeWhereInput[]
    OR?: ChallengeWhereInput[]
    NOT?: ChallengeWhereInput | ChallengeWhereInput[]
    id?: IntFilter<"Challenge"> | number
    titulo?: StringFilter<"Challenge"> | string
    descripcion?: StringFilter<"Challenge"> | string
    activo?: BoolFilter<"Challenge"> | boolean
    fechaInicio?: DateTimeFilter<"Challenge"> | Date | string
    fechaFin?: DateTimeFilter<"Challenge"> | Date | string
    participantes?: IntFilter<"Challenge"> | number
    nivel?: StringFilter<"Challenge"> | string
    tipo?: StringFilter<"Challenge"> | string
    objetivos?: StringNullableListFilter<"Challenge">
    recompensa?: StringFilter<"Challenge"> | string
    createdAt?: DateTimeFilter<"Challenge"> | Date | string
    updatedAt?: DateTimeFilter<"Challenge"> | Date | string
    userChallenges?: UserChallengeListRelationFilter
  }

  export type ChallengeOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    participantes?: SortOrder
    nivel?: SortOrder
    tipo?: SortOrder
    objetivos?: SortOrder
    recompensa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userChallenges?: UserChallengeOrderByRelationAggregateInput
  }

  export type ChallengeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChallengeWhereInput | ChallengeWhereInput[]
    OR?: ChallengeWhereInput[]
    NOT?: ChallengeWhereInput | ChallengeWhereInput[]
    titulo?: StringFilter<"Challenge"> | string
    descripcion?: StringFilter<"Challenge"> | string
    activo?: BoolFilter<"Challenge"> | boolean
    fechaInicio?: DateTimeFilter<"Challenge"> | Date | string
    fechaFin?: DateTimeFilter<"Challenge"> | Date | string
    participantes?: IntFilter<"Challenge"> | number
    nivel?: StringFilter<"Challenge"> | string
    tipo?: StringFilter<"Challenge"> | string
    objetivos?: StringNullableListFilter<"Challenge">
    recompensa?: StringFilter<"Challenge"> | string
    createdAt?: DateTimeFilter<"Challenge"> | Date | string
    updatedAt?: DateTimeFilter<"Challenge"> | Date | string
    userChallenges?: UserChallengeListRelationFilter
  }, "id">

  export type ChallengeOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    participantes?: SortOrder
    nivel?: SortOrder
    tipo?: SortOrder
    objetivos?: SortOrder
    recompensa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChallengeCountOrderByAggregateInput
    _avg?: ChallengeAvgOrderByAggregateInput
    _max?: ChallengeMaxOrderByAggregateInput
    _min?: ChallengeMinOrderByAggregateInput
    _sum?: ChallengeSumOrderByAggregateInput
  }

  export type ChallengeScalarWhereWithAggregatesInput = {
    AND?: ChallengeScalarWhereWithAggregatesInput | ChallengeScalarWhereWithAggregatesInput[]
    OR?: ChallengeScalarWhereWithAggregatesInput[]
    NOT?: ChallengeScalarWhereWithAggregatesInput | ChallengeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Challenge"> | number
    titulo?: StringWithAggregatesFilter<"Challenge"> | string
    descripcion?: StringWithAggregatesFilter<"Challenge"> | string
    activo?: BoolWithAggregatesFilter<"Challenge"> | boolean
    fechaInicio?: DateTimeWithAggregatesFilter<"Challenge"> | Date | string
    fechaFin?: DateTimeWithAggregatesFilter<"Challenge"> | Date | string
    participantes?: IntWithAggregatesFilter<"Challenge"> | number
    nivel?: StringWithAggregatesFilter<"Challenge"> | string
    tipo?: StringWithAggregatesFilter<"Challenge"> | string
    objetivos?: StringNullableListFilter<"Challenge">
    recompensa?: StringWithAggregatesFilter<"Challenge"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Challenge"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Challenge"> | Date | string
  }

  export type UserChallengeWhereInput = {
    AND?: UserChallengeWhereInput | UserChallengeWhereInput[]
    OR?: UserChallengeWhereInput[]
    NOT?: UserChallengeWhereInput | UserChallengeWhereInput[]
    id?: IntFilter<"UserChallenge"> | number
    userId?: IntFilter<"UserChallenge"> | number
    challengeId?: IntFilter<"UserChallenge"> | number
    progreso?: IntFilter<"UserChallenge"> | number
    completado?: BoolFilter<"UserChallenge"> | boolean
    fechaInicio?: DateTimeFilter<"UserChallenge"> | Date | string
    ultimoProgreso?: DateTimeFilter<"UserChallenge"> | Date | string
    user?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
  }

  export type UserChallengeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    progreso?: SortOrder
    completado?: SortOrder
    fechaInicio?: SortOrder
    ultimoProgreso?: SortOrder
    user?: UsuarioOrderByWithRelationInput
    challenge?: ChallengeOrderByWithRelationInput
  }

  export type UserChallengeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_challengeId?: UserChallengeUserIdChallengeIdCompoundUniqueInput
    AND?: UserChallengeWhereInput | UserChallengeWhereInput[]
    OR?: UserChallengeWhereInput[]
    NOT?: UserChallengeWhereInput | UserChallengeWhereInput[]
    userId?: IntFilter<"UserChallenge"> | number
    challengeId?: IntFilter<"UserChallenge"> | number
    progreso?: IntFilter<"UserChallenge"> | number
    completado?: BoolFilter<"UserChallenge"> | boolean
    fechaInicio?: DateTimeFilter<"UserChallenge"> | Date | string
    ultimoProgreso?: DateTimeFilter<"UserChallenge"> | Date | string
    user?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
  }, "id" | "userId_challengeId">

  export type UserChallengeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    progreso?: SortOrder
    completado?: SortOrder
    fechaInicio?: SortOrder
    ultimoProgreso?: SortOrder
    _count?: UserChallengeCountOrderByAggregateInput
    _avg?: UserChallengeAvgOrderByAggregateInput
    _max?: UserChallengeMaxOrderByAggregateInput
    _min?: UserChallengeMinOrderByAggregateInput
    _sum?: UserChallengeSumOrderByAggregateInput
  }

  export type UserChallengeScalarWhereWithAggregatesInput = {
    AND?: UserChallengeScalarWhereWithAggregatesInput | UserChallengeScalarWhereWithAggregatesInput[]
    OR?: UserChallengeScalarWhereWithAggregatesInput[]
    NOT?: UserChallengeScalarWhereWithAggregatesInput | UserChallengeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserChallenge"> | number
    userId?: IntWithAggregatesFilter<"UserChallenge"> | number
    challengeId?: IntWithAggregatesFilter<"UserChallenge"> | number
    progreso?: IntWithAggregatesFilter<"UserChallenge"> | number
    completado?: BoolWithAggregatesFilter<"UserChallenge"> | boolean
    fechaInicio?: DateTimeWithAggregatesFilter<"UserChallenge"> | Date | string
    ultimoProgreso?: DateTimeWithAggregatesFilter<"UserChallenge"> | Date | string
  }

  export type AchievementWhereInput = {
    AND?: AchievementWhereInput | AchievementWhereInput[]
    OR?: AchievementWhereInput[]
    NOT?: AchievementWhereInput | AchievementWhereInput[]
    id?: IntFilter<"Achievement"> | number
    titulo?: StringFilter<"Achievement"> | string
    descripcion?: StringFilter<"Achievement"> | string
    tipo?: StringFilter<"Achievement"> | string
    icono?: StringFilter<"Achievement"> | string
    criterio?: StringFilter<"Achievement"> | string
    valorNecesario?: IntFilter<"Achievement"> | number
    userAchievements?: UserAchievementListRelationFilter
  }

  export type AchievementOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    tipo?: SortOrder
    icono?: SortOrder
    criterio?: SortOrder
    valorNecesario?: SortOrder
    userAchievements?: UserAchievementOrderByRelationAggregateInput
  }

  export type AchievementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AchievementWhereInput | AchievementWhereInput[]
    OR?: AchievementWhereInput[]
    NOT?: AchievementWhereInput | AchievementWhereInput[]
    titulo?: StringFilter<"Achievement"> | string
    descripcion?: StringFilter<"Achievement"> | string
    tipo?: StringFilter<"Achievement"> | string
    icono?: StringFilter<"Achievement"> | string
    criterio?: StringFilter<"Achievement"> | string
    valorNecesario?: IntFilter<"Achievement"> | number
    userAchievements?: UserAchievementListRelationFilter
  }, "id">

  export type AchievementOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    tipo?: SortOrder
    icono?: SortOrder
    criterio?: SortOrder
    valorNecesario?: SortOrder
    _count?: AchievementCountOrderByAggregateInput
    _avg?: AchievementAvgOrderByAggregateInput
    _max?: AchievementMaxOrderByAggregateInput
    _min?: AchievementMinOrderByAggregateInput
    _sum?: AchievementSumOrderByAggregateInput
  }

  export type AchievementScalarWhereWithAggregatesInput = {
    AND?: AchievementScalarWhereWithAggregatesInput | AchievementScalarWhereWithAggregatesInput[]
    OR?: AchievementScalarWhereWithAggregatesInput[]
    NOT?: AchievementScalarWhereWithAggregatesInput | AchievementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Achievement"> | number
    titulo?: StringWithAggregatesFilter<"Achievement"> | string
    descripcion?: StringWithAggregatesFilter<"Achievement"> | string
    tipo?: StringWithAggregatesFilter<"Achievement"> | string
    icono?: StringWithAggregatesFilter<"Achievement"> | string
    criterio?: StringWithAggregatesFilter<"Achievement"> | string
    valorNecesario?: IntWithAggregatesFilter<"Achievement"> | number
  }

  export type UserAchievementWhereInput = {
    AND?: UserAchievementWhereInput | UserAchievementWhereInput[]
    OR?: UserAchievementWhereInput[]
    NOT?: UserAchievementWhereInput | UserAchievementWhereInput[]
    id?: IntFilter<"UserAchievement"> | number
    userId?: IntFilter<"UserAchievement"> | number
    achievementId?: IntFilter<"UserAchievement"> | number
    fechaConseguido?: DateTimeFilter<"UserAchievement"> | Date | string
    user?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    achievement?: XOR<AchievementScalarRelationFilter, AchievementWhereInput>
  }

  export type UserAchievementOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    fechaConseguido?: SortOrder
    user?: UsuarioOrderByWithRelationInput
    achievement?: AchievementOrderByWithRelationInput
  }

  export type UserAchievementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_achievementId?: UserAchievementUserIdAchievementIdCompoundUniqueInput
    AND?: UserAchievementWhereInput | UserAchievementWhereInput[]
    OR?: UserAchievementWhereInput[]
    NOT?: UserAchievementWhereInput | UserAchievementWhereInput[]
    userId?: IntFilter<"UserAchievement"> | number
    achievementId?: IntFilter<"UserAchievement"> | number
    fechaConseguido?: DateTimeFilter<"UserAchievement"> | Date | string
    user?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    achievement?: XOR<AchievementScalarRelationFilter, AchievementWhereInput>
  }, "id" | "userId_achievementId">

  export type UserAchievementOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    fechaConseguido?: SortOrder
    _count?: UserAchievementCountOrderByAggregateInput
    _avg?: UserAchievementAvgOrderByAggregateInput
    _max?: UserAchievementMaxOrderByAggregateInput
    _min?: UserAchievementMinOrderByAggregateInput
    _sum?: UserAchievementSumOrderByAggregateInput
  }

  export type UserAchievementScalarWhereWithAggregatesInput = {
    AND?: UserAchievementScalarWhereWithAggregatesInput | UserAchievementScalarWhereWithAggregatesInput[]
    OR?: UserAchievementScalarWhereWithAggregatesInput[]
    NOT?: UserAchievementScalarWhereWithAggregatesInput | UserAchievementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserAchievement"> | number
    userId?: IntWithAggregatesFilter<"UserAchievement"> | number
    achievementId?: IntWithAggregatesFilter<"UserAchievement"> | number
    fechaConseguido?: DateTimeWithAggregatesFilter<"UserAchievement"> | Date | string
  }

  export type ComentarioWhereInput = {
    AND?: ComentarioWhereInput | ComentarioWhereInput[]
    OR?: ComentarioWhereInput[]
    NOT?: ComentarioWhereInput | ComentarioWhereInput[]
    id?: IntFilter<"Comentario"> | number
    texto?: StringFilter<"Comentario"> | string
    usuarioId?: IntFilter<"Comentario"> | number
    rutinaId?: IntFilter<"Comentario"> | number
    creadoEn?: DateTimeFilter<"Comentario"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    rutina?: XOR<RutinaScalarRelationFilter, RutinaWhereInput>
  }

  export type ComentarioOrderByWithRelationInput = {
    id?: SortOrder
    texto?: SortOrder
    usuarioId?: SortOrder
    rutinaId?: SortOrder
    creadoEn?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    rutina?: RutinaOrderByWithRelationInput
  }

  export type ComentarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ComentarioWhereInput | ComentarioWhereInput[]
    OR?: ComentarioWhereInput[]
    NOT?: ComentarioWhereInput | ComentarioWhereInput[]
    texto?: StringFilter<"Comentario"> | string
    usuarioId?: IntFilter<"Comentario"> | number
    rutinaId?: IntFilter<"Comentario"> | number
    creadoEn?: DateTimeFilter<"Comentario"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    rutina?: XOR<RutinaScalarRelationFilter, RutinaWhereInput>
  }, "id">

  export type ComentarioOrderByWithAggregationInput = {
    id?: SortOrder
    texto?: SortOrder
    usuarioId?: SortOrder
    rutinaId?: SortOrder
    creadoEn?: SortOrder
    _count?: ComentarioCountOrderByAggregateInput
    _avg?: ComentarioAvgOrderByAggregateInput
    _max?: ComentarioMaxOrderByAggregateInput
    _min?: ComentarioMinOrderByAggregateInput
    _sum?: ComentarioSumOrderByAggregateInput
  }

  export type ComentarioScalarWhereWithAggregatesInput = {
    AND?: ComentarioScalarWhereWithAggregatesInput | ComentarioScalarWhereWithAggregatesInput[]
    OR?: ComentarioScalarWhereWithAggregatesInput[]
    NOT?: ComentarioScalarWhereWithAggregatesInput | ComentarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comentario"> | number
    texto?: StringWithAggregatesFilter<"Comentario"> | string
    usuarioId?: IntWithAggregatesFilter<"Comentario"> | number
    rutinaId?: IntWithAggregatesFilter<"Comentario"> | number
    creadoEn?: DateTimeWithAggregatesFilter<"Comentario"> | Date | string
  }

  export type MetricWhereInput = {
    AND?: MetricWhereInput | MetricWhereInput[]
    OR?: MetricWhereInput[]
    NOT?: MetricWhereInput | MetricWhereInput[]
    id?: IntFilter<"Metric"> | number
    userId?: IntFilter<"Metric"> | number
    tipo?: StringFilter<"Metric"> | string
    valor?: FloatFilter<"Metric"> | number
    fecha?: DateTimeFilter<"Metric"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type MetricOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    fecha?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type MetricWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MetricWhereInput | MetricWhereInput[]
    OR?: MetricWhereInput[]
    NOT?: MetricWhereInput | MetricWhereInput[]
    userId?: IntFilter<"Metric"> | number
    tipo?: StringFilter<"Metric"> | string
    valor?: FloatFilter<"Metric"> | number
    fecha?: DateTimeFilter<"Metric"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type MetricOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    fecha?: SortOrder
    _count?: MetricCountOrderByAggregateInput
    _avg?: MetricAvgOrderByAggregateInput
    _max?: MetricMaxOrderByAggregateInput
    _min?: MetricMinOrderByAggregateInput
    _sum?: MetricSumOrderByAggregateInput
  }

  export type MetricScalarWhereWithAggregatesInput = {
    AND?: MetricScalarWhereWithAggregatesInput | MetricScalarWhereWithAggregatesInput[]
    OR?: MetricScalarWhereWithAggregatesInput[]
    NOT?: MetricScalarWhereWithAggregatesInput | MetricScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Metric"> | number
    userId?: IntWithAggregatesFilter<"Metric"> | number
    tipo?: StringWithAggregatesFilter<"Metric"> | string
    valor?: FloatWithAggregatesFilter<"Metric"> | number
    fecha?: DateTimeWithAggregatesFilter<"Metric"> | Date | string
  }

  export type UsuarioCreateInput = {
    nombre: string
    email: string
    contraseña: string
    fecha_registro?: Date | string
    fotoUrl?: string | null
    plan?: string
    rutinas?: RutinaCreateNestedManyWithoutUsuarioInput
    calendario?: CalendarioCreateNestedManyWithoutUsuarioInput
    contrataciones?: ContratacionCreateNestedManyWithoutUsuarioInput
    userChallenges?: UserChallengeCreateNestedManyWithoutUserInput
    userAchievements?: UserAchievementCreateNestedManyWithoutUserInput
    comentarios?: ComentarioCreateNestedManyWithoutUsuarioInput
    metrics?: MetricCreateNestedManyWithoutUsuarioInput
    ejercicios?: EjercicioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nombre: string
    email: string
    contraseña: string
    fecha_registro?: Date | string
    fotoUrl?: string | null
    plan?: string
    rutinas?: RutinaUncheckedCreateNestedManyWithoutUsuarioInput
    calendario?: CalendarioUncheckedCreateNestedManyWithoutUsuarioInput
    contrataciones?: ContratacionUncheckedCreateNestedManyWithoutUsuarioInput
    userChallenges?: UserChallengeUncheckedCreateNestedManyWithoutUserInput
    userAchievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutUsuarioInput
    metrics?: MetricUncheckedCreateNestedManyWithoutUsuarioInput
    ejercicios?: EjercicioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: StringFieldUpdateOperationsInput | string
    rutinas?: RutinaUpdateManyWithoutUsuarioNestedInput
    calendario?: CalendarioUpdateManyWithoutUsuarioNestedInput
    contrataciones?: ContratacionUpdateManyWithoutUsuarioNestedInput
    userChallenges?: UserChallengeUpdateManyWithoutUserNestedInput
    userAchievements?: UserAchievementUpdateManyWithoutUserNestedInput
    comentarios?: ComentarioUpdateManyWithoutUsuarioNestedInput
    metrics?: MetricUpdateManyWithoutUsuarioNestedInput
    ejercicios?: EjercicioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: StringFieldUpdateOperationsInput | string
    rutinas?: RutinaUncheckedUpdateManyWithoutUsuarioNestedInput
    calendario?: CalendarioUncheckedUpdateManyWithoutUsuarioNestedInput
    contrataciones?: ContratacionUncheckedUpdateManyWithoutUsuarioNestedInput
    userChallenges?: UserChallengeUncheckedUpdateManyWithoutUserNestedInput
    userAchievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput
    metrics?: MetricUncheckedUpdateManyWithoutUsuarioNestedInput
    ejercicios?: EjercicioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nombre: string
    email: string
    contraseña: string
    fecha_registro?: Date | string
    fotoUrl?: string | null
    plan?: string
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: StringFieldUpdateOperationsInput | string
  }

  export type EjercicioCreateInput = {
    nombre: string
    descripcion?: string | null
    categoria?: string | null
    imagenUrl?: string | null
    esComun?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario?: UsuarioCreateNestedOneWithoutEjerciciosInput
    rutinaEjercicio?: RutinaEjercicioCreateNestedManyWithoutEjercicioInput
  }

  export type EjercicioUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    categoria?: string | null
    imagenUrl?: string | null
    esComun?: boolean
    usuarioId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rutinaEjercicio?: RutinaEjercicioUncheckedCreateNestedManyWithoutEjercicioInput
  }

  export type EjercicioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    esComun?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneWithoutEjerciciosNestedInput
    rutinaEjercicio?: RutinaEjercicioUpdateManyWithoutEjercicioNestedInput
  }

  export type EjercicioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    esComun?: BoolFieldUpdateOperationsInput | boolean
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rutinaEjercicio?: RutinaEjercicioUncheckedUpdateManyWithoutEjercicioNestedInput
  }

  export type EjercicioCreateManyInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    categoria?: string | null
    imagenUrl?: string | null
    esComun?: boolean
    usuarioId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EjercicioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    esComun?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EjercicioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    esComun?: BoolFieldUpdateOperationsInput | boolean
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutinaCreateInput = {
    nombre: string
    descripcion: string
    fecha_creacion?: Date | string
    usuario: UsuarioCreateNestedOneWithoutRutinasInput
    ejercicios?: RutinaEjercicioCreateNestedManyWithoutRutinaInput
    calendario?: CalendarioCreateNestedManyWithoutRutinaInput
    comentarios?: ComentarioCreateNestedManyWithoutRutinaInput
  }

  export type RutinaUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion: string
    usuarioId: number
    fecha_creacion?: Date | string
    ejercicios?: RutinaEjercicioUncheckedCreateNestedManyWithoutRutinaInput
    calendario?: CalendarioUncheckedCreateNestedManyWithoutRutinaInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutRutinaInput
  }

  export type RutinaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutRutinasNestedInput
    ejercicios?: RutinaEjercicioUpdateManyWithoutRutinaNestedInput
    calendario?: CalendarioUpdateManyWithoutRutinaNestedInput
    comentarios?: ComentarioUpdateManyWithoutRutinaNestedInput
  }

  export type RutinaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    ejercicios?: RutinaEjercicioUncheckedUpdateManyWithoutRutinaNestedInput
    calendario?: CalendarioUncheckedUpdateManyWithoutRutinaNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutRutinaNestedInput
  }

  export type RutinaCreateManyInput = {
    id?: number
    nombre: string
    descripcion: string
    usuarioId: number
    fecha_creacion?: Date | string
  }

  export type RutinaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutinaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutinaEjercicioCreateInput = {
    series: number
    repeticiones: number
    descansoSegundos: number
    orden: number
    rutina: RutinaCreateNestedOneWithoutEjerciciosInput
    ejercicio: EjercicioCreateNestedOneWithoutRutinaEjercicioInput
  }

  export type RutinaEjercicioUncheckedCreateInput = {
    id?: number
    rutinaId: number
    ejercicioId: number
    series: number
    repeticiones: number
    descansoSegundos: number
    orden: number
  }

  export type RutinaEjercicioUpdateInput = {
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    descansoSegundos?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    rutina?: RutinaUpdateOneRequiredWithoutEjerciciosNestedInput
    ejercicio?: EjercicioUpdateOneRequiredWithoutRutinaEjercicioNestedInput
  }

  export type RutinaEjercicioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rutinaId?: IntFieldUpdateOperationsInput | number
    ejercicioId?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    descansoSegundos?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type RutinaEjercicioCreateManyInput = {
    id?: number
    rutinaId: number
    ejercicioId: number
    series: number
    repeticiones: number
    descansoSegundos: number
    orden: number
  }

  export type RutinaEjercicioUpdateManyMutationInput = {
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    descansoSegundos?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type RutinaEjercicioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rutinaId?: IntFieldUpdateOperationsInput | number
    ejercicioId?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    descansoSegundos?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type CalendarioCreateInput = {
    fecha: Date | string
    usuario: UsuarioCreateNestedOneWithoutCalendarioInput
    rutina: RutinaCreateNestedOneWithoutCalendarioInput
  }

  export type CalendarioUncheckedCreateInput = {
    id?: number
    usuarioId: number
    rutinaId: number
    fecha: Date | string
  }

  export type CalendarioUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutCalendarioNestedInput
    rutina?: RutinaUpdateOneRequiredWithoutCalendarioNestedInput
  }

  export type CalendarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    rutinaId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarioCreateManyInput = {
    id?: number
    usuarioId: number
    rutinaId: number
    fecha: Date | string
  }

  export type CalendarioUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    rutinaId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntrenadorCreateInput = {
    nombre: string
    especialidad: string
    descripcion: string
    experiencia: number
    precio: number
    fotoUrl?: string | null
    disponible?: boolean
    calificacion?: number | null
    certificaciones?: EntrenadorCreatecertificacionesInput | string[]
    contrataciones?: ContratacionCreateNestedManyWithoutEntrenadorInput
  }

  export type EntrenadorUncheckedCreateInput = {
    id?: number
    nombre: string
    especialidad: string
    descripcion: string
    experiencia: number
    precio: number
    fotoUrl?: string | null
    disponible?: boolean
    calificacion?: number | null
    certificaciones?: EntrenadorCreatecertificacionesInput | string[]
    contrataciones?: ContratacionUncheckedCreateNestedManyWithoutEntrenadorInput
  }

  export type EntrenadorUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    experiencia?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
    calificacion?: NullableFloatFieldUpdateOperationsInput | number | null
    certificaciones?: EntrenadorUpdatecertificacionesInput | string[]
    contrataciones?: ContratacionUpdateManyWithoutEntrenadorNestedInput
  }

  export type EntrenadorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    experiencia?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
    calificacion?: NullableFloatFieldUpdateOperationsInput | number | null
    certificaciones?: EntrenadorUpdatecertificacionesInput | string[]
    contrataciones?: ContratacionUncheckedUpdateManyWithoutEntrenadorNestedInput
  }

  export type EntrenadorCreateManyInput = {
    id?: number
    nombre: string
    especialidad: string
    descripcion: string
    experiencia: number
    precio: number
    fotoUrl?: string | null
    disponible?: boolean
    calificacion?: number | null
    certificaciones?: EntrenadorCreatecertificacionesInput | string[]
  }

  export type EntrenadorUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    experiencia?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
    calificacion?: NullableFloatFieldUpdateOperationsInput | number | null
    certificaciones?: EntrenadorUpdatecertificacionesInput | string[]
  }

  export type EntrenadorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    experiencia?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
    calificacion?: NullableFloatFieldUpdateOperationsInput | number | null
    certificaciones?: EntrenadorUpdatecertificacionesInput | string[]
  }

  export type ContratacionCreateInput = {
    fechaInicio: Date | string
    fechaFin?: Date | string | null
    estado: string
    planSeleccionado: string
    precio: number
    usuario: UsuarioCreateNestedOneWithoutContratacionesInput
    entrenador: EntrenadorCreateNestedOneWithoutContratacionesInput
  }

  export type ContratacionUncheckedCreateInput = {
    id?: number
    usuarioId: number
    entrenadorId: number
    fechaInicio: Date | string
    fechaFin?: Date | string | null
    estado: string
    planSeleccionado: string
    precio: number
  }

  export type ContratacionUpdateInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    planSeleccionado?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    usuario?: UsuarioUpdateOneRequiredWithoutContratacionesNestedInput
    entrenador?: EntrenadorUpdateOneRequiredWithoutContratacionesNestedInput
  }

  export type ContratacionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    entrenadorId?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    planSeleccionado?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type ContratacionCreateManyInput = {
    id?: number
    usuarioId: number
    entrenadorId: number
    fechaInicio: Date | string
    fechaFin?: Date | string | null
    estado: string
    planSeleccionado: string
    precio: number
  }

  export type ContratacionUpdateManyMutationInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    planSeleccionado?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type ContratacionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    entrenadorId?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    planSeleccionado?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type ChallengeCreateInput = {
    titulo: string
    descripcion: string
    activo?: boolean
    fechaInicio: Date | string
    fechaFin: Date | string
    participantes?: number
    nivel: string
    tipo: string
    objetivos?: ChallengeCreateobjetivosInput | string[]
    recompensa: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userChallenges?: UserChallengeCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateInput = {
    id?: number
    titulo: string
    descripcion: string
    activo?: boolean
    fechaInicio: Date | string
    fechaFin: Date | string
    participantes?: number
    nivel: string
    tipo: string
    objetivos?: ChallengeCreateobjetivosInput | string[]
    recompensa: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userChallenges?: UserChallengeUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    participantes?: IntFieldUpdateOperationsInput | number
    nivel?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    objetivos?: ChallengeUpdateobjetivosInput | string[]
    recompensa?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userChallenges?: UserChallengeUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    participantes?: IntFieldUpdateOperationsInput | number
    nivel?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    objetivos?: ChallengeUpdateobjetivosInput | string[]
    recompensa?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userChallenges?: UserChallengeUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeCreateManyInput = {
    id?: number
    titulo: string
    descripcion: string
    activo?: boolean
    fechaInicio: Date | string
    fechaFin: Date | string
    participantes?: number
    nivel: string
    tipo: string
    objetivos?: ChallengeCreateobjetivosInput | string[]
    recompensa: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChallengeUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    participantes?: IntFieldUpdateOperationsInput | number
    nivel?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    objetivos?: ChallengeUpdateobjetivosInput | string[]
    recompensa?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    participantes?: IntFieldUpdateOperationsInput | number
    nivel?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    objetivos?: ChallengeUpdateobjetivosInput | string[]
    recompensa?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserChallengeCreateInput = {
    progreso?: number
    completado?: boolean
    fechaInicio?: Date | string
    ultimoProgreso?: Date | string
    user: UsuarioCreateNestedOneWithoutUserChallengesInput
    challenge: ChallengeCreateNestedOneWithoutUserChallengesInput
  }

  export type UserChallengeUncheckedCreateInput = {
    id?: number
    userId: number
    challengeId: number
    progreso?: number
    completado?: boolean
    fechaInicio?: Date | string
    ultimoProgreso?: Date | string
  }

  export type UserChallengeUpdateInput = {
    progreso?: IntFieldUpdateOperationsInput | number
    completado?: BoolFieldUpdateOperationsInput | boolean
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoProgreso?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsuarioUpdateOneRequiredWithoutUserChallengesNestedInput
    challenge?: ChallengeUpdateOneRequiredWithoutUserChallengesNestedInput
  }

  export type UserChallengeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    challengeId?: IntFieldUpdateOperationsInput | number
    progreso?: IntFieldUpdateOperationsInput | number
    completado?: BoolFieldUpdateOperationsInput | boolean
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoProgreso?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserChallengeCreateManyInput = {
    id?: number
    userId: number
    challengeId: number
    progreso?: number
    completado?: boolean
    fechaInicio?: Date | string
    ultimoProgreso?: Date | string
  }

  export type UserChallengeUpdateManyMutationInput = {
    progreso?: IntFieldUpdateOperationsInput | number
    completado?: BoolFieldUpdateOperationsInput | boolean
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoProgreso?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserChallengeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    challengeId?: IntFieldUpdateOperationsInput | number
    progreso?: IntFieldUpdateOperationsInput | number
    completado?: BoolFieldUpdateOperationsInput | boolean
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoProgreso?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementCreateInput = {
    titulo: string
    descripcion: string
    tipo: string
    icono: string
    criterio: string
    valorNecesario: number
    userAchievements?: UserAchievementCreateNestedManyWithoutAchievementInput
  }

  export type AchievementUncheckedCreateInput = {
    id?: number
    titulo: string
    descripcion: string
    tipo: string
    icono: string
    criterio: string
    valorNecesario: number
    userAchievements?: UserAchievementUncheckedCreateNestedManyWithoutAchievementInput
  }

  export type AchievementUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    icono?: StringFieldUpdateOperationsInput | string
    criterio?: StringFieldUpdateOperationsInput | string
    valorNecesario?: IntFieldUpdateOperationsInput | number
    userAchievements?: UserAchievementUpdateManyWithoutAchievementNestedInput
  }

  export type AchievementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    icono?: StringFieldUpdateOperationsInput | string
    criterio?: StringFieldUpdateOperationsInput | string
    valorNecesario?: IntFieldUpdateOperationsInput | number
    userAchievements?: UserAchievementUncheckedUpdateManyWithoutAchievementNestedInput
  }

  export type AchievementCreateManyInput = {
    id?: number
    titulo: string
    descripcion: string
    tipo: string
    icono: string
    criterio: string
    valorNecesario: number
  }

  export type AchievementUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    icono?: StringFieldUpdateOperationsInput | string
    criterio?: StringFieldUpdateOperationsInput | string
    valorNecesario?: IntFieldUpdateOperationsInput | number
  }

  export type AchievementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    icono?: StringFieldUpdateOperationsInput | string
    criterio?: StringFieldUpdateOperationsInput | string
    valorNecesario?: IntFieldUpdateOperationsInput | number
  }

  export type UserAchievementCreateInput = {
    fechaConseguido?: Date | string
    user: UsuarioCreateNestedOneWithoutUserAchievementsInput
    achievement: AchievementCreateNestedOneWithoutUserAchievementsInput
  }

  export type UserAchievementUncheckedCreateInput = {
    id?: number
    userId: number
    achievementId: number
    fechaConseguido?: Date | string
  }

  export type UserAchievementUpdateInput = {
    fechaConseguido?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsuarioUpdateOneRequiredWithoutUserAchievementsNestedInput
    achievement?: AchievementUpdateOneRequiredWithoutUserAchievementsNestedInput
  }

  export type UserAchievementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    achievementId?: IntFieldUpdateOperationsInput | number
    fechaConseguido?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementCreateManyInput = {
    id?: number
    userId: number
    achievementId: number
    fechaConseguido?: Date | string
  }

  export type UserAchievementUpdateManyMutationInput = {
    fechaConseguido?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    achievementId?: IntFieldUpdateOperationsInput | number
    fechaConseguido?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioCreateInput = {
    texto: string
    creadoEn?: Date | string
    usuario: UsuarioCreateNestedOneWithoutComentariosInput
    rutina: RutinaCreateNestedOneWithoutComentariosInput
  }

  export type ComentarioUncheckedCreateInput = {
    id?: number
    texto: string
    usuarioId: number
    rutinaId: number
    creadoEn?: Date | string
  }

  export type ComentarioUpdateInput = {
    texto?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutComentariosNestedInput
    rutina?: RutinaUpdateOneRequiredWithoutComentariosNestedInput
  }

  export type ComentarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    texto?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    rutinaId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioCreateManyInput = {
    id?: number
    texto: string
    usuarioId: number
    rutinaId: number
    creadoEn?: Date | string
  }

  export type ComentarioUpdateManyMutationInput = {
    texto?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    texto?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    rutinaId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricCreateInput = {
    tipo: string
    valor: number
    fecha: Date | string
    usuario: UsuarioCreateNestedOneWithoutMetricsInput
  }

  export type MetricUncheckedCreateInput = {
    id?: number
    userId: number
    tipo: string
    valor: number
    fecha: Date | string
  }

  export type MetricUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutMetricsNestedInput
  }

  export type MetricUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricCreateManyInput = {
    id?: number
    userId: number
    tipo: string
    valor: number
    fecha: Date | string
  }

  export type MetricUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type RutinaListRelationFilter = {
    every?: RutinaWhereInput
    some?: RutinaWhereInput
    none?: RutinaWhereInput
  }

  export type CalendarioListRelationFilter = {
    every?: CalendarioWhereInput
    some?: CalendarioWhereInput
    none?: CalendarioWhereInput
  }

  export type ContratacionListRelationFilter = {
    every?: ContratacionWhereInput
    some?: ContratacionWhereInput
    none?: ContratacionWhereInput
  }

  export type UserChallengeListRelationFilter = {
    every?: UserChallengeWhereInput
    some?: UserChallengeWhereInput
    none?: UserChallengeWhereInput
  }

  export type UserAchievementListRelationFilter = {
    every?: UserAchievementWhereInput
    some?: UserAchievementWhereInput
    none?: UserAchievementWhereInput
  }

  export type ComentarioListRelationFilter = {
    every?: ComentarioWhereInput
    some?: ComentarioWhereInput
    none?: ComentarioWhereInput
  }

  export type MetricListRelationFilter = {
    every?: MetricWhereInput
    some?: MetricWhereInput
    none?: MetricWhereInput
  }

  export type EjercicioListRelationFilter = {
    every?: EjercicioWhereInput
    some?: EjercicioWhereInput
    none?: EjercicioWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RutinaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CalendarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContratacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserChallengeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserAchievementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComentarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MetricOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EjercicioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contraseña?: SortOrder
    fecha_registro?: SortOrder
    fotoUrl?: SortOrder
    plan?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contraseña?: SortOrder
    fecha_registro?: SortOrder
    fotoUrl?: SortOrder
    plan?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contraseña?: SortOrder
    fecha_registro?: SortOrder
    fotoUrl?: SortOrder
    plan?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UsuarioNullableScalarRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type RutinaEjercicioListRelationFilter = {
    every?: RutinaEjercicioWhereInput
    some?: RutinaEjercicioWhereInput
    none?: RutinaEjercicioWhereInput
  }

  export type RutinaEjercicioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EjercicioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    categoria?: SortOrder
    imagenUrl?: SortOrder
    esComun?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EjercicioAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type EjercicioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    categoria?: SortOrder
    imagenUrl?: SortOrder
    esComun?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EjercicioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    categoria?: SortOrder
    imagenUrl?: SortOrder
    esComun?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EjercicioSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type RutinaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    usuarioId?: SortOrder
    fecha_creacion?: SortOrder
  }

  export type RutinaAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type RutinaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    usuarioId?: SortOrder
    fecha_creacion?: SortOrder
  }

  export type RutinaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    usuarioId?: SortOrder
    fecha_creacion?: SortOrder
  }

  export type RutinaSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type RutinaScalarRelationFilter = {
    is?: RutinaWhereInput
    isNot?: RutinaWhereInput
  }

  export type EjercicioScalarRelationFilter = {
    is?: EjercicioWhereInput
    isNot?: EjercicioWhereInput
  }

  export type RutinaEjercicioCountOrderByAggregateInput = {
    id?: SortOrder
    rutinaId?: SortOrder
    ejercicioId?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
    descansoSegundos?: SortOrder
    orden?: SortOrder
  }

  export type RutinaEjercicioAvgOrderByAggregateInput = {
    id?: SortOrder
    rutinaId?: SortOrder
    ejercicioId?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
    descansoSegundos?: SortOrder
    orden?: SortOrder
  }

  export type RutinaEjercicioMaxOrderByAggregateInput = {
    id?: SortOrder
    rutinaId?: SortOrder
    ejercicioId?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
    descansoSegundos?: SortOrder
    orden?: SortOrder
  }

  export type RutinaEjercicioMinOrderByAggregateInput = {
    id?: SortOrder
    rutinaId?: SortOrder
    ejercicioId?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
    descansoSegundos?: SortOrder
    orden?: SortOrder
  }

  export type RutinaEjercicioSumOrderByAggregateInput = {
    id?: SortOrder
    rutinaId?: SortOrder
    ejercicioId?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
    descansoSegundos?: SortOrder
    orden?: SortOrder
  }

  export type CalendarioCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    rutinaId?: SortOrder
    fecha?: SortOrder
  }

  export type CalendarioAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    rutinaId?: SortOrder
  }

  export type CalendarioMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    rutinaId?: SortOrder
    fecha?: SortOrder
  }

  export type CalendarioMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    rutinaId?: SortOrder
    fecha?: SortOrder
  }

  export type CalendarioSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    rutinaId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EntrenadorCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    especialidad?: SortOrder
    descripcion?: SortOrder
    experiencia?: SortOrder
    precio?: SortOrder
    fotoUrl?: SortOrder
    disponible?: SortOrder
    calificacion?: SortOrder
    certificaciones?: SortOrder
  }

  export type EntrenadorAvgOrderByAggregateInput = {
    id?: SortOrder
    experiencia?: SortOrder
    precio?: SortOrder
    calificacion?: SortOrder
  }

  export type EntrenadorMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    especialidad?: SortOrder
    descripcion?: SortOrder
    experiencia?: SortOrder
    precio?: SortOrder
    fotoUrl?: SortOrder
    disponible?: SortOrder
    calificacion?: SortOrder
  }

  export type EntrenadorMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    especialidad?: SortOrder
    descripcion?: SortOrder
    experiencia?: SortOrder
    precio?: SortOrder
    fotoUrl?: SortOrder
    disponible?: SortOrder
    calificacion?: SortOrder
  }

  export type EntrenadorSumOrderByAggregateInput = {
    id?: SortOrder
    experiencia?: SortOrder
    precio?: SortOrder
    calificacion?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EntrenadorScalarRelationFilter = {
    is?: EntrenadorWhereInput
    isNot?: EntrenadorWhereInput
  }

  export type ContratacionCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    entrenadorId?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    estado?: SortOrder
    planSeleccionado?: SortOrder
    precio?: SortOrder
  }

  export type ContratacionAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    entrenadorId?: SortOrder
    precio?: SortOrder
  }

  export type ContratacionMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    entrenadorId?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    estado?: SortOrder
    planSeleccionado?: SortOrder
    precio?: SortOrder
  }

  export type ContratacionMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    entrenadorId?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    estado?: SortOrder
    planSeleccionado?: SortOrder
    precio?: SortOrder
  }

  export type ContratacionSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    entrenadorId?: SortOrder
    precio?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ChallengeCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    participantes?: SortOrder
    nivel?: SortOrder
    tipo?: SortOrder
    objetivos?: SortOrder
    recompensa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChallengeAvgOrderByAggregateInput = {
    id?: SortOrder
    participantes?: SortOrder
  }

  export type ChallengeMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    participantes?: SortOrder
    nivel?: SortOrder
    tipo?: SortOrder
    recompensa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChallengeMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    participantes?: SortOrder
    nivel?: SortOrder
    tipo?: SortOrder
    recompensa?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChallengeSumOrderByAggregateInput = {
    id?: SortOrder
    participantes?: SortOrder
  }

  export type ChallengeScalarRelationFilter = {
    is?: ChallengeWhereInput
    isNot?: ChallengeWhereInput
  }

  export type UserChallengeUserIdChallengeIdCompoundUniqueInput = {
    userId: number
    challengeId: number
  }

  export type UserChallengeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    progreso?: SortOrder
    completado?: SortOrder
    fechaInicio?: SortOrder
    ultimoProgreso?: SortOrder
  }

  export type UserChallengeAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    progreso?: SortOrder
  }

  export type UserChallengeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    progreso?: SortOrder
    completado?: SortOrder
    fechaInicio?: SortOrder
    ultimoProgreso?: SortOrder
  }

  export type UserChallengeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    progreso?: SortOrder
    completado?: SortOrder
    fechaInicio?: SortOrder
    ultimoProgreso?: SortOrder
  }

  export type UserChallengeSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    progreso?: SortOrder
  }

  export type AchievementCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    tipo?: SortOrder
    icono?: SortOrder
    criterio?: SortOrder
    valorNecesario?: SortOrder
  }

  export type AchievementAvgOrderByAggregateInput = {
    id?: SortOrder
    valorNecesario?: SortOrder
  }

  export type AchievementMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    tipo?: SortOrder
    icono?: SortOrder
    criterio?: SortOrder
    valorNecesario?: SortOrder
  }

  export type AchievementMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    tipo?: SortOrder
    icono?: SortOrder
    criterio?: SortOrder
    valorNecesario?: SortOrder
  }

  export type AchievementSumOrderByAggregateInput = {
    id?: SortOrder
    valorNecesario?: SortOrder
  }

  export type AchievementScalarRelationFilter = {
    is?: AchievementWhereInput
    isNot?: AchievementWhereInput
  }

  export type UserAchievementUserIdAchievementIdCompoundUniqueInput = {
    userId: number
    achievementId: number
  }

  export type UserAchievementCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    fechaConseguido?: SortOrder
  }

  export type UserAchievementAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
  }

  export type UserAchievementMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    fechaConseguido?: SortOrder
  }

  export type UserAchievementMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    fechaConseguido?: SortOrder
  }

  export type UserAchievementSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
  }

  export type ComentarioCountOrderByAggregateInput = {
    id?: SortOrder
    texto?: SortOrder
    usuarioId?: SortOrder
    rutinaId?: SortOrder
    creadoEn?: SortOrder
  }

  export type ComentarioAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    rutinaId?: SortOrder
  }

  export type ComentarioMaxOrderByAggregateInput = {
    id?: SortOrder
    texto?: SortOrder
    usuarioId?: SortOrder
    rutinaId?: SortOrder
    creadoEn?: SortOrder
  }

  export type ComentarioMinOrderByAggregateInput = {
    id?: SortOrder
    texto?: SortOrder
    usuarioId?: SortOrder
    rutinaId?: SortOrder
    creadoEn?: SortOrder
  }

  export type ComentarioSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    rutinaId?: SortOrder
  }

  export type MetricCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    fecha?: SortOrder
  }

  export type MetricAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    valor?: SortOrder
  }

  export type MetricMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    fecha?: SortOrder
  }

  export type MetricMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    fecha?: SortOrder
  }

  export type MetricSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    valor?: SortOrder
  }

  export type RutinaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RutinaCreateWithoutUsuarioInput, RutinaUncheckedCreateWithoutUsuarioInput> | RutinaCreateWithoutUsuarioInput[] | RutinaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RutinaCreateOrConnectWithoutUsuarioInput | RutinaCreateOrConnectWithoutUsuarioInput[]
    createMany?: RutinaCreateManyUsuarioInputEnvelope
    connect?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
  }

  export type CalendarioCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CalendarioCreateWithoutUsuarioInput, CalendarioUncheckedCreateWithoutUsuarioInput> | CalendarioCreateWithoutUsuarioInput[] | CalendarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CalendarioCreateOrConnectWithoutUsuarioInput | CalendarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: CalendarioCreateManyUsuarioInputEnvelope
    connect?: CalendarioWhereUniqueInput | CalendarioWhereUniqueInput[]
  }

  export type ContratacionCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ContratacionCreateWithoutUsuarioInput, ContratacionUncheckedCreateWithoutUsuarioInput> | ContratacionCreateWithoutUsuarioInput[] | ContratacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ContratacionCreateOrConnectWithoutUsuarioInput | ContratacionCreateOrConnectWithoutUsuarioInput[]
    createMany?: ContratacionCreateManyUsuarioInputEnvelope
    connect?: ContratacionWhereUniqueInput | ContratacionWhereUniqueInput[]
  }

  export type UserChallengeCreateNestedManyWithoutUserInput = {
    create?: XOR<UserChallengeCreateWithoutUserInput, UserChallengeUncheckedCreateWithoutUserInput> | UserChallengeCreateWithoutUserInput[] | UserChallengeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserChallengeCreateOrConnectWithoutUserInput | UserChallengeCreateOrConnectWithoutUserInput[]
    createMany?: UserChallengeCreateManyUserInputEnvelope
    connect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
  }

  export type UserAchievementCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAchievementCreateWithoutUserInput, UserAchievementUncheckedCreateWithoutUserInput> | UserAchievementCreateWithoutUserInput[] | UserAchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutUserInput | UserAchievementCreateOrConnectWithoutUserInput[]
    createMany?: UserAchievementCreateManyUserInputEnvelope
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
  }

  export type ComentarioCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ComentarioCreateWithoutUsuarioInput, ComentarioUncheckedCreateWithoutUsuarioInput> | ComentarioCreateWithoutUsuarioInput[] | ComentarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutUsuarioInput | ComentarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: ComentarioCreateManyUsuarioInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type MetricCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<MetricCreateWithoutUsuarioInput, MetricUncheckedCreateWithoutUsuarioInput> | MetricCreateWithoutUsuarioInput[] | MetricUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MetricCreateOrConnectWithoutUsuarioInput | MetricCreateOrConnectWithoutUsuarioInput[]
    createMany?: MetricCreateManyUsuarioInputEnvelope
    connect?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
  }

  export type EjercicioCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<EjercicioCreateWithoutUsuarioInput, EjercicioUncheckedCreateWithoutUsuarioInput> | EjercicioCreateWithoutUsuarioInput[] | EjercicioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EjercicioCreateOrConnectWithoutUsuarioInput | EjercicioCreateOrConnectWithoutUsuarioInput[]
    createMany?: EjercicioCreateManyUsuarioInputEnvelope
    connect?: EjercicioWhereUniqueInput | EjercicioWhereUniqueInput[]
  }

  export type RutinaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RutinaCreateWithoutUsuarioInput, RutinaUncheckedCreateWithoutUsuarioInput> | RutinaCreateWithoutUsuarioInput[] | RutinaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RutinaCreateOrConnectWithoutUsuarioInput | RutinaCreateOrConnectWithoutUsuarioInput[]
    createMany?: RutinaCreateManyUsuarioInputEnvelope
    connect?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
  }

  export type CalendarioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CalendarioCreateWithoutUsuarioInput, CalendarioUncheckedCreateWithoutUsuarioInput> | CalendarioCreateWithoutUsuarioInput[] | CalendarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CalendarioCreateOrConnectWithoutUsuarioInput | CalendarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: CalendarioCreateManyUsuarioInputEnvelope
    connect?: CalendarioWhereUniqueInput | CalendarioWhereUniqueInput[]
  }

  export type ContratacionUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ContratacionCreateWithoutUsuarioInput, ContratacionUncheckedCreateWithoutUsuarioInput> | ContratacionCreateWithoutUsuarioInput[] | ContratacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ContratacionCreateOrConnectWithoutUsuarioInput | ContratacionCreateOrConnectWithoutUsuarioInput[]
    createMany?: ContratacionCreateManyUsuarioInputEnvelope
    connect?: ContratacionWhereUniqueInput | ContratacionWhereUniqueInput[]
  }

  export type UserChallengeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserChallengeCreateWithoutUserInput, UserChallengeUncheckedCreateWithoutUserInput> | UserChallengeCreateWithoutUserInput[] | UserChallengeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserChallengeCreateOrConnectWithoutUserInput | UserChallengeCreateOrConnectWithoutUserInput[]
    createMany?: UserChallengeCreateManyUserInputEnvelope
    connect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
  }

  export type UserAchievementUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAchievementCreateWithoutUserInput, UserAchievementUncheckedCreateWithoutUserInput> | UserAchievementCreateWithoutUserInput[] | UserAchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutUserInput | UserAchievementCreateOrConnectWithoutUserInput[]
    createMany?: UserAchievementCreateManyUserInputEnvelope
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
  }

  export type ComentarioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ComentarioCreateWithoutUsuarioInput, ComentarioUncheckedCreateWithoutUsuarioInput> | ComentarioCreateWithoutUsuarioInput[] | ComentarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutUsuarioInput | ComentarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: ComentarioCreateManyUsuarioInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type MetricUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<MetricCreateWithoutUsuarioInput, MetricUncheckedCreateWithoutUsuarioInput> | MetricCreateWithoutUsuarioInput[] | MetricUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MetricCreateOrConnectWithoutUsuarioInput | MetricCreateOrConnectWithoutUsuarioInput[]
    createMany?: MetricCreateManyUsuarioInputEnvelope
    connect?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
  }

  export type EjercicioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<EjercicioCreateWithoutUsuarioInput, EjercicioUncheckedCreateWithoutUsuarioInput> | EjercicioCreateWithoutUsuarioInput[] | EjercicioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EjercicioCreateOrConnectWithoutUsuarioInput | EjercicioCreateOrConnectWithoutUsuarioInput[]
    createMany?: EjercicioCreateManyUsuarioInputEnvelope
    connect?: EjercicioWhereUniqueInput | EjercicioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RutinaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RutinaCreateWithoutUsuarioInput, RutinaUncheckedCreateWithoutUsuarioInput> | RutinaCreateWithoutUsuarioInput[] | RutinaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RutinaCreateOrConnectWithoutUsuarioInput | RutinaCreateOrConnectWithoutUsuarioInput[]
    upsert?: RutinaUpsertWithWhereUniqueWithoutUsuarioInput | RutinaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RutinaCreateManyUsuarioInputEnvelope
    set?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    disconnect?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    delete?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    connect?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    update?: RutinaUpdateWithWhereUniqueWithoutUsuarioInput | RutinaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RutinaUpdateManyWithWhereWithoutUsuarioInput | RutinaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RutinaScalarWhereInput | RutinaScalarWhereInput[]
  }

  export type CalendarioUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CalendarioCreateWithoutUsuarioInput, CalendarioUncheckedCreateWithoutUsuarioInput> | CalendarioCreateWithoutUsuarioInput[] | CalendarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CalendarioCreateOrConnectWithoutUsuarioInput | CalendarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: CalendarioUpsertWithWhereUniqueWithoutUsuarioInput | CalendarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CalendarioCreateManyUsuarioInputEnvelope
    set?: CalendarioWhereUniqueInput | CalendarioWhereUniqueInput[]
    disconnect?: CalendarioWhereUniqueInput | CalendarioWhereUniqueInput[]
    delete?: CalendarioWhereUniqueInput | CalendarioWhereUniqueInput[]
    connect?: CalendarioWhereUniqueInput | CalendarioWhereUniqueInput[]
    update?: CalendarioUpdateWithWhereUniqueWithoutUsuarioInput | CalendarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CalendarioUpdateManyWithWhereWithoutUsuarioInput | CalendarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CalendarioScalarWhereInput | CalendarioScalarWhereInput[]
  }

  export type ContratacionUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ContratacionCreateWithoutUsuarioInput, ContratacionUncheckedCreateWithoutUsuarioInput> | ContratacionCreateWithoutUsuarioInput[] | ContratacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ContratacionCreateOrConnectWithoutUsuarioInput | ContratacionCreateOrConnectWithoutUsuarioInput[]
    upsert?: ContratacionUpsertWithWhereUniqueWithoutUsuarioInput | ContratacionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ContratacionCreateManyUsuarioInputEnvelope
    set?: ContratacionWhereUniqueInput | ContratacionWhereUniqueInput[]
    disconnect?: ContratacionWhereUniqueInput | ContratacionWhereUniqueInput[]
    delete?: ContratacionWhereUniqueInput | ContratacionWhereUniqueInput[]
    connect?: ContratacionWhereUniqueInput | ContratacionWhereUniqueInput[]
    update?: ContratacionUpdateWithWhereUniqueWithoutUsuarioInput | ContratacionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ContratacionUpdateManyWithWhereWithoutUsuarioInput | ContratacionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ContratacionScalarWhereInput | ContratacionScalarWhereInput[]
  }

  export type UserChallengeUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserChallengeCreateWithoutUserInput, UserChallengeUncheckedCreateWithoutUserInput> | UserChallengeCreateWithoutUserInput[] | UserChallengeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserChallengeCreateOrConnectWithoutUserInput | UserChallengeCreateOrConnectWithoutUserInput[]
    upsert?: UserChallengeUpsertWithWhereUniqueWithoutUserInput | UserChallengeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserChallengeCreateManyUserInputEnvelope
    set?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    disconnect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    delete?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    connect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    update?: UserChallengeUpdateWithWhereUniqueWithoutUserInput | UserChallengeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserChallengeUpdateManyWithWhereWithoutUserInput | UserChallengeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserChallengeScalarWhereInput | UserChallengeScalarWhereInput[]
  }

  export type UserAchievementUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAchievementCreateWithoutUserInput, UserAchievementUncheckedCreateWithoutUserInput> | UserAchievementCreateWithoutUserInput[] | UserAchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutUserInput | UserAchievementCreateOrConnectWithoutUserInput[]
    upsert?: UserAchievementUpsertWithWhereUniqueWithoutUserInput | UserAchievementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAchievementCreateManyUserInputEnvelope
    set?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    disconnect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    delete?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    update?: UserAchievementUpdateWithWhereUniqueWithoutUserInput | UserAchievementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAchievementUpdateManyWithWhereWithoutUserInput | UserAchievementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
  }

  export type ComentarioUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ComentarioCreateWithoutUsuarioInput, ComentarioUncheckedCreateWithoutUsuarioInput> | ComentarioCreateWithoutUsuarioInput[] | ComentarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutUsuarioInput | ComentarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutUsuarioInput | ComentarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ComentarioCreateManyUsuarioInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutUsuarioInput | ComentarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutUsuarioInput | ComentarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type MetricUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<MetricCreateWithoutUsuarioInput, MetricUncheckedCreateWithoutUsuarioInput> | MetricCreateWithoutUsuarioInput[] | MetricUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MetricCreateOrConnectWithoutUsuarioInput | MetricCreateOrConnectWithoutUsuarioInput[]
    upsert?: MetricUpsertWithWhereUniqueWithoutUsuarioInput | MetricUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: MetricCreateManyUsuarioInputEnvelope
    set?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    disconnect?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    delete?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    connect?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    update?: MetricUpdateWithWhereUniqueWithoutUsuarioInput | MetricUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: MetricUpdateManyWithWhereWithoutUsuarioInput | MetricUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: MetricScalarWhereInput | MetricScalarWhereInput[]
  }

  export type EjercicioUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<EjercicioCreateWithoutUsuarioInput, EjercicioUncheckedCreateWithoutUsuarioInput> | EjercicioCreateWithoutUsuarioInput[] | EjercicioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EjercicioCreateOrConnectWithoutUsuarioInput | EjercicioCreateOrConnectWithoutUsuarioInput[]
    upsert?: EjercicioUpsertWithWhereUniqueWithoutUsuarioInput | EjercicioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: EjercicioCreateManyUsuarioInputEnvelope
    set?: EjercicioWhereUniqueInput | EjercicioWhereUniqueInput[]
    disconnect?: EjercicioWhereUniqueInput | EjercicioWhereUniqueInput[]
    delete?: EjercicioWhereUniqueInput | EjercicioWhereUniqueInput[]
    connect?: EjercicioWhereUniqueInput | EjercicioWhereUniqueInput[]
    update?: EjercicioUpdateWithWhereUniqueWithoutUsuarioInput | EjercicioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: EjercicioUpdateManyWithWhereWithoutUsuarioInput | EjercicioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: EjercicioScalarWhereInput | EjercicioScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RutinaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RutinaCreateWithoutUsuarioInput, RutinaUncheckedCreateWithoutUsuarioInput> | RutinaCreateWithoutUsuarioInput[] | RutinaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RutinaCreateOrConnectWithoutUsuarioInput | RutinaCreateOrConnectWithoutUsuarioInput[]
    upsert?: RutinaUpsertWithWhereUniqueWithoutUsuarioInput | RutinaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RutinaCreateManyUsuarioInputEnvelope
    set?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    disconnect?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    delete?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    connect?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    update?: RutinaUpdateWithWhereUniqueWithoutUsuarioInput | RutinaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RutinaUpdateManyWithWhereWithoutUsuarioInput | RutinaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RutinaScalarWhereInput | RutinaScalarWhereInput[]
  }

  export type CalendarioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CalendarioCreateWithoutUsuarioInput, CalendarioUncheckedCreateWithoutUsuarioInput> | CalendarioCreateWithoutUsuarioInput[] | CalendarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CalendarioCreateOrConnectWithoutUsuarioInput | CalendarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: CalendarioUpsertWithWhereUniqueWithoutUsuarioInput | CalendarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CalendarioCreateManyUsuarioInputEnvelope
    set?: CalendarioWhereUniqueInput | CalendarioWhereUniqueInput[]
    disconnect?: CalendarioWhereUniqueInput | CalendarioWhereUniqueInput[]
    delete?: CalendarioWhereUniqueInput | CalendarioWhereUniqueInput[]
    connect?: CalendarioWhereUniqueInput | CalendarioWhereUniqueInput[]
    update?: CalendarioUpdateWithWhereUniqueWithoutUsuarioInput | CalendarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CalendarioUpdateManyWithWhereWithoutUsuarioInput | CalendarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CalendarioScalarWhereInput | CalendarioScalarWhereInput[]
  }

  export type ContratacionUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ContratacionCreateWithoutUsuarioInput, ContratacionUncheckedCreateWithoutUsuarioInput> | ContratacionCreateWithoutUsuarioInput[] | ContratacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ContratacionCreateOrConnectWithoutUsuarioInput | ContratacionCreateOrConnectWithoutUsuarioInput[]
    upsert?: ContratacionUpsertWithWhereUniqueWithoutUsuarioInput | ContratacionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ContratacionCreateManyUsuarioInputEnvelope
    set?: ContratacionWhereUniqueInput | ContratacionWhereUniqueInput[]
    disconnect?: ContratacionWhereUniqueInput | ContratacionWhereUniqueInput[]
    delete?: ContratacionWhereUniqueInput | ContratacionWhereUniqueInput[]
    connect?: ContratacionWhereUniqueInput | ContratacionWhereUniqueInput[]
    update?: ContratacionUpdateWithWhereUniqueWithoutUsuarioInput | ContratacionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ContratacionUpdateManyWithWhereWithoutUsuarioInput | ContratacionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ContratacionScalarWhereInput | ContratacionScalarWhereInput[]
  }

  export type UserChallengeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserChallengeCreateWithoutUserInput, UserChallengeUncheckedCreateWithoutUserInput> | UserChallengeCreateWithoutUserInput[] | UserChallengeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserChallengeCreateOrConnectWithoutUserInput | UserChallengeCreateOrConnectWithoutUserInput[]
    upsert?: UserChallengeUpsertWithWhereUniqueWithoutUserInput | UserChallengeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserChallengeCreateManyUserInputEnvelope
    set?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    disconnect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    delete?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    connect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    update?: UserChallengeUpdateWithWhereUniqueWithoutUserInput | UserChallengeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserChallengeUpdateManyWithWhereWithoutUserInput | UserChallengeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserChallengeScalarWhereInput | UserChallengeScalarWhereInput[]
  }

  export type UserAchievementUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAchievementCreateWithoutUserInput, UserAchievementUncheckedCreateWithoutUserInput> | UserAchievementCreateWithoutUserInput[] | UserAchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutUserInput | UserAchievementCreateOrConnectWithoutUserInput[]
    upsert?: UserAchievementUpsertWithWhereUniqueWithoutUserInput | UserAchievementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAchievementCreateManyUserInputEnvelope
    set?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    disconnect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    delete?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    update?: UserAchievementUpdateWithWhereUniqueWithoutUserInput | UserAchievementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAchievementUpdateManyWithWhereWithoutUserInput | UserAchievementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
  }

  export type ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ComentarioCreateWithoutUsuarioInput, ComentarioUncheckedCreateWithoutUsuarioInput> | ComentarioCreateWithoutUsuarioInput[] | ComentarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutUsuarioInput | ComentarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutUsuarioInput | ComentarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ComentarioCreateManyUsuarioInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutUsuarioInput | ComentarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutUsuarioInput | ComentarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type MetricUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<MetricCreateWithoutUsuarioInput, MetricUncheckedCreateWithoutUsuarioInput> | MetricCreateWithoutUsuarioInput[] | MetricUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MetricCreateOrConnectWithoutUsuarioInput | MetricCreateOrConnectWithoutUsuarioInput[]
    upsert?: MetricUpsertWithWhereUniqueWithoutUsuarioInput | MetricUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: MetricCreateManyUsuarioInputEnvelope
    set?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    disconnect?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    delete?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    connect?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    update?: MetricUpdateWithWhereUniqueWithoutUsuarioInput | MetricUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: MetricUpdateManyWithWhereWithoutUsuarioInput | MetricUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: MetricScalarWhereInput | MetricScalarWhereInput[]
  }

  export type EjercicioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<EjercicioCreateWithoutUsuarioInput, EjercicioUncheckedCreateWithoutUsuarioInput> | EjercicioCreateWithoutUsuarioInput[] | EjercicioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EjercicioCreateOrConnectWithoutUsuarioInput | EjercicioCreateOrConnectWithoutUsuarioInput[]
    upsert?: EjercicioUpsertWithWhereUniqueWithoutUsuarioInput | EjercicioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: EjercicioCreateManyUsuarioInputEnvelope
    set?: EjercicioWhereUniqueInput | EjercicioWhereUniqueInput[]
    disconnect?: EjercicioWhereUniqueInput | EjercicioWhereUniqueInput[]
    delete?: EjercicioWhereUniqueInput | EjercicioWhereUniqueInput[]
    connect?: EjercicioWhereUniqueInput | EjercicioWhereUniqueInput[]
    update?: EjercicioUpdateWithWhereUniqueWithoutUsuarioInput | EjercicioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: EjercicioUpdateManyWithWhereWithoutUsuarioInput | EjercicioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: EjercicioScalarWhereInput | EjercicioScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutEjerciciosInput = {
    create?: XOR<UsuarioCreateWithoutEjerciciosInput, UsuarioUncheckedCreateWithoutEjerciciosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEjerciciosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type RutinaEjercicioCreateNestedManyWithoutEjercicioInput = {
    create?: XOR<RutinaEjercicioCreateWithoutEjercicioInput, RutinaEjercicioUncheckedCreateWithoutEjercicioInput> | RutinaEjercicioCreateWithoutEjercicioInput[] | RutinaEjercicioUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: RutinaEjercicioCreateOrConnectWithoutEjercicioInput | RutinaEjercicioCreateOrConnectWithoutEjercicioInput[]
    createMany?: RutinaEjercicioCreateManyEjercicioInputEnvelope
    connect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
  }

  export type RutinaEjercicioUncheckedCreateNestedManyWithoutEjercicioInput = {
    create?: XOR<RutinaEjercicioCreateWithoutEjercicioInput, RutinaEjercicioUncheckedCreateWithoutEjercicioInput> | RutinaEjercicioCreateWithoutEjercicioInput[] | RutinaEjercicioUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: RutinaEjercicioCreateOrConnectWithoutEjercicioInput | RutinaEjercicioCreateOrConnectWithoutEjercicioInput[]
    createMany?: RutinaEjercicioCreateManyEjercicioInputEnvelope
    connect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UsuarioUpdateOneWithoutEjerciciosNestedInput = {
    create?: XOR<UsuarioCreateWithoutEjerciciosInput, UsuarioUncheckedCreateWithoutEjerciciosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEjerciciosInput
    upsert?: UsuarioUpsertWithoutEjerciciosInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutEjerciciosInput, UsuarioUpdateWithoutEjerciciosInput>, UsuarioUncheckedUpdateWithoutEjerciciosInput>
  }

  export type RutinaEjercicioUpdateManyWithoutEjercicioNestedInput = {
    create?: XOR<RutinaEjercicioCreateWithoutEjercicioInput, RutinaEjercicioUncheckedCreateWithoutEjercicioInput> | RutinaEjercicioCreateWithoutEjercicioInput[] | RutinaEjercicioUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: RutinaEjercicioCreateOrConnectWithoutEjercicioInput | RutinaEjercicioCreateOrConnectWithoutEjercicioInput[]
    upsert?: RutinaEjercicioUpsertWithWhereUniqueWithoutEjercicioInput | RutinaEjercicioUpsertWithWhereUniqueWithoutEjercicioInput[]
    createMany?: RutinaEjercicioCreateManyEjercicioInputEnvelope
    set?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    disconnect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    delete?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    connect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    update?: RutinaEjercicioUpdateWithWhereUniqueWithoutEjercicioInput | RutinaEjercicioUpdateWithWhereUniqueWithoutEjercicioInput[]
    updateMany?: RutinaEjercicioUpdateManyWithWhereWithoutEjercicioInput | RutinaEjercicioUpdateManyWithWhereWithoutEjercicioInput[]
    deleteMany?: RutinaEjercicioScalarWhereInput | RutinaEjercicioScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RutinaEjercicioUncheckedUpdateManyWithoutEjercicioNestedInput = {
    create?: XOR<RutinaEjercicioCreateWithoutEjercicioInput, RutinaEjercicioUncheckedCreateWithoutEjercicioInput> | RutinaEjercicioCreateWithoutEjercicioInput[] | RutinaEjercicioUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: RutinaEjercicioCreateOrConnectWithoutEjercicioInput | RutinaEjercicioCreateOrConnectWithoutEjercicioInput[]
    upsert?: RutinaEjercicioUpsertWithWhereUniqueWithoutEjercicioInput | RutinaEjercicioUpsertWithWhereUniqueWithoutEjercicioInput[]
    createMany?: RutinaEjercicioCreateManyEjercicioInputEnvelope
    set?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    disconnect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    delete?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    connect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    update?: RutinaEjercicioUpdateWithWhereUniqueWithoutEjercicioInput | RutinaEjercicioUpdateWithWhereUniqueWithoutEjercicioInput[]
    updateMany?: RutinaEjercicioUpdateManyWithWhereWithoutEjercicioInput | RutinaEjercicioUpdateManyWithWhereWithoutEjercicioInput[]
    deleteMany?: RutinaEjercicioScalarWhereInput | RutinaEjercicioScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutRutinasInput = {
    create?: XOR<UsuarioCreateWithoutRutinasInput, UsuarioUncheckedCreateWithoutRutinasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRutinasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type RutinaEjercicioCreateNestedManyWithoutRutinaInput = {
    create?: XOR<RutinaEjercicioCreateWithoutRutinaInput, RutinaEjercicioUncheckedCreateWithoutRutinaInput> | RutinaEjercicioCreateWithoutRutinaInput[] | RutinaEjercicioUncheckedCreateWithoutRutinaInput[]
    connectOrCreate?: RutinaEjercicioCreateOrConnectWithoutRutinaInput | RutinaEjercicioCreateOrConnectWithoutRutinaInput[]
    createMany?: RutinaEjercicioCreateManyRutinaInputEnvelope
    connect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
  }

  export type CalendarioCreateNestedManyWithoutRutinaInput = {
    create?: XOR<CalendarioCreateWithoutRutinaInput, CalendarioUncheckedCreateWithoutRutinaInput> | CalendarioCreateWithoutRutinaInput[] | CalendarioUncheckedCreateWithoutRutinaInput[]
    connectOrCreate?: CalendarioCreateOrConnectWithoutRutinaInput | CalendarioCreateOrConnectWithoutRutinaInput[]
    createMany?: CalendarioCreateManyRutinaInputEnvelope
    connect?: CalendarioWhereUniqueInput | CalendarioWhereUniqueInput[]
  }

  export type ComentarioCreateNestedManyWithoutRutinaInput = {
    create?: XOR<ComentarioCreateWithoutRutinaInput, ComentarioUncheckedCreateWithoutRutinaInput> | ComentarioCreateWithoutRutinaInput[] | ComentarioUncheckedCreateWithoutRutinaInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutRutinaInput | ComentarioCreateOrConnectWithoutRutinaInput[]
    createMany?: ComentarioCreateManyRutinaInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type RutinaEjercicioUncheckedCreateNestedManyWithoutRutinaInput = {
    create?: XOR<RutinaEjercicioCreateWithoutRutinaInput, RutinaEjercicioUncheckedCreateWithoutRutinaInput> | RutinaEjercicioCreateWithoutRutinaInput[] | RutinaEjercicioUncheckedCreateWithoutRutinaInput[]
    connectOrCreate?: RutinaEjercicioCreateOrConnectWithoutRutinaInput | RutinaEjercicioCreateOrConnectWithoutRutinaInput[]
    createMany?: RutinaEjercicioCreateManyRutinaInputEnvelope
    connect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
  }

  export type CalendarioUncheckedCreateNestedManyWithoutRutinaInput = {
    create?: XOR<CalendarioCreateWithoutRutinaInput, CalendarioUncheckedCreateWithoutRutinaInput> | CalendarioCreateWithoutRutinaInput[] | CalendarioUncheckedCreateWithoutRutinaInput[]
    connectOrCreate?: CalendarioCreateOrConnectWithoutRutinaInput | CalendarioCreateOrConnectWithoutRutinaInput[]
    createMany?: CalendarioCreateManyRutinaInputEnvelope
    connect?: CalendarioWhereUniqueInput | CalendarioWhereUniqueInput[]
  }

  export type ComentarioUncheckedCreateNestedManyWithoutRutinaInput = {
    create?: XOR<ComentarioCreateWithoutRutinaInput, ComentarioUncheckedCreateWithoutRutinaInput> | ComentarioCreateWithoutRutinaInput[] | ComentarioUncheckedCreateWithoutRutinaInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutRutinaInput | ComentarioCreateOrConnectWithoutRutinaInput[]
    createMany?: ComentarioCreateManyRutinaInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutRutinasNestedInput = {
    create?: XOR<UsuarioCreateWithoutRutinasInput, UsuarioUncheckedCreateWithoutRutinasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRutinasInput
    upsert?: UsuarioUpsertWithoutRutinasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutRutinasInput, UsuarioUpdateWithoutRutinasInput>, UsuarioUncheckedUpdateWithoutRutinasInput>
  }

  export type RutinaEjercicioUpdateManyWithoutRutinaNestedInput = {
    create?: XOR<RutinaEjercicioCreateWithoutRutinaInput, RutinaEjercicioUncheckedCreateWithoutRutinaInput> | RutinaEjercicioCreateWithoutRutinaInput[] | RutinaEjercicioUncheckedCreateWithoutRutinaInput[]
    connectOrCreate?: RutinaEjercicioCreateOrConnectWithoutRutinaInput | RutinaEjercicioCreateOrConnectWithoutRutinaInput[]
    upsert?: RutinaEjercicioUpsertWithWhereUniqueWithoutRutinaInput | RutinaEjercicioUpsertWithWhereUniqueWithoutRutinaInput[]
    createMany?: RutinaEjercicioCreateManyRutinaInputEnvelope
    set?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    disconnect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    delete?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    connect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    update?: RutinaEjercicioUpdateWithWhereUniqueWithoutRutinaInput | RutinaEjercicioUpdateWithWhereUniqueWithoutRutinaInput[]
    updateMany?: RutinaEjercicioUpdateManyWithWhereWithoutRutinaInput | RutinaEjercicioUpdateManyWithWhereWithoutRutinaInput[]
    deleteMany?: RutinaEjercicioScalarWhereInput | RutinaEjercicioScalarWhereInput[]
  }

  export type CalendarioUpdateManyWithoutRutinaNestedInput = {
    create?: XOR<CalendarioCreateWithoutRutinaInput, CalendarioUncheckedCreateWithoutRutinaInput> | CalendarioCreateWithoutRutinaInput[] | CalendarioUncheckedCreateWithoutRutinaInput[]
    connectOrCreate?: CalendarioCreateOrConnectWithoutRutinaInput | CalendarioCreateOrConnectWithoutRutinaInput[]
    upsert?: CalendarioUpsertWithWhereUniqueWithoutRutinaInput | CalendarioUpsertWithWhereUniqueWithoutRutinaInput[]
    createMany?: CalendarioCreateManyRutinaInputEnvelope
    set?: CalendarioWhereUniqueInput | CalendarioWhereUniqueInput[]
    disconnect?: CalendarioWhereUniqueInput | CalendarioWhereUniqueInput[]
    delete?: CalendarioWhereUniqueInput | CalendarioWhereUniqueInput[]
    connect?: CalendarioWhereUniqueInput | CalendarioWhereUniqueInput[]
    update?: CalendarioUpdateWithWhereUniqueWithoutRutinaInput | CalendarioUpdateWithWhereUniqueWithoutRutinaInput[]
    updateMany?: CalendarioUpdateManyWithWhereWithoutRutinaInput | CalendarioUpdateManyWithWhereWithoutRutinaInput[]
    deleteMany?: CalendarioScalarWhereInput | CalendarioScalarWhereInput[]
  }

  export type ComentarioUpdateManyWithoutRutinaNestedInput = {
    create?: XOR<ComentarioCreateWithoutRutinaInput, ComentarioUncheckedCreateWithoutRutinaInput> | ComentarioCreateWithoutRutinaInput[] | ComentarioUncheckedCreateWithoutRutinaInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutRutinaInput | ComentarioCreateOrConnectWithoutRutinaInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutRutinaInput | ComentarioUpsertWithWhereUniqueWithoutRutinaInput[]
    createMany?: ComentarioCreateManyRutinaInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutRutinaInput | ComentarioUpdateWithWhereUniqueWithoutRutinaInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutRutinaInput | ComentarioUpdateManyWithWhereWithoutRutinaInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type RutinaEjercicioUncheckedUpdateManyWithoutRutinaNestedInput = {
    create?: XOR<RutinaEjercicioCreateWithoutRutinaInput, RutinaEjercicioUncheckedCreateWithoutRutinaInput> | RutinaEjercicioCreateWithoutRutinaInput[] | RutinaEjercicioUncheckedCreateWithoutRutinaInput[]
    connectOrCreate?: RutinaEjercicioCreateOrConnectWithoutRutinaInput | RutinaEjercicioCreateOrConnectWithoutRutinaInput[]
    upsert?: RutinaEjercicioUpsertWithWhereUniqueWithoutRutinaInput | RutinaEjercicioUpsertWithWhereUniqueWithoutRutinaInput[]
    createMany?: RutinaEjercicioCreateManyRutinaInputEnvelope
    set?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    disconnect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    delete?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    connect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    update?: RutinaEjercicioUpdateWithWhereUniqueWithoutRutinaInput | RutinaEjercicioUpdateWithWhereUniqueWithoutRutinaInput[]
    updateMany?: RutinaEjercicioUpdateManyWithWhereWithoutRutinaInput | RutinaEjercicioUpdateManyWithWhereWithoutRutinaInput[]
    deleteMany?: RutinaEjercicioScalarWhereInput | RutinaEjercicioScalarWhereInput[]
  }

  export type CalendarioUncheckedUpdateManyWithoutRutinaNestedInput = {
    create?: XOR<CalendarioCreateWithoutRutinaInput, CalendarioUncheckedCreateWithoutRutinaInput> | CalendarioCreateWithoutRutinaInput[] | CalendarioUncheckedCreateWithoutRutinaInput[]
    connectOrCreate?: CalendarioCreateOrConnectWithoutRutinaInput | CalendarioCreateOrConnectWithoutRutinaInput[]
    upsert?: CalendarioUpsertWithWhereUniqueWithoutRutinaInput | CalendarioUpsertWithWhereUniqueWithoutRutinaInput[]
    createMany?: CalendarioCreateManyRutinaInputEnvelope
    set?: CalendarioWhereUniqueInput | CalendarioWhereUniqueInput[]
    disconnect?: CalendarioWhereUniqueInput | CalendarioWhereUniqueInput[]
    delete?: CalendarioWhereUniqueInput | CalendarioWhereUniqueInput[]
    connect?: CalendarioWhereUniqueInput | CalendarioWhereUniqueInput[]
    update?: CalendarioUpdateWithWhereUniqueWithoutRutinaInput | CalendarioUpdateWithWhereUniqueWithoutRutinaInput[]
    updateMany?: CalendarioUpdateManyWithWhereWithoutRutinaInput | CalendarioUpdateManyWithWhereWithoutRutinaInput[]
    deleteMany?: CalendarioScalarWhereInput | CalendarioScalarWhereInput[]
  }

  export type ComentarioUncheckedUpdateManyWithoutRutinaNestedInput = {
    create?: XOR<ComentarioCreateWithoutRutinaInput, ComentarioUncheckedCreateWithoutRutinaInput> | ComentarioCreateWithoutRutinaInput[] | ComentarioUncheckedCreateWithoutRutinaInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutRutinaInput | ComentarioCreateOrConnectWithoutRutinaInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutRutinaInput | ComentarioUpsertWithWhereUniqueWithoutRutinaInput[]
    createMany?: ComentarioCreateManyRutinaInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutRutinaInput | ComentarioUpdateWithWhereUniqueWithoutRutinaInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutRutinaInput | ComentarioUpdateManyWithWhereWithoutRutinaInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type RutinaCreateNestedOneWithoutEjerciciosInput = {
    create?: XOR<RutinaCreateWithoutEjerciciosInput, RutinaUncheckedCreateWithoutEjerciciosInput>
    connectOrCreate?: RutinaCreateOrConnectWithoutEjerciciosInput
    connect?: RutinaWhereUniqueInput
  }

  export type EjercicioCreateNestedOneWithoutRutinaEjercicioInput = {
    create?: XOR<EjercicioCreateWithoutRutinaEjercicioInput, EjercicioUncheckedCreateWithoutRutinaEjercicioInput>
    connectOrCreate?: EjercicioCreateOrConnectWithoutRutinaEjercicioInput
    connect?: EjercicioWhereUniqueInput
  }

  export type RutinaUpdateOneRequiredWithoutEjerciciosNestedInput = {
    create?: XOR<RutinaCreateWithoutEjerciciosInput, RutinaUncheckedCreateWithoutEjerciciosInput>
    connectOrCreate?: RutinaCreateOrConnectWithoutEjerciciosInput
    upsert?: RutinaUpsertWithoutEjerciciosInput
    connect?: RutinaWhereUniqueInput
    update?: XOR<XOR<RutinaUpdateToOneWithWhereWithoutEjerciciosInput, RutinaUpdateWithoutEjerciciosInput>, RutinaUncheckedUpdateWithoutEjerciciosInput>
  }

  export type EjercicioUpdateOneRequiredWithoutRutinaEjercicioNestedInput = {
    create?: XOR<EjercicioCreateWithoutRutinaEjercicioInput, EjercicioUncheckedCreateWithoutRutinaEjercicioInput>
    connectOrCreate?: EjercicioCreateOrConnectWithoutRutinaEjercicioInput
    upsert?: EjercicioUpsertWithoutRutinaEjercicioInput
    connect?: EjercicioWhereUniqueInput
    update?: XOR<XOR<EjercicioUpdateToOneWithWhereWithoutRutinaEjercicioInput, EjercicioUpdateWithoutRutinaEjercicioInput>, EjercicioUncheckedUpdateWithoutRutinaEjercicioInput>
  }

  export type UsuarioCreateNestedOneWithoutCalendarioInput = {
    create?: XOR<UsuarioCreateWithoutCalendarioInput, UsuarioUncheckedCreateWithoutCalendarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCalendarioInput
    connect?: UsuarioWhereUniqueInput
  }

  export type RutinaCreateNestedOneWithoutCalendarioInput = {
    create?: XOR<RutinaCreateWithoutCalendarioInput, RutinaUncheckedCreateWithoutCalendarioInput>
    connectOrCreate?: RutinaCreateOrConnectWithoutCalendarioInput
    connect?: RutinaWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutCalendarioNestedInput = {
    create?: XOR<UsuarioCreateWithoutCalendarioInput, UsuarioUncheckedCreateWithoutCalendarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCalendarioInput
    upsert?: UsuarioUpsertWithoutCalendarioInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutCalendarioInput, UsuarioUpdateWithoutCalendarioInput>, UsuarioUncheckedUpdateWithoutCalendarioInput>
  }

  export type RutinaUpdateOneRequiredWithoutCalendarioNestedInput = {
    create?: XOR<RutinaCreateWithoutCalendarioInput, RutinaUncheckedCreateWithoutCalendarioInput>
    connectOrCreate?: RutinaCreateOrConnectWithoutCalendarioInput
    upsert?: RutinaUpsertWithoutCalendarioInput
    connect?: RutinaWhereUniqueInput
    update?: XOR<XOR<RutinaUpdateToOneWithWhereWithoutCalendarioInput, RutinaUpdateWithoutCalendarioInput>, RutinaUncheckedUpdateWithoutCalendarioInput>
  }

  export type EntrenadorCreatecertificacionesInput = {
    set: string[]
  }

  export type ContratacionCreateNestedManyWithoutEntrenadorInput = {
    create?: XOR<ContratacionCreateWithoutEntrenadorInput, ContratacionUncheckedCreateWithoutEntrenadorInput> | ContratacionCreateWithoutEntrenadorInput[] | ContratacionUncheckedCreateWithoutEntrenadorInput[]
    connectOrCreate?: ContratacionCreateOrConnectWithoutEntrenadorInput | ContratacionCreateOrConnectWithoutEntrenadorInput[]
    createMany?: ContratacionCreateManyEntrenadorInputEnvelope
    connect?: ContratacionWhereUniqueInput | ContratacionWhereUniqueInput[]
  }

  export type ContratacionUncheckedCreateNestedManyWithoutEntrenadorInput = {
    create?: XOR<ContratacionCreateWithoutEntrenadorInput, ContratacionUncheckedCreateWithoutEntrenadorInput> | ContratacionCreateWithoutEntrenadorInput[] | ContratacionUncheckedCreateWithoutEntrenadorInput[]
    connectOrCreate?: ContratacionCreateOrConnectWithoutEntrenadorInput | ContratacionCreateOrConnectWithoutEntrenadorInput[]
    createMany?: ContratacionCreateManyEntrenadorInputEnvelope
    connect?: ContratacionWhereUniqueInput | ContratacionWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EntrenadorUpdatecertificacionesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ContratacionUpdateManyWithoutEntrenadorNestedInput = {
    create?: XOR<ContratacionCreateWithoutEntrenadorInput, ContratacionUncheckedCreateWithoutEntrenadorInput> | ContratacionCreateWithoutEntrenadorInput[] | ContratacionUncheckedCreateWithoutEntrenadorInput[]
    connectOrCreate?: ContratacionCreateOrConnectWithoutEntrenadorInput | ContratacionCreateOrConnectWithoutEntrenadorInput[]
    upsert?: ContratacionUpsertWithWhereUniqueWithoutEntrenadorInput | ContratacionUpsertWithWhereUniqueWithoutEntrenadorInput[]
    createMany?: ContratacionCreateManyEntrenadorInputEnvelope
    set?: ContratacionWhereUniqueInput | ContratacionWhereUniqueInput[]
    disconnect?: ContratacionWhereUniqueInput | ContratacionWhereUniqueInput[]
    delete?: ContratacionWhereUniqueInput | ContratacionWhereUniqueInput[]
    connect?: ContratacionWhereUniqueInput | ContratacionWhereUniqueInput[]
    update?: ContratacionUpdateWithWhereUniqueWithoutEntrenadorInput | ContratacionUpdateWithWhereUniqueWithoutEntrenadorInput[]
    updateMany?: ContratacionUpdateManyWithWhereWithoutEntrenadorInput | ContratacionUpdateManyWithWhereWithoutEntrenadorInput[]
    deleteMany?: ContratacionScalarWhereInput | ContratacionScalarWhereInput[]
  }

  export type ContratacionUncheckedUpdateManyWithoutEntrenadorNestedInput = {
    create?: XOR<ContratacionCreateWithoutEntrenadorInput, ContratacionUncheckedCreateWithoutEntrenadorInput> | ContratacionCreateWithoutEntrenadorInput[] | ContratacionUncheckedCreateWithoutEntrenadorInput[]
    connectOrCreate?: ContratacionCreateOrConnectWithoutEntrenadorInput | ContratacionCreateOrConnectWithoutEntrenadorInput[]
    upsert?: ContratacionUpsertWithWhereUniqueWithoutEntrenadorInput | ContratacionUpsertWithWhereUniqueWithoutEntrenadorInput[]
    createMany?: ContratacionCreateManyEntrenadorInputEnvelope
    set?: ContratacionWhereUniqueInput | ContratacionWhereUniqueInput[]
    disconnect?: ContratacionWhereUniqueInput | ContratacionWhereUniqueInput[]
    delete?: ContratacionWhereUniqueInput | ContratacionWhereUniqueInput[]
    connect?: ContratacionWhereUniqueInput | ContratacionWhereUniqueInput[]
    update?: ContratacionUpdateWithWhereUniqueWithoutEntrenadorInput | ContratacionUpdateWithWhereUniqueWithoutEntrenadorInput[]
    updateMany?: ContratacionUpdateManyWithWhereWithoutEntrenadorInput | ContratacionUpdateManyWithWhereWithoutEntrenadorInput[]
    deleteMany?: ContratacionScalarWhereInput | ContratacionScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutContratacionesInput = {
    create?: XOR<UsuarioCreateWithoutContratacionesInput, UsuarioUncheckedCreateWithoutContratacionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutContratacionesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EntrenadorCreateNestedOneWithoutContratacionesInput = {
    create?: XOR<EntrenadorCreateWithoutContratacionesInput, EntrenadorUncheckedCreateWithoutContratacionesInput>
    connectOrCreate?: EntrenadorCreateOrConnectWithoutContratacionesInput
    connect?: EntrenadorWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UsuarioUpdateOneRequiredWithoutContratacionesNestedInput = {
    create?: XOR<UsuarioCreateWithoutContratacionesInput, UsuarioUncheckedCreateWithoutContratacionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutContratacionesInput
    upsert?: UsuarioUpsertWithoutContratacionesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutContratacionesInput, UsuarioUpdateWithoutContratacionesInput>, UsuarioUncheckedUpdateWithoutContratacionesInput>
  }

  export type EntrenadorUpdateOneRequiredWithoutContratacionesNestedInput = {
    create?: XOR<EntrenadorCreateWithoutContratacionesInput, EntrenadorUncheckedCreateWithoutContratacionesInput>
    connectOrCreate?: EntrenadorCreateOrConnectWithoutContratacionesInput
    upsert?: EntrenadorUpsertWithoutContratacionesInput
    connect?: EntrenadorWhereUniqueInput
    update?: XOR<XOR<EntrenadorUpdateToOneWithWhereWithoutContratacionesInput, EntrenadorUpdateWithoutContratacionesInput>, EntrenadorUncheckedUpdateWithoutContratacionesInput>
  }

  export type ChallengeCreateobjetivosInput = {
    set: string[]
  }

  export type UserChallengeCreateNestedManyWithoutChallengeInput = {
    create?: XOR<UserChallengeCreateWithoutChallengeInput, UserChallengeUncheckedCreateWithoutChallengeInput> | UserChallengeCreateWithoutChallengeInput[] | UserChallengeUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: UserChallengeCreateOrConnectWithoutChallengeInput | UserChallengeCreateOrConnectWithoutChallengeInput[]
    createMany?: UserChallengeCreateManyChallengeInputEnvelope
    connect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
  }

  export type UserChallengeUncheckedCreateNestedManyWithoutChallengeInput = {
    create?: XOR<UserChallengeCreateWithoutChallengeInput, UserChallengeUncheckedCreateWithoutChallengeInput> | UserChallengeCreateWithoutChallengeInput[] | UserChallengeUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: UserChallengeCreateOrConnectWithoutChallengeInput | UserChallengeCreateOrConnectWithoutChallengeInput[]
    createMany?: UserChallengeCreateManyChallengeInputEnvelope
    connect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
  }

  export type ChallengeUpdateobjetivosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserChallengeUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<UserChallengeCreateWithoutChallengeInput, UserChallengeUncheckedCreateWithoutChallengeInput> | UserChallengeCreateWithoutChallengeInput[] | UserChallengeUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: UserChallengeCreateOrConnectWithoutChallengeInput | UserChallengeCreateOrConnectWithoutChallengeInput[]
    upsert?: UserChallengeUpsertWithWhereUniqueWithoutChallengeInput | UserChallengeUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: UserChallengeCreateManyChallengeInputEnvelope
    set?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    disconnect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    delete?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    connect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    update?: UserChallengeUpdateWithWhereUniqueWithoutChallengeInput | UserChallengeUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: UserChallengeUpdateManyWithWhereWithoutChallengeInput | UserChallengeUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: UserChallengeScalarWhereInput | UserChallengeScalarWhereInput[]
  }

  export type UserChallengeUncheckedUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<UserChallengeCreateWithoutChallengeInput, UserChallengeUncheckedCreateWithoutChallengeInput> | UserChallengeCreateWithoutChallengeInput[] | UserChallengeUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: UserChallengeCreateOrConnectWithoutChallengeInput | UserChallengeCreateOrConnectWithoutChallengeInput[]
    upsert?: UserChallengeUpsertWithWhereUniqueWithoutChallengeInput | UserChallengeUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: UserChallengeCreateManyChallengeInputEnvelope
    set?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    disconnect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    delete?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    connect?: UserChallengeWhereUniqueInput | UserChallengeWhereUniqueInput[]
    update?: UserChallengeUpdateWithWhereUniqueWithoutChallengeInput | UserChallengeUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: UserChallengeUpdateManyWithWhereWithoutChallengeInput | UserChallengeUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: UserChallengeScalarWhereInput | UserChallengeScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutUserChallengesInput = {
    create?: XOR<UsuarioCreateWithoutUserChallengesInput, UsuarioUncheckedCreateWithoutUserChallengesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutUserChallengesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ChallengeCreateNestedOneWithoutUserChallengesInput = {
    create?: XOR<ChallengeCreateWithoutUserChallengesInput, ChallengeUncheckedCreateWithoutUserChallengesInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutUserChallengesInput
    connect?: ChallengeWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutUserChallengesNestedInput = {
    create?: XOR<UsuarioCreateWithoutUserChallengesInput, UsuarioUncheckedCreateWithoutUserChallengesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutUserChallengesInput
    upsert?: UsuarioUpsertWithoutUserChallengesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutUserChallengesInput, UsuarioUpdateWithoutUserChallengesInput>, UsuarioUncheckedUpdateWithoutUserChallengesInput>
  }

  export type ChallengeUpdateOneRequiredWithoutUserChallengesNestedInput = {
    create?: XOR<ChallengeCreateWithoutUserChallengesInput, ChallengeUncheckedCreateWithoutUserChallengesInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutUserChallengesInput
    upsert?: ChallengeUpsertWithoutUserChallengesInput
    connect?: ChallengeWhereUniqueInput
    update?: XOR<XOR<ChallengeUpdateToOneWithWhereWithoutUserChallengesInput, ChallengeUpdateWithoutUserChallengesInput>, ChallengeUncheckedUpdateWithoutUserChallengesInput>
  }

  export type UserAchievementCreateNestedManyWithoutAchievementInput = {
    create?: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput> | UserAchievementCreateWithoutAchievementInput[] | UserAchievementUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutAchievementInput | UserAchievementCreateOrConnectWithoutAchievementInput[]
    createMany?: UserAchievementCreateManyAchievementInputEnvelope
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
  }

  export type UserAchievementUncheckedCreateNestedManyWithoutAchievementInput = {
    create?: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput> | UserAchievementCreateWithoutAchievementInput[] | UserAchievementUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutAchievementInput | UserAchievementCreateOrConnectWithoutAchievementInput[]
    createMany?: UserAchievementCreateManyAchievementInputEnvelope
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
  }

  export type UserAchievementUpdateManyWithoutAchievementNestedInput = {
    create?: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput> | UserAchievementCreateWithoutAchievementInput[] | UserAchievementUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutAchievementInput | UserAchievementCreateOrConnectWithoutAchievementInput[]
    upsert?: UserAchievementUpsertWithWhereUniqueWithoutAchievementInput | UserAchievementUpsertWithWhereUniqueWithoutAchievementInput[]
    createMany?: UserAchievementCreateManyAchievementInputEnvelope
    set?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    disconnect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    delete?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    update?: UserAchievementUpdateWithWhereUniqueWithoutAchievementInput | UserAchievementUpdateWithWhereUniqueWithoutAchievementInput[]
    updateMany?: UserAchievementUpdateManyWithWhereWithoutAchievementInput | UserAchievementUpdateManyWithWhereWithoutAchievementInput[]
    deleteMany?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
  }

  export type UserAchievementUncheckedUpdateManyWithoutAchievementNestedInput = {
    create?: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput> | UserAchievementCreateWithoutAchievementInput[] | UserAchievementUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutAchievementInput | UserAchievementCreateOrConnectWithoutAchievementInput[]
    upsert?: UserAchievementUpsertWithWhereUniqueWithoutAchievementInput | UserAchievementUpsertWithWhereUniqueWithoutAchievementInput[]
    createMany?: UserAchievementCreateManyAchievementInputEnvelope
    set?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    disconnect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    delete?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    update?: UserAchievementUpdateWithWhereUniqueWithoutAchievementInput | UserAchievementUpdateWithWhereUniqueWithoutAchievementInput[]
    updateMany?: UserAchievementUpdateManyWithWhereWithoutAchievementInput | UserAchievementUpdateManyWithWhereWithoutAchievementInput[]
    deleteMany?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutUserAchievementsInput = {
    create?: XOR<UsuarioCreateWithoutUserAchievementsInput, UsuarioUncheckedCreateWithoutUserAchievementsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutUserAchievementsInput
    connect?: UsuarioWhereUniqueInput
  }

  export type AchievementCreateNestedOneWithoutUserAchievementsInput = {
    create?: XOR<AchievementCreateWithoutUserAchievementsInput, AchievementUncheckedCreateWithoutUserAchievementsInput>
    connectOrCreate?: AchievementCreateOrConnectWithoutUserAchievementsInput
    connect?: AchievementWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutUserAchievementsNestedInput = {
    create?: XOR<UsuarioCreateWithoutUserAchievementsInput, UsuarioUncheckedCreateWithoutUserAchievementsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutUserAchievementsInput
    upsert?: UsuarioUpsertWithoutUserAchievementsInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutUserAchievementsInput, UsuarioUpdateWithoutUserAchievementsInput>, UsuarioUncheckedUpdateWithoutUserAchievementsInput>
  }

  export type AchievementUpdateOneRequiredWithoutUserAchievementsNestedInput = {
    create?: XOR<AchievementCreateWithoutUserAchievementsInput, AchievementUncheckedCreateWithoutUserAchievementsInput>
    connectOrCreate?: AchievementCreateOrConnectWithoutUserAchievementsInput
    upsert?: AchievementUpsertWithoutUserAchievementsInput
    connect?: AchievementWhereUniqueInput
    update?: XOR<XOR<AchievementUpdateToOneWithWhereWithoutUserAchievementsInput, AchievementUpdateWithoutUserAchievementsInput>, AchievementUncheckedUpdateWithoutUserAchievementsInput>
  }

  export type UsuarioCreateNestedOneWithoutComentariosInput = {
    create?: XOR<UsuarioCreateWithoutComentariosInput, UsuarioUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutComentariosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type RutinaCreateNestedOneWithoutComentariosInput = {
    create?: XOR<RutinaCreateWithoutComentariosInput, RutinaUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: RutinaCreateOrConnectWithoutComentariosInput
    connect?: RutinaWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutComentariosNestedInput = {
    create?: XOR<UsuarioCreateWithoutComentariosInput, UsuarioUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutComentariosInput
    upsert?: UsuarioUpsertWithoutComentariosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutComentariosInput, UsuarioUpdateWithoutComentariosInput>, UsuarioUncheckedUpdateWithoutComentariosInput>
  }

  export type RutinaUpdateOneRequiredWithoutComentariosNestedInput = {
    create?: XOR<RutinaCreateWithoutComentariosInput, RutinaUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: RutinaCreateOrConnectWithoutComentariosInput
    upsert?: RutinaUpsertWithoutComentariosInput
    connect?: RutinaWhereUniqueInput
    update?: XOR<XOR<RutinaUpdateToOneWithWhereWithoutComentariosInput, RutinaUpdateWithoutComentariosInput>, RutinaUncheckedUpdateWithoutComentariosInput>
  }

  export type UsuarioCreateNestedOneWithoutMetricsInput = {
    create?: XOR<UsuarioCreateWithoutMetricsInput, UsuarioUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMetricsInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutMetricsNestedInput = {
    create?: XOR<UsuarioCreateWithoutMetricsInput, UsuarioUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMetricsInput
    upsert?: UsuarioUpsertWithoutMetricsInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutMetricsInput, UsuarioUpdateWithoutMetricsInput>, UsuarioUncheckedUpdateWithoutMetricsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type RutinaCreateWithoutUsuarioInput = {
    nombre: string
    descripcion: string
    fecha_creacion?: Date | string
    ejercicios?: RutinaEjercicioCreateNestedManyWithoutRutinaInput
    calendario?: CalendarioCreateNestedManyWithoutRutinaInput
    comentarios?: ComentarioCreateNestedManyWithoutRutinaInput
  }

  export type RutinaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    nombre: string
    descripcion: string
    fecha_creacion?: Date | string
    ejercicios?: RutinaEjercicioUncheckedCreateNestedManyWithoutRutinaInput
    calendario?: CalendarioUncheckedCreateNestedManyWithoutRutinaInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutRutinaInput
  }

  export type RutinaCreateOrConnectWithoutUsuarioInput = {
    where: RutinaWhereUniqueInput
    create: XOR<RutinaCreateWithoutUsuarioInput, RutinaUncheckedCreateWithoutUsuarioInput>
  }

  export type RutinaCreateManyUsuarioInputEnvelope = {
    data: RutinaCreateManyUsuarioInput | RutinaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type CalendarioCreateWithoutUsuarioInput = {
    fecha: Date | string
    rutina: RutinaCreateNestedOneWithoutCalendarioInput
  }

  export type CalendarioUncheckedCreateWithoutUsuarioInput = {
    id?: number
    rutinaId: number
    fecha: Date | string
  }

  export type CalendarioCreateOrConnectWithoutUsuarioInput = {
    where: CalendarioWhereUniqueInput
    create: XOR<CalendarioCreateWithoutUsuarioInput, CalendarioUncheckedCreateWithoutUsuarioInput>
  }

  export type CalendarioCreateManyUsuarioInputEnvelope = {
    data: CalendarioCreateManyUsuarioInput | CalendarioCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ContratacionCreateWithoutUsuarioInput = {
    fechaInicio: Date | string
    fechaFin?: Date | string | null
    estado: string
    planSeleccionado: string
    precio: number
    entrenador: EntrenadorCreateNestedOneWithoutContratacionesInput
  }

  export type ContratacionUncheckedCreateWithoutUsuarioInput = {
    id?: number
    entrenadorId: number
    fechaInicio: Date | string
    fechaFin?: Date | string | null
    estado: string
    planSeleccionado: string
    precio: number
  }

  export type ContratacionCreateOrConnectWithoutUsuarioInput = {
    where: ContratacionWhereUniqueInput
    create: XOR<ContratacionCreateWithoutUsuarioInput, ContratacionUncheckedCreateWithoutUsuarioInput>
  }

  export type ContratacionCreateManyUsuarioInputEnvelope = {
    data: ContratacionCreateManyUsuarioInput | ContratacionCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type UserChallengeCreateWithoutUserInput = {
    progreso?: number
    completado?: boolean
    fechaInicio?: Date | string
    ultimoProgreso?: Date | string
    challenge: ChallengeCreateNestedOneWithoutUserChallengesInput
  }

  export type UserChallengeUncheckedCreateWithoutUserInput = {
    id?: number
    challengeId: number
    progreso?: number
    completado?: boolean
    fechaInicio?: Date | string
    ultimoProgreso?: Date | string
  }

  export type UserChallengeCreateOrConnectWithoutUserInput = {
    where: UserChallengeWhereUniqueInput
    create: XOR<UserChallengeCreateWithoutUserInput, UserChallengeUncheckedCreateWithoutUserInput>
  }

  export type UserChallengeCreateManyUserInputEnvelope = {
    data: UserChallengeCreateManyUserInput | UserChallengeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserAchievementCreateWithoutUserInput = {
    fechaConseguido?: Date | string
    achievement: AchievementCreateNestedOneWithoutUserAchievementsInput
  }

  export type UserAchievementUncheckedCreateWithoutUserInput = {
    id?: number
    achievementId: number
    fechaConseguido?: Date | string
  }

  export type UserAchievementCreateOrConnectWithoutUserInput = {
    where: UserAchievementWhereUniqueInput
    create: XOR<UserAchievementCreateWithoutUserInput, UserAchievementUncheckedCreateWithoutUserInput>
  }

  export type UserAchievementCreateManyUserInputEnvelope = {
    data: UserAchievementCreateManyUserInput | UserAchievementCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ComentarioCreateWithoutUsuarioInput = {
    texto: string
    creadoEn?: Date | string
    rutina: RutinaCreateNestedOneWithoutComentariosInput
  }

  export type ComentarioUncheckedCreateWithoutUsuarioInput = {
    id?: number
    texto: string
    rutinaId: number
    creadoEn?: Date | string
  }

  export type ComentarioCreateOrConnectWithoutUsuarioInput = {
    where: ComentarioWhereUniqueInput
    create: XOR<ComentarioCreateWithoutUsuarioInput, ComentarioUncheckedCreateWithoutUsuarioInput>
  }

  export type ComentarioCreateManyUsuarioInputEnvelope = {
    data: ComentarioCreateManyUsuarioInput | ComentarioCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type MetricCreateWithoutUsuarioInput = {
    tipo: string
    valor: number
    fecha: Date | string
  }

  export type MetricUncheckedCreateWithoutUsuarioInput = {
    id?: number
    tipo: string
    valor: number
    fecha: Date | string
  }

  export type MetricCreateOrConnectWithoutUsuarioInput = {
    where: MetricWhereUniqueInput
    create: XOR<MetricCreateWithoutUsuarioInput, MetricUncheckedCreateWithoutUsuarioInput>
  }

  export type MetricCreateManyUsuarioInputEnvelope = {
    data: MetricCreateManyUsuarioInput | MetricCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type EjercicioCreateWithoutUsuarioInput = {
    nombre: string
    descripcion?: string | null
    categoria?: string | null
    imagenUrl?: string | null
    esComun?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rutinaEjercicio?: RutinaEjercicioCreateNestedManyWithoutEjercicioInput
  }

  export type EjercicioUncheckedCreateWithoutUsuarioInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    categoria?: string | null
    imagenUrl?: string | null
    esComun?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rutinaEjercicio?: RutinaEjercicioUncheckedCreateNestedManyWithoutEjercicioInput
  }

  export type EjercicioCreateOrConnectWithoutUsuarioInput = {
    where: EjercicioWhereUniqueInput
    create: XOR<EjercicioCreateWithoutUsuarioInput, EjercicioUncheckedCreateWithoutUsuarioInput>
  }

  export type EjercicioCreateManyUsuarioInputEnvelope = {
    data: EjercicioCreateManyUsuarioInput | EjercicioCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type RutinaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: RutinaWhereUniqueInput
    update: XOR<RutinaUpdateWithoutUsuarioInput, RutinaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<RutinaCreateWithoutUsuarioInput, RutinaUncheckedCreateWithoutUsuarioInput>
  }

  export type RutinaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: RutinaWhereUniqueInput
    data: XOR<RutinaUpdateWithoutUsuarioInput, RutinaUncheckedUpdateWithoutUsuarioInput>
  }

  export type RutinaUpdateManyWithWhereWithoutUsuarioInput = {
    where: RutinaScalarWhereInput
    data: XOR<RutinaUpdateManyMutationInput, RutinaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type RutinaScalarWhereInput = {
    AND?: RutinaScalarWhereInput | RutinaScalarWhereInput[]
    OR?: RutinaScalarWhereInput[]
    NOT?: RutinaScalarWhereInput | RutinaScalarWhereInput[]
    id?: IntFilter<"Rutina"> | number
    nombre?: StringFilter<"Rutina"> | string
    descripcion?: StringFilter<"Rutina"> | string
    usuarioId?: IntFilter<"Rutina"> | number
    fecha_creacion?: DateTimeFilter<"Rutina"> | Date | string
  }

  export type CalendarioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: CalendarioWhereUniqueInput
    update: XOR<CalendarioUpdateWithoutUsuarioInput, CalendarioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<CalendarioCreateWithoutUsuarioInput, CalendarioUncheckedCreateWithoutUsuarioInput>
  }

  export type CalendarioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: CalendarioWhereUniqueInput
    data: XOR<CalendarioUpdateWithoutUsuarioInput, CalendarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type CalendarioUpdateManyWithWhereWithoutUsuarioInput = {
    where: CalendarioScalarWhereInput
    data: XOR<CalendarioUpdateManyMutationInput, CalendarioUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type CalendarioScalarWhereInput = {
    AND?: CalendarioScalarWhereInput | CalendarioScalarWhereInput[]
    OR?: CalendarioScalarWhereInput[]
    NOT?: CalendarioScalarWhereInput | CalendarioScalarWhereInput[]
    id?: IntFilter<"Calendario"> | number
    usuarioId?: IntFilter<"Calendario"> | number
    rutinaId?: IntFilter<"Calendario"> | number
    fecha?: DateTimeFilter<"Calendario"> | Date | string
  }

  export type ContratacionUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ContratacionWhereUniqueInput
    update: XOR<ContratacionUpdateWithoutUsuarioInput, ContratacionUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ContratacionCreateWithoutUsuarioInput, ContratacionUncheckedCreateWithoutUsuarioInput>
  }

  export type ContratacionUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ContratacionWhereUniqueInput
    data: XOR<ContratacionUpdateWithoutUsuarioInput, ContratacionUncheckedUpdateWithoutUsuarioInput>
  }

  export type ContratacionUpdateManyWithWhereWithoutUsuarioInput = {
    where: ContratacionScalarWhereInput
    data: XOR<ContratacionUpdateManyMutationInput, ContratacionUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ContratacionScalarWhereInput = {
    AND?: ContratacionScalarWhereInput | ContratacionScalarWhereInput[]
    OR?: ContratacionScalarWhereInput[]
    NOT?: ContratacionScalarWhereInput | ContratacionScalarWhereInput[]
    id?: IntFilter<"Contratacion"> | number
    usuarioId?: IntFilter<"Contratacion"> | number
    entrenadorId?: IntFilter<"Contratacion"> | number
    fechaInicio?: DateTimeFilter<"Contratacion"> | Date | string
    fechaFin?: DateTimeNullableFilter<"Contratacion"> | Date | string | null
    estado?: StringFilter<"Contratacion"> | string
    planSeleccionado?: StringFilter<"Contratacion"> | string
    precio?: FloatFilter<"Contratacion"> | number
  }

  export type UserChallengeUpsertWithWhereUniqueWithoutUserInput = {
    where: UserChallengeWhereUniqueInput
    update: XOR<UserChallengeUpdateWithoutUserInput, UserChallengeUncheckedUpdateWithoutUserInput>
    create: XOR<UserChallengeCreateWithoutUserInput, UserChallengeUncheckedCreateWithoutUserInput>
  }

  export type UserChallengeUpdateWithWhereUniqueWithoutUserInput = {
    where: UserChallengeWhereUniqueInput
    data: XOR<UserChallengeUpdateWithoutUserInput, UserChallengeUncheckedUpdateWithoutUserInput>
  }

  export type UserChallengeUpdateManyWithWhereWithoutUserInput = {
    where: UserChallengeScalarWhereInput
    data: XOR<UserChallengeUpdateManyMutationInput, UserChallengeUncheckedUpdateManyWithoutUserInput>
  }

  export type UserChallengeScalarWhereInput = {
    AND?: UserChallengeScalarWhereInput | UserChallengeScalarWhereInput[]
    OR?: UserChallengeScalarWhereInput[]
    NOT?: UserChallengeScalarWhereInput | UserChallengeScalarWhereInput[]
    id?: IntFilter<"UserChallenge"> | number
    userId?: IntFilter<"UserChallenge"> | number
    challengeId?: IntFilter<"UserChallenge"> | number
    progreso?: IntFilter<"UserChallenge"> | number
    completado?: BoolFilter<"UserChallenge"> | boolean
    fechaInicio?: DateTimeFilter<"UserChallenge"> | Date | string
    ultimoProgreso?: DateTimeFilter<"UserChallenge"> | Date | string
  }

  export type UserAchievementUpsertWithWhereUniqueWithoutUserInput = {
    where: UserAchievementWhereUniqueInput
    update: XOR<UserAchievementUpdateWithoutUserInput, UserAchievementUncheckedUpdateWithoutUserInput>
    create: XOR<UserAchievementCreateWithoutUserInput, UserAchievementUncheckedCreateWithoutUserInput>
  }

  export type UserAchievementUpdateWithWhereUniqueWithoutUserInput = {
    where: UserAchievementWhereUniqueInput
    data: XOR<UserAchievementUpdateWithoutUserInput, UserAchievementUncheckedUpdateWithoutUserInput>
  }

  export type UserAchievementUpdateManyWithWhereWithoutUserInput = {
    where: UserAchievementScalarWhereInput
    data: XOR<UserAchievementUpdateManyMutationInput, UserAchievementUncheckedUpdateManyWithoutUserInput>
  }

  export type UserAchievementScalarWhereInput = {
    AND?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
    OR?: UserAchievementScalarWhereInput[]
    NOT?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
    id?: IntFilter<"UserAchievement"> | number
    userId?: IntFilter<"UserAchievement"> | number
    achievementId?: IntFilter<"UserAchievement"> | number
    fechaConseguido?: DateTimeFilter<"UserAchievement"> | Date | string
  }

  export type ComentarioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ComentarioWhereUniqueInput
    update: XOR<ComentarioUpdateWithoutUsuarioInput, ComentarioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ComentarioCreateWithoutUsuarioInput, ComentarioUncheckedCreateWithoutUsuarioInput>
  }

  export type ComentarioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ComentarioWhereUniqueInput
    data: XOR<ComentarioUpdateWithoutUsuarioInput, ComentarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type ComentarioUpdateManyWithWhereWithoutUsuarioInput = {
    where: ComentarioScalarWhereInput
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ComentarioScalarWhereInput = {
    AND?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
    OR?: ComentarioScalarWhereInput[]
    NOT?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
    id?: IntFilter<"Comentario"> | number
    texto?: StringFilter<"Comentario"> | string
    usuarioId?: IntFilter<"Comentario"> | number
    rutinaId?: IntFilter<"Comentario"> | number
    creadoEn?: DateTimeFilter<"Comentario"> | Date | string
  }

  export type MetricUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: MetricWhereUniqueInput
    update: XOR<MetricUpdateWithoutUsuarioInput, MetricUncheckedUpdateWithoutUsuarioInput>
    create: XOR<MetricCreateWithoutUsuarioInput, MetricUncheckedCreateWithoutUsuarioInput>
  }

  export type MetricUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: MetricWhereUniqueInput
    data: XOR<MetricUpdateWithoutUsuarioInput, MetricUncheckedUpdateWithoutUsuarioInput>
  }

  export type MetricUpdateManyWithWhereWithoutUsuarioInput = {
    where: MetricScalarWhereInput
    data: XOR<MetricUpdateManyMutationInput, MetricUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type MetricScalarWhereInput = {
    AND?: MetricScalarWhereInput | MetricScalarWhereInput[]
    OR?: MetricScalarWhereInput[]
    NOT?: MetricScalarWhereInput | MetricScalarWhereInput[]
    id?: IntFilter<"Metric"> | number
    userId?: IntFilter<"Metric"> | number
    tipo?: StringFilter<"Metric"> | string
    valor?: FloatFilter<"Metric"> | number
    fecha?: DateTimeFilter<"Metric"> | Date | string
  }

  export type EjercicioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: EjercicioWhereUniqueInput
    update: XOR<EjercicioUpdateWithoutUsuarioInput, EjercicioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<EjercicioCreateWithoutUsuarioInput, EjercicioUncheckedCreateWithoutUsuarioInput>
  }

  export type EjercicioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: EjercicioWhereUniqueInput
    data: XOR<EjercicioUpdateWithoutUsuarioInput, EjercicioUncheckedUpdateWithoutUsuarioInput>
  }

  export type EjercicioUpdateManyWithWhereWithoutUsuarioInput = {
    where: EjercicioScalarWhereInput
    data: XOR<EjercicioUpdateManyMutationInput, EjercicioUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type EjercicioScalarWhereInput = {
    AND?: EjercicioScalarWhereInput | EjercicioScalarWhereInput[]
    OR?: EjercicioScalarWhereInput[]
    NOT?: EjercicioScalarWhereInput | EjercicioScalarWhereInput[]
    id?: IntFilter<"Ejercicio"> | number
    nombre?: StringFilter<"Ejercicio"> | string
    descripcion?: StringNullableFilter<"Ejercicio"> | string | null
    categoria?: StringNullableFilter<"Ejercicio"> | string | null
    imagenUrl?: StringNullableFilter<"Ejercicio"> | string | null
    esComun?: BoolFilter<"Ejercicio"> | boolean
    usuarioId?: IntNullableFilter<"Ejercicio"> | number | null
    createdAt?: DateTimeFilter<"Ejercicio"> | Date | string
    updatedAt?: DateTimeFilter<"Ejercicio"> | Date | string
  }

  export type UsuarioCreateWithoutEjerciciosInput = {
    nombre: string
    email: string
    contraseña: string
    fecha_registro?: Date | string
    fotoUrl?: string | null
    plan?: string
    rutinas?: RutinaCreateNestedManyWithoutUsuarioInput
    calendario?: CalendarioCreateNestedManyWithoutUsuarioInput
    contrataciones?: ContratacionCreateNestedManyWithoutUsuarioInput
    userChallenges?: UserChallengeCreateNestedManyWithoutUserInput
    userAchievements?: UserAchievementCreateNestedManyWithoutUserInput
    comentarios?: ComentarioCreateNestedManyWithoutUsuarioInput
    metrics?: MetricCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutEjerciciosInput = {
    id?: number
    nombre: string
    email: string
    contraseña: string
    fecha_registro?: Date | string
    fotoUrl?: string | null
    plan?: string
    rutinas?: RutinaUncheckedCreateNestedManyWithoutUsuarioInput
    calendario?: CalendarioUncheckedCreateNestedManyWithoutUsuarioInput
    contrataciones?: ContratacionUncheckedCreateNestedManyWithoutUsuarioInput
    userChallenges?: UserChallengeUncheckedCreateNestedManyWithoutUserInput
    userAchievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutUsuarioInput
    metrics?: MetricUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutEjerciciosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutEjerciciosInput, UsuarioUncheckedCreateWithoutEjerciciosInput>
  }

  export type RutinaEjercicioCreateWithoutEjercicioInput = {
    series: number
    repeticiones: number
    descansoSegundos: number
    orden: number
    rutina: RutinaCreateNestedOneWithoutEjerciciosInput
  }

  export type RutinaEjercicioUncheckedCreateWithoutEjercicioInput = {
    id?: number
    rutinaId: number
    series: number
    repeticiones: number
    descansoSegundos: number
    orden: number
  }

  export type RutinaEjercicioCreateOrConnectWithoutEjercicioInput = {
    where: RutinaEjercicioWhereUniqueInput
    create: XOR<RutinaEjercicioCreateWithoutEjercicioInput, RutinaEjercicioUncheckedCreateWithoutEjercicioInput>
  }

  export type RutinaEjercicioCreateManyEjercicioInputEnvelope = {
    data: RutinaEjercicioCreateManyEjercicioInput | RutinaEjercicioCreateManyEjercicioInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutEjerciciosInput = {
    update: XOR<UsuarioUpdateWithoutEjerciciosInput, UsuarioUncheckedUpdateWithoutEjerciciosInput>
    create: XOR<UsuarioCreateWithoutEjerciciosInput, UsuarioUncheckedCreateWithoutEjerciciosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutEjerciciosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutEjerciciosInput, UsuarioUncheckedUpdateWithoutEjerciciosInput>
  }

  export type UsuarioUpdateWithoutEjerciciosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: StringFieldUpdateOperationsInput | string
    rutinas?: RutinaUpdateManyWithoutUsuarioNestedInput
    calendario?: CalendarioUpdateManyWithoutUsuarioNestedInput
    contrataciones?: ContratacionUpdateManyWithoutUsuarioNestedInput
    userChallenges?: UserChallengeUpdateManyWithoutUserNestedInput
    userAchievements?: UserAchievementUpdateManyWithoutUserNestedInput
    comentarios?: ComentarioUpdateManyWithoutUsuarioNestedInput
    metrics?: MetricUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutEjerciciosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: StringFieldUpdateOperationsInput | string
    rutinas?: RutinaUncheckedUpdateManyWithoutUsuarioNestedInput
    calendario?: CalendarioUncheckedUpdateManyWithoutUsuarioNestedInput
    contrataciones?: ContratacionUncheckedUpdateManyWithoutUsuarioNestedInput
    userChallenges?: UserChallengeUncheckedUpdateManyWithoutUserNestedInput
    userAchievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput
    metrics?: MetricUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type RutinaEjercicioUpsertWithWhereUniqueWithoutEjercicioInput = {
    where: RutinaEjercicioWhereUniqueInput
    update: XOR<RutinaEjercicioUpdateWithoutEjercicioInput, RutinaEjercicioUncheckedUpdateWithoutEjercicioInput>
    create: XOR<RutinaEjercicioCreateWithoutEjercicioInput, RutinaEjercicioUncheckedCreateWithoutEjercicioInput>
  }

  export type RutinaEjercicioUpdateWithWhereUniqueWithoutEjercicioInput = {
    where: RutinaEjercicioWhereUniqueInput
    data: XOR<RutinaEjercicioUpdateWithoutEjercicioInput, RutinaEjercicioUncheckedUpdateWithoutEjercicioInput>
  }

  export type RutinaEjercicioUpdateManyWithWhereWithoutEjercicioInput = {
    where: RutinaEjercicioScalarWhereInput
    data: XOR<RutinaEjercicioUpdateManyMutationInput, RutinaEjercicioUncheckedUpdateManyWithoutEjercicioInput>
  }

  export type RutinaEjercicioScalarWhereInput = {
    AND?: RutinaEjercicioScalarWhereInput | RutinaEjercicioScalarWhereInput[]
    OR?: RutinaEjercicioScalarWhereInput[]
    NOT?: RutinaEjercicioScalarWhereInput | RutinaEjercicioScalarWhereInput[]
    id?: IntFilter<"RutinaEjercicio"> | number
    rutinaId?: IntFilter<"RutinaEjercicio"> | number
    ejercicioId?: IntFilter<"RutinaEjercicio"> | number
    series?: IntFilter<"RutinaEjercicio"> | number
    repeticiones?: IntFilter<"RutinaEjercicio"> | number
    descansoSegundos?: IntFilter<"RutinaEjercicio"> | number
    orden?: IntFilter<"RutinaEjercicio"> | number
  }

  export type UsuarioCreateWithoutRutinasInput = {
    nombre: string
    email: string
    contraseña: string
    fecha_registro?: Date | string
    fotoUrl?: string | null
    plan?: string
    calendario?: CalendarioCreateNestedManyWithoutUsuarioInput
    contrataciones?: ContratacionCreateNestedManyWithoutUsuarioInput
    userChallenges?: UserChallengeCreateNestedManyWithoutUserInput
    userAchievements?: UserAchievementCreateNestedManyWithoutUserInput
    comentarios?: ComentarioCreateNestedManyWithoutUsuarioInput
    metrics?: MetricCreateNestedManyWithoutUsuarioInput
    ejercicios?: EjercicioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutRutinasInput = {
    id?: number
    nombre: string
    email: string
    contraseña: string
    fecha_registro?: Date | string
    fotoUrl?: string | null
    plan?: string
    calendario?: CalendarioUncheckedCreateNestedManyWithoutUsuarioInput
    contrataciones?: ContratacionUncheckedCreateNestedManyWithoutUsuarioInput
    userChallenges?: UserChallengeUncheckedCreateNestedManyWithoutUserInput
    userAchievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutUsuarioInput
    metrics?: MetricUncheckedCreateNestedManyWithoutUsuarioInput
    ejercicios?: EjercicioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutRutinasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRutinasInput, UsuarioUncheckedCreateWithoutRutinasInput>
  }

  export type RutinaEjercicioCreateWithoutRutinaInput = {
    series: number
    repeticiones: number
    descansoSegundos: number
    orden: number
    ejercicio: EjercicioCreateNestedOneWithoutRutinaEjercicioInput
  }

  export type RutinaEjercicioUncheckedCreateWithoutRutinaInput = {
    id?: number
    ejercicioId: number
    series: number
    repeticiones: number
    descansoSegundos: number
    orden: number
  }

  export type RutinaEjercicioCreateOrConnectWithoutRutinaInput = {
    where: RutinaEjercicioWhereUniqueInput
    create: XOR<RutinaEjercicioCreateWithoutRutinaInput, RutinaEjercicioUncheckedCreateWithoutRutinaInput>
  }

  export type RutinaEjercicioCreateManyRutinaInputEnvelope = {
    data: RutinaEjercicioCreateManyRutinaInput | RutinaEjercicioCreateManyRutinaInput[]
    skipDuplicates?: boolean
  }

  export type CalendarioCreateWithoutRutinaInput = {
    fecha: Date | string
    usuario: UsuarioCreateNestedOneWithoutCalendarioInput
  }

  export type CalendarioUncheckedCreateWithoutRutinaInput = {
    id?: number
    usuarioId: number
    fecha: Date | string
  }

  export type CalendarioCreateOrConnectWithoutRutinaInput = {
    where: CalendarioWhereUniqueInput
    create: XOR<CalendarioCreateWithoutRutinaInput, CalendarioUncheckedCreateWithoutRutinaInput>
  }

  export type CalendarioCreateManyRutinaInputEnvelope = {
    data: CalendarioCreateManyRutinaInput | CalendarioCreateManyRutinaInput[]
    skipDuplicates?: boolean
  }

  export type ComentarioCreateWithoutRutinaInput = {
    texto: string
    creadoEn?: Date | string
    usuario: UsuarioCreateNestedOneWithoutComentariosInput
  }

  export type ComentarioUncheckedCreateWithoutRutinaInput = {
    id?: number
    texto: string
    usuarioId: number
    creadoEn?: Date | string
  }

  export type ComentarioCreateOrConnectWithoutRutinaInput = {
    where: ComentarioWhereUniqueInput
    create: XOR<ComentarioCreateWithoutRutinaInput, ComentarioUncheckedCreateWithoutRutinaInput>
  }

  export type ComentarioCreateManyRutinaInputEnvelope = {
    data: ComentarioCreateManyRutinaInput | ComentarioCreateManyRutinaInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutRutinasInput = {
    update: XOR<UsuarioUpdateWithoutRutinasInput, UsuarioUncheckedUpdateWithoutRutinasInput>
    create: XOR<UsuarioCreateWithoutRutinasInput, UsuarioUncheckedCreateWithoutRutinasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutRutinasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutRutinasInput, UsuarioUncheckedUpdateWithoutRutinasInput>
  }

  export type UsuarioUpdateWithoutRutinasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: StringFieldUpdateOperationsInput | string
    calendario?: CalendarioUpdateManyWithoutUsuarioNestedInput
    contrataciones?: ContratacionUpdateManyWithoutUsuarioNestedInput
    userChallenges?: UserChallengeUpdateManyWithoutUserNestedInput
    userAchievements?: UserAchievementUpdateManyWithoutUserNestedInput
    comentarios?: ComentarioUpdateManyWithoutUsuarioNestedInput
    metrics?: MetricUpdateManyWithoutUsuarioNestedInput
    ejercicios?: EjercicioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutRutinasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: StringFieldUpdateOperationsInput | string
    calendario?: CalendarioUncheckedUpdateManyWithoutUsuarioNestedInput
    contrataciones?: ContratacionUncheckedUpdateManyWithoutUsuarioNestedInput
    userChallenges?: UserChallengeUncheckedUpdateManyWithoutUserNestedInput
    userAchievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput
    metrics?: MetricUncheckedUpdateManyWithoutUsuarioNestedInput
    ejercicios?: EjercicioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type RutinaEjercicioUpsertWithWhereUniqueWithoutRutinaInput = {
    where: RutinaEjercicioWhereUniqueInput
    update: XOR<RutinaEjercicioUpdateWithoutRutinaInput, RutinaEjercicioUncheckedUpdateWithoutRutinaInput>
    create: XOR<RutinaEjercicioCreateWithoutRutinaInput, RutinaEjercicioUncheckedCreateWithoutRutinaInput>
  }

  export type RutinaEjercicioUpdateWithWhereUniqueWithoutRutinaInput = {
    where: RutinaEjercicioWhereUniqueInput
    data: XOR<RutinaEjercicioUpdateWithoutRutinaInput, RutinaEjercicioUncheckedUpdateWithoutRutinaInput>
  }

  export type RutinaEjercicioUpdateManyWithWhereWithoutRutinaInput = {
    where: RutinaEjercicioScalarWhereInput
    data: XOR<RutinaEjercicioUpdateManyMutationInput, RutinaEjercicioUncheckedUpdateManyWithoutRutinaInput>
  }

  export type CalendarioUpsertWithWhereUniqueWithoutRutinaInput = {
    where: CalendarioWhereUniqueInput
    update: XOR<CalendarioUpdateWithoutRutinaInput, CalendarioUncheckedUpdateWithoutRutinaInput>
    create: XOR<CalendarioCreateWithoutRutinaInput, CalendarioUncheckedCreateWithoutRutinaInput>
  }

  export type CalendarioUpdateWithWhereUniqueWithoutRutinaInput = {
    where: CalendarioWhereUniqueInput
    data: XOR<CalendarioUpdateWithoutRutinaInput, CalendarioUncheckedUpdateWithoutRutinaInput>
  }

  export type CalendarioUpdateManyWithWhereWithoutRutinaInput = {
    where: CalendarioScalarWhereInput
    data: XOR<CalendarioUpdateManyMutationInput, CalendarioUncheckedUpdateManyWithoutRutinaInput>
  }

  export type ComentarioUpsertWithWhereUniqueWithoutRutinaInput = {
    where: ComentarioWhereUniqueInput
    update: XOR<ComentarioUpdateWithoutRutinaInput, ComentarioUncheckedUpdateWithoutRutinaInput>
    create: XOR<ComentarioCreateWithoutRutinaInput, ComentarioUncheckedCreateWithoutRutinaInput>
  }

  export type ComentarioUpdateWithWhereUniqueWithoutRutinaInput = {
    where: ComentarioWhereUniqueInput
    data: XOR<ComentarioUpdateWithoutRutinaInput, ComentarioUncheckedUpdateWithoutRutinaInput>
  }

  export type ComentarioUpdateManyWithWhereWithoutRutinaInput = {
    where: ComentarioScalarWhereInput
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyWithoutRutinaInput>
  }

  export type RutinaCreateWithoutEjerciciosInput = {
    nombre: string
    descripcion: string
    fecha_creacion?: Date | string
    usuario: UsuarioCreateNestedOneWithoutRutinasInput
    calendario?: CalendarioCreateNestedManyWithoutRutinaInput
    comentarios?: ComentarioCreateNestedManyWithoutRutinaInput
  }

  export type RutinaUncheckedCreateWithoutEjerciciosInput = {
    id?: number
    nombre: string
    descripcion: string
    usuarioId: number
    fecha_creacion?: Date | string
    calendario?: CalendarioUncheckedCreateNestedManyWithoutRutinaInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutRutinaInput
  }

  export type RutinaCreateOrConnectWithoutEjerciciosInput = {
    where: RutinaWhereUniqueInput
    create: XOR<RutinaCreateWithoutEjerciciosInput, RutinaUncheckedCreateWithoutEjerciciosInput>
  }

  export type EjercicioCreateWithoutRutinaEjercicioInput = {
    nombre: string
    descripcion?: string | null
    categoria?: string | null
    imagenUrl?: string | null
    esComun?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario?: UsuarioCreateNestedOneWithoutEjerciciosInput
  }

  export type EjercicioUncheckedCreateWithoutRutinaEjercicioInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    categoria?: string | null
    imagenUrl?: string | null
    esComun?: boolean
    usuarioId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EjercicioCreateOrConnectWithoutRutinaEjercicioInput = {
    where: EjercicioWhereUniqueInput
    create: XOR<EjercicioCreateWithoutRutinaEjercicioInput, EjercicioUncheckedCreateWithoutRutinaEjercicioInput>
  }

  export type RutinaUpsertWithoutEjerciciosInput = {
    update: XOR<RutinaUpdateWithoutEjerciciosInput, RutinaUncheckedUpdateWithoutEjerciciosInput>
    create: XOR<RutinaCreateWithoutEjerciciosInput, RutinaUncheckedCreateWithoutEjerciciosInput>
    where?: RutinaWhereInput
  }

  export type RutinaUpdateToOneWithWhereWithoutEjerciciosInput = {
    where?: RutinaWhereInput
    data: XOR<RutinaUpdateWithoutEjerciciosInput, RutinaUncheckedUpdateWithoutEjerciciosInput>
  }

  export type RutinaUpdateWithoutEjerciciosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutRutinasNestedInput
    calendario?: CalendarioUpdateManyWithoutRutinaNestedInput
    comentarios?: ComentarioUpdateManyWithoutRutinaNestedInput
  }

  export type RutinaUncheckedUpdateWithoutEjerciciosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    calendario?: CalendarioUncheckedUpdateManyWithoutRutinaNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutRutinaNestedInput
  }

  export type EjercicioUpsertWithoutRutinaEjercicioInput = {
    update: XOR<EjercicioUpdateWithoutRutinaEjercicioInput, EjercicioUncheckedUpdateWithoutRutinaEjercicioInput>
    create: XOR<EjercicioCreateWithoutRutinaEjercicioInput, EjercicioUncheckedCreateWithoutRutinaEjercicioInput>
    where?: EjercicioWhereInput
  }

  export type EjercicioUpdateToOneWithWhereWithoutRutinaEjercicioInput = {
    where?: EjercicioWhereInput
    data: XOR<EjercicioUpdateWithoutRutinaEjercicioInput, EjercicioUncheckedUpdateWithoutRutinaEjercicioInput>
  }

  export type EjercicioUpdateWithoutRutinaEjercicioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    esComun?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneWithoutEjerciciosNestedInput
  }

  export type EjercicioUncheckedUpdateWithoutRutinaEjercicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    esComun?: BoolFieldUpdateOperationsInput | boolean
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateWithoutCalendarioInput = {
    nombre: string
    email: string
    contraseña: string
    fecha_registro?: Date | string
    fotoUrl?: string | null
    plan?: string
    rutinas?: RutinaCreateNestedManyWithoutUsuarioInput
    contrataciones?: ContratacionCreateNestedManyWithoutUsuarioInput
    userChallenges?: UserChallengeCreateNestedManyWithoutUserInput
    userAchievements?: UserAchievementCreateNestedManyWithoutUserInput
    comentarios?: ComentarioCreateNestedManyWithoutUsuarioInput
    metrics?: MetricCreateNestedManyWithoutUsuarioInput
    ejercicios?: EjercicioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutCalendarioInput = {
    id?: number
    nombre: string
    email: string
    contraseña: string
    fecha_registro?: Date | string
    fotoUrl?: string | null
    plan?: string
    rutinas?: RutinaUncheckedCreateNestedManyWithoutUsuarioInput
    contrataciones?: ContratacionUncheckedCreateNestedManyWithoutUsuarioInput
    userChallenges?: UserChallengeUncheckedCreateNestedManyWithoutUserInput
    userAchievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutUsuarioInput
    metrics?: MetricUncheckedCreateNestedManyWithoutUsuarioInput
    ejercicios?: EjercicioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutCalendarioInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCalendarioInput, UsuarioUncheckedCreateWithoutCalendarioInput>
  }

  export type RutinaCreateWithoutCalendarioInput = {
    nombre: string
    descripcion: string
    fecha_creacion?: Date | string
    usuario: UsuarioCreateNestedOneWithoutRutinasInput
    ejercicios?: RutinaEjercicioCreateNestedManyWithoutRutinaInput
    comentarios?: ComentarioCreateNestedManyWithoutRutinaInput
  }

  export type RutinaUncheckedCreateWithoutCalendarioInput = {
    id?: number
    nombre: string
    descripcion: string
    usuarioId: number
    fecha_creacion?: Date | string
    ejercicios?: RutinaEjercicioUncheckedCreateNestedManyWithoutRutinaInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutRutinaInput
  }

  export type RutinaCreateOrConnectWithoutCalendarioInput = {
    where: RutinaWhereUniqueInput
    create: XOR<RutinaCreateWithoutCalendarioInput, RutinaUncheckedCreateWithoutCalendarioInput>
  }

  export type UsuarioUpsertWithoutCalendarioInput = {
    update: XOR<UsuarioUpdateWithoutCalendarioInput, UsuarioUncheckedUpdateWithoutCalendarioInput>
    create: XOR<UsuarioCreateWithoutCalendarioInput, UsuarioUncheckedCreateWithoutCalendarioInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutCalendarioInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutCalendarioInput, UsuarioUncheckedUpdateWithoutCalendarioInput>
  }

  export type UsuarioUpdateWithoutCalendarioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: StringFieldUpdateOperationsInput | string
    rutinas?: RutinaUpdateManyWithoutUsuarioNestedInput
    contrataciones?: ContratacionUpdateManyWithoutUsuarioNestedInput
    userChallenges?: UserChallengeUpdateManyWithoutUserNestedInput
    userAchievements?: UserAchievementUpdateManyWithoutUserNestedInput
    comentarios?: ComentarioUpdateManyWithoutUsuarioNestedInput
    metrics?: MetricUpdateManyWithoutUsuarioNestedInput
    ejercicios?: EjercicioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCalendarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: StringFieldUpdateOperationsInput | string
    rutinas?: RutinaUncheckedUpdateManyWithoutUsuarioNestedInput
    contrataciones?: ContratacionUncheckedUpdateManyWithoutUsuarioNestedInput
    userChallenges?: UserChallengeUncheckedUpdateManyWithoutUserNestedInput
    userAchievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput
    metrics?: MetricUncheckedUpdateManyWithoutUsuarioNestedInput
    ejercicios?: EjercicioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type RutinaUpsertWithoutCalendarioInput = {
    update: XOR<RutinaUpdateWithoutCalendarioInput, RutinaUncheckedUpdateWithoutCalendarioInput>
    create: XOR<RutinaCreateWithoutCalendarioInput, RutinaUncheckedCreateWithoutCalendarioInput>
    where?: RutinaWhereInput
  }

  export type RutinaUpdateToOneWithWhereWithoutCalendarioInput = {
    where?: RutinaWhereInput
    data: XOR<RutinaUpdateWithoutCalendarioInput, RutinaUncheckedUpdateWithoutCalendarioInput>
  }

  export type RutinaUpdateWithoutCalendarioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutRutinasNestedInput
    ejercicios?: RutinaEjercicioUpdateManyWithoutRutinaNestedInput
    comentarios?: ComentarioUpdateManyWithoutRutinaNestedInput
  }

  export type RutinaUncheckedUpdateWithoutCalendarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    ejercicios?: RutinaEjercicioUncheckedUpdateManyWithoutRutinaNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutRutinaNestedInput
  }

  export type ContratacionCreateWithoutEntrenadorInput = {
    fechaInicio: Date | string
    fechaFin?: Date | string | null
    estado: string
    planSeleccionado: string
    precio: number
    usuario: UsuarioCreateNestedOneWithoutContratacionesInput
  }

  export type ContratacionUncheckedCreateWithoutEntrenadorInput = {
    id?: number
    usuarioId: number
    fechaInicio: Date | string
    fechaFin?: Date | string | null
    estado: string
    planSeleccionado: string
    precio: number
  }

  export type ContratacionCreateOrConnectWithoutEntrenadorInput = {
    where: ContratacionWhereUniqueInput
    create: XOR<ContratacionCreateWithoutEntrenadorInput, ContratacionUncheckedCreateWithoutEntrenadorInput>
  }

  export type ContratacionCreateManyEntrenadorInputEnvelope = {
    data: ContratacionCreateManyEntrenadorInput | ContratacionCreateManyEntrenadorInput[]
    skipDuplicates?: boolean
  }

  export type ContratacionUpsertWithWhereUniqueWithoutEntrenadorInput = {
    where: ContratacionWhereUniqueInput
    update: XOR<ContratacionUpdateWithoutEntrenadorInput, ContratacionUncheckedUpdateWithoutEntrenadorInput>
    create: XOR<ContratacionCreateWithoutEntrenadorInput, ContratacionUncheckedCreateWithoutEntrenadorInput>
  }

  export type ContratacionUpdateWithWhereUniqueWithoutEntrenadorInput = {
    where: ContratacionWhereUniqueInput
    data: XOR<ContratacionUpdateWithoutEntrenadorInput, ContratacionUncheckedUpdateWithoutEntrenadorInput>
  }

  export type ContratacionUpdateManyWithWhereWithoutEntrenadorInput = {
    where: ContratacionScalarWhereInput
    data: XOR<ContratacionUpdateManyMutationInput, ContratacionUncheckedUpdateManyWithoutEntrenadorInput>
  }

  export type UsuarioCreateWithoutContratacionesInput = {
    nombre: string
    email: string
    contraseña: string
    fecha_registro?: Date | string
    fotoUrl?: string | null
    plan?: string
    rutinas?: RutinaCreateNestedManyWithoutUsuarioInput
    calendario?: CalendarioCreateNestedManyWithoutUsuarioInput
    userChallenges?: UserChallengeCreateNestedManyWithoutUserInput
    userAchievements?: UserAchievementCreateNestedManyWithoutUserInput
    comentarios?: ComentarioCreateNestedManyWithoutUsuarioInput
    metrics?: MetricCreateNestedManyWithoutUsuarioInput
    ejercicios?: EjercicioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutContratacionesInput = {
    id?: number
    nombre: string
    email: string
    contraseña: string
    fecha_registro?: Date | string
    fotoUrl?: string | null
    plan?: string
    rutinas?: RutinaUncheckedCreateNestedManyWithoutUsuarioInput
    calendario?: CalendarioUncheckedCreateNestedManyWithoutUsuarioInput
    userChallenges?: UserChallengeUncheckedCreateNestedManyWithoutUserInput
    userAchievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutUsuarioInput
    metrics?: MetricUncheckedCreateNestedManyWithoutUsuarioInput
    ejercicios?: EjercicioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutContratacionesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutContratacionesInput, UsuarioUncheckedCreateWithoutContratacionesInput>
  }

  export type EntrenadorCreateWithoutContratacionesInput = {
    nombre: string
    especialidad: string
    descripcion: string
    experiencia: number
    precio: number
    fotoUrl?: string | null
    disponible?: boolean
    calificacion?: number | null
    certificaciones?: EntrenadorCreatecertificacionesInput | string[]
  }

  export type EntrenadorUncheckedCreateWithoutContratacionesInput = {
    id?: number
    nombre: string
    especialidad: string
    descripcion: string
    experiencia: number
    precio: number
    fotoUrl?: string | null
    disponible?: boolean
    calificacion?: number | null
    certificaciones?: EntrenadorCreatecertificacionesInput | string[]
  }

  export type EntrenadorCreateOrConnectWithoutContratacionesInput = {
    where: EntrenadorWhereUniqueInput
    create: XOR<EntrenadorCreateWithoutContratacionesInput, EntrenadorUncheckedCreateWithoutContratacionesInput>
  }

  export type UsuarioUpsertWithoutContratacionesInput = {
    update: XOR<UsuarioUpdateWithoutContratacionesInput, UsuarioUncheckedUpdateWithoutContratacionesInput>
    create: XOR<UsuarioCreateWithoutContratacionesInput, UsuarioUncheckedCreateWithoutContratacionesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutContratacionesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutContratacionesInput, UsuarioUncheckedUpdateWithoutContratacionesInput>
  }

  export type UsuarioUpdateWithoutContratacionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: StringFieldUpdateOperationsInput | string
    rutinas?: RutinaUpdateManyWithoutUsuarioNestedInput
    calendario?: CalendarioUpdateManyWithoutUsuarioNestedInput
    userChallenges?: UserChallengeUpdateManyWithoutUserNestedInput
    userAchievements?: UserAchievementUpdateManyWithoutUserNestedInput
    comentarios?: ComentarioUpdateManyWithoutUsuarioNestedInput
    metrics?: MetricUpdateManyWithoutUsuarioNestedInput
    ejercicios?: EjercicioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutContratacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: StringFieldUpdateOperationsInput | string
    rutinas?: RutinaUncheckedUpdateManyWithoutUsuarioNestedInput
    calendario?: CalendarioUncheckedUpdateManyWithoutUsuarioNestedInput
    userChallenges?: UserChallengeUncheckedUpdateManyWithoutUserNestedInput
    userAchievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput
    metrics?: MetricUncheckedUpdateManyWithoutUsuarioNestedInput
    ejercicios?: EjercicioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type EntrenadorUpsertWithoutContratacionesInput = {
    update: XOR<EntrenadorUpdateWithoutContratacionesInput, EntrenadorUncheckedUpdateWithoutContratacionesInput>
    create: XOR<EntrenadorCreateWithoutContratacionesInput, EntrenadorUncheckedCreateWithoutContratacionesInput>
    where?: EntrenadorWhereInput
  }

  export type EntrenadorUpdateToOneWithWhereWithoutContratacionesInput = {
    where?: EntrenadorWhereInput
    data: XOR<EntrenadorUpdateWithoutContratacionesInput, EntrenadorUncheckedUpdateWithoutContratacionesInput>
  }

  export type EntrenadorUpdateWithoutContratacionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    experiencia?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
    calificacion?: NullableFloatFieldUpdateOperationsInput | number | null
    certificaciones?: EntrenadorUpdatecertificacionesInput | string[]
  }

  export type EntrenadorUncheckedUpdateWithoutContratacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    experiencia?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
    calificacion?: NullableFloatFieldUpdateOperationsInput | number | null
    certificaciones?: EntrenadorUpdatecertificacionesInput | string[]
  }

  export type UserChallengeCreateWithoutChallengeInput = {
    progreso?: number
    completado?: boolean
    fechaInicio?: Date | string
    ultimoProgreso?: Date | string
    user: UsuarioCreateNestedOneWithoutUserChallengesInput
  }

  export type UserChallengeUncheckedCreateWithoutChallengeInput = {
    id?: number
    userId: number
    progreso?: number
    completado?: boolean
    fechaInicio?: Date | string
    ultimoProgreso?: Date | string
  }

  export type UserChallengeCreateOrConnectWithoutChallengeInput = {
    where: UserChallengeWhereUniqueInput
    create: XOR<UserChallengeCreateWithoutChallengeInput, UserChallengeUncheckedCreateWithoutChallengeInput>
  }

  export type UserChallengeCreateManyChallengeInputEnvelope = {
    data: UserChallengeCreateManyChallengeInput | UserChallengeCreateManyChallengeInput[]
    skipDuplicates?: boolean
  }

  export type UserChallengeUpsertWithWhereUniqueWithoutChallengeInput = {
    where: UserChallengeWhereUniqueInput
    update: XOR<UserChallengeUpdateWithoutChallengeInput, UserChallengeUncheckedUpdateWithoutChallengeInput>
    create: XOR<UserChallengeCreateWithoutChallengeInput, UserChallengeUncheckedCreateWithoutChallengeInput>
  }

  export type UserChallengeUpdateWithWhereUniqueWithoutChallengeInput = {
    where: UserChallengeWhereUniqueInput
    data: XOR<UserChallengeUpdateWithoutChallengeInput, UserChallengeUncheckedUpdateWithoutChallengeInput>
  }

  export type UserChallengeUpdateManyWithWhereWithoutChallengeInput = {
    where: UserChallengeScalarWhereInput
    data: XOR<UserChallengeUpdateManyMutationInput, UserChallengeUncheckedUpdateManyWithoutChallengeInput>
  }

  export type UsuarioCreateWithoutUserChallengesInput = {
    nombre: string
    email: string
    contraseña: string
    fecha_registro?: Date | string
    fotoUrl?: string | null
    plan?: string
    rutinas?: RutinaCreateNestedManyWithoutUsuarioInput
    calendario?: CalendarioCreateNestedManyWithoutUsuarioInput
    contrataciones?: ContratacionCreateNestedManyWithoutUsuarioInput
    userAchievements?: UserAchievementCreateNestedManyWithoutUserInput
    comentarios?: ComentarioCreateNestedManyWithoutUsuarioInput
    metrics?: MetricCreateNestedManyWithoutUsuarioInput
    ejercicios?: EjercicioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutUserChallengesInput = {
    id?: number
    nombre: string
    email: string
    contraseña: string
    fecha_registro?: Date | string
    fotoUrl?: string | null
    plan?: string
    rutinas?: RutinaUncheckedCreateNestedManyWithoutUsuarioInput
    calendario?: CalendarioUncheckedCreateNestedManyWithoutUsuarioInput
    contrataciones?: ContratacionUncheckedCreateNestedManyWithoutUsuarioInput
    userAchievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutUsuarioInput
    metrics?: MetricUncheckedCreateNestedManyWithoutUsuarioInput
    ejercicios?: EjercicioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutUserChallengesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutUserChallengesInput, UsuarioUncheckedCreateWithoutUserChallengesInput>
  }

  export type ChallengeCreateWithoutUserChallengesInput = {
    titulo: string
    descripcion: string
    activo?: boolean
    fechaInicio: Date | string
    fechaFin: Date | string
    participantes?: number
    nivel: string
    tipo: string
    objetivos?: ChallengeCreateobjetivosInput | string[]
    recompensa: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChallengeUncheckedCreateWithoutUserChallengesInput = {
    id?: number
    titulo: string
    descripcion: string
    activo?: boolean
    fechaInicio: Date | string
    fechaFin: Date | string
    participantes?: number
    nivel: string
    tipo: string
    objetivos?: ChallengeCreateobjetivosInput | string[]
    recompensa: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChallengeCreateOrConnectWithoutUserChallengesInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutUserChallengesInput, ChallengeUncheckedCreateWithoutUserChallengesInput>
  }

  export type UsuarioUpsertWithoutUserChallengesInput = {
    update: XOR<UsuarioUpdateWithoutUserChallengesInput, UsuarioUncheckedUpdateWithoutUserChallengesInput>
    create: XOR<UsuarioCreateWithoutUserChallengesInput, UsuarioUncheckedCreateWithoutUserChallengesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutUserChallengesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutUserChallengesInput, UsuarioUncheckedUpdateWithoutUserChallengesInput>
  }

  export type UsuarioUpdateWithoutUserChallengesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: StringFieldUpdateOperationsInput | string
    rutinas?: RutinaUpdateManyWithoutUsuarioNestedInput
    calendario?: CalendarioUpdateManyWithoutUsuarioNestedInput
    contrataciones?: ContratacionUpdateManyWithoutUsuarioNestedInput
    userAchievements?: UserAchievementUpdateManyWithoutUserNestedInput
    comentarios?: ComentarioUpdateManyWithoutUsuarioNestedInput
    metrics?: MetricUpdateManyWithoutUsuarioNestedInput
    ejercicios?: EjercicioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutUserChallengesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: StringFieldUpdateOperationsInput | string
    rutinas?: RutinaUncheckedUpdateManyWithoutUsuarioNestedInput
    calendario?: CalendarioUncheckedUpdateManyWithoutUsuarioNestedInput
    contrataciones?: ContratacionUncheckedUpdateManyWithoutUsuarioNestedInput
    userAchievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput
    metrics?: MetricUncheckedUpdateManyWithoutUsuarioNestedInput
    ejercicios?: EjercicioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ChallengeUpsertWithoutUserChallengesInput = {
    update: XOR<ChallengeUpdateWithoutUserChallengesInput, ChallengeUncheckedUpdateWithoutUserChallengesInput>
    create: XOR<ChallengeCreateWithoutUserChallengesInput, ChallengeUncheckedCreateWithoutUserChallengesInput>
    where?: ChallengeWhereInput
  }

  export type ChallengeUpdateToOneWithWhereWithoutUserChallengesInput = {
    where?: ChallengeWhereInput
    data: XOR<ChallengeUpdateWithoutUserChallengesInput, ChallengeUncheckedUpdateWithoutUserChallengesInput>
  }

  export type ChallengeUpdateWithoutUserChallengesInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    participantes?: IntFieldUpdateOperationsInput | number
    nivel?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    objetivos?: ChallengeUpdateobjetivosInput | string[]
    recompensa?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeUncheckedUpdateWithoutUserChallengesInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    participantes?: IntFieldUpdateOperationsInput | number
    nivel?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    objetivos?: ChallengeUpdateobjetivosInput | string[]
    recompensa?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementCreateWithoutAchievementInput = {
    fechaConseguido?: Date | string
    user: UsuarioCreateNestedOneWithoutUserAchievementsInput
  }

  export type UserAchievementUncheckedCreateWithoutAchievementInput = {
    id?: number
    userId: number
    fechaConseguido?: Date | string
  }

  export type UserAchievementCreateOrConnectWithoutAchievementInput = {
    where: UserAchievementWhereUniqueInput
    create: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput>
  }

  export type UserAchievementCreateManyAchievementInputEnvelope = {
    data: UserAchievementCreateManyAchievementInput | UserAchievementCreateManyAchievementInput[]
    skipDuplicates?: boolean
  }

  export type UserAchievementUpsertWithWhereUniqueWithoutAchievementInput = {
    where: UserAchievementWhereUniqueInput
    update: XOR<UserAchievementUpdateWithoutAchievementInput, UserAchievementUncheckedUpdateWithoutAchievementInput>
    create: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput>
  }

  export type UserAchievementUpdateWithWhereUniqueWithoutAchievementInput = {
    where: UserAchievementWhereUniqueInput
    data: XOR<UserAchievementUpdateWithoutAchievementInput, UserAchievementUncheckedUpdateWithoutAchievementInput>
  }

  export type UserAchievementUpdateManyWithWhereWithoutAchievementInput = {
    where: UserAchievementScalarWhereInput
    data: XOR<UserAchievementUpdateManyMutationInput, UserAchievementUncheckedUpdateManyWithoutAchievementInput>
  }

  export type UsuarioCreateWithoutUserAchievementsInput = {
    nombre: string
    email: string
    contraseña: string
    fecha_registro?: Date | string
    fotoUrl?: string | null
    plan?: string
    rutinas?: RutinaCreateNestedManyWithoutUsuarioInput
    calendario?: CalendarioCreateNestedManyWithoutUsuarioInput
    contrataciones?: ContratacionCreateNestedManyWithoutUsuarioInput
    userChallenges?: UserChallengeCreateNestedManyWithoutUserInput
    comentarios?: ComentarioCreateNestedManyWithoutUsuarioInput
    metrics?: MetricCreateNestedManyWithoutUsuarioInput
    ejercicios?: EjercicioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutUserAchievementsInput = {
    id?: number
    nombre: string
    email: string
    contraseña: string
    fecha_registro?: Date | string
    fotoUrl?: string | null
    plan?: string
    rutinas?: RutinaUncheckedCreateNestedManyWithoutUsuarioInput
    calendario?: CalendarioUncheckedCreateNestedManyWithoutUsuarioInput
    contrataciones?: ContratacionUncheckedCreateNestedManyWithoutUsuarioInput
    userChallenges?: UserChallengeUncheckedCreateNestedManyWithoutUserInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutUsuarioInput
    metrics?: MetricUncheckedCreateNestedManyWithoutUsuarioInput
    ejercicios?: EjercicioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutUserAchievementsInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutUserAchievementsInput, UsuarioUncheckedCreateWithoutUserAchievementsInput>
  }

  export type AchievementCreateWithoutUserAchievementsInput = {
    titulo: string
    descripcion: string
    tipo: string
    icono: string
    criterio: string
    valorNecesario: number
  }

  export type AchievementUncheckedCreateWithoutUserAchievementsInput = {
    id?: number
    titulo: string
    descripcion: string
    tipo: string
    icono: string
    criterio: string
    valorNecesario: number
  }

  export type AchievementCreateOrConnectWithoutUserAchievementsInput = {
    where: AchievementWhereUniqueInput
    create: XOR<AchievementCreateWithoutUserAchievementsInput, AchievementUncheckedCreateWithoutUserAchievementsInput>
  }

  export type UsuarioUpsertWithoutUserAchievementsInput = {
    update: XOR<UsuarioUpdateWithoutUserAchievementsInput, UsuarioUncheckedUpdateWithoutUserAchievementsInput>
    create: XOR<UsuarioCreateWithoutUserAchievementsInput, UsuarioUncheckedCreateWithoutUserAchievementsInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutUserAchievementsInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutUserAchievementsInput, UsuarioUncheckedUpdateWithoutUserAchievementsInput>
  }

  export type UsuarioUpdateWithoutUserAchievementsInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: StringFieldUpdateOperationsInput | string
    rutinas?: RutinaUpdateManyWithoutUsuarioNestedInput
    calendario?: CalendarioUpdateManyWithoutUsuarioNestedInput
    contrataciones?: ContratacionUpdateManyWithoutUsuarioNestedInput
    userChallenges?: UserChallengeUpdateManyWithoutUserNestedInput
    comentarios?: ComentarioUpdateManyWithoutUsuarioNestedInput
    metrics?: MetricUpdateManyWithoutUsuarioNestedInput
    ejercicios?: EjercicioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutUserAchievementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: StringFieldUpdateOperationsInput | string
    rutinas?: RutinaUncheckedUpdateManyWithoutUsuarioNestedInput
    calendario?: CalendarioUncheckedUpdateManyWithoutUsuarioNestedInput
    contrataciones?: ContratacionUncheckedUpdateManyWithoutUsuarioNestedInput
    userChallenges?: UserChallengeUncheckedUpdateManyWithoutUserNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput
    metrics?: MetricUncheckedUpdateManyWithoutUsuarioNestedInput
    ejercicios?: EjercicioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type AchievementUpsertWithoutUserAchievementsInput = {
    update: XOR<AchievementUpdateWithoutUserAchievementsInput, AchievementUncheckedUpdateWithoutUserAchievementsInput>
    create: XOR<AchievementCreateWithoutUserAchievementsInput, AchievementUncheckedCreateWithoutUserAchievementsInput>
    where?: AchievementWhereInput
  }

  export type AchievementUpdateToOneWithWhereWithoutUserAchievementsInput = {
    where?: AchievementWhereInput
    data: XOR<AchievementUpdateWithoutUserAchievementsInput, AchievementUncheckedUpdateWithoutUserAchievementsInput>
  }

  export type AchievementUpdateWithoutUserAchievementsInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    icono?: StringFieldUpdateOperationsInput | string
    criterio?: StringFieldUpdateOperationsInput | string
    valorNecesario?: IntFieldUpdateOperationsInput | number
  }

  export type AchievementUncheckedUpdateWithoutUserAchievementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    icono?: StringFieldUpdateOperationsInput | string
    criterio?: StringFieldUpdateOperationsInput | string
    valorNecesario?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioCreateWithoutComentariosInput = {
    nombre: string
    email: string
    contraseña: string
    fecha_registro?: Date | string
    fotoUrl?: string | null
    plan?: string
    rutinas?: RutinaCreateNestedManyWithoutUsuarioInput
    calendario?: CalendarioCreateNestedManyWithoutUsuarioInput
    contrataciones?: ContratacionCreateNestedManyWithoutUsuarioInput
    userChallenges?: UserChallengeCreateNestedManyWithoutUserInput
    userAchievements?: UserAchievementCreateNestedManyWithoutUserInput
    metrics?: MetricCreateNestedManyWithoutUsuarioInput
    ejercicios?: EjercicioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutComentariosInput = {
    id?: number
    nombre: string
    email: string
    contraseña: string
    fecha_registro?: Date | string
    fotoUrl?: string | null
    plan?: string
    rutinas?: RutinaUncheckedCreateNestedManyWithoutUsuarioInput
    calendario?: CalendarioUncheckedCreateNestedManyWithoutUsuarioInput
    contrataciones?: ContratacionUncheckedCreateNestedManyWithoutUsuarioInput
    userChallenges?: UserChallengeUncheckedCreateNestedManyWithoutUserInput
    userAchievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
    metrics?: MetricUncheckedCreateNestedManyWithoutUsuarioInput
    ejercicios?: EjercicioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutComentariosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutComentariosInput, UsuarioUncheckedCreateWithoutComentariosInput>
  }

  export type RutinaCreateWithoutComentariosInput = {
    nombre: string
    descripcion: string
    fecha_creacion?: Date | string
    usuario: UsuarioCreateNestedOneWithoutRutinasInput
    ejercicios?: RutinaEjercicioCreateNestedManyWithoutRutinaInput
    calendario?: CalendarioCreateNestedManyWithoutRutinaInput
  }

  export type RutinaUncheckedCreateWithoutComentariosInput = {
    id?: number
    nombre: string
    descripcion: string
    usuarioId: number
    fecha_creacion?: Date | string
    ejercicios?: RutinaEjercicioUncheckedCreateNestedManyWithoutRutinaInput
    calendario?: CalendarioUncheckedCreateNestedManyWithoutRutinaInput
  }

  export type RutinaCreateOrConnectWithoutComentariosInput = {
    where: RutinaWhereUniqueInput
    create: XOR<RutinaCreateWithoutComentariosInput, RutinaUncheckedCreateWithoutComentariosInput>
  }

  export type UsuarioUpsertWithoutComentariosInput = {
    update: XOR<UsuarioUpdateWithoutComentariosInput, UsuarioUncheckedUpdateWithoutComentariosInput>
    create: XOR<UsuarioCreateWithoutComentariosInput, UsuarioUncheckedCreateWithoutComentariosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutComentariosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutComentariosInput, UsuarioUncheckedUpdateWithoutComentariosInput>
  }

  export type UsuarioUpdateWithoutComentariosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: StringFieldUpdateOperationsInput | string
    rutinas?: RutinaUpdateManyWithoutUsuarioNestedInput
    calendario?: CalendarioUpdateManyWithoutUsuarioNestedInput
    contrataciones?: ContratacionUpdateManyWithoutUsuarioNestedInput
    userChallenges?: UserChallengeUpdateManyWithoutUserNestedInput
    userAchievements?: UserAchievementUpdateManyWithoutUserNestedInput
    metrics?: MetricUpdateManyWithoutUsuarioNestedInput
    ejercicios?: EjercicioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutComentariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: StringFieldUpdateOperationsInput | string
    rutinas?: RutinaUncheckedUpdateManyWithoutUsuarioNestedInput
    calendario?: CalendarioUncheckedUpdateManyWithoutUsuarioNestedInput
    contrataciones?: ContratacionUncheckedUpdateManyWithoutUsuarioNestedInput
    userChallenges?: UserChallengeUncheckedUpdateManyWithoutUserNestedInput
    userAchievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
    metrics?: MetricUncheckedUpdateManyWithoutUsuarioNestedInput
    ejercicios?: EjercicioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type RutinaUpsertWithoutComentariosInput = {
    update: XOR<RutinaUpdateWithoutComentariosInput, RutinaUncheckedUpdateWithoutComentariosInput>
    create: XOR<RutinaCreateWithoutComentariosInput, RutinaUncheckedCreateWithoutComentariosInput>
    where?: RutinaWhereInput
  }

  export type RutinaUpdateToOneWithWhereWithoutComentariosInput = {
    where?: RutinaWhereInput
    data: XOR<RutinaUpdateWithoutComentariosInput, RutinaUncheckedUpdateWithoutComentariosInput>
  }

  export type RutinaUpdateWithoutComentariosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutRutinasNestedInput
    ejercicios?: RutinaEjercicioUpdateManyWithoutRutinaNestedInput
    calendario?: CalendarioUpdateManyWithoutRutinaNestedInput
  }

  export type RutinaUncheckedUpdateWithoutComentariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    ejercicios?: RutinaEjercicioUncheckedUpdateManyWithoutRutinaNestedInput
    calendario?: CalendarioUncheckedUpdateManyWithoutRutinaNestedInput
  }

  export type UsuarioCreateWithoutMetricsInput = {
    nombre: string
    email: string
    contraseña: string
    fecha_registro?: Date | string
    fotoUrl?: string | null
    plan?: string
    rutinas?: RutinaCreateNestedManyWithoutUsuarioInput
    calendario?: CalendarioCreateNestedManyWithoutUsuarioInput
    contrataciones?: ContratacionCreateNestedManyWithoutUsuarioInput
    userChallenges?: UserChallengeCreateNestedManyWithoutUserInput
    userAchievements?: UserAchievementCreateNestedManyWithoutUserInput
    comentarios?: ComentarioCreateNestedManyWithoutUsuarioInput
    ejercicios?: EjercicioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutMetricsInput = {
    id?: number
    nombre: string
    email: string
    contraseña: string
    fecha_registro?: Date | string
    fotoUrl?: string | null
    plan?: string
    rutinas?: RutinaUncheckedCreateNestedManyWithoutUsuarioInput
    calendario?: CalendarioUncheckedCreateNestedManyWithoutUsuarioInput
    contrataciones?: ContratacionUncheckedCreateNestedManyWithoutUsuarioInput
    userChallenges?: UserChallengeUncheckedCreateNestedManyWithoutUserInput
    userAchievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutUsuarioInput
    ejercicios?: EjercicioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutMetricsInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutMetricsInput, UsuarioUncheckedCreateWithoutMetricsInput>
  }

  export type UsuarioUpsertWithoutMetricsInput = {
    update: XOR<UsuarioUpdateWithoutMetricsInput, UsuarioUncheckedUpdateWithoutMetricsInput>
    create: XOR<UsuarioCreateWithoutMetricsInput, UsuarioUncheckedCreateWithoutMetricsInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutMetricsInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutMetricsInput, UsuarioUncheckedUpdateWithoutMetricsInput>
  }

  export type UsuarioUpdateWithoutMetricsInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: StringFieldUpdateOperationsInput | string
    rutinas?: RutinaUpdateManyWithoutUsuarioNestedInput
    calendario?: CalendarioUpdateManyWithoutUsuarioNestedInput
    contrataciones?: ContratacionUpdateManyWithoutUsuarioNestedInput
    userChallenges?: UserChallengeUpdateManyWithoutUserNestedInput
    userAchievements?: UserAchievementUpdateManyWithoutUserNestedInput
    comentarios?: ComentarioUpdateManyWithoutUsuarioNestedInput
    ejercicios?: EjercicioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutMetricsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: StringFieldUpdateOperationsInput | string
    rutinas?: RutinaUncheckedUpdateManyWithoutUsuarioNestedInput
    calendario?: CalendarioUncheckedUpdateManyWithoutUsuarioNestedInput
    contrataciones?: ContratacionUncheckedUpdateManyWithoutUsuarioNestedInput
    userChallenges?: UserChallengeUncheckedUpdateManyWithoutUserNestedInput
    userAchievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutUsuarioNestedInput
    ejercicios?: EjercicioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type RutinaCreateManyUsuarioInput = {
    id?: number
    nombre: string
    descripcion: string
    fecha_creacion?: Date | string
  }

  export type CalendarioCreateManyUsuarioInput = {
    id?: number
    rutinaId: number
    fecha: Date | string
  }

  export type ContratacionCreateManyUsuarioInput = {
    id?: number
    entrenadorId: number
    fechaInicio: Date | string
    fechaFin?: Date | string | null
    estado: string
    planSeleccionado: string
    precio: number
  }

  export type UserChallengeCreateManyUserInput = {
    id?: number
    challengeId: number
    progreso?: number
    completado?: boolean
    fechaInicio?: Date | string
    ultimoProgreso?: Date | string
  }

  export type UserAchievementCreateManyUserInput = {
    id?: number
    achievementId: number
    fechaConseguido?: Date | string
  }

  export type ComentarioCreateManyUsuarioInput = {
    id?: number
    texto: string
    rutinaId: number
    creadoEn?: Date | string
  }

  export type MetricCreateManyUsuarioInput = {
    id?: number
    tipo: string
    valor: number
    fecha: Date | string
  }

  export type EjercicioCreateManyUsuarioInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    categoria?: string | null
    imagenUrl?: string | null
    esComun?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RutinaUpdateWithoutUsuarioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    ejercicios?: RutinaEjercicioUpdateManyWithoutRutinaNestedInput
    calendario?: CalendarioUpdateManyWithoutRutinaNestedInput
    comentarios?: ComentarioUpdateManyWithoutRutinaNestedInput
  }

  export type RutinaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    ejercicios?: RutinaEjercicioUncheckedUpdateManyWithoutRutinaNestedInput
    calendario?: CalendarioUncheckedUpdateManyWithoutRutinaNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutRutinaNestedInput
  }

  export type RutinaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarioUpdateWithoutUsuarioInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    rutina?: RutinaUpdateOneRequiredWithoutCalendarioNestedInput
  }

  export type CalendarioUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    rutinaId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarioUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    rutinaId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContratacionUpdateWithoutUsuarioInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    planSeleccionado?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    entrenador?: EntrenadorUpdateOneRequiredWithoutContratacionesNestedInput
  }

  export type ContratacionUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    entrenadorId?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    planSeleccionado?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type ContratacionUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    entrenadorId?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    planSeleccionado?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type UserChallengeUpdateWithoutUserInput = {
    progreso?: IntFieldUpdateOperationsInput | number
    completado?: BoolFieldUpdateOperationsInput | boolean
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoProgreso?: DateTimeFieldUpdateOperationsInput | Date | string
    challenge?: ChallengeUpdateOneRequiredWithoutUserChallengesNestedInput
  }

  export type UserChallengeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    challengeId?: IntFieldUpdateOperationsInput | number
    progreso?: IntFieldUpdateOperationsInput | number
    completado?: BoolFieldUpdateOperationsInput | boolean
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoProgreso?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserChallengeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    challengeId?: IntFieldUpdateOperationsInput | number
    progreso?: IntFieldUpdateOperationsInput | number
    completado?: BoolFieldUpdateOperationsInput | boolean
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoProgreso?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementUpdateWithoutUserInput = {
    fechaConseguido?: DateTimeFieldUpdateOperationsInput | Date | string
    achievement?: AchievementUpdateOneRequiredWithoutUserAchievementsNestedInput
  }

  export type UserAchievementUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    achievementId?: IntFieldUpdateOperationsInput | number
    fechaConseguido?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    achievementId?: IntFieldUpdateOperationsInput | number
    fechaConseguido?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioUpdateWithoutUsuarioInput = {
    texto?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    rutina?: RutinaUpdateOneRequiredWithoutComentariosNestedInput
  }

  export type ComentarioUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    texto?: StringFieldUpdateOperationsInput | string
    rutinaId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    texto?: StringFieldUpdateOperationsInput | string
    rutinaId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricUpdateWithoutUsuarioInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EjercicioUpdateWithoutUsuarioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    esComun?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rutinaEjercicio?: RutinaEjercicioUpdateManyWithoutEjercicioNestedInput
  }

  export type EjercicioUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    esComun?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rutinaEjercicio?: RutinaEjercicioUncheckedUpdateManyWithoutEjercicioNestedInput
  }

  export type EjercicioUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    esComun?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutinaEjercicioCreateManyEjercicioInput = {
    id?: number
    rutinaId: number
    series: number
    repeticiones: number
    descansoSegundos: number
    orden: number
  }

  export type RutinaEjercicioUpdateWithoutEjercicioInput = {
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    descansoSegundos?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    rutina?: RutinaUpdateOneRequiredWithoutEjerciciosNestedInput
  }

  export type RutinaEjercicioUncheckedUpdateWithoutEjercicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    rutinaId?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    descansoSegundos?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type RutinaEjercicioUncheckedUpdateManyWithoutEjercicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    rutinaId?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    descansoSegundos?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type RutinaEjercicioCreateManyRutinaInput = {
    id?: number
    ejercicioId: number
    series: number
    repeticiones: number
    descansoSegundos: number
    orden: number
  }

  export type CalendarioCreateManyRutinaInput = {
    id?: number
    usuarioId: number
    fecha: Date | string
  }

  export type ComentarioCreateManyRutinaInput = {
    id?: number
    texto: string
    usuarioId: number
    creadoEn?: Date | string
  }

  export type RutinaEjercicioUpdateWithoutRutinaInput = {
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    descansoSegundos?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    ejercicio?: EjercicioUpdateOneRequiredWithoutRutinaEjercicioNestedInput
  }

  export type RutinaEjercicioUncheckedUpdateWithoutRutinaInput = {
    id?: IntFieldUpdateOperationsInput | number
    ejercicioId?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    descansoSegundos?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type RutinaEjercicioUncheckedUpdateManyWithoutRutinaInput = {
    id?: IntFieldUpdateOperationsInput | number
    ejercicioId?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    descansoSegundos?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type CalendarioUpdateWithoutRutinaInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutCalendarioNestedInput
  }

  export type CalendarioUncheckedUpdateWithoutRutinaInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarioUncheckedUpdateManyWithoutRutinaInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioUpdateWithoutRutinaInput = {
    texto?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutComentariosNestedInput
  }

  export type ComentarioUncheckedUpdateWithoutRutinaInput = {
    id?: IntFieldUpdateOperationsInput | number
    texto?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioUncheckedUpdateManyWithoutRutinaInput = {
    id?: IntFieldUpdateOperationsInput | number
    texto?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContratacionCreateManyEntrenadorInput = {
    id?: number
    usuarioId: number
    fechaInicio: Date | string
    fechaFin?: Date | string | null
    estado: string
    planSeleccionado: string
    precio: number
  }

  export type ContratacionUpdateWithoutEntrenadorInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    planSeleccionado?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    usuario?: UsuarioUpdateOneRequiredWithoutContratacionesNestedInput
  }

  export type ContratacionUncheckedUpdateWithoutEntrenadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    planSeleccionado?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type ContratacionUncheckedUpdateManyWithoutEntrenadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: StringFieldUpdateOperationsInput | string
    planSeleccionado?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
  }

  export type UserChallengeCreateManyChallengeInput = {
    id?: number
    userId: number
    progreso?: number
    completado?: boolean
    fechaInicio?: Date | string
    ultimoProgreso?: Date | string
  }

  export type UserChallengeUpdateWithoutChallengeInput = {
    progreso?: IntFieldUpdateOperationsInput | number
    completado?: BoolFieldUpdateOperationsInput | boolean
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoProgreso?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsuarioUpdateOneRequiredWithoutUserChallengesNestedInput
  }

  export type UserChallengeUncheckedUpdateWithoutChallengeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    progreso?: IntFieldUpdateOperationsInput | number
    completado?: BoolFieldUpdateOperationsInput | boolean
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoProgreso?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserChallengeUncheckedUpdateManyWithoutChallengeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    progreso?: IntFieldUpdateOperationsInput | number
    completado?: BoolFieldUpdateOperationsInput | boolean
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoProgreso?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementCreateManyAchievementInput = {
    id?: number
    userId: number
    fechaConseguido?: Date | string
  }

  export type UserAchievementUpdateWithoutAchievementInput = {
    fechaConseguido?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsuarioUpdateOneRequiredWithoutUserAchievementsNestedInput
  }

  export type UserAchievementUncheckedUpdateWithoutAchievementInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fechaConseguido?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementUncheckedUpdateManyWithoutAchievementInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fechaConseguido?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
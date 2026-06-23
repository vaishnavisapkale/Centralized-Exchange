
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
 * Model UserBalance
 * 
 */
export type UserBalance = $Result.DefaultSelection<Prisma.$UserBalancePayload>
/**
 * Model ExchangeOrder
 * 
 */
export type ExchangeOrder = $Result.DefaultSelection<Prisma.$ExchangeOrderPayload>
/**
 * Model ExchangeFill
 * 
 */
export type ExchangeFill = $Result.DefaultSelection<Prisma.$ExchangeFillPayload>
/**
 * Model ExchangeTrade
 * 
 */
export type ExchangeTrade = $Result.DefaultSelection<Prisma.$ExchangeTradePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserBalances
 * const userBalances = await prisma.userBalance.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more UserBalances
   * const userBalances = await prisma.userBalance.findMany()
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
   * `prisma.userBalance`: Exposes CRUD operations for the **UserBalance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserBalances
    * const userBalances = await prisma.userBalance.findMany()
    * ```
    */
  get userBalance(): Prisma.UserBalanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exchangeOrder`: Exposes CRUD operations for the **ExchangeOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExchangeOrders
    * const exchangeOrders = await prisma.exchangeOrder.findMany()
    * ```
    */
  get exchangeOrder(): Prisma.ExchangeOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exchangeFill`: Exposes CRUD operations for the **ExchangeFill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExchangeFills
    * const exchangeFills = await prisma.exchangeFill.findMany()
    * ```
    */
  get exchangeFill(): Prisma.ExchangeFillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exchangeTrade`: Exposes CRUD operations for the **ExchangeTrade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExchangeTrades
    * const exchangeTrades = await prisma.exchangeTrade.findMany()
    * ```
    */
  get exchangeTrade(): Prisma.ExchangeTradeDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    UserBalance: 'UserBalance',
    ExchangeOrder: 'ExchangeOrder',
    ExchangeFill: 'ExchangeFill',
    ExchangeTrade: 'ExchangeTrade'
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
      modelProps: "userBalance" | "exchangeOrder" | "exchangeFill" | "exchangeTrade"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UserBalance: {
        payload: Prisma.$UserBalancePayload<ExtArgs>
        fields: Prisma.UserBalanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserBalanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBalancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserBalanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBalancePayload>
          }
          findFirst: {
            args: Prisma.UserBalanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBalancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserBalanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBalancePayload>
          }
          findMany: {
            args: Prisma.UserBalanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBalancePayload>[]
          }
          create: {
            args: Prisma.UserBalanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBalancePayload>
          }
          createMany: {
            args: Prisma.UserBalanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserBalanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBalancePayload>[]
          }
          delete: {
            args: Prisma.UserBalanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBalancePayload>
          }
          update: {
            args: Prisma.UserBalanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBalancePayload>
          }
          deleteMany: {
            args: Prisma.UserBalanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserBalanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserBalanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBalancePayload>[]
          }
          upsert: {
            args: Prisma.UserBalanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBalancePayload>
          }
          aggregate: {
            args: Prisma.UserBalanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserBalance>
          }
          groupBy: {
            args: Prisma.UserBalanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserBalanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserBalanceCountArgs<ExtArgs>
            result: $Utils.Optional<UserBalanceCountAggregateOutputType> | number
          }
        }
      }
      ExchangeOrder: {
        payload: Prisma.$ExchangeOrderPayload<ExtArgs>
        fields: Prisma.ExchangeOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExchangeOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExchangeOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeOrderPayload>
          }
          findFirst: {
            args: Prisma.ExchangeOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExchangeOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeOrderPayload>
          }
          findMany: {
            args: Prisma.ExchangeOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeOrderPayload>[]
          }
          create: {
            args: Prisma.ExchangeOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeOrderPayload>
          }
          createMany: {
            args: Prisma.ExchangeOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExchangeOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeOrderPayload>[]
          }
          delete: {
            args: Prisma.ExchangeOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeOrderPayload>
          }
          update: {
            args: Prisma.ExchangeOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeOrderPayload>
          }
          deleteMany: {
            args: Prisma.ExchangeOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExchangeOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExchangeOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeOrderPayload>[]
          }
          upsert: {
            args: Prisma.ExchangeOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeOrderPayload>
          }
          aggregate: {
            args: Prisma.ExchangeOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExchangeOrder>
          }
          groupBy: {
            args: Prisma.ExchangeOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExchangeOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExchangeOrderCountArgs<ExtArgs>
            result: $Utils.Optional<ExchangeOrderCountAggregateOutputType> | number
          }
        }
      }
      ExchangeFill: {
        payload: Prisma.$ExchangeFillPayload<ExtArgs>
        fields: Prisma.ExchangeFillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExchangeFillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeFillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExchangeFillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeFillPayload>
          }
          findFirst: {
            args: Prisma.ExchangeFillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeFillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExchangeFillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeFillPayload>
          }
          findMany: {
            args: Prisma.ExchangeFillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeFillPayload>[]
          }
          create: {
            args: Prisma.ExchangeFillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeFillPayload>
          }
          createMany: {
            args: Prisma.ExchangeFillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExchangeFillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeFillPayload>[]
          }
          delete: {
            args: Prisma.ExchangeFillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeFillPayload>
          }
          update: {
            args: Prisma.ExchangeFillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeFillPayload>
          }
          deleteMany: {
            args: Prisma.ExchangeFillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExchangeFillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExchangeFillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeFillPayload>[]
          }
          upsert: {
            args: Prisma.ExchangeFillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeFillPayload>
          }
          aggregate: {
            args: Prisma.ExchangeFillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExchangeFill>
          }
          groupBy: {
            args: Prisma.ExchangeFillGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExchangeFillGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExchangeFillCountArgs<ExtArgs>
            result: $Utils.Optional<ExchangeFillCountAggregateOutputType> | number
          }
        }
      }
      ExchangeTrade: {
        payload: Prisma.$ExchangeTradePayload<ExtArgs>
        fields: Prisma.ExchangeTradeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExchangeTradeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeTradePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExchangeTradeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeTradePayload>
          }
          findFirst: {
            args: Prisma.ExchangeTradeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeTradePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExchangeTradeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeTradePayload>
          }
          findMany: {
            args: Prisma.ExchangeTradeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeTradePayload>[]
          }
          create: {
            args: Prisma.ExchangeTradeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeTradePayload>
          }
          createMany: {
            args: Prisma.ExchangeTradeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExchangeTradeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeTradePayload>[]
          }
          delete: {
            args: Prisma.ExchangeTradeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeTradePayload>
          }
          update: {
            args: Prisma.ExchangeTradeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeTradePayload>
          }
          deleteMany: {
            args: Prisma.ExchangeTradeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExchangeTradeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExchangeTradeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeTradePayload>[]
          }
          upsert: {
            args: Prisma.ExchangeTradeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeTradePayload>
          }
          aggregate: {
            args: Prisma.ExchangeTradeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExchangeTrade>
          }
          groupBy: {
            args: Prisma.ExchangeTradeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExchangeTradeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExchangeTradeCountArgs<ExtArgs>
            result: $Utils.Optional<ExchangeTradeCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    userBalance?: UserBalanceOmit
    exchangeOrder?: ExchangeOrderOmit
    exchangeFill?: ExchangeFillOmit
    exchangeTrade?: ExchangeTradeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type ExchangeOrderCountOutputType
   */

  export type ExchangeOrderCountOutputType = {
    buyFills: number
    sellFills: number
  }

  export type ExchangeOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyFills?: boolean | ExchangeOrderCountOutputTypeCountBuyFillsArgs
    sellFills?: boolean | ExchangeOrderCountOutputTypeCountSellFillsArgs
  }

  // Custom InputTypes
  /**
   * ExchangeOrderCountOutputType without action
   */
  export type ExchangeOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeOrderCountOutputType
     */
    select?: ExchangeOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExchangeOrderCountOutputType without action
   */
  export type ExchangeOrderCountOutputTypeCountBuyFillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExchangeFillWhereInput
  }

  /**
   * ExchangeOrderCountOutputType without action
   */
  export type ExchangeOrderCountOutputTypeCountSellFillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExchangeFillWhereInput
  }


  /**
   * Models
   */

  /**
   * Model UserBalance
   */

  export type AggregateUserBalance = {
    _count: UserBalanceCountAggregateOutputType | null
    _avg: UserBalanceAvgAggregateOutputType | null
    _sum: UserBalanceSumAggregateOutputType | null
    _min: UserBalanceMinAggregateOutputType | null
    _max: UserBalanceMaxAggregateOutputType | null
  }

  export type UserBalanceAvgAggregateOutputType = {
    available: number | null
    locked: number | null
  }

  export type UserBalanceSumAggregateOutputType = {
    available: number | null
    locked: number | null
  }

  export type UserBalanceMinAggregateOutputType = {
    userId: string | null
    asset: string | null
    available: number | null
    locked: number | null
    updatedAt: Date | null
  }

  export type UserBalanceMaxAggregateOutputType = {
    userId: string | null
    asset: string | null
    available: number | null
    locked: number | null
    updatedAt: Date | null
  }

  export type UserBalanceCountAggregateOutputType = {
    userId: number
    asset: number
    available: number
    locked: number
    updatedAt: number
    _all: number
  }


  export type UserBalanceAvgAggregateInputType = {
    available?: true
    locked?: true
  }

  export type UserBalanceSumAggregateInputType = {
    available?: true
    locked?: true
  }

  export type UserBalanceMinAggregateInputType = {
    userId?: true
    asset?: true
    available?: true
    locked?: true
    updatedAt?: true
  }

  export type UserBalanceMaxAggregateInputType = {
    userId?: true
    asset?: true
    available?: true
    locked?: true
    updatedAt?: true
  }

  export type UserBalanceCountAggregateInputType = {
    userId?: true
    asset?: true
    available?: true
    locked?: true
    updatedAt?: true
    _all?: true
  }

  export type UserBalanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBalance to aggregate.
     */
    where?: UserBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBalances to fetch.
     */
    orderBy?: UserBalanceOrderByWithRelationInput | UserBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserBalances
    **/
    _count?: true | UserBalanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserBalanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserBalanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserBalanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserBalanceMaxAggregateInputType
  }

  export type GetUserBalanceAggregateType<T extends UserBalanceAggregateArgs> = {
        [P in keyof T & keyof AggregateUserBalance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserBalance[P]>
      : GetScalarType<T[P], AggregateUserBalance[P]>
  }




  export type UserBalanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBalanceWhereInput
    orderBy?: UserBalanceOrderByWithAggregationInput | UserBalanceOrderByWithAggregationInput[]
    by: UserBalanceScalarFieldEnum[] | UserBalanceScalarFieldEnum
    having?: UserBalanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserBalanceCountAggregateInputType | true
    _avg?: UserBalanceAvgAggregateInputType
    _sum?: UserBalanceSumAggregateInputType
    _min?: UserBalanceMinAggregateInputType
    _max?: UserBalanceMaxAggregateInputType
  }

  export type UserBalanceGroupByOutputType = {
    userId: string
    asset: string
    available: number
    locked: number
    updatedAt: Date
    _count: UserBalanceCountAggregateOutputType | null
    _avg: UserBalanceAvgAggregateOutputType | null
    _sum: UserBalanceSumAggregateOutputType | null
    _min: UserBalanceMinAggregateOutputType | null
    _max: UserBalanceMaxAggregateOutputType | null
  }

  type GetUserBalanceGroupByPayload<T extends UserBalanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserBalanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserBalanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserBalanceGroupByOutputType[P]>
            : GetScalarType<T[P], UserBalanceGroupByOutputType[P]>
        }
      >
    >


  export type UserBalanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    asset?: boolean
    available?: boolean
    locked?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userBalance"]>

  export type UserBalanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    asset?: boolean
    available?: boolean
    locked?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userBalance"]>

  export type UserBalanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    asset?: boolean
    available?: boolean
    locked?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userBalance"]>

  export type UserBalanceSelectScalar = {
    userId?: boolean
    asset?: boolean
    available?: boolean
    locked?: boolean
    updatedAt?: boolean
  }

  export type UserBalanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "asset" | "available" | "locked" | "updatedAt", ExtArgs["result"]["userBalance"]>

  export type $UserBalancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserBalance"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      asset: string
      available: number
      locked: number
      updatedAt: Date
    }, ExtArgs["result"]["userBalance"]>
    composites: {}
  }

  type UserBalanceGetPayload<S extends boolean | null | undefined | UserBalanceDefaultArgs> = $Result.GetResult<Prisma.$UserBalancePayload, S>

  type UserBalanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserBalanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserBalanceCountAggregateInputType | true
    }

  export interface UserBalanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserBalance'], meta: { name: 'UserBalance' } }
    /**
     * Find zero or one UserBalance that matches the filter.
     * @param {UserBalanceFindUniqueArgs} args - Arguments to find a UserBalance
     * @example
     * // Get one UserBalance
     * const userBalance = await prisma.userBalance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserBalanceFindUniqueArgs>(args: SelectSubset<T, UserBalanceFindUniqueArgs<ExtArgs>>): Prisma__UserBalanceClient<$Result.GetResult<Prisma.$UserBalancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserBalance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserBalanceFindUniqueOrThrowArgs} args - Arguments to find a UserBalance
     * @example
     * // Get one UserBalance
     * const userBalance = await prisma.userBalance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserBalanceFindUniqueOrThrowArgs>(args: SelectSubset<T, UserBalanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserBalanceClient<$Result.GetResult<Prisma.$UserBalancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserBalance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBalanceFindFirstArgs} args - Arguments to find a UserBalance
     * @example
     * // Get one UserBalance
     * const userBalance = await prisma.userBalance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserBalanceFindFirstArgs>(args?: SelectSubset<T, UserBalanceFindFirstArgs<ExtArgs>>): Prisma__UserBalanceClient<$Result.GetResult<Prisma.$UserBalancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserBalance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBalanceFindFirstOrThrowArgs} args - Arguments to find a UserBalance
     * @example
     * // Get one UserBalance
     * const userBalance = await prisma.userBalance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserBalanceFindFirstOrThrowArgs>(args?: SelectSubset<T, UserBalanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserBalanceClient<$Result.GetResult<Prisma.$UserBalancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserBalances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBalanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserBalances
     * const userBalances = await prisma.userBalance.findMany()
     * 
     * // Get first 10 UserBalances
     * const userBalances = await prisma.userBalance.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userBalanceWithUserIdOnly = await prisma.userBalance.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserBalanceFindManyArgs>(args?: SelectSubset<T, UserBalanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserBalance.
     * @param {UserBalanceCreateArgs} args - Arguments to create a UserBalance.
     * @example
     * // Create one UserBalance
     * const UserBalance = await prisma.userBalance.create({
     *   data: {
     *     // ... data to create a UserBalance
     *   }
     * })
     * 
     */
    create<T extends UserBalanceCreateArgs>(args: SelectSubset<T, UserBalanceCreateArgs<ExtArgs>>): Prisma__UserBalanceClient<$Result.GetResult<Prisma.$UserBalancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserBalances.
     * @param {UserBalanceCreateManyArgs} args - Arguments to create many UserBalances.
     * @example
     * // Create many UserBalances
     * const userBalance = await prisma.userBalance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserBalanceCreateManyArgs>(args?: SelectSubset<T, UserBalanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserBalances and returns the data saved in the database.
     * @param {UserBalanceCreateManyAndReturnArgs} args - Arguments to create many UserBalances.
     * @example
     * // Create many UserBalances
     * const userBalance = await prisma.userBalance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserBalances and only return the `userId`
     * const userBalanceWithUserIdOnly = await prisma.userBalance.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserBalanceCreateManyAndReturnArgs>(args?: SelectSubset<T, UserBalanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBalancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserBalance.
     * @param {UserBalanceDeleteArgs} args - Arguments to delete one UserBalance.
     * @example
     * // Delete one UserBalance
     * const UserBalance = await prisma.userBalance.delete({
     *   where: {
     *     // ... filter to delete one UserBalance
     *   }
     * })
     * 
     */
    delete<T extends UserBalanceDeleteArgs>(args: SelectSubset<T, UserBalanceDeleteArgs<ExtArgs>>): Prisma__UserBalanceClient<$Result.GetResult<Prisma.$UserBalancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserBalance.
     * @param {UserBalanceUpdateArgs} args - Arguments to update one UserBalance.
     * @example
     * // Update one UserBalance
     * const userBalance = await prisma.userBalance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserBalanceUpdateArgs>(args: SelectSubset<T, UserBalanceUpdateArgs<ExtArgs>>): Prisma__UserBalanceClient<$Result.GetResult<Prisma.$UserBalancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserBalances.
     * @param {UserBalanceDeleteManyArgs} args - Arguments to filter UserBalances to delete.
     * @example
     * // Delete a few UserBalances
     * const { count } = await prisma.userBalance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserBalanceDeleteManyArgs>(args?: SelectSubset<T, UserBalanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBalanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserBalances
     * const userBalance = await prisma.userBalance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserBalanceUpdateManyArgs>(args: SelectSubset<T, UserBalanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBalances and returns the data updated in the database.
     * @param {UserBalanceUpdateManyAndReturnArgs} args - Arguments to update many UserBalances.
     * @example
     * // Update many UserBalances
     * const userBalance = await prisma.userBalance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserBalances and only return the `userId`
     * const userBalanceWithUserIdOnly = await prisma.userBalance.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends UserBalanceUpdateManyAndReturnArgs>(args: SelectSubset<T, UserBalanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBalancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserBalance.
     * @param {UserBalanceUpsertArgs} args - Arguments to update or create a UserBalance.
     * @example
     * // Update or create a UserBalance
     * const userBalance = await prisma.userBalance.upsert({
     *   create: {
     *     // ... data to create a UserBalance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserBalance we want to update
     *   }
     * })
     */
    upsert<T extends UserBalanceUpsertArgs>(args: SelectSubset<T, UserBalanceUpsertArgs<ExtArgs>>): Prisma__UserBalanceClient<$Result.GetResult<Prisma.$UserBalancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBalanceCountArgs} args - Arguments to filter UserBalances to count.
     * @example
     * // Count the number of UserBalances
     * const count = await prisma.userBalance.count({
     *   where: {
     *     // ... the filter for the UserBalances we want to count
     *   }
     * })
    **/
    count<T extends UserBalanceCountArgs>(
      args?: Subset<T, UserBalanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserBalanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserBalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBalanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserBalanceAggregateArgs>(args: Subset<T, UserBalanceAggregateArgs>): Prisma.PrismaPromise<GetUserBalanceAggregateType<T>>

    /**
     * Group by UserBalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBalanceGroupByArgs} args - Group by arguments.
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
      T extends UserBalanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserBalanceGroupByArgs['orderBy'] }
        : { orderBy?: UserBalanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserBalanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserBalanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserBalance model
   */
  readonly fields: UserBalanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserBalance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserBalanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the UserBalance model
   */
  interface UserBalanceFieldRefs {
    readonly userId: FieldRef<"UserBalance", 'String'>
    readonly asset: FieldRef<"UserBalance", 'String'>
    readonly available: FieldRef<"UserBalance", 'Float'>
    readonly locked: FieldRef<"UserBalance", 'Float'>
    readonly updatedAt: FieldRef<"UserBalance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserBalance findUnique
   */
  export type UserBalanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBalance
     */
    select?: UserBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBalance
     */
    omit?: UserBalanceOmit<ExtArgs> | null
    /**
     * Filter, which UserBalance to fetch.
     */
    where: UserBalanceWhereUniqueInput
  }

  /**
   * UserBalance findUniqueOrThrow
   */
  export type UserBalanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBalance
     */
    select?: UserBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBalance
     */
    omit?: UserBalanceOmit<ExtArgs> | null
    /**
     * Filter, which UserBalance to fetch.
     */
    where: UserBalanceWhereUniqueInput
  }

  /**
   * UserBalance findFirst
   */
  export type UserBalanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBalance
     */
    select?: UserBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBalance
     */
    omit?: UserBalanceOmit<ExtArgs> | null
    /**
     * Filter, which UserBalance to fetch.
     */
    where?: UserBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBalances to fetch.
     */
    orderBy?: UserBalanceOrderByWithRelationInput | UserBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBalances.
     */
    cursor?: UserBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBalances.
     */
    distinct?: UserBalanceScalarFieldEnum | UserBalanceScalarFieldEnum[]
  }

  /**
   * UserBalance findFirstOrThrow
   */
  export type UserBalanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBalance
     */
    select?: UserBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBalance
     */
    omit?: UserBalanceOmit<ExtArgs> | null
    /**
     * Filter, which UserBalance to fetch.
     */
    where?: UserBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBalances to fetch.
     */
    orderBy?: UserBalanceOrderByWithRelationInput | UserBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBalances.
     */
    cursor?: UserBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBalances.
     */
    distinct?: UserBalanceScalarFieldEnum | UserBalanceScalarFieldEnum[]
  }

  /**
   * UserBalance findMany
   */
  export type UserBalanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBalance
     */
    select?: UserBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBalance
     */
    omit?: UserBalanceOmit<ExtArgs> | null
    /**
     * Filter, which UserBalances to fetch.
     */
    where?: UserBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBalances to fetch.
     */
    orderBy?: UserBalanceOrderByWithRelationInput | UserBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserBalances.
     */
    cursor?: UserBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBalances.
     */
    skip?: number
    distinct?: UserBalanceScalarFieldEnum | UserBalanceScalarFieldEnum[]
  }

  /**
   * UserBalance create
   */
  export type UserBalanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBalance
     */
    select?: UserBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBalance
     */
    omit?: UserBalanceOmit<ExtArgs> | null
    /**
     * The data needed to create a UserBalance.
     */
    data: XOR<UserBalanceCreateInput, UserBalanceUncheckedCreateInput>
  }

  /**
   * UserBalance createMany
   */
  export type UserBalanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserBalances.
     */
    data: UserBalanceCreateManyInput | UserBalanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserBalance createManyAndReturn
   */
  export type UserBalanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBalance
     */
    select?: UserBalanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserBalance
     */
    omit?: UserBalanceOmit<ExtArgs> | null
    /**
     * The data used to create many UserBalances.
     */
    data: UserBalanceCreateManyInput | UserBalanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserBalance update
   */
  export type UserBalanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBalance
     */
    select?: UserBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBalance
     */
    omit?: UserBalanceOmit<ExtArgs> | null
    /**
     * The data needed to update a UserBalance.
     */
    data: XOR<UserBalanceUpdateInput, UserBalanceUncheckedUpdateInput>
    /**
     * Choose, which UserBalance to update.
     */
    where: UserBalanceWhereUniqueInput
  }

  /**
   * UserBalance updateMany
   */
  export type UserBalanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserBalances.
     */
    data: XOR<UserBalanceUpdateManyMutationInput, UserBalanceUncheckedUpdateManyInput>
    /**
     * Filter which UserBalances to update
     */
    where?: UserBalanceWhereInput
    /**
     * Limit how many UserBalances to update.
     */
    limit?: number
  }

  /**
   * UserBalance updateManyAndReturn
   */
  export type UserBalanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBalance
     */
    select?: UserBalanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserBalance
     */
    omit?: UserBalanceOmit<ExtArgs> | null
    /**
     * The data used to update UserBalances.
     */
    data: XOR<UserBalanceUpdateManyMutationInput, UserBalanceUncheckedUpdateManyInput>
    /**
     * Filter which UserBalances to update
     */
    where?: UserBalanceWhereInput
    /**
     * Limit how many UserBalances to update.
     */
    limit?: number
  }

  /**
   * UserBalance upsert
   */
  export type UserBalanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBalance
     */
    select?: UserBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBalance
     */
    omit?: UserBalanceOmit<ExtArgs> | null
    /**
     * The filter to search for the UserBalance to update in case it exists.
     */
    where: UserBalanceWhereUniqueInput
    /**
     * In case the UserBalance found by the `where` argument doesn't exist, create a new UserBalance with this data.
     */
    create: XOR<UserBalanceCreateInput, UserBalanceUncheckedCreateInput>
    /**
     * In case the UserBalance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserBalanceUpdateInput, UserBalanceUncheckedUpdateInput>
  }

  /**
   * UserBalance delete
   */
  export type UserBalanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBalance
     */
    select?: UserBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBalance
     */
    omit?: UserBalanceOmit<ExtArgs> | null
    /**
     * Filter which UserBalance to delete.
     */
    where: UserBalanceWhereUniqueInput
  }

  /**
   * UserBalance deleteMany
   */
  export type UserBalanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBalances to delete
     */
    where?: UserBalanceWhereInput
    /**
     * Limit how many UserBalances to delete.
     */
    limit?: number
  }

  /**
   * UserBalance without action
   */
  export type UserBalanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBalance
     */
    select?: UserBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBalance
     */
    omit?: UserBalanceOmit<ExtArgs> | null
  }


  /**
   * Model ExchangeOrder
   */

  export type AggregateExchangeOrder = {
    _count: ExchangeOrderCountAggregateOutputType | null
    _avg: ExchangeOrderAvgAggregateOutputType | null
    _sum: ExchangeOrderSumAggregateOutputType | null
    _min: ExchangeOrderMinAggregateOutputType | null
    _max: ExchangeOrderMaxAggregateOutputType | null
  }

  export type ExchangeOrderAvgAggregateOutputType = {
    price: number | null
    qty: number | null
    filledQty: number | null
  }

  export type ExchangeOrderSumAggregateOutputType = {
    price: number | null
    qty: number | null
    filledQty: number | null
  }

  export type ExchangeOrderMinAggregateOutputType = {
    orderId: string | null
    userId: string | null
    side: string | null
    type: string | null
    symbol: string | null
    price: number | null
    qty: number | null
    filledQty: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExchangeOrderMaxAggregateOutputType = {
    orderId: string | null
    userId: string | null
    side: string | null
    type: string | null
    symbol: string | null
    price: number | null
    qty: number | null
    filledQty: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExchangeOrderCountAggregateOutputType = {
    orderId: number
    userId: number
    side: number
    type: number
    symbol: number
    price: number
    qty: number
    filledQty: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExchangeOrderAvgAggregateInputType = {
    price?: true
    qty?: true
    filledQty?: true
  }

  export type ExchangeOrderSumAggregateInputType = {
    price?: true
    qty?: true
    filledQty?: true
  }

  export type ExchangeOrderMinAggregateInputType = {
    orderId?: true
    userId?: true
    side?: true
    type?: true
    symbol?: true
    price?: true
    qty?: true
    filledQty?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExchangeOrderMaxAggregateInputType = {
    orderId?: true
    userId?: true
    side?: true
    type?: true
    symbol?: true
    price?: true
    qty?: true
    filledQty?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExchangeOrderCountAggregateInputType = {
    orderId?: true
    userId?: true
    side?: true
    type?: true
    symbol?: true
    price?: true
    qty?: true
    filledQty?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExchangeOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExchangeOrder to aggregate.
     */
    where?: ExchangeOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeOrders to fetch.
     */
    orderBy?: ExchangeOrderOrderByWithRelationInput | ExchangeOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExchangeOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExchangeOrders
    **/
    _count?: true | ExchangeOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExchangeOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExchangeOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExchangeOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExchangeOrderMaxAggregateInputType
  }

  export type GetExchangeOrderAggregateType<T extends ExchangeOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateExchangeOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExchangeOrder[P]>
      : GetScalarType<T[P], AggregateExchangeOrder[P]>
  }




  export type ExchangeOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExchangeOrderWhereInput
    orderBy?: ExchangeOrderOrderByWithAggregationInput | ExchangeOrderOrderByWithAggregationInput[]
    by: ExchangeOrderScalarFieldEnum[] | ExchangeOrderScalarFieldEnum
    having?: ExchangeOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExchangeOrderCountAggregateInputType | true
    _avg?: ExchangeOrderAvgAggregateInputType
    _sum?: ExchangeOrderSumAggregateInputType
    _min?: ExchangeOrderMinAggregateInputType
    _max?: ExchangeOrderMaxAggregateInputType
  }

  export type ExchangeOrderGroupByOutputType = {
    orderId: string
    userId: string
    side: string
    type: string
    symbol: string
    price: number | null
    qty: number
    filledQty: number
    status: string
    createdAt: Date
    updatedAt: Date
    _count: ExchangeOrderCountAggregateOutputType | null
    _avg: ExchangeOrderAvgAggregateOutputType | null
    _sum: ExchangeOrderSumAggregateOutputType | null
    _min: ExchangeOrderMinAggregateOutputType | null
    _max: ExchangeOrderMaxAggregateOutputType | null
  }

  type GetExchangeOrderGroupByPayload<T extends ExchangeOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExchangeOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExchangeOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExchangeOrderGroupByOutputType[P]>
            : GetScalarType<T[P], ExchangeOrderGroupByOutputType[P]>
        }
      >
    >


  export type ExchangeOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    userId?: boolean
    side?: boolean
    type?: boolean
    symbol?: boolean
    price?: boolean
    qty?: boolean
    filledQty?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    buyFills?: boolean | ExchangeOrder$buyFillsArgs<ExtArgs>
    sellFills?: boolean | ExchangeOrder$sellFillsArgs<ExtArgs>
    _count?: boolean | ExchangeOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exchangeOrder"]>

  export type ExchangeOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    userId?: boolean
    side?: boolean
    type?: boolean
    symbol?: boolean
    price?: boolean
    qty?: boolean
    filledQty?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["exchangeOrder"]>

  export type ExchangeOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    userId?: boolean
    side?: boolean
    type?: boolean
    symbol?: boolean
    price?: boolean
    qty?: boolean
    filledQty?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["exchangeOrder"]>

  export type ExchangeOrderSelectScalar = {
    orderId?: boolean
    userId?: boolean
    side?: boolean
    type?: boolean
    symbol?: boolean
    price?: boolean
    qty?: boolean
    filledQty?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExchangeOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"orderId" | "userId" | "side" | "type" | "symbol" | "price" | "qty" | "filledQty" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["exchangeOrder"]>
  export type ExchangeOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyFills?: boolean | ExchangeOrder$buyFillsArgs<ExtArgs>
    sellFills?: boolean | ExchangeOrder$sellFillsArgs<ExtArgs>
    _count?: boolean | ExchangeOrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExchangeOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ExchangeOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ExchangeOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExchangeOrder"
    objects: {
      buyFills: Prisma.$ExchangeFillPayload<ExtArgs>[]
      sellFills: Prisma.$ExchangeFillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      orderId: string
      userId: string
      side: string
      type: string
      symbol: string
      price: number | null
      qty: number
      filledQty: number
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["exchangeOrder"]>
    composites: {}
  }

  type ExchangeOrderGetPayload<S extends boolean | null | undefined | ExchangeOrderDefaultArgs> = $Result.GetResult<Prisma.$ExchangeOrderPayload, S>

  type ExchangeOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExchangeOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExchangeOrderCountAggregateInputType | true
    }

  export interface ExchangeOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExchangeOrder'], meta: { name: 'ExchangeOrder' } }
    /**
     * Find zero or one ExchangeOrder that matches the filter.
     * @param {ExchangeOrderFindUniqueArgs} args - Arguments to find a ExchangeOrder
     * @example
     * // Get one ExchangeOrder
     * const exchangeOrder = await prisma.exchangeOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExchangeOrderFindUniqueArgs>(args: SelectSubset<T, ExchangeOrderFindUniqueArgs<ExtArgs>>): Prisma__ExchangeOrderClient<$Result.GetResult<Prisma.$ExchangeOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExchangeOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExchangeOrderFindUniqueOrThrowArgs} args - Arguments to find a ExchangeOrder
     * @example
     * // Get one ExchangeOrder
     * const exchangeOrder = await prisma.exchangeOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExchangeOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, ExchangeOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExchangeOrderClient<$Result.GetResult<Prisma.$ExchangeOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExchangeOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeOrderFindFirstArgs} args - Arguments to find a ExchangeOrder
     * @example
     * // Get one ExchangeOrder
     * const exchangeOrder = await prisma.exchangeOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExchangeOrderFindFirstArgs>(args?: SelectSubset<T, ExchangeOrderFindFirstArgs<ExtArgs>>): Prisma__ExchangeOrderClient<$Result.GetResult<Prisma.$ExchangeOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExchangeOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeOrderFindFirstOrThrowArgs} args - Arguments to find a ExchangeOrder
     * @example
     * // Get one ExchangeOrder
     * const exchangeOrder = await prisma.exchangeOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExchangeOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, ExchangeOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExchangeOrderClient<$Result.GetResult<Prisma.$ExchangeOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExchangeOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExchangeOrders
     * const exchangeOrders = await prisma.exchangeOrder.findMany()
     * 
     * // Get first 10 ExchangeOrders
     * const exchangeOrders = await prisma.exchangeOrder.findMany({ take: 10 })
     * 
     * // Only select the `orderId`
     * const exchangeOrderWithOrderIdOnly = await prisma.exchangeOrder.findMany({ select: { orderId: true } })
     * 
     */
    findMany<T extends ExchangeOrderFindManyArgs>(args?: SelectSubset<T, ExchangeOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangeOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExchangeOrder.
     * @param {ExchangeOrderCreateArgs} args - Arguments to create a ExchangeOrder.
     * @example
     * // Create one ExchangeOrder
     * const ExchangeOrder = await prisma.exchangeOrder.create({
     *   data: {
     *     // ... data to create a ExchangeOrder
     *   }
     * })
     * 
     */
    create<T extends ExchangeOrderCreateArgs>(args: SelectSubset<T, ExchangeOrderCreateArgs<ExtArgs>>): Prisma__ExchangeOrderClient<$Result.GetResult<Prisma.$ExchangeOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExchangeOrders.
     * @param {ExchangeOrderCreateManyArgs} args - Arguments to create many ExchangeOrders.
     * @example
     * // Create many ExchangeOrders
     * const exchangeOrder = await prisma.exchangeOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExchangeOrderCreateManyArgs>(args?: SelectSubset<T, ExchangeOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExchangeOrders and returns the data saved in the database.
     * @param {ExchangeOrderCreateManyAndReturnArgs} args - Arguments to create many ExchangeOrders.
     * @example
     * // Create many ExchangeOrders
     * const exchangeOrder = await prisma.exchangeOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExchangeOrders and only return the `orderId`
     * const exchangeOrderWithOrderIdOnly = await prisma.exchangeOrder.createManyAndReturn({
     *   select: { orderId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExchangeOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, ExchangeOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangeOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExchangeOrder.
     * @param {ExchangeOrderDeleteArgs} args - Arguments to delete one ExchangeOrder.
     * @example
     * // Delete one ExchangeOrder
     * const ExchangeOrder = await prisma.exchangeOrder.delete({
     *   where: {
     *     // ... filter to delete one ExchangeOrder
     *   }
     * })
     * 
     */
    delete<T extends ExchangeOrderDeleteArgs>(args: SelectSubset<T, ExchangeOrderDeleteArgs<ExtArgs>>): Prisma__ExchangeOrderClient<$Result.GetResult<Prisma.$ExchangeOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExchangeOrder.
     * @param {ExchangeOrderUpdateArgs} args - Arguments to update one ExchangeOrder.
     * @example
     * // Update one ExchangeOrder
     * const exchangeOrder = await prisma.exchangeOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExchangeOrderUpdateArgs>(args: SelectSubset<T, ExchangeOrderUpdateArgs<ExtArgs>>): Prisma__ExchangeOrderClient<$Result.GetResult<Prisma.$ExchangeOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExchangeOrders.
     * @param {ExchangeOrderDeleteManyArgs} args - Arguments to filter ExchangeOrders to delete.
     * @example
     * // Delete a few ExchangeOrders
     * const { count } = await prisma.exchangeOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExchangeOrderDeleteManyArgs>(args?: SelectSubset<T, ExchangeOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExchangeOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExchangeOrders
     * const exchangeOrder = await prisma.exchangeOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExchangeOrderUpdateManyArgs>(args: SelectSubset<T, ExchangeOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExchangeOrders and returns the data updated in the database.
     * @param {ExchangeOrderUpdateManyAndReturnArgs} args - Arguments to update many ExchangeOrders.
     * @example
     * // Update many ExchangeOrders
     * const exchangeOrder = await prisma.exchangeOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExchangeOrders and only return the `orderId`
     * const exchangeOrderWithOrderIdOnly = await prisma.exchangeOrder.updateManyAndReturn({
     *   select: { orderId: true },
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
    updateManyAndReturn<T extends ExchangeOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, ExchangeOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangeOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExchangeOrder.
     * @param {ExchangeOrderUpsertArgs} args - Arguments to update or create a ExchangeOrder.
     * @example
     * // Update or create a ExchangeOrder
     * const exchangeOrder = await prisma.exchangeOrder.upsert({
     *   create: {
     *     // ... data to create a ExchangeOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExchangeOrder we want to update
     *   }
     * })
     */
    upsert<T extends ExchangeOrderUpsertArgs>(args: SelectSubset<T, ExchangeOrderUpsertArgs<ExtArgs>>): Prisma__ExchangeOrderClient<$Result.GetResult<Prisma.$ExchangeOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExchangeOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeOrderCountArgs} args - Arguments to filter ExchangeOrders to count.
     * @example
     * // Count the number of ExchangeOrders
     * const count = await prisma.exchangeOrder.count({
     *   where: {
     *     // ... the filter for the ExchangeOrders we want to count
     *   }
     * })
    **/
    count<T extends ExchangeOrderCountArgs>(
      args?: Subset<T, ExchangeOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExchangeOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExchangeOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExchangeOrderAggregateArgs>(args: Subset<T, ExchangeOrderAggregateArgs>): Prisma.PrismaPromise<GetExchangeOrderAggregateType<T>>

    /**
     * Group by ExchangeOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeOrderGroupByArgs} args - Group by arguments.
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
      T extends ExchangeOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExchangeOrderGroupByArgs['orderBy'] }
        : { orderBy?: ExchangeOrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExchangeOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExchangeOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExchangeOrder model
   */
  readonly fields: ExchangeOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExchangeOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExchangeOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    buyFills<T extends ExchangeOrder$buyFillsArgs<ExtArgs> = {}>(args?: Subset<T, ExchangeOrder$buyFillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangeFillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sellFills<T extends ExchangeOrder$sellFillsArgs<ExtArgs> = {}>(args?: Subset<T, ExchangeOrder$sellFillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangeFillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ExchangeOrder model
   */
  interface ExchangeOrderFieldRefs {
    readonly orderId: FieldRef<"ExchangeOrder", 'String'>
    readonly userId: FieldRef<"ExchangeOrder", 'String'>
    readonly side: FieldRef<"ExchangeOrder", 'String'>
    readonly type: FieldRef<"ExchangeOrder", 'String'>
    readonly symbol: FieldRef<"ExchangeOrder", 'String'>
    readonly price: FieldRef<"ExchangeOrder", 'Float'>
    readonly qty: FieldRef<"ExchangeOrder", 'Float'>
    readonly filledQty: FieldRef<"ExchangeOrder", 'Float'>
    readonly status: FieldRef<"ExchangeOrder", 'String'>
    readonly createdAt: FieldRef<"ExchangeOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"ExchangeOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExchangeOrder findUnique
   */
  export type ExchangeOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeOrder
     */
    select?: ExchangeOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeOrder
     */
    omit?: ExchangeOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeOrderInclude<ExtArgs> | null
    /**
     * Filter, which ExchangeOrder to fetch.
     */
    where: ExchangeOrderWhereUniqueInput
  }

  /**
   * ExchangeOrder findUniqueOrThrow
   */
  export type ExchangeOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeOrder
     */
    select?: ExchangeOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeOrder
     */
    omit?: ExchangeOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeOrderInclude<ExtArgs> | null
    /**
     * Filter, which ExchangeOrder to fetch.
     */
    where: ExchangeOrderWhereUniqueInput
  }

  /**
   * ExchangeOrder findFirst
   */
  export type ExchangeOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeOrder
     */
    select?: ExchangeOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeOrder
     */
    omit?: ExchangeOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeOrderInclude<ExtArgs> | null
    /**
     * Filter, which ExchangeOrder to fetch.
     */
    where?: ExchangeOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeOrders to fetch.
     */
    orderBy?: ExchangeOrderOrderByWithRelationInput | ExchangeOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExchangeOrders.
     */
    cursor?: ExchangeOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExchangeOrders.
     */
    distinct?: ExchangeOrderScalarFieldEnum | ExchangeOrderScalarFieldEnum[]
  }

  /**
   * ExchangeOrder findFirstOrThrow
   */
  export type ExchangeOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeOrder
     */
    select?: ExchangeOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeOrder
     */
    omit?: ExchangeOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeOrderInclude<ExtArgs> | null
    /**
     * Filter, which ExchangeOrder to fetch.
     */
    where?: ExchangeOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeOrders to fetch.
     */
    orderBy?: ExchangeOrderOrderByWithRelationInput | ExchangeOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExchangeOrders.
     */
    cursor?: ExchangeOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExchangeOrders.
     */
    distinct?: ExchangeOrderScalarFieldEnum | ExchangeOrderScalarFieldEnum[]
  }

  /**
   * ExchangeOrder findMany
   */
  export type ExchangeOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeOrder
     */
    select?: ExchangeOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeOrder
     */
    omit?: ExchangeOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeOrderInclude<ExtArgs> | null
    /**
     * Filter, which ExchangeOrders to fetch.
     */
    where?: ExchangeOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeOrders to fetch.
     */
    orderBy?: ExchangeOrderOrderByWithRelationInput | ExchangeOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExchangeOrders.
     */
    cursor?: ExchangeOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeOrders.
     */
    skip?: number
    distinct?: ExchangeOrderScalarFieldEnum | ExchangeOrderScalarFieldEnum[]
  }

  /**
   * ExchangeOrder create
   */
  export type ExchangeOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeOrder
     */
    select?: ExchangeOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeOrder
     */
    omit?: ExchangeOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a ExchangeOrder.
     */
    data: XOR<ExchangeOrderCreateInput, ExchangeOrderUncheckedCreateInput>
  }

  /**
   * ExchangeOrder createMany
   */
  export type ExchangeOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExchangeOrders.
     */
    data: ExchangeOrderCreateManyInput | ExchangeOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExchangeOrder createManyAndReturn
   */
  export type ExchangeOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeOrder
     */
    select?: ExchangeOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeOrder
     */
    omit?: ExchangeOrderOmit<ExtArgs> | null
    /**
     * The data used to create many ExchangeOrders.
     */
    data: ExchangeOrderCreateManyInput | ExchangeOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExchangeOrder update
   */
  export type ExchangeOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeOrder
     */
    select?: ExchangeOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeOrder
     */
    omit?: ExchangeOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a ExchangeOrder.
     */
    data: XOR<ExchangeOrderUpdateInput, ExchangeOrderUncheckedUpdateInput>
    /**
     * Choose, which ExchangeOrder to update.
     */
    where: ExchangeOrderWhereUniqueInput
  }

  /**
   * ExchangeOrder updateMany
   */
  export type ExchangeOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExchangeOrders.
     */
    data: XOR<ExchangeOrderUpdateManyMutationInput, ExchangeOrderUncheckedUpdateManyInput>
    /**
     * Filter which ExchangeOrders to update
     */
    where?: ExchangeOrderWhereInput
    /**
     * Limit how many ExchangeOrders to update.
     */
    limit?: number
  }

  /**
   * ExchangeOrder updateManyAndReturn
   */
  export type ExchangeOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeOrder
     */
    select?: ExchangeOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeOrder
     */
    omit?: ExchangeOrderOmit<ExtArgs> | null
    /**
     * The data used to update ExchangeOrders.
     */
    data: XOR<ExchangeOrderUpdateManyMutationInput, ExchangeOrderUncheckedUpdateManyInput>
    /**
     * Filter which ExchangeOrders to update
     */
    where?: ExchangeOrderWhereInput
    /**
     * Limit how many ExchangeOrders to update.
     */
    limit?: number
  }

  /**
   * ExchangeOrder upsert
   */
  export type ExchangeOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeOrder
     */
    select?: ExchangeOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeOrder
     */
    omit?: ExchangeOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the ExchangeOrder to update in case it exists.
     */
    where: ExchangeOrderWhereUniqueInput
    /**
     * In case the ExchangeOrder found by the `where` argument doesn't exist, create a new ExchangeOrder with this data.
     */
    create: XOR<ExchangeOrderCreateInput, ExchangeOrderUncheckedCreateInput>
    /**
     * In case the ExchangeOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExchangeOrderUpdateInput, ExchangeOrderUncheckedUpdateInput>
  }

  /**
   * ExchangeOrder delete
   */
  export type ExchangeOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeOrder
     */
    select?: ExchangeOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeOrder
     */
    omit?: ExchangeOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeOrderInclude<ExtArgs> | null
    /**
     * Filter which ExchangeOrder to delete.
     */
    where: ExchangeOrderWhereUniqueInput
  }

  /**
   * ExchangeOrder deleteMany
   */
  export type ExchangeOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExchangeOrders to delete
     */
    where?: ExchangeOrderWhereInput
    /**
     * Limit how many ExchangeOrders to delete.
     */
    limit?: number
  }

  /**
   * ExchangeOrder.buyFills
   */
  export type ExchangeOrder$buyFillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeFill
     */
    select?: ExchangeFillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeFill
     */
    omit?: ExchangeFillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeFillInclude<ExtArgs> | null
    where?: ExchangeFillWhereInput
    orderBy?: ExchangeFillOrderByWithRelationInput | ExchangeFillOrderByWithRelationInput[]
    cursor?: ExchangeFillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExchangeFillScalarFieldEnum | ExchangeFillScalarFieldEnum[]
  }

  /**
   * ExchangeOrder.sellFills
   */
  export type ExchangeOrder$sellFillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeFill
     */
    select?: ExchangeFillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeFill
     */
    omit?: ExchangeFillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeFillInclude<ExtArgs> | null
    where?: ExchangeFillWhereInput
    orderBy?: ExchangeFillOrderByWithRelationInput | ExchangeFillOrderByWithRelationInput[]
    cursor?: ExchangeFillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExchangeFillScalarFieldEnum | ExchangeFillScalarFieldEnum[]
  }

  /**
   * ExchangeOrder without action
   */
  export type ExchangeOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeOrder
     */
    select?: ExchangeOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeOrder
     */
    omit?: ExchangeOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeOrderInclude<ExtArgs> | null
  }


  /**
   * Model ExchangeFill
   */

  export type AggregateExchangeFill = {
    _count: ExchangeFillCountAggregateOutputType | null
    _avg: ExchangeFillAvgAggregateOutputType | null
    _sum: ExchangeFillSumAggregateOutputType | null
    _min: ExchangeFillMinAggregateOutputType | null
    _max: ExchangeFillMaxAggregateOutputType | null
  }

  export type ExchangeFillAvgAggregateOutputType = {
    price: number | null
    qty: number | null
  }

  export type ExchangeFillSumAggregateOutputType = {
    price: number | null
    qty: number | null
  }

  export type ExchangeFillMinAggregateOutputType = {
    fillId: string | null
    symbol: string | null
    price: number | null
    qty: number | null
    buyOrderId: string | null
    sellOrderId: string | null
    createdAt: Date | null
  }

  export type ExchangeFillMaxAggregateOutputType = {
    fillId: string | null
    symbol: string | null
    price: number | null
    qty: number | null
    buyOrderId: string | null
    sellOrderId: string | null
    createdAt: Date | null
  }

  export type ExchangeFillCountAggregateOutputType = {
    fillId: number
    symbol: number
    price: number
    qty: number
    buyOrderId: number
    sellOrderId: number
    createdAt: number
    _all: number
  }


  export type ExchangeFillAvgAggregateInputType = {
    price?: true
    qty?: true
  }

  export type ExchangeFillSumAggregateInputType = {
    price?: true
    qty?: true
  }

  export type ExchangeFillMinAggregateInputType = {
    fillId?: true
    symbol?: true
    price?: true
    qty?: true
    buyOrderId?: true
    sellOrderId?: true
    createdAt?: true
  }

  export type ExchangeFillMaxAggregateInputType = {
    fillId?: true
    symbol?: true
    price?: true
    qty?: true
    buyOrderId?: true
    sellOrderId?: true
    createdAt?: true
  }

  export type ExchangeFillCountAggregateInputType = {
    fillId?: true
    symbol?: true
    price?: true
    qty?: true
    buyOrderId?: true
    sellOrderId?: true
    createdAt?: true
    _all?: true
  }

  export type ExchangeFillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExchangeFill to aggregate.
     */
    where?: ExchangeFillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeFills to fetch.
     */
    orderBy?: ExchangeFillOrderByWithRelationInput | ExchangeFillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExchangeFillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeFills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeFills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExchangeFills
    **/
    _count?: true | ExchangeFillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExchangeFillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExchangeFillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExchangeFillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExchangeFillMaxAggregateInputType
  }

  export type GetExchangeFillAggregateType<T extends ExchangeFillAggregateArgs> = {
        [P in keyof T & keyof AggregateExchangeFill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExchangeFill[P]>
      : GetScalarType<T[P], AggregateExchangeFill[P]>
  }




  export type ExchangeFillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExchangeFillWhereInput
    orderBy?: ExchangeFillOrderByWithAggregationInput | ExchangeFillOrderByWithAggregationInput[]
    by: ExchangeFillScalarFieldEnum[] | ExchangeFillScalarFieldEnum
    having?: ExchangeFillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExchangeFillCountAggregateInputType | true
    _avg?: ExchangeFillAvgAggregateInputType
    _sum?: ExchangeFillSumAggregateInputType
    _min?: ExchangeFillMinAggregateInputType
    _max?: ExchangeFillMaxAggregateInputType
  }

  export type ExchangeFillGroupByOutputType = {
    fillId: string
    symbol: string
    price: number
    qty: number
    buyOrderId: string
    sellOrderId: string
    createdAt: Date
    _count: ExchangeFillCountAggregateOutputType | null
    _avg: ExchangeFillAvgAggregateOutputType | null
    _sum: ExchangeFillSumAggregateOutputType | null
    _min: ExchangeFillMinAggregateOutputType | null
    _max: ExchangeFillMaxAggregateOutputType | null
  }

  type GetExchangeFillGroupByPayload<T extends ExchangeFillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExchangeFillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExchangeFillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExchangeFillGroupByOutputType[P]>
            : GetScalarType<T[P], ExchangeFillGroupByOutputType[P]>
        }
      >
    >


  export type ExchangeFillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fillId?: boolean
    symbol?: boolean
    price?: boolean
    qty?: boolean
    buyOrderId?: boolean
    sellOrderId?: boolean
    createdAt?: boolean
    buyOrder?: boolean | ExchangeOrderDefaultArgs<ExtArgs>
    sellOrder?: boolean | ExchangeOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exchangeFill"]>

  export type ExchangeFillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fillId?: boolean
    symbol?: boolean
    price?: boolean
    qty?: boolean
    buyOrderId?: boolean
    sellOrderId?: boolean
    createdAt?: boolean
    buyOrder?: boolean | ExchangeOrderDefaultArgs<ExtArgs>
    sellOrder?: boolean | ExchangeOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exchangeFill"]>

  export type ExchangeFillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fillId?: boolean
    symbol?: boolean
    price?: boolean
    qty?: boolean
    buyOrderId?: boolean
    sellOrderId?: boolean
    createdAt?: boolean
    buyOrder?: boolean | ExchangeOrderDefaultArgs<ExtArgs>
    sellOrder?: boolean | ExchangeOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exchangeFill"]>

  export type ExchangeFillSelectScalar = {
    fillId?: boolean
    symbol?: boolean
    price?: boolean
    qty?: boolean
    buyOrderId?: boolean
    sellOrderId?: boolean
    createdAt?: boolean
  }

  export type ExchangeFillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"fillId" | "symbol" | "price" | "qty" | "buyOrderId" | "sellOrderId" | "createdAt", ExtArgs["result"]["exchangeFill"]>
  export type ExchangeFillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyOrder?: boolean | ExchangeOrderDefaultArgs<ExtArgs>
    sellOrder?: boolean | ExchangeOrderDefaultArgs<ExtArgs>
  }
  export type ExchangeFillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyOrder?: boolean | ExchangeOrderDefaultArgs<ExtArgs>
    sellOrder?: boolean | ExchangeOrderDefaultArgs<ExtArgs>
  }
  export type ExchangeFillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyOrder?: boolean | ExchangeOrderDefaultArgs<ExtArgs>
    sellOrder?: boolean | ExchangeOrderDefaultArgs<ExtArgs>
  }

  export type $ExchangeFillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExchangeFill"
    objects: {
      buyOrder: Prisma.$ExchangeOrderPayload<ExtArgs>
      sellOrder: Prisma.$ExchangeOrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      fillId: string
      symbol: string
      price: number
      qty: number
      buyOrderId: string
      sellOrderId: string
      createdAt: Date
    }, ExtArgs["result"]["exchangeFill"]>
    composites: {}
  }

  type ExchangeFillGetPayload<S extends boolean | null | undefined | ExchangeFillDefaultArgs> = $Result.GetResult<Prisma.$ExchangeFillPayload, S>

  type ExchangeFillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExchangeFillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExchangeFillCountAggregateInputType | true
    }

  export interface ExchangeFillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExchangeFill'], meta: { name: 'ExchangeFill' } }
    /**
     * Find zero or one ExchangeFill that matches the filter.
     * @param {ExchangeFillFindUniqueArgs} args - Arguments to find a ExchangeFill
     * @example
     * // Get one ExchangeFill
     * const exchangeFill = await prisma.exchangeFill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExchangeFillFindUniqueArgs>(args: SelectSubset<T, ExchangeFillFindUniqueArgs<ExtArgs>>): Prisma__ExchangeFillClient<$Result.GetResult<Prisma.$ExchangeFillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExchangeFill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExchangeFillFindUniqueOrThrowArgs} args - Arguments to find a ExchangeFill
     * @example
     * // Get one ExchangeFill
     * const exchangeFill = await prisma.exchangeFill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExchangeFillFindUniqueOrThrowArgs>(args: SelectSubset<T, ExchangeFillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExchangeFillClient<$Result.GetResult<Prisma.$ExchangeFillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExchangeFill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeFillFindFirstArgs} args - Arguments to find a ExchangeFill
     * @example
     * // Get one ExchangeFill
     * const exchangeFill = await prisma.exchangeFill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExchangeFillFindFirstArgs>(args?: SelectSubset<T, ExchangeFillFindFirstArgs<ExtArgs>>): Prisma__ExchangeFillClient<$Result.GetResult<Prisma.$ExchangeFillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExchangeFill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeFillFindFirstOrThrowArgs} args - Arguments to find a ExchangeFill
     * @example
     * // Get one ExchangeFill
     * const exchangeFill = await prisma.exchangeFill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExchangeFillFindFirstOrThrowArgs>(args?: SelectSubset<T, ExchangeFillFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExchangeFillClient<$Result.GetResult<Prisma.$ExchangeFillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExchangeFills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeFillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExchangeFills
     * const exchangeFills = await prisma.exchangeFill.findMany()
     * 
     * // Get first 10 ExchangeFills
     * const exchangeFills = await prisma.exchangeFill.findMany({ take: 10 })
     * 
     * // Only select the `fillId`
     * const exchangeFillWithFillIdOnly = await prisma.exchangeFill.findMany({ select: { fillId: true } })
     * 
     */
    findMany<T extends ExchangeFillFindManyArgs>(args?: SelectSubset<T, ExchangeFillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangeFillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExchangeFill.
     * @param {ExchangeFillCreateArgs} args - Arguments to create a ExchangeFill.
     * @example
     * // Create one ExchangeFill
     * const ExchangeFill = await prisma.exchangeFill.create({
     *   data: {
     *     // ... data to create a ExchangeFill
     *   }
     * })
     * 
     */
    create<T extends ExchangeFillCreateArgs>(args: SelectSubset<T, ExchangeFillCreateArgs<ExtArgs>>): Prisma__ExchangeFillClient<$Result.GetResult<Prisma.$ExchangeFillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExchangeFills.
     * @param {ExchangeFillCreateManyArgs} args - Arguments to create many ExchangeFills.
     * @example
     * // Create many ExchangeFills
     * const exchangeFill = await prisma.exchangeFill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExchangeFillCreateManyArgs>(args?: SelectSubset<T, ExchangeFillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExchangeFills and returns the data saved in the database.
     * @param {ExchangeFillCreateManyAndReturnArgs} args - Arguments to create many ExchangeFills.
     * @example
     * // Create many ExchangeFills
     * const exchangeFill = await prisma.exchangeFill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExchangeFills and only return the `fillId`
     * const exchangeFillWithFillIdOnly = await prisma.exchangeFill.createManyAndReturn({
     *   select: { fillId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExchangeFillCreateManyAndReturnArgs>(args?: SelectSubset<T, ExchangeFillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangeFillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExchangeFill.
     * @param {ExchangeFillDeleteArgs} args - Arguments to delete one ExchangeFill.
     * @example
     * // Delete one ExchangeFill
     * const ExchangeFill = await prisma.exchangeFill.delete({
     *   where: {
     *     // ... filter to delete one ExchangeFill
     *   }
     * })
     * 
     */
    delete<T extends ExchangeFillDeleteArgs>(args: SelectSubset<T, ExchangeFillDeleteArgs<ExtArgs>>): Prisma__ExchangeFillClient<$Result.GetResult<Prisma.$ExchangeFillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExchangeFill.
     * @param {ExchangeFillUpdateArgs} args - Arguments to update one ExchangeFill.
     * @example
     * // Update one ExchangeFill
     * const exchangeFill = await prisma.exchangeFill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExchangeFillUpdateArgs>(args: SelectSubset<T, ExchangeFillUpdateArgs<ExtArgs>>): Prisma__ExchangeFillClient<$Result.GetResult<Prisma.$ExchangeFillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExchangeFills.
     * @param {ExchangeFillDeleteManyArgs} args - Arguments to filter ExchangeFills to delete.
     * @example
     * // Delete a few ExchangeFills
     * const { count } = await prisma.exchangeFill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExchangeFillDeleteManyArgs>(args?: SelectSubset<T, ExchangeFillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExchangeFills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeFillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExchangeFills
     * const exchangeFill = await prisma.exchangeFill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExchangeFillUpdateManyArgs>(args: SelectSubset<T, ExchangeFillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExchangeFills and returns the data updated in the database.
     * @param {ExchangeFillUpdateManyAndReturnArgs} args - Arguments to update many ExchangeFills.
     * @example
     * // Update many ExchangeFills
     * const exchangeFill = await prisma.exchangeFill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExchangeFills and only return the `fillId`
     * const exchangeFillWithFillIdOnly = await prisma.exchangeFill.updateManyAndReturn({
     *   select: { fillId: true },
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
    updateManyAndReturn<T extends ExchangeFillUpdateManyAndReturnArgs>(args: SelectSubset<T, ExchangeFillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangeFillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExchangeFill.
     * @param {ExchangeFillUpsertArgs} args - Arguments to update or create a ExchangeFill.
     * @example
     * // Update or create a ExchangeFill
     * const exchangeFill = await prisma.exchangeFill.upsert({
     *   create: {
     *     // ... data to create a ExchangeFill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExchangeFill we want to update
     *   }
     * })
     */
    upsert<T extends ExchangeFillUpsertArgs>(args: SelectSubset<T, ExchangeFillUpsertArgs<ExtArgs>>): Prisma__ExchangeFillClient<$Result.GetResult<Prisma.$ExchangeFillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExchangeFills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeFillCountArgs} args - Arguments to filter ExchangeFills to count.
     * @example
     * // Count the number of ExchangeFills
     * const count = await prisma.exchangeFill.count({
     *   where: {
     *     // ... the filter for the ExchangeFills we want to count
     *   }
     * })
    **/
    count<T extends ExchangeFillCountArgs>(
      args?: Subset<T, ExchangeFillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExchangeFillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExchangeFill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeFillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExchangeFillAggregateArgs>(args: Subset<T, ExchangeFillAggregateArgs>): Prisma.PrismaPromise<GetExchangeFillAggregateType<T>>

    /**
     * Group by ExchangeFill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeFillGroupByArgs} args - Group by arguments.
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
      T extends ExchangeFillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExchangeFillGroupByArgs['orderBy'] }
        : { orderBy?: ExchangeFillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExchangeFillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExchangeFillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExchangeFill model
   */
  readonly fields: ExchangeFillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExchangeFill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExchangeFillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    buyOrder<T extends ExchangeOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExchangeOrderDefaultArgs<ExtArgs>>): Prisma__ExchangeOrderClient<$Result.GetResult<Prisma.$ExchangeOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sellOrder<T extends ExchangeOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExchangeOrderDefaultArgs<ExtArgs>>): Prisma__ExchangeOrderClient<$Result.GetResult<Prisma.$ExchangeOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ExchangeFill model
   */
  interface ExchangeFillFieldRefs {
    readonly fillId: FieldRef<"ExchangeFill", 'String'>
    readonly symbol: FieldRef<"ExchangeFill", 'String'>
    readonly price: FieldRef<"ExchangeFill", 'Float'>
    readonly qty: FieldRef<"ExchangeFill", 'Float'>
    readonly buyOrderId: FieldRef<"ExchangeFill", 'String'>
    readonly sellOrderId: FieldRef<"ExchangeFill", 'String'>
    readonly createdAt: FieldRef<"ExchangeFill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExchangeFill findUnique
   */
  export type ExchangeFillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeFill
     */
    select?: ExchangeFillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeFill
     */
    omit?: ExchangeFillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeFillInclude<ExtArgs> | null
    /**
     * Filter, which ExchangeFill to fetch.
     */
    where: ExchangeFillWhereUniqueInput
  }

  /**
   * ExchangeFill findUniqueOrThrow
   */
  export type ExchangeFillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeFill
     */
    select?: ExchangeFillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeFill
     */
    omit?: ExchangeFillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeFillInclude<ExtArgs> | null
    /**
     * Filter, which ExchangeFill to fetch.
     */
    where: ExchangeFillWhereUniqueInput
  }

  /**
   * ExchangeFill findFirst
   */
  export type ExchangeFillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeFill
     */
    select?: ExchangeFillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeFill
     */
    omit?: ExchangeFillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeFillInclude<ExtArgs> | null
    /**
     * Filter, which ExchangeFill to fetch.
     */
    where?: ExchangeFillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeFills to fetch.
     */
    orderBy?: ExchangeFillOrderByWithRelationInput | ExchangeFillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExchangeFills.
     */
    cursor?: ExchangeFillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeFills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeFills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExchangeFills.
     */
    distinct?: ExchangeFillScalarFieldEnum | ExchangeFillScalarFieldEnum[]
  }

  /**
   * ExchangeFill findFirstOrThrow
   */
  export type ExchangeFillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeFill
     */
    select?: ExchangeFillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeFill
     */
    omit?: ExchangeFillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeFillInclude<ExtArgs> | null
    /**
     * Filter, which ExchangeFill to fetch.
     */
    where?: ExchangeFillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeFills to fetch.
     */
    orderBy?: ExchangeFillOrderByWithRelationInput | ExchangeFillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExchangeFills.
     */
    cursor?: ExchangeFillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeFills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeFills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExchangeFills.
     */
    distinct?: ExchangeFillScalarFieldEnum | ExchangeFillScalarFieldEnum[]
  }

  /**
   * ExchangeFill findMany
   */
  export type ExchangeFillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeFill
     */
    select?: ExchangeFillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeFill
     */
    omit?: ExchangeFillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeFillInclude<ExtArgs> | null
    /**
     * Filter, which ExchangeFills to fetch.
     */
    where?: ExchangeFillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeFills to fetch.
     */
    orderBy?: ExchangeFillOrderByWithRelationInput | ExchangeFillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExchangeFills.
     */
    cursor?: ExchangeFillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeFills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeFills.
     */
    skip?: number
    distinct?: ExchangeFillScalarFieldEnum | ExchangeFillScalarFieldEnum[]
  }

  /**
   * ExchangeFill create
   */
  export type ExchangeFillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeFill
     */
    select?: ExchangeFillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeFill
     */
    omit?: ExchangeFillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeFillInclude<ExtArgs> | null
    /**
     * The data needed to create a ExchangeFill.
     */
    data: XOR<ExchangeFillCreateInput, ExchangeFillUncheckedCreateInput>
  }

  /**
   * ExchangeFill createMany
   */
  export type ExchangeFillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExchangeFills.
     */
    data: ExchangeFillCreateManyInput | ExchangeFillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExchangeFill createManyAndReturn
   */
  export type ExchangeFillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeFill
     */
    select?: ExchangeFillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeFill
     */
    omit?: ExchangeFillOmit<ExtArgs> | null
    /**
     * The data used to create many ExchangeFills.
     */
    data: ExchangeFillCreateManyInput | ExchangeFillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeFillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExchangeFill update
   */
  export type ExchangeFillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeFill
     */
    select?: ExchangeFillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeFill
     */
    omit?: ExchangeFillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeFillInclude<ExtArgs> | null
    /**
     * The data needed to update a ExchangeFill.
     */
    data: XOR<ExchangeFillUpdateInput, ExchangeFillUncheckedUpdateInput>
    /**
     * Choose, which ExchangeFill to update.
     */
    where: ExchangeFillWhereUniqueInput
  }

  /**
   * ExchangeFill updateMany
   */
  export type ExchangeFillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExchangeFills.
     */
    data: XOR<ExchangeFillUpdateManyMutationInput, ExchangeFillUncheckedUpdateManyInput>
    /**
     * Filter which ExchangeFills to update
     */
    where?: ExchangeFillWhereInput
    /**
     * Limit how many ExchangeFills to update.
     */
    limit?: number
  }

  /**
   * ExchangeFill updateManyAndReturn
   */
  export type ExchangeFillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeFill
     */
    select?: ExchangeFillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeFill
     */
    omit?: ExchangeFillOmit<ExtArgs> | null
    /**
     * The data used to update ExchangeFills.
     */
    data: XOR<ExchangeFillUpdateManyMutationInput, ExchangeFillUncheckedUpdateManyInput>
    /**
     * Filter which ExchangeFills to update
     */
    where?: ExchangeFillWhereInput
    /**
     * Limit how many ExchangeFills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeFillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExchangeFill upsert
   */
  export type ExchangeFillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeFill
     */
    select?: ExchangeFillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeFill
     */
    omit?: ExchangeFillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeFillInclude<ExtArgs> | null
    /**
     * The filter to search for the ExchangeFill to update in case it exists.
     */
    where: ExchangeFillWhereUniqueInput
    /**
     * In case the ExchangeFill found by the `where` argument doesn't exist, create a new ExchangeFill with this data.
     */
    create: XOR<ExchangeFillCreateInput, ExchangeFillUncheckedCreateInput>
    /**
     * In case the ExchangeFill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExchangeFillUpdateInput, ExchangeFillUncheckedUpdateInput>
  }

  /**
   * ExchangeFill delete
   */
  export type ExchangeFillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeFill
     */
    select?: ExchangeFillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeFill
     */
    omit?: ExchangeFillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeFillInclude<ExtArgs> | null
    /**
     * Filter which ExchangeFill to delete.
     */
    where: ExchangeFillWhereUniqueInput
  }

  /**
   * ExchangeFill deleteMany
   */
  export type ExchangeFillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExchangeFills to delete
     */
    where?: ExchangeFillWhereInput
    /**
     * Limit how many ExchangeFills to delete.
     */
    limit?: number
  }

  /**
   * ExchangeFill without action
   */
  export type ExchangeFillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeFill
     */
    select?: ExchangeFillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeFill
     */
    omit?: ExchangeFillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeFillInclude<ExtArgs> | null
  }


  /**
   * Model ExchangeTrade
   */

  export type AggregateExchangeTrade = {
    _count: ExchangeTradeCountAggregateOutputType | null
    _avg: ExchangeTradeAvgAggregateOutputType | null
    _sum: ExchangeTradeSumAggregateOutputType | null
    _min: ExchangeTradeMinAggregateOutputType | null
    _max: ExchangeTradeMaxAggregateOutputType | null
  }

  export type ExchangeTradeAvgAggregateOutputType = {
    price: number | null
    qty: number | null
  }

  export type ExchangeTradeSumAggregateOutputType = {
    price: number | null
    qty: number | null
  }

  export type ExchangeTradeMinAggregateOutputType = {
    id: string | null
    symbol: string | null
    price: number | null
    qty: number | null
    side: string | null
    createdAt: Date | null
  }

  export type ExchangeTradeMaxAggregateOutputType = {
    id: string | null
    symbol: string | null
    price: number | null
    qty: number | null
    side: string | null
    createdAt: Date | null
  }

  export type ExchangeTradeCountAggregateOutputType = {
    id: number
    symbol: number
    price: number
    qty: number
    side: number
    createdAt: number
    _all: number
  }


  export type ExchangeTradeAvgAggregateInputType = {
    price?: true
    qty?: true
  }

  export type ExchangeTradeSumAggregateInputType = {
    price?: true
    qty?: true
  }

  export type ExchangeTradeMinAggregateInputType = {
    id?: true
    symbol?: true
    price?: true
    qty?: true
    side?: true
    createdAt?: true
  }

  export type ExchangeTradeMaxAggregateInputType = {
    id?: true
    symbol?: true
    price?: true
    qty?: true
    side?: true
    createdAt?: true
  }

  export type ExchangeTradeCountAggregateInputType = {
    id?: true
    symbol?: true
    price?: true
    qty?: true
    side?: true
    createdAt?: true
    _all?: true
  }

  export type ExchangeTradeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExchangeTrade to aggregate.
     */
    where?: ExchangeTradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeTrades to fetch.
     */
    orderBy?: ExchangeTradeOrderByWithRelationInput | ExchangeTradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExchangeTradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeTrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeTrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExchangeTrades
    **/
    _count?: true | ExchangeTradeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExchangeTradeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExchangeTradeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExchangeTradeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExchangeTradeMaxAggregateInputType
  }

  export type GetExchangeTradeAggregateType<T extends ExchangeTradeAggregateArgs> = {
        [P in keyof T & keyof AggregateExchangeTrade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExchangeTrade[P]>
      : GetScalarType<T[P], AggregateExchangeTrade[P]>
  }




  export type ExchangeTradeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExchangeTradeWhereInput
    orderBy?: ExchangeTradeOrderByWithAggregationInput | ExchangeTradeOrderByWithAggregationInput[]
    by: ExchangeTradeScalarFieldEnum[] | ExchangeTradeScalarFieldEnum
    having?: ExchangeTradeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExchangeTradeCountAggregateInputType | true
    _avg?: ExchangeTradeAvgAggregateInputType
    _sum?: ExchangeTradeSumAggregateInputType
    _min?: ExchangeTradeMinAggregateInputType
    _max?: ExchangeTradeMaxAggregateInputType
  }

  export type ExchangeTradeGroupByOutputType = {
    id: string
    symbol: string
    price: number
    qty: number
    side: string
    createdAt: Date
    _count: ExchangeTradeCountAggregateOutputType | null
    _avg: ExchangeTradeAvgAggregateOutputType | null
    _sum: ExchangeTradeSumAggregateOutputType | null
    _min: ExchangeTradeMinAggregateOutputType | null
    _max: ExchangeTradeMaxAggregateOutputType | null
  }

  type GetExchangeTradeGroupByPayload<T extends ExchangeTradeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExchangeTradeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExchangeTradeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExchangeTradeGroupByOutputType[P]>
            : GetScalarType<T[P], ExchangeTradeGroupByOutputType[P]>
        }
      >
    >


  export type ExchangeTradeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    price?: boolean
    qty?: boolean
    side?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["exchangeTrade"]>

  export type ExchangeTradeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    price?: boolean
    qty?: boolean
    side?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["exchangeTrade"]>

  export type ExchangeTradeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    price?: boolean
    qty?: boolean
    side?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["exchangeTrade"]>

  export type ExchangeTradeSelectScalar = {
    id?: boolean
    symbol?: boolean
    price?: boolean
    qty?: boolean
    side?: boolean
    createdAt?: boolean
  }

  export type ExchangeTradeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "symbol" | "price" | "qty" | "side" | "createdAt", ExtArgs["result"]["exchangeTrade"]>

  export type $ExchangeTradePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExchangeTrade"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      symbol: string
      price: number
      qty: number
      side: string
      createdAt: Date
    }, ExtArgs["result"]["exchangeTrade"]>
    composites: {}
  }

  type ExchangeTradeGetPayload<S extends boolean | null | undefined | ExchangeTradeDefaultArgs> = $Result.GetResult<Prisma.$ExchangeTradePayload, S>

  type ExchangeTradeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExchangeTradeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExchangeTradeCountAggregateInputType | true
    }

  export interface ExchangeTradeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExchangeTrade'], meta: { name: 'ExchangeTrade' } }
    /**
     * Find zero or one ExchangeTrade that matches the filter.
     * @param {ExchangeTradeFindUniqueArgs} args - Arguments to find a ExchangeTrade
     * @example
     * // Get one ExchangeTrade
     * const exchangeTrade = await prisma.exchangeTrade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExchangeTradeFindUniqueArgs>(args: SelectSubset<T, ExchangeTradeFindUniqueArgs<ExtArgs>>): Prisma__ExchangeTradeClient<$Result.GetResult<Prisma.$ExchangeTradePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExchangeTrade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExchangeTradeFindUniqueOrThrowArgs} args - Arguments to find a ExchangeTrade
     * @example
     * // Get one ExchangeTrade
     * const exchangeTrade = await prisma.exchangeTrade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExchangeTradeFindUniqueOrThrowArgs>(args: SelectSubset<T, ExchangeTradeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExchangeTradeClient<$Result.GetResult<Prisma.$ExchangeTradePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExchangeTrade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeTradeFindFirstArgs} args - Arguments to find a ExchangeTrade
     * @example
     * // Get one ExchangeTrade
     * const exchangeTrade = await prisma.exchangeTrade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExchangeTradeFindFirstArgs>(args?: SelectSubset<T, ExchangeTradeFindFirstArgs<ExtArgs>>): Prisma__ExchangeTradeClient<$Result.GetResult<Prisma.$ExchangeTradePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExchangeTrade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeTradeFindFirstOrThrowArgs} args - Arguments to find a ExchangeTrade
     * @example
     * // Get one ExchangeTrade
     * const exchangeTrade = await prisma.exchangeTrade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExchangeTradeFindFirstOrThrowArgs>(args?: SelectSubset<T, ExchangeTradeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExchangeTradeClient<$Result.GetResult<Prisma.$ExchangeTradePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExchangeTrades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeTradeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExchangeTrades
     * const exchangeTrades = await prisma.exchangeTrade.findMany()
     * 
     * // Get first 10 ExchangeTrades
     * const exchangeTrades = await prisma.exchangeTrade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exchangeTradeWithIdOnly = await prisma.exchangeTrade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExchangeTradeFindManyArgs>(args?: SelectSubset<T, ExchangeTradeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangeTradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExchangeTrade.
     * @param {ExchangeTradeCreateArgs} args - Arguments to create a ExchangeTrade.
     * @example
     * // Create one ExchangeTrade
     * const ExchangeTrade = await prisma.exchangeTrade.create({
     *   data: {
     *     // ... data to create a ExchangeTrade
     *   }
     * })
     * 
     */
    create<T extends ExchangeTradeCreateArgs>(args: SelectSubset<T, ExchangeTradeCreateArgs<ExtArgs>>): Prisma__ExchangeTradeClient<$Result.GetResult<Prisma.$ExchangeTradePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExchangeTrades.
     * @param {ExchangeTradeCreateManyArgs} args - Arguments to create many ExchangeTrades.
     * @example
     * // Create many ExchangeTrades
     * const exchangeTrade = await prisma.exchangeTrade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExchangeTradeCreateManyArgs>(args?: SelectSubset<T, ExchangeTradeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExchangeTrades and returns the data saved in the database.
     * @param {ExchangeTradeCreateManyAndReturnArgs} args - Arguments to create many ExchangeTrades.
     * @example
     * // Create many ExchangeTrades
     * const exchangeTrade = await prisma.exchangeTrade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExchangeTrades and only return the `id`
     * const exchangeTradeWithIdOnly = await prisma.exchangeTrade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExchangeTradeCreateManyAndReturnArgs>(args?: SelectSubset<T, ExchangeTradeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangeTradePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExchangeTrade.
     * @param {ExchangeTradeDeleteArgs} args - Arguments to delete one ExchangeTrade.
     * @example
     * // Delete one ExchangeTrade
     * const ExchangeTrade = await prisma.exchangeTrade.delete({
     *   where: {
     *     // ... filter to delete one ExchangeTrade
     *   }
     * })
     * 
     */
    delete<T extends ExchangeTradeDeleteArgs>(args: SelectSubset<T, ExchangeTradeDeleteArgs<ExtArgs>>): Prisma__ExchangeTradeClient<$Result.GetResult<Prisma.$ExchangeTradePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExchangeTrade.
     * @param {ExchangeTradeUpdateArgs} args - Arguments to update one ExchangeTrade.
     * @example
     * // Update one ExchangeTrade
     * const exchangeTrade = await prisma.exchangeTrade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExchangeTradeUpdateArgs>(args: SelectSubset<T, ExchangeTradeUpdateArgs<ExtArgs>>): Prisma__ExchangeTradeClient<$Result.GetResult<Prisma.$ExchangeTradePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExchangeTrades.
     * @param {ExchangeTradeDeleteManyArgs} args - Arguments to filter ExchangeTrades to delete.
     * @example
     * // Delete a few ExchangeTrades
     * const { count } = await prisma.exchangeTrade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExchangeTradeDeleteManyArgs>(args?: SelectSubset<T, ExchangeTradeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExchangeTrades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeTradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExchangeTrades
     * const exchangeTrade = await prisma.exchangeTrade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExchangeTradeUpdateManyArgs>(args: SelectSubset<T, ExchangeTradeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExchangeTrades and returns the data updated in the database.
     * @param {ExchangeTradeUpdateManyAndReturnArgs} args - Arguments to update many ExchangeTrades.
     * @example
     * // Update many ExchangeTrades
     * const exchangeTrade = await prisma.exchangeTrade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExchangeTrades and only return the `id`
     * const exchangeTradeWithIdOnly = await prisma.exchangeTrade.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExchangeTradeUpdateManyAndReturnArgs>(args: SelectSubset<T, ExchangeTradeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangeTradePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExchangeTrade.
     * @param {ExchangeTradeUpsertArgs} args - Arguments to update or create a ExchangeTrade.
     * @example
     * // Update or create a ExchangeTrade
     * const exchangeTrade = await prisma.exchangeTrade.upsert({
     *   create: {
     *     // ... data to create a ExchangeTrade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExchangeTrade we want to update
     *   }
     * })
     */
    upsert<T extends ExchangeTradeUpsertArgs>(args: SelectSubset<T, ExchangeTradeUpsertArgs<ExtArgs>>): Prisma__ExchangeTradeClient<$Result.GetResult<Prisma.$ExchangeTradePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExchangeTrades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeTradeCountArgs} args - Arguments to filter ExchangeTrades to count.
     * @example
     * // Count the number of ExchangeTrades
     * const count = await prisma.exchangeTrade.count({
     *   where: {
     *     // ... the filter for the ExchangeTrades we want to count
     *   }
     * })
    **/
    count<T extends ExchangeTradeCountArgs>(
      args?: Subset<T, ExchangeTradeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExchangeTradeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExchangeTrade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeTradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExchangeTradeAggregateArgs>(args: Subset<T, ExchangeTradeAggregateArgs>): Prisma.PrismaPromise<GetExchangeTradeAggregateType<T>>

    /**
     * Group by ExchangeTrade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeTradeGroupByArgs} args - Group by arguments.
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
      T extends ExchangeTradeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExchangeTradeGroupByArgs['orderBy'] }
        : { orderBy?: ExchangeTradeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExchangeTradeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExchangeTradeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExchangeTrade model
   */
  readonly fields: ExchangeTradeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExchangeTrade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExchangeTradeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ExchangeTrade model
   */
  interface ExchangeTradeFieldRefs {
    readonly id: FieldRef<"ExchangeTrade", 'String'>
    readonly symbol: FieldRef<"ExchangeTrade", 'String'>
    readonly price: FieldRef<"ExchangeTrade", 'Float'>
    readonly qty: FieldRef<"ExchangeTrade", 'Float'>
    readonly side: FieldRef<"ExchangeTrade", 'String'>
    readonly createdAt: FieldRef<"ExchangeTrade", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExchangeTrade findUnique
   */
  export type ExchangeTradeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeTrade
     */
    select?: ExchangeTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeTrade
     */
    omit?: ExchangeTradeOmit<ExtArgs> | null
    /**
     * Filter, which ExchangeTrade to fetch.
     */
    where: ExchangeTradeWhereUniqueInput
  }

  /**
   * ExchangeTrade findUniqueOrThrow
   */
  export type ExchangeTradeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeTrade
     */
    select?: ExchangeTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeTrade
     */
    omit?: ExchangeTradeOmit<ExtArgs> | null
    /**
     * Filter, which ExchangeTrade to fetch.
     */
    where: ExchangeTradeWhereUniqueInput
  }

  /**
   * ExchangeTrade findFirst
   */
  export type ExchangeTradeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeTrade
     */
    select?: ExchangeTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeTrade
     */
    omit?: ExchangeTradeOmit<ExtArgs> | null
    /**
     * Filter, which ExchangeTrade to fetch.
     */
    where?: ExchangeTradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeTrades to fetch.
     */
    orderBy?: ExchangeTradeOrderByWithRelationInput | ExchangeTradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExchangeTrades.
     */
    cursor?: ExchangeTradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeTrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeTrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExchangeTrades.
     */
    distinct?: ExchangeTradeScalarFieldEnum | ExchangeTradeScalarFieldEnum[]
  }

  /**
   * ExchangeTrade findFirstOrThrow
   */
  export type ExchangeTradeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeTrade
     */
    select?: ExchangeTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeTrade
     */
    omit?: ExchangeTradeOmit<ExtArgs> | null
    /**
     * Filter, which ExchangeTrade to fetch.
     */
    where?: ExchangeTradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeTrades to fetch.
     */
    orderBy?: ExchangeTradeOrderByWithRelationInput | ExchangeTradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExchangeTrades.
     */
    cursor?: ExchangeTradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeTrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeTrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExchangeTrades.
     */
    distinct?: ExchangeTradeScalarFieldEnum | ExchangeTradeScalarFieldEnum[]
  }

  /**
   * ExchangeTrade findMany
   */
  export type ExchangeTradeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeTrade
     */
    select?: ExchangeTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeTrade
     */
    omit?: ExchangeTradeOmit<ExtArgs> | null
    /**
     * Filter, which ExchangeTrades to fetch.
     */
    where?: ExchangeTradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeTrades to fetch.
     */
    orderBy?: ExchangeTradeOrderByWithRelationInput | ExchangeTradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExchangeTrades.
     */
    cursor?: ExchangeTradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeTrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeTrades.
     */
    skip?: number
    distinct?: ExchangeTradeScalarFieldEnum | ExchangeTradeScalarFieldEnum[]
  }

  /**
   * ExchangeTrade create
   */
  export type ExchangeTradeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeTrade
     */
    select?: ExchangeTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeTrade
     */
    omit?: ExchangeTradeOmit<ExtArgs> | null
    /**
     * The data needed to create a ExchangeTrade.
     */
    data: XOR<ExchangeTradeCreateInput, ExchangeTradeUncheckedCreateInput>
  }

  /**
   * ExchangeTrade createMany
   */
  export type ExchangeTradeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExchangeTrades.
     */
    data: ExchangeTradeCreateManyInput | ExchangeTradeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExchangeTrade createManyAndReturn
   */
  export type ExchangeTradeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeTrade
     */
    select?: ExchangeTradeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeTrade
     */
    omit?: ExchangeTradeOmit<ExtArgs> | null
    /**
     * The data used to create many ExchangeTrades.
     */
    data: ExchangeTradeCreateManyInput | ExchangeTradeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExchangeTrade update
   */
  export type ExchangeTradeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeTrade
     */
    select?: ExchangeTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeTrade
     */
    omit?: ExchangeTradeOmit<ExtArgs> | null
    /**
     * The data needed to update a ExchangeTrade.
     */
    data: XOR<ExchangeTradeUpdateInput, ExchangeTradeUncheckedUpdateInput>
    /**
     * Choose, which ExchangeTrade to update.
     */
    where: ExchangeTradeWhereUniqueInput
  }

  /**
   * ExchangeTrade updateMany
   */
  export type ExchangeTradeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExchangeTrades.
     */
    data: XOR<ExchangeTradeUpdateManyMutationInput, ExchangeTradeUncheckedUpdateManyInput>
    /**
     * Filter which ExchangeTrades to update
     */
    where?: ExchangeTradeWhereInput
    /**
     * Limit how many ExchangeTrades to update.
     */
    limit?: number
  }

  /**
   * ExchangeTrade updateManyAndReturn
   */
  export type ExchangeTradeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeTrade
     */
    select?: ExchangeTradeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeTrade
     */
    omit?: ExchangeTradeOmit<ExtArgs> | null
    /**
     * The data used to update ExchangeTrades.
     */
    data: XOR<ExchangeTradeUpdateManyMutationInput, ExchangeTradeUncheckedUpdateManyInput>
    /**
     * Filter which ExchangeTrades to update
     */
    where?: ExchangeTradeWhereInput
    /**
     * Limit how many ExchangeTrades to update.
     */
    limit?: number
  }

  /**
   * ExchangeTrade upsert
   */
  export type ExchangeTradeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeTrade
     */
    select?: ExchangeTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeTrade
     */
    omit?: ExchangeTradeOmit<ExtArgs> | null
    /**
     * The filter to search for the ExchangeTrade to update in case it exists.
     */
    where: ExchangeTradeWhereUniqueInput
    /**
     * In case the ExchangeTrade found by the `where` argument doesn't exist, create a new ExchangeTrade with this data.
     */
    create: XOR<ExchangeTradeCreateInput, ExchangeTradeUncheckedCreateInput>
    /**
     * In case the ExchangeTrade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExchangeTradeUpdateInput, ExchangeTradeUncheckedUpdateInput>
  }

  /**
   * ExchangeTrade delete
   */
  export type ExchangeTradeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeTrade
     */
    select?: ExchangeTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeTrade
     */
    omit?: ExchangeTradeOmit<ExtArgs> | null
    /**
     * Filter which ExchangeTrade to delete.
     */
    where: ExchangeTradeWhereUniqueInput
  }

  /**
   * ExchangeTrade deleteMany
   */
  export type ExchangeTradeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExchangeTrades to delete
     */
    where?: ExchangeTradeWhereInput
    /**
     * Limit how many ExchangeTrades to delete.
     */
    limit?: number
  }

  /**
   * ExchangeTrade without action
   */
  export type ExchangeTradeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeTrade
     */
    select?: ExchangeTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeTrade
     */
    omit?: ExchangeTradeOmit<ExtArgs> | null
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


  export const UserBalanceScalarFieldEnum: {
    userId: 'userId',
    asset: 'asset',
    available: 'available',
    locked: 'locked',
    updatedAt: 'updatedAt'
  };

  export type UserBalanceScalarFieldEnum = (typeof UserBalanceScalarFieldEnum)[keyof typeof UserBalanceScalarFieldEnum]


  export const ExchangeOrderScalarFieldEnum: {
    orderId: 'orderId',
    userId: 'userId',
    side: 'side',
    type: 'type',
    symbol: 'symbol',
    price: 'price',
    qty: 'qty',
    filledQty: 'filledQty',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExchangeOrderScalarFieldEnum = (typeof ExchangeOrderScalarFieldEnum)[keyof typeof ExchangeOrderScalarFieldEnum]


  export const ExchangeFillScalarFieldEnum: {
    fillId: 'fillId',
    symbol: 'symbol',
    price: 'price',
    qty: 'qty',
    buyOrderId: 'buyOrderId',
    sellOrderId: 'sellOrderId',
    createdAt: 'createdAt'
  };

  export type ExchangeFillScalarFieldEnum = (typeof ExchangeFillScalarFieldEnum)[keyof typeof ExchangeFillScalarFieldEnum]


  export const ExchangeTradeScalarFieldEnum: {
    id: 'id',
    symbol: 'symbol',
    price: 'price',
    qty: 'qty',
    side: 'side',
    createdAt: 'createdAt'
  };

  export type ExchangeTradeScalarFieldEnum = (typeof ExchangeTradeScalarFieldEnum)[keyof typeof ExchangeTradeScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserBalanceWhereInput = {
    AND?: UserBalanceWhereInput | UserBalanceWhereInput[]
    OR?: UserBalanceWhereInput[]
    NOT?: UserBalanceWhereInput | UserBalanceWhereInput[]
    userId?: StringFilter<"UserBalance"> | string
    asset?: StringFilter<"UserBalance"> | string
    available?: FloatFilter<"UserBalance"> | number
    locked?: FloatFilter<"UserBalance"> | number
    updatedAt?: DateTimeFilter<"UserBalance"> | Date | string
  }

  export type UserBalanceOrderByWithRelationInput = {
    userId?: SortOrder
    asset?: SortOrder
    available?: SortOrder
    locked?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserBalanceWhereUniqueInput = Prisma.AtLeast<{
    userId_asset?: UserBalanceUserIdAssetCompoundUniqueInput
    AND?: UserBalanceWhereInput | UserBalanceWhereInput[]
    OR?: UserBalanceWhereInput[]
    NOT?: UserBalanceWhereInput | UserBalanceWhereInput[]
    userId?: StringFilter<"UserBalance"> | string
    asset?: StringFilter<"UserBalance"> | string
    available?: FloatFilter<"UserBalance"> | number
    locked?: FloatFilter<"UserBalance"> | number
    updatedAt?: DateTimeFilter<"UserBalance"> | Date | string
  }, "userId_asset">

  export type UserBalanceOrderByWithAggregationInput = {
    userId?: SortOrder
    asset?: SortOrder
    available?: SortOrder
    locked?: SortOrder
    updatedAt?: SortOrder
    _count?: UserBalanceCountOrderByAggregateInput
    _avg?: UserBalanceAvgOrderByAggregateInput
    _max?: UserBalanceMaxOrderByAggregateInput
    _min?: UserBalanceMinOrderByAggregateInput
    _sum?: UserBalanceSumOrderByAggregateInput
  }

  export type UserBalanceScalarWhereWithAggregatesInput = {
    AND?: UserBalanceScalarWhereWithAggregatesInput | UserBalanceScalarWhereWithAggregatesInput[]
    OR?: UserBalanceScalarWhereWithAggregatesInput[]
    NOT?: UserBalanceScalarWhereWithAggregatesInput | UserBalanceScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserBalance"> | string
    asset?: StringWithAggregatesFilter<"UserBalance"> | string
    available?: FloatWithAggregatesFilter<"UserBalance"> | number
    locked?: FloatWithAggregatesFilter<"UserBalance"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"UserBalance"> | Date | string
  }

  export type ExchangeOrderWhereInput = {
    AND?: ExchangeOrderWhereInput | ExchangeOrderWhereInput[]
    OR?: ExchangeOrderWhereInput[]
    NOT?: ExchangeOrderWhereInput | ExchangeOrderWhereInput[]
    orderId?: StringFilter<"ExchangeOrder"> | string
    userId?: StringFilter<"ExchangeOrder"> | string
    side?: StringFilter<"ExchangeOrder"> | string
    type?: StringFilter<"ExchangeOrder"> | string
    symbol?: StringFilter<"ExchangeOrder"> | string
    price?: FloatNullableFilter<"ExchangeOrder"> | number | null
    qty?: FloatFilter<"ExchangeOrder"> | number
    filledQty?: FloatFilter<"ExchangeOrder"> | number
    status?: StringFilter<"ExchangeOrder"> | string
    createdAt?: DateTimeFilter<"ExchangeOrder"> | Date | string
    updatedAt?: DateTimeFilter<"ExchangeOrder"> | Date | string
    buyFills?: ExchangeFillListRelationFilter
    sellFills?: ExchangeFillListRelationFilter
  }

  export type ExchangeOrderOrderByWithRelationInput = {
    orderId?: SortOrder
    userId?: SortOrder
    side?: SortOrder
    type?: SortOrder
    symbol?: SortOrder
    price?: SortOrderInput | SortOrder
    qty?: SortOrder
    filledQty?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    buyFills?: ExchangeFillOrderByRelationAggregateInput
    sellFills?: ExchangeFillOrderByRelationAggregateInput
  }

  export type ExchangeOrderWhereUniqueInput = Prisma.AtLeast<{
    orderId?: string
    AND?: ExchangeOrderWhereInput | ExchangeOrderWhereInput[]
    OR?: ExchangeOrderWhereInput[]
    NOT?: ExchangeOrderWhereInput | ExchangeOrderWhereInput[]
    userId?: StringFilter<"ExchangeOrder"> | string
    side?: StringFilter<"ExchangeOrder"> | string
    type?: StringFilter<"ExchangeOrder"> | string
    symbol?: StringFilter<"ExchangeOrder"> | string
    price?: FloatNullableFilter<"ExchangeOrder"> | number | null
    qty?: FloatFilter<"ExchangeOrder"> | number
    filledQty?: FloatFilter<"ExchangeOrder"> | number
    status?: StringFilter<"ExchangeOrder"> | string
    createdAt?: DateTimeFilter<"ExchangeOrder"> | Date | string
    updatedAt?: DateTimeFilter<"ExchangeOrder"> | Date | string
    buyFills?: ExchangeFillListRelationFilter
    sellFills?: ExchangeFillListRelationFilter
  }, "orderId">

  export type ExchangeOrderOrderByWithAggregationInput = {
    orderId?: SortOrder
    userId?: SortOrder
    side?: SortOrder
    type?: SortOrder
    symbol?: SortOrder
    price?: SortOrderInput | SortOrder
    qty?: SortOrder
    filledQty?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExchangeOrderCountOrderByAggregateInput
    _avg?: ExchangeOrderAvgOrderByAggregateInput
    _max?: ExchangeOrderMaxOrderByAggregateInput
    _min?: ExchangeOrderMinOrderByAggregateInput
    _sum?: ExchangeOrderSumOrderByAggregateInput
  }

  export type ExchangeOrderScalarWhereWithAggregatesInput = {
    AND?: ExchangeOrderScalarWhereWithAggregatesInput | ExchangeOrderScalarWhereWithAggregatesInput[]
    OR?: ExchangeOrderScalarWhereWithAggregatesInput[]
    NOT?: ExchangeOrderScalarWhereWithAggregatesInput | ExchangeOrderScalarWhereWithAggregatesInput[]
    orderId?: StringWithAggregatesFilter<"ExchangeOrder"> | string
    userId?: StringWithAggregatesFilter<"ExchangeOrder"> | string
    side?: StringWithAggregatesFilter<"ExchangeOrder"> | string
    type?: StringWithAggregatesFilter<"ExchangeOrder"> | string
    symbol?: StringWithAggregatesFilter<"ExchangeOrder"> | string
    price?: FloatNullableWithAggregatesFilter<"ExchangeOrder"> | number | null
    qty?: FloatWithAggregatesFilter<"ExchangeOrder"> | number
    filledQty?: FloatWithAggregatesFilter<"ExchangeOrder"> | number
    status?: StringWithAggregatesFilter<"ExchangeOrder"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ExchangeOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ExchangeOrder"> | Date | string
  }

  export type ExchangeFillWhereInput = {
    AND?: ExchangeFillWhereInput | ExchangeFillWhereInput[]
    OR?: ExchangeFillWhereInput[]
    NOT?: ExchangeFillWhereInput | ExchangeFillWhereInput[]
    fillId?: StringFilter<"ExchangeFill"> | string
    symbol?: StringFilter<"ExchangeFill"> | string
    price?: FloatFilter<"ExchangeFill"> | number
    qty?: FloatFilter<"ExchangeFill"> | number
    buyOrderId?: StringFilter<"ExchangeFill"> | string
    sellOrderId?: StringFilter<"ExchangeFill"> | string
    createdAt?: DateTimeFilter<"ExchangeFill"> | Date | string
    buyOrder?: XOR<ExchangeOrderScalarRelationFilter, ExchangeOrderWhereInput>
    sellOrder?: XOR<ExchangeOrderScalarRelationFilter, ExchangeOrderWhereInput>
  }

  export type ExchangeFillOrderByWithRelationInput = {
    fillId?: SortOrder
    symbol?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    buyOrderId?: SortOrder
    sellOrderId?: SortOrder
    createdAt?: SortOrder
    buyOrder?: ExchangeOrderOrderByWithRelationInput
    sellOrder?: ExchangeOrderOrderByWithRelationInput
  }

  export type ExchangeFillWhereUniqueInput = Prisma.AtLeast<{
    fillId?: string
    AND?: ExchangeFillWhereInput | ExchangeFillWhereInput[]
    OR?: ExchangeFillWhereInput[]
    NOT?: ExchangeFillWhereInput | ExchangeFillWhereInput[]
    symbol?: StringFilter<"ExchangeFill"> | string
    price?: FloatFilter<"ExchangeFill"> | number
    qty?: FloatFilter<"ExchangeFill"> | number
    buyOrderId?: StringFilter<"ExchangeFill"> | string
    sellOrderId?: StringFilter<"ExchangeFill"> | string
    createdAt?: DateTimeFilter<"ExchangeFill"> | Date | string
    buyOrder?: XOR<ExchangeOrderScalarRelationFilter, ExchangeOrderWhereInput>
    sellOrder?: XOR<ExchangeOrderScalarRelationFilter, ExchangeOrderWhereInput>
  }, "fillId">

  export type ExchangeFillOrderByWithAggregationInput = {
    fillId?: SortOrder
    symbol?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    buyOrderId?: SortOrder
    sellOrderId?: SortOrder
    createdAt?: SortOrder
    _count?: ExchangeFillCountOrderByAggregateInput
    _avg?: ExchangeFillAvgOrderByAggregateInput
    _max?: ExchangeFillMaxOrderByAggregateInput
    _min?: ExchangeFillMinOrderByAggregateInput
    _sum?: ExchangeFillSumOrderByAggregateInput
  }

  export type ExchangeFillScalarWhereWithAggregatesInput = {
    AND?: ExchangeFillScalarWhereWithAggregatesInput | ExchangeFillScalarWhereWithAggregatesInput[]
    OR?: ExchangeFillScalarWhereWithAggregatesInput[]
    NOT?: ExchangeFillScalarWhereWithAggregatesInput | ExchangeFillScalarWhereWithAggregatesInput[]
    fillId?: StringWithAggregatesFilter<"ExchangeFill"> | string
    symbol?: StringWithAggregatesFilter<"ExchangeFill"> | string
    price?: FloatWithAggregatesFilter<"ExchangeFill"> | number
    qty?: FloatWithAggregatesFilter<"ExchangeFill"> | number
    buyOrderId?: StringWithAggregatesFilter<"ExchangeFill"> | string
    sellOrderId?: StringWithAggregatesFilter<"ExchangeFill"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ExchangeFill"> | Date | string
  }

  export type ExchangeTradeWhereInput = {
    AND?: ExchangeTradeWhereInput | ExchangeTradeWhereInput[]
    OR?: ExchangeTradeWhereInput[]
    NOT?: ExchangeTradeWhereInput | ExchangeTradeWhereInput[]
    id?: StringFilter<"ExchangeTrade"> | string
    symbol?: StringFilter<"ExchangeTrade"> | string
    price?: FloatFilter<"ExchangeTrade"> | number
    qty?: FloatFilter<"ExchangeTrade"> | number
    side?: StringFilter<"ExchangeTrade"> | string
    createdAt?: DateTimeFilter<"ExchangeTrade"> | Date | string
  }

  export type ExchangeTradeOrderByWithRelationInput = {
    id?: SortOrder
    symbol?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    side?: SortOrder
    createdAt?: SortOrder
  }

  export type ExchangeTradeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExchangeTradeWhereInput | ExchangeTradeWhereInput[]
    OR?: ExchangeTradeWhereInput[]
    NOT?: ExchangeTradeWhereInput | ExchangeTradeWhereInput[]
    symbol?: StringFilter<"ExchangeTrade"> | string
    price?: FloatFilter<"ExchangeTrade"> | number
    qty?: FloatFilter<"ExchangeTrade"> | number
    side?: StringFilter<"ExchangeTrade"> | string
    createdAt?: DateTimeFilter<"ExchangeTrade"> | Date | string
  }, "id">

  export type ExchangeTradeOrderByWithAggregationInput = {
    id?: SortOrder
    symbol?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    side?: SortOrder
    createdAt?: SortOrder
    _count?: ExchangeTradeCountOrderByAggregateInput
    _avg?: ExchangeTradeAvgOrderByAggregateInput
    _max?: ExchangeTradeMaxOrderByAggregateInput
    _min?: ExchangeTradeMinOrderByAggregateInput
    _sum?: ExchangeTradeSumOrderByAggregateInput
  }

  export type ExchangeTradeScalarWhereWithAggregatesInput = {
    AND?: ExchangeTradeScalarWhereWithAggregatesInput | ExchangeTradeScalarWhereWithAggregatesInput[]
    OR?: ExchangeTradeScalarWhereWithAggregatesInput[]
    NOT?: ExchangeTradeScalarWhereWithAggregatesInput | ExchangeTradeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExchangeTrade"> | string
    symbol?: StringWithAggregatesFilter<"ExchangeTrade"> | string
    price?: FloatWithAggregatesFilter<"ExchangeTrade"> | number
    qty?: FloatWithAggregatesFilter<"ExchangeTrade"> | number
    side?: StringWithAggregatesFilter<"ExchangeTrade"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ExchangeTrade"> | Date | string
  }

  export type UserBalanceCreateInput = {
    userId: string
    asset: string
    available?: number
    locked?: number
    updatedAt?: Date | string
  }

  export type UserBalanceUncheckedCreateInput = {
    userId: string
    asset: string
    available?: number
    locked?: number
    updatedAt?: Date | string
  }

  export type UserBalanceUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    available?: FloatFieldUpdateOperationsInput | number
    locked?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBalanceUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    available?: FloatFieldUpdateOperationsInput | number
    locked?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBalanceCreateManyInput = {
    userId: string
    asset: string
    available?: number
    locked?: number
    updatedAt?: Date | string
  }

  export type UserBalanceUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    available?: FloatFieldUpdateOperationsInput | number
    locked?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBalanceUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    available?: FloatFieldUpdateOperationsInput | number
    locked?: FloatFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeOrderCreateInput = {
    orderId: string
    userId: string
    side: string
    type: string
    symbol: string
    price?: number | null
    qty: number
    filledQty?: number
    status: string
    createdAt: Date | string
    updatedAt?: Date | string
    buyFills?: ExchangeFillCreateNestedManyWithoutBuyOrderInput
    sellFills?: ExchangeFillCreateNestedManyWithoutSellOrderInput
  }

  export type ExchangeOrderUncheckedCreateInput = {
    orderId: string
    userId: string
    side: string
    type: string
    symbol: string
    price?: number | null
    qty: number
    filledQty?: number
    status: string
    createdAt: Date | string
    updatedAt?: Date | string
    buyFills?: ExchangeFillUncheckedCreateNestedManyWithoutBuyOrderInput
    sellFills?: ExchangeFillUncheckedCreateNestedManyWithoutSellOrderInput
  }

  export type ExchangeOrderUpdateInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    qty?: FloatFieldUpdateOperationsInput | number
    filledQty?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyFills?: ExchangeFillUpdateManyWithoutBuyOrderNestedInput
    sellFills?: ExchangeFillUpdateManyWithoutSellOrderNestedInput
  }

  export type ExchangeOrderUncheckedUpdateInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    qty?: FloatFieldUpdateOperationsInput | number
    filledQty?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyFills?: ExchangeFillUncheckedUpdateManyWithoutBuyOrderNestedInput
    sellFills?: ExchangeFillUncheckedUpdateManyWithoutSellOrderNestedInput
  }

  export type ExchangeOrderCreateManyInput = {
    orderId: string
    userId: string
    side: string
    type: string
    symbol: string
    price?: number | null
    qty: number
    filledQty?: number
    status: string
    createdAt: Date | string
    updatedAt?: Date | string
  }

  export type ExchangeOrderUpdateManyMutationInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    qty?: FloatFieldUpdateOperationsInput | number
    filledQty?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeOrderUncheckedUpdateManyInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    qty?: FloatFieldUpdateOperationsInput | number
    filledQty?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeFillCreateInput = {
    fillId: string
    symbol: string
    price: number
    qty: number
    createdAt: Date | string
    buyOrder: ExchangeOrderCreateNestedOneWithoutBuyFillsInput
    sellOrder: ExchangeOrderCreateNestedOneWithoutSellFillsInput
  }

  export type ExchangeFillUncheckedCreateInput = {
    fillId: string
    symbol: string
    price: number
    qty: number
    buyOrderId: string
    sellOrderId: string
    createdAt: Date | string
  }

  export type ExchangeFillUpdateInput = {
    fillId?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    qty?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyOrder?: ExchangeOrderUpdateOneRequiredWithoutBuyFillsNestedInput
    sellOrder?: ExchangeOrderUpdateOneRequiredWithoutSellFillsNestedInput
  }

  export type ExchangeFillUncheckedUpdateInput = {
    fillId?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    qty?: FloatFieldUpdateOperationsInput | number
    buyOrderId?: StringFieldUpdateOperationsInput | string
    sellOrderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeFillCreateManyInput = {
    fillId: string
    symbol: string
    price: number
    qty: number
    buyOrderId: string
    sellOrderId: string
    createdAt: Date | string
  }

  export type ExchangeFillUpdateManyMutationInput = {
    fillId?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    qty?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeFillUncheckedUpdateManyInput = {
    fillId?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    qty?: FloatFieldUpdateOperationsInput | number
    buyOrderId?: StringFieldUpdateOperationsInput | string
    sellOrderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeTradeCreateInput = {
    id?: string
    symbol: string
    price: number
    qty: number
    side: string
    createdAt: Date | string
  }

  export type ExchangeTradeUncheckedCreateInput = {
    id?: string
    symbol: string
    price: number
    qty: number
    side: string
    createdAt: Date | string
  }

  export type ExchangeTradeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    qty?: FloatFieldUpdateOperationsInput | number
    side?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeTradeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    qty?: FloatFieldUpdateOperationsInput | number
    side?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeTradeCreateManyInput = {
    id?: string
    symbol: string
    price: number
    qty: number
    side: string
    createdAt: Date | string
  }

  export type ExchangeTradeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    qty?: FloatFieldUpdateOperationsInput | number
    side?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeTradeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    qty?: FloatFieldUpdateOperationsInput | number
    side?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UserBalanceUserIdAssetCompoundUniqueInput = {
    userId: string
    asset: string
  }

  export type UserBalanceCountOrderByAggregateInput = {
    userId?: SortOrder
    asset?: SortOrder
    available?: SortOrder
    locked?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserBalanceAvgOrderByAggregateInput = {
    available?: SortOrder
    locked?: SortOrder
  }

  export type UserBalanceMaxOrderByAggregateInput = {
    userId?: SortOrder
    asset?: SortOrder
    available?: SortOrder
    locked?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserBalanceMinOrderByAggregateInput = {
    userId?: SortOrder
    asset?: SortOrder
    available?: SortOrder
    locked?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserBalanceSumOrderByAggregateInput = {
    available?: SortOrder
    locked?: SortOrder
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

  export type ExchangeFillListRelationFilter = {
    every?: ExchangeFillWhereInput
    some?: ExchangeFillWhereInput
    none?: ExchangeFillWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ExchangeFillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExchangeOrderCountOrderByAggregateInput = {
    orderId?: SortOrder
    userId?: SortOrder
    side?: SortOrder
    type?: SortOrder
    symbol?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    filledQty?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExchangeOrderAvgOrderByAggregateInput = {
    price?: SortOrder
    qty?: SortOrder
    filledQty?: SortOrder
  }

  export type ExchangeOrderMaxOrderByAggregateInput = {
    orderId?: SortOrder
    userId?: SortOrder
    side?: SortOrder
    type?: SortOrder
    symbol?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    filledQty?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExchangeOrderMinOrderByAggregateInput = {
    orderId?: SortOrder
    userId?: SortOrder
    side?: SortOrder
    type?: SortOrder
    symbol?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    filledQty?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExchangeOrderSumOrderByAggregateInput = {
    price?: SortOrder
    qty?: SortOrder
    filledQty?: SortOrder
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

  export type ExchangeOrderScalarRelationFilter = {
    is?: ExchangeOrderWhereInput
    isNot?: ExchangeOrderWhereInput
  }

  export type ExchangeFillCountOrderByAggregateInput = {
    fillId?: SortOrder
    symbol?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    buyOrderId?: SortOrder
    sellOrderId?: SortOrder
    createdAt?: SortOrder
  }

  export type ExchangeFillAvgOrderByAggregateInput = {
    price?: SortOrder
    qty?: SortOrder
  }

  export type ExchangeFillMaxOrderByAggregateInput = {
    fillId?: SortOrder
    symbol?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    buyOrderId?: SortOrder
    sellOrderId?: SortOrder
    createdAt?: SortOrder
  }

  export type ExchangeFillMinOrderByAggregateInput = {
    fillId?: SortOrder
    symbol?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    buyOrderId?: SortOrder
    sellOrderId?: SortOrder
    createdAt?: SortOrder
  }

  export type ExchangeFillSumOrderByAggregateInput = {
    price?: SortOrder
    qty?: SortOrder
  }

  export type ExchangeTradeCountOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    side?: SortOrder
    createdAt?: SortOrder
  }

  export type ExchangeTradeAvgOrderByAggregateInput = {
    price?: SortOrder
    qty?: SortOrder
  }

  export type ExchangeTradeMaxOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    side?: SortOrder
    createdAt?: SortOrder
  }

  export type ExchangeTradeMinOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    side?: SortOrder
    createdAt?: SortOrder
  }

  export type ExchangeTradeSumOrderByAggregateInput = {
    price?: SortOrder
    qty?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ExchangeFillCreateNestedManyWithoutBuyOrderInput = {
    create?: XOR<ExchangeFillCreateWithoutBuyOrderInput, ExchangeFillUncheckedCreateWithoutBuyOrderInput> | ExchangeFillCreateWithoutBuyOrderInput[] | ExchangeFillUncheckedCreateWithoutBuyOrderInput[]
    connectOrCreate?: ExchangeFillCreateOrConnectWithoutBuyOrderInput | ExchangeFillCreateOrConnectWithoutBuyOrderInput[]
    createMany?: ExchangeFillCreateManyBuyOrderInputEnvelope
    connect?: ExchangeFillWhereUniqueInput | ExchangeFillWhereUniqueInput[]
  }

  export type ExchangeFillCreateNestedManyWithoutSellOrderInput = {
    create?: XOR<ExchangeFillCreateWithoutSellOrderInput, ExchangeFillUncheckedCreateWithoutSellOrderInput> | ExchangeFillCreateWithoutSellOrderInput[] | ExchangeFillUncheckedCreateWithoutSellOrderInput[]
    connectOrCreate?: ExchangeFillCreateOrConnectWithoutSellOrderInput | ExchangeFillCreateOrConnectWithoutSellOrderInput[]
    createMany?: ExchangeFillCreateManySellOrderInputEnvelope
    connect?: ExchangeFillWhereUniqueInput | ExchangeFillWhereUniqueInput[]
  }

  export type ExchangeFillUncheckedCreateNestedManyWithoutBuyOrderInput = {
    create?: XOR<ExchangeFillCreateWithoutBuyOrderInput, ExchangeFillUncheckedCreateWithoutBuyOrderInput> | ExchangeFillCreateWithoutBuyOrderInput[] | ExchangeFillUncheckedCreateWithoutBuyOrderInput[]
    connectOrCreate?: ExchangeFillCreateOrConnectWithoutBuyOrderInput | ExchangeFillCreateOrConnectWithoutBuyOrderInput[]
    createMany?: ExchangeFillCreateManyBuyOrderInputEnvelope
    connect?: ExchangeFillWhereUniqueInput | ExchangeFillWhereUniqueInput[]
  }

  export type ExchangeFillUncheckedCreateNestedManyWithoutSellOrderInput = {
    create?: XOR<ExchangeFillCreateWithoutSellOrderInput, ExchangeFillUncheckedCreateWithoutSellOrderInput> | ExchangeFillCreateWithoutSellOrderInput[] | ExchangeFillUncheckedCreateWithoutSellOrderInput[]
    connectOrCreate?: ExchangeFillCreateOrConnectWithoutSellOrderInput | ExchangeFillCreateOrConnectWithoutSellOrderInput[]
    createMany?: ExchangeFillCreateManySellOrderInputEnvelope
    connect?: ExchangeFillWhereUniqueInput | ExchangeFillWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ExchangeFillUpdateManyWithoutBuyOrderNestedInput = {
    create?: XOR<ExchangeFillCreateWithoutBuyOrderInput, ExchangeFillUncheckedCreateWithoutBuyOrderInput> | ExchangeFillCreateWithoutBuyOrderInput[] | ExchangeFillUncheckedCreateWithoutBuyOrderInput[]
    connectOrCreate?: ExchangeFillCreateOrConnectWithoutBuyOrderInput | ExchangeFillCreateOrConnectWithoutBuyOrderInput[]
    upsert?: ExchangeFillUpsertWithWhereUniqueWithoutBuyOrderInput | ExchangeFillUpsertWithWhereUniqueWithoutBuyOrderInput[]
    createMany?: ExchangeFillCreateManyBuyOrderInputEnvelope
    set?: ExchangeFillWhereUniqueInput | ExchangeFillWhereUniqueInput[]
    disconnect?: ExchangeFillWhereUniqueInput | ExchangeFillWhereUniqueInput[]
    delete?: ExchangeFillWhereUniqueInput | ExchangeFillWhereUniqueInput[]
    connect?: ExchangeFillWhereUniqueInput | ExchangeFillWhereUniqueInput[]
    update?: ExchangeFillUpdateWithWhereUniqueWithoutBuyOrderInput | ExchangeFillUpdateWithWhereUniqueWithoutBuyOrderInput[]
    updateMany?: ExchangeFillUpdateManyWithWhereWithoutBuyOrderInput | ExchangeFillUpdateManyWithWhereWithoutBuyOrderInput[]
    deleteMany?: ExchangeFillScalarWhereInput | ExchangeFillScalarWhereInput[]
  }

  export type ExchangeFillUpdateManyWithoutSellOrderNestedInput = {
    create?: XOR<ExchangeFillCreateWithoutSellOrderInput, ExchangeFillUncheckedCreateWithoutSellOrderInput> | ExchangeFillCreateWithoutSellOrderInput[] | ExchangeFillUncheckedCreateWithoutSellOrderInput[]
    connectOrCreate?: ExchangeFillCreateOrConnectWithoutSellOrderInput | ExchangeFillCreateOrConnectWithoutSellOrderInput[]
    upsert?: ExchangeFillUpsertWithWhereUniqueWithoutSellOrderInput | ExchangeFillUpsertWithWhereUniqueWithoutSellOrderInput[]
    createMany?: ExchangeFillCreateManySellOrderInputEnvelope
    set?: ExchangeFillWhereUniqueInput | ExchangeFillWhereUniqueInput[]
    disconnect?: ExchangeFillWhereUniqueInput | ExchangeFillWhereUniqueInput[]
    delete?: ExchangeFillWhereUniqueInput | ExchangeFillWhereUniqueInput[]
    connect?: ExchangeFillWhereUniqueInput | ExchangeFillWhereUniqueInput[]
    update?: ExchangeFillUpdateWithWhereUniqueWithoutSellOrderInput | ExchangeFillUpdateWithWhereUniqueWithoutSellOrderInput[]
    updateMany?: ExchangeFillUpdateManyWithWhereWithoutSellOrderInput | ExchangeFillUpdateManyWithWhereWithoutSellOrderInput[]
    deleteMany?: ExchangeFillScalarWhereInput | ExchangeFillScalarWhereInput[]
  }

  export type ExchangeFillUncheckedUpdateManyWithoutBuyOrderNestedInput = {
    create?: XOR<ExchangeFillCreateWithoutBuyOrderInput, ExchangeFillUncheckedCreateWithoutBuyOrderInput> | ExchangeFillCreateWithoutBuyOrderInput[] | ExchangeFillUncheckedCreateWithoutBuyOrderInput[]
    connectOrCreate?: ExchangeFillCreateOrConnectWithoutBuyOrderInput | ExchangeFillCreateOrConnectWithoutBuyOrderInput[]
    upsert?: ExchangeFillUpsertWithWhereUniqueWithoutBuyOrderInput | ExchangeFillUpsertWithWhereUniqueWithoutBuyOrderInput[]
    createMany?: ExchangeFillCreateManyBuyOrderInputEnvelope
    set?: ExchangeFillWhereUniqueInput | ExchangeFillWhereUniqueInput[]
    disconnect?: ExchangeFillWhereUniqueInput | ExchangeFillWhereUniqueInput[]
    delete?: ExchangeFillWhereUniqueInput | ExchangeFillWhereUniqueInput[]
    connect?: ExchangeFillWhereUniqueInput | ExchangeFillWhereUniqueInput[]
    update?: ExchangeFillUpdateWithWhereUniqueWithoutBuyOrderInput | ExchangeFillUpdateWithWhereUniqueWithoutBuyOrderInput[]
    updateMany?: ExchangeFillUpdateManyWithWhereWithoutBuyOrderInput | ExchangeFillUpdateManyWithWhereWithoutBuyOrderInput[]
    deleteMany?: ExchangeFillScalarWhereInput | ExchangeFillScalarWhereInput[]
  }

  export type ExchangeFillUncheckedUpdateManyWithoutSellOrderNestedInput = {
    create?: XOR<ExchangeFillCreateWithoutSellOrderInput, ExchangeFillUncheckedCreateWithoutSellOrderInput> | ExchangeFillCreateWithoutSellOrderInput[] | ExchangeFillUncheckedCreateWithoutSellOrderInput[]
    connectOrCreate?: ExchangeFillCreateOrConnectWithoutSellOrderInput | ExchangeFillCreateOrConnectWithoutSellOrderInput[]
    upsert?: ExchangeFillUpsertWithWhereUniqueWithoutSellOrderInput | ExchangeFillUpsertWithWhereUniqueWithoutSellOrderInput[]
    createMany?: ExchangeFillCreateManySellOrderInputEnvelope
    set?: ExchangeFillWhereUniqueInput | ExchangeFillWhereUniqueInput[]
    disconnect?: ExchangeFillWhereUniqueInput | ExchangeFillWhereUniqueInput[]
    delete?: ExchangeFillWhereUniqueInput | ExchangeFillWhereUniqueInput[]
    connect?: ExchangeFillWhereUniqueInput | ExchangeFillWhereUniqueInput[]
    update?: ExchangeFillUpdateWithWhereUniqueWithoutSellOrderInput | ExchangeFillUpdateWithWhereUniqueWithoutSellOrderInput[]
    updateMany?: ExchangeFillUpdateManyWithWhereWithoutSellOrderInput | ExchangeFillUpdateManyWithWhereWithoutSellOrderInput[]
    deleteMany?: ExchangeFillScalarWhereInput | ExchangeFillScalarWhereInput[]
  }

  export type ExchangeOrderCreateNestedOneWithoutBuyFillsInput = {
    create?: XOR<ExchangeOrderCreateWithoutBuyFillsInput, ExchangeOrderUncheckedCreateWithoutBuyFillsInput>
    connectOrCreate?: ExchangeOrderCreateOrConnectWithoutBuyFillsInput
    connect?: ExchangeOrderWhereUniqueInput
  }

  export type ExchangeOrderCreateNestedOneWithoutSellFillsInput = {
    create?: XOR<ExchangeOrderCreateWithoutSellFillsInput, ExchangeOrderUncheckedCreateWithoutSellFillsInput>
    connectOrCreate?: ExchangeOrderCreateOrConnectWithoutSellFillsInput
    connect?: ExchangeOrderWhereUniqueInput
  }

  export type ExchangeOrderUpdateOneRequiredWithoutBuyFillsNestedInput = {
    create?: XOR<ExchangeOrderCreateWithoutBuyFillsInput, ExchangeOrderUncheckedCreateWithoutBuyFillsInput>
    connectOrCreate?: ExchangeOrderCreateOrConnectWithoutBuyFillsInput
    upsert?: ExchangeOrderUpsertWithoutBuyFillsInput
    connect?: ExchangeOrderWhereUniqueInput
    update?: XOR<XOR<ExchangeOrderUpdateToOneWithWhereWithoutBuyFillsInput, ExchangeOrderUpdateWithoutBuyFillsInput>, ExchangeOrderUncheckedUpdateWithoutBuyFillsInput>
  }

  export type ExchangeOrderUpdateOneRequiredWithoutSellFillsNestedInput = {
    create?: XOR<ExchangeOrderCreateWithoutSellFillsInput, ExchangeOrderUncheckedCreateWithoutSellFillsInput>
    connectOrCreate?: ExchangeOrderCreateOrConnectWithoutSellFillsInput
    upsert?: ExchangeOrderUpsertWithoutSellFillsInput
    connect?: ExchangeOrderWhereUniqueInput
    update?: XOR<XOR<ExchangeOrderUpdateToOneWithWhereWithoutSellFillsInput, ExchangeOrderUpdateWithoutSellFillsInput>, ExchangeOrderUncheckedUpdateWithoutSellFillsInput>
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

  export type ExchangeFillCreateWithoutBuyOrderInput = {
    fillId: string
    symbol: string
    price: number
    qty: number
    createdAt: Date | string
    sellOrder: ExchangeOrderCreateNestedOneWithoutSellFillsInput
  }

  export type ExchangeFillUncheckedCreateWithoutBuyOrderInput = {
    fillId: string
    symbol: string
    price: number
    qty: number
    sellOrderId: string
    createdAt: Date | string
  }

  export type ExchangeFillCreateOrConnectWithoutBuyOrderInput = {
    where: ExchangeFillWhereUniqueInput
    create: XOR<ExchangeFillCreateWithoutBuyOrderInput, ExchangeFillUncheckedCreateWithoutBuyOrderInput>
  }

  export type ExchangeFillCreateManyBuyOrderInputEnvelope = {
    data: ExchangeFillCreateManyBuyOrderInput | ExchangeFillCreateManyBuyOrderInput[]
    skipDuplicates?: boolean
  }

  export type ExchangeFillCreateWithoutSellOrderInput = {
    fillId: string
    symbol: string
    price: number
    qty: number
    createdAt: Date | string
    buyOrder: ExchangeOrderCreateNestedOneWithoutBuyFillsInput
  }

  export type ExchangeFillUncheckedCreateWithoutSellOrderInput = {
    fillId: string
    symbol: string
    price: number
    qty: number
    buyOrderId: string
    createdAt: Date | string
  }

  export type ExchangeFillCreateOrConnectWithoutSellOrderInput = {
    where: ExchangeFillWhereUniqueInput
    create: XOR<ExchangeFillCreateWithoutSellOrderInput, ExchangeFillUncheckedCreateWithoutSellOrderInput>
  }

  export type ExchangeFillCreateManySellOrderInputEnvelope = {
    data: ExchangeFillCreateManySellOrderInput | ExchangeFillCreateManySellOrderInput[]
    skipDuplicates?: boolean
  }

  export type ExchangeFillUpsertWithWhereUniqueWithoutBuyOrderInput = {
    where: ExchangeFillWhereUniqueInput
    update: XOR<ExchangeFillUpdateWithoutBuyOrderInput, ExchangeFillUncheckedUpdateWithoutBuyOrderInput>
    create: XOR<ExchangeFillCreateWithoutBuyOrderInput, ExchangeFillUncheckedCreateWithoutBuyOrderInput>
  }

  export type ExchangeFillUpdateWithWhereUniqueWithoutBuyOrderInput = {
    where: ExchangeFillWhereUniqueInput
    data: XOR<ExchangeFillUpdateWithoutBuyOrderInput, ExchangeFillUncheckedUpdateWithoutBuyOrderInput>
  }

  export type ExchangeFillUpdateManyWithWhereWithoutBuyOrderInput = {
    where: ExchangeFillScalarWhereInput
    data: XOR<ExchangeFillUpdateManyMutationInput, ExchangeFillUncheckedUpdateManyWithoutBuyOrderInput>
  }

  export type ExchangeFillScalarWhereInput = {
    AND?: ExchangeFillScalarWhereInput | ExchangeFillScalarWhereInput[]
    OR?: ExchangeFillScalarWhereInput[]
    NOT?: ExchangeFillScalarWhereInput | ExchangeFillScalarWhereInput[]
    fillId?: StringFilter<"ExchangeFill"> | string
    symbol?: StringFilter<"ExchangeFill"> | string
    price?: FloatFilter<"ExchangeFill"> | number
    qty?: FloatFilter<"ExchangeFill"> | number
    buyOrderId?: StringFilter<"ExchangeFill"> | string
    sellOrderId?: StringFilter<"ExchangeFill"> | string
    createdAt?: DateTimeFilter<"ExchangeFill"> | Date | string
  }

  export type ExchangeFillUpsertWithWhereUniqueWithoutSellOrderInput = {
    where: ExchangeFillWhereUniqueInput
    update: XOR<ExchangeFillUpdateWithoutSellOrderInput, ExchangeFillUncheckedUpdateWithoutSellOrderInput>
    create: XOR<ExchangeFillCreateWithoutSellOrderInput, ExchangeFillUncheckedCreateWithoutSellOrderInput>
  }

  export type ExchangeFillUpdateWithWhereUniqueWithoutSellOrderInput = {
    where: ExchangeFillWhereUniqueInput
    data: XOR<ExchangeFillUpdateWithoutSellOrderInput, ExchangeFillUncheckedUpdateWithoutSellOrderInput>
  }

  export type ExchangeFillUpdateManyWithWhereWithoutSellOrderInput = {
    where: ExchangeFillScalarWhereInput
    data: XOR<ExchangeFillUpdateManyMutationInput, ExchangeFillUncheckedUpdateManyWithoutSellOrderInput>
  }

  export type ExchangeOrderCreateWithoutBuyFillsInput = {
    orderId: string
    userId: string
    side: string
    type: string
    symbol: string
    price?: number | null
    qty: number
    filledQty?: number
    status: string
    createdAt: Date | string
    updatedAt?: Date | string
    sellFills?: ExchangeFillCreateNestedManyWithoutSellOrderInput
  }

  export type ExchangeOrderUncheckedCreateWithoutBuyFillsInput = {
    orderId: string
    userId: string
    side: string
    type: string
    symbol: string
    price?: number | null
    qty: number
    filledQty?: number
    status: string
    createdAt: Date | string
    updatedAt?: Date | string
    sellFills?: ExchangeFillUncheckedCreateNestedManyWithoutSellOrderInput
  }

  export type ExchangeOrderCreateOrConnectWithoutBuyFillsInput = {
    where: ExchangeOrderWhereUniqueInput
    create: XOR<ExchangeOrderCreateWithoutBuyFillsInput, ExchangeOrderUncheckedCreateWithoutBuyFillsInput>
  }

  export type ExchangeOrderCreateWithoutSellFillsInput = {
    orderId: string
    userId: string
    side: string
    type: string
    symbol: string
    price?: number | null
    qty: number
    filledQty?: number
    status: string
    createdAt: Date | string
    updatedAt?: Date | string
    buyFills?: ExchangeFillCreateNestedManyWithoutBuyOrderInput
  }

  export type ExchangeOrderUncheckedCreateWithoutSellFillsInput = {
    orderId: string
    userId: string
    side: string
    type: string
    symbol: string
    price?: number | null
    qty: number
    filledQty?: number
    status: string
    createdAt: Date | string
    updatedAt?: Date | string
    buyFills?: ExchangeFillUncheckedCreateNestedManyWithoutBuyOrderInput
  }

  export type ExchangeOrderCreateOrConnectWithoutSellFillsInput = {
    where: ExchangeOrderWhereUniqueInput
    create: XOR<ExchangeOrderCreateWithoutSellFillsInput, ExchangeOrderUncheckedCreateWithoutSellFillsInput>
  }

  export type ExchangeOrderUpsertWithoutBuyFillsInput = {
    update: XOR<ExchangeOrderUpdateWithoutBuyFillsInput, ExchangeOrderUncheckedUpdateWithoutBuyFillsInput>
    create: XOR<ExchangeOrderCreateWithoutBuyFillsInput, ExchangeOrderUncheckedCreateWithoutBuyFillsInput>
    where?: ExchangeOrderWhereInput
  }

  export type ExchangeOrderUpdateToOneWithWhereWithoutBuyFillsInput = {
    where?: ExchangeOrderWhereInput
    data: XOR<ExchangeOrderUpdateWithoutBuyFillsInput, ExchangeOrderUncheckedUpdateWithoutBuyFillsInput>
  }

  export type ExchangeOrderUpdateWithoutBuyFillsInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    qty?: FloatFieldUpdateOperationsInput | number
    filledQty?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellFills?: ExchangeFillUpdateManyWithoutSellOrderNestedInput
  }

  export type ExchangeOrderUncheckedUpdateWithoutBuyFillsInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    qty?: FloatFieldUpdateOperationsInput | number
    filledQty?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellFills?: ExchangeFillUncheckedUpdateManyWithoutSellOrderNestedInput
  }

  export type ExchangeOrderUpsertWithoutSellFillsInput = {
    update: XOR<ExchangeOrderUpdateWithoutSellFillsInput, ExchangeOrderUncheckedUpdateWithoutSellFillsInput>
    create: XOR<ExchangeOrderCreateWithoutSellFillsInput, ExchangeOrderUncheckedCreateWithoutSellFillsInput>
    where?: ExchangeOrderWhereInput
  }

  export type ExchangeOrderUpdateToOneWithWhereWithoutSellFillsInput = {
    where?: ExchangeOrderWhereInput
    data: XOR<ExchangeOrderUpdateWithoutSellFillsInput, ExchangeOrderUncheckedUpdateWithoutSellFillsInput>
  }

  export type ExchangeOrderUpdateWithoutSellFillsInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    qty?: FloatFieldUpdateOperationsInput | number
    filledQty?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyFills?: ExchangeFillUpdateManyWithoutBuyOrderNestedInput
  }

  export type ExchangeOrderUncheckedUpdateWithoutSellFillsInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    qty?: FloatFieldUpdateOperationsInput | number
    filledQty?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyFills?: ExchangeFillUncheckedUpdateManyWithoutBuyOrderNestedInput
  }

  export type ExchangeFillCreateManyBuyOrderInput = {
    fillId: string
    symbol: string
    price: number
    qty: number
    sellOrderId: string
    createdAt: Date | string
  }

  export type ExchangeFillCreateManySellOrderInput = {
    fillId: string
    symbol: string
    price: number
    qty: number
    buyOrderId: string
    createdAt: Date | string
  }

  export type ExchangeFillUpdateWithoutBuyOrderInput = {
    fillId?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    qty?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellOrder?: ExchangeOrderUpdateOneRequiredWithoutSellFillsNestedInput
  }

  export type ExchangeFillUncheckedUpdateWithoutBuyOrderInput = {
    fillId?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    qty?: FloatFieldUpdateOperationsInput | number
    sellOrderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeFillUncheckedUpdateManyWithoutBuyOrderInput = {
    fillId?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    qty?: FloatFieldUpdateOperationsInput | number
    sellOrderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeFillUpdateWithoutSellOrderInput = {
    fillId?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    qty?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyOrder?: ExchangeOrderUpdateOneRequiredWithoutBuyFillsNestedInput
  }

  export type ExchangeFillUncheckedUpdateWithoutSellOrderInput = {
    fillId?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    qty?: FloatFieldUpdateOperationsInput | number
    buyOrderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeFillUncheckedUpdateManyWithoutSellOrderInput = {
    fillId?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    qty?: FloatFieldUpdateOperationsInput | number
    buyOrderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
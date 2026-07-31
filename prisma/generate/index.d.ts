/**
 * Client
 **/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Product
 *
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>;
/**
 * Model Inventory
 *
 */
export type Inventory = $Result.DefaultSelection<Prisma.$InventoryPayload>;
/**
 * Model Category
 *
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>;
/**
 * Model Cart
 *
 */
export type Cart = $Result.DefaultSelection<Prisma.$CartPayload>;
/**
 * Model CartItem
 *
 */
export type CartItem = $Result.DefaultSelection<Prisma.$CartItemPayload>;
/**
 * Model Order
 *
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>;
/**
 * Model OrderItem
 *
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>;
/**
 * Model Address
 *
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
    USER: 'USER';
    SELLER: 'SELLER';
    ADMIN: 'ADMIN';
  };

  export type Role = (typeof Role)[keyof typeof Role];

  export const OrderStatus: {
    PENDING: 'PENDING';
    PAID: 'PAID';
    CANCELLED: 'CANCELLED';
    SHIPPED: 'SHIPPED';
  };

  export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];

  export const PaymentStatus: {
    PENDING: 'PENDING';
    COMPLETED: 'COMPLETED';
    FAILED: 'FAILED';
    REFUNDED: 'REFUNDED';
  };

  export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
}

export type Role = $Enums.Role;

export const Role: typeof $Enums.Role;

export type OrderStatus = $Enums.OrderStatus;

export const OrderStatus: typeof $Enums.OrderStatus;

export type PaymentStatus = $Enums.PaymentStatus;

export const PaymentStatus: typeof $Enums.PaymentStatus;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void
  ): PrismaClient;

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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    }
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    }
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
   * ```
   */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **Inventory** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Inventories
   * const inventories = await prisma.inventory.findMany()
   * ```
   */
  get inventory(): Prisma.InventoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cart`: Exposes CRUD operations for the **Cart** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Carts
   * const carts = await prisma.cart.findMany()
   * ```
   */
  get cart(): Prisma.CartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cartItem`: Exposes CRUD operations for the **CartItem** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more CartItems
   * const cartItems = await prisma.cartItem.findMany()
   * ```
   */
  get cartItem(): Prisma.CartItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Orders
   * const orders = await prisma.order.findMany()
   * ```
   */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more OrderItems
   * const orderItems = await prisma.orderItem.findMany()
   * ```
   */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Addresses
   * const addresses = await prisma.address.findMany()
   * ```
   */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string;
    engine: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import Bytes = runtime.Bytes;
  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<
    ReturnType<T>
  >;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions,
  ] extends [Options]
    ? PrismaClientOptions
    : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? ((Without<T, U> & U) | (Without<U, T> & T)) & object
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (
    k: infer I
  ) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
        | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> =
    IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<
    T,
    MaybeTupleToUnion<K>
  >;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: 'User';
    Product: 'Product';
    Inventory: 'Inventory';
    Category: 'Category';
    Cart: 'Cart';
    CartItem: 'CartItem';
    Order: 'Order';
    OrderItem: 'OrderItem';
    Address: 'Address';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<
    { extArgs: $Extensions.InternalArgs },
    $Utils.Record<string, any>
  > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | 'user'
        | 'product'
        | 'inventory'
        | 'category'
        | 'cart'
        | 'cartItem'
        | 'order'
        | 'orderItem'
        | 'address';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>;
        fields: Prisma.ProductFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
          };
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
          };
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[];
          };
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
          };
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
          };
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
          };
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
          };
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProduct>;
          };
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProductGroupByOutputType>[];
          };
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>;
            result: $Utils.Optional<ProductCountAggregateOutputType> | number;
          };
        };
      };
      Inventory: {
        payload: Prisma.$InventoryPayload<ExtArgs>;
        fields: Prisma.InventoryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.InventoryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.InventoryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>;
          };
          findFirst: {
            args: Prisma.InventoryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.InventoryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>;
          };
          findMany: {
            args: Prisma.InventoryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[];
          };
          create: {
            args: Prisma.InventoryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>;
          };
          createMany: {
            args: Prisma.InventoryCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.InventoryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>;
          };
          update: {
            args: Prisma.InventoryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>;
          };
          deleteMany: {
            args: Prisma.InventoryDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.InventoryUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.InventoryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>;
          };
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateInventory>;
          };
          groupBy: {
            args: Prisma.InventoryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<InventoryGroupByOutputType>[];
          };
          count: {
            args: Prisma.InventoryCountArgs<ExtArgs>;
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number;
          };
        };
      };
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>;
        fields: Prisma.CategoryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[];
          };
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCategory>;
          };
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CategoryGroupByOutputType>[];
          };
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>;
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number;
          };
        };
      };
      Cart: {
        payload: Prisma.$CartPayload<ExtArgs>;
        fields: Prisma.CartFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CartFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CartFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartPayload>;
          };
          findFirst: {
            args: Prisma.CartFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CartFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartPayload>;
          };
          findMany: {
            args: Prisma.CartFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[];
          };
          create: {
            args: Prisma.CartCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartPayload>;
          };
          createMany: {
            args: Prisma.CartCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.CartDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartPayload>;
          };
          update: {
            args: Prisma.CartUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartPayload>;
          };
          deleteMany: {
            args: Prisma.CartDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CartUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.CartUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartPayload>;
          };
          aggregate: {
            args: Prisma.CartAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCart>;
          };
          groupBy: {
            args: Prisma.CartGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CartGroupByOutputType>[];
          };
          count: {
            args: Prisma.CartCountArgs<ExtArgs>;
            result: $Utils.Optional<CartCountAggregateOutputType> | number;
          };
        };
      };
      CartItem: {
        payload: Prisma.$CartItemPayload<ExtArgs>;
        fields: Prisma.CartItemFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CartItemFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CartItemFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>;
          };
          findFirst: {
            args: Prisma.CartItemFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CartItemFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>;
          };
          findMany: {
            args: Prisma.CartItemFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[];
          };
          create: {
            args: Prisma.CartItemCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>;
          };
          createMany: {
            args: Prisma.CartItemCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.CartItemDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>;
          };
          update: {
            args: Prisma.CartItemUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>;
          };
          deleteMany: {
            args: Prisma.CartItemDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CartItemUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.CartItemUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>;
          };
          aggregate: {
            args: Prisma.CartItemAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCartItem>;
          };
          groupBy: {
            args: Prisma.CartItemGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CartItemGroupByOutputType>[];
          };
          count: {
            args: Prisma.CartItemCountArgs<ExtArgs>;
            result: $Utils.Optional<CartItemCountAggregateOutputType> | number;
          };
        };
      };
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>;
        fields: Prisma.OrderFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>;
          };
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>;
          };
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[];
          };
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>;
          };
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>;
          };
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>;
          };
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>;
          };
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrder>;
          };
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrderGroupByOutputType>[];
          };
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>;
            result: $Utils.Optional<OrderCountAggregateOutputType> | number;
          };
        };
      };
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>;
        fields: Prisma.OrderItemFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>;
          };
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>;
          };
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[];
          };
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>;
          };
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>;
          };
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>;
          };
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>;
          };
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrderItem>;
          };
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrderItemGroupByOutputType>[];
          };
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>;
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number;
          };
        };
      };
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>;
        fields: Prisma.AddressFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>;
          };
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>;
          };
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[];
          };
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>;
          };
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>;
          };
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>;
          };
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>;
          };
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAddress>;
          };
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AddressGroupByOutputType>[];
          };
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>;
            result: $Utils.Optional<AddressCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     *
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     *
     * Learn more: https://pris.ly/d/driver-adapters
     *
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     *
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory;
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     *
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string;
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
    omit?: Prisma.GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    product?: ProductOmit;
    inventory?: InventoryOmit;
    category?: CategoryOmit;
    cart?: CartOmit;
    cartItem?: CartItemOmit;
    order?: OrderOmit;
    orderItem?: OrderItemOmit;
    address?: AddressOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
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
    | 'groupBy';

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    products: number;
    orders: number;
    addresses: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    products?: boolean | UserCountOutputTypeCountProductsArgs;
    orders?: boolean | UserCountOutputTypeCountOrdersArgs;
    addresses?: boolean | UserCountOutputTypeCountAddressesArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProductsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProductWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrderWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAddressesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AddressWhereInput;
  };

  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    orderItems: number;
    cartItems: number;
  };

  export type ProductCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    orderItems?: boolean | ProductCountOutputTypeCountOrderItemsArgs;
    cartItems?: boolean | ProductCountOutputTypeCountCartItemsArgs;
  };

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrderItemsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrderItemWhereInput;
  };

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCartItemsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CartItemWhereInput;
  };

  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number;
  };

  export type CategoryCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs;
  };

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProductWhereInput;
  };

  /**
   * Count Type CartCountOutputType
   */

  export type CartCountOutputType = {
    items: number;
  };

  export type CartCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    items?: boolean | CartCountOutputTypeCountItemsArgs;
  };

  // Custom InputTypes
  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartCountOutputType
     */
    select?: CartCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeCountItemsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CartItemWhereInput;
  };

  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    orderItems: number;
  };

  export type OrderCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    orderItems?: boolean | OrderCountOutputTypeCountOrderItemsArgs;
  };

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderItemsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrderItemWhereInput;
  };

  /**
   * Count Type AddressCountOutputType
   */

  export type AddressCountOutputType = {
    orders: number;
  };

  export type AddressCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    orders?: boolean | AddressCountOutputTypeCountOrdersArgs;
  };

  // Custom InputTypes
  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AddressCountOutputType
     */
    select?: AddressCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeCountOrdersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrderWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    firstName: string | null;
    lastName: string | null;
    userName: string | null;
    email: string | null;
    password: string | null;
    role: $Enums.Role | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    firstName: string | null;
    lastName: string | null;
    userName: string | null;
    email: string | null;
    password: string | null;
    role: $Enums.Role | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    firstName: number;
    lastName: number;
    userName: number;
    email: number;
    password: number;
    role: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    userName?: true;
    email?: true;
    password?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    userName?: true;
    email?: true;
    password?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    userName?: true;
    email?: true;
    password?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: UserWhereInput;
      orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[];
      by: UserScalarFieldEnum[] | UserScalarFieldEnum;
      having?: UserScalarWhereWithAggregatesInput;
      take?: number;
      skip?: number;
      _count?: UserCountAggregateInputType | true;
      _min?: UserMinAggregateInputType;
      _max?: UserMaxAggregateInputType;
    };

  export type UserGroupByOutputType = {
    id: string;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    role: $Enums.Role;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        firstName?: boolean;
        lastName?: boolean;
        userName?: boolean;
        email?: boolean;
        password?: boolean;
        role?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        products?: boolean | User$productsArgs<ExtArgs>;
        orders?: boolean | User$ordersArgs<ExtArgs>;
        addresses?: boolean | User$addressesArgs<ExtArgs>;
        cart?: boolean | User$cartArgs<ExtArgs>;
        _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['user']
    >;

  export type UserSelectScalar = {
    id?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    userName?: boolean;
    email?: boolean;
    password?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      | 'id'
      | 'firstName'
      | 'lastName'
      | 'userName'
      | 'email'
      | 'password'
      | 'role'
      | 'createdAt'
      | 'updatedAt',
      ExtArgs['result']['user']
    >;
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | User$productsArgs<ExtArgs>;
    orders?: boolean | User$ordersArgs<ExtArgs>;
    addresses?: boolean | User$addressesArgs<ExtArgs>;
    cart?: boolean | User$cartArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'User';
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[];
      orders: Prisma.$OrderPayload<ExtArgs>[];
      addresses: Prisma.$AddressPayload<ExtArgs>[];
      cart: Prisma.$CartPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        firstName: string;
        lastName: string;
        userName: string;
        email: string;
        password: string;
        role: $Enums.Role;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<
    Prisma.$UserPayload,
    S
  >;

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    UserFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User']; meta: { name: 'User' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends (True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] }),
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends (T['by'] extends never[] ? True : False),
      InputErrors extends (ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]),
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    products<T extends User$productsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$productsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    orders<T extends User$ordersArgs<ExtArgs> = {}>(
      args?: Subset<T, User$ordersArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    addresses<T extends User$addressesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$addressesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    cart<T extends User$cartArgs<ExtArgs> = {}>(
      args?: Subset<T, User$cartArgs<ExtArgs>>
    ): Prisma__CartClient<
      $Result.GetResult<
        Prisma.$CartPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'String'>;
    readonly firstName: FieldRef<'User', 'String'>;
    readonly lastName: FieldRef<'User', 'String'>;
    readonly userName: FieldRef<'User', 'String'>;
    readonly email: FieldRef<'User', 'String'>;
    readonly password: FieldRef<'User', 'String'>;
    readonly role: FieldRef<'User', 'Role'>;
    readonly createdAt: FieldRef<'User', 'DateTime'>;
    readonly updatedAt: FieldRef<'User', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the User
       */
      select?: UserSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the User
       */
      omit?: UserOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: UserInclude<ExtArgs> | null;
      /**
       * Filter, which Users to fetch.
       */
      where?: UserWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Users to fetch.
       */
      orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for listing Users.
       */
      cursor?: UserWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Users from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Users.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of Users.
       */
      distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
    };

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.products
   */
  export type User$productsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    where?: ProductWhereInput;
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[];
    cursor?: ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[];
  };

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Order
       */
      select?: OrderSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Order
       */
      omit?: OrderOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: OrderInclude<ExtArgs> | null;
      where?: OrderWhereInput;
      orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[];
      cursor?: OrderWhereUniqueInput;
      take?: number;
      skip?: number;
      distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[];
    };

  /**
   * User.addresses
   */
  export type User$addressesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null;
    where?: AddressWhereInput;
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[];
    cursor?: AddressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[];
  };

  /**
   * User.cart
   */
  export type User$cartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null;
    where?: CartWhereInput;
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the User
       */
      select?: UserSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the User
       */
      omit?: UserOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: UserInclude<ExtArgs> | null;
    };

  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
  };

  export type ProductAvgAggregateOutputType = {
    price: Decimal | null;
    rating: number | null;
  };

  export type ProductSumAggregateOutputType = {
    price: Decimal | null;
    rating: number | null;
  };

  export type ProductMinAggregateOutputType = {
    id: string | null;
    productName: string | null;
    productDesc: string | null;
    price: Decimal | null;
    rating: number | null;
    isActive: boolean | null;
    createdById: string | null;
    categoryId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ProductMaxAggregateOutputType = {
    id: string | null;
    productName: string | null;
    productDesc: string | null;
    price: Decimal | null;
    rating: number | null;
    isActive: boolean | null;
    createdById: string | null;
    categoryId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ProductCountAggregateOutputType = {
    id: number;
    productName: number;
    productDesc: number;
    productImages: number;
    price: number;
    rating: number;
    isActive: number;
    createdById: number;
    categoryId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type ProductAvgAggregateInputType = {
    price?: true;
    rating?: true;
  };

  export type ProductSumAggregateInputType = {
    price?: true;
    rating?: true;
  };

  export type ProductMinAggregateInputType = {
    id?: true;
    productName?: true;
    productDesc?: true;
    price?: true;
    rating?: true;
    isActive?: true;
    createdById?: true;
    categoryId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ProductMaxAggregateInputType = {
    id?: true;
    productName?: true;
    productDesc?: true;
    price?: true;
    rating?: true;
    isActive?: true;
    createdById?: true;
    categoryId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ProductCountAggregateInputType = {
    id?: true;
    productName?: true;
    productDesc?: true;
    productImages?: true;
    price?: true;
    rating?: true;
    isActive?: true;
    createdById?: true;
    categoryId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type ProductAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Products
     **/
    _count?: true | ProductCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ProductAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ProductSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProductMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProductMaxAggregateInputType;
  };

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
    [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>;
  };

  export type ProductGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProductWhereInput;
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[];
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum;
    having?: ProductScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductCountAggregateInputType | true;
    _avg?: ProductAvgAggregateInputType;
    _sum?: ProductSumAggregateInputType;
    _min?: ProductMinAggregateInputType;
    _max?: ProductMaxAggregateInputType;
  };

  export type ProductGroupByOutputType = {
    id: string;
    productName: string;
    productDesc: string;
    productImages: JsonValue;
    price: Decimal;
    rating: number;
    isActive: boolean;
    createdById: string;
    categoryId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
  };

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ProductGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
          : GetScalarType<T[P], ProductGroupByOutputType[P]>;
      }
    >
  >;

  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        productName?: boolean;
        productDesc?: boolean;
        productImages?: boolean;
        price?: boolean;
        rating?: boolean;
        isActive?: boolean;
        createdById?: boolean;
        categoryId?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        user?: boolean | UserDefaultArgs<ExtArgs>;
        category?: boolean | CategoryDefaultArgs<ExtArgs>;
        inventory?: boolean | Product$inventoryArgs<ExtArgs>;
        orderItems?: boolean | Product$orderItemsArgs<ExtArgs>;
        cartItems?: boolean | Product$cartItemsArgs<ExtArgs>;
        _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['product']
    >;

  export type ProductSelectScalar = {
    id?: boolean;
    productName?: boolean;
    productDesc?: boolean;
    productImages?: boolean;
    price?: boolean;
    rating?: boolean;
    isActive?: boolean;
    createdById?: boolean;
    categoryId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      | 'id'
      | 'productName'
      | 'productDesc'
      | 'productImages'
      | 'price'
      | 'rating'
      | 'isActive'
      | 'createdById'
      | 'categoryId'
      | 'createdAt'
      | 'updatedAt',
      ExtArgs['result']['product']
    >;
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    category?: boolean | CategoryDefaultArgs<ExtArgs>;
    inventory?: boolean | Product$inventoryArgs<ExtArgs>;
    orderItems?: boolean | Product$orderItemsArgs<ExtArgs>;
    cartItems?: boolean | Product$cartItemsArgs<ExtArgs>;
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      name: 'Product';
      objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        category: Prisma.$CategoryPayload<ExtArgs>;
        inventory: Prisma.$InventoryPayload<ExtArgs> | null;
        orderItems: Prisma.$OrderItemPayload<ExtArgs>[];
        cartItems: Prisma.$CartItemPayload<ExtArgs>[];
      };
      scalars: $Extensions.GetPayloadResult<
        {
          id: string;
          productName: string;
          productDesc: string;
          productImages: Prisma.JsonValue;
          price: Prisma.Decimal;
          rating: number;
          isActive: boolean;
          createdById: string;
          categoryId: string;
          createdAt: Date;
          updatedAt: Date;
        },
        ExtArgs['result']['product']
      >;
      composites: {};
    };

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> =
    $Result.GetResult<Prisma.$ProductPayload, S>;

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    ProductFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: ProductCountAggregateInputType | true;
  };

  export interface ProductDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product']; meta: { name: 'Product' } };
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(
      args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductClient<
      $Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<
      $Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(
      args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>
    ): Prisma__ProductClient<
      $Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<
      $Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     *
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProductFindManyArgs>(
      args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     *
     */
    create<T extends ProductCreateArgs>(
      args: SelectSubset<T, ProductCreateArgs<ExtArgs>>
    ): Prisma__ProductClient<
      $Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProductCreateManyArgs>(
      args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     *
     */
    delete<T extends ProductDeleteArgs>(
      args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>
    ): Prisma__ProductClient<
      $Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProductUpdateArgs>(
      args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>
    ): Prisma__ProductClient<
      $Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProductDeleteManyArgs>(
      args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProductUpdateManyArgs>(
      args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(
      args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>
    ): Prisma__ProductClient<
      $Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
     **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(
      args: Subset<T, ProductAggregateArgs>
    ): Prisma.PrismaPromise<GetProductAggregateType<T>>;

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends (True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] }),
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends (T['by'] extends never[] ? True : False),
      InputErrors extends (ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]),
    >(
      args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Product model
     */
    readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CategoryDefaultArgs<ExtArgs>>
    ): Prisma__CategoryClient<
      | $Result.GetResult<
          Prisma.$CategoryPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    inventory<T extends Product$inventoryArgs<ExtArgs> = {}>(
      args?: Subset<T, Product$inventoryArgs<ExtArgs>>
    ): Prisma__InventoryClient<
      $Result.GetResult<
        Prisma.$InventoryPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    orderItems<T extends Product$orderItemsArgs<ExtArgs> = {}>(
      args?: Subset<T, Product$orderItemsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    cartItems<T extends Product$cartItemsArgs<ExtArgs> = {}>(
      args?: Subset<T, Product$cartItemsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<'Product', 'String'>;
    readonly productName: FieldRef<'Product', 'String'>;
    readonly productDesc: FieldRef<'Product', 'String'>;
    readonly productImages: FieldRef<'Product', 'Json'>;
    readonly price: FieldRef<'Product', 'Decimal'>;
    readonly rating: FieldRef<'Product', 'Float'>;
    readonly isActive: FieldRef<'Product', 'Boolean'>;
    readonly createdById: FieldRef<'Product', 'String'>;
    readonly categoryId: FieldRef<'Product', 'String'>;
    readonly createdAt: FieldRef<'Product', 'DateTime'>;
    readonly updatedAt: FieldRef<'Product', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput;
  };

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput;
  };

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[];
  };

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[];
  };

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[];
  };

  /**
   * Product create
   */
  export type ProductCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>;
  };

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Product update
   */
  export type ProductUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>;
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput;
  };

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>;
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput;
    /**
     * Limit how many Products to update.
     */
    limit?: number;
  };

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput;
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>;
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>;
  };

  /**
   * Product delete
   */
  export type ProductDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput;
  };

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput;
    /**
     * Limit how many Products to delete.
     */
    limit?: number;
  };

  /**
   * Product.inventory
   */
  export type Product$inventoryArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null;
    where?: InventoryWhereInput;
  };

  /**
   * Product.orderItems
   */
  export type Product$orderItemsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null;
    where?: OrderItemWhereInput;
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[];
    cursor?: OrderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[];
  };

  /**
   * Product.cartItems
   */
  export type Product$cartItemsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null;
    where?: CartItemWhereInput;
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[];
    cursor?: CartItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[];
  };

  /**
   * Product without action
   */
  export type ProductDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
  };

  /**
   * Model Inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null;
    _avg: InventoryAvgAggregateOutputType | null;
    _sum: InventorySumAggregateOutputType | null;
    _min: InventoryMinAggregateOutputType | null;
    _max: InventoryMaxAggregateOutputType | null;
  };

  export type InventoryAvgAggregateOutputType = {
    quantity: number | null;
    reserved: number | null;
    version: number | null;
  };

  export type InventorySumAggregateOutputType = {
    quantity: number | null;
    reserved: number | null;
    version: number | null;
  };

  export type InventoryMinAggregateOutputType = {
    id: string | null;
    quantity: number | null;
    reserved: number | null;
    version: number | null;
    productId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type InventoryMaxAggregateOutputType = {
    id: string | null;
    quantity: number | null;
    reserved: number | null;
    version: number | null;
    productId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type InventoryCountAggregateOutputType = {
    id: number;
    quantity: number;
    reserved: number;
    version: number;
    productId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type InventoryAvgAggregateInputType = {
    quantity?: true;
    reserved?: true;
    version?: true;
  };

  export type InventorySumAggregateInputType = {
    quantity?: true;
    reserved?: true;
    version?: true;
  };

  export type InventoryMinAggregateInputType = {
    id?: true;
    quantity?: true;
    reserved?: true;
    version?: true;
    productId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type InventoryMaxAggregateInputType = {
    id?: true;
    quantity?: true;
    reserved?: true;
    version?: true;
    productId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type InventoryCountAggregateInputType = {
    id?: true;
    quantity?: true;
    reserved?: true;
    version?: true;
    productId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type InventoryAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Inventory to aggregate.
     */
    where?: InventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: InventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Inventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Inventories
     **/
    _count?: true | InventoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: InventoryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: InventorySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: InventoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: InventoryMaxAggregateInputType;
  };

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
    [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>;
  };

  export type InventoryGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: InventoryWhereInput;
    orderBy?: InventoryOrderByWithAggregationInput | InventoryOrderByWithAggregationInput[];
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum;
    having?: InventoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InventoryCountAggregateInputType | true;
    _avg?: InventoryAvgAggregateInputType;
    _sum?: InventorySumAggregateInputType;
    _min?: InventoryMinAggregateInputType;
    _max?: InventoryMaxAggregateInputType;
  };

  export type InventoryGroupByOutputType = {
    id: string;
    quantity: number;
    reserved: number;
    version: number;
    productId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: InventoryCountAggregateOutputType | null;
    _avg: InventoryAvgAggregateOutputType | null;
    _sum: InventorySumAggregateOutputType | null;
    _min: InventoryMinAggregateOutputType | null;
    _max: InventoryMaxAggregateOutputType | null;
  };

  type GetInventoryGroupByPayload<T extends InventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> & {
        [P in keyof T & keyof InventoryGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
          : GetScalarType<T[P], InventoryGroupByOutputType[P]>;
      }
    >
  >;

  export type InventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        quantity?: boolean;
        reserved?: boolean;
        version?: boolean;
        productId?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        product?: boolean | ProductDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['inventory']
    >;

  export type InventorySelectScalar = {
    id?: boolean;
    quantity?: boolean;
    reserved?: boolean;
    version?: boolean;
    productId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type InventoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      'id' | 'quantity' | 'reserved' | 'version' | 'productId' | 'createdAt' | 'updatedAt',
      ExtArgs['result']['inventory']
    >;
  export type InventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      product?: boolean | ProductDefaultArgs<ExtArgs>;
    };

  export type $InventoryPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Inventory';
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        quantity: number;
        reserved: number;
        version: number;
        productId: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['inventory']
    >;
    composites: {};
  };

  type InventoryGetPayload<S extends boolean | null | undefined | InventoryDefaultArgs> =
    $Result.GetResult<Prisma.$InventoryPayload, S>;

  type InventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryCountAggregateInputType | true;
    };

  export interface InventoryDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Inventory'];
      meta: { name: 'Inventory' };
    };
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {InventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryFindUniqueArgs>(
      args: SelectSubset<T, InventoryFindUniqueArgs<ExtArgs>>
    ): Prisma__InventoryClient<
      $Result.GetResult<
        Prisma.$InventoryPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Inventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryFindUniqueOrThrowArgs>(
      args: SelectSubset<T, InventoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__InventoryClient<
      $Result.GetResult<
        Prisma.$InventoryPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryFindFirstArgs>(
      args?: SelectSubset<T, InventoryFindFirstArgs<ExtArgs>>
    ): Prisma__InventoryClient<
      $Result.GetResult<
        Prisma.$InventoryPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, InventoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__InventoryClient<
      $Result.GetResult<
        Prisma.$InventoryPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     *
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const inventoryWithIdOnly = await prisma.inventory.findMany({ select: { id: true } })
     *
     */
    findMany<T extends InventoryFindManyArgs>(
      args?: SelectSubset<T, InventoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a Inventory.
     * @param {InventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     *
     */
    create<T extends InventoryCreateArgs>(
      args: SelectSubset<T, InventoryCreateArgs<ExtArgs>>
    ): Prisma__InventoryClient<
      $Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Inventories.
     * @param {InventoryCreateManyArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends InventoryCreateManyArgs>(
      args?: SelectSubset<T, InventoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Inventory.
     * @param {InventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     *
     */
    delete<T extends InventoryDeleteArgs>(
      args: SelectSubset<T, InventoryDeleteArgs<ExtArgs>>
    ): Prisma__InventoryClient<
      $Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Inventory.
     * @param {InventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends InventoryUpdateArgs>(
      args: SelectSubset<T, InventoryUpdateArgs<ExtArgs>>
    ): Prisma__InventoryClient<
      $Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Inventories.
     * @param {InventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends InventoryDeleteManyArgs>(
      args?: SelectSubset<T, InventoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends InventoryUpdateManyArgs>(
      args: SelectSubset<T, InventoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Inventory.
     * @param {InventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     */
    upsert<T extends InventoryUpsertArgs>(
      args: SelectSubset<T, InventoryUpsertArgs<ExtArgs>>
    ): Prisma__InventoryClient<
      $Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
     **/
    count<T extends InventoryCountArgs>(
      args?: Subset<T, InventoryCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoryAggregateArgs>(
      args: Subset<T, InventoryAggregateArgs>
    ): Prisma.PrismaPromise<GetInventoryAggregateType<T>>;

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryGroupByArgs} args - Group by arguments.
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
      T extends InventoryGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends (True extends HasSelectOrTake
        ? { orderBy: InventoryGroupByArgs['orderBy'] }
        : { orderBy?: InventoryGroupByArgs['orderBy'] }),
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends (T['by'] extends never[] ? True : False),
      InputErrors extends (ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]),
    >(
      args: SubsetIntersection<T, InventoryGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Inventory model
     */
    readonly fields: InventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProductDefaultArgs<ExtArgs>>
    ): Prisma__ProductClient<
      | $Result.GetResult<
          Prisma.$ProductPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Inventory model
   */
  interface InventoryFieldRefs {
    readonly id: FieldRef<'Inventory', 'String'>;
    readonly quantity: FieldRef<'Inventory', 'Int'>;
    readonly reserved: FieldRef<'Inventory', 'Int'>;
    readonly version: FieldRef<'Inventory', 'Int'>;
    readonly productId: FieldRef<'Inventory', 'String'>;
    readonly createdAt: FieldRef<'Inventory', 'DateTime'>;
    readonly updatedAt: FieldRef<'Inventory', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Inventory findUnique
   */
  export type InventoryFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null;
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput;
  };

  /**
   * Inventory findUniqueOrThrow
   */
  export type InventoryFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null;
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput;
  };

  /**
   * Inventory findFirst
   */
  export type InventoryFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null;
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Inventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[];
  };

  /**
   * Inventory findFirstOrThrow
   */
  export type InventoryFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null;
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Inventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[];
  };

  /**
   * Inventory findMany
   */
  export type InventoryFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null;
    /**
     * Filter, which Inventories to fetch.
     */
    where?: InventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Inventories.
     */
    cursor?: InventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Inventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[];
  };

  /**
   * Inventory create
   */
  export type InventoryCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a Inventory.
     */
    data: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>;
  };

  /**
   * Inventory createMany
   */
  export type InventoryCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Inventory update
   */
  export type InventoryUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a Inventory.
     */
    data: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>;
    /**
     * Choose, which Inventory to update.
     */
    where: InventoryWhereUniqueInput;
  };

  /**
   * Inventory updateMany
   */
  export type InventoryUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Inventories.
     */
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyInput>;
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput;
    /**
     * Limit how many Inventories to update.
     */
    limit?: number;
  };

  /**
   * Inventory upsert
   */
  export type InventoryUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the Inventory to update in case it exists.
     */
    where: InventoryWhereUniqueInput;
    /**
     * In case the Inventory found by the `where` argument doesn't exist, create a new Inventory with this data.
     */
    create: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>;
    /**
     * In case the Inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>;
  };

  /**
   * Inventory delete
   */
  export type InventoryDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null;
    /**
     * Filter which Inventory to delete.
     */
    where: InventoryWhereUniqueInput;
  };

  /**
   * Inventory deleteMany
   */
  export type InventoryDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Inventories to delete
     */
    where?: InventoryWhereInput;
    /**
     * Limit how many Inventories to delete.
     */
    limit?: number;
  };

  /**
   * Inventory without action
   */
  export type InventoryDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null;
  };

  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null;
    _min: CategoryMinAggregateOutputType | null;
    _max: CategoryMaxAggregateOutputType | null;
  };

  export type CategoryMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type CategoryMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type CategoryCountAggregateOutputType = {
    id: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type CategoryMinAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type CategoryMaxAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type CategoryCountAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type CategoryAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Categories
     **/
    _count?: true | CategoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CategoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CategoryMaxAggregateInputType;
  };

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>;
  };

  export type CategoryGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CategoryWhereInput;
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[];
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum;
    having?: CategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategoryCountAggregateInputType | true;
    _min?: CategoryMinAggregateInputType;
    _max?: CategoryMaxAggregateInputType;
  };

  export type CategoryGroupByOutputType = {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    _count: CategoryCountAggregateOutputType | null;
    _min: CategoryMinAggregateOutputType | null;
    _max: CategoryMaxAggregateOutputType | null;
  };

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CategoryGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
          : GetScalarType<T[P], CategoryGroupByOutputType[P]>;
      }
    >
  >;

  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        products?: boolean | Category$productsArgs<ExtArgs>;
        _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['category']
    >;

  export type CategorySelectScalar = {
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<'id' | 'name' | 'createdAt' | 'updatedAt', ExtArgs['result']['category']>;
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      products?: boolean | Category$productsArgs<ExtArgs>;
      _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>;
    };

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      name: 'Category';
      objects: {
        products: Prisma.$ProductPayload<ExtArgs>[];
      };
      scalars: $Extensions.GetPayloadResult<
        {
          id: string;
          name: string;
          createdAt: Date;
          updatedAt: Date;
        },
        ExtArgs['result']['category']
      >;
      composites: {};
    };

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> =
    $Result.GetResult<Prisma.$CategoryPayload, S>;

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    CategoryFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: CategoryCountAggregateInputType | true;
  };

  export interface CategoryDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Category'];
      meta: { name: 'Category' };
    };
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryClient<
      $Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<
      $Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     *
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CategoryFindManyArgs>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     *
     */
    create<T extends CategoryCreateArgs>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<
      $Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CategoryCreateManyArgs>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     *
     */
    delete<T extends CategoryDeleteArgs>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<
      $Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CategoryUpdateArgs>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<
      $Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CategoryDeleteManyArgs>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CategoryUpdateManyArgs>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<
      $Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
     **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(
      args: Subset<T, CategoryAggregateArgs>
    ): Prisma.PrismaPromise<GetCategoryAggregateType<T>>;

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends (True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] }),
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends (T['by'] extends never[] ? True : False),
      InputErrors extends (ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]),
    >(
      args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Category model
     */
    readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    products<T extends Category$productsArgs<ExtArgs> = {}>(
      args?: Subset<T, Category$productsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<'Category', 'String'>;
    readonly name: FieldRef<'Category', 'String'>;
    readonly createdAt: FieldRef<'Category', 'DateTime'>;
    readonly updatedAt: FieldRef<'Category', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * Category create
   */
  export type CategoryCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>;
  };

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Category update
   */
  export type CategoryUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>;
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>;
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput;
    /**
     * Limit how many Categories to update.
     */
    limit?: number;
  };

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput;
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>;
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>;
  };

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput;
    /**
     * Limit how many Categories to delete.
     */
    limit?: number;
  };

  /**
   * Category.products
   */
  export type Category$productsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    where?: ProductWhereInput;
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[];
    cursor?: ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[];
  };

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
  };

  /**
   * Model Cart
   */

  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null;
    _min: CartMinAggregateOutputType | null;
    _max: CartMaxAggregateOutputType | null;
  };

  export type CartMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type CartMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type CartCountAggregateOutputType = {
    id: number;
    userId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type CartMinAggregateInputType = {
    id?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type CartMaxAggregateInputType = {
    id?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type CartCountAggregateInputType = {
    id?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type CartAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Cart to aggregate.
     */
    where?: CartWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CartWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Carts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Carts
     **/
    _count?: true | CartCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CartMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CartMaxAggregateInputType;
  };

  export type GetCartAggregateType<T extends CartAggregateArgs> = {
    [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart[P]>
      : GetScalarType<T[P], AggregateCart[P]>;
  };

  export type CartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: CartWhereInput;
      orderBy?: CartOrderByWithAggregationInput | CartOrderByWithAggregationInput[];
      by: CartScalarFieldEnum[] | CartScalarFieldEnum;
      having?: CartScalarWhereWithAggregatesInput;
      take?: number;
      skip?: number;
      _count?: CartCountAggregateInputType | true;
      _min?: CartMinAggregateInputType;
      _max?: CartMaxAggregateInputType;
    };

  export type CartGroupByOutputType = {
    id: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: CartCountAggregateOutputType | null;
    _min: CartMinAggregateOutputType | null;
    _max: CartMaxAggregateOutputType | null;
  };

  type GetCartGroupByPayload<T extends CartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CartGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CartGroupByOutputType[P]>
          : GetScalarType<T[P], CartGroupByOutputType[P]>;
      }
    >
  >;

  export type CartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        userId?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        user?: boolean | UserDefaultArgs<ExtArgs>;
        items?: boolean | Cart$itemsArgs<ExtArgs>;
        _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['cart']
    >;

  export type CartSelectScalar = {
    id?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type CartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<'id' | 'userId' | 'createdAt' | 'updatedAt', ExtArgs['result']['cart']>;
  export type CartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    items?: boolean | Cart$itemsArgs<ExtArgs>;
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $CartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'Cart';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      items: Prisma.$CartItemPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['cart']
    >;
    composites: {};
  };

  type CartGetPayload<S extends boolean | null | undefined | CartDefaultArgs> = $Result.GetResult<
    Prisma.$CartPayload,
    S
  >;

  type CartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    CartFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: CartCountAggregateInputType | true;
  };

  export interface CartDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cart']; meta: { name: 'Cart' } };
    /**
     * Find zero or one Cart that matches the filter.
     * @param {CartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartFindUniqueArgs>(
      args: SelectSubset<T, CartFindUniqueArgs<ExtArgs>>
    ): Prisma__CartClient<
      $Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Cart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CartFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CartClient<
      $Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartFindFirstArgs>(
      args?: SelectSubset<T, CartFindFirstArgs<ExtArgs>>
    ): Prisma__CartClient<
      $Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Cart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CartFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CartClient<
      $Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     *
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const cartWithIdOnly = await prisma.cart.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CartFindManyArgs>(
      args?: SelectSubset<T, CartFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a Cart.
     * @param {CartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     *
     */
    create<T extends CartCreateArgs>(
      args: SelectSubset<T, CartCreateArgs<ExtArgs>>
    ): Prisma__CartClient<
      $Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Carts.
     * @param {CartCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CartCreateManyArgs>(
      args?: SelectSubset<T, CartCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Cart.
     * @param {CartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     *
     */
    delete<T extends CartDeleteArgs>(
      args: SelectSubset<T, CartDeleteArgs<ExtArgs>>
    ): Prisma__CartClient<
      $Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Cart.
     * @param {CartUpdateArgs} args - Arguments to update one Cart.
     * @example
     * // Update one Cart
     * const cart = await prisma.cart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CartUpdateArgs>(
      args: SelectSubset<T, CartUpdateArgs<ExtArgs>>
    ): Prisma__CartClient<
      $Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Carts.
     * @param {CartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CartDeleteManyArgs>(
      args?: SelectSubset<T, CartDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CartUpdateManyArgs>(
      args: SelectSubset<T, CartUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Cart.
     * @param {CartUpsertArgs} args - Arguments to update or create a Cart.
     * @example
     * // Update or create a Cart
     * const cart = await prisma.cart.upsert({
     *   create: {
     *     // ... data to create a Cart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart we want to update
     *   }
     * })
     */
    upsert<T extends CartUpsertArgs>(
      args: SelectSubset<T, CartUpsertArgs<ExtArgs>>
    ): Prisma__CartClient<
      $Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
     **/
    count<T extends CartCountArgs>(
      args?: Subset<T, CartCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartAggregateArgs>(
      args: Subset<T, CartAggregateArgs>
    ): Prisma.PrismaPromise<GetCartAggregateType<T>>;

    /**
     * Group by Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartGroupByArgs} args - Group by arguments.
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
      T extends CartGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends (True extends HasSelectOrTake
        ? { orderBy: CartGroupByArgs['orderBy'] }
        : { orderBy?: CartGroupByArgs['orderBy'] }),
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends (T['by'] extends never[] ? True : False),
      InputErrors extends (ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]),
    >(
      args: SubsetIntersection<T, CartGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Cart model
     */
    readonly fields: CartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    items<T extends Cart$itemsArgs<ExtArgs> = {}>(
      args?: Subset<T, Cart$itemsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Cart model
   */
  interface CartFieldRefs {
    readonly id: FieldRef<'Cart', 'String'>;
    readonly userId: FieldRef<'Cart', 'String'>;
    readonly createdAt: FieldRef<'Cart', 'DateTime'>;
    readonly updatedAt: FieldRef<'Cart', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Cart findUnique
   */
  export type CartFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null;
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput;
  };

  /**
   * Cart findUniqueOrThrow
   */
  export type CartFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null;
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput;
  };

  /**
   * Cart findFirst
   */
  export type CartFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null;
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Carts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[];
  };

  /**
   * Cart findFirstOrThrow
   */
  export type CartFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null;
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Carts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[];
  };

  /**
   * Cart findMany
   */
  export type CartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Cart
       */
      select?: CartSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Cart
       */
      omit?: CartOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: CartInclude<ExtArgs> | null;
      /**
       * Filter, which Carts to fetch.
       */
      where?: CartWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Carts to fetch.
       */
      orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for listing Carts.
       */
      cursor?: CartWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Carts from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Carts.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of Carts.
       */
      distinct?: CartScalarFieldEnum | CartScalarFieldEnum[];
    };

  /**
   * Cart create
   */
  export type CartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null;
    /**
     * The data needed to create a Cart.
     */
    data: XOR<CartCreateInput, CartUncheckedCreateInput>;
  };

  /**
   * Cart createMany
   */
  export type CartCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Carts.
     */
    data: CartCreateManyInput | CartCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Cart update
   */
  export type CartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null;
    /**
     * The data needed to update a Cart.
     */
    data: XOR<CartUpdateInput, CartUncheckedUpdateInput>;
    /**
     * Choose, which Cart to update.
     */
    where: CartWhereUniqueInput;
  };

  /**
   * Cart updateMany
   */
  export type CartUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Carts.
     */
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>;
    /**
     * Filter which Carts to update
     */
    where?: CartWhereInput;
    /**
     * Limit how many Carts to update.
     */
    limit?: number;
  };

  /**
   * Cart upsert
   */
  export type CartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null;
    /**
     * The filter to search for the Cart to update in case it exists.
     */
    where: CartWhereUniqueInput;
    /**
     * In case the Cart found by the `where` argument doesn't exist, create a new Cart with this data.
     */
    create: XOR<CartCreateInput, CartUncheckedCreateInput>;
    /**
     * In case the Cart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartUpdateInput, CartUncheckedUpdateInput>;
  };

  /**
   * Cart delete
   */
  export type CartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null;
    /**
     * Filter which Cart to delete.
     */
    where: CartWhereUniqueInput;
  };

  /**
   * Cart deleteMany
   */
  export type CartDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Carts to delete
     */
    where?: CartWhereInput;
    /**
     * Limit how many Carts to delete.
     */
    limit?: number;
  };

  /**
   * Cart.items
   */
  export type Cart$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null;
    where?: CartItemWhereInput;
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[];
    cursor?: CartItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[];
  };

  /**
   * Cart without action
   */
  export type CartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Cart
       */
      select?: CartSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Cart
       */
      omit?: CartOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: CartInclude<ExtArgs> | null;
    };

  /**
   * Model CartItem
   */

  export type AggregateCartItem = {
    _count: CartItemCountAggregateOutputType | null;
    _avg: CartItemAvgAggregateOutputType | null;
    _sum: CartItemSumAggregateOutputType | null;
    _min: CartItemMinAggregateOutputType | null;
    _max: CartItemMaxAggregateOutputType | null;
  };

  export type CartItemAvgAggregateOutputType = {
    quantity: number | null;
  };

  export type CartItemSumAggregateOutputType = {
    quantity: number | null;
  };

  export type CartItemMinAggregateOutputType = {
    id: string | null;
    quantity: number | null;
    cartId: string | null;
    productId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type CartItemMaxAggregateOutputType = {
    id: string | null;
    quantity: number | null;
    cartId: string | null;
    productId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type CartItemCountAggregateOutputType = {
    id: number;
    quantity: number;
    cartId: number;
    productId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type CartItemAvgAggregateInputType = {
    quantity?: true;
  };

  export type CartItemSumAggregateInputType = {
    quantity?: true;
  };

  export type CartItemMinAggregateInputType = {
    id?: true;
    quantity?: true;
    cartId?: true;
    productId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type CartItemMaxAggregateInputType = {
    id?: true;
    quantity?: true;
    cartId?: true;
    productId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type CartItemCountAggregateInputType = {
    id?: true;
    quantity?: true;
    cartId?: true;
    productId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type CartItemAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CartItem to aggregate.
     */
    where?: CartItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CartItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CartItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CartItems
     **/
    _count?: true | CartItemCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CartItemAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CartItemSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CartItemMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CartItemMaxAggregateInputType;
  };

  export type GetCartItemAggregateType<T extends CartItemAggregateArgs> = {
    [P in keyof T & keyof AggregateCartItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartItem[P]>
      : GetScalarType<T[P], AggregateCartItem[P]>;
  };

  export type CartItemGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CartItemWhereInput;
    orderBy?: CartItemOrderByWithAggregationInput | CartItemOrderByWithAggregationInput[];
    by: CartItemScalarFieldEnum[] | CartItemScalarFieldEnum;
    having?: CartItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CartItemCountAggregateInputType | true;
    _avg?: CartItemAvgAggregateInputType;
    _sum?: CartItemSumAggregateInputType;
    _min?: CartItemMinAggregateInputType;
    _max?: CartItemMaxAggregateInputType;
  };

  export type CartItemGroupByOutputType = {
    id: string;
    quantity: number;
    cartId: string;
    productId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: CartItemCountAggregateOutputType | null;
    _avg: CartItemAvgAggregateOutputType | null;
    _sum: CartItemSumAggregateOutputType | null;
    _min: CartItemMinAggregateOutputType | null;
    _max: CartItemMaxAggregateOutputType | null;
  };

  type GetCartItemGroupByPayload<T extends CartItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartItemGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CartItemGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CartItemGroupByOutputType[P]>
          : GetScalarType<T[P], CartItemGroupByOutputType[P]>;
      }
    >
  >;

  export type CartItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        quantity?: boolean;
        cartId?: boolean;
        productId?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        cart?: boolean | CartDefaultArgs<ExtArgs>;
        product?: boolean | ProductDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['cartItem']
    >;

  export type CartItemSelectScalar = {
    id?: boolean;
    quantity?: boolean;
    cartId?: boolean;
    productId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type CartItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      'id' | 'quantity' | 'cartId' | 'productId' | 'createdAt' | 'updatedAt',
      ExtArgs['result']['cartItem']
    >;
  export type CartItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      cart?: boolean | CartDefaultArgs<ExtArgs>;
      product?: boolean | ProductDefaultArgs<ExtArgs>;
    };

  export type $CartItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      name: 'CartItem';
      objects: {
        cart: Prisma.$CartPayload<ExtArgs>;
        product: Prisma.$ProductPayload<ExtArgs>;
      };
      scalars: $Extensions.GetPayloadResult<
        {
          id: string;
          quantity: number;
          cartId: string;
          productId: string;
          createdAt: Date;
          updatedAt: Date;
        },
        ExtArgs['result']['cartItem']
      >;
      composites: {};
    };

  type CartItemGetPayload<S extends boolean | null | undefined | CartItemDefaultArgs> =
    $Result.GetResult<Prisma.$CartItemPayload, S>;

  type CartItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    CartItemFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: CartItemCountAggregateInputType | true;
  };

  export interface CartItemDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['CartItem'];
      meta: { name: 'CartItem' };
    };
    /**
     * Find zero or one CartItem that matches the filter.
     * @param {CartItemFindUniqueArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartItemFindUniqueArgs>(
      args: SelectSubset<T, CartItemFindUniqueArgs<ExtArgs>>
    ): Prisma__CartItemClient<
      $Result.GetResult<
        Prisma.$CartItemPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one CartItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartItemFindUniqueOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartItemFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CartItemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CartItemClient<
      $Result.GetResult<
        Prisma.$CartItemPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first CartItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartItemFindFirstArgs>(
      args?: SelectSubset<T, CartItemFindFirstArgs<ExtArgs>>
    ): Prisma__CartItemClient<
      $Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first CartItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartItemFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CartItemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CartItemClient<
      $Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more CartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CartItems
     * const cartItems = await prisma.cartItem.findMany()
     *
     * // Get first 10 CartItems
     * const cartItems = await prisma.cartItem.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CartItemFindManyArgs>(
      args?: SelectSubset<T, CartItemFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a CartItem.
     * @param {CartItemCreateArgs} args - Arguments to create a CartItem.
     * @example
     * // Create one CartItem
     * const CartItem = await prisma.cartItem.create({
     *   data: {
     *     // ... data to create a CartItem
     *   }
     * })
     *
     */
    create<T extends CartItemCreateArgs>(
      args: SelectSubset<T, CartItemCreateArgs<ExtArgs>>
    ): Prisma__CartItemClient<
      $Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many CartItems.
     * @param {CartItemCreateManyArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItem = await prisma.cartItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CartItemCreateManyArgs>(
      args?: SelectSubset<T, CartItemCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a CartItem.
     * @param {CartItemDeleteArgs} args - Arguments to delete one CartItem.
     * @example
     * // Delete one CartItem
     * const CartItem = await prisma.cartItem.delete({
     *   where: {
     *     // ... filter to delete one CartItem
     *   }
     * })
     *
     */
    delete<T extends CartItemDeleteArgs>(
      args: SelectSubset<T, CartItemDeleteArgs<ExtArgs>>
    ): Prisma__CartItemClient<
      $Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one CartItem.
     * @param {CartItemUpdateArgs} args - Arguments to update one CartItem.
     * @example
     * // Update one CartItem
     * const cartItem = await prisma.cartItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CartItemUpdateArgs>(
      args: SelectSubset<T, CartItemUpdateArgs<ExtArgs>>
    ): Prisma__CartItemClient<
      $Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more CartItems.
     * @param {CartItemDeleteManyArgs} args - Arguments to filter CartItems to delete.
     * @example
     * // Delete a few CartItems
     * const { count } = await prisma.cartItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CartItemDeleteManyArgs>(
      args?: SelectSubset<T, CartItemDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CartItemUpdateManyArgs>(
      args: SelectSubset<T, CartItemUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one CartItem.
     * @param {CartItemUpsertArgs} args - Arguments to update or create a CartItem.
     * @example
     * // Update or create a CartItem
     * const cartItem = await prisma.cartItem.upsert({
     *   create: {
     *     // ... data to create a CartItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CartItem we want to update
     *   }
     * })
     */
    upsert<T extends CartItemUpsertArgs>(
      args: SelectSubset<T, CartItemUpsertArgs<ExtArgs>>
    ): Prisma__CartItemClient<
      $Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemCountArgs} args - Arguments to filter CartItems to count.
     * @example
     * // Count the number of CartItems
     * const count = await prisma.cartItem.count({
     *   where: {
     *     // ... the filter for the CartItems we want to count
     *   }
     * })
     **/
    count<T extends CartItemCountArgs>(
      args?: Subset<T, CartItemCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartItemCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartItemAggregateArgs>(
      args: Subset<T, CartItemAggregateArgs>
    ): Prisma.PrismaPromise<GetCartItemAggregateType<T>>;

    /**
     * Group by CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemGroupByArgs} args - Group by arguments.
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
      T extends CartItemGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends (True extends HasSelectOrTake
        ? { orderBy: CartItemGroupByArgs['orderBy'] }
        : { orderBy?: CartItemGroupByArgs['orderBy'] }),
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends (T['by'] extends never[] ? True : False),
      InputErrors extends (ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]),
    >(
      args: SubsetIntersection<T, CartItemGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetCartItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CartItem model
     */
    readonly fields: CartItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CartItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartItemClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    cart<T extends CartDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CartDefaultArgs<ExtArgs>>
    ): Prisma__CartClient<
      | $Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProductDefaultArgs<ExtArgs>>
    ): Prisma__ProductClient<
      | $Result.GetResult<
          Prisma.$ProductPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the CartItem model
   */
  interface CartItemFieldRefs {
    readonly id: FieldRef<'CartItem', 'String'>;
    readonly quantity: FieldRef<'CartItem', 'Int'>;
    readonly cartId: FieldRef<'CartItem', 'String'>;
    readonly productId: FieldRef<'CartItem', 'String'>;
    readonly createdAt: FieldRef<'CartItem', 'DateTime'>;
    readonly updatedAt: FieldRef<'CartItem', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * CartItem findUnique
   */
  export type CartItemFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null;
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput;
  };

  /**
   * CartItem findUniqueOrThrow
   */
  export type CartItemFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null;
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput;
  };

  /**
   * CartItem findFirst
   */
  export type CartItemFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null;
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CartItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[];
  };

  /**
   * CartItem findFirstOrThrow
   */
  export type CartItemFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null;
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CartItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[];
  };

  /**
   * CartItem findMany
   */
  export type CartItemFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null;
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CartItems.
     */
    cursor?: CartItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CartItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[];
  };

  /**
   * CartItem create
   */
  export type CartItemCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null;
    /**
     * The data needed to create a CartItem.
     */
    data: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>;
  };

  /**
   * CartItem createMany
   */
  export type CartItemCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many CartItems.
     */
    data: CartItemCreateManyInput | CartItemCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * CartItem update
   */
  export type CartItemUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null;
    /**
     * The data needed to update a CartItem.
     */
    data: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>;
    /**
     * Choose, which CartItem to update.
     */
    where: CartItemWhereUniqueInput;
  };

  /**
   * CartItem updateMany
   */
  export type CartItemUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyInput>;
    /**
     * Filter which CartItems to update
     */
    where?: CartItemWhereInput;
    /**
     * Limit how many CartItems to update.
     */
    limit?: number;
  };

  /**
   * CartItem upsert
   */
  export type CartItemUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null;
    /**
     * The filter to search for the CartItem to update in case it exists.
     */
    where: CartItemWhereUniqueInput;
    /**
     * In case the CartItem found by the `where` argument doesn't exist, create a new CartItem with this data.
     */
    create: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>;
    /**
     * In case the CartItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>;
  };

  /**
   * CartItem delete
   */
  export type CartItemDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null;
    /**
     * Filter which CartItem to delete.
     */
    where: CartItemWhereUniqueInput;
  };

  /**
   * CartItem deleteMany
   */
  export type CartItemDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CartItems to delete
     */
    where?: CartItemWhereInput;
    /**
     * Limit how many CartItems to delete.
     */
    limit?: number;
  };

  /**
   * CartItem without action
   */
  export type CartItemDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null;
  };

  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null;
    _avg: OrderAvgAggregateOutputType | null;
    _sum: OrderSumAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
  };

  export type OrderAvgAggregateOutputType = {
    totalAmount: Decimal | null;
    totalItem: number | null;
  };

  export type OrderSumAggregateOutputType = {
    totalAmount: Decimal | null;
    totalItem: number | null;
  };

  export type OrderMinAggregateOutputType = {
    id: string | null;
    totalAmount: Decimal | null;
    totalItem: number | null;
    status: $Enums.OrderStatus | null;
    paymentStatus: $Enums.PaymentStatus | null;
    userId: string | null;
    addressId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type OrderMaxAggregateOutputType = {
    id: string | null;
    totalAmount: Decimal | null;
    totalItem: number | null;
    status: $Enums.OrderStatus | null;
    paymentStatus: $Enums.PaymentStatus | null;
    userId: string | null;
    addressId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type OrderCountAggregateOutputType = {
    id: number;
    totalAmount: number;
    totalItem: number;
    status: number;
    paymentStatus: number;
    userId: number;
    addressId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type OrderAvgAggregateInputType = {
    totalAmount?: true;
    totalItem?: true;
  };

  export type OrderSumAggregateInputType = {
    totalAmount?: true;
    totalItem?: true;
  };

  export type OrderMinAggregateInputType = {
    id?: true;
    totalAmount?: true;
    totalItem?: true;
    status?: true;
    paymentStatus?: true;
    userId?: true;
    addressId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type OrderMaxAggregateInputType = {
    id?: true;
    totalAmount?: true;
    totalItem?: true;
    status?: true;
    paymentStatus?: true;
    userId?: true;
    addressId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type OrderCountAggregateInputType = {
    id?: true;
    totalAmount?: true;
    totalItem?: true;
    status?: true;
    paymentStatus?: true;
    userId?: true;
    addressId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type OrderAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Orders
     **/
    _count?: true | OrderCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: OrderAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: OrderSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrderMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrderMaxAggregateInputType;
  };

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
    [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>;
  };

  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: OrderWhereInput;
      orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[];
      by: OrderScalarFieldEnum[] | OrderScalarFieldEnum;
      having?: OrderScalarWhereWithAggregatesInput;
      take?: number;
      skip?: number;
      _count?: OrderCountAggregateInputType | true;
      _avg?: OrderAvgAggregateInputType;
      _sum?: OrderSumAggregateInputType;
      _min?: OrderMinAggregateInputType;
      _max?: OrderMaxAggregateInputType;
    };

  export type OrderGroupByOutputType = {
    id: string;
    totalAmount: Decimal;
    totalItem: number;
    status: $Enums.OrderStatus;
    paymentStatus: $Enums.PaymentStatus;
    userId: string;
    addressId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: OrderCountAggregateOutputType | null;
    _avg: OrderAvgAggregateOutputType | null;
    _sum: OrderSumAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
  };

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> & {
        [P in keyof T & keyof OrderGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
          : GetScalarType<T[P], OrderGroupByOutputType[P]>;
      }
    >
  >;

  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        totalAmount?: boolean;
        totalItem?: boolean;
        status?: boolean;
        paymentStatus?: boolean;
        userId?: boolean;
        addressId?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        user?: boolean | UserDefaultArgs<ExtArgs>;
        address?: boolean | AddressDefaultArgs<ExtArgs>;
        orderItems?: boolean | Order$orderItemsArgs<ExtArgs>;
        _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['order']
    >;

  export type OrderSelectScalar = {
    id?: boolean;
    totalAmount?: boolean;
    totalItem?: boolean;
    status?: boolean;
    paymentStatus?: boolean;
    userId?: boolean;
    addressId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      | 'id'
      | 'totalAmount'
      | 'totalItem'
      | 'status'
      | 'paymentStatus'
      | 'userId'
      | 'addressId'
      | 'createdAt'
      | 'updatedAt',
      ExtArgs['result']['order']
    >;
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    address?: boolean | AddressDefaultArgs<ExtArgs>;
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>;
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'Order';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      address: Prisma.$AddressPayload<ExtArgs>;
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        totalAmount: Prisma.Decimal;
        totalItem: number;
        status: $Enums.OrderStatus;
        paymentStatus: $Enums.PaymentStatus;
        userId: string;
        addressId: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['order']
    >;
    composites: {};
  };

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<
    Prisma.$OrderPayload,
    S
  >;

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    OrderFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: OrderCountAggregateInputType | true;
  };

  export interface OrderDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order']; meta: { name: 'Order' } };
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(
      args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>
    ): Prisma__OrderClient<
      $Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(
      args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OrderClient<
      $Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(
      args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>
    ): Prisma__OrderClient<
      $Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OrderClient<
      $Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     *
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     *
     */
    findMany<T extends OrderFindManyArgs>(
      args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     *
     */
    create<T extends OrderCreateArgs>(
      args: SelectSubset<T, OrderCreateArgs<ExtArgs>>
    ): Prisma__OrderClient<
      $Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends OrderCreateManyArgs>(
      args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     *
     */
    delete<T extends OrderDeleteArgs>(
      args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>
    ): Prisma__OrderClient<
      $Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends OrderUpdateArgs>(
      args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>
    ): Prisma__OrderClient<
      $Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends OrderDeleteManyArgs>(
      args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends OrderUpdateManyArgs>(
      args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(
      args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>
    ): Prisma__OrderClient<
      $Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
     **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(
      args: Subset<T, OrderAggregateArgs>
    ): Prisma.PrismaPromise<GetOrderAggregateType<T>>;

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends (True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] }),
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends (T['by'] extends never[] ? True : False),
      InputErrors extends (ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]),
    >(
      args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Order model
     */
    readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    address<T extends AddressDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, AddressDefaultArgs<ExtArgs>>
    ): Prisma__AddressClient<
      | $Result.GetResult<
          Prisma.$AddressPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    orderItems<T extends Order$orderItemsArgs<ExtArgs> = {}>(
      args?: Subset<T, Order$orderItemsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<'Order', 'String'>;
    readonly totalAmount: FieldRef<'Order', 'Decimal'>;
    readonly totalItem: FieldRef<'Order', 'Int'>;
    readonly status: FieldRef<'Order', 'OrderStatus'>;
    readonly paymentStatus: FieldRef<'Order', 'PaymentStatus'>;
    readonly userId: FieldRef<'Order', 'String'>;
    readonly addressId: FieldRef<'Order', 'String'>;
    readonly createdAt: FieldRef<'Order', 'DateTime'>;
    readonly updatedAt: FieldRef<'Order', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput;
  };

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput;
  };

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[];
  };

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[];
  };

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[];
  };

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Order
       */
      select?: OrderSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Order
       */
      omit?: OrderOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: OrderInclude<ExtArgs> | null;
      /**
       * The data needed to create a Order.
       */
      data: XOR<OrderCreateInput, OrderUncheckedCreateInput>;
    };

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Order
       */
      select?: OrderSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Order
       */
      omit?: OrderOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: OrderInclude<ExtArgs> | null;
      /**
       * The data needed to update a Order.
       */
      data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>;
      /**
       * Choose, which Order to update.
       */
      where: OrderWhereUniqueInput;
    };

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>;
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput;
    /**
     * Limit how many Orders to update.
     */
    limit?: number;
  };

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Order
       */
      select?: OrderSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Order
       */
      omit?: OrderOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: OrderInclude<ExtArgs> | null;
      /**
       * The filter to search for the Order to update in case it exists.
       */
      where: OrderWhereUniqueInput;
      /**
       * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
       */
      create: XOR<OrderCreateInput, OrderUncheckedCreateInput>;
      /**
       * In case the Order was found with the provided `where` argument, update it with this data.
       */
      update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>;
    };

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Order
       */
      select?: OrderSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Order
       */
      omit?: OrderOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: OrderInclude<ExtArgs> | null;
      /**
       * Filter which Order to delete.
       */
      where: OrderWhereUniqueInput;
    };

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput;
    /**
     * Limit how many Orders to delete.
     */
    limit?: number;
  };

  /**
   * Order.orderItems
   */
  export type Order$orderItemsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null;
    where?: OrderItemWhereInput;
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[];
    cursor?: OrderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[];
  };

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Order
       */
      select?: OrderSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Order
       */
      omit?: OrderOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: OrderInclude<ExtArgs> | null;
    };

  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null;
    _avg: OrderItemAvgAggregateOutputType | null;
    _sum: OrderItemSumAggregateOutputType | null;
    _min: OrderItemMinAggregateOutputType | null;
    _max: OrderItemMaxAggregateOutputType | null;
  };

  export type OrderItemAvgAggregateOutputType = {
    unitPrice: Decimal | null;
    quantity: number | null;
  };

  export type OrderItemSumAggregateOutputType = {
    unitPrice: Decimal | null;
    quantity: number | null;
  };

  export type OrderItemMinAggregateOutputType = {
    id: string | null;
    unitPrice: Decimal | null;
    quantity: number | null;
    orderId: string | null;
    productId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type OrderItemMaxAggregateOutputType = {
    id: string | null;
    unitPrice: Decimal | null;
    quantity: number | null;
    orderId: string | null;
    productId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type OrderItemCountAggregateOutputType = {
    id: number;
    unitPrice: number;
    quantity: number;
    orderId: number;
    productId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type OrderItemAvgAggregateInputType = {
    unitPrice?: true;
    quantity?: true;
  };

  export type OrderItemSumAggregateInputType = {
    unitPrice?: true;
    quantity?: true;
  };

  export type OrderItemMinAggregateInputType = {
    id?: true;
    unitPrice?: true;
    quantity?: true;
    orderId?: true;
    productId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type OrderItemMaxAggregateInputType = {
    id?: true;
    unitPrice?: true;
    quantity?: true;
    orderId?: true;
    productId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type OrderItemCountAggregateInputType = {
    id?: true;
    unitPrice?: true;
    quantity?: true;
    orderId?: true;
    productId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type OrderItemAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrderItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned OrderItems
     **/
    _count?: true | OrderItemCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: OrderItemAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: OrderItemSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrderItemMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrderItemMaxAggregateInputType;
  };

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
    [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>;
  };

  export type OrderItemGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrderItemWhereInput;
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[];
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum;
    having?: OrderItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderItemCountAggregateInputType | true;
    _avg?: OrderItemAvgAggregateInputType;
    _sum?: OrderItemSumAggregateInputType;
    _min?: OrderItemMinAggregateInputType;
    _max?: OrderItemMaxAggregateInputType;
  };

  export type OrderItemGroupByOutputType = {
    id: string;
    unitPrice: Decimal;
    quantity: number;
    orderId: string;
    productId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: OrderItemCountAggregateOutputType | null;
    _avg: OrderItemAvgAggregateOutputType | null;
    _sum: OrderItemSumAggregateOutputType | null;
    _min: OrderItemMinAggregateOutputType | null;
    _max: OrderItemMaxAggregateOutputType | null;
  };

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> & {
        [P in keyof T & keyof OrderItemGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
          : GetScalarType<T[P], OrderItemGroupByOutputType[P]>;
      }
    >
  >;

  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        unitPrice?: boolean;
        quantity?: boolean;
        orderId?: boolean;
        productId?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        order?: boolean | OrderDefaultArgs<ExtArgs>;
        product?: boolean | ProductDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['orderItem']
    >;

  export type OrderItemSelectScalar = {
    id?: boolean;
    unitPrice?: boolean;
    quantity?: boolean;
    orderId?: boolean;
    productId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type OrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      'id' | 'unitPrice' | 'quantity' | 'orderId' | 'productId' | 'createdAt' | 'updatedAt',
      ExtArgs['result']['orderItem']
    >;
  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      order?: boolean | OrderDefaultArgs<ExtArgs>;
      product?: boolean | ProductDefaultArgs<ExtArgs>;
    };

  export type $OrderItemPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'OrderItem';
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>;
      product: Prisma.$ProductPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        unitPrice: Prisma.Decimal;
        quantity: number;
        orderId: string;
        productId: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['orderItem']
    >;
    composites: {};
  };

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> =
    $Result.GetResult<Prisma.$OrderItemPayload, S>;

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true;
    };

  export interface OrderItemDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'];
      meta: { name: 'OrderItem' };
    };
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(
      args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>
    ): Prisma__OrderItemClient<
      $Result.GetResult<
        Prisma.$OrderItemPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(
      args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OrderItemClient<
      $Result.GetResult<
        Prisma.$OrderItemPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(
      args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>
    ): Prisma__OrderItemClient<
      $Result.GetResult<
        Prisma.$OrderItemPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OrderItemClient<
      $Result.GetResult<
        Prisma.$OrderItemPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     *
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     *
     */
    findMany<T extends OrderItemFindManyArgs>(
      args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     *
     */
    create<T extends OrderItemCreateArgs>(
      args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>
    ): Prisma__OrderItemClient<
      $Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends OrderItemCreateManyArgs>(
      args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     *
     */
    delete<T extends OrderItemDeleteArgs>(
      args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>
    ): Prisma__OrderItemClient<
      $Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends OrderItemUpdateArgs>(
      args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>
    ): Prisma__OrderItemClient<
      $Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(
      args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends OrderItemUpdateManyArgs>(
      args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(
      args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>
    ): Prisma__OrderItemClient<
      $Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
     **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderItemAggregateArgs>(
      args: Subset<T, OrderItemAggregateArgs>
    ): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>;

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
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
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends (True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] }),
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends (T['by'] extends never[] ? True : False),
      InputErrors extends (ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]),
    >(
      args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the OrderItem model
     */
    readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, OrderDefaultArgs<ExtArgs>>
    ): Prisma__OrderClient<
      | $Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProductDefaultArgs<ExtArgs>>
    ): Prisma__ProductClient<
      | $Result.GetResult<
          Prisma.$ProductPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the OrderItem model
   */
  interface OrderItemFieldRefs {
    readonly id: FieldRef<'OrderItem', 'String'>;
    readonly unitPrice: FieldRef<'OrderItem', 'Decimal'>;
    readonly quantity: FieldRef<'OrderItem', 'Int'>;
    readonly orderId: FieldRef<'OrderItem', 'String'>;
    readonly productId: FieldRef<'OrderItem', 'String'>;
    readonly createdAt: FieldRef<'OrderItem', 'DateTime'>;
    readonly updatedAt: FieldRef<'OrderItem', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null;
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput;
  };

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null;
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput;
  };

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null;
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrderItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[];
  };

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null;
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrderItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[];
  };

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null;
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrderItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[];
  };

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null;
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>;
  };

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null;
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>;
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput;
  };

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>;
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput;
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number;
  };

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null;
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput;
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>;
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>;
  };

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null;
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput;
  };

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput;
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number;
  };

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null;
  };

  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null;
    _min: AddressMinAggregateOutputType | null;
    _max: AddressMaxAggregateOutputType | null;
  };

  export type AddressMinAggregateOutputType = {
    id: string | null;
    addressLine1: string | null;
    addressLine2: string | null;
    city: string | null;
    state: string | null;
    pincode: string | null;
    country: string | null;
    phoneNumber: string | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type AddressMaxAggregateOutputType = {
    id: string | null;
    addressLine1: string | null;
    addressLine2: string | null;
    city: string | null;
    state: string | null;
    pincode: string | null;
    country: string | null;
    phoneNumber: string | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type AddressCountAggregateOutputType = {
    id: number;
    addressLine1: number;
    addressLine2: number;
    city: number;
    state: number;
    pincode: number;
    country: number;
    phoneNumber: number;
    userId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type AddressMinAggregateInputType = {
    id?: true;
    addressLine1?: true;
    addressLine2?: true;
    city?: true;
    state?: true;
    pincode?: true;
    country?: true;
    phoneNumber?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type AddressMaxAggregateInputType = {
    id?: true;
    addressLine1?: true;
    addressLine2?: true;
    city?: true;
    state?: true;
    pincode?: true;
    country?: true;
    phoneNumber?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type AddressCountAggregateInputType = {
    id?: true;
    addressLine1?: true;
    addressLine2?: true;
    city?: true;
    state?: true;
    pincode?: true;
    country?: true;
    phoneNumber?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type AddressAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Addresses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Addresses
     **/
    _count?: true | AddressCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AddressMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AddressMaxAggregateInputType;
  };

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
    [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>;
  };

  export type AddressGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AddressWhereInput;
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[];
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum;
    having?: AddressScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AddressCountAggregateInputType | true;
    _min?: AddressMinAggregateInputType;
    _max?: AddressMaxAggregateInputType;
  };

  export type AddressGroupByOutputType = {
    id: string;
    addressLine1: string;
    addressLine2: string | null;
    city: string;
    state: string;
    pincode: string;
    country: string;
    phoneNumber: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: AddressCountAggregateOutputType | null;
    _min: AddressMinAggregateOutputType | null;
    _max: AddressMaxAggregateOutputType | null;
  };

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> & {
        [P in keyof T & keyof AddressGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
          : GetScalarType<T[P], AddressGroupByOutputType[P]>;
      }
    >
  >;

  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        addressLine1?: boolean;
        addressLine2?: boolean;
        city?: boolean;
        state?: boolean;
        pincode?: boolean;
        country?: boolean;
        phoneNumber?: boolean;
        userId?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        user?: boolean | UserDefaultArgs<ExtArgs>;
        orders?: boolean | Address$ordersArgs<ExtArgs>;
        _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['address']
    >;

  export type AddressSelectScalar = {
    id?: boolean;
    addressLine1?: boolean;
    addressLine2?: boolean;
    city?: boolean;
    state?: boolean;
    pincode?: boolean;
    country?: boolean;
    phoneNumber?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      | 'id'
      | 'addressLine1'
      | 'addressLine2'
      | 'city'
      | 'state'
      | 'pincode'
      | 'country'
      | 'phoneNumber'
      | 'userId'
      | 'createdAt'
      | 'updatedAt',
      ExtArgs['result']['address']
    >;
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    orders?: boolean | Address$ordersArgs<ExtArgs>;
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      name: 'Address';
      objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        orders: Prisma.$OrderPayload<ExtArgs>[];
      };
      scalars: $Extensions.GetPayloadResult<
        {
          id: string;
          addressLine1: string;
          addressLine2: string | null;
          city: string;
          state: string;
          pincode: string;
          country: string;
          phoneNumber: string;
          userId: string;
          createdAt: Date;
          updatedAt: Date;
        },
        ExtArgs['result']['address']
      >;
      composites: {};
    };

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> =
    $Result.GetResult<Prisma.$AddressPayload, S>;

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    AddressFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: AddressCountAggregateInputType | true;
  };

  export interface AddressDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address']; meta: { name: 'Address' } };
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(
      args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>
    ): Prisma__AddressClient<
      $Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AddressClient<
      $Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(
      args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>
    ): Prisma__AddressClient<
      $Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AddressClient<
      $Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     *
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AddressFindManyArgs>(
      args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     *
     */
    create<T extends AddressCreateArgs>(
      args: SelectSubset<T, AddressCreateArgs<ExtArgs>>
    ): Prisma__AddressClient<
      $Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AddressCreateManyArgs>(
      args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     *
     */
    delete<T extends AddressDeleteArgs>(
      args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>
    ): Prisma__AddressClient<
      $Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AddressUpdateArgs>(
      args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>
    ): Prisma__AddressClient<
      $Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AddressDeleteManyArgs>(
      args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AddressUpdateManyArgs>(
      args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(
      args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>
    ): Prisma__AddressClient<
      $Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
     **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(
      args: Subset<T, AddressAggregateArgs>
    ): Prisma.PrismaPromise<GetAddressAggregateType<T>>;

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
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
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends (True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] }),
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends (T['by'] extends never[] ? True : False),
      InputErrors extends (ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]),
    >(
      args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Address model
     */
    readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    orders<T extends Address$ordersArgs<ExtArgs> = {}>(
      args?: Subset<T, Address$ordersArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<'Address', 'String'>;
    readonly addressLine1: FieldRef<'Address', 'String'>;
    readonly addressLine2: FieldRef<'Address', 'String'>;
    readonly city: FieldRef<'Address', 'String'>;
    readonly state: FieldRef<'Address', 'String'>;
    readonly pincode: FieldRef<'Address', 'String'>;
    readonly country: FieldRef<'Address', 'String'>;
    readonly phoneNumber: FieldRef<'Address', 'String'>;
    readonly userId: FieldRef<'Address', 'String'>;
    readonly createdAt: FieldRef<'Address', 'DateTime'>;
    readonly updatedAt: FieldRef<'Address', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null;
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput;
  };

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null;
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput;
  };

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null;
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Addresses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[];
  };

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null;
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Addresses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[];
  };

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null;
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Addresses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[];
  };

  /**
   * Address create
   */
  export type AddressCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null;
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>;
  };

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Address update
   */
  export type AddressUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null;
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>;
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput;
  };

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>;
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput;
    /**
     * Limit how many Addresses to update.
     */
    limit?: number;
  };

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null;
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput;
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>;
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>;
  };

  /**
   * Address delete
   */
  export type AddressDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null;
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput;
  };

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput;
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number;
  };

  /**
   * Address.orders
   */
  export type Address$ordersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
    where?: OrderWhereInput;
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[];
    cursor?: OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[];
  };

  /**
   * Address without action
   */
  export type AddressDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: 'id';
    firstName: 'firstName';
    lastName: 'lastName';
    userName: 'userName';
    email: 'email';
    password: 'password';
    role: 'role';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const ProductScalarFieldEnum: {
    id: 'id';
    productName: 'productName';
    productDesc: 'productDesc';
    productImages: 'productImages';
    price: 'price';
    rating: 'rating';
    isActive: 'isActive';
    createdById: 'createdById';
    categoryId: 'categoryId';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type ProductScalarFieldEnum =
    (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];

  export const InventoryScalarFieldEnum: {
    id: 'id';
    quantity: 'quantity';
    reserved: 'reserved';
    version: 'version';
    productId: 'productId';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type InventoryScalarFieldEnum =
    (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum];

  export const CategoryScalarFieldEnum: {
    id: 'id';
    name: 'name';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type CategoryScalarFieldEnum =
    (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum];

  export const CartScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum];

  export const CartItemScalarFieldEnum: {
    id: 'id';
    quantity: 'quantity';
    cartId: 'cartId';
    productId: 'productId';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type CartItemScalarFieldEnum =
    (typeof CartItemScalarFieldEnum)[keyof typeof CartItemScalarFieldEnum];

  export const OrderScalarFieldEnum: {
    id: 'id';
    totalAmount: 'totalAmount';
    totalItem: 'totalItem';
    status: 'status';
    paymentStatus: 'paymentStatus';
    userId: 'userId';
    addressId: 'addressId';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type OrderScalarFieldEnum =
    (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum];

  export const OrderItemScalarFieldEnum: {
    id: 'id';
    unitPrice: 'unitPrice';
    quantity: 'quantity';
    orderId: 'orderId';
    productId: 'productId';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type OrderItemScalarFieldEnum =
    (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum];

  export const AddressScalarFieldEnum: {
    id: 'id';
    addressLine1: 'addressLine1';
    addressLine2: 'addressLine2';
    city: 'city';
    state: 'state';
    pincode: 'pincode';
    country: 'country';
    phoneNumber: 'phoneNumber';
    userId: 'userId';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type AddressScalarFieldEnum =
    (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull;
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];

  export const UserOrderByRelevanceFieldEnum: {
    id: 'id';
    firstName: 'firstName';
    lastName: 'lastName';
    userName: 'userName';
    email: 'email';
    password: 'password';
  };

  export type UserOrderByRelevanceFieldEnum =
    (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum];

  export const JsonNullValueFilter: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
    AnyNull: typeof AnyNull;
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const ProductOrderByRelevanceFieldEnum: {
    id: 'id';
    productName: 'productName';
    productDesc: 'productDesc';
    createdById: 'createdById';
    categoryId: 'categoryId';
  };

  export type ProductOrderByRelevanceFieldEnum =
    (typeof ProductOrderByRelevanceFieldEnum)[keyof typeof ProductOrderByRelevanceFieldEnum];

  export const InventoryOrderByRelevanceFieldEnum: {
    id: 'id';
    productId: 'productId';
  };

  export type InventoryOrderByRelevanceFieldEnum =
    (typeof InventoryOrderByRelevanceFieldEnum)[keyof typeof InventoryOrderByRelevanceFieldEnum];

  export const CategoryOrderByRelevanceFieldEnum: {
    id: 'id';
    name: 'name';
  };

  export type CategoryOrderByRelevanceFieldEnum =
    (typeof CategoryOrderByRelevanceFieldEnum)[keyof typeof CategoryOrderByRelevanceFieldEnum];

  export const CartOrderByRelevanceFieldEnum: {
    id: 'id';
    userId: 'userId';
  };

  export type CartOrderByRelevanceFieldEnum =
    (typeof CartOrderByRelevanceFieldEnum)[keyof typeof CartOrderByRelevanceFieldEnum];

  export const CartItemOrderByRelevanceFieldEnum: {
    id: 'id';
    cartId: 'cartId';
    productId: 'productId';
  };

  export type CartItemOrderByRelevanceFieldEnum =
    (typeof CartItemOrderByRelevanceFieldEnum)[keyof typeof CartItemOrderByRelevanceFieldEnum];

  export const OrderOrderByRelevanceFieldEnum: {
    id: 'id';
    userId: 'userId';
    addressId: 'addressId';
  };

  export type OrderOrderByRelevanceFieldEnum =
    (typeof OrderOrderByRelevanceFieldEnum)[keyof typeof OrderOrderByRelevanceFieldEnum];

  export const OrderItemOrderByRelevanceFieldEnum: {
    id: 'id';
    orderId: 'orderId';
    productId: 'productId';
  };

  export type OrderItemOrderByRelevanceFieldEnum =
    (typeof OrderItemOrderByRelevanceFieldEnum)[keyof typeof OrderItemOrderByRelevanceFieldEnum];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  export const AddressOrderByRelevanceFieldEnum: {
    id: 'id';
    addressLine1: 'addressLine1';
    addressLine2: 'addressLine2';
    city: 'city';
    state: 'state';
    pincode: 'pincode';
    country: 'country';
    phoneNumber: 'phoneNumber';
    userId: 'userId';
  };

  export type AddressOrderByRelevanceFieldEnum =
    (typeof AddressOrderByRelevanceFieldEnum)[keyof typeof AddressOrderByRelevanceFieldEnum];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;

  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'QueryMode'
  >;

  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'OrderStatus'
  >;

  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'PaymentStatus'
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<'User'> | string;
    firstName?: StringFilter<'User'> | string;
    lastName?: StringFilter<'User'> | string;
    userName?: StringFilter<'User'> | string;
    email?: StringFilter<'User'> | string;
    password?: StringFilter<'User'> | string;
    role?: EnumRoleFilter<'User'> | $Enums.Role;
    createdAt?: DateTimeFilter<'User'> | Date | string;
    updatedAt?: DateTimeFilter<'User'> | Date | string;
    products?: ProductListRelationFilter;
    orders?: OrderListRelationFilter;
    addresses?: AddressListRelationFilter;
    cart?: XOR<CartNullableScalarRelationFilter, CartWhereInput> | null;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    userName?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    products?: ProductOrderByRelationAggregateInput;
    orders?: OrderOrderByRelationAggregateInput;
    addresses?: AddressOrderByRelationAggregateInput;
    cart?: CartOrderByWithRelationInput;
    _relevance?: UserOrderByRelevanceInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      userName?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      firstName?: StringFilter<'User'> | string;
      lastName?: StringFilter<'User'> | string;
      password?: StringFilter<'User'> | string;
      role?: EnumRoleFilter<'User'> | $Enums.Role;
      createdAt?: DateTimeFilter<'User'> | Date | string;
      updatedAt?: DateTimeFilter<'User'> | Date | string;
      products?: ProductListRelationFilter;
      orders?: OrderListRelationFilter;
      addresses?: AddressListRelationFilter;
      cart?: XOR<CartNullableScalarRelationFilter, CartWhereInput> | null;
    },
    'id' | 'userName' | 'email'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    userName?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'User'> | string;
    firstName?: StringWithAggregatesFilter<'User'> | string;
    lastName?: StringWithAggregatesFilter<'User'> | string;
    userName?: StringWithAggregatesFilter<'User'> | string;
    email?: StringWithAggregatesFilter<'User'> | string;
    password?: StringWithAggregatesFilter<'User'> | string;
    role?: EnumRoleWithAggregatesFilter<'User'> | $Enums.Role;
    createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
  };

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[];
    OR?: ProductWhereInput[];
    NOT?: ProductWhereInput | ProductWhereInput[];
    id?: StringFilter<'Product'> | string;
    productName?: StringFilter<'Product'> | string;
    productDesc?: StringFilter<'Product'> | string;
    productImages?: JsonFilter<'Product'>;
    price?: DecimalFilter<'Product'> | Decimal | DecimalJsLike | number | string;
    rating?: FloatFilter<'Product'> | number;
    isActive?: BoolFilter<'Product'> | boolean;
    createdById?: StringFilter<'Product'> | string;
    categoryId?: StringFilter<'Product'> | string;
    createdAt?: DateTimeFilter<'Product'> | Date | string;
    updatedAt?: DateTimeFilter<'Product'> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>;
    inventory?: XOR<InventoryNullableScalarRelationFilter, InventoryWhereInput> | null;
    orderItems?: OrderItemListRelationFilter;
    cartItems?: CartItemListRelationFilter;
  };

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder;
    productName?: SortOrder;
    productDesc?: SortOrder;
    productImages?: SortOrder;
    price?: SortOrder;
    rating?: SortOrder;
    isActive?: SortOrder;
    createdById?: SortOrder;
    categoryId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
    category?: CategoryOrderByWithRelationInput;
    inventory?: InventoryOrderByWithRelationInput;
    orderItems?: OrderItemOrderByRelationAggregateInput;
    cartItems?: CartItemOrderByRelationAggregateInput;
    _relevance?: ProductOrderByRelevanceInput;
  };

  export type ProductWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ProductWhereInput | ProductWhereInput[];
      OR?: ProductWhereInput[];
      NOT?: ProductWhereInput | ProductWhereInput[];
      productName?: StringFilter<'Product'> | string;
      productDesc?: StringFilter<'Product'> | string;
      productImages?: JsonFilter<'Product'>;
      price?: DecimalFilter<'Product'> | Decimal | DecimalJsLike | number | string;
      rating?: FloatFilter<'Product'> | number;
      isActive?: BoolFilter<'Product'> | boolean;
      createdById?: StringFilter<'Product'> | string;
      categoryId?: StringFilter<'Product'> | string;
      createdAt?: DateTimeFilter<'Product'> | Date | string;
      updatedAt?: DateTimeFilter<'Product'> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>;
      inventory?: XOR<InventoryNullableScalarRelationFilter, InventoryWhereInput> | null;
      orderItems?: OrderItemListRelationFilter;
      cartItems?: CartItemListRelationFilter;
    },
    'id'
  >;

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder;
    productName?: SortOrder;
    productDesc?: SortOrder;
    productImages?: SortOrder;
    price?: SortOrder;
    rating?: SortOrder;
    isActive?: SortOrder;
    createdById?: SortOrder;
    categoryId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: ProductCountOrderByAggregateInput;
    _avg?: ProductAvgOrderByAggregateInput;
    _max?: ProductMaxOrderByAggregateInput;
    _min?: ProductMinOrderByAggregateInput;
    _sum?: ProductSumOrderByAggregateInput;
  };

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[];
    OR?: ProductScalarWhereWithAggregatesInput[];
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Product'> | string;
    productName?: StringWithAggregatesFilter<'Product'> | string;
    productDesc?: StringWithAggregatesFilter<'Product'> | string;
    productImages?: JsonWithAggregatesFilter<'Product'>;
    price?: DecimalWithAggregatesFilter<'Product'> | Decimal | DecimalJsLike | number | string;
    rating?: FloatWithAggregatesFilter<'Product'> | number;
    isActive?: BoolWithAggregatesFilter<'Product'> | boolean;
    createdById?: StringWithAggregatesFilter<'Product'> | string;
    categoryId?: StringWithAggregatesFilter<'Product'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Product'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Product'> | Date | string;
  };

  export type InventoryWhereInput = {
    AND?: InventoryWhereInput | InventoryWhereInput[];
    OR?: InventoryWhereInput[];
    NOT?: InventoryWhereInput | InventoryWhereInput[];
    id?: StringFilter<'Inventory'> | string;
    quantity?: IntFilter<'Inventory'> | number;
    reserved?: IntFilter<'Inventory'> | number;
    version?: IntFilter<'Inventory'> | number;
    productId?: StringFilter<'Inventory'> | string;
    createdAt?: DateTimeFilter<'Inventory'> | Date | string;
    updatedAt?: DateTimeFilter<'Inventory'> | Date | string;
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>;
  };

  export type InventoryOrderByWithRelationInput = {
    id?: SortOrder;
    quantity?: SortOrder;
    reserved?: SortOrder;
    version?: SortOrder;
    productId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    product?: ProductOrderByWithRelationInput;
    _relevance?: InventoryOrderByRelevanceInput;
  };

  export type InventoryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      productId?: string;
      AND?: InventoryWhereInput | InventoryWhereInput[];
      OR?: InventoryWhereInput[];
      NOT?: InventoryWhereInput | InventoryWhereInput[];
      quantity?: IntFilter<'Inventory'> | number;
      reserved?: IntFilter<'Inventory'> | number;
      version?: IntFilter<'Inventory'> | number;
      createdAt?: DateTimeFilter<'Inventory'> | Date | string;
      updatedAt?: DateTimeFilter<'Inventory'> | Date | string;
      product?: XOR<ProductScalarRelationFilter, ProductWhereInput>;
    },
    'id' | 'productId'
  >;

  export type InventoryOrderByWithAggregationInput = {
    id?: SortOrder;
    quantity?: SortOrder;
    reserved?: SortOrder;
    version?: SortOrder;
    productId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: InventoryCountOrderByAggregateInput;
    _avg?: InventoryAvgOrderByAggregateInput;
    _max?: InventoryMaxOrderByAggregateInput;
    _min?: InventoryMinOrderByAggregateInput;
    _sum?: InventorySumOrderByAggregateInput;
  };

  export type InventoryScalarWhereWithAggregatesInput = {
    AND?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[];
    OR?: InventoryScalarWhereWithAggregatesInput[];
    NOT?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Inventory'> | string;
    quantity?: IntWithAggregatesFilter<'Inventory'> | number;
    reserved?: IntWithAggregatesFilter<'Inventory'> | number;
    version?: IntWithAggregatesFilter<'Inventory'> | number;
    productId?: StringWithAggregatesFilter<'Inventory'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Inventory'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Inventory'> | Date | string;
  };

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[];
    OR?: CategoryWhereInput[];
    NOT?: CategoryWhereInput | CategoryWhereInput[];
    id?: StringFilter<'Category'> | string;
    name?: StringFilter<'Category'> | string;
    createdAt?: DateTimeFilter<'Category'> | Date | string;
    updatedAt?: DateTimeFilter<'Category'> | Date | string;
    products?: ProductListRelationFilter;
  };

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    products?: ProductOrderByRelationAggregateInput;
    _relevance?: CategoryOrderByRelevanceInput;
  };

  export type CategoryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      name?: string;
      AND?: CategoryWhereInput | CategoryWhereInput[];
      OR?: CategoryWhereInput[];
      NOT?: CategoryWhereInput | CategoryWhereInput[];
      createdAt?: DateTimeFilter<'Category'> | Date | string;
      updatedAt?: DateTimeFilter<'Category'> | Date | string;
      products?: ProductListRelationFilter;
    },
    'id' | 'name'
  >;

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: CategoryCountOrderByAggregateInput;
    _max?: CategoryMaxOrderByAggregateInput;
    _min?: CategoryMinOrderByAggregateInput;
  };

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[];
    OR?: CategoryScalarWhereWithAggregatesInput[];
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Category'> | string;
    name?: StringWithAggregatesFilter<'Category'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Category'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Category'> | Date | string;
  };

  export type CartWhereInput = {
    AND?: CartWhereInput | CartWhereInput[];
    OR?: CartWhereInput[];
    NOT?: CartWhereInput | CartWhereInput[];
    id?: StringFilter<'Cart'> | string;
    userId?: StringFilter<'Cart'> | string;
    createdAt?: DateTimeFilter<'Cart'> | Date | string;
    updatedAt?: DateTimeFilter<'Cart'> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    items?: CartItemListRelationFilter;
  };

  export type CartOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
    items?: CartItemOrderByRelationAggregateInput;
    _relevance?: CartOrderByRelevanceInput;
  };

  export type CartWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      userId?: string;
      AND?: CartWhereInput | CartWhereInput[];
      OR?: CartWhereInput[];
      NOT?: CartWhereInput | CartWhereInput[];
      createdAt?: DateTimeFilter<'Cart'> | Date | string;
      updatedAt?: DateTimeFilter<'Cart'> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      items?: CartItemListRelationFilter;
    },
    'id' | 'userId'
  >;

  export type CartOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: CartCountOrderByAggregateInput;
    _max?: CartMaxOrderByAggregateInput;
    _min?: CartMinOrderByAggregateInput;
  };

  export type CartScalarWhereWithAggregatesInput = {
    AND?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[];
    OR?: CartScalarWhereWithAggregatesInput[];
    NOT?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Cart'> | string;
    userId?: StringWithAggregatesFilter<'Cart'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Cart'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Cart'> | Date | string;
  };

  export type CartItemWhereInput = {
    AND?: CartItemWhereInput | CartItemWhereInput[];
    OR?: CartItemWhereInput[];
    NOT?: CartItemWhereInput | CartItemWhereInput[];
    id?: StringFilter<'CartItem'> | string;
    quantity?: IntFilter<'CartItem'> | number;
    cartId?: StringFilter<'CartItem'> | string;
    productId?: StringFilter<'CartItem'> | string;
    createdAt?: DateTimeFilter<'CartItem'> | Date | string;
    updatedAt?: DateTimeFilter<'CartItem'> | Date | string;
    cart?: XOR<CartScalarRelationFilter, CartWhereInput>;
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>;
  };

  export type CartItemOrderByWithRelationInput = {
    id?: SortOrder;
    quantity?: SortOrder;
    cartId?: SortOrder;
    productId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    cart?: CartOrderByWithRelationInput;
    product?: ProductOrderByWithRelationInput;
    _relevance?: CartItemOrderByRelevanceInput;
  };

  export type CartItemWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      cartId_productId?: CartItemCartIdProductIdCompoundUniqueInput;
      AND?: CartItemWhereInput | CartItemWhereInput[];
      OR?: CartItemWhereInput[];
      NOT?: CartItemWhereInput | CartItemWhereInput[];
      quantity?: IntFilter<'CartItem'> | number;
      cartId?: StringFilter<'CartItem'> | string;
      productId?: StringFilter<'CartItem'> | string;
      createdAt?: DateTimeFilter<'CartItem'> | Date | string;
      updatedAt?: DateTimeFilter<'CartItem'> | Date | string;
      cart?: XOR<CartScalarRelationFilter, CartWhereInput>;
      product?: XOR<ProductScalarRelationFilter, ProductWhereInput>;
    },
    'id' | 'cartId_productId'
  >;

  export type CartItemOrderByWithAggregationInput = {
    id?: SortOrder;
    quantity?: SortOrder;
    cartId?: SortOrder;
    productId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: CartItemCountOrderByAggregateInput;
    _avg?: CartItemAvgOrderByAggregateInput;
    _max?: CartItemMaxOrderByAggregateInput;
    _min?: CartItemMinOrderByAggregateInput;
    _sum?: CartItemSumOrderByAggregateInput;
  };

  export type CartItemScalarWhereWithAggregatesInput = {
    AND?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[];
    OR?: CartItemScalarWhereWithAggregatesInput[];
    NOT?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'CartItem'> | string;
    quantity?: IntWithAggregatesFilter<'CartItem'> | number;
    cartId?: StringWithAggregatesFilter<'CartItem'> | string;
    productId?: StringWithAggregatesFilter<'CartItem'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'CartItem'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'CartItem'> | Date | string;
  };

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[];
    OR?: OrderWhereInput[];
    NOT?: OrderWhereInput | OrderWhereInput[];
    id?: StringFilter<'Order'> | string;
    totalAmount?: DecimalFilter<'Order'> | Decimal | DecimalJsLike | number | string;
    totalItem?: IntFilter<'Order'> | number;
    status?: EnumOrderStatusFilter<'Order'> | $Enums.OrderStatus;
    paymentStatus?: EnumPaymentStatusFilter<'Order'> | $Enums.PaymentStatus;
    userId?: StringFilter<'Order'> | string;
    addressId?: StringFilter<'Order'> | string;
    createdAt?: DateTimeFilter<'Order'> | Date | string;
    updatedAt?: DateTimeFilter<'Order'> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    address?: XOR<AddressScalarRelationFilter, AddressWhereInput>;
    orderItems?: OrderItemListRelationFilter;
  };

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder;
    totalAmount?: SortOrder;
    totalItem?: SortOrder;
    status?: SortOrder;
    paymentStatus?: SortOrder;
    userId?: SortOrder;
    addressId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
    address?: AddressOrderByWithRelationInput;
    orderItems?: OrderItemOrderByRelationAggregateInput;
    _relevance?: OrderOrderByRelevanceInput;
  };

  export type OrderWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: OrderWhereInput | OrderWhereInput[];
      OR?: OrderWhereInput[];
      NOT?: OrderWhereInput | OrderWhereInput[];
      totalAmount?: DecimalFilter<'Order'> | Decimal | DecimalJsLike | number | string;
      totalItem?: IntFilter<'Order'> | number;
      status?: EnumOrderStatusFilter<'Order'> | $Enums.OrderStatus;
      paymentStatus?: EnumPaymentStatusFilter<'Order'> | $Enums.PaymentStatus;
      userId?: StringFilter<'Order'> | string;
      addressId?: StringFilter<'Order'> | string;
      createdAt?: DateTimeFilter<'Order'> | Date | string;
      updatedAt?: DateTimeFilter<'Order'> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      address?: XOR<AddressScalarRelationFilter, AddressWhereInput>;
      orderItems?: OrderItemListRelationFilter;
    },
    'id'
  >;

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder;
    totalAmount?: SortOrder;
    totalItem?: SortOrder;
    status?: SortOrder;
    paymentStatus?: SortOrder;
    userId?: SortOrder;
    addressId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: OrderCountOrderByAggregateInput;
    _avg?: OrderAvgOrderByAggregateInput;
    _max?: OrderMaxOrderByAggregateInput;
    _min?: OrderMinOrderByAggregateInput;
    _sum?: OrderSumOrderByAggregateInput;
  };

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[];
    OR?: OrderScalarWhereWithAggregatesInput[];
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Order'> | string;
    totalAmount?: DecimalWithAggregatesFilter<'Order'> | Decimal | DecimalJsLike | number | string;
    totalItem?: IntWithAggregatesFilter<'Order'> | number;
    status?: EnumOrderStatusWithAggregatesFilter<'Order'> | $Enums.OrderStatus;
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<'Order'> | $Enums.PaymentStatus;
    userId?: StringWithAggregatesFilter<'Order'> | string;
    addressId?: StringWithAggregatesFilter<'Order'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Order'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Order'> | Date | string;
  };

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[];
    OR?: OrderItemWhereInput[];
    NOT?: OrderItemWhereInput | OrderItemWhereInput[];
    id?: StringFilter<'OrderItem'> | string;
    unitPrice?: DecimalFilter<'OrderItem'> | Decimal | DecimalJsLike | number | string;
    quantity?: IntFilter<'OrderItem'> | number;
    orderId?: StringFilter<'OrderItem'> | string;
    productId?: StringFilter<'OrderItem'> | string;
    createdAt?: DateTimeFilter<'OrderItem'> | Date | string;
    updatedAt?: DateTimeFilter<'OrderItem'> | Date | string;
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>;
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>;
  };

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder;
    unitPrice?: SortOrder;
    quantity?: SortOrder;
    orderId?: SortOrder;
    productId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    order?: OrderOrderByWithRelationInput;
    product?: ProductOrderByWithRelationInput;
    _relevance?: OrderItemOrderByRelevanceInput;
  };

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: OrderItemWhereInput | OrderItemWhereInput[];
      OR?: OrderItemWhereInput[];
      NOT?: OrderItemWhereInput | OrderItemWhereInput[];
      unitPrice?: DecimalFilter<'OrderItem'> | Decimal | DecimalJsLike | number | string;
      quantity?: IntFilter<'OrderItem'> | number;
      orderId?: StringFilter<'OrderItem'> | string;
      productId?: StringFilter<'OrderItem'> | string;
      createdAt?: DateTimeFilter<'OrderItem'> | Date | string;
      updatedAt?: DateTimeFilter<'OrderItem'> | Date | string;
      order?: XOR<OrderScalarRelationFilter, OrderWhereInput>;
      product?: XOR<ProductScalarRelationFilter, ProductWhereInput>;
    },
    'id'
  >;

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder;
    unitPrice?: SortOrder;
    quantity?: SortOrder;
    orderId?: SortOrder;
    productId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: OrderItemCountOrderByAggregateInput;
    _avg?: OrderItemAvgOrderByAggregateInput;
    _max?: OrderItemMaxOrderByAggregateInput;
    _min?: OrderItemMinOrderByAggregateInput;
    _sum?: OrderItemSumOrderByAggregateInput;
  };

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[];
    OR?: OrderItemScalarWhereWithAggregatesInput[];
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'OrderItem'> | string;
    unitPrice?:
      DecimalWithAggregatesFilter<'OrderItem'> | Decimal | DecimalJsLike | number | string;
    quantity?: IntWithAggregatesFilter<'OrderItem'> | number;
    orderId?: StringWithAggregatesFilter<'OrderItem'> | string;
    productId?: StringWithAggregatesFilter<'OrderItem'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'OrderItem'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'OrderItem'> | Date | string;
  };

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[];
    OR?: AddressWhereInput[];
    NOT?: AddressWhereInput | AddressWhereInput[];
    id?: StringFilter<'Address'> | string;
    addressLine1?: StringFilter<'Address'> | string;
    addressLine2?: StringNullableFilter<'Address'> | string | null;
    city?: StringFilter<'Address'> | string;
    state?: StringFilter<'Address'> | string;
    pincode?: StringFilter<'Address'> | string;
    country?: StringFilter<'Address'> | string;
    phoneNumber?: StringFilter<'Address'> | string;
    userId?: StringFilter<'Address'> | string;
    createdAt?: DateTimeFilter<'Address'> | Date | string;
    updatedAt?: DateTimeFilter<'Address'> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    orders?: OrderListRelationFilter;
  };

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder;
    addressLine1?: SortOrder;
    addressLine2?: SortOrderInput | SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    pincode?: SortOrder;
    country?: SortOrder;
    phoneNumber?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
    orders?: OrderOrderByRelationAggregateInput;
    _relevance?: AddressOrderByRelevanceInput;
  };

  export type AddressWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: AddressWhereInput | AddressWhereInput[];
      OR?: AddressWhereInput[];
      NOT?: AddressWhereInput | AddressWhereInput[];
      addressLine1?: StringFilter<'Address'> | string;
      addressLine2?: StringNullableFilter<'Address'> | string | null;
      city?: StringFilter<'Address'> | string;
      state?: StringFilter<'Address'> | string;
      pincode?: StringFilter<'Address'> | string;
      country?: StringFilter<'Address'> | string;
      phoneNumber?: StringFilter<'Address'> | string;
      userId?: StringFilter<'Address'> | string;
      createdAt?: DateTimeFilter<'Address'> | Date | string;
      updatedAt?: DateTimeFilter<'Address'> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      orders?: OrderListRelationFilter;
    },
    'id'
  >;

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder;
    addressLine1?: SortOrder;
    addressLine2?: SortOrderInput | SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    pincode?: SortOrder;
    country?: SortOrder;
    phoneNumber?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: AddressCountOrderByAggregateInput;
    _max?: AddressMaxOrderByAggregateInput;
    _min?: AddressMinOrderByAggregateInput;
  };

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[];
    OR?: AddressScalarWhereWithAggregatesInput[];
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Address'> | string;
    addressLine1?: StringWithAggregatesFilter<'Address'> | string;
    addressLine2?: StringNullableWithAggregatesFilter<'Address'> | string | null;
    city?: StringWithAggregatesFilter<'Address'> | string;
    state?: StringWithAggregatesFilter<'Address'> | string;
    pincode?: StringWithAggregatesFilter<'Address'> | string;
    country?: StringWithAggregatesFilter<'Address'> | string;
    phoneNumber?: StringWithAggregatesFilter<'Address'> | string;
    userId?: StringWithAggregatesFilter<'Address'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Address'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Address'> | Date | string;
  };

  export type UserCreateInput = {
    id?: string;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    products?: ProductCreateNestedManyWithoutUserInput;
    orders?: OrderCreateNestedManyWithoutUserInput;
    addresses?: AddressCreateNestedManyWithoutUserInput;
    cart?: CartCreateNestedOneWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    products?: ProductUncheckedCreateNestedManyWithoutUserInput;
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput;
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput;
    cart?: CartUncheckedCreateNestedOneWithoutUserInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    userName?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    products?: ProductUpdateManyWithoutUserNestedInput;
    orders?: OrderUpdateManyWithoutUserNestedInput;
    addresses?: AddressUpdateManyWithoutUserNestedInput;
    cart?: CartUpdateOneWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    userName?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    products?: ProductUncheckedUpdateManyWithoutUserNestedInput;
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput;
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput;
    cart?: CartUncheckedUpdateOneWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    userName?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    userName?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProductCreateInput = {
    id?: string;
    productName: string;
    productDesc: string;
    productImages: JsonNullValueInput | InputJsonValue;
    price: Decimal | DecimalJsLike | number | string;
    rating?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutProductsInput;
    category: CategoryCreateNestedOneWithoutProductsInput;
    inventory?: InventoryCreateNestedOneWithoutProductInput;
    orderItems?: OrderItemCreateNestedManyWithoutProductInput;
    cartItems?: CartItemCreateNestedManyWithoutProductInput;
  };

  export type ProductUncheckedCreateInput = {
    id?: string;
    productName: string;
    productDesc: string;
    productImages: JsonNullValueInput | InputJsonValue;
    price: Decimal | DecimalJsLike | number | string;
    rating?: number;
    isActive?: boolean;
    createdById: string;
    categoryId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inventory?: InventoryUncheckedCreateNestedOneWithoutProductInput;
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput;
    cartItems?: CartItemUncheckedCreateNestedManyWithoutProductInput;
  };

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    productName?: StringFieldUpdateOperationsInput | string;
    productDesc?: StringFieldUpdateOperationsInput | string;
    productImages?: JsonNullValueInput | InputJsonValue;
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutProductsNestedInput;
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput;
    inventory?: InventoryUpdateOneWithoutProductNestedInput;
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput;
    cartItems?: CartItemUpdateManyWithoutProductNestedInput;
  };

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    productName?: StringFieldUpdateOperationsInput | string;
    productDesc?: StringFieldUpdateOperationsInput | string;
    productImages?: JsonNullValueInput | InputJsonValue;
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdById?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: InventoryUncheckedUpdateOneWithoutProductNestedInput;
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput;
    cartItems?: CartItemUncheckedUpdateManyWithoutProductNestedInput;
  };

  export type ProductCreateManyInput = {
    id?: string;
    productName: string;
    productDesc: string;
    productImages: JsonNullValueInput | InputJsonValue;
    price: Decimal | DecimalJsLike | number | string;
    rating?: number;
    isActive?: boolean;
    createdById: string;
    categoryId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    productName?: StringFieldUpdateOperationsInput | string;
    productDesc?: StringFieldUpdateOperationsInput | string;
    productImages?: JsonNullValueInput | InputJsonValue;
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    productName?: StringFieldUpdateOperationsInput | string;
    productDesc?: StringFieldUpdateOperationsInput | string;
    productImages?: JsonNullValueInput | InputJsonValue;
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdById?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type InventoryCreateInput = {
    id?: string;
    quantity?: number;
    reserved?: number;
    version?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    product: ProductCreateNestedOneWithoutInventoryInput;
  };

  export type InventoryUncheckedCreateInput = {
    id?: string;
    quantity?: number;
    reserved?: number;
    version?: number;
    productId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type InventoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    reserved?: IntFieldUpdateOperationsInput | number;
    version?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    product?: ProductUpdateOneRequiredWithoutInventoryNestedInput;
  };

  export type InventoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    reserved?: IntFieldUpdateOperationsInput | number;
    version?: IntFieldUpdateOperationsInput | number;
    productId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type InventoryCreateManyInput = {
    id?: string;
    quantity?: number;
    reserved?: number;
    version?: number;
    productId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type InventoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    reserved?: IntFieldUpdateOperationsInput | number;
    version?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type InventoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    reserved?: IntFieldUpdateOperationsInput | number;
    version?: IntFieldUpdateOperationsInput | number;
    productId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CategoryCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    products?: ProductCreateNestedManyWithoutCategoryInput;
  };

  export type CategoryUncheckedCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput;
  };

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    products?: ProductUpdateManyWithoutCategoryNestedInput;
  };

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput;
  };

  export type CategoryCreateManyInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CartCreateInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutCartInput;
    items?: CartItemCreateNestedManyWithoutCartInput;
  };

  export type CartUncheckedCreateInput = {
    id?: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: CartItemUncheckedCreateNestedManyWithoutCartInput;
  };

  export type CartUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutCartNestedInput;
    items?: CartItemUpdateManyWithoutCartNestedInput;
  };

  export type CartUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    items?: CartItemUncheckedUpdateManyWithoutCartNestedInput;
  };

  export type CartCreateManyInput = {
    id?: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CartUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CartUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CartItemCreateInput = {
    id?: string;
    quantity?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cart: CartCreateNestedOneWithoutItemsInput;
    product: ProductCreateNestedOneWithoutCartItemsInput;
  };

  export type CartItemUncheckedCreateInput = {
    id?: string;
    quantity?: number;
    cartId: string;
    productId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CartItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    cart?: CartUpdateOneRequiredWithoutItemsNestedInput;
    product?: ProductUpdateOneRequiredWithoutCartItemsNestedInput;
  };

  export type CartItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    cartId?: StringFieldUpdateOperationsInput | string;
    productId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CartItemCreateManyInput = {
    id?: string;
    quantity?: number;
    cartId: string;
    productId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CartItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CartItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    cartId?: StringFieldUpdateOperationsInput | string;
    productId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrderCreateInput = {
    id?: string;
    totalAmount: Decimal | DecimalJsLike | number | string;
    totalItem: number;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.PaymentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutOrdersInput;
    address: AddressCreateNestedOneWithoutOrdersInput;
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput;
  };

  export type OrderUncheckedCreateInput = {
    id?: string;
    totalAmount: Decimal | DecimalJsLike | number | string;
    totalItem: number;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.PaymentStatus;
    userId: string;
    addressId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput;
  };

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    totalItem?: IntFieldUpdateOperationsInput | number;
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput;
    address?: AddressUpdateOneRequiredWithoutOrdersNestedInput;
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput;
  };

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    totalItem?: IntFieldUpdateOperationsInput | number;
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    userId?: StringFieldUpdateOperationsInput | string;
    addressId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
  };

  export type OrderCreateManyInput = {
    id?: string;
    totalAmount: Decimal | DecimalJsLike | number | string;
    totalItem: number;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.PaymentStatus;
    userId: string;
    addressId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    totalItem?: IntFieldUpdateOperationsInput | number;
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    totalItem?: IntFieldUpdateOperationsInput | number;
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    userId?: StringFieldUpdateOperationsInput | string;
    addressId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrderItemCreateInput = {
    id?: string;
    unitPrice: Decimal | DecimalJsLike | number | string;
    quantity: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    order: OrderCreateNestedOneWithoutOrderItemsInput;
    product: ProductCreateNestedOneWithoutOrderItemsInput;
  };

  export type OrderItemUncheckedCreateInput = {
    id?: string;
    unitPrice: Decimal | DecimalJsLike | number | string;
    quantity: number;
    orderId: string;
    productId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput;
    product?: ProductUpdateOneRequiredWithoutOrderItemsNestedInput;
  };

  export type OrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    orderId?: StringFieldUpdateOperationsInput | string;
    productId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrderItemCreateManyInput = {
    id?: string;
    unitPrice: Decimal | DecimalJsLike | number | string;
    quantity: number;
    orderId: string;
    productId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    orderId?: StringFieldUpdateOperationsInput | string;
    productId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AddressCreateInput = {
    id?: string;
    addressLine1: string;
    addressLine2?: string | null;
    city: string;
    state: string;
    pincode: string;
    country: string;
    phoneNumber: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutAddressesInput;
    orders?: OrderCreateNestedManyWithoutAddressInput;
  };

  export type AddressUncheckedCreateInput = {
    id?: string;
    addressLine1: string;
    addressLine2?: string | null;
    city: string;
    state: string;
    pincode: string;
    country: string;
    phoneNumber: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: OrderUncheckedCreateNestedManyWithoutAddressInput;
  };

  export type AddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    addressLine1?: StringFieldUpdateOperationsInput | string;
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    pincode?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutAddressesNestedInput;
    orders?: OrderUpdateManyWithoutAddressNestedInput;
  };

  export type AddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    addressLine1?: StringFieldUpdateOperationsInput | string;
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    pincode?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: OrderUncheckedUpdateManyWithoutAddressNestedInput;
  };

  export type AddressCreateManyInput = {
    id?: string;
    addressLine1: string;
    addressLine2?: string | null;
    city: string;
    state: string;
    pincode: string;
    country: string;
    phoneNumber: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type AddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    addressLine1?: StringFieldUpdateOperationsInput | string;
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    pincode?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    addressLine1?: StringFieldUpdateOperationsInput | string;
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    pincode?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[];
    notIn?: $Enums.Role[];
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type ProductListRelationFilter = {
    every?: ProductWhereInput;
    some?: ProductWhereInput;
    none?: ProductWhereInput;
  };

  export type OrderListRelationFilter = {
    every?: OrderWhereInput;
    some?: OrderWhereInput;
    none?: OrderWhereInput;
  };

  export type AddressListRelationFilter = {
    every?: AddressWhereInput;
    some?: AddressWhereInput;
    none?: AddressWhereInput;
  };

  export type CartNullableScalarRelationFilter = {
    is?: CartWhereInput | null;
    isNot?: CartWhereInput | null;
  };

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type AddressOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    userName?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    userName?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    userName?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[];
    notIn?: $Enums.Role[];
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumRoleFilter<$PrismaModel>;
    _max?: NestedEnumRoleFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>
        >,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>;

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
    path?: string;
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue;
    lte?: InputJsonValue;
    gt?: InputJsonValue;
    gte?: InputJsonValue;
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
  };

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    in?: Decimal[] | DecimalJsLike[] | number[] | string[];
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[];
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string;
  };

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput;
    isNot?: CategoryWhereInput;
  };

  export type InventoryNullableScalarRelationFilter = {
    is?: InventoryWhereInput | null;
    isNot?: InventoryWhereInput | null;
  };

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput;
    some?: OrderItemWhereInput;
    none?: OrderItemWhereInput;
  };

  export type CartItemListRelationFilter = {
    every?: CartItemWhereInput;
    some?: CartItemWhereInput;
    none?: CartItemWhereInput;
  };

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CartItemOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ProductOrderByRelevanceInput = {
    fields: ProductOrderByRelevanceFieldEnum | ProductOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder;
    productName?: SortOrder;
    productDesc?: SortOrder;
    productImages?: SortOrder;
    price?: SortOrder;
    rating?: SortOrder;
    isActive?: SortOrder;
    createdById?: SortOrder;
    categoryId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder;
    rating?: SortOrder;
  };

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder;
    productName?: SortOrder;
    productDesc?: SortOrder;
    price?: SortOrder;
    rating?: SortOrder;
    isActive?: SortOrder;
    createdById?: SortOrder;
    categoryId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder;
    productName?: SortOrder;
    productDesc?: SortOrder;
    price?: SortOrder;
    rating?: SortOrder;
    isActive?: SortOrder;
    createdById?: SortOrder;
    categoryId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder;
    rating?: SortOrder;
  };
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonWithAggregatesFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>
        >,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
    path?: string;
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue;
    lte?: InputJsonValue;
    gt?: InputJsonValue;
    gte?: InputJsonValue;
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedJsonFilter<$PrismaModel>;
    _max?: NestedJsonFilter<$PrismaModel>;
  };

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    in?: Decimal[] | DecimalJsLike[] | number[] | string[];
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[];
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    not?:
      NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedDecimalFilter<$PrismaModel>;
    _sum?: NestedDecimalFilter<$PrismaModel>;
    _min?: NestedDecimalFilter<$PrismaModel>;
    _max?: NestedDecimalFilter<$PrismaModel>;
  };

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput;
    isNot?: ProductWhereInput;
  };

  export type InventoryOrderByRelevanceInput = {
    fields: InventoryOrderByRelevanceFieldEnum | InventoryOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type InventoryCountOrderByAggregateInput = {
    id?: SortOrder;
    quantity?: SortOrder;
    reserved?: SortOrder;
    version?: SortOrder;
    productId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type InventoryAvgOrderByAggregateInput = {
    quantity?: SortOrder;
    reserved?: SortOrder;
    version?: SortOrder;
  };

  export type InventoryMaxOrderByAggregateInput = {
    id?: SortOrder;
    quantity?: SortOrder;
    reserved?: SortOrder;
    version?: SortOrder;
    productId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type InventoryMinOrderByAggregateInput = {
    id?: SortOrder;
    quantity?: SortOrder;
    reserved?: SortOrder;
    version?: SortOrder;
    productId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type InventorySumOrderByAggregateInput = {
    quantity?: SortOrder;
    reserved?: SortOrder;
    version?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type CategoryOrderByRelevanceInput = {
    fields: CategoryOrderByRelevanceFieldEnum | CategoryOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CartOrderByRelevanceInput = {
    fields: CartOrderByRelevanceFieldEnum | CartOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type CartCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CartMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CartMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CartScalarRelationFilter = {
    is?: CartWhereInput;
    isNot?: CartWhereInput;
  };

  export type CartItemOrderByRelevanceInput = {
    fields: CartItemOrderByRelevanceFieldEnum | CartItemOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type CartItemCartIdProductIdCompoundUniqueInput = {
    cartId: string;
    productId: string;
  };

  export type CartItemCountOrderByAggregateInput = {
    id?: SortOrder;
    quantity?: SortOrder;
    cartId?: SortOrder;
    productId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CartItemAvgOrderByAggregateInput = {
    quantity?: SortOrder;
  };

  export type CartItemMaxOrderByAggregateInput = {
    id?: SortOrder;
    quantity?: SortOrder;
    cartId?: SortOrder;
    productId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CartItemMinOrderByAggregateInput = {
    id?: SortOrder;
    quantity?: SortOrder;
    cartId?: SortOrder;
    productId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CartItemSumOrderByAggregateInput = {
    quantity?: SortOrder;
  };

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OrderStatus[];
    notIn?: $Enums.OrderStatus[];
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus;
  };

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentStatus[];
    notIn?: $Enums.PaymentStatus[];
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus;
  };

  export type AddressScalarRelationFilter = {
    is?: AddressWhereInput;
    isNot?: AddressWhereInput;
  };

  export type OrderOrderByRelevanceInput = {
    fields: OrderOrderByRelevanceFieldEnum | OrderOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder;
    totalAmount?: SortOrder;
    totalItem?: SortOrder;
    status?: SortOrder;
    paymentStatus?: SortOrder;
    userId?: SortOrder;
    addressId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type OrderAvgOrderByAggregateInput = {
    totalAmount?: SortOrder;
    totalItem?: SortOrder;
  };

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder;
    totalAmount?: SortOrder;
    totalItem?: SortOrder;
    status?: SortOrder;
    paymentStatus?: SortOrder;
    userId?: SortOrder;
    addressId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder;
    totalAmount?: SortOrder;
    totalItem?: SortOrder;
    status?: SortOrder;
    paymentStatus?: SortOrder;
    userId?: SortOrder;
    addressId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type OrderSumOrderByAggregateInput = {
    totalAmount?: SortOrder;
    totalItem?: SortOrder;
  };

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OrderStatus[];
    notIn?: $Enums.OrderStatus[];
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>;
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>;
  };

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentStatus[];
    notIn?: $Enums.PaymentStatus[];
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>;
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>;
  };

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput;
    isNot?: OrderWhereInput;
  };

  export type OrderItemOrderByRelevanceInput = {
    fields: OrderItemOrderByRelevanceFieldEnum | OrderItemOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder;
    unitPrice?: SortOrder;
    quantity?: SortOrder;
    orderId?: SortOrder;
    productId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type OrderItemAvgOrderByAggregateInput = {
    unitPrice?: SortOrder;
    quantity?: SortOrder;
  };

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder;
    unitPrice?: SortOrder;
    quantity?: SortOrder;
    orderId?: SortOrder;
    productId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder;
    unitPrice?: SortOrder;
    quantity?: SortOrder;
    orderId?: SortOrder;
    productId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type OrderItemSumOrderByAggregateInput = {
    unitPrice?: SortOrder;
    quantity?: SortOrder;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type AddressOrderByRelevanceInput = {
    fields: AddressOrderByRelevanceFieldEnum | AddressOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder;
    addressLine1?: SortOrder;
    addressLine2?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    pincode?: SortOrder;
    country?: SortOrder;
    phoneNumber?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder;
    addressLine1?: SortOrder;
    addressLine2?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    pincode?: SortOrder;
    country?: SortOrder;
    phoneNumber?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder;
    addressLine1?: SortOrder;
    addressLine2?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    pincode?: SortOrder;
    country?: SortOrder;
    phoneNumber?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type ProductCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput>
      | ProductCreateWithoutUserInput[]
      | ProductUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[];
    createMany?: ProductCreateManyUserInputEnvelope;
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
  };

  export type OrderCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
      | OrderCreateWithoutUserInput[]
      | OrderUncheckedCreateWithoutUserInput[];
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[];
    createMany?: OrderCreateManyUserInputEnvelope;
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
  };

  export type AddressCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
      | AddressCreateWithoutUserInput[]
      | AddressUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[];
    createMany?: AddressCreateManyUserInputEnvelope;
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[];
  };

  export type CartCreateNestedOneWithoutUserInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>;
    connectOrCreate?: CartCreateOrConnectWithoutUserInput;
    connect?: CartWhereUniqueInput;
  };

  export type ProductUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput>
      | ProductCreateWithoutUserInput[]
      | ProductUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[];
    createMany?: ProductCreateManyUserInputEnvelope;
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
  };

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
      | OrderCreateWithoutUserInput[]
      | OrderUncheckedCreateWithoutUserInput[];
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[];
    createMany?: OrderCreateManyUserInputEnvelope;
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
  };

  export type AddressUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
      | AddressCreateWithoutUserInput[]
      | AddressUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[];
    createMany?: AddressCreateManyUserInputEnvelope;
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[];
  };

  export type CartUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>;
    connectOrCreate?: CartCreateOrConnectWithoutUserInput;
    connect?: CartWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type ProductUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput>
      | ProductCreateWithoutUserInput[]
      | ProductUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[];
    upsert?:
      ProductUpsertWithWhereUniqueWithoutUserInput | ProductUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ProductCreateManyUserInputEnvelope;
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    update?:
      ProductUpdateWithWhereUniqueWithoutUserInput | ProductUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      ProductUpdateManyWithWhereWithoutUserInput | ProductUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[];
  };

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
      | OrderCreateWithoutUserInput[]
      | OrderUncheckedCreateWithoutUserInput[];
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[];
    upsert?:
      OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: OrderCreateManyUserInputEnvelope;
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    update?:
      OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[];
  };

  export type AddressUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
      | AddressCreateWithoutUserInput[]
      | AddressUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[];
    upsert?:
      AddressUpsertWithWhereUniqueWithoutUserInput | AddressUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: AddressCreateManyUserInputEnvelope;
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[];
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[];
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[];
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[];
    update?:
      AddressUpdateWithWhereUniqueWithoutUserInput | AddressUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      AddressUpdateManyWithWhereWithoutUserInput | AddressUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[];
  };

  export type CartUpdateOneWithoutUserNestedInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>;
    connectOrCreate?: CartCreateOrConnectWithoutUserInput;
    upsert?: CartUpsertWithoutUserInput;
    disconnect?: CartWhereInput | boolean;
    delete?: CartWhereInput | boolean;
    connect?: CartWhereUniqueInput;
    update?: XOR<
      XOR<CartUpdateToOneWithWhereWithoutUserInput, CartUpdateWithoutUserInput>,
      CartUncheckedUpdateWithoutUserInput
    >;
  };

  export type ProductUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput>
      | ProductCreateWithoutUserInput[]
      | ProductUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[];
    upsert?:
      ProductUpsertWithWhereUniqueWithoutUserInput | ProductUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ProductCreateManyUserInputEnvelope;
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    update?:
      ProductUpdateWithWhereUniqueWithoutUserInput | ProductUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      ProductUpdateManyWithWhereWithoutUserInput | ProductUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[];
  };

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
      | OrderCreateWithoutUserInput[]
      | OrderUncheckedCreateWithoutUserInput[];
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[];
    upsert?:
      OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: OrderCreateManyUserInputEnvelope;
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    update?:
      OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[];
  };

  export type AddressUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
      | AddressCreateWithoutUserInput[]
      | AddressUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[];
    upsert?:
      AddressUpsertWithWhereUniqueWithoutUserInput | AddressUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: AddressCreateManyUserInputEnvelope;
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[];
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[];
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[];
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[];
    update?:
      AddressUpdateWithWhereUniqueWithoutUserInput | AddressUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      AddressUpdateManyWithWhereWithoutUserInput | AddressUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[];
  };

  export type CartUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>;
    connectOrCreate?: CartCreateOrConnectWithoutUserInput;
    upsert?: CartUpsertWithoutUserInput;
    disconnect?: CartWhereInput | boolean;
    delete?: CartWhereInput | boolean;
    connect?: CartWhereUniqueInput;
    update?: XOR<
      XOR<CartUpdateToOneWithWhereWithoutUserInput, CartUpdateWithoutUserInput>,
      CartUncheckedUpdateWithoutUserInput
    >;
  };

  export type UserCreateNestedOneWithoutProductsInput = {
    create?: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: UserCreateOrConnectWithoutProductsInput;
    connect?: UserWhereUniqueInput;
  };

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput;
    connect?: CategoryWhereUniqueInput;
  };

  export type InventoryCreateNestedOneWithoutProductInput = {
    create?: XOR<InventoryCreateWithoutProductInput, InventoryUncheckedCreateWithoutProductInput>;
    connectOrCreate?: InventoryCreateOrConnectWithoutProductInput;
    connect?: InventoryWhereUniqueInput;
  };

  export type OrderItemCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
      | OrderItemCreateWithoutProductInput[]
      | OrderItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[];
    createMany?: OrderItemCreateManyProductInputEnvelope;
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
  };

  export type CartItemCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput>
      | CartItemCreateWithoutProductInput[]
      | CartItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[];
    createMany?: CartItemCreateManyProductInputEnvelope;
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[];
  };

  export type InventoryUncheckedCreateNestedOneWithoutProductInput = {
    create?: XOR<InventoryCreateWithoutProductInput, InventoryUncheckedCreateWithoutProductInput>;
    connectOrCreate?: InventoryCreateOrConnectWithoutProductInput;
    connect?: InventoryWhereUniqueInput;
  };

  export type OrderItemUncheckedCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
      | OrderItemCreateWithoutProductInput[]
      | OrderItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[];
    createMany?: OrderItemCreateManyProductInputEnvelope;
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
  };

  export type CartItemUncheckedCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput>
      | CartItemCreateWithoutProductInput[]
      | CartItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[];
    createMany?: CartItemCreateManyProductInputEnvelope;
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[];
  };

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string;
    increment?: Decimal | DecimalJsLike | number | string;
    decrement?: Decimal | DecimalJsLike | number | string;
    multiply?: Decimal | DecimalJsLike | number | string;
    divide?: Decimal | DecimalJsLike | number | string;
  };

  export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type UserUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: UserCreateOrConnectWithoutProductsInput;
    upsert?: UserUpsertWithoutProductsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<UserUpdateToOneWithWhereWithoutProductsInput, UserUpdateWithoutProductsInput>,
      UserUncheckedUpdateWithoutProductsInput
    >;
  };

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput;
    upsert?: CategoryUpsertWithoutProductsInput;
    connect?: CategoryWhereUniqueInput;
    update?: XOR<
      XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>,
      CategoryUncheckedUpdateWithoutProductsInput
    >;
  };

  export type InventoryUpdateOneWithoutProductNestedInput = {
    create?: XOR<InventoryCreateWithoutProductInput, InventoryUncheckedCreateWithoutProductInput>;
    connectOrCreate?: InventoryCreateOrConnectWithoutProductInput;
    upsert?: InventoryUpsertWithoutProductInput;
    disconnect?: InventoryWhereInput | boolean;
    delete?: InventoryWhereInput | boolean;
    connect?: InventoryWhereUniqueInput;
    update?: XOR<
      XOR<InventoryUpdateToOneWithWhereWithoutProductInput, InventoryUpdateWithoutProductInput>,
      InventoryUncheckedUpdateWithoutProductInput
    >;
  };

  export type OrderItemUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
      | OrderItemCreateWithoutProductInput[]
      | OrderItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[];
    upsert?:
      | OrderItemUpsertWithWhereUniqueWithoutProductInput
      | OrderItemUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: OrderItemCreateManyProductInputEnvelope;
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
    update?:
      | OrderItemUpdateWithWhereUniqueWithoutProductInput
      | OrderItemUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?:
      | OrderItemUpdateManyWithWhereWithoutProductInput
      | OrderItemUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[];
  };

  export type CartItemUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput>
      | CartItemCreateWithoutProductInput[]
      | CartItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[];
    upsert?:
      | CartItemUpsertWithWhereUniqueWithoutProductInput
      | CartItemUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: CartItemCreateManyProductInputEnvelope;
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[];
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[];
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[];
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[];
    update?:
      | CartItemUpdateWithWhereUniqueWithoutProductInput
      | CartItemUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?:
      | CartItemUpdateManyWithWhereWithoutProductInput
      | CartItemUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[];
  };

  export type InventoryUncheckedUpdateOneWithoutProductNestedInput = {
    create?: XOR<InventoryCreateWithoutProductInput, InventoryUncheckedCreateWithoutProductInput>;
    connectOrCreate?: InventoryCreateOrConnectWithoutProductInput;
    upsert?: InventoryUpsertWithoutProductInput;
    disconnect?: InventoryWhereInput | boolean;
    delete?: InventoryWhereInput | boolean;
    connect?: InventoryWhereUniqueInput;
    update?: XOR<
      XOR<InventoryUpdateToOneWithWhereWithoutProductInput, InventoryUpdateWithoutProductInput>,
      InventoryUncheckedUpdateWithoutProductInput
    >;
  };

  export type OrderItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
      | OrderItemCreateWithoutProductInput[]
      | OrderItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[];
    upsert?:
      | OrderItemUpsertWithWhereUniqueWithoutProductInput
      | OrderItemUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: OrderItemCreateManyProductInputEnvelope;
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
    update?:
      | OrderItemUpdateWithWhereUniqueWithoutProductInput
      | OrderItemUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?:
      | OrderItemUpdateManyWithWhereWithoutProductInput
      | OrderItemUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[];
  };

  export type CartItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput>
      | CartItemCreateWithoutProductInput[]
      | CartItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[];
    upsert?:
      | CartItemUpsertWithWhereUniqueWithoutProductInput
      | CartItemUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: CartItemCreateManyProductInputEnvelope;
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[];
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[];
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[];
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[];
    update?:
      | CartItemUpdateWithWhereUniqueWithoutProductInput
      | CartItemUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?:
      | CartItemUpdateManyWithWhereWithoutProductInput
      | CartItemUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[];
  };

  export type ProductCreateNestedOneWithoutInventoryInput = {
    create?: XOR<ProductCreateWithoutInventoryInput, ProductUncheckedCreateWithoutInventoryInput>;
    connectOrCreate?: ProductCreateOrConnectWithoutInventoryInput;
    connect?: ProductWhereUniqueInput;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type ProductUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<ProductCreateWithoutInventoryInput, ProductUncheckedCreateWithoutInventoryInput>;
    connectOrCreate?: ProductCreateOrConnectWithoutInventoryInput;
    upsert?: ProductUpsertWithoutInventoryInput;
    connect?: ProductWhereUniqueInput;
    update?: XOR<
      XOR<ProductUpdateToOneWithWhereWithoutInventoryInput, ProductUpdateWithoutInventoryInput>,
      ProductUncheckedUpdateWithoutInventoryInput
    >;
  };

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?:
      | XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
      | ProductCreateWithoutCategoryInput[]
      | ProductUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[];
    createMany?: ProductCreateManyCategoryInputEnvelope;
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
  };

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?:
      | XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
      | ProductCreateWithoutCategoryInput[]
      | ProductUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[];
    createMany?: ProductCreateManyCategoryInputEnvelope;
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
  };

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?:
      | XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
      | ProductCreateWithoutCategoryInput[]
      | ProductUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[];
    upsert?:
      | ProductUpsertWithWhereUniqueWithoutCategoryInput
      | ProductUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: ProductCreateManyCategoryInputEnvelope;
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    update?:
      | ProductUpdateWithWhereUniqueWithoutCategoryInput
      | ProductUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?:
      | ProductUpdateManyWithWhereWithoutCategoryInput
      | ProductUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[];
  };

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?:
      | XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
      | ProductCreateWithoutCategoryInput[]
      | ProductUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[];
    upsert?:
      | ProductUpsertWithWhereUniqueWithoutCategoryInput
      | ProductUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: ProductCreateManyCategoryInputEnvelope;
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    update?:
      | ProductUpdateWithWhereUniqueWithoutCategoryInput
      | ProductUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?:
      | ProductUpdateManyWithWhereWithoutCategoryInput
      | ProductUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutCartInput = {
    create?: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>;
    connectOrCreate?: UserCreateOrConnectWithoutCartInput;
    connect?: UserWhereUniqueInput;
  };

  export type CartItemCreateNestedManyWithoutCartInput = {
    create?:
      | XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput>
      | CartItemCreateWithoutCartInput[]
      | CartItemUncheckedCreateWithoutCartInput[];
    connectOrCreate?:
      CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[];
    createMany?: CartItemCreateManyCartInputEnvelope;
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[];
  };

  export type CartItemUncheckedCreateNestedManyWithoutCartInput = {
    create?:
      | XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput>
      | CartItemCreateWithoutCartInput[]
      | CartItemUncheckedCreateWithoutCartInput[];
    connectOrCreate?:
      CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[];
    createMany?: CartItemCreateManyCartInputEnvelope;
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[];
  };

  export type UserUpdateOneRequiredWithoutCartNestedInput = {
    create?: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>;
    connectOrCreate?: UserCreateOrConnectWithoutCartInput;
    upsert?: UserUpsertWithoutCartInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<UserUpdateToOneWithWhereWithoutCartInput, UserUpdateWithoutCartInput>,
      UserUncheckedUpdateWithoutCartInput
    >;
  };

  export type CartItemUpdateManyWithoutCartNestedInput = {
    create?:
      | XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput>
      | CartItemCreateWithoutCartInput[]
      | CartItemUncheckedCreateWithoutCartInput[];
    connectOrCreate?:
      CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[];
    upsert?:
      | CartItemUpsertWithWhereUniqueWithoutCartInput
      | CartItemUpsertWithWhereUniqueWithoutCartInput[];
    createMany?: CartItemCreateManyCartInputEnvelope;
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[];
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[];
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[];
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[];
    update?:
      | CartItemUpdateWithWhereUniqueWithoutCartInput
      | CartItemUpdateWithWhereUniqueWithoutCartInput[];
    updateMany?:
      CartItemUpdateManyWithWhereWithoutCartInput | CartItemUpdateManyWithWhereWithoutCartInput[];
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[];
  };

  export type CartItemUncheckedUpdateManyWithoutCartNestedInput = {
    create?:
      | XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput>
      | CartItemCreateWithoutCartInput[]
      | CartItemUncheckedCreateWithoutCartInput[];
    connectOrCreate?:
      CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[];
    upsert?:
      | CartItemUpsertWithWhereUniqueWithoutCartInput
      | CartItemUpsertWithWhereUniqueWithoutCartInput[];
    createMany?: CartItemCreateManyCartInputEnvelope;
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[];
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[];
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[];
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[];
    update?:
      | CartItemUpdateWithWhereUniqueWithoutCartInput
      | CartItemUpdateWithWhereUniqueWithoutCartInput[];
    updateMany?:
      CartItemUpdateManyWithWhereWithoutCartInput | CartItemUpdateManyWithWhereWithoutCartInput[];
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[];
  };

  export type CartCreateNestedOneWithoutItemsInput = {
    create?: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: CartCreateOrConnectWithoutItemsInput;
    connect?: CartWhereUniqueInput;
  };

  export type ProductCreateNestedOneWithoutCartItemsInput = {
    create?: XOR<ProductCreateWithoutCartItemsInput, ProductUncheckedCreateWithoutCartItemsInput>;
    connectOrCreate?: ProductCreateOrConnectWithoutCartItemsInput;
    connect?: ProductWhereUniqueInput;
  };

  export type CartUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: CartCreateOrConnectWithoutItemsInput;
    upsert?: CartUpsertWithoutItemsInput;
    connect?: CartWhereUniqueInput;
    update?: XOR<
      XOR<CartUpdateToOneWithWhereWithoutItemsInput, CartUpdateWithoutItemsInput>,
      CartUncheckedUpdateWithoutItemsInput
    >;
  };

  export type ProductUpdateOneRequiredWithoutCartItemsNestedInput = {
    create?: XOR<ProductCreateWithoutCartItemsInput, ProductUncheckedCreateWithoutCartItemsInput>;
    connectOrCreate?: ProductCreateOrConnectWithoutCartItemsInput;
    upsert?: ProductUpsertWithoutCartItemsInput;
    connect?: ProductWhereUniqueInput;
    update?: XOR<
      XOR<ProductUpdateToOneWithWhereWithoutCartItemsInput, ProductUpdateWithoutCartItemsInput>,
      ProductUncheckedUpdateWithoutCartItemsInput
    >;
  };

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput;
    connect?: UserWhereUniqueInput;
  };

  export type AddressCreateNestedOneWithoutOrdersInput = {
    create?: XOR<AddressCreateWithoutOrdersInput, AddressUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: AddressCreateOrConnectWithoutOrdersInput;
    connect?: AddressWhereUniqueInput;
  };

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?:
      | XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
      | OrderItemCreateWithoutOrderInput[]
      | OrderItemUncheckedCreateWithoutOrderInput[];
    connectOrCreate?:
      OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[];
    createMany?: OrderItemCreateManyOrderInputEnvelope;
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
  };

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?:
      | XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
      | OrderItemCreateWithoutOrderInput[]
      | OrderItemUncheckedCreateWithoutOrderInput[];
    connectOrCreate?:
      OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[];
    createMany?: OrderItemCreateManyOrderInputEnvelope;
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
  };

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus;
  };

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus;
  };

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput;
    upsert?: UserUpsertWithoutOrdersInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>,
      UserUncheckedUpdateWithoutOrdersInput
    >;
  };

  export type AddressUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<AddressCreateWithoutOrdersInput, AddressUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: AddressCreateOrConnectWithoutOrdersInput;
    upsert?: AddressUpsertWithoutOrdersInput;
    connect?: AddressWhereUniqueInput;
    update?: XOR<
      XOR<AddressUpdateToOneWithWhereWithoutOrdersInput, AddressUpdateWithoutOrdersInput>,
      AddressUncheckedUpdateWithoutOrdersInput
    >;
  };

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?:
      | XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
      | OrderItemCreateWithoutOrderInput[]
      | OrderItemUncheckedCreateWithoutOrderInput[];
    connectOrCreate?:
      OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[];
    upsert?:
      | OrderItemUpsertWithWhereUniqueWithoutOrderInput
      | OrderItemUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: OrderItemCreateManyOrderInputEnvelope;
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
    update?:
      | OrderItemUpdateWithWhereUniqueWithoutOrderInput
      | OrderItemUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?:
      | OrderItemUpdateManyWithWhereWithoutOrderInput
      | OrderItemUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[];
  };

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?:
      | XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
      | OrderItemCreateWithoutOrderInput[]
      | OrderItemUncheckedCreateWithoutOrderInput[];
    connectOrCreate?:
      OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[];
    upsert?:
      | OrderItemUpsertWithWhereUniqueWithoutOrderInput
      | OrderItemUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: OrderItemCreateManyOrderInputEnvelope;
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[];
    update?:
      | OrderItemUpdateWithWhereUniqueWithoutOrderInput
      | OrderItemUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?:
      | OrderItemUpdateManyWithWhereWithoutOrderInput
      | OrderItemUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[];
  };

  export type OrderCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput;
    connect?: OrderWhereUniqueInput;
  };

  export type ProductCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemsInput;
    connect?: ProductWhereUniqueInput;
  };

  export type OrderUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput;
    upsert?: OrderUpsertWithoutOrderItemsInput;
    connect?: OrderWhereUniqueInput;
    update?: XOR<
      XOR<OrderUpdateToOneWithWhereWithoutOrderItemsInput, OrderUpdateWithoutOrderItemsInput>,
      OrderUncheckedUpdateWithoutOrderItemsInput
    >;
  };

  export type ProductUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemsInput;
    upsert?: ProductUpsertWithoutOrderItemsInput;
    connect?: ProductWhereUniqueInput;
    update?: XOR<
      XOR<ProductUpdateToOneWithWhereWithoutOrderItemsInput, ProductUpdateWithoutOrderItemsInput>,
      ProductUncheckedUpdateWithoutOrderItemsInput
    >;
  };

  export type UserCreateNestedOneWithoutAddressesInput = {
    create?: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>;
    connectOrCreate?: UserCreateOrConnectWithoutAddressesInput;
    connect?: UserWhereUniqueInput;
  };

  export type OrderCreateNestedManyWithoutAddressInput = {
    create?:
      | XOR<OrderCreateWithoutAddressInput, OrderUncheckedCreateWithoutAddressInput>
      | OrderCreateWithoutAddressInput[]
      | OrderUncheckedCreateWithoutAddressInput[];
    connectOrCreate?:
      OrderCreateOrConnectWithoutAddressInput | OrderCreateOrConnectWithoutAddressInput[];
    createMany?: OrderCreateManyAddressInputEnvelope;
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
  };

  export type OrderUncheckedCreateNestedManyWithoutAddressInput = {
    create?:
      | XOR<OrderCreateWithoutAddressInput, OrderUncheckedCreateWithoutAddressInput>
      | OrderCreateWithoutAddressInput[]
      | OrderUncheckedCreateWithoutAddressInput[];
    connectOrCreate?:
      OrderCreateOrConnectWithoutAddressInput | OrderCreateOrConnectWithoutAddressInput[];
    createMany?: OrderCreateManyAddressInputEnvelope;
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type UserUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>;
    connectOrCreate?: UserCreateOrConnectWithoutAddressesInput;
    upsert?: UserUpsertWithoutAddressesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<UserUpdateToOneWithWhereWithoutAddressesInput, UserUpdateWithoutAddressesInput>,
      UserUncheckedUpdateWithoutAddressesInput
    >;
  };

  export type OrderUpdateManyWithoutAddressNestedInput = {
    create?:
      | XOR<OrderCreateWithoutAddressInput, OrderUncheckedCreateWithoutAddressInput>
      | OrderCreateWithoutAddressInput[]
      | OrderUncheckedCreateWithoutAddressInput[];
    connectOrCreate?:
      OrderCreateOrConnectWithoutAddressInput | OrderCreateOrConnectWithoutAddressInput[];
    upsert?:
      | OrderUpsertWithWhereUniqueWithoutAddressInput
      | OrderUpsertWithWhereUniqueWithoutAddressInput[];
    createMany?: OrderCreateManyAddressInputEnvelope;
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    update?:
      | OrderUpdateWithWhereUniqueWithoutAddressInput
      | OrderUpdateWithWhereUniqueWithoutAddressInput[];
    updateMany?:
      OrderUpdateManyWithWhereWithoutAddressInput | OrderUpdateManyWithWhereWithoutAddressInput[];
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[];
  };

  export type OrderUncheckedUpdateManyWithoutAddressNestedInput = {
    create?:
      | XOR<OrderCreateWithoutAddressInput, OrderUncheckedCreateWithoutAddressInput>
      | OrderCreateWithoutAddressInput[]
      | OrderUncheckedCreateWithoutAddressInput[];
    connectOrCreate?:
      OrderCreateOrConnectWithoutAddressInput | OrderCreateOrConnectWithoutAddressInput[];
    upsert?:
      | OrderUpsertWithWhereUniqueWithoutAddressInput
      | OrderUpsertWithWhereUniqueWithoutAddressInput[];
    createMany?: OrderCreateManyAddressInputEnvelope;
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    update?:
      | OrderUpdateWithWhereUniqueWithoutAddressInput
      | OrderUpdateWithWhereUniqueWithoutAddressInput[];
    updateMany?:
      OrderUpdateManyWithWhereWithoutAddressInput | OrderUpdateManyWithWhereWithoutAddressInput[];
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[];
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[];
    notIn?: $Enums.Role[];
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[];
    notIn?: $Enums.Role[];
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumRoleFilter<$PrismaModel>;
    _max?: NestedEnumRoleFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    in?: Decimal[] | DecimalJsLike[] | number[] | string[];
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[];
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<NestedJsonFilterBase<$PrismaModel>>,
          Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>
        >,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>;

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
    path?: string;
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue;
    lte?: InputJsonValue;
    gt?: InputJsonValue;
    gte?: InputJsonValue;
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
  };

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    in?: Decimal[] | DecimalJsLike[] | number[] | string[];
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[];
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    not?:
      NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedDecimalFilter<$PrismaModel>;
    _sum?: NestedDecimalFilter<$PrismaModel>;
    _min?: NestedDecimalFilter<$PrismaModel>;
    _max?: NestedDecimalFilter<$PrismaModel>;
  };

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OrderStatus[];
    notIn?: $Enums.OrderStatus[];
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus;
  };

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentStatus[];
    notIn?: $Enums.PaymentStatus[];
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus;
  };

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OrderStatus[];
    notIn?: $Enums.OrderStatus[];
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>;
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>;
  };

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentStatus[];
    notIn?: $Enums.PaymentStatus[];
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>;
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type ProductCreateWithoutUserInput = {
    id?: string;
    productName: string;
    productDesc: string;
    productImages: JsonNullValueInput | InputJsonValue;
    price: Decimal | DecimalJsLike | number | string;
    rating?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category: CategoryCreateNestedOneWithoutProductsInput;
    inventory?: InventoryCreateNestedOneWithoutProductInput;
    orderItems?: OrderItemCreateNestedManyWithoutProductInput;
    cartItems?: CartItemCreateNestedManyWithoutProductInput;
  };

  export type ProductUncheckedCreateWithoutUserInput = {
    id?: string;
    productName: string;
    productDesc: string;
    productImages: JsonNullValueInput | InputJsonValue;
    price: Decimal | DecimalJsLike | number | string;
    rating?: number;
    isActive?: boolean;
    categoryId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inventory?: InventoryUncheckedCreateNestedOneWithoutProductInput;
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput;
    cartItems?: CartItemUncheckedCreateNestedManyWithoutProductInput;
  };

  export type ProductCreateOrConnectWithoutUserInput = {
    where: ProductWhereUniqueInput;
    create: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput>;
  };

  export type ProductCreateManyUserInputEnvelope = {
    data: ProductCreateManyUserInput | ProductCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type OrderCreateWithoutUserInput = {
    id?: string;
    totalAmount: Decimal | DecimalJsLike | number | string;
    totalItem: number;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.PaymentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    address: AddressCreateNestedOneWithoutOrdersInput;
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput;
  };

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: string;
    totalAmount: Decimal | DecimalJsLike | number | string;
    totalItem: number;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.PaymentStatus;
    addressId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput;
  };

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput;
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>;
  };

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type AddressCreateWithoutUserInput = {
    id?: string;
    addressLine1: string;
    addressLine2?: string | null;
    city: string;
    state: string;
    pincode: string;
    country: string;
    phoneNumber: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: OrderCreateNestedManyWithoutAddressInput;
  };

  export type AddressUncheckedCreateWithoutUserInput = {
    id?: string;
    addressLine1: string;
    addressLine2?: string | null;
    city: string;
    state: string;
    pincode: string;
    country: string;
    phoneNumber: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: OrderUncheckedCreateNestedManyWithoutAddressInput;
  };

  export type AddressCreateOrConnectWithoutUserInput = {
    where: AddressWhereUniqueInput;
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>;
  };

  export type AddressCreateManyUserInputEnvelope = {
    data: AddressCreateManyUserInput | AddressCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type CartCreateWithoutUserInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: CartItemCreateNestedManyWithoutCartInput;
  };

  export type CartUncheckedCreateWithoutUserInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: CartItemUncheckedCreateNestedManyWithoutCartInput;
  };

  export type CartCreateOrConnectWithoutUserInput = {
    where: CartWhereUniqueInput;
    create: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>;
  };

  export type ProductUpsertWithWhereUniqueWithoutUserInput = {
    where: ProductWhereUniqueInput;
    update: XOR<ProductUpdateWithoutUserInput, ProductUncheckedUpdateWithoutUserInput>;
    create: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput>;
  };

  export type ProductUpdateWithWhereUniqueWithoutUserInput = {
    where: ProductWhereUniqueInput;
    data: XOR<ProductUpdateWithoutUserInput, ProductUncheckedUpdateWithoutUserInput>;
  };

  export type ProductUpdateManyWithWhereWithoutUserInput = {
    where: ProductScalarWhereInput;
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutUserInput>;
  };

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[];
    OR?: ProductScalarWhereInput[];
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[];
    id?: StringFilter<'Product'> | string;
    productName?: StringFilter<'Product'> | string;
    productDesc?: StringFilter<'Product'> | string;
    productImages?: JsonFilter<'Product'>;
    price?: DecimalFilter<'Product'> | Decimal | DecimalJsLike | number | string;
    rating?: FloatFilter<'Product'> | number;
    isActive?: BoolFilter<'Product'> | boolean;
    createdById?: StringFilter<'Product'> | string;
    categoryId?: StringFilter<'Product'> | string;
    createdAt?: DateTimeFilter<'Product'> | Date | string;
    updatedAt?: DateTimeFilter<'Product'> | Date | string;
  };

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput;
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>;
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>;
  };

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput;
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>;
  };

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput;
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>;
  };

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[];
    OR?: OrderScalarWhereInput[];
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[];
    id?: StringFilter<'Order'> | string;
    totalAmount?: DecimalFilter<'Order'> | Decimal | DecimalJsLike | number | string;
    totalItem?: IntFilter<'Order'> | number;
    status?: EnumOrderStatusFilter<'Order'> | $Enums.OrderStatus;
    paymentStatus?: EnumPaymentStatusFilter<'Order'> | $Enums.PaymentStatus;
    userId?: StringFilter<'Order'> | string;
    addressId?: StringFilter<'Order'> | string;
    createdAt?: DateTimeFilter<'Order'> | Date | string;
    updatedAt?: DateTimeFilter<'Order'> | Date | string;
  };

  export type AddressUpsertWithWhereUniqueWithoutUserInput = {
    where: AddressWhereUniqueInput;
    update: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>;
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>;
  };

  export type AddressUpdateWithWhereUniqueWithoutUserInput = {
    where: AddressWhereUniqueInput;
    data: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>;
  };

  export type AddressUpdateManyWithWhereWithoutUserInput = {
    where: AddressScalarWhereInput;
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyWithoutUserInput>;
  };

  export type AddressScalarWhereInput = {
    AND?: AddressScalarWhereInput | AddressScalarWhereInput[];
    OR?: AddressScalarWhereInput[];
    NOT?: AddressScalarWhereInput | AddressScalarWhereInput[];
    id?: StringFilter<'Address'> | string;
    addressLine1?: StringFilter<'Address'> | string;
    addressLine2?: StringNullableFilter<'Address'> | string | null;
    city?: StringFilter<'Address'> | string;
    state?: StringFilter<'Address'> | string;
    pincode?: StringFilter<'Address'> | string;
    country?: StringFilter<'Address'> | string;
    phoneNumber?: StringFilter<'Address'> | string;
    userId?: StringFilter<'Address'> | string;
    createdAt?: DateTimeFilter<'Address'> | Date | string;
    updatedAt?: DateTimeFilter<'Address'> | Date | string;
  };

  export type CartUpsertWithoutUserInput = {
    update: XOR<CartUpdateWithoutUserInput, CartUncheckedUpdateWithoutUserInput>;
    create: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>;
    where?: CartWhereInput;
  };

  export type CartUpdateToOneWithWhereWithoutUserInput = {
    where?: CartWhereInput;
    data: XOR<CartUpdateWithoutUserInput, CartUncheckedUpdateWithoutUserInput>;
  };

  export type CartUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    items?: CartItemUpdateManyWithoutCartNestedInput;
  };

  export type CartUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    items?: CartItemUncheckedUpdateManyWithoutCartNestedInput;
  };

  export type UserCreateWithoutProductsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: OrderCreateNestedManyWithoutUserInput;
    addresses?: AddressCreateNestedManyWithoutUserInput;
    cart?: CartCreateNestedOneWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutProductsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput;
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput;
    cart?: CartUncheckedCreateNestedOneWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutProductsInput = {
    where: UserWhereUniqueInput;
    create: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>;
  };

  export type CategoryCreateWithoutProductsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput;
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>;
  };

  export type InventoryCreateWithoutProductInput = {
    id?: string;
    quantity?: number;
    reserved?: number;
    version?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type InventoryUncheckedCreateWithoutProductInput = {
    id?: string;
    quantity?: number;
    reserved?: number;
    version?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type InventoryCreateOrConnectWithoutProductInput = {
    where: InventoryWhereUniqueInput;
    create: XOR<InventoryCreateWithoutProductInput, InventoryUncheckedCreateWithoutProductInput>;
  };

  export type OrderItemCreateWithoutProductInput = {
    id?: string;
    unitPrice: Decimal | DecimalJsLike | number | string;
    quantity: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    order: OrderCreateNestedOneWithoutOrderItemsInput;
  };

  export type OrderItemUncheckedCreateWithoutProductInput = {
    id?: string;
    unitPrice: Decimal | DecimalJsLike | number | string;
    quantity: number;
    orderId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrderItemCreateOrConnectWithoutProductInput = {
    where: OrderItemWhereUniqueInput;
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>;
  };

  export type OrderItemCreateManyProductInputEnvelope = {
    data: OrderItemCreateManyProductInput | OrderItemCreateManyProductInput[];
    skipDuplicates?: boolean;
  };

  export type CartItemCreateWithoutProductInput = {
    id?: string;
    quantity?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cart: CartCreateNestedOneWithoutItemsInput;
  };

  export type CartItemUncheckedCreateWithoutProductInput = {
    id?: string;
    quantity?: number;
    cartId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CartItemCreateOrConnectWithoutProductInput = {
    where: CartItemWhereUniqueInput;
    create: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput>;
  };

  export type CartItemCreateManyProductInputEnvelope = {
    data: CartItemCreateManyProductInput | CartItemCreateManyProductInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutProductsInput = {
    update: XOR<UserUpdateWithoutProductsInput, UserUncheckedUpdateWithoutProductsInput>;
    create: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutProductsInput = {
    where?: UserWhereInput;
    data: XOR<UserUpdateWithoutProductsInput, UserUncheckedUpdateWithoutProductsInput>;
  };

  export type UserUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    userName?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: OrderUpdateManyWithoutUserNestedInput;
    addresses?: AddressUpdateManyWithoutUserNestedInput;
    cart?: CartUpdateOneWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    userName?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput;
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput;
    cart?: CartUncheckedUpdateOneWithoutUserNestedInput;
  };

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>;
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>;
    where?: CategoryWhereInput;
  };

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput;
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>;
  };

  export type CategoryUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type InventoryUpsertWithoutProductInput = {
    update: XOR<InventoryUpdateWithoutProductInput, InventoryUncheckedUpdateWithoutProductInput>;
    create: XOR<InventoryCreateWithoutProductInput, InventoryUncheckedCreateWithoutProductInput>;
    where?: InventoryWhereInput;
  };

  export type InventoryUpdateToOneWithWhereWithoutProductInput = {
    where?: InventoryWhereInput;
    data: XOR<InventoryUpdateWithoutProductInput, InventoryUncheckedUpdateWithoutProductInput>;
  };

  export type InventoryUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    reserved?: IntFieldUpdateOperationsInput | number;
    version?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type InventoryUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    reserved?: IntFieldUpdateOperationsInput | number;
    version?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrderItemUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput;
    update: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>;
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>;
  };

  export type OrderItemUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput;
    data: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>;
  };

  export type OrderItemUpdateManyWithWhereWithoutProductInput = {
    where: OrderItemScalarWhereInput;
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutProductInput>;
  };

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[];
    OR?: OrderItemScalarWhereInput[];
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[];
    id?: StringFilter<'OrderItem'> | string;
    unitPrice?: DecimalFilter<'OrderItem'> | Decimal | DecimalJsLike | number | string;
    quantity?: IntFilter<'OrderItem'> | number;
    orderId?: StringFilter<'OrderItem'> | string;
    productId?: StringFilter<'OrderItem'> | string;
    createdAt?: DateTimeFilter<'OrderItem'> | Date | string;
    updatedAt?: DateTimeFilter<'OrderItem'> | Date | string;
  };

  export type CartItemUpsertWithWhereUniqueWithoutProductInput = {
    where: CartItemWhereUniqueInput;
    update: XOR<CartItemUpdateWithoutProductInput, CartItemUncheckedUpdateWithoutProductInput>;
    create: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput>;
  };

  export type CartItemUpdateWithWhereUniqueWithoutProductInput = {
    where: CartItemWhereUniqueInput;
    data: XOR<CartItemUpdateWithoutProductInput, CartItemUncheckedUpdateWithoutProductInput>;
  };

  export type CartItemUpdateManyWithWhereWithoutProductInput = {
    where: CartItemScalarWhereInput;
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutProductInput>;
  };

  export type CartItemScalarWhereInput = {
    AND?: CartItemScalarWhereInput | CartItemScalarWhereInput[];
    OR?: CartItemScalarWhereInput[];
    NOT?: CartItemScalarWhereInput | CartItemScalarWhereInput[];
    id?: StringFilter<'CartItem'> | string;
    quantity?: IntFilter<'CartItem'> | number;
    cartId?: StringFilter<'CartItem'> | string;
    productId?: StringFilter<'CartItem'> | string;
    createdAt?: DateTimeFilter<'CartItem'> | Date | string;
    updatedAt?: DateTimeFilter<'CartItem'> | Date | string;
  };

  export type ProductCreateWithoutInventoryInput = {
    id?: string;
    productName: string;
    productDesc: string;
    productImages: JsonNullValueInput | InputJsonValue;
    price: Decimal | DecimalJsLike | number | string;
    rating?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutProductsInput;
    category: CategoryCreateNestedOneWithoutProductsInput;
    orderItems?: OrderItemCreateNestedManyWithoutProductInput;
    cartItems?: CartItemCreateNestedManyWithoutProductInput;
  };

  export type ProductUncheckedCreateWithoutInventoryInput = {
    id?: string;
    productName: string;
    productDesc: string;
    productImages: JsonNullValueInput | InputJsonValue;
    price: Decimal | DecimalJsLike | number | string;
    rating?: number;
    isActive?: boolean;
    createdById: string;
    categoryId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput;
    cartItems?: CartItemUncheckedCreateNestedManyWithoutProductInput;
  };

  export type ProductCreateOrConnectWithoutInventoryInput = {
    where: ProductWhereUniqueInput;
    create: XOR<ProductCreateWithoutInventoryInput, ProductUncheckedCreateWithoutInventoryInput>;
  };

  export type ProductUpsertWithoutInventoryInput = {
    update: XOR<ProductUpdateWithoutInventoryInput, ProductUncheckedUpdateWithoutInventoryInput>;
    create: XOR<ProductCreateWithoutInventoryInput, ProductUncheckedCreateWithoutInventoryInput>;
    where?: ProductWhereInput;
  };

  export type ProductUpdateToOneWithWhereWithoutInventoryInput = {
    where?: ProductWhereInput;
    data: XOR<ProductUpdateWithoutInventoryInput, ProductUncheckedUpdateWithoutInventoryInput>;
  };

  export type ProductUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    productName?: StringFieldUpdateOperationsInput | string;
    productDesc?: StringFieldUpdateOperationsInput | string;
    productImages?: JsonNullValueInput | InputJsonValue;
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutProductsNestedInput;
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput;
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput;
    cartItems?: CartItemUpdateManyWithoutProductNestedInput;
  };

  export type ProductUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    productName?: StringFieldUpdateOperationsInput | string;
    productDesc?: StringFieldUpdateOperationsInput | string;
    productImages?: JsonNullValueInput | InputJsonValue;
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdById?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput;
    cartItems?: CartItemUncheckedUpdateManyWithoutProductNestedInput;
  };

  export type ProductCreateWithoutCategoryInput = {
    id?: string;
    productName: string;
    productDesc: string;
    productImages: JsonNullValueInput | InputJsonValue;
    price: Decimal | DecimalJsLike | number | string;
    rating?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutProductsInput;
    inventory?: InventoryCreateNestedOneWithoutProductInput;
    orderItems?: OrderItemCreateNestedManyWithoutProductInput;
    cartItems?: CartItemCreateNestedManyWithoutProductInput;
  };

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: string;
    productName: string;
    productDesc: string;
    productImages: JsonNullValueInput | InputJsonValue;
    price: Decimal | DecimalJsLike | number | string;
    rating?: number;
    isActive?: boolean;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inventory?: InventoryUncheckedCreateNestedOneWithoutProductInput;
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput;
    cartItems?: CartItemUncheckedCreateNestedManyWithoutProductInput;
  };

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput;
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>;
  };

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[];
    skipDuplicates?: boolean;
  };

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput;
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>;
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>;
  };

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput;
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>;
  };

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput;
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>;
  };

  export type UserCreateWithoutCartInput = {
    id?: string;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    products?: ProductCreateNestedManyWithoutUserInput;
    orders?: OrderCreateNestedManyWithoutUserInput;
    addresses?: AddressCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutCartInput = {
    id?: string;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    products?: ProductUncheckedCreateNestedManyWithoutUserInput;
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput;
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutCartInput = {
    where: UserWhereUniqueInput;
    create: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>;
  };

  export type CartItemCreateWithoutCartInput = {
    id?: string;
    quantity?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    product: ProductCreateNestedOneWithoutCartItemsInput;
  };

  export type CartItemUncheckedCreateWithoutCartInput = {
    id?: string;
    quantity?: number;
    productId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CartItemCreateOrConnectWithoutCartInput = {
    where: CartItemWhereUniqueInput;
    create: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput>;
  };

  export type CartItemCreateManyCartInputEnvelope = {
    data: CartItemCreateManyCartInput | CartItemCreateManyCartInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutCartInput = {
    update: XOR<UserUpdateWithoutCartInput, UserUncheckedUpdateWithoutCartInput>;
    create: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutCartInput = {
    where?: UserWhereInput;
    data: XOR<UserUpdateWithoutCartInput, UserUncheckedUpdateWithoutCartInput>;
  };

  export type UserUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    userName?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    products?: ProductUpdateManyWithoutUserNestedInput;
    orders?: OrderUpdateManyWithoutUserNestedInput;
    addresses?: AddressUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    userName?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    products?: ProductUncheckedUpdateManyWithoutUserNestedInput;
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput;
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type CartItemUpsertWithWhereUniqueWithoutCartInput = {
    where: CartItemWhereUniqueInput;
    update: XOR<CartItemUpdateWithoutCartInput, CartItemUncheckedUpdateWithoutCartInput>;
    create: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput>;
  };

  export type CartItemUpdateWithWhereUniqueWithoutCartInput = {
    where: CartItemWhereUniqueInput;
    data: XOR<CartItemUpdateWithoutCartInput, CartItemUncheckedUpdateWithoutCartInput>;
  };

  export type CartItemUpdateManyWithWhereWithoutCartInput = {
    where: CartItemScalarWhereInput;
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutCartInput>;
  };

  export type CartCreateWithoutItemsInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutCartInput;
  };

  export type CartUncheckedCreateWithoutItemsInput = {
    id?: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CartCreateOrConnectWithoutItemsInput = {
    where: CartWhereUniqueInput;
    create: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>;
  };

  export type ProductCreateWithoutCartItemsInput = {
    id?: string;
    productName: string;
    productDesc: string;
    productImages: JsonNullValueInput | InputJsonValue;
    price: Decimal | DecimalJsLike | number | string;
    rating?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutProductsInput;
    category: CategoryCreateNestedOneWithoutProductsInput;
    inventory?: InventoryCreateNestedOneWithoutProductInput;
    orderItems?: OrderItemCreateNestedManyWithoutProductInput;
  };

  export type ProductUncheckedCreateWithoutCartItemsInput = {
    id?: string;
    productName: string;
    productDesc: string;
    productImages: JsonNullValueInput | InputJsonValue;
    price: Decimal | DecimalJsLike | number | string;
    rating?: number;
    isActive?: boolean;
    createdById: string;
    categoryId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inventory?: InventoryUncheckedCreateNestedOneWithoutProductInput;
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput;
  };

  export type ProductCreateOrConnectWithoutCartItemsInput = {
    where: ProductWhereUniqueInput;
    create: XOR<ProductCreateWithoutCartItemsInput, ProductUncheckedCreateWithoutCartItemsInput>;
  };

  export type CartUpsertWithoutItemsInput = {
    update: XOR<CartUpdateWithoutItemsInput, CartUncheckedUpdateWithoutItemsInput>;
    create: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>;
    where?: CartWhereInput;
  };

  export type CartUpdateToOneWithWhereWithoutItemsInput = {
    where?: CartWhereInput;
    data: XOR<CartUpdateWithoutItemsInput, CartUncheckedUpdateWithoutItemsInput>;
  };

  export type CartUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutCartNestedInput;
  };

  export type CartUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProductUpsertWithoutCartItemsInput = {
    update: XOR<ProductUpdateWithoutCartItemsInput, ProductUncheckedUpdateWithoutCartItemsInput>;
    create: XOR<ProductCreateWithoutCartItemsInput, ProductUncheckedCreateWithoutCartItemsInput>;
    where?: ProductWhereInput;
  };

  export type ProductUpdateToOneWithWhereWithoutCartItemsInput = {
    where?: ProductWhereInput;
    data: XOR<ProductUpdateWithoutCartItemsInput, ProductUncheckedUpdateWithoutCartItemsInput>;
  };

  export type ProductUpdateWithoutCartItemsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    productName?: StringFieldUpdateOperationsInput | string;
    productDesc?: StringFieldUpdateOperationsInput | string;
    productImages?: JsonNullValueInput | InputJsonValue;
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutProductsNestedInput;
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput;
    inventory?: InventoryUpdateOneWithoutProductNestedInput;
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput;
  };

  export type ProductUncheckedUpdateWithoutCartItemsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    productName?: StringFieldUpdateOperationsInput | string;
    productDesc?: StringFieldUpdateOperationsInput | string;
    productImages?: JsonNullValueInput | InputJsonValue;
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdById?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: InventoryUncheckedUpdateOneWithoutProductNestedInput;
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput;
  };

  export type UserCreateWithoutOrdersInput = {
    id?: string;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    products?: ProductCreateNestedManyWithoutUserInput;
    addresses?: AddressCreateNestedManyWithoutUserInput;
    cart?: CartCreateNestedOneWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    products?: ProductUncheckedCreateNestedManyWithoutUserInput;
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput;
    cart?: CartUncheckedCreateNestedOneWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput;
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>;
  };

  export type AddressCreateWithoutOrdersInput = {
    id?: string;
    addressLine1: string;
    addressLine2?: string | null;
    city: string;
    state: string;
    pincode: string;
    country: string;
    phoneNumber: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutAddressesInput;
  };

  export type AddressUncheckedCreateWithoutOrdersInput = {
    id?: string;
    addressLine1: string;
    addressLine2?: string | null;
    city: string;
    state: string;
    pincode: string;
    country: string;
    phoneNumber: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type AddressCreateOrConnectWithoutOrdersInput = {
    where: AddressWhereUniqueInput;
    create: XOR<AddressCreateWithoutOrdersInput, AddressUncheckedCreateWithoutOrdersInput>;
  };

  export type OrderItemCreateWithoutOrderInput = {
    id?: string;
    unitPrice: Decimal | DecimalJsLike | number | string;
    quantity: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    product: ProductCreateNestedOneWithoutOrderItemsInput;
  };

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: string;
    unitPrice: Decimal | DecimalJsLike | number | string;
    quantity: number;
    productId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput;
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>;
  };

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>;
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput;
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>;
  };

  export type UserUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    userName?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    products?: ProductUpdateManyWithoutUserNestedInput;
    addresses?: AddressUpdateManyWithoutUserNestedInput;
    cart?: CartUpdateOneWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    userName?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    products?: ProductUncheckedUpdateManyWithoutUserNestedInput;
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput;
    cart?: CartUncheckedUpdateOneWithoutUserNestedInput;
  };

  export type AddressUpsertWithoutOrdersInput = {
    update: XOR<AddressUpdateWithoutOrdersInput, AddressUncheckedUpdateWithoutOrdersInput>;
    create: XOR<AddressCreateWithoutOrdersInput, AddressUncheckedCreateWithoutOrdersInput>;
    where?: AddressWhereInput;
  };

  export type AddressUpdateToOneWithWhereWithoutOrdersInput = {
    where?: AddressWhereInput;
    data: XOR<AddressUpdateWithoutOrdersInput, AddressUncheckedUpdateWithoutOrdersInput>;
  };

  export type AddressUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    addressLine1?: StringFieldUpdateOperationsInput | string;
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    pincode?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutAddressesNestedInput;
  };

  export type AddressUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    addressLine1?: StringFieldUpdateOperationsInput | string;
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    pincode?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput;
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>;
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>;
  };

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput;
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>;
  };

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput;
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>;
  };

  export type OrderCreateWithoutOrderItemsInput = {
    id?: string;
    totalAmount: Decimal | DecimalJsLike | number | string;
    totalItem: number;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.PaymentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutOrdersInput;
    address: AddressCreateNestedOneWithoutOrdersInput;
  };

  export type OrderUncheckedCreateWithoutOrderItemsInput = {
    id?: string;
    totalAmount: Decimal | DecimalJsLike | number | string;
    totalItem: number;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.PaymentStatus;
    userId: string;
    addressId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrderCreateOrConnectWithoutOrderItemsInput = {
    where: OrderWhereUniqueInput;
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>;
  };

  export type ProductCreateWithoutOrderItemsInput = {
    id?: string;
    productName: string;
    productDesc: string;
    productImages: JsonNullValueInput | InputJsonValue;
    price: Decimal | DecimalJsLike | number | string;
    rating?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutProductsInput;
    category: CategoryCreateNestedOneWithoutProductsInput;
    inventory?: InventoryCreateNestedOneWithoutProductInput;
    cartItems?: CartItemCreateNestedManyWithoutProductInput;
  };

  export type ProductUncheckedCreateWithoutOrderItemsInput = {
    id?: string;
    productName: string;
    productDesc: string;
    productImages: JsonNullValueInput | InputJsonValue;
    price: Decimal | DecimalJsLike | number | string;
    rating?: number;
    isActive?: boolean;
    createdById: string;
    categoryId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inventory?: InventoryUncheckedCreateNestedOneWithoutProductInput;
    cartItems?: CartItemUncheckedCreateNestedManyWithoutProductInput;
  };

  export type ProductCreateOrConnectWithoutOrderItemsInput = {
    where: ProductWhereUniqueInput;
    create: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>;
  };

  export type OrderUpsertWithoutOrderItemsInput = {
    update: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>;
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>;
    where?: OrderWhereInput;
  };

  export type OrderUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: OrderWhereInput;
    data: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>;
  };

  export type OrderUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    totalItem?: IntFieldUpdateOperationsInput | number;
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput;
    address?: AddressUpdateOneRequiredWithoutOrdersNestedInput;
  };

  export type OrderUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    totalItem?: IntFieldUpdateOperationsInput | number;
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    userId?: StringFieldUpdateOperationsInput | string;
    addressId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProductUpsertWithoutOrderItemsInput = {
    update: XOR<ProductUpdateWithoutOrderItemsInput, ProductUncheckedUpdateWithoutOrderItemsInput>;
    create: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>;
    where?: ProductWhereInput;
  };

  export type ProductUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: ProductWhereInput;
    data: XOR<ProductUpdateWithoutOrderItemsInput, ProductUncheckedUpdateWithoutOrderItemsInput>;
  };

  export type ProductUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    productName?: StringFieldUpdateOperationsInput | string;
    productDesc?: StringFieldUpdateOperationsInput | string;
    productImages?: JsonNullValueInput | InputJsonValue;
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutProductsNestedInput;
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput;
    inventory?: InventoryUpdateOneWithoutProductNestedInput;
    cartItems?: CartItemUpdateManyWithoutProductNestedInput;
  };

  export type ProductUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    productName?: StringFieldUpdateOperationsInput | string;
    productDesc?: StringFieldUpdateOperationsInput | string;
    productImages?: JsonNullValueInput | InputJsonValue;
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdById?: StringFieldUpdateOperationsInput | string;
    categoryId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: InventoryUncheckedUpdateOneWithoutProductNestedInput;
    cartItems?: CartItemUncheckedUpdateManyWithoutProductNestedInput;
  };

  export type UserCreateWithoutAddressesInput = {
    id?: string;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    products?: ProductCreateNestedManyWithoutUserInput;
    orders?: OrderCreateNestedManyWithoutUserInput;
    cart?: CartCreateNestedOneWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutAddressesInput = {
    id?: string;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    products?: ProductUncheckedCreateNestedManyWithoutUserInput;
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput;
    cart?: CartUncheckedCreateNestedOneWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutAddressesInput = {
    where: UserWhereUniqueInput;
    create: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>;
  };

  export type OrderCreateWithoutAddressInput = {
    id?: string;
    totalAmount: Decimal | DecimalJsLike | number | string;
    totalItem: number;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.PaymentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutOrdersInput;
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput;
  };

  export type OrderUncheckedCreateWithoutAddressInput = {
    id?: string;
    totalAmount: Decimal | DecimalJsLike | number | string;
    totalItem: number;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.PaymentStatus;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput;
  };

  export type OrderCreateOrConnectWithoutAddressInput = {
    where: OrderWhereUniqueInput;
    create: XOR<OrderCreateWithoutAddressInput, OrderUncheckedCreateWithoutAddressInput>;
  };

  export type OrderCreateManyAddressInputEnvelope = {
    data: OrderCreateManyAddressInput | OrderCreateManyAddressInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutAddressesInput = {
    update: XOR<UserUpdateWithoutAddressesInput, UserUncheckedUpdateWithoutAddressesInput>;
    create: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutAddressesInput = {
    where?: UserWhereInput;
    data: XOR<UserUpdateWithoutAddressesInput, UserUncheckedUpdateWithoutAddressesInput>;
  };

  export type UserUpdateWithoutAddressesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    userName?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    products?: ProductUpdateManyWithoutUserNestedInput;
    orders?: OrderUpdateManyWithoutUserNestedInput;
    cart?: CartUpdateOneWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutAddressesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    userName?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    products?: ProductUncheckedUpdateManyWithoutUserNestedInput;
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput;
    cart?: CartUncheckedUpdateOneWithoutUserNestedInput;
  };

  export type OrderUpsertWithWhereUniqueWithoutAddressInput = {
    where: OrderWhereUniqueInput;
    update: XOR<OrderUpdateWithoutAddressInput, OrderUncheckedUpdateWithoutAddressInput>;
    create: XOR<OrderCreateWithoutAddressInput, OrderUncheckedCreateWithoutAddressInput>;
  };

  export type OrderUpdateWithWhereUniqueWithoutAddressInput = {
    where: OrderWhereUniqueInput;
    data: XOR<OrderUpdateWithoutAddressInput, OrderUncheckedUpdateWithoutAddressInput>;
  };

  export type OrderUpdateManyWithWhereWithoutAddressInput = {
    where: OrderScalarWhereInput;
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutAddressInput>;
  };

  export type ProductCreateManyUserInput = {
    id?: string;
    productName: string;
    productDesc: string;
    productImages: JsonNullValueInput | InputJsonValue;
    price: Decimal | DecimalJsLike | number | string;
    rating?: number;
    isActive?: boolean;
    categoryId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrderCreateManyUserInput = {
    id?: string;
    totalAmount: Decimal | DecimalJsLike | number | string;
    totalItem: number;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.PaymentStatus;
    addressId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type AddressCreateManyUserInput = {
    id?: string;
    addressLine1: string;
    addressLine2?: string | null;
    city: string;
    state: string;
    pincode: string;
    country: string;
    phoneNumber: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProductUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    productName?: StringFieldUpdateOperationsInput | string;
    productDesc?: StringFieldUpdateOperationsInput | string;
    productImages?: JsonNullValueInput | InputJsonValue;
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput;
    inventory?: InventoryUpdateOneWithoutProductNestedInput;
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput;
    cartItems?: CartItemUpdateManyWithoutProductNestedInput;
  };

  export type ProductUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    productName?: StringFieldUpdateOperationsInput | string;
    productDesc?: StringFieldUpdateOperationsInput | string;
    productImages?: JsonNullValueInput | InputJsonValue;
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    categoryId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: InventoryUncheckedUpdateOneWithoutProductNestedInput;
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput;
    cartItems?: CartItemUncheckedUpdateManyWithoutProductNestedInput;
  };

  export type ProductUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    productName?: StringFieldUpdateOperationsInput | string;
    productDesc?: StringFieldUpdateOperationsInput | string;
    productImages?: JsonNullValueInput | InputJsonValue;
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    categoryId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    totalItem?: IntFieldUpdateOperationsInput | number;
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    address?: AddressUpdateOneRequiredWithoutOrdersNestedInput;
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput;
  };

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    totalItem?: IntFieldUpdateOperationsInput | number;
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    addressId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
  };

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    totalItem?: IntFieldUpdateOperationsInput | number;
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    addressId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AddressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    addressLine1?: StringFieldUpdateOperationsInput | string;
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    pincode?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: OrderUpdateManyWithoutAddressNestedInput;
  };

  export type AddressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    addressLine1?: StringFieldUpdateOperationsInput | string;
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    pincode?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: OrderUncheckedUpdateManyWithoutAddressNestedInput;
  };

  export type AddressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    addressLine1?: StringFieldUpdateOperationsInput | string;
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    pincode?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrderItemCreateManyProductInput = {
    id?: string;
    unitPrice: Decimal | DecimalJsLike | number | string;
    quantity: number;
    orderId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CartItemCreateManyProductInput = {
    id?: string;
    quantity?: number;
    cartId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrderItemUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string;
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput;
  };

  export type OrderItemUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string;
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    orderId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrderItemUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string;
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    orderId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CartItemUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    cart?: CartUpdateOneRequiredWithoutItemsNestedInput;
  };

  export type CartItemUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    cartId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CartItemUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    cartId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProductCreateManyCategoryInput = {
    id?: string;
    productName: string;
    productDesc: string;
    productImages: JsonNullValueInput | InputJsonValue;
    price: Decimal | DecimalJsLike | number | string;
    rating?: number;
    isActive?: boolean;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProductUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    productName?: StringFieldUpdateOperationsInput | string;
    productDesc?: StringFieldUpdateOperationsInput | string;
    productImages?: JsonNullValueInput | InputJsonValue;
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutProductsNestedInput;
    inventory?: InventoryUpdateOneWithoutProductNestedInput;
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput;
    cartItems?: CartItemUpdateManyWithoutProductNestedInput;
  };

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    productName?: StringFieldUpdateOperationsInput | string;
    productDesc?: StringFieldUpdateOperationsInput | string;
    productImages?: JsonNullValueInput | InputJsonValue;
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdById?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: InventoryUncheckedUpdateOneWithoutProductNestedInput;
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput;
    cartItems?: CartItemUncheckedUpdateManyWithoutProductNestedInput;
  };

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    productName?: StringFieldUpdateOperationsInput | string;
    productDesc?: StringFieldUpdateOperationsInput | string;
    productImages?: JsonNullValueInput | InputJsonValue;
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    rating?: FloatFieldUpdateOperationsInput | number;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdById?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CartItemCreateManyCartInput = {
    id?: string;
    quantity?: number;
    productId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CartItemUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    product?: ProductUpdateOneRequiredWithoutCartItemsNestedInput;
  };

  export type CartItemUncheckedUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    productId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CartItemUncheckedUpdateManyWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    productId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrderItemCreateManyOrderInput = {
    id?: string;
    unitPrice: Decimal | DecimalJsLike | number | string;
    quantity: number;
    productId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrderItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    product?: ProductUpdateOneRequiredWithoutOrderItemsNestedInput;
  };

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    productId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    productId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrderCreateManyAddressInput = {
    id?: string;
    totalAmount: Decimal | DecimalJsLike | number | string;
    totalItem: number;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.PaymentStatus;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrderUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string;
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    totalItem?: IntFieldUpdateOperationsInput | number;
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput;
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput;
  };

  export type OrderUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string;
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    totalItem?: IntFieldUpdateOperationsInput | number;
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
  };

  export type OrderUncheckedUpdateManyWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string;
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    totalItem?: IntFieldUpdateOperationsInput | number;
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}

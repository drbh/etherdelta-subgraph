import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Order extends Entity {
  constructor(id: string) {
    this.entries = new Array(0);
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Order entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Order entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Order", id.toString(), this);
  }

  static load(id: string): Order | null {
    return store.get("Order", id) as Order | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenGet(): Bytes {
    let value = this.get("tokenGet");
    return value.toBytes();
  }

  set tokenGet(value: Bytes) {
    this.set("tokenGet", Value.fromBytes(value));
  }

  get amountGet(): BigInt {
    let value = this.get("amountGet");
    return value.toBigInt();
  }

  set amountGet(value: BigInt) {
    this.set("amountGet", Value.fromBigInt(value));
  }

  get tokenGive(): Bytes {
    let value = this.get("tokenGive");
    return value.toBytes();
  }

  set tokenGive(value: Bytes) {
    this.set("tokenGive", Value.fromBytes(value));
  }

  get amountGive(): BigInt {
    let value = this.get("amountGive");
    return value.toBigInt();
  }

  set amountGive(value: BigInt) {
    this.set("amountGive", Value.fromBigInt(value));
  }

  get expires(): BigInt {
    let value = this.get("expires");
    return value.toBigInt();
  }

  set expires(value: BigInt) {
    this.set("expires", Value.fromBigInt(value));
  }

  get nonce(): BigInt {
    let value = this.get("nonce");
    return value.toBigInt();
  }

  set nonce(value: BigInt) {
    this.set("nonce", Value.fromBigInt(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }
}

export class Cancel extends Entity {
  constructor(id: string) {
    this.entries = new Array(0);
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Cancel entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Cancel entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Cancel", id.toString(), this);
  }

  static load(id: string): Cancel | null {
    return store.get("Cancel", id) as Cancel | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenGet(): Bytes {
    let value = this.get("tokenGet");
    return value.toBytes();
  }

  set tokenGet(value: Bytes) {
    this.set("tokenGet", Value.fromBytes(value));
  }

  get amountGet(): BigInt {
    let value = this.get("amountGet");
    return value.toBigInt();
  }

  set amountGet(value: BigInt) {
    this.set("amountGet", Value.fromBigInt(value));
  }

  get tokenGive(): Bytes {
    let value = this.get("tokenGive");
    return value.toBytes();
  }

  set tokenGive(value: Bytes) {
    this.set("tokenGive", Value.fromBytes(value));
  }

  get amountGive(): BigInt {
    let value = this.get("amountGive");
    return value.toBigInt();
  }

  set amountGive(value: BigInt) {
    this.set("amountGive", Value.fromBigInt(value));
  }

  get expires(): BigInt {
    let value = this.get("expires");
    return value.toBigInt();
  }

  set expires(value: BigInt) {
    this.set("expires", Value.fromBigInt(value));
  }

  get nonce(): BigInt {
    let value = this.get("nonce");
    return value.toBigInt();
  }

  set nonce(value: BigInt) {
    this.set("nonce", Value.fromBigInt(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get v(): i32 {
    let value = this.get("v");
    return value.toI32();
  }

  set v(value: i32) {
    this.set("v", Value.fromI32(value));
  }

  get r(): Bytes {
    let value = this.get("r");
    return value.toBytes();
  }

  set r(value: Bytes) {
    this.set("r", Value.fromBytes(value));
  }

  get s(): Bytes {
    let value = this.get("s");
    return value.toBytes();
  }

  set s(value: Bytes) {
    this.set("s", Value.fromBytes(value));
  }
}

export class Trade extends Entity {
  constructor(id: string) {
    this.entries = new Array(0);
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Trade entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Trade entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Trade", id.toString(), this);
  }

  static load(id: string): Trade | null {
    return store.get("Trade", id) as Trade | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenGet(): Bytes {
    let value = this.get("tokenGet");
    return value.toBytes();
  }

  set tokenGet(value: Bytes) {
    this.set("tokenGet", Value.fromBytes(value));
  }

  get amountGet(): BigInt {
    let value = this.get("amountGet");
    return value.toBigInt();
  }

  set amountGet(value: BigInt) {
    this.set("amountGet", Value.fromBigInt(value));
  }

  get tokenGive(): Bytes {
    let value = this.get("tokenGive");
    return value.toBytes();
  }

  set tokenGive(value: Bytes) {
    this.set("tokenGive", Value.fromBytes(value));
  }

  get amountGive(): BigInt {
    let value = this.get("amountGive");
    return value.toBigInt();
  }

  set amountGive(value: BigInt) {
    this.set("amountGive", Value.fromBigInt(value));
  }

  get get2(): Bytes {
    let value = this.get("get");
    return value.toBytes();
  }

  set get2(value: Bytes) {
    this.set("get", Value.fromBytes(value));
  }

  get give(): Bytes {
    let value = this.get("give");
    return value.toBytes();
  }

  set give(value: Bytes) {
    this.set("give", Value.fromBytes(value));
  }
}

export class Deposit extends Entity {
  constructor(id: string) {
    this.entries = new Array(0);
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Deposit entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Deposit entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Deposit", id.toString(), this);
  }

  static load(id: string): Deposit | null {
    return store.get("Deposit", id) as Deposit | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token(): Bytes {
    let value = this.get("token");
    return value.toBytes();
  }

  set token(value: Bytes) {
    this.set("token", Value.fromBytes(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }
}

export class Withdraw extends Entity {
  constructor(id: string) {
    this.entries = new Array(0);
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Withdraw entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Withdraw entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Withdraw", id.toString(), this);
  }

  static load(id: string): Withdraw | null {
    return store.get("Withdraw", id) as Withdraw | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token(): Bytes {
    let value = this.get("token");
    return value.toBytes();
  }

  set token(value: Bytes) {
    this.set("token", Value.fromBytes(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }
}

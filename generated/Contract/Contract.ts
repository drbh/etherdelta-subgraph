import {
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Order extends EthereumEvent {
  get params(): OrderParams {
    return new OrderParams(this);
  }
}

export class OrderParams {
  _event: Order;

  constructor(event: Order) {
    this._event = event;
  }

  get tokenGet(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amountGet(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get tokenGive(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amountGive(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get expires(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get nonce(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get user(): Address {
    return this._event.parameters[6].value.toAddress();
  }
}

export class Cancel extends EthereumEvent {
  get params(): CancelParams {
    return new CancelParams(this);
  }
}

export class CancelParams {
  _event: Cancel;

  constructor(event: Cancel) {
    this._event = event;
  }

  get tokenGet(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amountGet(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get tokenGive(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amountGive(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get expires(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get nonce(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get user(): Address {
    return this._event.parameters[6].value.toAddress();
  }

  get v(): i32 {
    return this._event.parameters[7].value.toI32();
  }

  get r(): Bytes {
    return this._event.parameters[8].value.toBytes();
  }

  get s(): Bytes {
    return this._event.parameters[9].value.toBytes();
  }
}

export class Trade extends EthereumEvent {
  get params(): TradeParams {
    return new TradeParams(this);
  }
}

export class TradeParams {
  _event: Trade;

  constructor(event: Trade) {
    this._event = event;
  }

  get tokenGet(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amountGet(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get tokenGive(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amountGive(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get get(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get give(): Address {
    return this._event.parameters[5].value.toAddress();
  }
}

export class Deposit extends EthereumEvent {
  get params(): DepositParams {
    return new DepositParams(this);
  }
}

export class DepositParams {
  _event: Deposit;

  constructor(event: Deposit) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get balance(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Withdraw extends EthereumEvent {
  get params(): WithdrawParams {
    return new WithdrawParams(this);
  }
}

export class WithdrawParams {
  _event: Withdraw;

  constructor(event: Withdraw) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get balance(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Contract extends SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }
}

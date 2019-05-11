import {
  Order as OrderEvent,
  Cancel as CancelEvent,
  Trade as TradeEvent,
  Deposit as DepositEvent,
  Withdraw as WithdrawEvent
} from "../generated/Contract/Contract"
import { Order, Cancel, Trade, Deposit, Withdraw } from "../generated/schema"

export function handleOrder(event: OrderEvent): void {
  let entity = new Order(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenGet = event.params.tokenGet
  entity.amountGet = event.params.amountGet
  entity.tokenGive = event.params.tokenGive
  entity.amountGive = event.params.amountGive
  entity.expires = event.params.expires
  entity.nonce = event.params.nonce
  entity.user = event.params.user
  entity.save()
}

export function handleCancel(event: CancelEvent): void {
  let entity = new Cancel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenGet = event.params.tokenGet
  entity.amountGet = event.params.amountGet
  entity.tokenGive = event.params.tokenGive
  entity.amountGive = event.params.amountGive
  entity.expires = event.params.expires
  entity.nonce = event.params.nonce
  entity.user = event.params.user
  entity.v = event.params.v
  entity.r = event.params.r
  entity.s = event.params.s
  entity.save()
}

export function handleTrade(event: TradeEvent): void {
  let entity = new Trade(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenGet = event.params.tokenGet
  entity.amountGet = event.params.amountGet
  entity.tokenGive = event.params.tokenGive
  entity.amountGive = event.params.amountGive
  entity.get2 = event.params.get
  entity.give = event.params.give
  entity.save()
}

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.token = event.params.token
  entity.user = event.params.user
  entity.amount = event.params.amount
  entity.balance = event.params.balance
  entity.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.token = event.params.token
  entity.user = event.params.user
  entity.amount = event.params.amount
  entity.balance = event.params.balance
  entity.save()
}

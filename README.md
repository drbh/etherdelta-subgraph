# Welcome to the EtherDelta Subgraph

👌EtherDelta Subgraph submission for the 2019 The Graph + CoinList Hackathon  

### The Graph Hosted subgraph
https://thegraph.com/explorer/subgraph/drbh/etherdelta  

### React + Apollo Web App

![screenshot](https://raw.githubusercontent.com/drbh/etherdelta-subgraph/master/images/screenshot.png)

http://etherdelta-the-graph.s3-website-us-east-1.amazonaws.com/  

#### Example Query
[https://api.thegraph.com/subgraphs/name/drbh/etherdelta
](https://api.thegraph.com/subgraphs/name/drbh/etherdelta)
```graphql
{
  orders(first: 5) {
    id
    tokenGet
    amountGet
    tokenGive
  }
  cancels(first: 5) {
    id
    tokenGet
    amountGet
    tokenGive
  }
}
````



### GraphQL Schema

###Order
```graphql
  id: ID!
  tokenGet: Bytes! # address
  amountGet: BigInt! # uint256
  tokenGive: Bytes! # address
  amountGive: BigInt! # uint256
  expires: BigInt! # uint256
  nonce: BigInt! # uint256
  user: Bytes! # address
```

###Cancel
```graphql
  id: ID!
  tokenGet: Bytes! # address
  amountGet: BigInt! # uint256
  tokenGive: Bytes! # address
  amountGive: BigInt! # uint256
  expires: BigInt! # uint256
  nonce: BigInt! # uint256
  user: Bytes! # address
  v: Int! # uint8
  r: Bytes! # bytes32
  s: Bytes! # bytes32
```

###Trade
```graphql
  id: ID!
  tokenGet: Bytes! # address
  amountGet: BigInt! # uint256
  tokenGive: Bytes! # address
  amountGive: BigInt! # uint256
  get: Bytes! # address
  give: Bytes! # address
```

###Deposit
```graphql
  id: ID!
  token: Bytes! # address
  user: Bytes! # address
  amount: BigInt! # uint256
  balance: BigInt! # uint256
```

###Withdraw
```graphql
  id: ID!
  token: Bytes! # address
  user: Bytes! # address
  amount: BigInt! # uint256
```

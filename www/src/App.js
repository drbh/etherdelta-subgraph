import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-table/react-table.css'
// import { graphql } from 'react-apollo';

import { Query } from 'react-apollo';
import ReactTable from 'react-table'

import gql from 'graphql-tag';

// eslint-disable-next-line
import ReactChartkick, { LineChart } from 'react-chartkick'
// eslint-disable-next-line
import Chart from 'chart.js'

function getContractTrades(addr) {
    const GD = gql `
  query {
    trades(where: {tokenGet: "${addr}"}){
      id
      tokenGet
      amountGet
      tokenGive
      amountGive
      get
      give
    }
  }
  `;
    return GD
}

const tokens = {
    "DGD": "0xE0B7927c4aF23765Cb51314A0E0521A9645F0E2A",
    "BAT": "0x0d8775f648430679a709e98d2b0cb6250d2887ef",

    "MKR": "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
    "PAX": "0x8e870d67f660d95d5be530380d0ec0bd388289e1",
    "VEN": "0xd850942ef8811f2a866692a623011bde52a462c1",
    "BNB": "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
    "USDC": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    "REP": "0x1985365e9f78359a9B6AD760e32412f4a445E862",
    "TUSD": "0x0000000000085d4780B73119b644AE5ecd22b376",
    "ZRX": "0xe41d2489571d322189246dafa5ebde1f4699f498",


}

class TradeTable extends React.Component {
    constructor() {
        super();
        this.state = {
            lineChartData: [],
            tokenName: "DGD",
            tokenContract: "0xE0B7927c4aF23765Cb51314A0E0521A9645F0E2A"
        };
    }
    changeTokenContract(event) {
        this.setState({
            tokenName: event.target[event.target.selectedIndex].innerText,
            tokenContract: event.target.value
        });
    }

    render() {
        return (
            <div className="App">
  <header className="App-header">



    <img src={logo} className="App-logo" alt="logo" />
    <p>
<label>
  <select className="widefat" value={this.state.tokenContract} onChange={this.changeTokenContract.bind(this)}>
    {
      Object.keys(tokens).map(function(token) {
        return <option value={tokens[token]}>{token}</option>;
      })
    }
  </select>
</label> (token) <code>{this.state.tokenContract}</code> traded on Etherdelta
    </p>
    <Query query={getContractTrades(this.state.tokenContract)}>
      {({ loading, error, data }) => {

        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;

        console.log(this)

        data = data.trades
         
          const columns = [
          {
            Header: 'ID',
            accessor: 'id',
            Cell: props => <a 
            className="id-link" 
            href={"https://etherscan.io/tx/" + props.value.slice(0, -3) + "#eventlog"} >{props.value}</a> 
          },
          {
            Header: 'Price',
            id: 'price',
            accessor: d => ( d.amountGet / (d.amountGive/Math.pow(10,9) ) ).toFixed(8), 
            

          },
          {
            Header: 'amountGet',
            accessor: 'amountGet', 
            Cell: props => <span className='number'>{props.value/Math.pow(10,9)}</span> 

          }, 
          {
            Header: 'amountGive',
            accessor: 'amountGive',
            Cell: props => <span className='number'>{props.value/Math.pow(10,18)}</span> 
          },  
          {
            Header: 'get',
            accessor: 'get' 
          }, 
          {
            Header: 'give',
            accessor: 'give',
            Cell: props => <span className='number'>{props.value}</span> 
          },
          ]

          var pv = []
          var counter = 0
          for (var t of data) {
            var val = t["amountGet"] / t['amountGive']
            counter++
            pv.push([counter, val])
          }

          return (<section className="maincontents">
            <LineChart download={true} data={pv}/>
            <ReactTable
            data={data}
            columns={columns}
          /></section>);

      }}
    </Query>
  </header>
  <footer>
    <a className="id-link" href="https://thegraph.com/explorer/subgraph/drbh/etherdelta">subgraph source code</a>
  </footer>
</div>
        );
    }
}

function App() {
    return (
        <TradeTable/>
    );
}

export default App;
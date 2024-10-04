
## Introduction
This is a basic solidity training for CMU undergranduate students on class 885.
### Class 1 Agenda: 
0. Preparation for learning
1. Solidity 15 features training.
2. A basic Web3 application structure.
3. Write down your name onchain(onclass homework)
4. Preparations for next class.
   1. register accounts and get API key:
      1. Infura.io, get your API key.
      2. EtherScan.io, get your API key.
      3. Vercel.com, get your account
      4. Github.com, get you GitHub account
   3. Download VSCode and install
   4. Or using online VSCode.
  
### Class 2 Agenda: 
1. How to create a Web3 applicaion?
2. Idea and architecture of the Web3 application
3. Onchain development
4. Offchain development
5. Deployment
6. Show the real process of a Web3 application dev.
7. after-class group homework:
   1. create a single page application: Random Flower.
   2. Input a random number and your name(class 1 you write onchain).
   3. If your are verifyed, get a random SVG flower.


=============
## Foundry

**Foundry is a blazing fast, portable and modular toolkit for Ethereum application development written in Rust.**

Foundry consists of:

-   **Forge**: Ethereum testing framework (like Truffle, Hardhat and DappTools).
-   **Cast**: Swiss army knife for interacting with EVM smart contracts, sending transactions and getting chain data.
-   **Anvil**: Local Ethereum node, akin to Ganache, Hardhat Network.
-   **Chisel**: Fast, utilitarian, and verbose solidity REPL.

## Documentation

https://book.getfoundry.sh/

## Usage

### Build

```shell
$ forge build
```

### Test

```shell
$ forge test
```

### Format

```shell
$ forge fmt
```

### Gas Snapshots

```shell
$ forge snapshot
```

### Anvil

```shell
$ anvil
```

### Deploy

```shell
$ forge script script/Counter.s.sol:CounterScript --rpc-url <your_rpc_url> --private-key <your_private_key>
```

### Cast

```shell
$ cast <subcommand>
```

### Help

```shell
$ forge --help
$ anvil --help
$ cast --help
```


## Introduction
This is a basic solidity training for CMU undergranduate students on class 885.
### Class 1 Agenda: 
1. Preparation for learning: PC or Laptop with Chrome browser.
2. Solidity 15 features training.
3. A basic Web3 application structure.
4. Write down your name onchain(onclass homework)
5. Preparations for next class.
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
   1. Create a single page application: Random Flower.
   2. Input your name and score on chain(class 1).
   3. Read your name, score from on chain contract.
   4. Generate a random flower with your name
   5. Export to download as a picture, show to us.

#### Real development steps
Let's dev a simple Web3 Application in our class!

1. Read the slides: https://docs.google.com/presentation/d/1LTMJauhUDzEaDyD4Bj_yZHxCDxWw1DeduEryCf_JX_Q/edit?usp=sharing
2. Login your github account and create a new repo, named like: Jason-Web3-Prj.
3. Git clone this repo to your local computer.
4. Run: npx create-next-app web3class
5. cd web3class, run npm install ether.js
6. open cursor or vscode, open page.tsx
7. add basic wallet connect to the contract we deployed, just fetch your score with address: 0xe24b6f321B0140716a2b671ed0D983bb64E7DaFA, 55
8. then add a text input to input your name
9. load the random flower svg generater, using your score as random number, display your name below.
10. download your flower png, share with your friends

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

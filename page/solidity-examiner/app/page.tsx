"use client";
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import SolidityExaminerABI from '../../../out/SolidityExaminer.sol/SolidityExaminer.json';

// const contractAddress = '0xe17fAcE58d8a2A3641a30e25BeE4a98Ba9ACe41d';

export default function Home() {
  const [provider, setProvider] = useState<ethers.JsonRpcProvider | null>(null);
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  const [numberValue, setNumberValue] = useState(0);
  const [boolValue, setBoolValue] = useState(false);
  const [addressValue, setAddressValue] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newBool, setNewBool] = useState(false);
  const [newAddress, setNewAddress] = useState('');
  const [studentName, setStudentName] = useState('');
  const [studentScore, setStudentScore] = useState('');
  const [divideA, setDivideA] = useState('');
  const [divideB, setDivideB] = useState('');
  const [divideResult, setDivideResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [setNumberStatus, setSetNumberStatus] = useState('');

  useEffect(() => {
    const connectToEthereum = async () => {
      try {
        const ethereumNodeUrl = 'https://sepolia.infura.io/v3/be1aa32b920b4f46936b4ac92ad3c387';
        console.log(ethereumNodeUrl);// Replace with your Ethereum node URL
        const newProvider = new ethers.JsonRpcProvider(ethereumNodeUrl);
        console.log(newProvider);
        setProvider(newProvider);
        console.log('Connected to Ethereum node');
      } catch (error) {
        console.error('Error connecting to Ethereum node:', error);
      }
    };

    connectToEthereum();
  }, []);

  useEffect(() => {
    const initializeContract = async () => {
      if (provider) {
        try {
          const contractAddress = '0xe17fAcE58d8a2A3641a30e25BeE4a98Ba9ACe41d' // Replace with your contract address
          const contractABI = SolidityExaminerABI.abi; // Replace with your contract ABI
          console.log(contractABI);
          const signer = await provider.getSigner();
          console.log(signer);
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          console.log(contract);
          setContract(contract);
          console.log('Contract initialized');
        } catch (error) {
          console.error('Error initializing contract:', error);
        }
      }
    };

    initializeContract();
  }, [provider]);

  const handleSetNumber = async () => {
    if (contract) {
      setIsLoading(true);
      setSetNumberStatus('');
      try {
        const tx = await contract.setNumber(newNumber);
        setSetNumberStatus('Transaction sent. Waiting for confirmation...');
        await tx.wait();
        const updatedNumber = await contract.numberValue();
        setNumberValue(updatedNumber.toString());
        setSetNumberStatus('Number updated successfully!');
      } catch (error) {
        console.error('Error setting number:', error);
        setSetNumberStatus(`Error: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleSetBool = async () => {
    if (contract) {
      try {
        const tx = await contract.setBool(newBool);
        await tx.wait();
        const updatedBool = await contract.boolValue();
        setBoolValue(updatedBool);
      } catch (error) {
        console.error('Error setting bool:', error);
      }
    }
  };

  const handleSetAddress = async () => {
    if (contract) {
      try {
        const tx = await contract.setAddress(newAddress);
        await tx.wait();
        const updatedAddress = await contract.addressValue();
        setAddressValue(updatedAddress);
      } catch (error) {
        console.error('Error setting address:', error);
      }
    }
  };

  const handleAddStudent = async () => {
    if (contract) {
      try {
        const tx = await contract.addStudent(studentName, studentScore);
        await tx.wait();
        alert('Student added successfully!');
      } catch (error) {
        console.error('Error adding student:', error);
      }
    }
  };

  const handleDivide = async () => {
    if (contract) {
      try {
        const result = await contract.divide(divideA, divideB);
        setDivideResult(result.toString());
      } catch (error) {
        console.error('Error dividing:', error);
        setDivideResult('Error: ' + error.message);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Solidity Examiner</h1>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Value Types</h2>
        <p>Number: {numberValue}</p>
        <p>Bool: {boolValue.toString()}</p>
        <p>Address: {addressValue}</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Set Values</h2>
        <input
          type="number"
          value={newNumber}
          onChange={(e) => setNewNumber(e.target.value)}
          className="border p-2 mr-2"
          placeholder="New number"
          disabled={isLoading}
        />
        <button 
          onClick={handleSetNumber} 
          className={`bg-blue-500 text-white p-2 rounded ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? 'Setting...' : 'Set Number'}
        </button>
        {setNumberStatus && (
          <p className={`mt-2 ${setNumberStatus.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
            {setNumberStatus}
          </p>
        )}
        <br />
        <select
          value={newBool.toString()}
          onChange={(e) => setNewBool(e.target.value === 'true')}
          className="border p-2 mr-2 mt-2"
        >
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
        <button onClick={handleSetBool} className="bg-blue-500 text-white p-2 rounded">
          Set Bool
        </button>
        <br />
        <input
          type="text"
          value={newAddress}
          onChange={(e) => setNewAddress(e.target.value)}
          className="border p-2 mr-2 mt-2"
          placeholder="New address"
        />
        <button onClick={handleSetAddress} className="bg-blue-500 text-white p-2 rounded">
          Set Address
        </button>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Add Student</h2>
        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Student name"
        />
        <input
          type="number"
          value={studentScore}
          onChange={(e) => setStudentScore(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Student score"
        />
        <button onClick={handleAddStudent} className="bg-blue-500 text-white p-2 rounded">
          Add Student
        </button>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Divide (Error Handling)</h2>
        <input
          type="number"
          value={divideA}
          onChange={(e) => setDivideA(e.target.value)}
          className="border p-2 mr-2"
          placeholder="A"
        />
        <input
          type="number"
          value={divideB}
          onChange={(e) => setDivideB(e.target.value)}
          className="border p-2 mr-2"
          placeholder="B"
        />
        <button onClick={handleDivide} className="bg-blue-500 text-white p-2 rounded">
          Divide
        </button>
        <p>Result: {divideResult}</p>
      </div>
    </div>
  );
}
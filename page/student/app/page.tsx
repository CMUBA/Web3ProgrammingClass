import Head from 'next/head';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import StudentABI from '../../../out/StdUtils.sol/StdUtils.json';

const contractAddress = '0xe17fAcE58d8a2A3641a30e25BeE4a98Ba9ACe41d'; // Replace with your contract address
const contractAbi = [...]; // Replace with your contract ABI

const StudentContract = new ethers.Contract(contractAddress, contractAbi);

export default function Home() {
  const [studentCount, setStudentCount] = useState(0);
  const [lastStudent, setLastStudent] = useState({ name: '', score: 0 });
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentScore, setNewStudentScore] = useState(0);

  useEffect(() => {
    async function getStudentCount() {
      const count = await StudentContract.getStudentCount();
      setStudentCount(count.toNumber());
    }

    async function getLastStudent() {
      const [name, score] = await StudentContract.getLastStudent();
      setLastStudent({ name, score: score.toNumber() });
    }

    getStudentCount();
    getLastStudent();
  }, []);

  const handleAddStudent = async () => {
    try {
      const tx = await StudentContract.addStudent(newStudentName, newStudentScore);
      await tx.wait();
      setNewStudentName('');
      setNewStudentScore(0);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Head>
        <title>Student Contract</title>
      </Head>
      <h1>Student Contract</h1>
      <p>Student Count: {studentCount}</p>
      <p>Last Student: {lastStudent.name} ({lastStudent.score})</p>
      <input
        type="text"
        value={newStudentName}
        onChange={(e) => setNewStudentName(e.target.value)}
        placeholder="New Student Name"
      />
      <input
        type="number"
        value={newStudentScore}
        onChange={(e) => setNewStudentScore(e.target.value)}
        placeholder="New Student Score"
      />
      <button onClick={handleAddStudent}>Add Student</button>
    </div>
  );
}
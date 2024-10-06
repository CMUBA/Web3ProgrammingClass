pragma solidity ^0.8.0;

contract StudentContract {
    struct Student {
        string name;
        uint256 score;
    }

    Student[] public students;

    function addStudent(string memory _name, uint256 _score) public {
        students.push(Student(_name, _score));
    }

    function getStudentCount() public view returns (uint256) {
        return students.length;
    }

    function getLastStudent() public view returns (string memory, uint256) {
        require(students.length > 0, "No students yet");
        return (students[students.length - 1].name, students[students.length - 1].score);
    }
}
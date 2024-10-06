// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SolidityExaminer {
    // Class 2: Value Types
    uint256 public numberValue;
    bool public boolValue;
    address public addressValue;

    // New public variables for student information
    uint256 public studentCount;
    string public lastAddedStudentInfo;

    // Class 5: Data Storage and Scope
    uint256 private privateValue;

    // Class 6: Array & Struct
    uint256[] public numbers;
    struct Student {
        string name;
        uint256 score;
    }
    Student[] public students;

    // Class 7: Mapping
    mapping(address => uint256) public studentScores;

    // Class 8: Initial Value
    uint256 public initializedValue = 100;

    // Class 9: Constant and Immutable
    uint256 public constant CONSTANT_VALUE = 4588;
    uint256 public immutable IMMUTABLE_VALUE;

    // Class 11: Constructor and Modifier
    address public owner;
    
    constructor() {
        owner = msg.sender;
        IMMUTABLE_VALUE = 123;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    // Class 12: Events
    event ValueSet(address indexed setter, uint256 value);
    event StudentAdded(uint256 indexed index, string name, uint256 score);
    event StudentUpdated(uint256 indexed index, string name, uint256 score);
    event StudentRemoved(uint256 indexed index);

    // Class 3: Function
    function setNumber(uint256 _number) public {
        numberValue = _number;
        emit ValueSet(msg.sender, _number);
    }

    // Class 4: Function Output
    function getNumberAndBool() public view returns (uint256, bool) {
        return (numberValue, boolValue);
    }

    function setBool(bool _bool) public {
        boolValue = _bool;
    }

    function setAddress(address _address) public {
        addressValue = _address;
    }

    // Class 10: Control Flow
    function checkNumber() public view returns (string memory) {
        if (numberValue > 100) {
            return "Greater than 100";
        } else if (numberValue == 100) {
            return "Equal to 100";
        } else {
            return "Less than 100";
        }
    }

    function addNumber(uint256 _number) public {
        numbers.push(_number);
    }

    function addStudent(string memory _name, uint256 _score) public {
        uint256 index = students.length;
        students.push(Student(_name, _score));
        studentScores[msg.sender] = _score;
        emit StudentAdded(index, _name, _score);

        // Update the public variables
        studentCount = students.length;
        lastAddedStudentInfo = string(abi.encodePacked("Name: ", _name, ", Score: ", uint2str(_score)));
    }

    function getStudent(uint256 _index) public view returns (string memory name, uint256 score) {
        require(_index < students.length, "Student does not exist");
        Student memory student = students[_index];
        return (student.name, student.score);
    }

    function updateStudent(uint256 _index, string memory _name, uint256 _score) public {
        require(_index < students.length, "Student does not exist");
        students[_index] = Student(_name, _score);
        studentScores[msg.sender] = _score;
        emit StudentUpdated(_index, _name, _score);
    }

    function removeStudent(uint256 _index) public {
        require(_index < students.length, "Student does not exist");
        students[_index] = students[students.length - 1];
        students.pop();
        emit StudentRemoved(_index);
    }

    function getStudentCount() public view returns (uint256) {
        return students.length;
    }

    // Helper function to convert uint to string
    function uint2str(uint256 _i) internal pure returns (string memory) {
        if (_i == 0) {
            return "0";
        }
        uint256 j = _i;
        uint256 length;
        while (j != 0) {
            length++;
            j /= 10;
        }
        bytes memory bstr = new bytes(length);
        uint256 k = length;
        while (_i != 0) {
            k = k-1;
            uint8 temp = (48 + uint8(_i - _i / 10 * 10));
            bytes1 b1 = bytes1(temp);
            bstr[k] = b1;
            _i /= 10;
        }
        return string(bstr);
    }

    // Class 14: Abstract and Interface (simplified example)
    function interfaceExample() public pure returns (string memory) {
        return "Interface example";
    }

    // Class 15: Errors
    function divide(uint256 a, uint256 b) public pure returns (uint256) {
        require(b != 0, "Cannot divide by zero");
        return a / b;
    }
}
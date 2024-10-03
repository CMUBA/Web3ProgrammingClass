// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SolidityExaminer {
    // Class 2: Value Types
    uint256 public numberValue;
    bool public boolValue;
    address public addressValue;

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
    uint256 public constant CONSTANT_VALUE = 42;
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
        students.push(Student(_name, _score));
        studentScores[msg.sender] = _score;
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
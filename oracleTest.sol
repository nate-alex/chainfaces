pragma solidity ^0.5.14;
import "github.com/provable-things/ethereum-api/provableAPI.sol";

contract RandomDataSourceExample is usingProvable {
    uint public randomNumber;
    uint private gasPrice = 4010000000; //many set exactly 4gwei, so adding 0.01 gwei increases speed much more than expected.
    uint constant private BASIS_POINTS = 10000;
 
    mapping(bytes32 => uint16) public provableQueryToSeed;
    mapping(bytes32 => address) public provableQueryToAddress;
    mapping(bytes32 => uint) public provableQueryToTokenId;
    
    mapping(uint => bytes2) public nftBits;
    
        constructor() public {
            provable_setProof(proofType_Ledger);
            provable_setCustomGasPrice(gasPrice);
        }
        
    function __callback(
        bytes32 _queryId,
        string memory _result,
        bytes memory _proof
    ) public {
        require(msg.sender == provable_cbAddress());

        uint16 seed = provableQueryToSeed[_queryId];
        address minterAddr = provableQueryToAddress[_queryId];
        uint tokenId = provableQueryToTokenId[_queryId];

        nftBits[tokenId] = bytesToBytes2(bytes(_result),0) ^ bytes2(seed);
        randomNumber = uint(
                keccak256(abi.encodePacked(_result)) ^ blockhash(block.number-1) ^ bytes32(uint(seed))
            );
        
        delete provableQueryToSeed[_queryId];
        delete provableQueryToAddress[_queryId];
        delete provableQueryToTokenId[_queryId];
    }
        
        function getRandomNumber() public payable{
            require(msg.value == 4 finney);    
            uint numberOfBytes = 2;
            uint delay = 0;
            uint callbackGas = 400000;
            bytes32 queryId = provable_newRandomDSQuery(delay, numberOfBytes, callbackGas);
        }
        
        function bytesToBytes2(bytes memory b, uint offset) private pure returns (bytes2) {
      bytes2 out;

      for (uint i = 0; i < 2; i++) {
        out |= bytes2(b[offset + i] & 0xFF) >> (i * 8);
      }
      return out;
    }

    
}

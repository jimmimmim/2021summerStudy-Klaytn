pragma solidity ^0.5.6; // 솔리디티 버전을 지정

/*
  * storage variables *
  Count contract has 2 public storage variables.

  1) count - By default, count's value is 0,
             it could increase or decrease through `plus` or `minus` function.
  2) lastParticipant - lastParticipant is last person's address
                       who sent a transaction(called plus or minus) to Count contract.
  Count contract.

  * functions *
  Count contract has 2 public functions.
  1) plus - increase `count` storage variable by 1. (+1)
  2) minus - decrease `count` storage variable by 1. (-1)
 */

contract Count {
    uint256 public count = 0;
    address public lastParticipant; // 마지막 참가자의 지갑 주소

    // 함수 정의
    // msg.sender 변수를 통해 발신자의 주소를 가져올 수 있다.
    function plus() public {
        count++;
        lastParticipant = msg.sender; // msg.sender의 값을 lastParticipant에 저장
    }

    function minus() public {
        count--;
        lastParticipant = msg.sender; // msg.sender의 값을 lastParticipant에 저장
    }
}

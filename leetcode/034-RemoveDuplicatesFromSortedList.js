/*********************************************************************************************

"Remove Duplicates from Sorted List"

Given the head of a sorted linked list, delete
all duplicates such that each element appears
only once. Return the linked list sorted as well.

Example 1:
    Input: head = [1,1,2]
    Output: [1,2]

Example 2:
    Input: head = [1,1,2,3,3]
    Output: [1,2,3]

********************************************************************************************/

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  
  var deleteDuplicates = function (head) {
    let current = head;
    while (current !== null && current.next !== null) {
      if (current.val === current.next.val) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
    return head;
  };
  
  function printList(head) {
    let current = head;
    let nodeValues = [];
  
    while (current !== null) {
      nodeValues.push(current.val);
      current = current.next;
    }
    console.log(nodeValues);
  }
  
  // [1, 1, 2, 3, 3] -> [1, 2, 3]
  let node5 = new ListNode(3);
  let node4 = new ListNode(3, node5);
  let node3 = new ListNode(2, node4);
  let node2 = new ListNode(1, node3);
  let node1 = new ListNode(1, node2);
  
  printList(node1);
  deleteDuplicates(node1); 
  printList(node1);
  //Runtime: 36ms
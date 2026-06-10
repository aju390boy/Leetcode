/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let temp=new LinkedList(0)
    let current=temp;
    temp.next=head
    while(current.next){
        if(current.next.val==val){
            current.next=current.next.next;
        }else{
            current=current.next
        }
    }
    return temp.next
    
};
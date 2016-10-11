function LinkedList() {
  var head = null;
  var tail = null;

  function flatten(){
    
  }

  function push(data) {
    if(!head){
      console.log("No Head");
      head = { previous: null , value: data, next: null };
    } else if(!tail){
      console.log("No Tail");
      tail = { previous: head , value: data, next: null}
      head.next = tail;
    } else {
      var newTail = { previous: tail , value: data, next:null };
      tail.next = newTail;
      tail = newTail;
    }

  }

  function pop() {
    var current = head;

    if (current) {
      while(current.next){
        var next = current.next;
        if(current.next === tail){
          var oldTail = tail;
          tail = current;
          tail.next = null;
          return oldTail.value;
        }
        current = next;
      }

      if(head === tail) {
        head = null;
        tail = null;
      }
      return head.value;
    }

    return null;
  }

  return {
    push: push,
    pop: pop
  }
}
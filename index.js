/* Linked List Function */
function getName(node) {
  return node.name;
} 

function headNode(linkedList, collection) {
  return collection[linkedList];
}

function next(node, collection) {
   let nextAddress = node.next;
   return collection[nextAddress];
}

function nodeAt(index, linkedList, collection) {
  let node = collection[linkedList];
  for( let i = 0; i < index; i++ ) {
    node = next(node, collection);
  }
  return node;
}

function addressAt(index, linkedList, collection) {
  if( index === 0 ) {
    return linkedList
  }
  let node = linkedList;
  for( let i = 0; i < index; i++ ) {
    if( i + 1 === index ) {
      return collection[node].next
    }
    node = next(node, collection);
  }
  return null
}

function indexAt(node, collection, linkedList) {
  let pointerNode = collection[linkedList]
  for( let i = 0; i < 100; i++ ) {
    if( pointerNode === node ) {
      return i;
    }
    pointerNode = next(pointerNode, collection)
  }
  return null
}
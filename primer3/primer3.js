// TODO: Implement the createLinkedList function

class LinkedList {
  constructor() {
    this.head = null;
  } 

  createList(array) {
    if (array.length === 0) {
      return null;
    }

    this.head = new Node(array[0]);
    let current = this.head;
    for (let i = 1; i < array.length; i++) {
      current.next = new Node(array[i]);
      current = current.next;
    }
  
  }

  displayList() {
    let current = this.head;
    while (current) {
      current = current.next;
    }
  }
  getFirst() {
    return this.head;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}


function isValidTimestamp(timestamp) {
  const timestampRegex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;

  if (!timestampRegex.test(timestamp)) {
    return false;
  }
  const date = new Date(timestamp)
  return !isNaN(date.getTime());
}

function postValidation(posts) {
  if (!Array.isArray(posts) && posts.length <= 0) {
    throw Error ("Invalid array");
  }
  for (let item of posts ) {
    if (Object.entries(item).length < 3) {
      throw Error ("Invalid structure");
    }

    if (typeof item.text != 'string'
        || !(item.text).length >= 1
        || !isValidTimestamp(item.timestamp)
        || typeof item.author  != 'string'
        || !(item.author).length >= 1) {
      throw Error ("Invalid datatypes");
    } 
  }
}


function createLinkedList(posts) {

  postValidation(posts);

  let linkedList = new LinkedList();
  
  linkedList.createList(posts);

  return linkedList.getFirst();
}

function searchSocialMediaFeed(feed, keyword) {
  if (feed.length < 1)
    return null;

  let newArray =[]
  
  keyword = keyword.toLowerCase();

  let current = feed;
  while (current) {
    let currentItem = current.data.text.toLowerCase().split(' ');
      if (currentItem.some(element => element.includes(keyword))) {
        newArray.push(current.data);
      }
    current = current.next;
  }
  return newArray;
  }

  
let feed = createLinkedList([
  { text: 'Hello world!', timestamp: '2024-03-11 10:00:00', author: 'Alice' },
  { text: 'Having a great day!', timestamp: '2024-03-11 11:30:00', author: 'Bob' },
  { text: 'Just finished a fantastic game.', timestamp: '2024-03-11 12:15:00', author: 'Aqil' },
  { text: 'Another great post!', timestamp: '2024-03-11 13:00:00', author: 'Diana' }
]);


console.log(searchSocialMediaFeed(feed, 'gr'));


export {createLinkedList, searchSocialMediaFeed};

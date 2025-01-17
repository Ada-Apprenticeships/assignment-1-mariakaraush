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
      console.log("looping..")
      current.next = new Node(array[i]);
      current = current.next;
  }
  }

  displayList() {
    let current = this.head;
    while (current) {
      // console.log(current.data);
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
  const timestampRegex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/

  if (!timestampRegex.test(timestamp)) {
    return false
  }
  const date = new Date(timestamp)
  return !isNaN(date.getTime());
}

function postValidation(posts) {
  for (let item of posts ) {
    if (Object.entries(item).length < 3) {
      throw Error ("Invalid structure")
    }
    // console.log(item)
    // console.log(typeof item.text)
    // console.log(isValidTimestamp(item.timestamp))

    if (typeof item.text != 'string'
        || !(item.text).length >= 1
        || !isValidTimestamp(item.timestamp)
        || typeof item.author  != 'string'
        || !(item.author).length >= 1) {
      throw Error ("Invalid datatypes")
    } 
  }
}


function createLinkedList(posts) {
  // TODO: Check if the input 'posts' is valid (an array with at least one element)
  if (!Array.isArray(posts) && posts.length <= 0) {
    throw Error ("Invalid array")
  }
  // TODO: Iterate through each post in the 'posts' array
  // TODO: Validate the structure of each post (ensure it has 'text', 'timestamp', and 'author' properties with correct types and values)
  // TODO: If any post has an invalid structure, throw an error

  postValidation(posts)
  // TODO: Create the linked list with the validated posts
  let linkedList = new LinkedList();
  // TODO: Return the head of the linked list

  linkedList.createList(posts)

  return linkedList.getFirst()
}

// TODO: Implement the searchSocialMediaFeed function
function searchSocialMediaFeed(feed, keyword) {
  if (feed.length < 1)
    return null

  // TODO: Handle the case where the feed is empty
  // TODO: Initialise an empty array to store the search results

  let newArray = [];
  // TODO: Normalise the keyword for case-insensitive search
 
  // TODO: Split the keyword into individual words
  // TODO: Traverse the linked list
  // TODO: Normalise the text of the current post for case-insensitive search
  // TODO: Split the text of the current post into individual words
  // TODO: Check if any keyword word is partially present in any text word
  // TODO: If there's a partial match, add the current post to the results
  // TODO: Return the array of search results
}

// ADDITIONAL TODO - The suggested functions above can be refactored into multiple functions if you think appropriate.

const feed = [
  { text: 'Hello world!', timestamp: '2024-03-11 10:00:00', author: 'Alice' },
  { text: 'Having a great day!', timestamp: '2024-03-11 11:30:00', author: 'Bob' },
  { text: 'Just finished a fantastic game.', timestamp: '2024-03-11 12:15:00', author: 'Aqil' },
];

// console.log(feed.length)
console.log(createLinkedList(feed))

export {createLinkedList, searchSocialMediaFeed};

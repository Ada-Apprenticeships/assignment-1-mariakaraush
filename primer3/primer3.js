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
      // console.log("looping..")
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
  // searchList(keyword, key = "text") {
  //   let list = []
  //   let current = this.head;
  //     while (current != null) {
  //       let currentItem = current.data[key].toLowerCase()
  //       console.log(currentItem)
  //       if (currentItem.includes(keyword)) {
  //         console.log(current.data);
  //         list.push(current.data)
  //       }
  //       current = current.next;
  //     }
  //   return list
  // }

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

  let newArray =[]
  // TODO: Normalise the keyword for case-insensitive search
  keyword = keyword.toLowerCase();
  console.log(keyword)
  // TODO: Split the keyword into individual words

  // TODO: Traverse the linked list
  // return feed.searchList(keyword)
  let posts = feed
  // console.log(posts)
  let current = posts;
  while (current) {
    let currentItem = current.data.text.toLowerCase().split(' ')
    // console.log(currentItem)
      if (currentItem.some(element => element.includes(keyword))) {
        newArray.push(current.data)
      }
    current = current.next;
  }
  return newArray
  }
  // TODO: Normalise the text of the current post for case-insensitive search
  // TODO: Split the text of the current post into individual words
  // TODO: Check if any keyword word is partially present in any text word
  // TODO: If there's a partial match, add the current post to the results
  // TODO: Return the array of search results

// ADDITIONAL TODO - The suggested functions above can be refactored into multiple functions if you think appropriate.

// let feed = [
//   { text: 'Hello world!', timestamp: '2024-03-11 10:00:00', author: 'Alice' },
//   { text: 'Having a great day!', timestamp: '2024-03-11 11:30:00', author: 'Bob' },
//   { text: 'Just finished a fantastic game.', timestamp: '2024-03-11 12:15:00', author: 'Aqil' },
//   { text: 'Another great post!', timestamp: '2024-03-11 13:00:00', author: 'Diana' }
// ];

// console.log(feed.length)
let feed = createLinkedList([
  { text: 'Hello world!', timestamp: '2024-03-11 10:00:00', author: 'Alice' },
  { text: 'Having a great day!', timestamp: '2024-03-11 11:30:00', author: 'Bob' },
  { text: 'Just finished a fantastic game.', timestamp: '2024-03-11 12:15:00', author: 'Aqil' },
  { text: 'Another great post!', timestamp: '2024-03-11 13:00:00', author: 'Diana' }
]);


// console.log(searchSocialMediaFeed(feed, 'ingerer'))

// console.log(feed)
const longText = 'a'.repeat(10000) + 'target' + 'b'.repeat(10000);
// const feed = createLinkedList([
//   { 
//     text: longText,
//     timestamp: '2024-03-11 10:00:00',
//     author: 'Alice'
//   }
// ]);

console.log(searchSocialMediaFeed(feed, 'gr'))


export {createLinkedList, searchSocialMediaFeed};

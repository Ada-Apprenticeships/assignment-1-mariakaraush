// TODO: Implement the createLinkedList function
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  } 

  createList(value) {
    if (value.length === 0) {
      return;
    }

    this.head = new Node(value[0]);
    let current = this.head;
    for (let i = 1; i < value.length; i++) {
      current.next = new Node(value[i]);
      current = current.next;
  }
  }

  displayList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
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
  
  const requiredKeys = [{text: "string", timestamp: "timestamp", author: "string"}]
  for (i = 0; i < posts.length - 1; i++ ) {
    if (posts[i] != [])
  }
  // TODO: Create the linked list with the validated posts
  // TODO: Return the head of the linked list
}

// TODO: Implement the searchSocialMediaFeed function
function searchSocialMediaFeed(feed, keyword) {
  // TODO: Handle the case where the feed is empty
  // TODO: Initialise an empty array to store the search results
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


export default {createLinkedList, searchSocialMediaFeed};

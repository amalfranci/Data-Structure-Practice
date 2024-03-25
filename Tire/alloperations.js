class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word) {
    let current = this.root;
    for (let char of word) {
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode());
      }
      current = current.children.get(char);
    }
    current.isEndOfWord = true;
  }

  search(word) {
    let current = this.root;
    for (let char of word) {
    
      if (!current.children.has(char)) {
        return false;
      }
      current = current.children.get(char);
    }
    return current.isEndOfWord;
  }

  startsWith(prefix) {
    let words = [];
    let current = this.root;
    if (!prefix.length) return words;

    for (let letter of prefix) {
      if (!current.children.has(letter)) return words;
      current = current.children.get(letter);
    }

    this.printWords(current, prefix, words);
    return words;
  }

  printWords(node, prefix, words) {
    if (node.isEndOfWord) {
      words.push(prefix);
    }

    for (let [char, child] of node.children) {
      this.printWords(child, prefix + char, words);
    }
  }
}

let searchString = new Trie();
searchString.addWord("RAN");
searchString.addWord("RAIN");
searchString.addWord("RAINNING");

console.log(searchString.search("RAIN")); 
console.log(searchString.search("RA")); 



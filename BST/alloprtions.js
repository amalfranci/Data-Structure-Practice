class Node{
  
  constructor(value)
  {
    this.value=value
    this.left=null
    this.right=null
    
  }
  
}
class BST{
   
   constructor()
   {
     this.root=null
     
   }
   insert(value)
   {
     const newNode= new Node(value)
     if(this.root===null)
     {
       this.root=newNode
       return true
     }
     let temp=this.root
     while(true)
     {
       if(newNode.value=== temp.value) return undefined
       if(newNode.value< temp.value)
       {
         if(temp.left===null)
         {
           temp.left=newNode
           return this
         }
         temp=temp.left
       }else
       {
         if(temp.right===null)
         {
           temp.right=newNode
           return this
         }
         temp=temp.right
       }
     }
   }
   BFS()
   {

     let currentNode=this.root
     let result=[]
     let queue=[]
      queue.push(currentNode)
     while(queue.length)
     {
       currentNode=  queue.shift()
       result.push(currentNode.value)
       if(currentNode.left) queue.push(currentNode.left)
       if(currentNode.right) queue.push(currentNode.right)
     }
     return result
   }
   
   dfsPreOrder()
   {
     let result=[]
     function Traversal(startingNode)
     {
       result.push(startingNode.value)
       if(startingNode.left) Traversal(startingNode.left)
       if(startingNode.right) Traversal(startingNode.right)
       
     }
     Traversal(this.root)
     return result

   }
   dfsInorder()
   {
     let result=[]
     function Traversal(startingNode)
     {
       if(startingNode.left) Traversal(startingNode.left)
       result.push(startingNode.value)
       if(startingNode.right) Traversal(startingNode.right)
       
     }
     Traversal(this.root)
     return result
     
   }
   dfsPostOrder()
   {
     let result=[]
     function Traversal(startingNode)
     {
       if(startingNode.left) Traversal(startingNode.left)
       if(startingNode.right) Traversal(startingNode.right)
       result.push(startingNode.value)
     }
     Traversal(this.root)
     return result
   }
   findMinValue(node){
     while(node.left!=null)
     {
       node=node.left
     }
     return node
   }
   delete(value)
   {
     this.root= this.deleteNode(this.root,value)
   }
   deleteNode(root,value)
   {
     if(root==null)
     {
       return root
     }
     if(value<root.value)
     {
       root.left= this.deleteNode(root.left,value)
     }
     else if(value>root.value)
     {
       root.right= this.deleteNode(root.right,value)
       
     }else{
       if(root.left===null)
       {
         return root.right
       }
       else if(root.right===null)
       {
         return root.left
       }
       
       root.value =this.findMinValue(root.right).value
       root.right= this.deleteNode(root.right,root.value)
     }
     return root
   }
   search(value)
   {
     let tem=this.root
   
     while(tem)
     {
       if(value===tem.value )  {
         console.log("value found")
         return tem}
         
       else if(value<tem.value)
       {
         tem=tem.left
       }
       else
       {
         tem=tem.right
       }
     
     }
   }
   isValidBST() {
  function isValidNode(node, min = null, max = null) {
    if (node === null) {
      return true; // An empty subtree is a valid BST
    }

    // Check if the current node's value is within the valid range
    if ((min !== null && node.value <= min) || (max !== null && node.value >= max)) {
      return false; // Node's value violates the BST property
    }

    // Recursively check the left and right subtrees with updated ranges
    return (
      isValidNode(node.left, min, node.value) &&
      isValidNode(node.right, node.value, max)
    );
  }

  // Start the recursive check from the root of the tree
  return isValidNode(this.root);
}

   
   
}

const myBst =new BST()
myBst.insert(47)
myBst.insert(21)
myBst.insert(76)
myBst.insert(18)
myBst.insert(27)
myBst.insert(52)
myBst.insert(82)
myBst.insert(180)

console.log(myBst.BFS())
myBst.delete(27)


console.log(myBst.dfsInorder())

console.log(myBst.search(180))

console.log(myBst.isValidBST())
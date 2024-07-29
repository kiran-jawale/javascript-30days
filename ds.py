
"""DS using Python instead of JS"""
"""Linked List"""

class Node: #class Node for element
    def __init__(self, value): #to enter a value
        self.value = value #value of node
        self.next = None #initially pointer null

class LinkedList: #class LinkedList 
    def __init__(self): #constuctor to instantiate
        self.head = None

    def append(self, value): #to append node at the end with value
        new_Node = Node(value) #instantiated Node with value

        if self.head is None: #if head is empty
            self.head = new_Node # then head will be first node
            return #return as first node appended
        current = self.head #if head isn't null then track the  node
        while current.next is not None: #if next node isn't empty
            current = current.next #move to next node till end
        current.next = new_Node #finally at last node, its next will be newNode
        #hence appended
    
    def remove_last(self):
        if self.head is None: #i head is empty
            return #as nothing to remove
        if self.head.next is None: #if next node of head is empty
            self.head = None #remove the head
            return #done
        current = self.head #access the head of LinkedList
        while current.next.next is not None: #while the node'next's pointer isn't empty
            current = current.next #move to next node
        #after founf the last node whose pointer is empty
        current.next = None #remove the last using second last pointer

    def display(self):
        if self.head is None: #if empty head
            print('List is empty 1') #then return
            return
        current = self.head #access the head
        while current is not None: #while node isn't empty
            print(current.value, end=" ") #print node's value 
            current = current.next #move to next node

        print()#done

linkedlist1 = LinkedList()
linekdlist2 = LinkedList()
linekdlist2.append(10) #10
linekdlist2.append(20) #10-20
linekdlist2.display() # 10 20
linekdlist2.remove_last() #10
linekdlist2.append('A') 
linekdlist2.append('B') #10-A-B
linekdlist2.display() #10 A B

"""Stack"""
class Stack:
    def __init__(self): #instantiate stack
        self.items = [] #initially empty stack

    def is_empty(self):
        return len(self.items) == 0

    def push(self, item): #push the item
        self.items.append(item) #into stack

    def pop(self): #return and remove the top item
        if self.is_empty(): #if empty stack
            print('Stack is empty !')
            return None #return empty value
        return self.items.pop() #remove return top item
        
    def peek(self): #return, not removal of top item
        if not self.is_empty(): #if not empty stack
            return self.items[-1] #then return last item
        return None #if empty then return empty value

stack = Stack()
stack.push(10) #10
stack.push(20) # 20-10
stack.push(30) #30-20-10
stack.peek() #30
stack.pop() #30
stack.peek() #20

def reverse_string(str):
    stack = Stack()
    for char in str: #access each char at a time
        stack.push(char) #push into stack
    reversed = ""  #initially empty string
    
    while not stack.is_empty(): #while stack isn't empty
        reversed += stack.pop() #return to string and remove each char
    return reversed #finally string revesed

string = "javascript"
reversed_string = reverse_string(string)
print(reversed_string)

"""Queue"""

class Queue:
    def __init__(self): #instantiation
        self.items = [] #initially empty

    def is_empty(self):
        return len(self.items) == 0

    def enqueue(self, item): #append item from end
        self.items.append(item) #enqued

    def dequeue(self): #return and remove front item
        if not self.is_empty(): #if queue isn't emppty
            return self.items.pop(0) #index 0 or front 
        else:
            return None
        
    def front(self): #to return front item, no removal
        if self.is_empty(): #if empty
            return None #return empty value
            #if not
        return self.items[0] #return front item

queue = Queue()
queue.enqueue(10)
queue.enqueue(20)
print(queue.front())
print(queue.dequeue())
print(queue.front())

class PrinterQueue:

    def __init__(self):
        self.queue = Queue() #create a queue

    def add_job(self,job): #add job into queue
        self.queue.enqueue(job) #item is added to last

    def process_next_job(self): #access item
        job = self.queue.dequeue() #remove item from front
        if job is  None: #if queue is empty
            print('No jobs in queue') 
        else: 
            print('Processing')
            print(job)

printer_queue = PrinterQueue()
printer_queue.add_job('JOB1') #JOB1
printer_queue.add_job('JOB2') #JOB1,JOB2
printer_queue.add_job('JOB3') #JOB1,JOB2,JOB3
printer_queue.process_next_job() #JOB2, JOB3
printer_queue.process_next_job() #JOB3
printer_queue.process_next_job() #No jobs in queue


"""Tree"""
class TreeNode:
    def __init__(self, value): #instantiate with value
        self.value = value
        self.left = None #initially empty children
        self.right = None
    
class BinaryTree:
    def __init__(self):
        self.root = None #initially empty tree

    def insert(self, value):
        new_node = TreeNode(value) #create new node
        if self.root is None: #if root is empty
            self.root = new_node #then set root
            return
        current = self.root #else, access root
        while True: 
            if new_node.value < current.value: #if value is lesser than current value
                if current.left is None: #if left child is empty of current node
                    current.left = new_node #set new node as left child of current node
                    return
                else:
                    current = current.left #move to next, left child
            if new_node.value > current.value: #if new value is greater than current
                if current.right is None: #if right child id empty
                    current.right = new_node #then set new node as right child
                    return
                else:
                    current = current.right #move to next, right child

    def inorder_traverse(self):
        def _inorder(node): 
            if node is not None: #if node isn't empty
                _inorder(node.left) #move to left child
                print(node.value, end=" ") #print current node
                _inorder(node.right) #move to right child
            
            _inorder(self.root) #recursively call

binary_tree = BinaryTree()
binary_tree.insert(10)
binary_tree.insert(20)
binary_tree.insert(30)
binary_tree.insert(15)
binary_tree.insert(25)

binary_tree.inorder_traverse()


"""Graph with BFS and shortest path"""

class Graph:
    def __init__(self):
        self.vertices = {} #initially empty dictionary

    def add_vertex(self, vertex):
        if vertex not in self.vertices: #if the vertex isn't exist
            self.vertices[vertex] = [] #add vertex as key
            #empty array - initially no edges to the vertex

    def add_edge(self, vertex1, vertex2): #get two vertices
        self.add_vertex(vertex1) #if not present then added, else not
        self.add_vertex(vertex2) #the if block won't execute
        self.vertices[vertex1].append(vertex2) #push/append a vertex to another's list
        self.vertices[vertex2].append(vertex1) #similarly, to another one

    def bfs(self, start_vertex): #breadth-first search
        visited = {} #empty dictionary
        queue = [start_vertex] #create a queue with startIndex
        visited[start_vertex] = True #mark the startVertex as visited
        
        while len(queue) > 0: #while queue isn't empty
            current_vertex = queue.pop(0) #dequeue the last vertex
            print(current_vertex, end=" ")

            for neighbor in self.vertices[current_vertex]: #iterate each neighbor of current vertex to get edge
                if neighbor not in visited: #if the vertex not visited
                    visited[neighbor] = True #mark as visited
                    queue.append(neighbor) #enqueue wiith current vertex

    def shortest_path(self, start_vertex, end_vertex):
        visited = {} #initially empty dictionary
        queue = [(start_vertex, [start_vertex])]
        #queue is list of tuples, a tuple include start_index or vertex and current path
        visited[start_vertex] = True #mark as visited

        while len(queue) > 0: #while queue isn't empty
            current_vertex, path = queue.pop(0) #dequeue and get vertex and path
            #unpacking items vertex and path, similar to destructuring in js
            #vertex ad variable and path as list of vertices destructured from a tuple

            if current_vertex == end_vertex: #if end vertex is found
                return path #path found
            
            for neighbor in self.vertices[current_vertex]: 
                #each neighbor in the current vertex from vertices dictionary
                if neighbor not in visited: #if vertex isn't in visited
                    visited[neighbor] = True #mark as visited
                    queue.append( (neighbor, path + [neighbor]) ) # element neighbor appended at path list 
                    #enqueued now as earlierly dequeued
            
        return None #path not found
                 
graph1 = Graph()
graph2 = Graph()
graph2.add_vertex('a') #a
graph2.add_vertex('b') #a,b
graph2.add_edge('a','b') # a-b
graph2.add_edge('c','d') #a-b, c-d
graph2.add_edge('b','c') #a-b-c-d
graph2.add_edge('e', 'f') #a-b-c-d, e-f
graph2.add_edge('g','h') #a-b-c-d, e-f, g-h
graph2.add_edge('a','z') #z-a-b-c-d, e-f, g-h
graph2.add_edge('b', 'y') #b-a, b-y, b-c
graph2.add_edge('d','z') #a-b-c-d-z-a

graph2.bfs('a')
start = 'y'
end = 'd'
shortestpath1 = graph2.shortest_path(start , end)

if  shortestpath1:
    print(f"Shortest path from {start} to {end} : {shortestpath1}")
else:
    print(f"No path not found between {start} and {end}")
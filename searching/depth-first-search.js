// Finds if the path exists. It takes less memory.
// It is slower than BFS

// It goes deep in the tree or graph.

/*
There are 3 ways to handle the depth first search
- InOrder: in order as the same says
- PreORder: Good if you want to re build the tree. 
- PostOrder: Starts with the children and got up.

        9
    4       20
1     6  15     170

- InOrder => [1, 4, 6, 9, 15, 20, 170]
- PreOrder => [9, 4, 1, 6, 20, 15, 170]
- PostOrder => [1, 6, 4, 15, 170, 20, 9]

*/


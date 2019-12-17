'use strict';

const BinarySearchTree = require('./BinarySearchTree');

function three(arr) {
	const BST = new BinarySearchTree();
	for (let i = 0; i < arr.length; i++) {
		BST.insert(arr[i]);
	}
	console.log(BST);
}

// three([3,1,4,6,9,2,5,7]);
three(['E','A','S','Y','Q','U','E','S','T','I','O','N']);
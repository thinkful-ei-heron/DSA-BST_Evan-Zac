'use strict';

const BinarySearchTree = require('./BinarySearchTree');
const BrokenBinaryTree = require('./BrokenBinaryTree');

function three(arr) {
	const BST = new BinarySearchTree();
	for (let i = 0; i < arr.length; i++) {
		BST.insert(arr[i]);
	}
	console.log(BST);
}

// three([3,1,4,6,9,2,5,7]);
// three(['E','A','S','Y','Q','U','E','S','T','I','O','N']);

function tree(t) {
	if (!t) {
		return 0;
	}
	return tree(t.left) + t.value + tree(t.right);
}

const t4 = new BinarySearchTree();
t4.insert(3, 3);
t4.insert(2, 2);
t4.insert(1, 1);
t4.insert(4, 4);
t4.insert(5, 5);

// console.log(tree(t4));

function height(t) {
	if (!t) return 0;
	if (height(t.left) > height(t.right)) return height(t.left) + 1;
	else return height(t.right) + 1;
}

// console.log(t4);
// console.log(height(t4));


const tBackward = new BrokenBinaryTree();
tBackward.insert(3, 3);
tBackward.insert(2, 2);
tBackward.insert(1, 1);
tBackward.insert(4, 4);
tBackward.insert(5, 5);

function isItBST(t) {
	if (!t) return false;

	if (t.right && t.right < t.key) return false;
	if (t.left && t.left > t.key ) return false;
	if (t.right && t.left) {
		if (t.right.key < t.left.key) return false;
	}

	if (t.left) return isItBST(t.left);
	if (t.right) return isItBST(t.right);
	return true;
}


// console.log(isItBST(t4));
// console.log(isItBST(tBackward));
/* eslint-disable indent */
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
t4.insert(7, 7);

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

function thirdLargest(t) {
	const arr = [];
	const subRec = (t) => {
		if (!t) return;
		arr.push(t.key);
		subRec(t.left);
		subRec(t.right);
	};

	subRec(t);
	arr.sort();
	return arr[arr.length - 3];	
}

// console.log(thirdLargest(t4));



//Question 08: Balanced BST

const BalancedBST = new BinarySearchTree();
BalancedBST.insert(4, 1);
BalancedBST.insert(2, 1);
BalancedBST.insert(3, 1);
BalancedBST.insert(1, 1);
BalancedBST.insert(6, 1);
BalancedBST.insert(5, 1);
BalancedBST.insert(7, 1);

function checkheight(t) {
	if (t === null) {
		return 0;
	} //break case
	let leftHeight = checkheight(t.left);
	let rightHeight = checkheight(t.right);
	let heightDiff = leftHeight - rightHeight;
	if(Math.abs(heightDiff) > 1) {
		return -1;
	} else {
		return Math.max(leftHeight, rightHeight) + 1;
	}
}
function isBalanced(t) {
	if (t === null) {
		return true; //break case
	}
	if(checkheight(t) === -1){
		return false;
	} else {
		return isBalanced(t.left) && isBalanced(t.right);
	}
}

// console.log(isBalanced(t4));


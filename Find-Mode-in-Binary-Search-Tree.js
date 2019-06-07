// Simple lengthy Javascript JS solution

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) 
{
    if(!root)
        return [];
    var resArr=[], resArr2=[], arr=[], myMap=new Map(), maxVal=-10, chainLength=1, highestVal;
    preOrder(root);
    function preOrder(root)
    {
        if(!root)
            return null; 

        arr.push(root.val);
        preOrder(root.left);
        preOrder(root.right);
    }
    for(var i=0;i<arr.length; i++)
    {
        if(myMap.get(arr[i])==undefined)
        {
            myMap.set(arr[i],1);
        }
        else
        {
            myMap.set( arr[i] ,  myMap.get(arr[i])+1 );
        }
    }
    myMap.forEach(function(value, key){
        resArr.push(value);
    });

    resArr.sort((a,b)=>(a>b));
    highestVal=resArr[resArr.length-1];
    for(var i=resArr.length-1; i>0; i--)
    {
        if(resArr[i]==highestVal)
        {
            chainLength++;
        }
        else
        {
            break;
        }
    }
    
    myMap.forEach(function(value, key)
    {
        if(chainLength>0 && value==highestVal)
        {
            resArr2.push(key);
            chainLength--;
        }
    })
    return resArr2;
    
};
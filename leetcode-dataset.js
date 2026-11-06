/**
 * JUDGEX — Official LeetCode Practice Dataset
 * Contains curated LeetCode questions with exact LeetCode IDs, descriptions,
 * examples, constraints, multi-language starter templates, and test cases.
 */

(function () {
  'use strict';

  const LEETCODE_PROBLEMS_RAW = [
  {
    "id": 1,
    "slug": "two-sum",
    "title": "1. Two Sum",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Arrays & Hashing",
    "acceptance": "54.2%",
    "desc": "<p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>.</p>\n             <p>You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice. You can return the answer in any order.</p>",
    "examples": "<div class=\"example-box\">\n                  <div class=\"ex-title\">Example 1:</div>\n                  <pre><code>Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]\nExplanation: Because nums[0] + nums[1] == 9, we return [0, 1].</code></pre>\n                 </div>\n                 <div class=\"example-box\">\n                  <div class=\"ex-title\">Example 2:</div>\n                  <pre><code>Input: nums = [3,2,4], target = 6\nOutput: [1,2]</code></pre>\n                 </div>\n                 <div class=\"example-box\">\n                  <div class=\"ex-title\">Example 3:</div>\n                  <pre><code>Input: nums = [3,3], target = 6\nOutput: [0,1]</code></pre>\n                 </div>",
    "constraints": [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "nums = [2, 7, 11, 15], target = 9",
        "expected": "[0, 1]"
      },
      {
        "title": "Test 2",
        "input": "nums = [3, 2, 4], target = 6",
        "expected": "[1, 2]"
      },
      {
        "title": "Test 3",
        "input": "nums = [3, 3], target = 6",
        "expected": "[0, 1]"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def twoSum(self, nums: list[int], target: int) -> list[int]:\n        \n",
      "cpp": "class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar twoSum = function(nums, target) {\n    \n};\n",
      "c": "int* twoSum(int* nums, int numsSize, int target, int* returnSize) {\n    \n}\n"
    }
  },
  {
    "id": 2,
    "slug": "add-two-numbers",
    "title": "2. Add Two Numbers",
    "difficulty": "MEDIUM",
    "diffClass": "badge-med",
    "category": "Linked List",
    "acceptance": "43.1%",
    "desc": "<p>You are given two <strong>non-empty</strong> linked lists representing two non-negative integers. The digits are stored in <strong>reverse order</strong>, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.</p>\n             <p>You may assume the two numbers do not contain any leading zero, except the number 0 itself.</p>",
    "examples": "<div class=\"example-box\">\n                  <div class=\"ex-title\">Example 1:</div>\n                  <pre><code>Input: l1 = [2,4,3], l2 = [5,6,4]\nOutput: [7,0,8]\nExplanation: 342 + 465 = 807.</code></pre>\n                 </div>\n                 <div class=\"example-box\">\n                  <div class=\"ex-title\">Example 2:</div>\n                  <pre><code>Input: l1 = [0], l2 = [0]\nOutput: [0]</code></pre>\n                 </div>",
    "constraints": [
      "The number of nodes in each linked list is in the range [1, 100].",
      "0 <= Node.val <= 9",
      "It is guaranteed that the list represents a number that does not have leading zeros."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "l1 = [2, 4, 3], l2 = [5, 6, 4]",
        "expected": "[7, 0, 8]"
      },
      {
        "title": "Test 2",
        "input": "l1 = [0], l2 = [0]",
        "expected": "[0]"
      },
      {
        "title": "Test 3",
        "input": "l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]",
        "expected": "[8,9,9,9,0,0,0,1]"
      }
    ],
    "templates": {
      "python": "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\nclass Solution:\n    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:\n        \n",
      "cpp": "/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode() : val(0), next(nullptr) {}\n *     ListNode(int x) : val(x), next(nullptr) {}\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\n * };\n */\nclass Solution {\npublic:\n    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {\n        \n    }\n};\n",
      "java": "/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public ListNode(int x) {\n        \n    }\n}\n",
      "javascript": "/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @return {any}\n */\nvar ListNode = function(val, next) {\n    \n};\n",
      "c": "/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     struct ListNode *next;\n * };\n */\nListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {\n    \n}\n"
    }
  },
  {
    "id": 3,
    "slug": "longest-substring-without-repeating-characters",
    "title": "3. Longest Substring Without Repeating Characters",
    "difficulty": "MEDIUM",
    "diffClass": "badge-med",
    "category": "Sliding Window",
    "acceptance": "35.4%",
    "desc": "<p>Given a string <code>s</code>, find the length of the <strong>longest substring</strong> without repeating characters.</p>",
    "examples": "<div class=\"example-box\">\n                  <div class=\"ex-title\">Example 1:</div>\n                  <pre><code>Input: s = \"abcabcbb\"\nOutput: 3\nExplanation: The answer is \"abc\", with the length of 3.</code></pre>\n                 </div>\n                 <div class=\"example-box\">\n                  <div class=\"ex-title\">Example 2:</div>\n                  <pre><code>Input: s = \"bbbbb\"\nOutput: 1\nExplanation: The answer is \"b\", with the length of 1.</code></pre>\n                 </div>\n                 <div class=\"example-box\">\n                  <div class=\"ex-title\">Example 3:</div>\n                  <pre><code>Input: s = \"pwwkew\"\nOutput: 3\nExplanation: The answer is \"wke\", with the length of 3.</code></pre>\n                 </div>",
    "constraints": [
      "0 <= s.length <= 5 * 10^4",
      "s consists of English letters, digits, symbols and spaces."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "s = \"abcabcbb\"",
        "expected": "3"
      },
      {
        "title": "Test 2",
        "input": "s = \"bbbbb\"",
        "expected": "1"
      },
      {
        "title": "Test 3",
        "input": "s = \"pwwkew\"",
        "expected": "3"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def lengthOfLongestSubstring(self, s: str) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int lengthOfLongestSubstring(string s) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar lengthOfLongestSubstring = function(s) {\n    \n};\n",
      "c": "int lengthOfLongestSubstring(char* s) {\n    \n}\n"
    }
  },
  {
    "id": 4,
    "slug": "median-of-two-sorted-arrays",
    "title": "4. Median of Two Sorted Arrays",
    "difficulty": "HARD",
    "diffClass": "badge-hard",
    "category": "Binary Search",
    "acceptance": "40.6%",
    "desc": "<p>Given two sorted arrays <code>nums1</code> and <code>nums2</code> of size <code>m</code> and <code>n</code> respectively, return <strong>the median</strong> of the two sorted arrays.</p>\n             <p>The overall run time complexity should be <code>O(log (m+n))</code>.</p>",
    "examples": "<div class=\"example-box\">\n                  <div class=\"ex-title\">Example 1:</div>\n                  <pre><code>Input: nums1 = [1,3], nums2 = [2]\nOutput: 2.00000\nExplanation: merged array = [1,2,3] and median is 2.</code></pre>\n                 </div>\n                 <div class=\"example-box\">\n                  <div class=\"ex-title\">Example 2:</div>\n                  <pre><code>Input: nums1 = [1,2], nums2 = [3,4]\nOutput: 2.50000\nExplanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.</code></pre>\n                 </div>",
    "constraints": [
      "nums1.length == m",
      "nums2.length == n",
      "0 <= m <= 1000, 0 <= n <= 1000",
      "1 <= m + n <= 2000"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "nums1 = [1, 3], nums2 = [2]",
        "expected": "2.00000"
      },
      {
        "title": "Test 2",
        "input": "nums1 = [1, 2], nums2 = [3, 4]",
        "expected": "2.50000"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def findMedianSortedArrays(self, nums1: list[int], nums2: list[int]) -> float:\n        \n",
      "cpp": "class Solution {\npublic:\n    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar findMedianSortedArrays = function(nums1, nums2) {\n    \n};\n",
      "c": "int cmp(const void* a, const void* b) {\n    \n}\n"
    }
  },
  {
    "id": 5,
    "slug": "longest-palindromic-substring",
    "title": "5. Longest Palindromic Substring",
    "difficulty": "MEDIUM",
    "diffClass": "badge-med",
    "category": "Two Pointers",
    "acceptance": "33.9%",
    "desc": "<p>Given a string <code>s</code>, return <em>the longest palindromic substring</em> in <code>s</code>.</p>",
    "examples": "<div class=\"example-box\">\n                  <div class=\"ex-title\">Example 1:</div>\n                  <pre><code>Input: s = \"babad\"\nOutput: \"bab\"\nExplanation: \"aba\" is also a valid answer.</code></pre>\n                 </div>\n                 <div class=\"example-box\">\n                  <div class=\"ex-title\">Example 2:</div>\n                  <pre><code>Input: s = \"cbbd\"\nOutput: \"bb\"</code></pre>\n                 </div>",
    "constraints": [
      "1 <= s.length <= 1000",
      "s consist of only digits and English letters."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "s = \"babad\"",
        "expected": "\"bab\""
      },
      {
        "title": "Test 2",
        "input": "s = \"cbbd\"",
        "expected": "\"bb\""
      }
    ],
    "templates": {
      "python": "class Solution:\n    def longestPalindrome(self, s: str) -> str:\n        \n",
      "cpp": "class Solution {\npublic:\n    string longestPalindrome(string s) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public String longestPalindrome(String s) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar longestPalindrome = function(s) {\n    \n};\n",
      "c": "char* longestPalindrome(char* s) {\n    \n}\n"
    }
  },
  {
    "id": 9,
    "slug": "palindrome-number",
    "title": "9. Palindrome Number",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Math",
    "acceptance": "56.1%",
    "desc": "<p>Given an integer <code>x</code>, return <code>true</code> <em>if <code>x</code> is a <strong>palindrome</strong>, and <code>false</code> otherwise</em>.</p>",
    "examples": "<div class=\"example-box\">\n                  <div class=\"ex-title\">Example 1:</div>\n                  <pre><code>Input: x = 121\nOutput: true\nExplanation: 121 reads as 121 from left to right and from right to left.</code></pre>\n                 </div>\n                 <div class=\"example-box\">\n                  <div class=\"ex-title\">Example 2:</div>\n                  <pre><code>Input: x = -121\nOutput: false\nExplanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.</code></pre>\n                 </div>",
    "constraints": [
      "-2^31 <= x <= 2^31 - 1"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "x = 121",
        "expected": "true"
      },
      {
        "title": "Test 2",
        "input": "x = -121",
        "expected": "false"
      },
      {
        "title": "Test 3",
        "input": "x = 10",
        "expected": "false"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def isPalindrome(self, x: int) -> bool:\n        \n",
      "cpp": "class Solution {\npublic:\n    bool isPalindrome(int x) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public boolean isPalindrome(int x) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar isPalindrome = function(x) {\n    \n};\n",
      "c": "bool isPalindrome(int x) {\n    \n}\n"
    }
  },
  {
    "id": 10,
    "slug": "regular-expression-matching",
    "title": "10. Regular Expression Matching",
    "difficulty": "HARD",
    "diffClass": "badge-hard",
    "category": "Dynamic Programming",
    "acceptance": "28.4%",
    "desc": "<p>Given an input string <code>s</code> and a pattern <code>p</code>, implement regular expression matching with support for <code>'.'</code> and <code>'*'</code> where:</p><ul><li><code>'.'</code> Matches any single character.</li><li><code>'*'</code> Matches zero or more of the preceding element.</li></ul><p>The matching should cover the <strong>entire</strong> input string (not partial).</p>",
    "examples": "<div class=\"example-box\">\n                  <div class=\"ex-title\">Example 1:</div>\n                  <pre><code>Input: s = \"aa\", p = \"a\"\nOutput: false\nExplanation: \"a\" does not match the entire string \"aa\".</code></pre>\n                 </div>\n                 <div class=\"example-box\">\n                  <div class=\"ex-title\">Example 2:</div>\n                  <pre><code>Input: s = \"aa\", p = \"a*\"\nOutput: true\nExplanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes \"aa\".</code></pre>\n                 </div>\n                 <div class=\"example-box\">\n                  <div class=\"ex-title\">Example 3:</div>\n                  <pre><code>Input: s = \"ab\", p = \".*\"\nOutput: true\nExplanation: \".*\" means \"zero or more (*) of any character (.)\".</code></pre>\n                 </div>",
    "constraints": [
      "1 <= s.length <= 20",
      "1 <= p.length <= 20",
      "s contains only lowercase English letters.",
      "p contains only lowercase English letters, '.', and '*'.",
      "It is guaranteed for each appearance of the character '*', there will be a previous valid character to match."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "s = \"aa\", p = \"a\"",
        "expected": "false"
      },
      {
        "title": "Test 2",
        "input": "s = \"aa\", p = \"a*\"",
        "expected": "true"
      },
      {
        "title": "Test 3",
        "input": "s = \"ab\", p = \".*\"",
        "expected": "true"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def isMatch(self, s: str, p: str) -> bool:\n        \n",
      "cpp": "class Solution {\npublic:\n    bool isMatch(string s, string p) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public boolean isMatch(String s, String p) {\n        \n    }\n}\n",
      "javascript": "/**\n * @param {string} s\n * @param {string} p\n * @return {boolean}\n */\nvar isMatch = function(s, p) {\n    \n};\n",
      "c": "bool isMatch(char* s, char* p) {\n    \n}\n"
    }
  },
  {
    "id": 11,
    "slug": "container-with-most-water",
    "title": "11. Container With Most Water",
    "difficulty": "MEDIUM",
    "diffClass": "badge-med",
    "category": "Two Pointers",
    "acceptance": "55.3%",
    "desc": "<p>You are given an integer array <code>height</code> of length <code>n</code>. There are <code>n</code> vertical lines drawn such that the two endpoints of the <code>i<sup>th</sup></code> line are <code>(i, 0)</code> and <code>(i, height[i])</code>.</p>\n             <p>Find two lines that together with the x-axis form a container, such that the container contains the most water. Return <em>the maximum amount of water a container can store</em>.</p>",
    "examples": "<div class=\"example-box\">\n                  <div class=\"ex-title\">Example 1:</div>\n                  <pre><code>Input: height = [1,8,6,2,5,4,8,3,7]\nOutput: 49\nExplanation: The max area between index 1 and 8 is min(8, 7) * 7 = 49.</code></pre>\n                 </div>",
    "constraints": [
      "n == height.length",
      "2 <= n <= 10^5",
      "0 <= height[i] <= 10^4"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "height = [1,8,6,2,5,4,8,3,7]",
        "expected": "49"
      },
      {
        "title": "Test 2",
        "input": "height = [1,1]",
        "expected": "1"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def maxArea(self, height: list[int]) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int maxArea(vector<int>& height) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int maxArea(int[] height) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar maxArea = function(height) {\n    \n};\n",
      "c": "int maxArea(int* height, int heightSize) {\n    \n}\n"
    }
  },
  {
    "id": 15,
    "slug": "3sum",
    "title": "15. 3Sum",
    "difficulty": "MEDIUM",
    "diffClass": "badge-med",
    "category": "Two Pointers",
    "acceptance": "34.7%",
    "desc": "<p>Given an integer array <code>nums</code>, return all the triplets <code>[nums[i], nums[j], nums[k]]</code> such that <code>i != j</code>, <code>i != k</code>, and <code>j != k</code>, and <code>nums[i] + nums[j] + nums[k] == 0</code>.</p>\n             <p>Notice that the solution set must not contain duplicate triplets.</p>",
    "examples": "<div class=\"example-box\">\n                  <div class=\"ex-title\">Example 1:</div>\n                  <pre><code>Input: nums = [-1,0,1,2,-1,-4]\nOutput: [[-1,-1,2],[-1,0,1]]</code></pre>\n                 </div>",
    "constraints": [
      "3 <= nums.length <= 3000",
      "-10^5 <= nums[i] <= 10^5"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "nums = [-1,0,1,2,-1,-4]",
        "expected": "[[-1,-1,2],[-1,0,1]]"
      },
      {
        "title": "Test 2",
        "input": "nums = [0,1,1]",
        "expected": "[]"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def threeSum(self, nums: list[int]) -> list[list[int]]:\n        \n",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> threeSum(vector<int>& nums) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar threeSum = function(nums) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid 3sum() {\n    \n}\n"
    }
  },
  {
    "id": 20,
    "slug": "valid-parentheses",
    "title": "20. Valid Parentheses",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Stack",
    "acceptance": "40.8%",
    "desc": "<p>Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.</p>\n             <p>An input string is valid if open brackets must be closed by the same type of brackets and in the correct order.</p>",
    "examples": "<div class=\"example-box\">\n                  <div class=\"ex-title\">Example 1:</div>\n                  <pre><code>Input: s = \"()\"\nOutput: true</code></pre>\n                 </div>\n                 <div class=\"example-box\">\n                  <div class=\"ex-title\">Example 2:</div>\n                  <pre><code>Input: s = \"()[]{}\"\nOutput: true</code></pre>\n                 </div>\n                 <div class=\"example-box\">\n                  <div class=\"ex-title\">Example 3:</div>\n                  <pre><code>Input: s = \"(]\"\nOutput: false</code></pre>\n                 </div>",
    "constraints": [
      "1 <= s.length <= 10^4",
      "s consists of parentheses only \"()[]{}\""
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "s = \"()[]{}\"",
        "expected": "true"
      },
      {
        "title": "Test 2",
        "input": "s = \"(]\"",
        "expected": "false"
      },
      {
        "title": "Test 3",
        "input": "s = \"{[]}\"",
        "expected": "true"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def isValid(self, s: str) -> bool:\n        \n",
      "cpp": "class Solution {\npublic:\n    bool isValid(string s) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public boolean isValid(String s) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar isValid = function(s) {\n    \n};\n",
      "c": "bool isValid(char* s) {\n    \n}\n"
    }
  },
  {
    "id": 21,
    "slug": "merge-two-sorted-lists",
    "title": "21. Merge Two Sorted Lists",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Linked List",
    "acceptance": "63.8%",
    "desc": "<p>You are given the heads of two sorted linked lists <code>list1</code> and <code>list2</code>.</p>\n             <p>Merge the two lists into one <strong>sorted</strong> list. The list should be made by splicing together the nodes of the first two lists. Return <em>the head of the merged linked list</em>.</p>",
    "examples": "<div class=\"example-box\">\n                  <div class=\"ex-title\">Example 1:</div>\n                  <pre><code>Input: list1 = [1,2,4], list2 = [1,3,4]\nOutput: [1,1,2,3,4,4]</code></pre>\n                 </div>",
    "constraints": [
      "The number of nodes in both lists is in the range [0, 50].",
      "-100 <= Node.val <= 100",
      "Both list1 and list2 are sorted in non-decreasing order."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "list1 = [1,2,4], list2 = [1,3,4]",
        "expected": "[1,1,2,3,4,4]"
      },
      {
        "title": "Test 2",
        "input": "list1 = [], list2 = []",
        "expected": "[]"
      }
    ],
    "templates": {
      "python": "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\nclass Solution:\n    def mergeTwoLists(self, list1: ListNode, list2: ListNode) -> ListNode:\n        \n",
      "cpp": "/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode() : val(0), next(nullptr) {}\n *     ListNode(int x) : val(x), next(nullptr) {}\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\n * };\n */\nclass Solution {\npublic:\n    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {\n        \n    }\n};\n",
      "java": "/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {\n        \n    }\n}\n",
      "javascript": "/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @return {any}\n */\nvar mergeTwoLists = function(list1, list2) {\n    \n};\n",
      "c": "/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     struct ListNode *next;\n * };\n */\n/* Return type depends on problem specification */\nvoid mergeTwoSortedLists() {\n    \n}\n"
    }
  },
  {
    "id": 22,
    "slug": "generate-parentheses",
    "title": "22. Generate Parentheses",
    "difficulty": "MEDIUM",
    "diffClass": "badge-med",
    "category": "Backtracking",
    "acceptance": "74.2%",
    "desc": "<p>Given <code>n</code> pairs of parentheses, write a function to <em>generate all combinations of well-formed parentheses</em>.</p>",
    "examples": "<div class=\"example-box\">\n                  <div class=\"ex-title\">Example 1:</div>\n                  <pre><code>Input: n = 3\nOutput: [\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]</code></pre>\n                 </div>\n                 <div class=\"example-box\">\n                  <div class=\"ex-title\">Example 2:</div>\n                  <pre><code>Input: n = 1\nOutput: [\"()\"]</code></pre>\n                 </div>",
    "constraints": [
      "1 <= n <= 8"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "n = 3",
        "expected": "[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]"
      },
      {
        "title": "Test 2",
        "input": "n = 1",
        "expected": "[\"()\"]"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def generateParenthesis(self, n: int) -> list[str]:\n        \n",
      "cpp": "class Solution {\npublic:\n    vector<string> generateParenthesis(int n) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public List<String> generateParenthesis(int n) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar generateParenthesis = function(n) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid generateParentheses() {\n    \n}\n"
    }
  },
  {
    "id": 33,
    "slug": "search-in-rotated-sorted-array",
    "title": "33. Search in Rotated Sorted Array",
    "difficulty": "MEDIUM",
    "diffClass": "badge-med",
    "category": "Binary Search",
    "acceptance": "40.2%",
    "desc": "<p>There is an integer array <code>nums</code> sorted in ascending order (with <strong>distinct</strong> values), rotated at some pivot unknown to you.</p>\n             <p>Given the array <code>nums</code> after the possible rotation and an integer <code>target</code>, return <em>the index of <code>target</code> if it is in <code>nums</code>, or <code>-1</code> if it is not</em>.</p>\n             <p>You must write an algorithm with <code>O(log n)</code> runtime complexity.</p>",
    "examples": "<div class=\"example-box\">\n                  <div class=\"ex-title\">Example 1:</div>\n                  <pre><code>Input: nums = [4,5,6,7,0,1,2], target = 0\nOutput: 4</code></pre>\n                 </div>\n                 <div class=\"example-box\">\n                  <div class=\"ex-title\">Example 2:</div>\n                  <pre><code>Input: nums = [4,5,6,7,0,1,2], target = 3\nOutput: -1</code></pre>\n                 </div>",
    "constraints": [
      "1 <= nums.length <= 5000",
      "-10^4 <= nums[i] <= 10^4",
      "All values of nums are unique.",
      "-10^4 <= target <= 10^4"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "nums = [4,5,6,7,0,1,2], target = 0",
        "expected": "4"
      },
      {
        "title": "Test 2",
        "input": "nums = [4,5,6,7,0,1,2], target = 3",
        "expected": "-1"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def search(self, nums: list[int], target: int) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int search(int[] nums, int target) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar search = function(nums, target) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid searchInRotatedSortedArray() {\n    \n}\n"
    }
  },
  {
    "id": 42,
    "slug": "trapping-rain-water",
    "title": "42. Trapping Rain Water",
    "difficulty": "HARD",
    "diffClass": "badge-hard",
    "category": "Two Pointers",
    "acceptance": "61.4%",
    "desc": "<p>Given <code>n</code> non-negative integers representing an elevation map where the width of each bar is <code>1</code>, compute how much water it can trap after raining.</p>",
    "examples": "<div class=\"example-box\">\n                  <div class=\"ex-title\">Example 1:</div>\n                  <pre><code>Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]\nOutput: 6\nExplanation: The elevation map traps 6 units of rain water.</code></pre>\n                 </div>",
    "constraints": [
      "n == height.length",
      "1 <= n <= 2 * 10^4",
      "0 <= height[i] <= 10^5"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        "expected": "6"
      },
      {
        "title": "Test 2",
        "input": "height = [4,2,0,3,2,5]",
        "expected": "9"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def trap(self, height: list[int]) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int trap(vector<int>& height) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int trap(int[] height) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar trap = function(height) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid trappingRainWater() {\n    \n}\n"
    }
  },
  {
    "id": 49,
    "slug": "group-anagrams",
    "title": "49. Group Anagrams",
    "difficulty": "MEDIUM",
    "diffClass": "badge-med",
    "category": "Arrays & Hashing",
    "acceptance": "67.8%",
    "desc": "<p>Given an array of strings <code>strs</code>, group <strong>the anagrams</strong> together. You can return the answer in <strong>any order</strong>.</p>",
    "examples": "<div class=\"example-box\">\n                  <div class=\"ex-title\">Example 1:</div>\n                  <pre><code>Input: strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]\nOutput: [[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]</code></pre>\n                 </div>",
    "constraints": [
      "1 <= strs.length <= 10^4",
      "0 <= strs[i].length <= 100",
      "strs[i] consists of lowercase English letters."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
        "expected": "[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]"
      },
      {
        "title": "Test 2",
        "input": "strs = [\"\"]",
        "expected": "[[\"\"]]"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:\n        \n",
      "cpp": "class Solution {\npublic:\n    vector<vector<string>> groupAnagrams(vector<string>& strs) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public List<List<String>> groupAnagrams(String[] strs) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar groupAnagrams = function(strs) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid groupAnagrams() {\n    \n}\n"
    }
  },
  {
    "id": 53,
    "slug": "maximum-subarray",
    "title": "53. Maximum Subarray",
    "difficulty": "MEDIUM",
    "diffClass": "badge-med",
    "category": "Dynamic Programming",
    "acceptance": "51.1%",
    "desc": "<p>Given an integer array <code>nums</code>, find the subarray with the largest sum, and return <em>its sum</em>.</p>",
    "examples": "<div class=\"example-box\">\n                  <div class=\"ex-title\">Example 1:</div>\n                  <pre><code>Input: nums = [-2,1,-3,4,-1,2,1,-5,4]\nOutput: 6\nExplanation: The subarray [4,-1,2,1] has the largest sum 6.</code></pre>\n                 </div>\n                 <div class=\"example-box\">\n                  <div class=\"ex-title\">Example 2:</div>\n                  <pre><code>Input: nums = [1]\nOutput: 1</code></pre>\n                 </div>",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        "expected": "6"
      },
      {
        "title": "Test 2",
        "input": "nums = [5,4,-1,7,8]",
        "expected": "23"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def maxSubArray(self, nums: list[int]) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int maxSubArray(vector<int>& nums) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int maxSubArray(int[] nums) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar maxSubArray = function(nums) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid maximumSubarray() {\n    \n}\n"
    }
  },
  {
    "id": 70,
    "slug": "climbing-stairs",
    "title": "70. Climbing Stairs",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Dynamic Programming",
    "acceptance": "53.0%",
    "desc": "<p>You are climbing a staircase. It takes <code>n</code> steps to reach the top.</p>\n             <p>Each time you can either climb <code>1</code> or <code>2</code> steps. In how many distinct ways can you climb to the top?</p>",
    "examples": "<div class=\"example-box\">\n                  <div class=\"ex-title\">Example 1:</div>\n                  <pre><code>Input: n = 2\nOutput: 2\nExplanation: 1 step + 1 step, or 2 steps.</code></pre>\n                 </div>\n                 <div class=\"example-box\">\n                  <div class=\"ex-title\">Example 2:</div>\n                  <pre><code>Input: n = 3\nOutput: 3</code></pre>\n                 </div>",
    "constraints": [
      "1 <= n <= 45"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "n = 2",
        "expected": "2"
      },
      {
        "title": "Test 2",
        "input": "n = 3",
        "expected": "3"
      },
      {
        "title": "Test 3",
        "input": "n = 5",
        "expected": "8"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def climbStairs(self, n: int) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int climbStairs(int n) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int climbStairs(int n) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar climbStairs = function(n) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid climbingStairs() {\n    \n}\n"
    }
  },
  {
    "id": 121,
    "slug": "best-time-to-buy-and-sell-stock",
    "title": "121. Best Time to Buy and Sell Stock",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Sliding Window",
    "acceptance": "53.9%",
    "desc": "<p>You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.</p>\n             <p>You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.</p>\n             <p>Return <em>the maximum profit you can achieve from this transaction</em>. If you cannot achieve any profit, return <code>0</code>.</p>",
    "examples": "<div class=\"example-box\">\n                  <div class=\"ex-title\">Example 1:</div>\n                  <pre><code>Input: prices = [7,1,5,3,6,4]\nOutput: 5\nExplanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5.</code></pre>\n                 </div>\n                 <div class=\"example-box\">\n                  <div class=\"ex-title\">Example 2:</div>\n                  <pre><code>Input: prices = [7,6,4,3,1]\nOutput: 0\nExplanation: In this case, no transactions are done and max profit = 0.</code></pre>\n                 </div>",
    "constraints": [
      "1 <= prices.length <= 10^5",
      "0 <= prices[i] <= 10^4"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "prices = [7,1,5,3,6,4]",
        "expected": "5"
      },
      {
        "title": "Test 2",
        "input": "prices = [7,6,4,3,1]",
        "expected": "0"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def maxProfit(self, prices: list[int]) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int maxProfit(int[] prices) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar maxProfit = function(prices) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid bestTimeToBuyAndSellStock() {\n    \n}\n"
    }
  },
  {
    "id": 125,
    "slug": "valid-palindrome",
    "title": "125. Valid Palindrome",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Two Pointers",
    "acceptance": "47.2%",
    "desc": "<p>A phrase is a <strong>palindrome</strong> if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.</p>\n             <p>Given a string <code>s</code>, return <code>true</code> <em>if it is a palindrome, or <code>false</code> otherwise</em>.</p>",
    "examples": "<div class=\"example-box\">\n                  <div class=\"ex-title\">Example 1:</div>\n                  <pre><code>Input: s = \"A man, a plan, a canal: Panama\"\nOutput: true\nExplanation: \"amanaplanacanalpanama\" is a palindrome.</code></pre>\n                 </div>\n                 <div class=\"example-box\">\n                  <div class=\"ex-title\">Example 2:</div>\n                  <pre><code>Input: s = \"race a car\"\nOutput: false</code></pre>\n                 </div>",
    "constraints": [
      "1 <= s.length <= 2 * 10^5",
      "s consists only of printable ASCII characters."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "s = \"A man, a plan, a canal: Panama\"",
        "expected": "true"
      },
      {
        "title": "Test 2",
        "input": "s = \"race a car\"",
        "expected": "false"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def isPalindrome(self, s: str) -> bool:\n        \n",
      "cpp": "class Solution {\npublic:\n    bool isPalindrome(string s) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public boolean isPalindrome(String s) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar isPalindrome = function(s) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid validPalindrome() {\n    \n}\n"
    }
  },
  {
    "id": 136,
    "slug": "single-number",
    "title": "136. Single Number",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Bit Manipulation",
    "acceptance": "73.5%",
    "desc": "<p>Given a <strong>non-empty</strong> array of integers <code>nums</code>, every element appears <em>twice</em> except for one. Find that single one.</p>\n             <p>You must implement a solution with a linear runtime complexity and use only constant extra space.</p>",
    "examples": "<div class=\"example-box\">\n                  <div class=\"ex-title\">Example 1:</div>\n                  <pre><code>Input: nums = [2,2,1]\nOutput: 1</code></pre>\n                 </div>\n                 <div class=\"example-box\">\n                  <div class=\"ex-title\">Example 2:</div>\n                  <pre><code>Input: nums = [4,1,2,1,2]\nOutput: 4</code></pre>\n                 </div>",
    "constraints": [
      "1 <= nums.length <= 3 * 10^4",
      "-3 * 10^4 <= nums[i] <= 3 * 10^4",
      "Each element appears twice except one."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "nums = [2,2,1]",
        "expected": "1"
      },
      {
        "title": "Test 2",
        "input": "nums = [4,1,2,1,2]",
        "expected": "4"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def singleNumber(self, nums: list[int]) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int singleNumber(vector<int>& nums) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int singleNumber(int[] nums) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar singleNumber = function(nums) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid singleNumber() {\n    \n}\n"
    }
  },
  {
    "id": 141,
    "slug": "linked-list-cycle",
    "title": "141. Linked List Cycle",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Linked List",
    "acceptance": "50.1%",
    "desc": "<p>Given <code>head</code>, the head of a linked list, determine if the linked list has a cycle in it.</p>\n             <p>Return <code>true</code> <em>if there is a cycle in the linked list</em>. Otherwise, return <code>false</code>.</p>",
    "examples": "<div class=\"example-box\">\n                  <div class=\"ex-title\">Example 1:</div>\n                  <pre><code>Input: head = [3,2,0,-4], pos = 1\nOutput: true\nExplanation: There is a cycle where tail connects to the 1st node.</code></pre>\n                 </div>",
    "constraints": [
      "The number of the nodes in the list is in the range [0, 10^4].",
      "-10^5 <= Node.val <= 10^5"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "head = [3,2,0,-4], pos = 1",
        "expected": "true"
      },
      {
        "title": "Test 2",
        "input": "head = [1], pos = -1",
        "expected": "false"
      }
    ],
    "templates": {
      "python": "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\nclass Solution:\n    def hasCycle(self, head: ListNode) -> bool:\n        \n",
      "cpp": "/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode() : val(0), next(nullptr) {}\n *     ListNode(int x) : val(x), next(nullptr) {}\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\n * };\n */\nclass Solution {\npublic:\n    bool hasCycle(ListNode *head) {\n        \n    }\n};\n",
      "java": "/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public boolean hasCycle(ListNode head) {\n        \n    }\n}\n",
      "javascript": "/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @return {any}\n */\nvar hasCycle = function(head) {\n    \n};\n",
      "c": "/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     struct ListNode *next;\n * };\n */\n/* Return type depends on problem specification */\nvoid linkedListCycle() {\n    \n}\n"
    }
  },
  {
    "id": 200,
    "slug": "number-of-islands",
    "title": "200. Number of Islands",
    "difficulty": "MEDIUM",
    "diffClass": "badge-med",
    "category": "Graphs",
    "acceptance": "59.6%",
    "desc": "<p>Given an <code>m x n</code> 2D binary grid <code>grid</code> which represents a map of <code>'1'</code>s (land) and <code>'0'</code>s (water), return <em>the number of islands</em>.</p>\n             <p>An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.</p>",
    "examples": "<div class=\"example-box\">\n                  <div class=\"ex-title\">Example 1:</div>\n                  <pre><code>Input: grid = [\n  [\"1\",\"1\",\"1\",\"1\",\"0\"],\n  [\"1\",\"1\",\"0\",\"1\",\"0\"],\n  [\"1\",\"1\",\"0\",\"0\",\"0\"],\n  [\"0\",\"0\",\"0\",\"0\",\"0\"]\n]\nOutput: 1</code></pre>\n                 </div>",
    "constraints": [
      "m == grid.length",
      "n == grid[i].length",
      "1 <= m, n <= 300",
      "grid[i][j] is \"0\" or \"1\""
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "grid = [[\"1\",\"1\",\"1\"],[\"0\",\"1\",\"0\"],[\"1\",\"1\",\"1\"]]",
        "expected": "1"
      },
      {
        "title": "Test 2",
        "input": "grid = [[\"1\",\"0\"],[\"0\",\"1\"]]",
        "expected": "2"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def numIslands(self, grid: list[list[str]]) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int numIslands(vector<vector<char>>& grid) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int numIslands(char[][] grid) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar numIslands = function(grid) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid numberOfIslands() {\n    \n}\n"
    }
  },
  {
    "id": 206,
    "slug": "reverse-linked-list",
    "title": "206. Reverse Linked List",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Linked List",
    "acceptance": "76.4%",
    "desc": "<p>Given the <code>head</code> of a singly linked list, reverse the list, and return <em>the reversed list</em>.</p>",
    "examples": "<div class=\"example-box\">\n                  <div class=\"ex-title\">Example 1:</div>\n                  <pre><code>Input: head = [1,2,3,4,5]\nOutput: [5,4,3,2,1]</code></pre>\n                 </div>\n                 <div class=\"example-box\">\n                  <div class=\"ex-title\">Example 2:</div>\n                  <pre><code>Input: head = [1,2]\nOutput: [2,1]</code></pre>\n                 </div>",
    "constraints": [
      "The number of nodes in the list is the range [0, 5000].",
      "-5000 <= Node.val <= 5000"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "head = [1,2,3,4,5]",
        "expected": "[5,4,3,2,1]"
      },
      {
        "title": "Test 2",
        "input": "head = [1,2]",
        "expected": "[2,1]"
      }
    ],
    "templates": {
      "python": "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\nclass Solution:\n    def reverseList(self, head: ListNode) -> ListNode:\n        \n",
      "cpp": "/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode() : val(0), next(nullptr) {}\n *     ListNode(int x) : val(x), next(nullptr) {}\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\n * };\n */\nclass Solution {\npublic:\n    ListNode* reverseList(ListNode* head) {\n        \n    }\n};\n",
      "java": "/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public ListNode reverseList(ListNode head) {\n        \n    }\n}\n",
      "javascript": "/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @return {any}\n */\nvar reverseList = function(head) {\n    \n};\n",
      "c": "/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     struct ListNode *next;\n * };\n */\n/* Return type depends on problem specification */\nvoid reverseLinkedList() {\n    \n}\n"
    }
  },
  {
    "id": 217,
    "slug": "contains-duplicate",
    "title": "217. Contains Duplicate",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Arrays & Hashing",
    "acceptance": "62.0%",
    "desc": "<p>Given an integer array <code>nums</code>, return <code>true</code> if any value appears <strong>at least twice</strong> in the array, and return <code>false</code> if every element is distinct.</p>",
    "examples": "<div class=\"example-box\">\n                  <div class=\"ex-title\">Example 1:</div>\n                  <pre><code>Input: nums = [1,2,3,1]\nOutput: true</code></pre>\n                 </div>\n                 <div class=\"example-box\">\n                  <div class=\"ex-title\">Example 2:</div>\n                  <pre><code>Input: nums = [1,2,3,4]\nOutput: false</code></pre>\n                 </div>",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "-10^9 <= nums[i] <= 10^9"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "nums = [1,2,3,1]",
        "expected": "true"
      },
      {
        "title": "Test 2",
        "input": "nums = [1,2,3,4]",
        "expected": "false"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def containsDuplicate(self, nums: list[int]) -> bool:\n        \n",
      "cpp": "class Solution {\npublic:\n    bool containsDuplicate(vector<int>& nums) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public boolean containsDuplicate(int[] nums) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar containsDuplicate = function(nums) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid containsDuplicate() {\n    \n}\n"
    }
  },
  {
    "id": 226,
    "slug": "invert-binary-tree",
    "title": "226. Invert Binary Tree",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Trees",
    "acceptance": "77.8%",
    "desc": "<p>Given the <code>root</code> of a binary tree, invert the tree, and return <em>its root</em>.</p>",
    "examples": "<div class=\"example-box\">\n                  <div class=\"ex-title\">Example 1:</div>\n                  <pre><code>Input: root = [4,2,7,1,3,6,9]\nOutput: [4,7,2,9,6,3,1]</code></pre>\n                 </div>",
    "constraints": [
      "The number of nodes in the tree is in the range [0, 100].",
      "-100 <= Node.val <= 100"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "root = [4,2,7,1,3,6,9]",
        "expected": "[4,7,2,9,6,3,1]"
      },
      {
        "title": "Test 2",
        "input": "root = [2,1,3]",
        "expected": "[2,3,1]"
      }
    ],
    "templates": {
      "python": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def invertTree(self, root: TreeNode) -> TreeNode:\n        \n",
      "cpp": "/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    TreeNode* invertTree(TreeNode* root) {\n        \n    }\n};\n",
      "java": "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public TreeNode invertTree(TreeNode root) {\n        \n    }\n}\n",
      "javascript": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @return {any}\n */\nvar invertTree = function(root) {\n    \n};\n",
      "c": "/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     struct TreeNode *left;\n *     struct TreeNode *right;\n * };\n */\n/* Return type depends on problem specification */\nvoid invertBinaryTree() {\n    \n}\n"
    }
  },
  {
    "id": 238,
    "slug": "product-of-array-except-self",
    "title": "238. Product of Array Except Self",
    "difficulty": "MEDIUM",
    "diffClass": "badge-med",
    "category": "Arrays & Hashing",
    "acceptance": "66.2%",
    "desc": "<p>Given an integer array <code>nums</code>, return <em>an array <code>answer</code> such that <code>answer[i]</code> is equal to the product of all the elements of <code>nums</code> except <code>nums[i]</code></em>.</p>\n             <p>The product of any prefix or suffix of <code>nums</code> is guaranteed to fit in a 32-bit integer.</p>\n             <p>You must write an algorithm that runs in <code>O(n)</code> time and without using the division operation.</p>",
    "examples": "<div class=\"example-box\">\n                  <div class=\"ex-title\">Example 1:</div>\n                  <pre><code>Input: nums = [1,2,3,4]\nOutput: [24,12,8,6]</code></pre>\n                 </div>",
    "constraints": [
      "2 <= nums.length <= 10^5",
      "-30 <= nums[i] <= 30"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "nums = [1,2,3,4]",
        "expected": "[24,12,8,6]"
      },
      {
        "title": "Test 2",
        "input": "nums = [-1,1,0,-3,3]",
        "expected": "[0,0,9,0,0]"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def productExceptSelf(self, nums: list[int]) -> list[int]:\n        \n",
      "cpp": "class Solution {\npublic:\n    vector<int> productExceptSelf(vector<int>& nums) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int[] productExceptSelf(int[] nums) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar productExceptSelf = function(nums) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid productOfArrayExceptSelf() {\n    \n}\n"
    }
  },
  {
    "id": 242,
    "slug": "valid-anagram",
    "title": "242. Valid Anagram",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Arrays & Hashing",
    "acceptance": "64.5%",
    "desc": "<p>Given two strings <code>s</code> and <code>t</code>, return <code>true</code> if <code>t</code> is an anagram of <code>s</code>, and <code>false</code> otherwise.</p>\n             <p>An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.</p>",
    "examples": "<div class=\"example-box\">\n                  <div class=\"ex-title\">Example 1:</div>\n                  <pre><code>Input: s = \"anagram\", t = \"nagaram\"\nOutput: true</code></pre>\n                 </div>\n                 <div class=\"example-box\">\n                  <div class=\"ex-title\">Example 2:</div>\n                  <pre><code>Input: s = \"rat\", t = \"car\"\nOutput: false</code></pre>\n                 </div>",
    "constraints": [
      "1 <= s.length, t.length <= 5 * 10^4",
      "s and t consist of lowercase English letters."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "s = \"anagram\", t = \"nagaram\"",
        "expected": "true"
      },
      {
        "title": "Test 2",
        "input": "s = \"rat\", t = \"car\"",
        "expected": "false"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def isAnagram(self, s: str, t: str) -> bool:\n        \n",
      "cpp": "class Solution {\npublic:\n    bool isAnagram(string s, string t) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public boolean isAnagram(String s, String t) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar isAnagram = function(s, t) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid validAnagram() {\n    \n}\n"
    }
  },
  {
    "id": 300,
    "slug": "longest-increasing-subsequence",
    "title": "300. Longest Increasing Subsequence",
    "difficulty": "MEDIUM",
    "diffClass": "badge-med",
    "category": "Dynamic Programming",
    "acceptance": "54.7%",
    "desc": "<p>Given an integer array <code>nums</code>, return <em>the length of the longest <strong>strictly increasing subsequence</strong></em>.</p>",
    "examples": "<div class=\"example-box\">\n                  <div class=\"ex-title\">Example 1:</div>\n                  <pre><code>Input: nums = [10,9,2,5,3,7,101,18]\nOutput: 4\nExplanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.</code></pre>\n                 </div>",
    "constraints": [
      "1 <= nums.length <= 2500",
      "-10^4 <= nums[i] <= 10^4"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "nums = [10,9,2,5,3,7,101,18]",
        "expected": "4"
      },
      {
        "title": "Test 2",
        "input": "nums = [0,1,0,3,2,3]",
        "expected": "4"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def lengthOfLIS(self, nums: list[int]) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int lengthOfLIS(vector<int>& nums) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int lengthOfLIS(int[] nums) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar lengthOfLIS = function(nums) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid longestIncreasingSubsequence() {\n    \n}\n"
    }
  },
  {
    "id": 322,
    "slug": "coin-change",
    "title": "322. Coin Change",
    "difficulty": "MEDIUM",
    "diffClass": "badge-med",
    "category": "Dynamic Programming",
    "acceptance": "43.9%",
    "desc": "<p>You are given an integer array <code>coins</code> representing coins of different denominations and an integer <code>amount</code> representing a total amount of money.</p>\n             <p>Return <em>the fewest number of coins that you need to make up that amount</em>. If that amount of money cannot be made up by any combination of the coins, return <code>-1</code>.</p>",
    "examples": "<div class=\"example-box\">\n                  <div class=\"ex-title\">Example 1:</div>\n                  <pre><code>Input: coins = [1,2,5], amount = 11\nOutput: 3\nExplanation: 11 = 5 + 5 + 1</code></pre>\n                 </div>",
    "constraints": [
      "1 <= coins.length <= 12",
      "1 <= coins[i] <= 2^31 - 1",
      "0 <= amount <= 10^4"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "coins = [1,2,5], amount = 11",
        "expected": "3"
      },
      {
        "title": "Test 2",
        "input": "coins = [2], amount = 3",
        "expected": "-1"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def coinChange(self, coins: list[int], amount: int) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int coinChange(vector<int>& coins, int amount) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int coinChange(int[] coins, int amount) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar coinChange = function(coins, amount) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid coinChange() {\n    \n}\n"
    }
  },
  {
    "id": 704,
    "slug": "binary-search",
    "title": "704. Binary Search",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Binary Search",
    "acceptance": "58.2%",
    "desc": "<p>Given an array of integers <code>nums</code> which is sorted in ascending order, and an integer <code>target</code>, write a function to search <code>target</code> in <code>nums</code>. If <code>target</code> exists, then return its index. Otherwise, return <code>-1</code>.</p>\n             <p>You must write an algorithm with <code>O(log n)</code> runtime complexity.</p>",
    "examples": "<div class=\"example-box\">\n                  <div class=\"ex-title\">Example 1:</div>\n                  <pre><code>Input: nums = [-1,0,3,5,9,12], target = 9\nOutput: 4\nExplanation: 9 exists in nums and its index is 4</code></pre>\n                 </div>\n                 <div class=\"example-box\">\n                  <div class=\"ex-title\">Example 2:</div>\n                  <pre><code>Input: nums = [-1,0,3,5,9,12], target = 2\nOutput: -1\nExplanation: 2 does not exist in nums so return -1</code></pre>\n                 </div>",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "-10^4 < nums[i], target < 10^4",
      "All the integers in nums are unique.",
      "nums is sorted in ascending order."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "nums = [-1,0,3,5,9,12], target = 9",
        "expected": "4"
      },
      {
        "title": "Test 2",
        "input": "nums = [-1,0,3,5,9,12], target = 2",
        "expected": "-1"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def search(self, nums: list[int], target: int) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int search(int[] nums, int target) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar search = function(nums, target) {\n    \n};\n",
      "c": "int search(int* nums, int numsSize, int target) {\n    \n}\n"
    }
  },
  {
    "id": 13,
    "slug": "roman-to-integer",
    "title": "13. Roman to Integer",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Math",
    "acceptance": "61.5%",
    "desc": "<p>Roman numerals are represented by seven different symbols: <code>I</code>, <code>V</code>, <code>X</code>, <code>L</code>, <code>C</code>, <code>D</code> and <code>M</code>.</p>\n             <p>Given a roman numeral, convert it to an integer.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: s = \"III\"\nOutput: 3</code></pre></div>\n                 <div class=\"example-box\"><div class=\"ex-title\">Example 2:</div><pre><code>Input: s = \"LVIII\"\nOutput: 58</code></pre></div>\n                 <div class=\"example-box\"><div class=\"ex-title\">Example 3:</div><pre><code>Input: s = \"MCMXCIV\"\nOutput: 1994</code></pre></div>",
    "constraints": [
      "1 <= s.length <= 15",
      "s contains only valid roman numeral characters."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "s = \"III\"",
        "expected": "3"
      },
      {
        "title": "Test 2",
        "input": "s = \"LVIII\"",
        "expected": "58"
      },
      {
        "title": "Test 3",
        "input": "s = \"MCMXCIV\"",
        "expected": "1994"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def romanToInt(self, s: str) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int romanToInt(string s) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int romanToInt(String s) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar romanToInt = function(s) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid romanToInteger() {\n    \n}\n"
    }
  },
  {
    "id": 14,
    "slug": "longest-common-prefix",
    "title": "14. Longest Common Prefix",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "String",
    "acceptance": "43.2%",
    "desc": "<p>Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string <code>\"\"</code>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: strs = [\"flower\",\"flow\",\"flight\"]\nOutput: \"fl\"</code></pre></div>",
    "constraints": [
      "1 <= strs.length <= 200",
      "strs[i] consists of only lowercase English letters."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "strs = [\"flower\",\"flow\",\"flight\"]",
        "expected": "\"fl\""
      },
      {
        "title": "Test 2",
        "input": "strs = [\"dog\",\"racecar\",\"car\"]",
        "expected": "\"\""
      }
    ],
    "templates": {
      "python": "class Solution:\n    def longestCommonPrefix(self, strs: list[str]) -> str:\n        \n",
      "cpp": "class Solution {\npublic:\n    string longestCommonPrefix(vector<string>& strs) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public String longestCommonPrefix(String[] strs) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar longestCommonPrefix = function(strs) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid longestCommonPrefix() {\n    \n}\n"
    }
  },
  {
    "id": 26,
    "slug": "remove-duplicates-from-sorted-array",
    "title": "26. Remove Duplicates from Sorted Array",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Two Pointers",
    "acceptance": "56.9%",
    "desc": "<p>Given an integer array <code>nums</code> sorted in non-decreasing order, remove duplicates in-place such that each unique element appears only once.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: nums = [1,1,2]\nOutput: 2, nums = [1,2,_]</code></pre></div>",
    "constraints": [
      "1 <= nums.length <= 3 * 10^4",
      "-100 <= nums[i] <= 100"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "nums = [1,1,2]",
        "expected": "2"
      },
      {
        "title": "Test 2",
        "input": "nums = [0,0,1,1,1,2,2,3,3,4]",
        "expected": "5"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def removeDuplicates(self, nums: list[int]) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int removeDuplicates(vector<int>& nums) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int removeDuplicates(int[] nums) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar removeDuplicates = function(nums) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid removeDuplicatesFromSortedArray() {\n    \n}\n"
    }
  },
  {
    "id": 55,
    "slug": "jump-game",
    "title": "55. Jump Game",
    "difficulty": "MEDIUM",
    "diffClass": "badge-med",
    "category": "Greedy",
    "acceptance": "38.8%",
    "desc": "<p>You are given an integer array <code>nums</code>. Positioned at index 0, determine if you can reach the last index.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: nums = [2,3,1,1,4]\nOutput: true</code></pre></div>",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "0 <= nums[i] <= 10^5"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "nums = [2,3,1,1,4]",
        "expected": "true"
      },
      {
        "title": "Test 2",
        "input": "nums = [3,2,1,0,4]",
        "expected": "false"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def canJump(self, nums: list[int]) -> bool:\n        \n",
      "cpp": "class Solution {\npublic:\n    bool canJump(vector<int>& nums) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public boolean canJump(int[] nums) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar canJump = function(nums) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid jumpGame() {\n    \n}\n"
    }
  },
  {
    "id": 56,
    "slug": "merge-intervals",
    "title": "56. Merge Intervals",
    "difficulty": "MEDIUM",
    "diffClass": "badge-med",
    "category": "Intervals",
    "acceptance": "47.5%",
    "desc": "<p>Given an array of <code>intervals</code> where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code>, merge all overlapping intervals.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: intervals = [[1,3],[2,6],[8,10],[15,18]]\nOutput: [[1,6],[8,10],[15,18]]</code></pre></div>",
    "constraints": [
      "1 <= intervals.length <= 10^4",
      "0 <= start_i <= end_i <= 10^4"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        "expected": "[[1,6],[8,10],[15,18]]"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def merge(self, intervals: list[list[int]]) -> list[list[int]]:\n        \n",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> merge(vector<vector<int>>& intervals) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int[][] merge(int[][] intervals) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar merge = function(intervals) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid mergeIntervals() {\n    \n}\n"
    }
  },
  {
    "id": 74,
    "slug": "search-a-2d-matrix",
    "title": "74. Search a 2D Matrix",
    "difficulty": "MEDIUM",
    "diffClass": "badge-med",
    "category": "Binary Search",
    "acceptance": "50.4%",
    "desc": "<p>Given an <code>m x n</code> matrix where rows and columns are sorted, determine if <code>target</code> is present in <code>O(log(m * n))</code>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3\nOutput: true</code></pre></div>",
    "constraints": [
      "1 <= m, n <= 100"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3",
        "expected": "true"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def searchMatrix(self, matrix: list[list[int]], target: int) -> bool:\n        \n",
      "cpp": "class Solution {\npublic:\n    bool searchMatrix(vector<vector<int>>& matrix, int target) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public boolean searchMatrix(int[][] matrix, int target) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar searchMatrix = function(matrix, target) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid searchA-2dMatrix() {\n    \n}\n"
    }
  },
  {
    "id": 78,
    "slug": "subsets",
    "title": "78. Subsets",
    "difficulty": "MEDIUM",
    "diffClass": "badge-med",
    "category": "Backtracking",
    "acceptance": "78.6%",
    "desc": "<p>Given an integer array <code>nums</code> of unique elements, return <em>all possible subsets (the power set)</em>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: nums = [1,2,3]\nOutput: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]</code></pre></div>",
    "constraints": [
      "1 <= nums.length <= 10"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "nums = [1,2,3]",
        "expected": "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def subsets(self, nums: list[int]) -> list[list[int]]:\n        \n",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> subsets(vector<int>& nums) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public List<List<Integer>> subsets(int[] nums) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar subsets = function(nums) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid subsets() {\n    \n}\n"
    }
  },
  {
    "id": 104,
    "slug": "maximum-depth-of-binary-tree",
    "title": "104. Maximum Depth of Binary Tree",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Trees",
    "acceptance": "75.9%",
    "desc": "<p>Given the <code>root</code> of a binary tree, return <em>its maximum depth</em>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: root = [3,9,20,null,null,15,7]\nOutput: 3</code></pre></div>",
    "constraints": [
      "0 <= nodes <= 10^4"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "root = [3,9,20,null,null,15,7]",
        "expected": "3"
      }
    ],
    "templates": {
      "python": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def maxDepth(self, root: TreeNode) -> int:\n        \n",
      "cpp": "/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    int maxDepth(TreeNode* root) {\n        \n    }\n};\n",
      "java": "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public int maxDepth(TreeNode root) {\n        \n    }\n}\n",
      "javascript": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @return {any}\n */\nvar maxDepth = function(root) {\n    \n};\n",
      "c": "/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     struct TreeNode *left;\n *     struct TreeNode *right;\n * };\n */\n/* Return type depends on problem specification */\nvoid maximumDepthOfBinaryTree() {\n    \n}\n"
    }
  },
  {
    "id": 128,
    "slug": "longest-consecutive-sequence",
    "title": "128. Longest Consecutive Sequence",
    "difficulty": "MEDIUM",
    "diffClass": "badge-med",
    "category": "Arrays & Hashing",
    "acceptance": "47.4%",
    "desc": "<p>Given an unsorted array of integers <code>nums</code>, return the length of the longest consecutive elements sequence in <code>O(n)</code> time.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: nums = [100,4,200,1,3,2]\nOutput: 4</code></pre></div>",
    "constraints": [
      "0 <= nums.length <= 10^5"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "nums = [100,4,200,1,3,2]",
        "expected": "4"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def longestConsecutive(self, nums: list[int]) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int longestConsecutive(vector<int>& nums) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int longestConsecutive(int[] nums) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar longestConsecutive = function(nums) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid longestConsecutiveSequence() {\n    \n}\n"
    }
  },
  {
    "id": 155,
    "slug": "min-stack",
    "title": "155. Min Stack",
    "difficulty": "MEDIUM",
    "diffClass": "badge-med",
    "category": "Stack",
    "acceptance": "54.5%",
    "desc": "<p>Design a stack that supports push, pop, top, and retrieving the minimum element in constant <code>O(1)</code> time.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>minStack.push(-2);\nminStack.push(0);\nminStack.push(-3);\nminStack.getMin(); // -3</code></pre></div>",
    "constraints": [
      "Methods always called on non-empty stacks."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "push(-2), push(0), push(-3), getMin()",
        "expected": "-3"
      }
    ],
    "templates": {
      "python": "class MinStack:\n    def __init__(self):\n        pass\n\n    def push(self, val: int) -> None:\n        pass\n\n    def pop(self) -> None:\n        pass\n\n    def top(self) -> int:\n        pass\n\n    def getMin(self) -> int:\n        pass\n",
      "cpp": "class MinStack {\npublic:\n    MinStack() {\n        \n    }\n    \n    void push(int val) {\n        \n    }\n    \n    void pop() {\n        \n    }\n    \n    int top() {\n        \n    }\n    \n    int getMin() {\n        \n    }\n};\n",
      "java": "class MinStack {\n    public MinStack() {\n        \n    }\n    \n    public void push(int val) {\n        \n    }\n    \n    public void pop() {\n        \n    }\n    \n    public int top() {\n        \n    }\n    \n    public int getMin() {\n        \n    }\n}\n",
      "javascript": "var MinStack = function() {\n    \n};\n\nMinStack.prototype.push = function(val) {\n    \n};\n\nMinStack.prototype.pop = function() {\n    \n};\n\nMinStack.prototype.top = function() {\n    \n};\n\nMinStack.prototype.getMin = function() {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid minStack() {\n    \n}\n"
    }
  },
  {
    "id": 198,
    "slug": "house-robber",
    "title": "198. House Robber",
    "difficulty": "MEDIUM",
    "diffClass": "badge-med",
    "category": "Dynamic Programming",
    "acceptance": "51.3%",
    "desc": "<p>Determine the maximum amount of money you can rob tonight without robbing adjacent houses.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: nums = [1,2,3,1]\nOutput: 4</code></pre></div>",
    "constraints": [
      "1 <= nums.length <= 100"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "nums = [1,2,3,1]",
        "expected": "4"
      },
      {
        "title": "Test 2",
        "input": "nums = [2,7,9,3,1]",
        "expected": "12"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def rob(self, nums: list[int]) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int rob(vector<int>& nums) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int rob(int[] nums) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar rob = function(nums) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid houseRobber() {\n    \n}\n"
    }
  },
  {
    "id": 283,
    "slug": "move-zeroes",
    "title": "283. Move Zeroes",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Two Pointers",
    "acceptance": "61.7%",
    "desc": "<p>Given an integer array <code>nums</code>, move all <code>0</code>'s to the end of it while maintaining the relative order of the non-zero elements.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: nums = [0,1,0,3,12]\nOutput: [1,3,12,0,0]</code></pre></div>",
    "constraints": [
      "1 <= nums.length <= 10^4"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "nums = [0,1,0,3,12]",
        "expected": "[1,3,12,0,0]"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def moveZeroes(self, nums: list[int]) -> None:\n        \n",
      "cpp": "class Solution {\npublic:\n    void moveZeroes(vector<int>& nums) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public void moveZeroes(int[] nums) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar moveZeroes = function(nums) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid moveZeroes() {\n    \n}\n"
    }
  },
  {
    "id": 347,
    "slug": "top-k-frequent-elements",
    "title": "347. Top K Frequent Elements",
    "difficulty": "MEDIUM",
    "diffClass": "badge-med",
    "category": "Arrays & Hashing",
    "acceptance": "62.8%",
    "desc": "<p>Given an integer array <code>nums</code> and an integer <code>k</code>, return <em>the <code>k</code> most frequent elements</em> in any order.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: nums = [1,1,1,2,2,3], k = 2\nOutput: [1,2]</code></pre></div>",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "1 <= k <= unique elements"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "nums = [1,1,1,2,2,3], k = 2",
        "expected": "[1,2]"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def topKFrequent(self, nums: list[int], k: int) -> list[int]:\n        \n",
      "cpp": "class Solution {\npublic:\n    vector<int> topKFrequent(vector<int>& nums, int k) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int[] topKFrequent(int[] nums, int k) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar topKFrequent = function(nums, k) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid topKFrequentElements() {\n    \n}\n"
    }
  },
  {
    "id": 7,
    "slug": "reverse-integer",
    "title": "7. Reverse Integer",
    "difficulty": "MEDIUM",
    "diffClass": "badge-med",
    "category": "Math",
    "acceptance": "28.8%",
    "desc": "<p>Given a signed 32-bit integer <code>x</code>, return <code>x</code> <em>with its digits reversed</em>. If reversing <code>x</code> causes the value to go outside the signed 32-bit integer range <code>[-2^31, 2^31 - 1]</code>, then return <code>0</code>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: x = 123\nOutput: 321</code></pre></div>\n                 <div class=\"example-box\"><div class=\"ex-title\">Example 2:</div><pre><code>Input: x = -123\nOutput: -321</code></pre></div>\n                 <div class=\"example-box\"><div class=\"ex-title\">Example 3:</div><pre><code>Input: x = 120\nOutput: 21</code></pre></div>",
    "constraints": [
      "-2^31 <= x <= 2^31 - 1"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "x = 123",
        "expected": "321"
      },
      {
        "title": "Test 2",
        "input": "x = -123",
        "expected": "-321"
      },
      {
        "title": "Test 3",
        "input": "x = 120",
        "expected": "21"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def reverse(self, x: int) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int reverse(int x) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int reverse(int x) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar reverse = function(x) {\n    \n};\n",
      "c": "int reverse(int x) {\n    \n}\n"
    }
  },
  {
    "id": 8,
    "slug": "string-to-integer-atoi",
    "title": "8. String to Integer (atoi)",
    "difficulty": "MEDIUM",
    "diffClass": "badge-med",
    "category": "String",
    "acceptance": "17.3%",
    "desc": "<p>Implement the <code>myAtoi(string s)</code> function, which converts a string to a 32-bit signed integer (similar to C/C++'s <code>atoi</code> function).</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: s = \"42\"\nOutput: 42</code></pre></div>\n                 <div class=\"example-box\"><div class=\"ex-title\">Example 2:</div><pre><code>Input: s = \"   -42\"\nOutput: -42</code></pre></div>\n                 <div class=\"example-box\"><div class=\"ex-title\">Example 3:</div><pre><code>Input: s = \"1337c0d3\"\nOutput: 1337</code></pre></div>",
    "constraints": [
      "0 <= s.length <= 200",
      "s consists of English letters, digits, spaces, and signs."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "s = \"42\"",
        "expected": "42"
      },
      {
        "title": "Test 2",
        "input": "s = \"   -42\"",
        "expected": "-42"
      },
      {
        "title": "Test 3",
        "input": "s = \"1337c0d3\"",
        "expected": "1337"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def myAtoi(self, s: str) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int myAtoi(string s) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int myAtoi(String s) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar myAtoi = function(s) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid stringToIntegerAtoi() {\n    \n}\n"
    }
  },
  {
    "id": 17,
    "slug": "letter-combinations-of-a-phone-number",
    "title": "17. Letter Combinations of a Phone Number",
    "difficulty": "MEDIUM",
    "diffClass": "badge-med",
    "category": "Backtracking",
    "acceptance": "60.3%",
    "desc": "<p>Given a string containing digits from <code>2-9</code> inclusive, return all possible letter combinations that the number could represent. Return the answer in <strong>any order</strong>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: digits = \"23\"\nOutput: [\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]</code></pre></div>",
    "constraints": [
      "0 <= digits.length <= 4",
      "digits[i] is a digit in the range [\"2\", \"9\"]."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "digits = \"23\"",
        "expected": "[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]"
      },
      {
        "title": "Test 2",
        "input": "digits = \"\"",
        "expected": "[]"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def letterCombinations(self, digits: str) -> list[str]:\n        \n",
      "cpp": "class Solution {\npublic:\n    vector<string> letterCombinations(string digits) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public List<String> letterCombinations(String digits) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar letterCombinations = function(digits) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid letterCombinationsOfAPhoneNumber() {\n    \n}\n"
    }
  },
  {
    "id": 19,
    "slug": "remove-nth-node-from-end-of-list",
    "title": "19. Remove Nth Node From End of List",
    "difficulty": "MEDIUM",
    "diffClass": "badge-med",
    "category": "Linked List",
    "acceptance": "45.1%",
    "desc": "<p>Given the <code>head</code> of a linked list, remove the <code>n<sup>th</sup></code> node from the end of the list and return its head.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: head = [1,2,3,4,5], n = 2\nOutput: [1,2,3,5]</code></pre></div>",
    "constraints": [
      "The number of nodes in the list is sz.",
      "1 <= sz <= 30",
      "1 <= n <= sz"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "head = [1,2,3,4,5], n = 2",
        "expected": "[1,2,3,5]"
      }
    ],
    "templates": {
      "python": "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\nclass Solution:\n    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:\n        \n",
      "cpp": "/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode() : val(0), next(nullptr) {}\n *     ListNode(int x) : val(x), next(nullptr) {}\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\n * };\n */\nclass Solution {\npublic:\n    ListNode* removeNthFromEnd(ListNode* head, int n) {\n        \n    }\n};\n",
      "java": "/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public ListNode removeNthFromEnd(ListNode head, int n) {\n        \n    }\n}\n",
      "javascript": "/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @return {any}\n */\nvar removeNthFromEnd = function(head, n) {\n    \n};\n",
      "c": "/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     struct ListNode *next;\n * };\n */\n/* Return type depends on problem specification */\nvoid removeNthNodeFromEndOfList() {\n    \n}\n"
    }
  },
  {
    "id": 23,
    "slug": "merge-k-sorted-lists",
    "title": "23. Merge k Sorted Lists",
    "difficulty": "HARD",
    "diffClass": "badge-hard",
    "category": "Linked List",
    "acceptance": "52.7%",
    "desc": "<p>You are given an array of <code>k</code> linked-lists <code>lists</code>, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: lists = [[1,4,5],[1,3,4],[2,6]]\nOutput: [1,1,2,3,4,4,5,6]</code></pre></div>",
    "constraints": [
      "k == lists.length",
      "0 <= k <= 10^4",
      "0 <= lists[i].length <= 500"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "lists = [[1,4,5],[1,3,4],[2,6]]",
        "expected": "[1,1,2,3,4,4,5,6]"
      }
    ],
    "templates": {
      "python": "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\nclass Solution:\n    def mergeKLists(self, lists: list[ListNode]) -> ListNode:\n        \n",
      "cpp": "/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode() : val(0), next(nullptr) {}\n *     ListNode(int x) : val(x), next(nullptr) {}\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\n * };\n */\nclass Solution {\npublic:\n    ListNode* mergeKLists(vector<ListNode*>& lists) {\n        \n    }\n};\n",
      "java": "/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public ListNode mergeKLists(ListNode[] lists) {\n        \n    }\n}\n",
      "javascript": "/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @return {any}\n */\nvar mergeKLists = function(lists) {\n    \n};\n",
      "c": "/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     struct ListNode *next;\n * };\n */\n/* Return type depends on problem specification */\nvoid mergeKSortedLists() {\n    \n}\n"
    }
  },
  {
    "id": 27,
    "slug": "remove-element",
    "title": "27. Remove Element",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Two Pointers",
    "acceptance": "57.9%",
    "desc": "<p>Given an integer array <code>nums</code> and an integer <code>val</code>, remove all occurrences of <code>val</code> in <code>nums</code> <strong>in-place</strong>. The order of the elements may be changed.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: nums = [3,2,2,3], val = 3\nOutput: 2, nums = [2,2,_,_]</code></pre></div>",
    "constraints": [
      "0 <= nums.length <= 100",
      "0 <= nums[i] <= 50",
      "0 <= val <= 100"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "nums = [3,2,2,3], val = 3",
        "expected": "2"
      },
      {
        "title": "Test 2",
        "input": "nums = [0,1,2,2,3,0,4,2], val = 2",
        "expected": "5"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def removeElement(self, nums: list[int], val: int) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int removeElement(vector<int>& nums, int val) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int removeElement(int[] nums, int val) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar removeElement = function(nums, val) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid removeElement() {\n    \n}\n"
    }
  },
  {
    "id": 28,
    "slug": "find-the-index-of-the-first-occurrence-in-a-string",
    "title": "28. Find the Index of the First Occurrence in a String",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Two Pointers",
    "acceptance": "42.3%",
    "desc": "<p>Given two strings <code>needle</code> and <code>haystack</code>, return the index of the first occurrence of <code>needle</code> in <code>haystack</code>, or <code>-1</code> if <code>needle</code> is not part of <code>haystack</code>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: haystack = \"sadbutsad\", needle = \"sad\"\nOutput: 0\nExplanation: \"sad\" occurs at index 0 and 6. The first occurrence is at index 0.</code></pre></div>",
    "constraints": [
      "1 <= haystack.length, needle.length <= 10^4"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "haystack = \"sadbutsad\", needle = \"sad\"",
        "expected": "0"
      },
      {
        "title": "Test 2",
        "input": "haystack = \"leetcode\", needle = \"leeto\"",
        "expected": "-1"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def strStr(self, haystack: str, needle: str) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int strStr(string haystack, string needle) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int strStr(String haystack, String needle) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar strStr = function(haystack, needle) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid findTheIndexOfTheFirstOccurrenceInAString() {\n    \n}\n"
    }
  },
  {
    "id": 34,
    "slug": "find-first-and-last-position-of-element-in-sorted-array",
    "title": "34. Find First and Last Position of Element in Sorted Array",
    "difficulty": "MEDIUM",
    "diffClass": "badge-med",
    "category": "Binary Search",
    "acceptance": "44.8%",
    "desc": "<p>Given an array of integers <code>nums</code> sorted in non-decreasing order, find the starting and ending position of a given <code>target</code> value. If <code>target</code> is not found, return <code>[-1, -1]</code> in <code>O(log n)</code> time.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: nums = [5,7,7,8,8,10], target = 8\nOutput: [3,4]</code></pre></div>",
    "constraints": [
      "0 <= nums.length <= 10^5",
      "nums is non-decreasing array."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "nums = [5,7,7,8,8,10], target = 8",
        "expected": "[3,4]"
      },
      {
        "title": "Test 2",
        "input": "nums = [5,7,7,8,8,10], target = 6",
        "expected": "[-1,-1]"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def searchRange(self, nums: list[int], target: int) -> list[int]:\n        \n",
      "cpp": "class Solution {\npublic:\n    vector<int> searchRange(vector<int>& nums, int target) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int[] searchRange(int[] nums, int target) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar searchRange = function(nums, target) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid findFirstAndLastPositionOfElementInSortedArray() {\n    \n}\n"
    }
  },
  {
    "id": 35,
    "slug": "search-insert-position",
    "title": "35. Search Insert Position",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Binary Search",
    "acceptance": "46.5%",
    "desc": "<p>Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. You must write an algorithm with <code>O(log n)</code> runtime complexity.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: nums = [1,3,5,6], target = 5\nOutput: 2</code></pre></div>\n                 <div class=\"example-box\"><div class=\"ex-title\">Example 2:</div><pre><code>Input: nums = [1,3,5,6], target = 2\nOutput: 1</code></pre></div>",
    "constraints": [
      "1 <= nums.length <= 10^4",
      "nums contains distinct values sorted in ascending order."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "nums = [1,3,5,6], target = 5",
        "expected": "2"
      },
      {
        "title": "Test 2",
        "input": "nums = [1,3,5,6], target = 2",
        "expected": "1"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def searchInsert(self, nums: list[int], target: int) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int searchInsert(vector<int>& nums, int target) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int searchInsert(int[] nums, int target) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar searchInsert = function(nums, target) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid searchInsertPosition() {\n    \n}\n"
    }
  },
  {
    "id": 39,
    "slug": "combination-sum",
    "title": "39. Combination Sum",
    "difficulty": "MEDIUM",
    "diffClass": "badge-med",
    "category": "Backtracking",
    "acceptance": "71.4%",
    "desc": "<p>Given an array of distinct integers <code>candidates</code> and a target integer <code>target</code>, return a list of all unique combinations of <code>candidates</code> where the chosen numbers sum to <code>target</code>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: candidates = [2,3,6,7], target = 7\nOutput: [[2,2,3],[7]]</code></pre></div>",
    "constraints": [
      "1 <= candidates.length <= 30",
      "2 <= candidates[i] <= 40",
      "1 <= target <= 40"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "candidates = [2,3,6,7], target = 7",
        "expected": "[[2,2,3],[7]]"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def combinationSum(self, candidates: list[int], target: int) -> list[list[int]]:\n        \n",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public List<List<Integer>> combinationSum(int[] candidates, int target) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar combinationSum = function(candidates, target) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid combinationSum() {\n    \n}\n"
    }
  },
  {
    "id": 46,
    "slug": "permutations",
    "title": "46. Permutations",
    "difficulty": "MEDIUM",
    "diffClass": "badge-med",
    "category": "Backtracking",
    "acceptance": "78.5%",
    "desc": "<p>Given an array <code>nums</code> of distinct integers, return <em>all the possible permutations</em>. You can return the answer in <strong>any order</strong>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: nums = [1,2,3]\nOutput: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]</code></pre></div>",
    "constraints": [
      "1 <= nums.length <= 6",
      "-10 <= nums[i] <= 10",
      "All the integers of nums are unique."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "nums = [1,2,3]",
        "expected": "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def permute(self, nums: list[int]) -> list[list[int]]:\n        \n",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> permute(vector<int>& nums) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public List<List<Integer>> permute(int[] nums) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar permute = function(nums) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid permutations() {\n    \n}\n"
    }
  },
  {
    "id": 48,
    "slug": "rotate-image",
    "title": "48. Rotate Image",
    "difficulty": "MEDIUM",
    "diffClass": "badge-med",
    "category": "Matrix",
    "acceptance": "75.2%",
    "desc": "<p>You are given an <code>n x n</code> 2D matrix representing an image, rotate the image by <strong>90 degrees (clockwise)</strong> <em>in-place</em>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]\nOutput: [[7,4,1],[8,5,2],[9,6,3]]</code></pre></div>",
    "constraints": [
      "n == matrix.length == matrix[i].length",
      "1 <= n <= 20"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
        "expected": "[[7,4,1],[8,5,2],[9,6,3]]"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def rotate(self, matrix: list[list[int]]) -> None:\n        \n",
      "cpp": "class Solution {\npublic:\n    void rotate(vector<vector<int>>& matrix) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public void rotate(int[][] matrix) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar rotate = function(matrix) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid rotateImage() {\n    \n}\n"
    }
  },
  {
    "id": 62,
    "slug": "unique-paths",
    "title": "62. Unique Paths",
    "difficulty": "MEDIUM",
    "diffClass": "badge-med",
    "category": "Dynamic Programming",
    "acceptance": "64.5%",
    "desc": "<p>There is a robot on an <code>m x n</code> grid. The robot is initially located at <code>(0, 0)</code> and tries to reach <code>(m - 1, n - 1)</code> moving only down or right. Return the number of possible unique paths.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: m = 3, n = 7\nOutput: 28</code></pre></div>\n                 <div class=\"example-box\"><div class=\"ex-title\">Example 2:</div><pre><code>Input: m = 3, n = 2\nOutput: 3</code></pre></div>",
    "constraints": [
      "1 <= m, n <= 100"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "m = 3, n = 7",
        "expected": "28"
      },
      {
        "title": "Test 2",
        "input": "m = 3, n = 2",
        "expected": "3"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def uniquePaths(self, m: int, n: int) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int uniquePaths(int m, int n) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int uniquePaths(int m, int n) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar uniquePaths = function(m, n) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid uniquePaths() {\n    \n}\n"
    }
  },
  {
    "id": 66,
    "slug": "plus-one",
    "title": "66. Plus One",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Math",
    "acceptance": "45.8%",
    "desc": "<p>You are given a large integer represented as an integer array <code>digits</code>. Increment the large integer by one and return the resulting array of digits.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: digits = [1,2,3]\nOutput: [1,2,4]</code></pre></div>\n                 <div class=\"example-box\"><div class=\"ex-title\">Example 2:</div><pre><code>Input: digits = [9]\nOutput: [1,0]</code></pre></div>",
    "constraints": [
      "1 <= digits.length <= 100",
      "0 <= digits[i] <= 9"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "digits = [1,2,3]",
        "expected": "[1,2,4]"
      },
      {
        "title": "Test 2",
        "input": "digits = [9]",
        "expected": "[1,0]"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def plusOne(self, digits: list[int]) -> list[int]:\n        \n",
      "cpp": "class Solution {\npublic:\n    vector<int> plusOne(vector<int>& digits) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int[] plusOne(int[] digits) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar plusOne = function(digits) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid plusOne() {\n    \n}\n"
    }
  },
  {
    "id": 72,
    "slug": "edit-distance",
    "title": "72. Edit Distance",
    "difficulty": "HARD",
    "diffClass": "badge-hard",
    "category": "Dynamic Programming",
    "acceptance": "56.7%",
    "desc": "<p>Given two strings <code>word1</code> and <code>word2</code>, return <em>the minimum number of operations required to convert <code>word1</code> to <code>word2</code></em> (insert, delete, or replace a character).</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: word1 = \"horse\", word2 = \"ros\"\nOutput: 3\nExplanation: horse -> rorse -> rose -> ros</code></pre></div>",
    "constraints": [
      "0 <= word1.length, word2.length <= 500"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "word1 = \"horse\", word2 = \"ros\"",
        "expected": "3"
      },
      {
        "title": "Test 2",
        "input": "word1 = \"intention\", word2 = \"execution\"",
        "expected": "5"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def minDistance(self, word1: str, word2: str) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int minDistance(string word1, string word2) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int minDistance(String word1, String word2) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar minDistance = function(word1, word2) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid editDistance() {\n    \n}\n"
    }
  },
  {
    "id": 75,
    "slug": "sort-colors",
    "title": "75. Sort Colors",
    "difficulty": "MEDIUM",
    "diffClass": "badge-med",
    "category": "Two Pointers",
    "acceptance": "62.6%",
    "desc": "<p>Given an array <code>nums</code> with <code>n</code> objects colored red, white, or blue, sort them <strong>in-place</strong> so that objects of the same color are adjacent, with the colors in the order red, white, and blue (0, 1, and 2, Dutch National Flag problem).</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: nums = [2,0,2,1,1,0]\nOutput: [0,0,1,1,2,2]</code></pre></div>",
    "constraints": [
      "n == nums.length",
      "1 <= n <= 300",
      "nums[i] is either 0, 1, or 2."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "nums = [2,0,2,1,1,0]",
        "expected": "[0,0,1,1,2,2]"
      },
      {
        "title": "Test 2",
        "input": "nums = [2,0,1]",
        "expected": "[0,1,2]"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def sortColors(self, nums: list[int]) -> None:\n        \n",
      "cpp": "class Solution {\npublic:\n    void sortColors(vector<int>& nums) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public void sortColors(int[] nums) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar sortColors = function(nums) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid sortColors() {\n    \n}\n"
    }
  },
  {
    "id": 76,
    "slug": "minimum-window-substring",
    "title": "76. Minimum Window Substring",
    "difficulty": "HARD",
    "diffClass": "badge-hard",
    "category": "Sliding Window",
    "acceptance": "43.2%",
    "desc": "<p>Given two strings <code>s</code> and <code>t</code> of lengths <code>m</code> and <code>n</code> respectively, return <em>the <strong>minimum window substring</strong> of <code>s</code> such that every character in <code>t</code> (including duplicates) is included in the window</em>. If no such substring exists, return <code>\"\"</code>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: s = \"ADOBECODEBANC\", t = \"ABC\"\nOutput: \"BANC\"</code></pre></div>",
    "constraints": [
      "m == s.length",
      "n == t.length",
      "1 <= m, n <= 10^5"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "s = \"ADOBECODEBANC\", t = \"ABC\"",
        "expected": "\"BANC\""
      },
      {
        "title": "Test 2",
        "input": "s = \"a\", t = \"a\"",
        "expected": "\"a\""
      }
    ],
    "templates": {
      "python": "class Solution:\n    def minWindow(self, s: str, t: str) -> str:\n        \n",
      "cpp": "class Solution {\npublic:\n    string minWindow(string s, string t) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public String minWindow(String s, String t) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar minWindow = function(s, t) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid minimumWindowSubstring() {\n    \n}\n"
    }
  },
  {
    "id": 79,
    "slug": "word-search",
    "title": "79. Word Search",
    "difficulty": "MEDIUM",
    "diffClass": "badge-med",
    "category": "Backtracking",
    "acceptance": "42.7%",
    "desc": "<p>Given an <code>m x n</code> grid of characters <code>board</code> and a string <code>word</code>, return <code>true</code> <em>if <code>word</code> exists in the grid</em>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"ABCCED\"\nOutput: true</code></pre></div>",
    "constraints": [
      "m == board.length",
      "n = board[i].length",
      "1 <= m, n <= 6"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"ABCCED\"",
        "expected": "true"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def exist(self, board: list[list[str]], word: str) -> bool:\n        \n",
      "cpp": "class Solution {\npublic:\n    bool exist(vector<vector<char>>& board, string word) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public boolean exist(char[][] board, String word) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar exist = function(board, word) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid wordSearch() {\n    \n}\n"
    }
  },
  {
    "id": 84,
    "slug": "largest-rectangle-in-histogram",
    "title": "84. Largest Rectangle in Histogram",
    "difficulty": "HARD",
    "diffClass": "badge-hard",
    "category": "Stack",
    "acceptance": "44.5%",
    "desc": "<p>Given an array of integers <code>heights</code> representing the histogram's bar height where the width of each bar is <code>1</code>, return <em>the area of the largest rectangle in the histogram</em>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: heights = [2,1,5,6,2,3]\nOutput: 10\nExplanation: The above is a histogram where width of each bar is 1. The largest rectangle is shown in the red area, which has an area = 10 units.</code></pre></div>",
    "constraints": [
      "1 <= heights.length <= 10^5",
      "0 <= heights[i] <= 10^4"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "heights = [2,1,5,6,2,3]",
        "expected": "10"
      },
      {
        "title": "Test 2",
        "input": "heights = [2,4]",
        "expected": "4"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def largestRectangleArea(self, heights: list[int]) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int largestRectangleArea(vector<int>& heights) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int largestRectangleArea(int[] heights) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar largestRectangleArea = function(heights) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid largestRectangleInHistogram() {\n    \n}\n"
    }
  },
  {
    "id": 88,
    "slug": "merge-sorted-array",
    "title": "88. Merge Sorted Array",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Two Pointers",
    "acceptance": "49.8%",
    "desc": "<p>You are given two integer arrays <code>nums1</code> and <code>nums2</code>, sorted in non-decreasing order, and two integers <code>m</code> and <code>n</code>. Merge <code>nums1</code> and <code>nums2</code> into a single array sorted in non-decreasing order <em>in-place</em>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3\nOutput: [1,2,2,3,5,6]</code></pre></div>",
    "constraints": [
      "nums1.length == m + n",
      "nums2.length == n",
      "0 <= m, n <= 200"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3",
        "expected": "[1,2,2,3,5,6]"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def merge(self, nums1: list[int], m: int, nums2: list[int], n: int) -> None:\n        \n",
      "cpp": "class Solution {\npublic:\n    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public void merge(int[] nums1, int m, int[] nums2, int n) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar merge = function(nums1, m, nums2, n) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid mergeSortedArray() {\n    \n}\n"
    }
  },
  {
    "id": 94,
    "slug": "binary-tree-inorder-traversal",
    "title": "94. Binary Tree Inorder Traversal",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Trees",
    "acceptance": "75.8%",
    "desc": "<p>Given the <code>root</code> of a binary tree, return <em>the inorder traversal of its nodes' values</em>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: root = [1,null,2,3]\nOutput: [1,3,2]</code></pre></div><div class=\"example-box\"><div class=\"ex-title\">Example 2:</div><pre><code>Input: root = []\nOutput: []</code></pre></div>",
    "constraints": [
      "The number of nodes in the tree is in the range [0, 100].",
      "-100 <= Node.val <= 100"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "root = [1,null,2,3]",
        "expected": "[1,3,2]"
      },
      {
        "title": "Test 2",
        "input": "root = []",
        "expected": "[]"
      }
    ],
    "templates": {
      "python": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def inorderTraversal(self, root: TreeNode | None) -> list[int]:\n        \n",
      "cpp": "/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    void inorder(TreeNode* root, vector<int>& res) {\n        \n    }\n};\n",
      "java": "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public List<Integer> inorderTraversal(TreeNode root) {\n        \n    }\n}\n",
      "javascript": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @return {any}\n */\nvar inorderTraversal = function(root) {\n    \n};\n",
      "c": "/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     struct TreeNode *left;\n *     struct TreeNode *right;\n * };\n */\n/* Return type depends on problem specification */\nvoid binaryTreeInorderTraversal() {\n    \n}\n"
    }
  },
  {
    "id": 98,
    "slug": "validate-binary-search-tree",
    "title": "98. Validate Binary Search Tree",
    "difficulty": "MEDIUM",
    "diffClass": "badge-medium",
    "category": "Trees",
    "acceptance": "32.8%",
    "desc": "<p>Given the <code>root</code> of a binary tree, <em>determine if it is a valid binary search tree (BST)</em>.</p><p>A <strong>valid BST</strong> is defined as follows: The left subtree of a node contains only nodes with keys <strong>less than</strong> the node's key. The right subtree contains only nodes with keys <strong>greater than</strong> the node's key. Both the left and right subtrees must also be binary search trees.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: root = [2,1,3]\nOutput: true</code></pre></div><div class=\"example-box\"><div class=\"ex-title\">Example 2:</div><pre><code>Input: root = [5,1,4,null,null,3,6]\nOutput: false</code></pre></div>",
    "constraints": [
      "The number of nodes in the tree is in the range [1, 10^4].",
      "-2^31 <= Node.val <= 2^31 - 1"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "root = [2,1,3]",
        "expected": "true"
      },
      {
        "title": "Test 2",
        "input": "root = [5,1,4,null,null,3,6]",
        "expected": "false"
      }
    ],
    "templates": {
      "python": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def isValidBST(self, root: TreeNode | None) -> bool:\n        \n",
      "cpp": "/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    bool valid(TreeNode* root, long long low, long long high) {\n        \n    }\n};\n",
      "java": "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public boolean isValidBST(TreeNode root) {\n        \n    }\n}\n",
      "javascript": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @return {any}\n */\nvar isValidBST = function(root) {\n    \n};\n",
      "c": "/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     struct TreeNode *left;\n *     struct TreeNode *right;\n * };\n */\n/* Return type depends on problem specification */\nvoid validateBinarySearchTree() {\n    \n}\n"
    }
  },
  {
    "id": 100,
    "slug": "same-tree",
    "title": "100. Same Tree",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Trees",
    "acceptance": "61.4%",
    "desc": "<p>Given the roots of two binary trees <code>p</code> and <code>q</code>, write a function to check if they are the same or not.</p><p>Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: p = [1,2,3], q = [1,2,3]\nOutput: true</code></pre></div>",
    "constraints": [
      "The number of nodes in both trees is in the range [0, 100].",
      "-10^4 <= Node.val <= 10^4"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "p = [1,2,3], q = [1,2,3]",
        "expected": "true"
      },
      {
        "title": "Test 2",
        "input": "p = [1,2], q = [1,null,2]",
        "expected": "false"
      }
    ],
    "templates": {
      "python": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def isSameTree(self, p: TreeNode | None, q: TreeNode | None) -> bool:\n        \n",
      "cpp": "/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    bool isSameTree(TreeNode* p, TreeNode* q) {\n        \n    }\n};\n",
      "java": "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public boolean isSameTree(TreeNode p, TreeNode q) {\n        \n    }\n}\n",
      "javascript": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @return {any}\n */\nvar isSameTree = function(p, q) {\n    \n};\n",
      "c": "/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     struct TreeNode *left;\n *     struct TreeNode *right;\n * };\n */\n/* Return type depends on problem specification */\nvoid sameTree() {\n    \n}\n"
    }
  },
  {
    "id": 101,
    "slug": "symmetric-tree",
    "title": "101. Symmetric Tree",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Trees",
    "acceptance": "56.9%",
    "desc": "<p>Given the <code>root</code> of a binary tree, <em>check whether it is a mirror of itself</em> (i.e., symmetric around its center).</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: root = [1,2,2,3,4,4,3]\nOutput: true</code></pre></div>",
    "constraints": [
      "The number of nodes in the tree is in the range [1, 1000].",
      "-100 <= Node.val <= 100"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "root = [1,2,2,3,4,4,3]",
        "expected": "true"
      },
      {
        "title": "Test 2",
        "input": "root = [1,2,2,null,3,null,3]",
        "expected": "false"
      }
    ],
    "templates": {
      "python": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def isSymmetric(self, root: TreeNode | None) -> bool:\n        \n",
      "cpp": "/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    bool isMirror(TreeNode* t1, TreeNode* t2) {\n        \n    }\n};\n",
      "java": "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public boolean isSymmetric(TreeNode root) {\n        \n    }\n}\n",
      "javascript": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @return {any}\n */\nvar isSymmetric = function(root) {\n    \n};\n",
      "c": "/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     struct TreeNode *left;\n *     struct TreeNode *right;\n * };\n */\n/* Return type depends on problem specification */\nvoid symmetricTree() {\n    \n}\n"
    }
  },
  {
    "id": 102,
    "slug": "binary-tree-level-order-traversal",
    "title": "102. Binary Tree Level Order Traversal",
    "difficulty": "MEDIUM",
    "diffClass": "badge-medium",
    "category": "Trees",
    "acceptance": "67.8%",
    "desc": "<p>Given the <code>root</code> of a binary tree, return <em>the level order traversal of its nodes' values</em>. (i.e., from left to right, level by level).</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: root = [3,9,20,null,null,15,7]\nOutput: [[3],[9,20],[15,7]]</code></pre></div>",
    "constraints": [
      "The number of nodes in the tree is in the range [0, 2000].",
      "-1000 <= Node.val <= 1000"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "root = [3,9,20,null,null,15,7]",
        "expected": "[[3],[9,20],[15,7]]"
      },
      {
        "title": "Test 2",
        "input": "root = [1]",
        "expected": "[[1]]"
      }
    ],
    "templates": {
      "python": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def levelOrder(self, root: TreeNode | None) -> list[list[int]]:\n        \n",
      "cpp": "/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    vector<vector<int>> levelOrder(TreeNode* root) {\n        \n    }\n};\n",
      "java": "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public List<List<Integer>> levelOrder(TreeNode root) {\n        \n    }\n}\n",
      "javascript": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @return {any}\n */\nvar levelOrder = function(root) {\n    \n};\n",
      "c": "/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     struct TreeNode *left;\n *     struct TreeNode *right;\n * };\n */\n/* Return type depends on problem specification */\nvoid binaryTreeLevelOrderTraversal() {\n    \n}\n"
    }
  },
  {
    "id": 105,
    "slug": "construct-binary-tree-from-preorder-and-inorder-traversal",
    "title": "105. Construct Binary Tree from Preorder and Inorder Traversal",
    "difficulty": "MEDIUM",
    "diffClass": "badge-medium",
    "category": "Trees",
    "acceptance": "64.2%",
    "desc": "<p>Given two integer arrays <code>preorder</code> and <code>inorder</code> where <code>preorder</code> is the preorder traversal of a binary tree and <code>inorder</code> is the inorder traversal of the same tree, construct and return <em>the binary tree</em>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]\nOutput: [3,9,20,null,null,15,7]</code></pre></div>",
    "constraints": [
      "1 <= preorder.length <= 3000",
      "inorder.length == preorder.length",
      "preorder and inorder consist of unique values."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]",
        "expected": "[3,9,20,null,null,15,7]"
      }
    ],
    "templates": {
      "python": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def buildTree(self, preorder: list[int], inorder: list[int]) -> TreeNode | None:\n        \n",
      "cpp": "/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {\n        \n    }\n};\n",
      "java": "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public TreeNode buildTree(int[] preorder, int[] inorder) {\n        \n    }\n}\n",
      "javascript": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @return {any}\n */\nvar buildTree = function(preorder, inorder) {\n    \n};\n",
      "c": "/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     struct TreeNode *left;\n *     struct TreeNode *right;\n * };\n */\n/* Return type depends on problem specification */\nvoid constructBinaryTreeFromPreorderAndInorderTraversal() {\n    \n}\n"
    }
  },
  {
    "id": 110,
    "slug": "balanced-binary-tree",
    "title": "110. Balanced Binary Tree",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Trees",
    "acceptance": "52.1%",
    "desc": "<p>Given a binary tree, determine if it is <strong>height-balanced</strong>.</p><p>A height-balanced binary tree is defined as a binary tree in which the left and right subtrees of <em>every</em> node differ in height by no more than 1.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: root = [3,9,20,null,null,15,7]\nOutput: true</code></pre></div>",
    "constraints": [
      "The number of nodes in the tree is in the range [0, 5000].",
      "-10^4 <= Node.val <= 10^4"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "root = [3,9,20,null,null,15,7]",
        "expected": "true"
      },
      {
        "title": "Test 2",
        "input": "root = [1,2,2,3,3,null,null,4,4]",
        "expected": "false"
      }
    ],
    "templates": {
      "python": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def isBalanced(self, root: TreeNode | None) -> bool:\n        \n",
      "cpp": "/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    int check(TreeNode* node) {\n        \n    }\n};\n",
      "java": "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public boolean isBalanced(TreeNode root) {\n        \n    }\n}\n",
      "javascript": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @return {any}\n */\nvar isBalanced = function(root) {\n    \n};\n",
      "c": "/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     struct TreeNode *left;\n *     struct TreeNode *right;\n * };\n */\n/* Return type depends on problem specification */\nvoid balancedBinaryTree() {\n    \n}\n"
    }
  },
  {
    "id": 122,
    "slug": "best-time-to-buy-and-sell-stock-ii",
    "title": "122. Best Time to Buy and Sell Stock II",
    "difficulty": "MEDIUM",
    "diffClass": "badge-medium",
    "category": "Greedy",
    "acceptance": "67.1%",
    "desc": "<p>You are given an integer array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.</p><p>On each day, you may decide to buy and/or sell the stock. You can only hold <strong>at most one</strong> share of the stock at any time. However, you can buy it then immediately sell it on the same day. Find and return <em>the maximum profit you can achieve</em>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: prices = [7,1,5,3,6,4]\nOutput: 7\nExplanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4. Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3. Total profit is 4 + 3 = 7.</code></pre></div>",
    "constraints": [
      "1 <= prices.length <= 3 * 10^4",
      "0 <= prices[i] <= 10^4"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "prices = [7,1,5,3,6,4]",
        "expected": "7"
      },
      {
        "title": "Test 2",
        "input": "prices = [1,2,3,4,5]",
        "expected": "4"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def maxProfit(self, prices: list[int]) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int maxProfit(int[] prices) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar maxProfit = function(prices) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid bestTimeToBuyAndSellStockIi() {\n    \n}\n"
    }
  },
  {
    "id": 124,
    "slug": "binary-tree-maximum-path-sum",
    "title": "124. Binary Tree Maximum Path Sum",
    "difficulty": "HARD",
    "diffClass": "badge-hard",
    "category": "Trees",
    "acceptance": "40.2%",
    "desc": "<p>A <strong>path</strong> in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. The <strong>path sum</strong> of a path is the sum of the node's values in the path.</p><p>Given the <code>root</code> of a binary tree, return <em>the maximum <strong>path sum</strong> of any non-empty path</em>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: root = [1,2,3]\nOutput: 6\nExplanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.</code></pre></div><div class=\"example-box\"><div class=\"ex-title\">Example 2:</div><pre><code>Input: root = [-10,9,20,null,null,15,7]\nOutput: 42\nExplanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.</code></pre></div>",
    "constraints": [
      "The number of nodes in the tree is in the range [1, 3 * 10^4].",
      "-1000 <= Node.val <= 1000"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "root = [1,2,3]",
        "expected": "6"
      },
      {
        "title": "Test 2",
        "input": "root = [-10,9,20,null,null,15,7]",
        "expected": "42"
      }
    ],
    "templates": {
      "python": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def maxPathSum(self, root: TreeNode | None) -> int:\n        \n",
      "cpp": "/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    int maxPathSum(TreeNode* root) {\n        \n    }\n};\n",
      "java": "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public int maxPathSum(TreeNode root) {\n        \n    }\n}\n",
      "javascript": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @return {any}\n */\nvar maxPathSum = function(root) {\n    \n};\n",
      "c": "/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     struct TreeNode *left;\n *     struct TreeNode *right;\n * };\n */\n/* Return type depends on problem specification */\nvoid binaryTreeMaximumPathSum() {\n    \n}\n"
    }
  },
  {
    "id": 133,
    "slug": "clone-graph",
    "title": "133. Clone Graph",
    "difficulty": "MEDIUM",
    "diffClass": "badge-medium",
    "category": "Graphs",
    "acceptance": "57.8%",
    "desc": "<p>Given a reference of a node in a <strong>connected</strong> undirected graph, return a <strong>deep copy</strong> (clone) of the graph.</p><p>Each node in the graph contains a value (<code>int</code>) and a list (<code>List[Node]</code>) of its neighbors.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: adjList = [[2,4],[1,3],[2,4],[1,3]]\nOutput: [[2,4],[1,3],[2,4],[1,3]]</code></pre></div>",
    "constraints": [
      "The number of nodes in the graph is in the range [0, 100].",
      "1 <= Node.val <= 100",
      "Node.val is unique for each node."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "adjList = [[2,4],[1,3],[2,4],[1,3]]",
        "expected": "[[2,4],[1,3],[2,4],[1,3]]"
      }
    ],
    "templates": {
      "python": "\"\"\"\n# Definition for a Node.\nclass Node:\n    def __init__(self, val = 0, neighbors = None):\n        self.val = val\n        self.neighbors = neighbors if neighbors is not None else []\n\"\"\"\nclass Solution:\n    def cloneGraph(self, node: 'Node') -> 'Node':\n        \n",
      "cpp": "/*\n// Definition for a Node.\nclass Node {\npublic:\n    int val;\n    vector<Node*> neighbors;\n    Node() : val(0) {}\n    Node(int _val) : val(_val) {}\n    Node(int _val, vector<Node*> _neighbors) : val(_val), neighbors(_neighbors) {}\n};\n*/\nclass Solution {\npublic:\n    Node* cloneGraph(Node* node) {\n        \n    }\n};\n",
      "java": "/*\n// Definition for a Node.\nclass Node {\n    public int val;\n    public List<Node> neighbors;\n    public Node() { val = 0; neighbors = new ArrayList<Node>(); }\n    public Node(int _val) { val = _val; neighbors = new ArrayList<Node>(); }\n    public Node(int _val, ArrayList<Node> _neighbors) { val = _val; neighbors = _neighbors; }\n}\n*/\nclass Solution {\n    public Node cloneGraph(Node node) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar cloneGraph = function(node) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid cloneGraph() {\n    \n}\n"
    }
  },
  {
    "id": 139,
    "slug": "word-break",
    "title": "139. Word Break",
    "difficulty": "MEDIUM",
    "diffClass": "badge-medium",
    "category": "Dynamic Programming",
    "acceptance": "47.0%",
    "desc": "<p>Given a string <code>s</code> and a dictionary of strings <code>wordDict</code>, return <code>true</code> if <code>s</code> can be segmented into a space-separated sequence of one or more dictionary words.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: s = \"leetcode\", wordDict = [\"leet\",\"code\"]\nOutput: true\nExplanation: Return true because \"leetcode\" can be segmented as \"leet code\".</code></pre></div><div class=\"example-box\"><div class=\"ex-title\">Example 2:</div><pre><code>Input: s = \"applepenapple\", wordDict = [\"apple\",\"pen\"]\nOutput: true</code></pre></div>",
    "constraints": [
      "1 <= s.length <= 300",
      "1 <= wordDict.length <= 1000",
      "1 <= wordDict[i].length <= 20",
      "s and wordDict[i] consist of lowercase English letters."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "s = \"leetcode\", wordDict = [\"leet\",\"code\"]",
        "expected": "true"
      },
      {
        "title": "Test 2",
        "input": "s = \"catsandog\", wordDict = [\"cats\",\"dog\",\"sand\",\"and\",\"cat\"]",
        "expected": "false"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def wordBreak(self, s: str, wordDict: list[str]) -> bool:\n        \n",
      "cpp": "class Solution {\npublic:\n    bool wordBreak(string s, vector<string>& wordDict) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public boolean wordBreak(String s, List<String> wordDict) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar wordBreak = function(s, wordDict) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid wordBreak() {\n    \n}\n"
    }
  },
  {
    "id": 142,
    "slug": "linked-list-cycle-ii",
    "title": "142. Linked List Cycle II",
    "difficulty": "MEDIUM",
    "diffClass": "badge-medium",
    "category": "Linked List",
    "acceptance": "51.8%",
    "desc": "<p>Given the <code>head</code> of a linked list, return <em>the node where the cycle begins. If there is no cycle, return </em><code>null</code>.</p><p>There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the <code>next</code> pointer.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: head = [3,2,0,-4], pos = 1\nOutput: tail connects to node index 1</code></pre></div>",
    "constraints": [
      "The number of the nodes in the list is in the range [0, 10^4].",
      "-10^5 <= Node.val <= 10^5",
      "pos is -1 or a valid index in the linked-list."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "head = [3,2,0,-4], pos = 1",
        "expected": "node index 1"
      },
      {
        "title": "Test 2",
        "input": "head = [1,2], pos = 0",
        "expected": "node index 0"
      }
    ],
    "templates": {
      "python": "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\nclass Solution:\n    def detectCycle(self, head: ListNode | None) -> ListNode | None:\n        \n",
      "cpp": "/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode() : val(0), next(nullptr) {}\n *     ListNode(int x) : val(x), next(nullptr) {}\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\n * };\n */\nclass Solution {\npublic:\n    ListNode *detectCycle(ListNode *head) {\n        \n    }\n};\n",
      "java": "/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public ListNode detectCycle(ListNode head) {\n        \n    }\n}\n",
      "javascript": "/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @return {any}\n */\nvar detectCycle = function(head) {\n    \n};\n",
      "c": "/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     struct ListNode *next;\n * };\n */\n/* Return type depends on problem specification */\nvoid linkedListCycleIi() {\n    \n}\n"
    }
  },
  {
    "id": 143,
    "slug": "reorder-list",
    "title": "143. Reorder List",
    "difficulty": "MEDIUM",
    "diffClass": "badge-medium",
    "category": "Linked List",
    "acceptance": "56.3%",
    "desc": "<p>You are given the head of a singly linked-list. The list can be represented as: <code>L0 → L1 → … → Ln - 1 → Ln</code>.</p><p><em>Reorder the list to be on the following form:</em> <code>L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …</code></p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: head = [1,2,3,4]\nOutput: [1,4,2,3]</code></pre></div><div class=\"example-box\"><div class=\"ex-title\">Example 2:</div><pre><code>Input: head = [1,2,3,4,5]\nOutput: [1,5,2,4,3]</code></pre></div>",
    "constraints": [
      "The number of nodes in the list is in the range [1, 5 * 10^4].",
      "1 <= Node.val <= 1000"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "head = [1,2,3,4]",
        "expected": "[1,4,2,3]"
      },
      {
        "title": "Test 2",
        "input": "head = [1,2,3,4,5]",
        "expected": "[1,5,2,4,3]"
      }
    ],
    "templates": {
      "python": "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\nclass Solution:\n    def reorderList(self, head: ListNode | None) -> None:\n        \n",
      "cpp": "/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode() : val(0), next(nullptr) {}\n *     ListNode(int x) : val(x), next(nullptr) {}\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\n * };\n */\nclass Solution {\npublic:\n    void reorderList(ListNode* head) {\n        \n    }\n};\n",
      "java": "/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public void reorderList(ListNode head) {\n        \n    }\n}\n",
      "javascript": "/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @return {any}\n */\nvar reorderList = function(head) {\n    \n};\n",
      "c": "/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     struct ListNode *next;\n * };\n */\n/* Return type depends on problem specification */\nvoid reorderList() {\n    \n}\n"
    }
  },
  {
    "id": 146,
    "slug": "lru-cache",
    "title": "146. LRU Cache",
    "difficulty": "MEDIUM",
    "diffClass": "badge-medium",
    "category": "Design",
    "acceptance": "43.5%",
    "desc": "<p>Design a data structure that follows the constraints of a <strong>Least Recently Used (LRU) cache</strong>.</p><p>Implement the <code>LRUCache</code> class:</p><ul><li><code>LRUCache(int capacity)</code> Initialize the LRU cache with <strong>positive</strong> size <code>capacity</code>.</li><li><code>int get(int key)</code> Return the value of the <code>key</code> if the key exists, otherwise return <code>-1</code>.</li><li><code>void put(int key, int value)</code> Update the value of the <code>key</code> if the <code>key</code> exists. Otherwise, add the <code>key-value</code> pair to the cache. If the number of keys exceeds the <code>capacity</code> from this operation, <strong>evict</strong> the least recently used key.</li></ul>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input\n[\"LRUCache\", \"put\", \"put\", \"get\", \"put\", \"get\", \"put\", \"get\", \"get\", \"get\"]\n[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]\nOutput\n[null, null, null, 1, null, -1, null, -1, 3, 4]</code></pre></div>",
    "constraints": [
      "1 <= capacity <= 3000",
      "0 <= key <= 10^4",
      "0 <= value <= 10^5",
      "At most 2 * 10^5 calls will be made to get and put."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "cap = 2, put(1,1), put(2,2), get(1), put(3,3), get(2)",
        "expected": "[null,null,1,null,-1]"
      }
    ],
    "templates": {
      "python": "class LRUCache:\n    def __init__(self, capacity: int):\n        pass\n\n    def get(self, key: int) -> int:\n        pass\n\n    def put(self, key: int, value: int) -> None:\n        pass\n",
      "cpp": "class LRUCache {\npublic:\n    LRUCache(int capacity) {\n        \n    }\n    \n    int get(int key) {\n        \n    }\n    \n    void put(int key, int value) {\n        \n    }\n};\n",
      "java": "class LRUCache {\n    public LRUCache(int capacity) {\n        \n    }\n    \n    public int get(int key) {\n        \n    }\n    \n    public void put(int key, int value) {\n        \n    }\n}\n",
      "javascript": "var LRUCache = function(capacity) {\n    \n};\n\nLRUCache.prototype.get = function(key) {\n    \n};\n\nLRUCache.prototype.put = function(key, value) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid lruCache() {\n    \n}\n"
    }
  },
  {
    "id": 150,
    "slug": "evaluate-reverse-polish-notation",
    "title": "150. Evaluate Reverse Polish Notation",
    "difficulty": "MEDIUM",
    "diffClass": "badge-medium",
    "category": "Stack",
    "acceptance": "52.1%",
    "desc": "<p>You are given an array of strings <code>tokens</code> that represents an arithmetic expression in a <strong>Reverse Polish Notation</strong> (RPN).</p><p>Evaluate the expression. Return <em>an integer that represents the value of the expression</em>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: tokens = [\"2\",\"1\",\"+\",\"3\",\"*\"]\nOutput: 9\nExplanation: ((2 + 1) * 3) = 9</code></pre></div><div class=\"example-box\"><div class=\"ex-title\">Example 2:</div><pre><code>Input: tokens = [\"4\",\"13\",\"5\",\"/\",\"+\"]\nOutput: 6\nExplanation: (4 + (13 / 5)) = 6</code></pre></div>",
    "constraints": [
      "1 <= tokens.length <= 10^4",
      "tokens[i] is either an operator: \"+\", \"-\", \"*\", or \"/\", or an integer in range [-200, 200]."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "tokens = [\"2\",\"1\",\"+\",\"3\",\"*\"]",
        "expected": "9"
      },
      {
        "title": "Test 2",
        "input": "tokens = [\"4\",\"13\",\"5\",\"/\",\"+\"]",
        "expected": "6"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def evalRPN(self, tokens: list[str]) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int evalRPN(vector<string>& tokens) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int evalRPN(String[] tokens) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar evalRPN = function(tokens) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid evaluateReversePolishNotation() {\n    \n}\n"
    }
  },
  {
    "id": 152,
    "slug": "maximum-product-subarray",
    "title": "152. Maximum Product Subarray",
    "difficulty": "MEDIUM",
    "diffClass": "badge-medium",
    "category": "Dynamic Programming",
    "acceptance": "35.4%",
    "desc": "<p>Given an integer array <code>nums</code>, find a subarray that has the largest product, and return <em>the product</em>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: nums = [2,3,-2,4]\nOutput: 6\nExplanation: [2,3] has the largest product 6.</code></pre></div><div class=\"example-box\"><div class=\"ex-title\">Example 2:</div><pre><code>Input: nums = [-2,0,-1]\nOutput: 0</code></pre></div>",
    "constraints": [
      "1 <= nums.length <= 2 * 10^4",
      "-10 <= nums[i] <= 10"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "nums = [2,3,-2,4]",
        "expected": "6"
      },
      {
        "title": "Test 2",
        "input": "nums = [-2,0,-1]",
        "expected": "0"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def maxProduct(self, nums: list[int]) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int maxProduct(vector<int>& nums) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int maxProduct(int[] nums) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar maxProduct = function(nums) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid maximumProductSubarray() {\n    \n}\n"
    }
  },
  {
    "id": 153,
    "slug": "find-minimum-in-rotated-sorted-array",
    "title": "153. Find Minimum in Rotated Sorted Array",
    "difficulty": "MEDIUM",
    "diffClass": "badge-medium",
    "category": "Binary Search",
    "acceptance": "51.4%",
    "desc": "<p>Suppose an array of length <code>n</code> sorted in ascending order is <strong>rotated</strong> between <code>1</code> and <code>n</code> times. Given the sorted rotated array <code>nums</code> of <strong>unique</strong> elements, return <em>the minimum element of this array</em>.</p><p>You must write an algorithm that runs in <code>O(log n)</code> time.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: nums = [3,4,5,1,2]\nOutput: 1\nExplanation: The original array was [1,2,3,4,5] rotated 3 times.</code></pre></div><div class=\"example-box\"><div class=\"ex-title\">Example 2:</div><pre><code>Input: nums = [4,5,6,7,0,1,2]\nOutput: 0</code></pre></div>",
    "constraints": [
      "n == nums.length",
      "1 <= n <= 5000",
      "-5000 <= nums[i] <= 5000",
      "All the integers of nums are unique."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "nums = [3,4,5,1,2]",
        "expected": "1"
      },
      {
        "title": "Test 2",
        "input": "nums = [4,5,6,7,0,1,2]",
        "expected": "0"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def findMin(self, nums: list[int]) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int findMin(vector<int>& nums) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int findMin(int[] nums) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar findMin = function(nums) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid findMinimumInRotatedSortedArray() {\n    \n}\n"
    }
  },
  {
    "id": 160,
    "slug": "intersection-of-two-linked-lists",
    "title": "160. Intersection of Two Linked Lists",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Linked List",
    "acceptance": "58.7%",
    "desc": "<p>Given the heads of two singly linked-lists <code>headA</code> and <code>headB</code>, return <em>the node at which the two lists intersect</em>. If the two linked lists have no intersection at all, return <code>null</code>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3\nOutput: Intersected at '8'</code></pre></div>",
    "constraints": [
      "The number of nodes of listA is in the m.",
      "The number of nodes of listB is in the n.",
      "1 <= m, n <= 3 * 10^4"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5]",
        "expected": "Reference to node 8"
      }
    ],
    "templates": {
      "python": "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\nclass Solution:\n    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode | None:\n        \n",
      "cpp": "/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode() : val(0), next(nullptr) {}\n *     ListNode(int x) : val(x), next(nullptr) {}\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\n * };\n */\nclass Solution {\npublic:\n    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {\n        \n    }\n};\n",
      "java": "/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {\n        \n    }\n}\n",
      "javascript": "/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @return {any}\n */\nvar getIntersectionNode = function(headA, headB) {\n    \n};\n",
      "c": "/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     struct ListNode *next;\n * };\n */\n/* Return type depends on problem specification */\nvoid intersectionOfTwoLinkedLists() {\n    \n}\n"
    }
  },
  {
    "id": 167,
    "slug": "two-sum-ii-input-array-is-sorted",
    "title": "167. Two Sum II - Input Array Is Sorted",
    "difficulty": "MEDIUM",
    "diffClass": "badge-medium",
    "category": "Two Pointers",
    "acceptance": "61.7%",
    "desc": "<p>Given a <strong>1-indexed</strong> array of integers <code>numbers</code> that is already <strong>sorted in non-decreasing order</strong>, find two numbers such that they add up to a specific <code>target</code> number.</p><p>Return <em>the indices of the two numbers, </em><code>[index1, index2]</code><em> as an integer array of length 2</em>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: numbers = [2,7,11,15], target = 9\nOutput: [1,2]\nExplanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].</code></pre></div>",
    "constraints": [
      "2 <= numbers.length <= 3 * 10^4",
      "-1000 <= numbers[i] <= 1000",
      "numbers is sorted in non-decreasing order."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "numbers = [2,7,11,15], target = 9",
        "expected": "[1,2]"
      },
      {
        "title": "Test 2",
        "input": "numbers = [2,3,4], target = 6",
        "expected": "[1,3]"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def twoSum(self, numbers: list[int], target: int) -> list[int]:\n        \n",
      "cpp": "class Solution {\npublic:\n    vector<int> twoSum(vector<int>& numbers, int target) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int[] twoSum(int[] numbers, int target) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar twoSum = function(numbers, target) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid twoSumIiInputArrayIsSorted() {\n    \n}\n"
    }
  },
  {
    "id": 169,
    "slug": "majority-element",
    "title": "169. Majority Element",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Arrays",
    "acceptance": "64.8%",
    "desc": "<p>Given an array <code>nums</code> of size <code>n</code>, return <em>the majority element</em>.</p><p>The majority element is the element that appears more than <code>⌊n / 2⌋</code> times. You may assume that the majority element always exists in the array.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: nums = [3,2,3]\nOutput: 3</code></pre></div><div class=\"example-box\"><div class=\"ex-title\">Example 2:</div><pre><code>Input: nums = [2,2,1,1,1,2,2]\nOutput: 2</code></pre></div>",
    "constraints": [
      "n == nums.length",
      "1 <= n <= 5 * 10^4",
      "-10^9 <= nums[i] <= 10^9"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "nums = [3,2,3]",
        "expected": "3"
      },
      {
        "title": "Test 2",
        "input": "nums = [2,2,1,1,1,2,2]",
        "expected": "2"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def majorityElement(self, nums: list[int]) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int majorityElement(vector<int>& nums) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int majorityElement(int[] nums) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar majorityElement = function(nums) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid majorityElement() {\n    \n}\n"
    }
  },
  {
    "id": 190,
    "slug": "reverse-bits",
    "title": "190. Reverse Bits",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Bit Manipulation",
    "acceptance": "61.1%",
    "desc": "<p>Reverse bits of a given 32 bits unsigned integer.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: n = 00000010100101000001111010011100\nOutput: 964176192 (00111001011110000010100101000000)</code></pre></div>",
    "constraints": [
      "The input must be a binary string of length 32"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "n = 43261596",
        "expected": "964176192"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def reverseBits(self, n: int) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    uint32_t reverseBits(uint32_t n) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int reverseBits(int n) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar reverseBits = function(n) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid reverseBits() {\n    \n}\n"
    }
  },
  {
    "id": 191,
    "slug": "number-of-1-bits",
    "title": "191. Number of 1 Bits",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Bit Manipulation",
    "acceptance": "73.2%",
    "desc": "<p>Write a function that takes the binary representation of a positive integer and returns the number of <strong>set bits</strong> it has (also known as the <em>Hamming weight</em>).</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: n = 11\nOutput: 3\nExplanation: The input binary string 1011 has a total of three set bits.</code></pre></div><div class=\"example-box\"><div class=\"ex-title\">Example 2:</div><pre><code>Input: n = 128\nOutput: 1</code></pre></div>",
    "constraints": [
      "1 <= n <= 2^31 - 1"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "n = 11",
        "expected": "3"
      },
      {
        "title": "Test 2",
        "input": "n = 128",
        "expected": "1"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def hammingWeight(self, n: int) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int hammingWeight(int n) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int hammingWeight(int n) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar hammingWeight = function(n) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid numberOf-1Bits() {\n    \n}\n"
    }
  },
  {
    "id": 207,
    "slug": "course-schedule",
    "title": "207. Course Schedule",
    "difficulty": "MEDIUM",
    "diffClass": "badge-medium",
    "category": "Graphs",
    "acceptance": "47.5%",
    "desc": "<p>There are a total of <code>numCourses</code> courses you have to take, labeled from <code>0</code> to <code>numCourses - 1</code>. You are given an array <code>prerequisites</code> where <code>prerequisites[i] = [a_i, b_i]</code> indicates that you <strong>must</strong> take course <code>b_i</code> first if you want to take course <code>a_i</code>.</p><p>Return <code>true</code> if you can finish all courses. Otherwise, return <code>false</code>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: numCourses = 2, prerequisites = [[1,0]]\nOutput: true\nExplanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.</code></pre></div><div class=\"example-box\"><div class=\"ex-title\">Example 2:</div><pre><code>Input: numCourses = 2, prerequisites = [[1,0],[0,1]]\nOutput: false</code></pre></div>",
    "constraints": [
      "1 <= numCourses <= 2000",
      "0 <= prerequisites.length <= 5000",
      "prerequisites[i].length == 2",
      "All the pairs prerequisites[i] are unique."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "numCourses = 2, prerequisites = [[1,0]]",
        "expected": "true"
      },
      {
        "title": "Test 2",
        "input": "numCourses = 2, prerequisites = [[1,0],[0,1]]",
        "expected": "false"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def canFinish(self, numCourses: int, prerequisites: list[list[int]]) -> bool:\n        \n",
      "cpp": "class Solution {\npublic:\n    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public boolean canFinish(int numCourses, int[][] prerequisites) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar canFinish = function(numCourses, prerequisites) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid courseSchedule() {\n    \n}\n"
    }
  },
  {
    "id": 208,
    "slug": "implement-trie-prefix-tree",
    "title": "208. Implement Trie (Prefix Tree)",
    "difficulty": "MEDIUM",
    "diffClass": "badge-medium",
    "category": "Trie",
    "acceptance": "64.9%",
    "desc": "<p>A <strong>trie</strong> (pronounced as \"try\") or <strong>prefix tree</strong> is a tree data structure used to efficiently store and retrieve keys in a dataset of strings.</p><p>Implement the <code>Trie</code> class:</p><ul><li><code>Trie()</code> Initializes the trie object.</li><li><code>void insert(String word)</code> Inserts the string <code>word</code> into the trie.</li><li><code>boolean search(String word)</code> Returns <code>true</code> if the string <code>word</code> is in the trie.</li><li><code>boolean startsWith(String prefix)</code> Returns <code>true</code> if there is a previously inserted string <code>word</code> that has the prefix <code>prefix</code>.</li></ul>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input\n[\"Trie\", \"insert\", \"search\", \"search\", \"startsWith\", \"insert\", \"search\"]\n[[], [\"apple\"], [\"apple\"], [\"app\"], [\"app\"], [\"app\"], [\"app\"]]\nOutput\n[null, null, true, false, true, null, true]</code></pre></div>",
    "constraints": [
      "1 <= word.length, prefix.length <= 2000",
      "word and prefix consist only of lowercase English letters.",
      "At most 3 * 10^4 calls in total will be made to insert, search, and startsWith."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "insert(\"apple\"), search(\"apple\"), search(\"app\"), startsWith(\"app\")",
        "expected": "[null, true, false, true]"
      }
    ],
    "templates": {
      "python": "class Trie:\n    def __init__(self):\n        pass\n\n    def insert(self, word: str) -> None:\n        pass\n\n    def search(self, word: str) -> bool:\n        pass\n\n    def startsWith(self, prefix: str) -> bool:\n        pass\n",
      "cpp": "class Trie {\npublic:\n    Trie() {\n        \n    }\n    \n    void insert(string word) {\n        \n    }\n    \n    bool search(string word) {\n        \n    }\n    \n    bool startsWith(string prefix) {\n        \n    }\n};\n",
      "java": "class Trie {\n    public Trie() {\n        \n    }\n    \n    public void insert(String word) {\n        \n    }\n    \n    public boolean search(String word) {\n        \n    }\n    \n    public boolean startsWith(String prefix) {\n        \n    }\n}\n",
      "javascript": "var Trie = function() {\n    \n};\n\nTrie.prototype.insert = function(word) {\n    \n};\n\nTrie.prototype.search = function(word) {\n    \n};\n\nTrie.prototype.startsWith = function(prefix) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid implementTriePrefixTree() {\n    \n}\n"
    }
  },
  {
    "id": 215,
    "slug": "kth-largest-element-in-an-array",
    "title": "215. Kth Largest Element in an Array",
    "difficulty": "MEDIUM",
    "diffClass": "badge-medium",
    "category": "Heap",
    "acceptance": "67.0%",
    "desc": "<p>Given an integer array <code>nums</code> and an integer <code>k</code>, return <em>the <code>k<sup>th</sup></code> largest element in the array</em>.</p><p>Note that it is the <code>k<sup>th</sup></code> largest element in the sorted order, not the <code>k<sup>th</sup></code> distinct element.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: nums = [3,2,1,5,6,4], k = 2\nOutput: 5</code></pre></div><div class=\"example-box\"><div class=\"ex-title\">Example 2:</div><pre><code>Input: nums = [3,2,3,1,2,4,5,5,6], k = 4\nOutput: 4</code></pre></div>",
    "constraints": [
      "1 <= k <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "nums = [3,2,1,5,6,4], k = 2",
        "expected": "5"
      },
      {
        "title": "Test 2",
        "input": "nums = [3,2,3,1,2,4,5,5,6], k = 4",
        "expected": "4"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def findKthLargest(self, nums: list[int], k: int) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int findKthLargest(vector<int>& nums, int k) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int findKthLargest(int[] nums, int k) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar findKthLargest = function(nums, k) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid kthLargestElementInAnArray() {\n    \n}\n"
    }
  },
  {
    "id": 230,
    "slug": "kth-smallest-element-in-a-bst",
    "title": "230. Kth Smallest Element in a BST",
    "difficulty": "MEDIUM",
    "diffClass": "badge-medium",
    "category": "Trees",
    "acceptance": "72.3%",
    "desc": "<p>Given the <code>root</code> of a binary search tree, and an integer <code>k</code>, return <em>the <code>k<sup>th</sup></code> smallest value (<strong>1-indexed</strong>) of all the values of the nodes in the tree</em>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: root = [3,1,4,null,2], k = 1\nOutput: 1</code></pre></div>",
    "constraints": [
      "The number of nodes in the tree is n.",
      "1 <= k <= n <= 10^4",
      "0 <= Node.val <= 10^4"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "root = [3,1,4,null,2], k = 1",
        "expected": "1"
      }
    ],
    "templates": {
      "python": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def kthSmallest(self, root: TreeNode | None, k: int) -> int:\n        \n",
      "cpp": "/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    int kthSmallest(TreeNode* root, int k) {\n        \n    }\n};\n",
      "java": "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public int kthSmallest(TreeNode root, int k) {\n        \n    }\n}\n",
      "javascript": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @return {any}\n */\nvar kthSmallest = function(root, k) {\n    \n};\n",
      "c": "/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     struct TreeNode *left;\n *     struct TreeNode *right;\n * };\n */\n/* Return type depends on problem specification */\nvoid kthSmallestElementInABst() {\n    \n}\n"
    }
  },
  {
    "id": 234,
    "slug": "palindrome-linked-list",
    "title": "234. Palindrome Linked List",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Linked List",
    "acceptance": "52.3%",
    "desc": "<p>Given the <code>head</code> of a singly linked list, return <code>true</code><em> if it is a </em><span data-keyword=\"palindrome-sequence\"><em>palindrome</em></span><em> or </em><code>false</code><em> otherwise</em>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: head = [1,2,2,1]\nOutput: true</code></pre></div><div class=\"example-box\"><div class=\"ex-title\">Example 2:</div><pre><code>Input: head = [1,2]\nOutput: false</code></pre></div>",
    "constraints": [
      "The number of nodes in the list is in the range [1, 10^5].",
      "0 <= Node.val <= 9"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "head = [1,2,2,1]",
        "expected": "true"
      },
      {
        "title": "Test 2",
        "input": "head = [1,2]",
        "expected": "false"
      }
    ],
    "templates": {
      "python": "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\nclass Solution:\n    def isPalindrome(self, head: ListNode | None) -> bool:\n        \n",
      "cpp": "/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode() : val(0), next(nullptr) {}\n *     ListNode(int x) : val(x), next(nullptr) {}\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\n * };\n */\nclass Solution {\npublic:\n    bool isPalindrome(ListNode* head) {\n        \n    }\n};\n",
      "java": "/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public boolean isPalindrome(ListNode head) {\n        \n    }\n}\n",
      "javascript": "/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @return {any}\n */\nvar isPalindrome = function(head) {\n    \n};\n",
      "c": "/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     struct ListNode *next;\n * };\n */\n/* Return type depends on problem specification */\nvoid palindromeLinkedList() {\n    \n}\n"
    }
  },
  {
    "id": 235,
    "slug": "lowest-common-ancestor-of-a-binary-search-tree",
    "title": "235. Lowest Common Ancestor of a Binary Search Tree",
    "difficulty": "MEDIUM",
    "diffClass": "badge-medium",
    "category": "Trees",
    "acceptance": "64.5%",
    "desc": "<p>Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.</p><p>According to the <strong>definition of LCA on Wikipedia</strong>: \"The lowest common ancestor is defined between two nodes <code>p</code> and <code>q</code> as the lowest node in <code>T</code> that has both <code>p</code> and <code>q</code> as descendants (where we allow a node to be a descendant of itself).\"</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8\nOutput: 6\nExplanation: The LCA of nodes 2 and 8 is 6.</code></pre></div>",
    "constraints": [
      "The number of nodes in the tree is in the range [2, 10^5].",
      "-10^9 <= Node.val <= 10^9",
      "All Node.val are unique.",
      "p != q",
      "p and q will exist in the BST."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "root = [6,2,8,0,4,7,9], p = 2, q = 8",
        "expected": "6"
      }
    ],
    "templates": {
      "python": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':\n        \n",
      "cpp": "/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {\n        \n    }\n};\n",
      "java": "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n        \n    }\n}\n",
      "javascript": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @return {any}\n */\nvar lowestCommonAncestor = function(root, p, q) {\n    \n};\n",
      "c": "/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     struct TreeNode *left;\n *     struct TreeNode *right;\n * };\n */\n/* Return type depends on problem specification */\nvoid lowestCommonAncestorOfABinarySearchTree() {\n    \n}\n"
    }
  },
  {
    "id": 236,
    "slug": "lowest-common-ancestor-of-a-binary-tree",
    "title": "236. Lowest Common Ancestor of a Binary Tree",
    "difficulty": "MEDIUM",
    "diffClass": "badge-medium",
    "category": "Trees",
    "acceptance": "62.4%",
    "desc": "<p>Given a binary tree, find the lowest common ancestor (LCA) of two given nodes <code>p</code> and <code>q</code>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1\nOutput: 3</code></pre></div>",
    "constraints": [
      "The number of nodes in the tree is in the range [2, 10^5].",
      "-10^9 <= Node.val <= 10^9",
      "All Node.val are unique.",
      "p != q"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "root = [3,5,1,6,2,0,8], p = 5, q = 1",
        "expected": "3"
      }
    ],
    "templates": {
      "python": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':\n        \n",
      "cpp": "/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {\n        \n    }\n};\n",
      "java": "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n        \n    }\n}\n",
      "javascript": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @return {any}\n */\nvar lowestCommonAncestor = function(root, p, q) {\n    \n};\n",
      "c": "/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     struct TreeNode *left;\n *     struct TreeNode *right;\n * };\n */\n/* Return type depends on problem specification */\nvoid lowestCommonAncestorOfABinaryTree() {\n    \n}\n"
    }
  },
  {
    "id": 239,
    "slug": "sliding-window-maximum",
    "title": "239. Sliding Window Maximum",
    "difficulty": "HARD",
    "diffClass": "badge-hard",
    "category": "Sliding Window",
    "acceptance": "46.7%",
    "desc": "<p>You are given an array of integers <code>nums</code>, there is a sliding window of size <code>k</code> which is moving from the very left of the array to the very right. You can only see the <code>k</code> numbers in the window. Each time the sliding window moves right by one position.</p><p>Return <em>the max sliding window</em>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: nums = [1,3,-1,-3,5,3,6,7], k = 3\nOutput: [3,3,5,5,6,7]\nExplanation: \nWindow position                Max\n---------------               -----\n[1  3  -1] -3  5  3  6  7       3\n 1 [3  -1  -3] 5  3  6  7       3\n 1  3 [-1  -3  5] 3  6  7       5\n 1  3  -1 [-3  5  3] 6  7       5\n 1  3  -1  -3 [5  3  6] 7       6\n 1  3  -1  -3  5 [3  6  7]      7</code></pre></div>",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4",
      "1 <= k <= nums.length"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "nums = [1,3,-1,-3,5,3,6,7], k = 3",
        "expected": "[3,3,5,5,6,7]"
      },
      {
        "title": "Test 2",
        "input": "nums = [1], k = 1",
        "expected": "[1]"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def maxSlidingWindow(self, nums: list[int], k: int) -> list[int]:\n        \n",
      "cpp": "class Solution {\npublic:\n    vector<int> maxSlidingWindow(vector<int>& nums, int k) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int[] maxSlidingWindow(int[] nums, int k) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar maxSlidingWindow = function(nums, k) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid slidingWindowMaximum() {\n    \n}\n"
    }
  },
  {
    "id": 268,
    "slug": "missing-number",
    "title": "268. Missing Number",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Bit Manipulation",
    "acceptance": "66.8%",
    "desc": "<p>Given an array <code>nums</code> containing <code>n</code> distinct numbers in the range <code>[0, n]</code>, return <em>the only number in the range that is missing from the array</em>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: nums = [3,0,1]\nOutput: 2\nExplanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number.</code></pre></div><div class=\"example-box\"><div class=\"ex-title\">Example 2:</div><pre><code>Input: nums = [0,1]\nOutput: 2</code></pre></div>",
    "constraints": [
      "n == nums.length",
      "1 <= n <= 10^4",
      "0 <= nums[i] <= n",
      "All the numbers of nums are unique."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "nums = [3,0,1]",
        "expected": "2"
      },
      {
        "title": "Test 2",
        "input": "nums = [0,1]",
        "expected": "2"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def missingNumber(self, nums: list[int]) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int missingNumber(vector<int>& nums) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int missingNumber(int[] nums) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar missingNumber = function(nums) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid missingNumber() {\n    \n}\n"
    }
  },
  {
    "id": 287,
    "slug": "find-the-duplicate-number",
    "title": "287. Find the Duplicate Number",
    "difficulty": "MEDIUM",
    "diffClass": "badge-medium",
    "category": "Two Pointers",
    "acceptance": "60.5%",
    "desc": "<p>Given an array of integers <code>nums</code> containing <code>n + 1</code> integers where each integer is in the range <code>[1, n]</code> inclusive.</p><p>There is only <strong>one repeated number</strong> in <code>nums</code>, return <em>this repeated number</em>.</p><p>You must solve the problem <strong>without</strong> modifying the array <code>nums</code> and using only constant extra space.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: nums = [1,3,4,2,2]\nOutput: 2</code></pre></div><div class=\"example-box\"><div class=\"ex-title\">Example 2:</div><pre><code>Input: nums = [3,1,3,4,2]\nOutput: 3</code></pre></div>",
    "constraints": [
      "1 <= n <= 10^5",
      "nums.length == n + 1",
      "1 <= nums[i] <= n",
      "All the integers in nums appear only once except for precisely one integer which appears two or more times."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "nums = [1,3,4,2,2]",
        "expected": "2"
      },
      {
        "title": "Test 2",
        "input": "nums = [3,1,3,4,2]",
        "expected": "3"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def findDuplicate(self, nums: list[int]) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int findDuplicate(vector<int>& nums) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int findDuplicate(int[] nums) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar findDuplicate = function(nums) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid findTheDuplicateNumber() {\n    \n}\n"
    }
  },
  {
    "id": 295,
    "slug": "find-median-from-data-stream",
    "title": "295. Find Median from Data Stream",
    "difficulty": "HARD",
    "diffClass": "badge-hard",
    "category": "Heap",
    "acceptance": "51.9%",
    "desc": "<p>The <strong>median</strong> is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.</p><p>Implement the <code>MedianFinder</code> class:</p><ul><li><code>MedianFinder()</code> initializes the <code>MedianFinder</code> object.</li><li><code>void addNum(int num)</code> adds the integer <code>num</code> from the data stream to the data structure.</li><li><code>double findMedian()</code> returns the median of all elements so far.</li></ul>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input\n[\"MedianFinder\", \"addNum\", \"addNum\", \"findMedian\", \"addNum\", \"findMedian\"]\n[[], [1], [2], [], [3], []]\nOutput\n[null, null, null, 1.5, null, 2.0]</code></pre></div>",
    "constraints": [
      "-10^5 <= num <= 10^5",
      "There will be at least one element in the data structure before calling findMedian.",
      "At most 5 * 10^4 calls will be made to addNum and findMedian."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "add(1), add(2), findMedian(), add(3), findMedian()",
        "expected": "[null, null, 1.5, null, 2.0]"
      }
    ],
    "templates": {
      "python": "class MedianFinder:\n    def __init__(self):\n        pass\n\n    def addNum(self, num: int) -> None:\n        pass\n\n    def findMedian(self) -> float:\n        pass\n",
      "cpp": "class MedianFinder {\npublic:\n    MedianFinder() {\n        \n    }\n    \n    void addNum(int num) {\n        \n    }\n    \n    double findMedian() {\n        \n    }\n};\n",
      "java": "class MedianFinder {\n    public MedianFinder() {\n        \n    }\n    \n    public void addNum(int num) {\n        \n    }\n    \n    public double findMedian() {\n        \n    }\n}\n",
      "javascript": "var MedianFinder = function() {\n    \n};\n\nMedianFinder.prototype.addNum = function(num) {\n    \n};\n\nMedianFinder.prototype.findMedian = function() {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid findMedianFromDataStream() {\n    \n}\n"
    }
  },
  {
    "id": 338,
    "slug": "counting-bits",
    "title": "338. Counting Bits",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Bit Manipulation",
    "acceptance": "78.5%",
    "desc": "<p>Given an integer <code>n</code>, return <em>an array </em><code>ans</code><em> of length </em><code>n + 1</code><em> such that for each </em><code>i</code><em> (</em><code>0 <= i <= n</code><em>), </em><code>ans[i]</code><em> is the <strong>number of </strong></em><code>1</code><em><strong>'s</strong> in the binary representation of </em><code>i</code>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: n = 2\nOutput: [0,1,1]\nExplanation:\n0 --> 0\n1 --> 1\n2 --> 10</code></pre></div><div class=\"example-box\"><div class=\"ex-title\">Example 2:</div><pre><code>Input: n = 5\nOutput: [0,1,1,2,1,2]</code></pre></div>",
    "constraints": [
      "0 <= n <= 10^5"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "n = 2",
        "expected": "[0,1,1]"
      },
      {
        "title": "Test 2",
        "input": "n = 5",
        "expected": "[0,1,1,2,1,2]"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def countBits(self, n: int) -> list[int]:\n        \n",
      "cpp": "class Solution {\npublic:\n    vector<int> countBits(int n) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int[] countBits(int n) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar countBits = function(n) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid countingBits() {\n    \n}\n"
    }
  },
  {
    "id": 371,
    "slug": "sum-of-two-integers",
    "title": "371. Sum of Two Integers",
    "difficulty": "MEDIUM",
    "diffClass": "badge-medium",
    "category": "Bit Manipulation",
    "acceptance": "52.3%",
    "desc": "<p>Given two integers <code>a</code> and <code>b</code>, return <em>the sum of the two integers without using the operators <code>+</code> and <code>-</code></em>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: a = 1, b = 2\nOutput: 3</code></pre></div><div class=\"example-box\"><div class=\"ex-title\">Example 2:</div><pre><code>Input: a = 2, b = 3\nOutput: 5</code></pre></div>",
    "constraints": [
      "-1000 <= a, b <= 1000"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "a = 1, b = 2",
        "expected": "3"
      },
      {
        "title": "Test 2",
        "input": "a = 2, b = 3",
        "expected": "5"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def getSum(self, a: int, b: int) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int getSum(int a, int b) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int getSum(int a, int b) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar getSum = function(a, b) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid sumOfTwoIntegers() {\n    \n}\n"
    }
  },
  {
    "id": 387,
    "slug": "first-unique-character-in-a-string",
    "title": "387. First Unique Character in a String",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Hash Table",
    "acceptance": "61.4%",
    "desc": "<p>Given a string <code>s</code>, <em>find the first non-repeating character in it and return its index</em>. If it does not exist, return <code>-1</code>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: s = \"leetcode\"\nOutput: 0</code></pre></div><div class=\"example-box\"><div class=\"ex-title\">Example 2:</div><pre><code>Input: s = \"loveleetcode\"\nOutput: 2</code></pre></div>",
    "constraints": [
      "1 <= s.length <= 10^5",
      "s consists of only lowercase English letters."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "s = \"leetcode\"",
        "expected": "0"
      },
      {
        "title": "Test 2",
        "input": "s = \"loveleetcode\"",
        "expected": "2"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def firstUniqChar(self, s: str) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int firstUniqChar(string s) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int firstUniqChar(String s) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar firstUniqChar = function(s) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid firstUniqueCharacterInAString() {\n    \n}\n"
    }
  },
  {
    "id": 416,
    "slug": "partition-equal-subset-sum",
    "title": "416. Partition Equal Subset Sum",
    "difficulty": "MEDIUM",
    "diffClass": "badge-medium",
    "category": "Dynamic Programming",
    "acceptance": "47.1%",
    "desc": "<p>Given an integer array <code>nums</code>, return <code>true</code> <em>if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or </em><code>false</code><em> otherwise</em>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: nums = [1,5,11,5]\nOutput: true\nExplanation: The array can be partitioned as [1, 5, 5] and [11].</code></pre></div><div class=\"example-box\"><div class=\"ex-title\">Example 2:</div><pre><code>Input: nums = [1,2,3,5]\nOutput: false</code></pre></div>",
    "constraints": [
      "1 <= nums.length <= 200",
      "1 <= nums[i] <= 100"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "nums = [1,5,11,5]",
        "expected": "true"
      },
      {
        "title": "Test 2",
        "input": "nums = [1,2,3,5]",
        "expected": "false"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def canPartition(self, nums: list[int]) -> bool:\n        \n",
      "cpp": "class Solution {\npublic:\n    bool canPartition(vector<int>& nums) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public boolean canPartition(int[] nums) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar canPartition = function(nums) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid partitionEqualSubsetSum() {\n    \n}\n"
    }
  },
  {
    "id": 424,
    "slug": "longest-repeating-character-replacement",
    "title": "424. Longest Repeating Character Replacement",
    "difficulty": "MEDIUM",
    "diffClass": "badge-medium",
    "category": "Sliding Window",
    "acceptance": "54.5%",
    "desc": "<p>You are given a string <code>s</code> and an integer <code>k</code>. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most <code>k</code> times.</p><p>Return <em>the length of the longest substring containing the same letter you can get after performing the above operations</em>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: s = \"ABAB\", k = 2\nOutput: 4\nExplanation: Replace the two 'A's with two 'B's or vice versa.</code></pre></div><div class=\"example-box\"><div class=\"ex-title\">Example 2:</div><pre><code>Input: s = \"AABABBA\", k = 1\nOutput: 4</code></pre></div>",
    "constraints": [
      "1 <= s.length <= 10^5",
      "s consists of only uppercase English letters.",
      "0 <= k <= s.length"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "s = \"ABAB\", k = 2",
        "expected": "4"
      },
      {
        "title": "Test 2",
        "input": "s = \"AABABBA\", k = 1",
        "expected": "4"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def characterReplacement(self, s: str, k: int) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int characterReplacement(string s, int k) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int characterReplacement(String s, int k) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar characterReplacement = function(s, k) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid longestRepeatingCharacterReplacement() {\n    \n}\n"
    }
  },
  {
    "id": 435,
    "slug": "non-overlapping-intervals",
    "title": "435. Non-overlapping Intervals",
    "difficulty": "MEDIUM",
    "diffClass": "badge-medium",
    "category": "Greedy",
    "acceptance": "53.6%",
    "desc": "<p>Given an array of intervals <code>intervals</code> where <code>intervals[i] = [start_i, end_i]</code>, return <em>the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping</em>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: intervals = [[1,2],[2,3],[3,4],[1,3]]\nOutput: 1\nExplanation: [1,3] can be removed and the rest of the intervals are non-overlapping.</code></pre></div>",
    "constraints": [
      "1 <= intervals.length <= 10^5",
      "intervals[i].length == 2",
      "-5 * 10^4 <= start_i < end_i <= 5 * 10^4"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "intervals = [[1,2],[2,3],[3,4],[1,3]]",
        "expected": "1"
      },
      {
        "title": "Test 2",
        "input": "intervals = [[1,2],[1,2],[1,2]]",
        "expected": "2"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def eraseOverlapIntervals(self, intervals: list[list[int]]) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int eraseOverlapIntervals(vector<vector<int>>& intervals) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int eraseOverlapIntervals(int[][] intervals) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar eraseOverlapIntervals = function(intervals) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid nonOverlappingIntervals() {\n    \n}\n"
    }
  },
  {
    "id": 543,
    "slug": "diameter-of-binary-tree",
    "title": "543. Diameter of Binary Tree",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Trees",
    "acceptance": "60.8%",
    "desc": "<p>Given the <code>root</code> of a binary tree, return <em>the length of the <strong>diameter</strong> of the tree</em>.</p><p>The <strong>diameter</strong> of a binary tree is the <strong>length</strong> of the longest path between any two nodes in a tree. This path may or may not pass through the <code>root</code>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: root = [1,2,3,4,5]\nOutput: 3\nExplanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].</code></pre></div>",
    "constraints": [
      "The number of nodes in the tree is in the range [1, 10^4].",
      "-100 <= Node.val <= 100"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "root = [1,2,3,4,5]",
        "expected": "3"
      },
      {
        "title": "Test 2",
        "input": "root = [1,2]",
        "expected": "1"
      }
    ],
    "templates": {
      "python": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def diameterOfBinaryTree(self, root: TreeNode | None) -> int:\n        \n",
      "cpp": "/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    int diameterOfBinaryTree(TreeNode* root) {\n        \n    }\n};\n",
      "java": "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public int diameterOfBinaryTree(TreeNode root) {\n        \n    }\n}\n",
      "javascript": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @return {any}\n */\nvar diameterOfBinaryTree = function(root) {\n    \n};\n",
      "c": "/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     struct TreeNode *left;\n *     struct TreeNode *right;\n * };\n */\n/* Return type depends on problem specification */\nvoid diameterOfBinaryTree() {\n    \n}\n"
    }
  },
  {
    "id": 567,
    "slug": "permutation-in-string",
    "title": "567. Permutation in String",
    "difficulty": "MEDIUM",
    "diffClass": "badge-medium",
    "category": "Sliding Window",
    "acceptance": "44.8%",
    "desc": "<p>Given two strings <code>s1</code> and <code>s2</code>, return <code>true</code> <em>if </em><code>s2</code><em> contains a permutation of </em><code>s1</code><em>, or </em><code>false</code><em> otherwise</em>.</p><p>In other words, return <code>true</code> if one of <code>s1</code>'s permutations is the substring of <code>s2</code>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: s1 = \"ab\", s2 = \"eidbaooo\"\nOutput: true\nExplanation: s2 contains one permutation of s1 (\"ba\").</code></pre></div><div class=\"example-box\"><div class=\"ex-title\">Example 2:</div><pre><code>Input: s1 = \"ab\", s2 = \"eidboaoo\"\nOutput: false</code></pre></div>",
    "constraints": [
      "1 <= s1.length, s2.length <= 10^4",
      "s1 and s2 consist of lowercase English letters."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "s1 = \"ab\", s2 = \"eidbaooo\"",
        "expected": "true"
      },
      {
        "title": "Test 2",
        "input": "s1 = \"ab\", s2 = \"eidboaoo\"",
        "expected": "false"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def checkInclusion(self, s1: str, s2: str) -> bool:\n        \n",
      "cpp": "class Solution {\npublic:\n    bool checkInclusion(string s1, string s2) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public boolean checkInclusion(String s1, String s2) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar checkInclusion = function(s1, s2) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid permutationInString() {\n    \n}\n"
    }
  },
  {
    "id": 572,
    "slug": "subtree-of-another-tree",
    "title": "572. Subtree of Another Tree",
    "difficulty": "EASY",
    "diffClass": "badge-easy",
    "category": "Trees",
    "acceptance": "48.2%",
    "desc": "<p>Given the roots of two binary trees <code>root</code> and <code>subRoot</code>, return <code>true</code> if there is a subtree of <code>root</code> with the same structure and node values of<code> subRoot</code> and <code>false</code> otherwise.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: root = [3,4,5,1,2], subRoot = [4,1,2]\nOutput: true</code></pre></div>",
    "constraints": [
      "The number of nodes in the root tree is in the range [1, 2000].",
      "The number of nodes in the subRoot tree is in the range [1, 1000]."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "root = [3,4,5,1,2], subRoot = [4,1,2]",
        "expected": "true"
      }
    ],
    "templates": {
      "python": "# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def isSubtree(self, root: TreeNode | None, subRoot: TreeNode | None) -> bool:\n        \n",
      "cpp": "/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    bool isSubtree(TreeNode* root, TreeNode* subRoot) {\n        \n    }\n};\n",
      "java": "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public private boolean isSame(TreeNode p, TreeNode q) {\n        \n    }\n}\n",
      "javascript": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @return {any}\n */\nvar isSubtree = function(root, subRoot) {\n    \n};\n",
      "c": "/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     struct TreeNode *left;\n *     struct TreeNode *right;\n * };\n */\n/* Return type depends on problem specification */\nvoid subtreeOfAnotherTree() {\n    \n}\n"
    }
  },
  {
    "id": 647,
    "slug": "palindromic-substrings",
    "title": "647. Palindromic Substrings",
    "difficulty": "MEDIUM",
    "diffClass": "badge-medium",
    "category": "Dynamic Programming",
    "acceptance": "69.5%",
    "desc": "<p>Given a string <code>s</code>, return <em>the number of <strong>palindromic substrings</strong> in it</em>.</p><p>A string is a <strong>palindrome</strong> when it reads the same backward as forward.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: s = \"abc\"\nOutput: 3\nExplanation: Three palindromic strings: \"a\", \"b\", \"c\".</code></pre></div><div class=\"example-box\"><div class=\"ex-title\">Example 2:</div><pre><code>Input: s = \"aaa\"\nOutput: 6\nExplanation: Six palindromic strings: \"a\", \"a\", \"a\", \"aa\", \"aa\", \"aaa\".</code></pre></div>",
    "constraints": [
      "1 <= s.length <= 1000",
      "s consists of lowercase English letters."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "s = \"abc\"",
        "expected": "3"
      },
      {
        "title": "Test 2",
        "input": "s = \"aaa\"",
        "expected": "6"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def countSubstrings(self, s: str) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int countSubstrings(string s) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int countSubstrings(String s) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar countSubstrings = function(s) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid palindromicSubstrings() {\n    \n}\n"
    }
  },
  {
    "id": 739,
    "slug": "daily-temperatures",
    "title": "739. Daily Temperatures",
    "difficulty": "MEDIUM",
    "diffClass": "badge-medium",
    "category": "Stack",
    "acceptance": "66.1%",
    "desc": "<p>Given an array of integers <code>temperatures</code> represents the daily temperatures, return <em>an array</em> <code>answer</code> <em>such that</em> <code>answer[i]</code> <em>is the number of days you have to wait after the</em> <code>i<sup>th</sup></code> <em>day to get a warmer temperature</em>. If there is no future day for which this is possible, keep <code>answer[i] == 0</code> instead.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: temperatures = [73,74,75,71,69,72,76,73]\nOutput: [1,1,4,2,1,1,0,0]</code></pre></div>",
    "constraints": [
      "1 <= temperatures.length <= 10^5",
      "30 <= temperatures[i] <= 100"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "temperatures = [73,74,75,71,69,72,76,73]",
        "expected": "[1,1,4,2,1,1,0,0]"
      },
      {
        "title": "Test 2",
        "input": "temperatures = [30,40,50,60]",
        "expected": "[1,1,1,0]"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def dailyTemperatures(self, temperatures: list[int]) -> list[int]:\n        \n",
      "cpp": "class Solution {\npublic:\n    vector<int> dailyTemperatures(vector<int>& temperatures) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int[] dailyTemperatures(int[] temperatures) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar dailyTemperatures = function(temperatures) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid dailyTemperatures() {\n    \n}\n"
    }
  },
  {
    "id": 875,
    "slug": "koko-eating-bananas",
    "title": "875. Koko Eating Bananas",
    "difficulty": "MEDIUM",
    "diffClass": "badge-medium",
    "category": "Binary Search",
    "acceptance": "50.1%",
    "desc": "<p>Koko loves to eat bananas. There are <code>n</code> piles of bananas, the <code>i<sup>th</sup></code> pile has <code>piles[i]</code> bananas. The guards have gone and will come back in <code>h</code> hours.</p><p>Koko can decide her bananas-per-hour eating speed of <code>k</code>. Each hour, she chooses some pile of bananas and eats <code>k</code> bananas from that pile. If the pile has less than <code>k</code> bananas, she eats all of them instead and will not eat any more bananas during this hour.</p><p>Return <em>the minimum integer</em> <code>k</code> <em>such that she can eat all the bananas within</em> <code>h</code> <em>hours</em>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: piles = [3,6,7,11], h = 8\nOutput: 4</code></pre></div><div class=\"example-box\"><div class=\"ex-title\">Example 2:</div><pre><code>Input: piles = [30,11,23,4,20], h = 5\nOutput: 30</code></pre></div>",
    "constraints": [
      "1 <= piles.length <= 10^4",
      "piles.length <= h <= 10^9",
      "1 <= piles[i] <= 10^9"
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "piles = [3,6,7,11], h = 8",
        "expected": "4"
      },
      {
        "title": "Test 2",
        "input": "piles = [30,11,23,4,20], h = 5",
        "expected": "30"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def minEatingSpeed(self, piles: list[int], h: int) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int minEatingSpeed(vector<int>& piles, int h) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int minEatingSpeed(int[] piles, int h) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar minEatingSpeed = function(piles, h) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid kokoEatingBananas() {\n    \n}\n"
    }
  },
  {
    "id": 994,
    "slug": "rotting-oranges",
    "title": "994. Rotting Oranges",
    "difficulty": "MEDIUM",
    "diffClass": "badge-medium",
    "category": "Graphs",
    "acceptance": "53.9%",
    "desc": "<p>You are given an <code>m x n</code> grid where each cell can have one of three values:</p><ul><li><code>0</code> representing an empty cell,</li><li><code>1</code> representing a fresh orange, or</li><li><code>2</code> representing a rotten orange.</li></ul><p>Every minute, any fresh orange that is <strong>4-directionally adjacent</strong> to a rotten orange becomes rotten.</p><p>Return <em>the minimum number of minutes that must elapse until no cell has a fresh orange</em>. If this is impossible, return <code>-1</code>.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: grid = [[2,1,1],[1,1,0],[0,1,1]]\nOutput: 4</code></pre></div>",
    "constraints": [
      "m == grid.length",
      "n == grid[i].length",
      "1 <= m, n <= 10",
      "grid[i][j] is 0, 1, or 2."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "grid = [[2,1,1],[1,1,0],[0,1,1]]",
        "expected": "4"
      },
      {
        "title": "Test 2",
        "input": "grid = [[2,1,1],[0,1,1],[1,0,1]]",
        "expected": "-1"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def orangesRotting(self, grid: list[list[int]]) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int orangesRotting(vector<vector<int>>& grid) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int orangesRotting(int[][] grid) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar orangesRotting = function(grid) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid rottingOranges() {\n    \n}\n"
    }
  },
  {
    "id": 1143,
    "slug": "longest-common-subsequence",
    "title": "1143. Longest Common Subsequence",
    "difficulty": "MEDIUM",
    "diffClass": "badge-medium",
    "category": "Dynamic Programming",
    "acceptance": "58.2%",
    "desc": "<p>Given two strings <code>text1</code> and <code>text2</code>, return <em>the length of their longest <strong>common subsequence</strong></em>. If there is no <strong>common subsequence</strong>, return <code>0</code>.</p><p>A <strong>subsequence</strong> of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.</p>",
    "examples": "<div class=\"example-box\"><div class=\"ex-title\">Example 1:</div><pre><code>Input: text1 = \"abcde\", text2 = \"ace\"\nOutput: 3\nExplanation: The longest common subsequence is \"ace\" and its length is 3.</code></pre></div>",
    "constraints": [
      "1 <= text1.length, text2.length <= 1000",
      "text1 and text2 consist of only lowercase English characters."
    ],
    "testCases": [
      {
        "title": "Test 1",
        "input": "text1 = \"abcde\", text2 = \"ace\"",
        "expected": "3"
      },
      {
        "title": "Test 2",
        "input": "text1 = \"abc\", text2 = \"def\"",
        "expected": "0"
      }
    ],
    "templates": {
      "python": "class Solution:\n    def longestCommonSubsequence(self, text1: str, text2: str) -> int:\n        \n",
      "cpp": "class Solution {\npublic:\n    int longestCommonSubsequence(string text1, string text2) {\n        \n    }\n};\n",
      "java": "class Solution {\n    public int longestCommonSubsequence(String text1, String text2) {\n        \n    }\n}\n",
      "javascript": "/**\n * @return {any}\n */\nvar longestCommonSubsequence = function(text1, text2) {\n    \n};\n",
      "c": "/* Return type depends on problem specification */\nvoid longestCommonSubsequence() {\n    \n}\n"
    }
  }
];

  // Helper map for quick lookups by ID and slug
  const LEETCODE_MAP = {};
  LEETCODE_PROBLEMS_RAW.forEach(prob => {
    // Key by exact numeric string ID e.g. "1", "20"
    LEETCODE_MAP[String(prob.id)] = prob;
    // Key by slug e.g. "two-sum", "valid-parentheses"
    LEETCODE_MAP[prob.slug] = prob;
    // Key with leetcode prefix e.g. "leetcode-1"
    LEETCODE_MAP[`leetcode-${prob.id}`] = prob;
  });

  // Ensure legacy aliases map to the same problem objects
  LEETCODE_MAP['two-sum'] = LEETCODE_MAP['1'];
  LEETCODE_MAP['valid-parens'] = LEETCODE_MAP['20'];
  LEETCODE_MAP['longest-substring'] = LEETCODE_MAP['3'];
  LEETCODE_MAP['median-arrays'] = LEETCODE_MAP['4'];

  // Search function supporting ID match, Title match, Category filter, Difficulty filter
  function searchLeetCode(query, diffFilter = 'ALL', catFilter = 'ALL') {
    const q = (query || '').trim().toLowerCase();
    const cleanId = q.replace(/^#/, '');

    return LEETCODE_PROBLEMS_RAW.filter(p => {
      // Difficulty filter
      if (diffFilter && diffFilter !== 'ALL' && p.difficulty !== diffFilter) {
        return false;
      }
      // Category filter
      if (catFilter && catFilter !== 'ALL' && p.category !== catFilter) {
        return false;
      }
      // Query filter
      if (!q) return true;

      // Exact ID match or starts with ID
      if (String(p.id) === cleanId) return true;
      if (String(p.id).startsWith(cleanId)) return true;

      // Title match
      if (p.title.toLowerCase().includes(q)) return true;
      // Slug match
      if (p.slug.toLowerCase().includes(q)) return true;
      // Category match
      if (p.category && p.category.toLowerCase().includes(q)) return true;

      return false;
    });
  }

  function getCategories() {
    const set = new Set();
    LEETCODE_PROBLEMS_RAW.forEach(p => {
      if (p.category) set.add(p.category);
    });
    return Array.from(set).sort();
  }

  // Export to global window scope
  window.LEETCODE_PROBLEMS_RAW = LEETCODE_PROBLEMS_RAW;
  window.LEETCODE_PROBLEMS_MAP = LEETCODE_MAP;
  window.searchLeetCode = searchLeetCode;
  window.getLeetCodeCategories = getCategories;

  console.log(`[JudgeX] Loaded ${LEETCODE_PROBLEMS_RAW.length} curated LeetCode problems with official LeetCode IDs.`);
})();

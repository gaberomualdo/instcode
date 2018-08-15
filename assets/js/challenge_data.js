var _challenges_list = [
  [
    {
      name: "Prime Numbers",
      description: "Write a function that calculates if <code>n</code> is a prime number. Note that the numbers <code>1</code> and <code>0</code> are not primes, and that <code>n</code> is always positive.",
      time: 1,
      args: ["n"],
      function_name: "primeNum",
      argsTests: [
        [7280461],
        [23456245],
        [642647],
        [2],
        [1],
        [53],
        [0]
      ],
      possible_answer: function(args){
        for(var i = 2; i < args[0]; i++){
          if(args[0] % i == 0){
            return false;
          }
        }
        if(args[0] == 1 || args[0] == 0){
          return false;
        }else{
          return true;
        }
      }
    },
    {
      name: "Letter Swap",
      description: "Write a function that returns the value of <code>s</code> with the first letter replaced with the letter \"a\".",
      time: 1,
      args: ["s"],
      function_name: "letterReplacement",
      argsTests: [
        ["car"],
        ["computer"],
        ["person"],
        ["army"],
        ["octopus"]
      ],
      possible_answer: function(args){
        var returnVal = "a";
        for(var x = 1;x < args[0].length;x++){
          returnVal += args[0][x];
        }
        return returnVal;
      }
    },
    {
      name: "Article Adder",
      description: "Write a function that if <code>s</code> starts with a vowel, returns <code>s</code> with the word \"an\" added to the beginning, but if not, returns <code>s</code> with the word \"a\" added to the beginning.",
      time: 2,
      args: ["s"],
      function_name: "articleAdd",
      argsTests: [
        ["car"],
        ["computer"],
        ["person"],
        ["army"],
        ["octopus"]
      ],
      possible_answer: function(args){
        var vowels = ["a","i","o","u","e"];
        if(vowels.indexOf(args[0][0]) > -1){
          return "an " + args[0];
        }else{
          return "a " + args[0];
        }
      }
    },
    {
      name: "6 Digit",
      description: "Write a function that adds the digit \"6\" to the start and end of <code>n</code> (eg. if <code>n = 5</code>, return <code>656</code>).",
      time: 1,
      args: ["n"],
      function_name: "add6Digit",
      argsTests: [
        [5432],
        [763],
        [652345],
        [7632],
        [856446]
      ],
      possible_answer: function(args){
        return parseInt("6" + String(args[0]) + "6");
      }
    },
    {
      name: "Reverse",
      description: "Write a function that returns the reverse of <code>s</code>.",
      time: 2,
      args: ["s"],
      function_name: "reverse",
      argsTests: [
        ["car"],
        ["computer"],
        ["person"],
        ["army"],
        ["octopus"]
      ],
      possible_answer: function(args){
        var returnVal = "";
        for(var i = 0;i<args[0].length;i++){
          returnVal = args[0][i] + returnVal;
        }
        return returnVal;
      }
    }
  ],
  [
    {
      name: "Vowel Remover",
      description: "Write a function that returns <code>s</code> with all the vowels removed.",
      time: 5,
      args: ["s"],
      function_name: "removeVowels",
      argsTests: [
        ["car"],
        ["computer"],
        ["person"],
        ["army"],
        ["octopus"]
      ],
      possible_answer: function(args){
        var vowels = ["i","e","o","u","a"];
        var returnVal = "";
        for(var i = 0;i<args[0].length;i++){
          if(vowels.indexOf(args[0][i]) == -1){
            returnVal += args[0][i];
          }
        }
        return returnVal;
      }
    },
    {
      name: "Teenage Speaker",
      description: "Write a function that returns <code>s</code> with the word \"like\" between each word in <code>s</code>.",
      time: 4,
      args: ["s"],
      function_name: "teenageSpeak",
      argsTests: [
        ["The quick brown fox jumps over the lazy dog."],
        ["Some people have exceptional abilities we do not understand—for example, savants."],
        ["In a mathematical or logical expression, a symbol that may be replaced by the name of any element of a set."],
        ["A quotation is the repetition of one expression as part of another one, particularly when the quoted expression is well-known or explicitly attributed by citation to its original source, and it is indicated by quotation marks."]
      ],
      possible_answer: function(args){
        var split = args[0].split(" ");
        return split.join(" like ");
      }
    },
    {
      name: "Rhyme Bot",
      description: "Write a function that returns an array of words that rhyme with <code>s</code> &mdash; <code>s</code> starting with each letter of the alphabet. Note that the list should be in alphabetical order, and that the list does include <code>s</code>.",
      time: 5,
      args: ["s"],
      function_name: "rhyme",
      argsTests: [
        ["car"],
        ["computer"],
        ["person"],
        ["army"],
        ["octopus"]
      ],
      possible_answer: function(args){
        var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var returnVal = [];
        alphabet.forEach(function(item,index){
          var addVal = item;
          for(var x = 1;x < args[0].length;x++){
            addVal += args[0][x];
          }
          returnVal.push(addVal);
        });
        return returnVal;
      }
    },
    {
      name: "Gender Swap",
      description: "Write a function that returns <code>s</code> with the word \"he\" replaced with the word \"she\".",
      time: 4,
      args: ["s"],
      function_name: "genderSwap",
      argsTests: [
        ["he likes cats."],
        ["he and her were good friends."],
        ["he loved to go shopping, but she liked to more."]
      ],
      possible_answer: function(args){
        return args[0].replace("he","she");
      }
    },
    {
      name: "Array Adder",
      description: "Write a function that given two arrays <code>s</code> and <code>t</code> (of Strings) of the same length, returns an array with each element in array <code>s</code> concatonated to the element in array <code>t</code> with its same index.",
      time: 4,
      args: ["s","t"],
      function_name: "genderSwap",
      argsTests: [
        [["wrehd","reqhfa","hqhfae"],["teqhrsw","hrwer","ngfda"]],
        [["a","x","r"],["y","h","k"]],
        [["s","y","p"],["n","u","q"]]
      ],
      possible_answer: function(args){
        var returnVal = [];
        args[0].forEach(function(item,index){
          returnVal.push(args[1][index] + item);
        });
        return returnVal;
      }
    }
  ],
  [
    {
      name: "Space Swapper",
      description: "Write a function that returns <code>s</code> with multiple consecutive spaces replaced with one space.",
      time: 7,
      args: ["s"],
      function_name: "spaceSwap",
      argsTests: [
        ["the quick   brown  fox jumps     over the lazy       dog."],
        ["him   and I    were good       friends."],
        ["he  loved     to go   shopping,   but   she    liked   to   more."]
      ],
      possible_answer: function(args){
        var sArr = args[0].split("");
        var returnVal = "";
        sArr.forEach(function(item,index){
          if(index == 0){
            returnVal += item;
          }else{
            if(sArr[index-1] != " " || item != " "){
              returnVal += item;
            }
          }
        });
        return returnVal;
      }
    }
  ]
];
if(localStorage.getItem("instcode_all_challenge_data")){
  const saved_data = JSON.parse(localStorage.getItem("instcode_all_challenge_data"));
  _challenges_list.forEach(function(item,index){
    item.forEach(function(i,ind){
      if(saved_data[index][ind].code) {
        _challenges_list[index][ind].code = saved_data[index][ind].code;
      }
      if(saved_data[index][ind].success) {
        _challenges_list[index][ind].success = saved_data[index][ind].success;
      }
    });
  });
}

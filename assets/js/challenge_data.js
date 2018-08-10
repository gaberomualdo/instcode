var _challenges_list = [
  [
    {
      name: "Prime Numbers",
      description: "Write a function that calculates if <code>n</code> is a prime number.",
      time: 1,
      args: ["n"],
      function_name: "primeNum",
      argsTests: [
        [7280461],
        [23456245],
        [642647],
        [2],
        [1],
        [53]
      ],
      possible_answer: function(args){
        for(var i = 2; i < args[0]; i++){
          if(args[0] % i == 0){
            return false;
          }
        }
        return true;
      }
    },
    {
      name: "Letter Replacement",
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
      ]
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
      ]
    },
    {
      name: "6 Digit",
      description: "Write a function that adds the digit to the start and end of <code>n</code> (eg. if <code>n = 5</code>, return <code>656</code>).",
      time: 1,
      args: "n",
      function_name: "add6Digit",
      argsTests: [
        [5432],
        [763],
        [652345],
        [7632],
        [856446]
      ]
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
      ]
    }
  ],
];

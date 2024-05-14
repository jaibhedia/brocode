export const NoOutputPositiveTests = [
  // init statement tests
  {
    name: "interpreter empty init statement test, should success",
    input: `
      hi bro
      aytu bro
    `,
  },
  {
    name: "interpreter empty init statement test with random charaters initially, should success",
    input: `
      some random characters
      random random random
      hi bro
      aytu bro
    `,
  },
  // empty statement tests
  {
    name: "interpreter empty statement test, should success",
    input: `
      hi bro
      ;
      aytu bro
    `,
  },
  {
    name: "interpreter multiple empty statements test, should success",
    input: `
      hi bro
      ;
      ;
      ;;
      aytu bro
    `,
  },
  // block statement tests
  {
    name: "interpreter block statement test with empty block, should success",
    input: `
      hi bro
      {};
      aytu bro
    `,
  },
  {
    name: "interpreter block statement test with variable statement inside, should success",
    input: `
      hi bro
      {
        bhai ye hai a = 4;
      }
      aytu bro
    `,
  },
  // variable statement test
  {
    name: "interpreter variable statement test with basic variable declaration, should success",
    input: `
      hi bro
      bhai ye hai a, b, c;
      aytu bro
    `,
  },
  {
    name: "interpreter variable statement test with basic variable declaration and initialisation, should success",
    input: `
      hi bro
      bhai ye hai a = 10, b = "crap";
      aytu bro
    `,
  },
  {
    name: "interpreter variable statement test with multiple variable initialisation, should success",
    input: `
      hi bro
      bhai ye hai a = 10, b = 5;
      aytu bro
    `,
  },
  {
    name: "interpreter variable statement test with variable initialisation with some expression, should success",
    input: `
      hi bro
      bhai ye hai a = 7 + 90;
      aytu bro
    `,
  },
  // assignment expression tests
  {
    name: "simple assignment expression test with only one identifer, should success",
    input: `
      hi bro
      bhai ye hai a = sahi;
      a = 4;
      aytu bro
    `,
  },
  {
    name: "complex assignment expression test with only one identifer, should success",
    input: `
      hi bro
      bhai ye hai a = 2;
      a *= 4;
      aytu bro
    `,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with one parenthesis and simple expression, should success",
    input: `
      hi bro
      bhai ye hai a = 2;
      (a + 4);
      aytu bro
    `,
  },
  {
    name: "paranthesized expression test with one parenthesis and complex expression, should success",
    input: `
      hi bro
      bhai ye hai a = 2;
      (a + 4) * 10 + (5 - 4);
      aytu bro
    `,
  },
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
      hi bro
      bhai ye hai a = 2;
      (a * (4 + 8) + 10);
      aytu bro
    `,
  },
  // if statement test
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
    hi bro
    bhai ye hai x = 9;
    agar bhai (x != 9) {
      x = 5;
      hedi bro x;
    } warna bhai (x >= 9);
    aytu bro;
    `,
  },
];

export const WithOutputPositiveTests = [
  {
    name: "variable assignment test with multiple variables, should success",
    input: `
      hi bro;
      bhai ye hai a , b;
      a = b = 60;
      hedi bro a, b;
      aytu bro
    `,
    output: "60 60",
  },
  {
    name: `binaryExpression print test with nalla and "==", should success`,
    input: `
      hi bro;
      bhai ye hai a;
      agar bhai (a == nalla) {
        hedi bro a;
      }
      aytu bro
    `,
    output: "nalla",
  },
  {
    name: `binaryExpression print test with nalla without any operator, should success`,
    input: `
      hi bro;
      bhai ye hai a;
      agar bhai (a) {
        hedi bro a;
      } warna bhai {
        hedi bro "not nalla";
      }
      aytu bro
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test - comparing nalla with nalla "==", should success`,
    input: `
      hi bro;
      agar bhai (nalla == nalla) {
        hedi bro "hai nalla";
      }
      aytu bro
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with var "a", should success`,
    input: `
      hi bro;
      bhai ye hai a;
      agar bhai (nalla == a) {
        hedi bro "hai nalla";
      }
      aytu bro
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with var "a" explicit initialization, should success`,
    input: `
      hi bro;
      bhai ye hai a = nalla;
      agar bhai (nalla == a) {
        hedi bro "hai nalla";
      }
      aytu bro
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with string nalla, should success`,
    input: `
      hi bro;
      bhai ye hai a = nalla;
      agar bhai ("nalla" == a) {
        hedi bro "hai nalla";
      } warna bhai {
        hedi bro "not nalla";
      }
      aytu bro
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with string nalla, should success`,
    input: `
      hi bro;
      bhai ye hai a = "nalla";
      agar bhai (nalla == a) {
        hedi bro "hai nalla";
      } warna bhai {
        hedi bro "not nalla";
      }
      aytu bro
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with string null, should success`,
    input: `
      hi bro;
      bhai ye hai a = "null";
      agar bhai (nalla == a) {
        hedi bro "hai nalla";
      } warna bhai {
        hedi bro "not nalla";
      }
      aytu bro
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test with nalla var "a" & "b" - 0, should success`,
    input: `
      hi bro;
      bhai ye hai a;
      bhai ye hai b;
      agar bhai (a == b) {
        hedi bro "hai nalla";
      } warna bhai {
        hedi bro "nahi nalla";
      }
      aytu bro
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with nalla var "a" & "b" - 1, should success`,
    input: `
      hi bro;
      bhai ye hai a;
      bhai ye hai b = nalla;
      agar bhai (a == b) {
        hedi bro "hai nalla";
      } warna bhai {
        hedi bro "nahi nalla";
      }
      aytu bro
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with nalla var "a" & "b" -2, should success`,
    input: `
      hi bro;
      bhai ye hai a;
      bhai ye hai b = "nalla";
      agar bhai (a == b) {
        hedi bro "hai nalla";
      } warna bhai {
        hedi bro "nahi nalla";
      }
      aytu bro
    `,
    output: "nahi nalla",
  },
  // Boolean test
  {
    name: `binaryExpression print test with boolean expression - sahi, should success`,
    input: `
      hi bro;
      bhai ye hai a = sahi;
      agar bhai (sahi == a) {
        hedi bro "hai sahi";
      } warna bhai {
        hedi bro "nahi sahi";
      }
      aytu bro
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - galat, should success`,
    input: `
      hi bro;
      bhai ye hai a = galat;
      agar bhai (galat == a) {
        hedi bro "hai galat";
      } warna bhai {
        hedi bro "nahi galat";
      }
      aytu bro
    `,
    output: "hai galat",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi with string sahi, should success`,
    input: `
      hi bro;
      bhai ye hai a = "sahi";
      agar bhai (sahi == a) {
        hedi bro "hai sahi";
      } warna bhai {
        hedi bro "nahi sahi";
      }
      aytu bro
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression, should success`,
    input: `
      hi bro;
      bhai ye hai a = 7;
      agar bhai (sahi == (a > 5)) {
        hedi bro "hai sahi";
      } warna bhai {
        hedi bro "nahi sahi";
      }
      aytu bro
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression & string "sahi", should success`,
    input: `
      hi bro;
      bhai ye hai a = 7;
      agar bhai ("sahi" == (a > 5)) {
        hedi bro "hai sahi";
      } warna bhai {
        hedi bro "nahi sahi";
      }
      aytu bro
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression & two expressions, should success`,
    input: `
      hi bro;
      bhai ye hai a = sahi;
      agar bhai ("sahi" == (a == sahi)) {
        hedi bro "hai sahi";
      } warna bhai {
        hedi bro "nahi sahi";
      }
      aytu bro
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression -3, should success`,
    input: `
      hi bro;
      bhai ye hai a = sahi;
      agar bhai ((a == sahi) == (a == sahi)) {
        hedi bro "hai sahi";
      } warna bhai {
        hedi bro "nahi sahi";
      }
      aytu bro
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 4, should success`,
    input: `
      hi bro;
      bhai ye hai a;
      agar bhai ((a == nalla) == (a == sahi)) {
        hedi bro "hai sahi";
      } warna bhai {
        hedi bro "nahi sahi";
      }
      aytu bro
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 5, should success`,
    input: `
      hi bro;
      bhai ye hai a;
      agar bhai ((a == nalla) == (a == sahi)) {
        hedi bro "hai sahi";
      } warna bhai {
        hedi bro "nahi sahi";
      }
      aytu bro
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 5, should success`,
    input: `
      hi bro;
      bhai ye hai a;
      bhai ye hai b = galat;
      agar bhai (a == b) {
        hedi bro "hai sahi";
      } warna bhai {
        hedi bro "nahi sahi";
      }
      aytu bro
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - galat variables comparison, should success`,
    input: `
      hi bro;
      bhai ye hai a = galat;
      bhai ye hai b = galat;
      agar bhai (a == b) {
        hedi bro "hai galat";
      } warna bhai {
        hedi bro "nahi galat";
      }
      aytu bro
    `,
    output: "hai galat",
  },
  {
    name: `binaryExpression print test with boolean expression - galat variables comparison with string galat, should success`,
    input: `
      hi bro;
      bhai ye hai a = "galat";
      bhai ye hai b = galat;
      agar bhai (a == b) {
        hedi bro "hai galat";
      } warna bhai {
        hedi bro "nahi galat";
      }
      aytu bro
    `,
    output: "nahi galat",
  },
  {
    name: "float value addition with integer value test, should success",
    input: `
      hi bro
      bhai ye hai a = 1.2, b = 2;
      hedi bro a + b;
      aytu bro
    `,
    output: "3.2"
  },
  {
    name: "float value addition with float value value test, should success",
    input: `
      hi bro
      bhai ye hai a = 1.2, b = 2.3;
      hedi bro a + b;
      aytu bro
    `,
    output: "3.5"
  },
  {
    name: "printStatement test with multiple expressions, should success",
    input: `
      hi bro;
      bhai ye hai a = 2, b = 60;
      hedi bro (a * (4 + 8) + 10), b;
      aytu bro
    `,
    output: "34 60",
  },
  {
    name: "printStatement test with multiple expressions and re assigning value of one variable, should success",
    input: `
      hi bro;
      bhai ye hai a = 2, b = 60;

      a = b + 3;
      hedi bro a, b;
      aytu bro
    `,
    output: "63 60",
  },
  {
    name: "printStatement test with multiple expressions & without any variables, should success",
    input: `
      hi bro;
      hedi bro "hello", sahi, galat;
      aytu bro
    `,
    output: "hello sahi galat",
  },
  {
    name: "printStatement test with nalla, should success",
    input: `
      hi bro;
      hedi bro nalla;
      aytu bro;
    `,
    output: "nalla",
  },
  {
    name: "printStatement test with nalla as second parameter, should success",
    input: `
      hi bro;
      hedi bro 10, nalla;
      aytu bro;
    `,
    output: "10 nalla",
  },
  {
    name: "printStatement test with string concatenation, should success",
    input: `
      hi bro;
      hedi bro "hello" + "crap";
      aytu bro;
    `,
    output: "hellocrap",
  },
  {
    name: "printStatement test with multiple expresions including nalla, should success",
    input: `
      hi bro;
      bhai ye hai a = 70;
      hedi bro 6*5, nalla, "jamtara", a;
      aytu bro;
    `,
    output: "30 nalla jamtara 70",
  },
  {
    name: "printStatement test with nalla variable, should success",
    input: `
      hi bro;
      bhai ye hai a;
      hedi bro a;
      aytu bro;
    `,
    output: "nalla",
  },
  {
    name: `printStatement test with string "undefined", should success`,
    input: `
      hi bro;
      hedi bro "undefined";
      aytu bro;
    `,
    output: "undefined",
  },
  {
    name: `printStatement test with nalla variable, should success`,
    input: `
      hi bro;
      bhai ye hai a;
      hedi bro a;
      aytu bro;
    `,
    output: "nalla",
  },
  {
    name: `printStatement test with sahi variable, should success`,
    input: `
      hi bro;
      bhai ye hai a = sahi;
      hedi bro a;
      aytu bro;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with galat variable, should success`,
    input: `
      hi bro;
      bhai ye hai a = galat;
      hedi bro a;
      aytu bro;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with assignment expression, should success`,
    input: `
      hi bro;
      bhai ye hai a;
      hedi bro a = 90;
      aytu bro;
    `,
    output: "90",
  },
  {
    name: `printStatement test with logical AND, should success`,
    input: `
      hi bro;
      hedi bro 9 && 10;
      aytu bro;
    `,
    output: "10",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      hi bro;
      hedi bro 9 || 10;
      aytu bro;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical - 1, should success`,
    input: `
      hi bro;
      hedi bro galat && sahi;
      aytu bro;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with logical - 2, should success`,
    input: `
    hi bro;
    bhai ye hai a = sahi;
    hedi bro a && galat;
    aytu bro;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with logical - 3, should success`,
    input: `
    hi bro;
    bhai ye hai a = sahi;
    hedi bro a && sahi;
    aytu bro;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with equality, should success`,
    input: `
      hi bro;
      hedi bro 9 == 10;
      aytu bro;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with inequality, should success`,
    input: `
      hi bro;
      hedi bro 9 != 10;
      aytu bro;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      hi bro;
      hedi bro 9 || 10;
      aytu bro;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical OR - 2, should success`,
    input: `
      hi bro;
      hedi bro galat || sahi;
      aytu bro;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with boolean sahi galat and logical, should success`,
    input: `
      hi bro;
      hedi bro sahi != 10;
      aytu bro;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with boolean sahi and string "sahi", should success`,
    input: `
      hi bro;
      hedi bro "sahi" == sahi;
      aytu bro;
    `,
    output: "galat",
  },
  // while statement / loop tests
  {
    name: `whileStatement test with 1 time loop, should success`,
    input: `
      hi bro;
      bhai ye hai a = 0;
      jab tak bhai (a < 1) {
        hedi bro "bhai";
        a += 1;
      }
      aytu bro;
    `,
    output: "bhai",
  },
  {
    name: `whileStatement test with single break statement, should success`,
    input: `
      hi bro;
      jab tak bhai (sahi) 
        bas kar bhai;
      hedi bro "end";
      aytu bro;
    `,
    output: "end",
  },
  {
    name: `whileStatement test with nested loops, should success`,
    input: `
      hi bro;
      bhai ye hai a = 0;
      jab tak bhai (a < 2) {
        jab tak bhai (sahi)
          bas kar bhai;
        hedi bro "hello";
        agar bhai (sahi)
          bas kar bhai;
      }
      aytu bro;
    `,
    output: "hello",
  },
  {
    name: `whileStatement with multiple breaks, should success`,
    input: `
      hi bro;
      bhai ye hai a = 0;
      jab tak bhai (a < 2) {
        hedi bro "hello";
        agar bhai (sahi)
          bas kar bhai;
        bas kar bhai;
        bas kar bhai;
      }
      aytu bro;
    `,
    output: "hello",
  },
  // if statement tests
  {
    name: `if statement success test - 1: only if, should success`,
    input: `
    hi bro
    agar bhai (sahi) {
      hedi bro "bhai";
    }
    aytu bro;
    `,
    output: "bhai",
  },
  {
    name: `if statement success test - 2: if else both, should success`,
    input: `
    hi bro
    agar bhai (sahi) {
      hedi bro "sahi";
    } warna bhai {
      hedi bro "galat";
    }
    aytu bro;
    `,
    output: "sahi",
  },
  {
    name: `if statement success test - 3: if only with comarison condn, should success`,
    input: `
    hi bro
    bhai ye hai x = 9;
    agar bhai (x >= 9) {
      x = 5;
      hedi bro x;
    } 
    aytu bro;
    `,
    output: "5",
  },
  // else-if statement tests
  {
    name: `else-if statement success test - 1: if with one else-if, should success`,
    input: `
    hi bro
    agar bhai (galat) {
      hedi bro "galat";
    } nahi to bhai (sahi) {
      hedi bro "sahi";
    }
    aytu bro;
    `,
    output: "sahi",
  },
  {
    name: `else-if statement success test - 2: if with multiple else-ifs, should success`,
    input: `
    hi bro
    bhai ye hai x = 10;
    agar bhai (x < 5) {
      hedi bro "x < 5";
    } nahi to bhai (x < 8) {
      hedi bro "x < 8";
    } nahi to bhai (x < 12) {
      hedi bro "x < 12";
    } nahi to bhai (x < 15) {
      hedi bro "x < 15";
    }
    aytu bro;
    `,
    output: "x < 12",
  },
  {
    name: `else-if statement success test - 3: nested if-else-if ladder, should success`,
    input: `
    hi bro
    bhai ye hai a = 15;
    agar bhai (a < 0) {
      hedi bro "a < 0";
    } nahi to bhai (a > 0) {
      agar bhai (a < 10) {
        hedi bro "a < 10";
      } nahi to bhai (a < 20) {
        hedi bro "a < 20";
      }
    }
    aytu bro
    `,
    output: "a < 20",
  },
  {
    name: `else-if statement success test - 4: if-else-if ladder evaluating to else, should success`,
    input: `
    hi bro
    bhai ye hai x = 15;
    agar bhai (x < 5) {
      hedi bro "x < 5";
    } nahi to bhai (x < 8) {
      hedi bro "x < 8";
    } nahi to bhai (x < 12) {
      hedi bro "x < 12";
    } warna bhai {
      hedi bro "x > 12";
    }
    aytu bro;
    `,
    output: "x > 12",
  },
  // logical expression test
  {
    name: `logical "&&" test with sahi galat, should success`,
    input: `
        hi bro
        agar bhai (sahi && galat) {
          hedi bro "sahi";
        } warna bhai {
          hedi bro "galat";
        }
        aytu bro;
      `,
    output: `galat`,
  },
  // modulus operator test
  {
    name: `modulus operator "%" test, should success`,
    input: `
        hi bro
        hedi bro 90 % 9;
        aytu bro;
      `,
    output: `0`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        hi bro
        hedi bro 27 % 5;
        aytu bro;
      `,
    output: `2`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        hi bro
        hedi bro 5 % 20;
        aytu bro;
      `,
    output: `5`,
  },
  {
    name: `whileStatement test with single continue statement, should success`,
    input: `
      hi bro;
      bhai ye hai a = 5;
      bhai ye hai step = 0;
      jab tak bhai (a > 0) {
        step += 1;
        agar bhai (a % 2 != 0){
          a -= 2;
          agla dekh bhai;
        }
        a -= 1;
      }
      hedi bro step;
      aytu bro;
    `,
    output: "3",
  },
  {
    name: `whileStatement test with multiple continue statement, should success`,
    input: `
      hi bro;
      bhai ye hai a = 5;
      bhai ye hai step = 0;
      jab tak bhai (a > 0) {
        step += 1;
        agar bhai (a % 2 == 0){
          a -= 2;
          agla dekh bhai;
        }
        a -= 1;
        agla dekh bhai;
        hedi bro "oye oye oye.. yha tk nhi aana tha bhai";
      }
      hedi bro step;
      aytu bro;
    `,
    output: "3",
  },
  {
    // step:  1 => 2
    // a: 10 => 7 => 6 => 3 => 2 => -1
    name: `whileStatement test with single continue statement without block, should success`,
    input: `
      hi bro;
      bhai ye hai a = 10;
      bhai ye hai step = 0;
      jab tak bhai (a > 0) {
        agar bhai (a % 2 == 0){
          a -= 3;
          agla dekh bhai;
        }
        a -= 1;
        agar bhai (step == 1) agla dekh bhai
        step += 1;
      }
      hedi bro step;
      aytu bro;
    `,
    output: "1",
  },
];
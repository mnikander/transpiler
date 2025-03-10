// generated C++ code
#include <cmath>
#include <cstdlib>
#include <iostream>
#include <functional>

int main() {

    std::cout << "Hello, world." << std::endl;
    std::cout << std::plus<>{}(1, 2) << std::endl;
    struct lambda_0 { int operator()(int a, int b){ return a+b; } }; // This only works if the types are hard-coded. No templates!
    auto adder = lambda_0{};
    std::cout << adder(2, 3) << std::endl;
    struct lambda_1 { int operator()(int n){ return (n == 0) ? (1) : (n * operator()(n - 1)); };};
    auto factorial = lambda_1{};
    std::cout << factorial(4) << std::endl;
    return EXIT_SUCCESS;
}

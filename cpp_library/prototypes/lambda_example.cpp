// Copyright (c) 2025 Marco Nikander

#include <cmath>
#include <cstdlib>
#include <iostream>

// note that, in C++, function objects are easier to pass as template parameters, than functions

struct Lambda_0 {
    template <typename T0, typename T1>
    auto operator()(T0 const& x, T1 const& y) const { return std::sqrt(x*x + y*y); }
    // note that a struct with a template member function cannot be defined inside the main function
};

struct Lambda_1 {
    template <typename T0>
    T0 operator()(T0 const& n) const { return (n == 0) ? (1) : (n * operator()(n-1)); }
    // note that the 'auto' return type is not possible when using recursion. I will have to set it explicitly!
};

int main() {

    auto const hypotenuse = Lambda_0{};
    std::cout << (hypotenuse(3.0, 4.0)) << std::endl;

    auto const factorial = Lambda_1{};
    std::cout << (factorial(4)) << std::endl;

    return EXIT_SUCCESS;
}

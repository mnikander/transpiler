// generated C++ code
#include <cmath>
#include <cstdlib>
#include <iostream>
#include <functional>

int main() {

    struct closure_0 {
        int operator()(int const& n) const {
            return ((std::equal_to<>{}(n, 0)) ? (1) : (std::multiplies<>{}(n, operator()(std::minus<>{}(n, 1)))));
        }
    };
    // auto factorial = closure_0{};
    std::cout << closure_0{}(4) << std::endl;

    return EXIT_SUCCESS;
}

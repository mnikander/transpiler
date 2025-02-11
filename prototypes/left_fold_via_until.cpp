#include <array>
#include <cstdlib>
#include <functional>
#include <iostream>

#include "list.hpp"
#include "foldl.hpp"

int main() {
    std::array<int, 5> data{0, 1, 2, 3, 4};
    auto r2 = foldl(std::plus{}, 0, List<decltype(data.cbegin())>{data.cbegin(), data.cend()});
    std::cout << r2 << std::endl;

    return EXIT_SUCCESS;
}

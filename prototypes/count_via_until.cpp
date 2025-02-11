#include <array>
#include <cassert>
#include <cstdlib>
#include <functional>
#include <iostream>
#include <iterator> // distance

int main() {

    // the 'until' function
    auto until = [](auto condition, auto update, auto s){
        while (condition(s) == false) {
            s = update(std::move(s));
        }
        return s;
    };

    // struct and functions for example
    struct State {
        int i;
        int limit;
        int sum;
    };
    auto atLimit = [](State s) {
        return s.i == s.limit;
    };
    auto increment = [](State s) { 
        s.sum += s.i;
        s.i++;
        return s;
    };

    // example usage
    State result = until(atLimit, increment, State{0, 10, 0});
    std::cout << result.sum << std::endl;

    return EXIT_SUCCESS;
}

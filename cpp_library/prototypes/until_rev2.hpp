#pragma once
#include <tuple>

template <typename C, typename U, typename F, typename... Args>
auto until(C condition, U update, F toResult, Args&&... arguments) {
    std::tuple<Args...> t = std::make_tuple(arguments...);

    while (std::apply(condition, t) == false) {
        t = std::apply(update, t);
    }
    return std::apply(toResult, t);
}

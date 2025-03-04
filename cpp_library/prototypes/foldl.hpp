// Copyright (c) 2025 Marco Nikander

#pragma once

#include <iterator> // distance

#include "list.hpp"
#include "../src/until.hpp"

template <typename F, typename A, typename L>
A foldl(F f, A acc, L const& list) {
    using I = typename L::iterator_type;
    struct State {
        A _acc;
        L _list;
    };

    // predicate (termination condition)
    auto condition = [](State const& s) { 
            return std::distance(s._list.first, s._list.last) == 0;
    };

    // homomorphism (state update)
    auto update = [f](State const& s) -> State {
        return State{f(s._acc, *(s._list.first)), 
                     List<I>{(s._list.first)+1, s._list.last}};
    };

    State result = until(condition, update, State{acc, list}); 
    return result._acc;
}

// Copyright (c) 2025 Marco Nikander

#pragma once

#include <iterator> // distance

#include "list.hpp"
#include "../src/until.hpp"

// map is problematic because it requires creating an output sequence
// this whole implementation feels extremely hacky
// TODO: rewrite it
template <typename F, typename L>
void map(F f, L source_list, L target_list) {
    struct State {
        L _source_list;
        L _target_list;
        int _counter = 0;
    };

    // predicate (termination condition)
    auto condition = [](State const& s) {
            return s._counter == std::distance(s._source_list.first, s._source_list.last);
    };

    // homomorphism (state update)
    auto update = [f](State const& s) -> State {
        auto source = (s._source_list.first + s._counter);
        auto target = (s._target_list.first + s._counter);
        *target = f(*source);
        return State{s._source_list, s._target_list, s._counter + 1};
    };

    (void) until(condition, update, State{source_list, target_list, 0});
}

// Copyright (c) 2025 Marco Nikander

#pragma once

// apply the update function to the state repeatedly until the condition is met
template <typename S, typename C, typename U>
S until(S state, C condition, U update){
    while (condition(state) == false) {
        state = update(std::move(state));
    }
    return state;
};

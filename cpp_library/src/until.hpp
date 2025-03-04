// Copyright (c) 2025 Marco Nikander

#pragma once

// apply the update function to the state repeatedly until the condition is met
template <typename C, typename U, typename S>
S until(C condition, U update, S state){
    while (condition(state) == false) {
        state = update(std::move(state));
    }
    return state;
};

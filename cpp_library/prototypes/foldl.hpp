// Copyright (c) 2025 Marco Nikander

#pragma once

#include <iterator> // distance
#include <tuple>

#include "list.hpp"
#include "../src/until.hpp"

// This C++ code looks awful, but that's just because tuple is a library feature
// in C++. It should be straight-forward to generate this code from a functional
// language which supports tuples and pattern matching at the language-level.
// So actually, this rather terrible looking C++ code masks the fact that this
// implementation of 'until' is actually a viable solution.

template <typename F, typename A, typename T>
A foldl(F f, A acc, List<T> const& list) {
    using State = std::tuple<A, List<T>>;
    State s = std::make_tuple(acc, list);
          s = until(std::move(s),
                    [ ](State const& s){ return empty(std::get<1>(s)); },
                    [f](State s){return std::make_tuple(
                                            f(std::get<0>(s), head(std::get<1>(s))),
                                            tail(std::get<1>(s)));});
    return std::get<0>(s);
}

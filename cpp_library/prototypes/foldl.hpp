// Copyright (c) 2025 Marco Nikander

#pragma once

#include <iterator> // distance
#include <tuple>

#include "list.hpp"
#include "../src/until.hpp"

template <typename F, typename A, typename T>
A foldl(F f, A acc, List<T> const& list) {
    using State = std::tuple<A, List<T>>;
    State s = std::make_tuple(acc, list);
          s = until([ ](State const& s){ return empty(std::get<1>(s)); },
                    [f](State s){return std::make_tuple(
                                            f(std::get<0>(s), head(std::get<1>(s))),
                                            tail(std::get<1>(s)));},
                    std::move(s));
    return std::get<0>(s);
}

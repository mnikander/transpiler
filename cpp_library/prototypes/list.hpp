// Copyright (c) 2025 Marco Nikander

#pragma once

#include <array>
#include <cassert>
#include <cstdlib>
#include <functional>
#include <iostream>
#include <iterator> // distance

template <typename It>
struct List {
    It first;
    It last;

    using iterator_type = It;
};

template <typename T>
List<T> tail(List<T> list) {
    return List<T>{++(list.first), list.last};
}

template <typename T>
int length(List<T> const& list) {
    return std::distance(list.first, list.last);
}

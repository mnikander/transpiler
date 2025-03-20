#include <gtest/gtest.h>
#include <tuple>
#include "../src/until.hpp"
#include "../prototypes/foldl.hpp"
#include "../prototypes/list.hpp"
#include "../prototypes/map.hpp"

TEST(until, counter_sum)
{
    using State = std::tuple<int, int, int>;
    State result = until(
        [](State s){ return std::get<0>(s) == std::get<1>(s); },
        [](State s){ return std::make_tuple(
                        std::get<0>(s)+1,
                        std::get<1>(s),
                        std::get<2>(s) + std::get<0>(s)); },
        std::make_tuple(0, 10, 0));
    
    EXPECT_EQ(std::get<2>(result), 45);
}

TEST(until, foldl)
{
    std::array<int, 5> data{0, 1, 2, 3, 4};
    auto result = foldl(std::plus{}, 0, List<decltype(data.cbegin())>{data.cbegin(), data.cend()});
    
    EXPECT_EQ(result, 10);
}

TEST(until, map)
{
    std::array<int, 5> data{-1, 0, 1, 2, 3};
    std::array<int, 5> result{0, 0, 0, 0, 0};

    using It = decltype(data.begin());
    map(std::negate<>{}, List<It>{data.begin(), data.end()}, List<It>{result.begin(), result.end()});

    EXPECT_EQ(result[0], 1);
    EXPECT_EQ(result[1], 0);
    EXPECT_EQ(result[2], -1);
    EXPECT_EQ(result[3], -2);
    EXPECT_EQ(result[4], -3);
}

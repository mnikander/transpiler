#include <gtest/gtest.h>
#include "../src/until.hpp"
#include "../prototypes/foldl.hpp"
#include "../prototypes/list.hpp"
#include "../prototypes/map.hpp"

TEST(until, counter_sum)
{
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
    State result = until(atLimit, increment, State{0, 10, 0});
    
    EXPECT_EQ(result.sum, 45);
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

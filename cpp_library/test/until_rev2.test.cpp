#include <gtest/gtest.h>
#include <tuple>
#include "../prototypes/list.hpp"
#include "../prototypes/until_rev2.hpp"

TEST(until_rev2, counter_sum)
{
    int result = until( [](int i, int acc){ (void)acc; return i == 10; },
                        [](int i, int acc){ acc += i; return std::make_tuple(i + 1, acc); },
                        [](int i, int acc){ (void)i; return acc ; },
                        0,
                        0);
    EXPECT_EQ(result, 45);
}

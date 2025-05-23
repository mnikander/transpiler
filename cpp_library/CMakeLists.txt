cmake_minimum_required(VERSION 3.12)

project(cpp_library)

set(CMAKE_CXX_STANDARD 23)
add_compile_options(-Wall -Wextra -Wpedantic -Wconversion -Wsign-conversion -Wfloat-conversion)

# Locate GTest
find_package(GTest REQUIRED)
include_directories(${GTEST_INCLUDE_DIRS})

# Link unit_tests with what we want to test and the GTest and pthread library
add_executable(lambda_example ${SOURCES} prototypes/lambda_example.cpp)

# Link unit_tests with what we want to test and the GTest and pthread library
add_executable(unit_tests ${SOURCES}
                          test/main.test.cpp
                          test/until_rev2.test.cpp
                          test/until.test.cpp
)
target_link_libraries(unit_tests ${GTEST_LIBRARIES} pthread)

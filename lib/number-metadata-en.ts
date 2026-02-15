// Number-specific metadata for English language
export const numberTitles: Record<number, string> = {
  1: '1 Multiplication Table',
  2: '2 Multiplication Table',
  3: '3 Multiplication Table',
  4: '4 Multiplication Table',
  5: '5 Multiplication Table',
  6: '6 Multiplication Table',
  7: '7 Multiplication Table',
  8: '8 Multiplication Table',
  9: '9 Multiplication Table',
  10: '10 Multiplication Table',
}

// Generate titles for 11-100 (following the pattern)
for (let i = 11; i <= 100; i++) {
  numberTitles[i] = `${i} Multiplication Table`
}

export const numberDescriptions: Record<number, string> = {
  1: 'Master the 1 multiplication table. Understand the identity property with clear explanations, patterns, and practice strategies to build a foundation for all multiplication operations.',
  2: 'Master the 2 multiplication table. Learn to multiply by 2 easily with doubling techniques, patterns, and practical strategies.',
  3: 'Master the 3 multiplication table. Learn to multiply by 3 easily with grouping by threes, patterns, and practical exercises.',
  4: 'Master the 4 multiplication table. Learn to multiply by 4 easily with double-doubling techniques and practical strategies.',
  5: 'Master the 5 multiplication table. Learn easily with grouping by fives, clock-reading similarities, and practical exercises.',
  6: 'Master the 6 multiplication table. Learn to multiply by 6 with grouping techniques, patterns, and practical strategies.',
  7: 'Master the 7 multiplication table. Learn effortlessly with strategies for multiplying by 7, patterns, and practical exercises.',
  8: 'Master the 8 multiplication table. Learn with double-four, double-double-two strategies, and practical techniques.',
  9: 'Master the 9 multiplication table. Learn easily with the finger trick, 10-minus-1 strategy, and patterns.',
  10: 'Master the 10 multiplication table. Learn the easiest multiplication table with the zero-adding rule and practical strategies.',
}

// Generate descriptions for 11-100 (generic pattern)
for (let i = 11; i <= 100; i++) {
  numberDescriptions[i] = `Master the ${i} multiplication table. Learn to multiply by ${i} easily with practical exercises, patterns, and strategies.`
}

export const numberSpecialProperties: Record<number, string> = {
  1: 'Identity Property',
  2: 'Doubling',
  3: 'Grouping by Threes',
  4: 'Double Doubling',
  5: 'Counting by Fives',
  6: 'Even Number Patterns',
  7: 'Seven Days a Week',
  8: 'Octal Systems',
  9: 'Finger Trick',
  10: 'Decimal System',
}

// Generic property for higher numbers
for (let i = 11; i <= 100; i++) {
  numberSpecialProperties[i] = `Multiply by ${i}`
}

export const numberKeywords: Record<number, string> = {
  1: 'multiplication table 1, times table 1, 1x table, multiply by 1, learn multiplication',
  2: 'multiplication table 2, times table 2, 2x table, multiply by 2, doubling',
  3: 'multiplication table 3, times table 3, 3x table, multiply by 3, counting by threes',
  4: 'multiplication table 4, times table 4, 4x table, multiply by 4, double doubles',
  5: 'multiplication table 5, times table 5, 5x table, multiply by 5, counting by fives',
  6: 'multiplication table 6, times table 6, 6x table, multiply by 6, six times',
  7: 'multiplication table 7, times table 7, 7x table, multiply by 7, seven times',
  8: 'multiplication table 8, times table 8, 8x table, multiply by 8, eight times',
  9: 'multiplication table 9, times table 9, 9x table, multiply by 9, nine times, finger trick',
  10: 'multiplication table 10, times table 10, 10x table, multiply by 10, ten times',
}

// Generate keywords for 11-100
for (let i = 11; i <= 100; i++) {
  numberKeywords[i] = `multiplication table ${i}, times table ${i}, ${i}x table, multiply by ${i}, ${i} times`
}

export const focusKeyword = 'multiplication tables'

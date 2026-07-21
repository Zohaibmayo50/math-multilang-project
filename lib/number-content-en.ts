// AUTO-EXTRACTED verbatim from app/components/en/NumberPage.tsx
// Per-number curated content for locale: en
import type { PatternItem, MistakeItem, RealLifeItem, FunFactItem } from './number-content-types'

const meanings: { [key: number]: string } = {
      1: "Multiplying by 1 is a special case in mathematics. When you multiply any number by 1, the result is always the same number. This is called the identity property of multiplication. Think of it this way: 'How many groups do I have?' If you only have 1 group, you have exactly what you started with.",
      2: "Multiplying by 2 means doubling a number. When you multiply something by 2, you add the number to itself. This is one of the most practical times tables because we often need to double things in daily life — counting pairs of shoes, bicycle wheels, or dividing something equally between two people.",
      3: "Multiplying by 3 means taking a number three times. You can think of it as adding the same number to itself three times. This times table is important for understanding triangles, triples, and everything that comes in groups of three.",
      4: "Multiplying by 4 is like doubling twice. Since 4 = 2 × 2, you can double a number and then double the result again. This makes the 4 times table easier to learn if you already know the 2 times table. The number 4 occurs frequently in geometry (squares have 4 sides) and time measurement (there are 4 quarters).",
      5: "Multiplying by 5 creates one of the most beautiful patterns in mathematics. All multiples of 5 end with 0 or 5, making this times table very predictable. It's extremely useful for counting money (5-dollar coins, 5-dollar bills) and reading the clock (5-minute intervals).",
      6: "Multiplying by 6 means taking groups of six numbers. 6 is the first 'real' times table because it's not just a multiple of 2 or 3. But since 6 = 2 × 3, you can multiply a number by 2 and then by 3 (or vice versa) to multiply by 6. The number 6 occurs frequently in nature (honeycomb cells) and in daily life (egg cartons, sides of a die).",
      7: "Multiplying by 7 is generally one of the hardest times tables for students because 7 is a prime number and can't be easily derived from other times tables. But all multiples of 7 have beautiful patterns and can be learned through practice. 7 is an important number for days of the week, continents, and many cultural references.",
      8: "Multiplying by 8 is like doubling three times (8 = 2 × 2 × 2). Double the number, double the result again, and double one more time — then you've multiplied by 8. This times table is easier to learn when you know the 2 and 4 times tables well. 8 is an important number in geometry (octagons) and music (octaves).",
      9: "Multiplying by 9 has one of the most fascinating patterns in mathematics. When you add the digits of any multiple of 9, the result is always divisible by 9. Also, the tens digit in 9 × n is always n-1. This times table can also be learned with finger tricks. Since 9 is just 1 less than 10, it can also be calculated using the 10 times table.",
      10: "Multiplying by 10 is one of the easiest times tables. When you multiply any number by 10, you just add a zero at the end. This forms the basis of our decimal system. Learning to multiply by 10 teaches students the concept of place value and how to work with large numbers. The 10 times table is the reference point for understanding all other times tables.",
      11: "Multiplying by 11 has one of the most interesting patterns in mathematics. When you multiply single-digit numbers by 11, the result is that number repeated twice (11×3=33, 11×7=77). In two-digit multiplication by 11, there's also a beautiful pattern: you add the digits and put them in the middle. 11 is a prime number and has special mathematical properties.",
      12: "Multiplying by 12 is one of the most practical times tables because 12 is divisible by many numbers (1, 2, 3, 4, 6, 12). This property makes 12 very useful in daily life — there are 12 items in a dozen, 12 hours on a clock, 12 months in a year. Since 12 = 3 × 4 = 2 × 6, you can learn this times table in several ways.",
      13: "Multiplying by 13 develops students' pattern recognition. 13 is a prime number, so it can't be easily derived from other times tables. But it's very useful to think of 13 as 10+3: multiplying a number by 13 means multiplying it by 10 and adding the result of multiplying by 3. 13 is a number with special significance in many cultures.",
      14: "Multiplying by 14 is twice the 7 times table. Since 14 = 2 × 7, if you know the 7 times table, you can double each result and get the 14 times table. 14 is important in weekly planning (2 weeks = 14 days) and shows the properties of even numbers.",
      15: "Multiplying by 15 combines multiples of 3 and 5. Since 15 = 3 × 5, this times table carries the properties of both numbers. All multiples of 15 are divisible by 3 and 5. Since 15 minutes is a quarter of an hour, it's frequently used in time calculations.",
      16: "Multiplying by 16 is the fourth power of 2 (2×2×2×2=16). This allows learning the 16 times table through doubling chains. You can double 8 and get 16. In computer science, 16 is an important number (hexadecimal system) and occurs frequently in daily life too.",
      17: "Multiplying by 17 can be challenging due to its prime number properties. 17 can't be easily derived from other times tables. But it helps to think of 17 as 20-3 or 10+7. Learning the 17 times table develops mental arithmetic skills and problem-solving strategies.",
      18: "Multiplying by 18 has many approaches. Since 18 = 2 × 9 = 3 × 6, you can learn this times table in several ways. Doubling the 9 times table or tripling the 6 times table results in the 18 times table. 18 is important as the age of majority in many countries.",
      19: "Multiplying by 19 can't be derived from other times tables because 19 is a prime number. But it's very practical to think of 19 as 20-1: multiply the number by 20 and subtract the number itself. This strategy makes calculating the 19 times table mentally much easier.",
      20: "Multiplying by 20 is a natural continuation of the 10 times table. When you multiply any number by 20, you can multiply it by 10 and double the result. Or just add a zero at the end and double. The 20 times table is used continuously in money calculations (20 dollars) and measurements (20 meters, 20 kilograms).",
    }

const importance: { [key: number]: string } = {
      1: "The 1 times table is the foundation of all multiplication operations. It teaches students that numbers have an identity: when multiplied by 1, they remain unchanged. This concept is important for understanding later algebraic properties. While it seems simple, learning this times table builds confidence and establishes the pattern that multiplication is orderly and predictable.",
      2: "The 2 times table is generally the first real times table students learn, and there's a good reason for that. Doubling is a natural concept that children encounter daily. Learning this times table makes mental arithmetic much faster and prepares students for even numbers, fractions (halves), and basic division. Many students find it the easiest times table, which builds confidence for more complex times tables.",
      3: "The 3 times table bridges the gap between simple and complex times tables. It requires students to go beyond simple doubling and recognize new patterns. This times table occurs constantly in real-world contexts, such as counting in groups of three, understanding triangular shapes, and working with time (three periods per day). Students who learn the 3 times table demonstrate mastery of abstract counting.",
      7: "Seven is a prime number — its only factors are 1 and itself, making it the 4th prime after 2, 3, and 5. Unlike 4, 6, 8, 9, or 10, the 7 times table cannot be built as a shortcut from a smaller one. There is no doubling or tripling trick that gets you there — it has to be learned in its own right. Seven is also a Mersenne prime, fitting the pattern 2³ − 1. Its square, 7 × 7 = 49, is worth memorizing as a landmark in the table.",
    }

const patterns: { [key: number]: PatternItem[] } = {
      1: [
        { title: "Identity Pattern", description: "Every number multiplied by 1 gives itself. This never changes: 1×1=1, 1×2=2, 1×3=3, and so on." },
        { title: "Predictable Series", description: "The results just count up: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. You just write the numbers in order." },
        { title: "Foundation for All Times Tables", description: "Every times table starts with multiplying by 1, so this pattern occurs in all times tables." },
      ],
      2: [
        { title: "Only Even Numbers", description: "All multiples of 2 are even numbers. Results always end in 0, 2, 4, 6, or 8." },
        { title: "Counting by Twos", description: "Each answer is 2 more than the previous one: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20." },
        { title: "Doubling Pattern", description: "Each result is exactly double the factor: 2×5=10 is double 5." },
      ],
      3: [
        { title: "Digit Sum Pattern", description: "Add the digits in each result: 3 (3), 6 (6), 9 (9), 12 (1+2=3), 15 (1+5=6), 18 (1+8=9). The 3-6-9 pattern repeats!" },
        { title: "Counting by Threes", description: "Each answer increases by 3: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30." },
        { title: "Odd-Even Alternation", description: "Results alternate: odd (3), even (6), odd (9), even (12), creating a predictable rhythm." },
      ],
      7: [
        { title: "Last digit cycle — all 10 digits", description: "The last digits of 7×1 through 7×10 are 7, 4, 1, 8, 5, 2, 9, 6, 3, 0 — cycling through every single digit before repeating. This only happens for 1, 3, 7, and 9 (digits sharing no common factor with 10). After 7×10=70, the same cycle starts again: 77, 84, 91, 98, 105..." },
        { title: "7 × 7 = 49 is a landmark", description: "49 is 7 squared. It sits in the middle of the table and is worth memorizing directly rather than deriving from a neighbor." },
      ],
    }

const mistakes: { [key: number]: MistakeItem[] } = {
      1: [
        { mistake: "Believing 1×1=2", solution: "Remember: anything multiplied by 1 stays the same. 1 group of 1 is just 1." },
        { mistake: "Confusion with addition", solution: "Multiplying by 1 is different from adding. 5+1=6, but 5×1=5." },
      ],
      2: [
        { mistake: "Confusing 2×6=12 with 2×7=14", solution: "Use skip counting: 2, 4, 6, 8, 10, 12, 14. Count carefully without skipping." },
        { mistake: "Confusion with larger numbers", solution: "Break it down: 2×8 is JUST 8+8. Doubling is simple addition." },
      ],
      7: [
        { mistake: "Confusing 7 × 8 = 56 with neighboring facts", solution: "Use the rhyme: 5, 6, 7, 8 — 56 is 7 times 8. The four numbers run in counting order, making it easy to recall under pressure." },
        { mistake: "Swapping 6 × 7 (42), 7 × 7 (49), and 7 × 8 (56)", solution: "These three sit right next to each other and are the most commonly confused. Memorize them as a group: 42, 49, 56 — each is 7 more than the last." },
        { mistake: "Trying to use the last-digit shortcut from the 2 or 5 table", solution: "The 7 times table last digits cycle through all 10 possibilities — there is no short repeating pattern to exploit. Recognize this upfront and memorize the full cycle instead." },
      ],
    }

const strategies: { [key: number]: string[] } = {
      1: [
        "Say each multiplication aloud: 'One times one is one, one times two is two...'",
        "Practice writing the times table once a day for a week",
        "Find the pattern: the answer is always the same number as the second number",
        "Use flashcards, though this times table is usually learned very quickly",
      ],
      2: [
        "Count by twos while walking or climbing stairs: 2, 4, 6, 8...",
        "Use your fingers: hold up fingers in pairs and count by twos",
        "Practice doubling numbers mentally throughout the day",
        "Say aloud: 'Two times five is five plus five, which is ten'",
      ],
      7: [
        "Say '5, 6, 7, 8 — 56 is 7 times 8!' out loud until it is automatic. This covers the hardest single fact in the table.",
        "Treat 7 × 7 = 49 as a standalone landmark to memorize, not something to calculate.",
        "Split 7 into 5 + 2 for any fact you cannot recall: 7 × 6 = (5 × 6) + (2 × 6) = 30 + 12 = 42.",
        "Or use 10 − 3: 7 × 6 = (10 × 6) − (3 × 6) = 60 − 18 = 42. Pick whichever split feels faster.",
        "Once you know 7 × n, you know 14 × n for free — just double the answer.",
      ],
    }

const realLifeExamples: { [key: number]: RealLifeItem[] } = {
      7: [
        { context: "7 days in a week", detail: "Used in nearly every calendar system in the world today." },
        { context: "7 continents", detail: "Africa, Antarctica, Asia, Australia, Europe, North America, and South America — in the model most commonly taught in schools." },
        { context: "7 notes in a musical scale", detail: "A, B, C, D, E, F, G — before the pattern repeats an octave higher." },
        { context: "7 colors in a rainbow", detail: "Red, orange, yellow, green, blue, indigo, and violet — a division first popularized by Isaac Newton." },
        { context: "The Seven Wonders of the Ancient World", detail: "Including the Great Pyramid of Giza (the only one still standing today)." },
      ],
    }

const funFacts: { [key: number]: FunFactItem[] } = {
      7: [
        { fact: "Seven is a Mersenne prime — it equals 2³ − 1 (2 × 2 × 2, minus 1), making it part of a rare family of primes tied to powers of 2." },
        { fact: "The 7-day week traces back to ancient Babylonian astronomy, which tracked exactly 7 moving objects visible without a telescope: the Sun, the Moon, and five planets — Mercury, Venus, Mars, Jupiter, and Saturn." },
        { fact: "Seven is widely considered lucky across many cultures, which is why it appears so often in games and gambling traditions worldwide." },
        { fact: "James Bond's famous code number is 007, and Snow White lives with exactly seven dwarfs." },
      ],
    }

export function getNumberMeaning(n: number): string | null {
  return meanings[n] ?? null
}

export function getWhyImportant(n: number): string | null {
  return importance[n] ?? null
}

export function getPatterns(n: number): PatternItem[] {
  return patterns[n] ?? []
}

export function getCommonMistakes(n: number): MistakeItem[] {
  return mistakes[n] ?? []
}

export function getPracticeStrategies(n: number): string[] {
  return strategies[n] ?? []
}

export function getRealLifeExamples(n: number): RealLifeItem[] | null {
  return realLifeExamples[n] ?? null
}

export function getFunFacts(n: number): FunFactItem[] | null {
  return funFacts[n] ?? null
}

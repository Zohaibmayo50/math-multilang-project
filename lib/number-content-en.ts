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
      4: "The 4 times table introduces students to the idea that one times table can be built from another through repeated doubling. Since 4 = 2 × 2, mastering the 2 times table gives a direct shortcut to the 4 times table: just double twice. This connection helps students see multiplication as a flexible, related system rather than a set of isolated facts to memorize, and it builds a foundation for later recognizing other doubling relationships (like 8 = 2 × 4).",
      5: "The 5 times table is one of the most approachable for students because it follows the simplest possible ending pattern — every result ends in either 0 or 5. This predictability builds early confidence with multiplication before students tackle less obvious tables. It's also closely tied to counting on fingers and to telling time, which gives students a physical, everyday anchor for a table they will use constantly.",
      6: "The 6 times table is often the point where students shift from relying on simple doubling to combining two different strategies. Since 6 = 2 × 3, it can be reached either by doubling the 3 times table or tripling the 2 times table, and since 6×n is always 5×n plus one more n, it connects to the 5 times table too. Mastering 6 shows students that a single fact can often be reached through multiple valid paths — an important shift toward flexible mental math.",
      7: "Seven is a prime number — its only factors are 1 and itself, making it the 4th prime after 2, 3, and 5. Unlike 4, 6, 8, 9, or 10, the 7 times table cannot be built as a shortcut from a smaller one. There is no doubling or tripling trick that gets you there — it has to be learned in its own right. Seven is also a Mersenne prime, fitting the pattern 2³ − 1. Its square, 7 × 7 = 49, is worth memorizing as a landmark in the table.",
      8: "The 8 times table builds directly on the 2 times table through three rounds of doubling, since 8 = 2 × 2 × 2 = 2³. This makes it one of the clearest demonstrations that a times table doesn't need to be memorized from scratch — it can be constructed from a simpler one a student already knows. Learning the 8 times table this way also introduces the idea of powers of 2, a concept that reappears constantly in computing and science.",
      9: "The 9 times table has some of the most distinctive patterns of any single-digit table, which makes it a favorite for teaching pattern recognition. Because 9 is one less than 10, every 9 times fact can be found by taking the 10 times fact and subtracting the original number — a shortcut that works every single time. This connects the 9 times table closely to the 10 times table, one of the easiest tables to master.",
      10: "The 10 times table is the anchor for the entire base-10 number system that almost everyone uses. Because multiplying by 10 simply shifts every digit one place to the left (or equivalently, appends a zero), it's usually the easiest times table for students to learn, and it becomes the reference point for learning trickier tables like 9 (subtract one group) and 11 (add one group), and for estimating other multiplications.",
      11: "The 11 times table stands out because, for single-digit multipliers, it produces a strikingly simple mirror pattern: the answer is just the multiplier written twice (11×4 = 44). This makes the first nine facts almost automatic once a student notices the pattern. Learning where and why that pattern breaks — starting at 11×10 = 110 — also teaches an important lesson: patterns in math are powerful, but they need to be checked rather than assumed to continue forever.",
      12: "The 12 times table is one of the most practically useful because 12 is a highly composite number — divisible evenly by 1, 2, 3, 4, 6, and 12. That flexibility is why so many everyday systems are built around dozens: a foot has 12 inches, a year has 12 months, and a standard clock face has 12 hours. Because 12 = 10 + 2, students can also build the whole table directly from the 10 and 2 times tables they likely already know well.",
      13: "The 13 times table introduces students to a number wrapped in cultural superstition — many Western cultures consider 13 unlucky, a fear formally known as triskaidekaphobia. Mathematically, 13 is prime, so it can't be built as a shortcut from a smaller times table. The most reliable approach is to split it as 10 + 3: multiply by 10, multiply by 3, then add the results. This split-and-add strategy previews an approach that becomes essential for every prime times table from here on.",
      14: "The 14 times table is a direct payoff for already knowing the 7 times table: since 14 = 2 × 7, doubling every 7 times fact gives the matching 14 times fact for free. This makes 14 one of the easiest two-digit times tables to learn, provided the 7 times table is already solid. It also reinforces an important idea in multiplication — that even a table built from a prime number (7) becomes easy once it is doubled.",
      15: "The 15 times table combines two familiar tables at once, since 15 = 3 × 5. It can be reached either by tripling the 5 times table or by multiplying the 3 times table by 5, and it can also be split as 10 + 5. Beyond arithmetic, 15 is a triangular number (1+2+3+4+5=15), giving students an early, hands-on introduction to a different family of number patterns than the multiplication table itself.",
      16: "The 16 times table sits at an important milestone: it is 2 to the 4th power (2×2×2×2=16), reachable by doubling four times in a row, and it is also a perfect square (4×4=16). Because 16 shows up constantly outside the classroom — in weight measurements, in computing's hexadecimal system, and in cultural references like 'sweet sixteen' — mastering it pays off well beyond the multiplication table itself.",
      17: "The 17 times table has no shortcuts to lean on: 17 is prime, so it cannot be built by doubling or tripling a smaller table. The most reliable strategy is the same one used for other primes in this range — split 17 into 10 + 7, multiply each part separately, and add the results. Because there is no pattern to fall back on, the 17 times table is genuinely one of the harder ones to memorize, and that's worth acknowledging rather than pretending otherwise.",
      18: "The 18 times table can be approached from several directions at once, since 18 = 2 × 9 = 3 × 6. Doubling the 9 times table, tripling the 6 times table, or using 20×n − 2×n are all valid, equally correct paths to the same answer. Because every multiple of 18 is also a multiple of 9, the 9 times table's digit-sum rule (digits always add up to a multiple of 9) applies here too, giving students a built-in way to double-check their work.",
      19: "The 19 times table is one of the clearest examples of how being 'close to 20' can make a prime number's times table manageable. Since 19 = 20 − 1, every 19 times fact can be found by multiplying by 20 and subtracting the original number once — a shortcut that works every time, even though 19 itself is prime and has no factoring shortcut of its own.",
      20: "The 20 times table builds directly on the 10 times table that students already know well: since 20 = 2 × 10, every 20 times fact is just the matching 10 times fact doubled. This makes 20 one of the easier two-digit times tables despite its size, and it introduces the historical term 'score' (meaning 20), which shows up in expressions like Abraham Lincoln's 'four score and seven years.'",
      21: "The 21 times table can be reached by splitting 21 into 20 + 1: multiply by 20, then add one more group of the original number. Since 21 = 3 × 7, it can also be reached by tripling the 7 times table or multiplying the 3 times table by 7. Because 21 is the target number in the card game blackjack, many students already have an intuitive sense of what different multiples of 21 look like before they ever see the times table.",
      22: "The 22 times table doubles a table students already know well: since 22 = 2 × 11, every 22 times fact is the matching 11 times fact doubled. Combined with the mirror-digit pattern already familiar from the 11 times table, this makes 22 one of the more approachable times tables in the higher teens and twenties.",
      23: "The 23 times table has no factoring shortcut, since 23 is prime. The most reliable method is to split 23 into 20 + 3, multiply each part separately, and add the results — the same split-and-add strategy that works for every prime number in this range. Because human DNA is organized into 23 pairs of chromosomes, the number 23 also carries genuine significance well beyond arithmetic.",
      24: "The 24 times table benefits from more shortcuts than almost any other number in this range, because 24 is a highly composite number — its factors include 1, 2, 3, 4, 6, 8, 12, and 24. That means it can be reached by tripling the 8 times table, doubling the 12 times table, or multiplying the 4 and 6 times tables together, giving students multiple valid ways to arrive at the same answer depending on which smaller table they already know best.",
      25: "The 25 times table is closely tied to the number 100, since 25 = 100 ÷ 4. Every 25 times fact can be found by multiplying by 100 and dividing by 4, which is often faster than direct multiplication once students are comfortable with quarters. Because 25 is also a perfect square (5×5=25), it serves as a useful landmark fact in its own right.",
      26: "The 26 times table is a straightforward doubling of the 13 times table, since 26 = 2 × 13. Once the 13 times table (split as 10+3) is solid, doubling each result gives the full 26 times table with no new memorization required. The number 26 also has a well-known identity outside math — it's the number of letters in the English alphabet.",
      27: "The 27 times table introduces students to a perfect cube: 27 = 3³ (3×3×3). It can be found by tripling the 9 times table, or by splitting it as 30 − 3 and subtracting one group of the original number from the ×30 result. Recognizing 27 as 3 cubed previews an idea — cube numbers — that students will meet again in later math.",
      28: "The 28 times table is built from 4 × 7, so it can be reached by quadrupling the 7 times table or doubling the 14 times table. Mathematically, 28 has a special status: it is a perfect number, meaning its proper divisors (1, 2, 4, 7, and 14) add up exactly to 28 itself — only the second such number after 6.",
      29: "The 29 times table, like other primes in this range, has no factoring shortcut. The most reliable approach is 30×n − n: multiply by 30, then subtract one group of the original number. This 'subtract from a round number' strategy is the same one that makes 19 and 9 manageable, and it's worth recognizing as a general-purpose tool for any number just below a multiple of 10.",
      30: "The 30 times table closes out this range by combining three small prime factors at once: 30 = 2 × 3 × 5. It can be reached by tripling the 10 times table, doubling the 15 times table, or multiplying the 3 and 10 times tables together. Because 30 divides evenly by so many smaller numbers, it shows up constantly in calendars, angles, and measurement — reinforcing multiplication facts a student has likely already built in earlier tables.",
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
      4: [
        { title: "Last digit cycle: 4, 8, 2, 6, 0", description: "The last digits of 4×1 through 4×5 are 4, 8, 2, 6, 0, then the cycle repeats: 4×6=24, 4×7=28, 4×8=32, 4×9=36, 4×10=40." },
        { title: "Double the double", description: "Since 4 = 2 × 2, any 4 times fact is the 2 times table doubled: 4×6 = double(2×6) = double(12) = 24." },
        { title: "Always even", description: "Every multiple of 4 is even, and every multiple of 4 is also a multiple of 2 twice over — divisible by 2 with no remainder, twice." },
      ],
      5: [
        { title: "Always ends in 0 or 5", description: "Every multiple of 5 ends in exactly one of two digits: 0 (for even multipliers) or 5 (for odd multipliers). No other times table has such a simple ending pattern." },
        { title: "Half of the 10 times table", description: "Since 5 is half of 10, any 5 times fact is half of the matching 10 times fact: 5×6 = half of 10×6 = half of 60 = 30." },
        { title: "Counting by fives", description: "5, 10, 15, 20, 25, 30, 35, 40, 45, 50 — the same sequence used to count nickels or read a clock face in 5-minute intervals." },
      ],
      6: [
        { title: "Last digit cycle: 6, 2, 8, 4, 0", description: "The last digits of 6×1 through 6×5 are 6, 2, 8, 4, 0, then the cycle repeats: 6×6=36, 6×7=42, 6×8=48, 6×9=54, 6×10=60." },
        { title: "6 = 5 + 1, times n", description: "Since 6×n = 5×n + n, you can always find a 6 times fact by adding one more group to the matching 5 times fact: 6×7 = 5×7 + 7 = 35 + 7 = 42." },
        { title: "Always even", description: "Because 6 itself is even, every multiple of 6 is also even — the last digit is always 0, 2, 4, 6, or 8." },
      ],
      7: [
        { title: "Last digit cycle — all 10 digits", description: "The last digits of 7×1 through 7×10 are 7, 4, 1, 8, 5, 2, 9, 6, 3, 0 — cycling through every single digit before repeating. This only happens for 1, 3, 7, and 9 (digits sharing no common factor with 10). After 7×10=70, the same cycle starts again: 77, 84, 91, 98, 105..." },
        { title: "7 × 7 = 49 is a landmark", description: "49 is 7 squared. It sits in the middle of the table and is worth memorizing directly rather than deriving from a neighbor." },
      ],
      8: [
        { title: "Last digit cycle: 8, 6, 4, 2, 0", description: "The last digits of 8×1 through 8×5 are 8, 6, 4, 2, 0, then the cycle repeats: 8×6=48, 8×7=56, 8×8=64, 8×9=72, 8×10=80." },
        { title: "Triple doubling", description: "Since 8 = 2 × 2 × 2, any 8 times fact can be found by doubling three times: 8×5 → double to 10, double to 20, double to 40." },
        { title: "Always even, always divisible by 4", description: "Every multiple of 8 is also a multiple of 4 and 2, since 8 itself contains both as factors." },
      ],
      9: [
        { title: "Digits always sum to 9", description: "For every multiple of 9 from 9×1 through 9×10, the digits add up to exactly 9: 9→9, 18→1+8=9, 27→2+7=9, 36→3+6=9, and so on through 90→9+0=9." },
        { title: "Tens digit up, units digit down", description: "As the multiplier increases, the tens digit counts up (0,1,2,3...) while the units digit counts down (9,8,7,6...): 09, 18, 27, 36, 45, 54, 63, 72, 81, 90." },
        { title: "One less than the 10 times table", description: "Since 9 = 10 − 1, every 9 times fact equals the matching 10 times fact minus the original number: 9×7 = 70 − 7 = 63." },
      ],
      10: [
        { title: "Always ends in 0", description: "Every multiple of 10 ends in the digit 0, with no exceptions: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100." },
        { title: "Just add a zero", description: "Multiplying any whole number by 10 is the same as writing that number and appending a 0 to the end: 7×10 = 70, 23×10 = 230." },
        { title: "Reference point for other tables", description: "Because 10 is so easy, it's used as a stepping stone for tricky tables — for example, 9×n = 10×n − n, and 11×n = 10×n + n." },
      ],
      11: [
        { title: "Mirror pattern for 1-9", description: "For any single-digit number n from 1 to 9, 11×n equals n written twice: 11×1=11, 11×2=22, 11×3=33, up through 11×9=99." },
        { title: "The pattern breaks at 11×10", description: "11×10 = 110, not '1010' — once the multiplier itself becomes two digits, the simple mirror trick stops working and a new method is needed." },
        { title: "11 = 10 + 1, times n", description: "Since 11×n = 10×n + n, every 11 times fact can be found by taking the 10 times fact and adding one more group of n." },
      ],
      12: [
        { title: "12 = 10 + 2, times n", description: "Since 12×n = 10×n + 2×n, every 12 times fact can be built by adding the 10 times fact and the 2 times fact together: 12×7 = 70 + 14 = 84." },
        { title: "Many factor pairs", description: "Because 12 = 2×6 = 3×4, the 12 times table can also be reached by doubling the 6 times table or by multiplying the 4 times table by 3." },
        { title: "Always even", description: "Since 12 itself is even, every multiple of 12 is also even." },
      ],
      13: [
        { title: "No shortcut — split into 10 + 3", description: "Since 13 is prime, there's no doubling or tripling trick. Use 13×n = 10×n + 3×n: for 13×6, that's 60 + 18 = 78." },
        { title: "Last digit matches the 3 times table", description: "Because 13 = 10 + 3, the last digit of 13×n always matches the last digit of 3×n: 13×4=52 (last digit 2, same as 3×4=12), 13×7=91 (last digit 1, same as 3×7=21)." },
      ],
      14: [
        { title: "Double the 7 times table", description: "Since 14 = 2 × 7, every 14 times fact is exactly double the matching 7 times fact: 14×6 = double(7×6) = double(42) = 84." },
        { title: "Always even", description: "Because 14 itself is even, every multiple of 14 is even too." },
      ],
      15: [
        { title: "15 = 10 + 5, times n", description: "Since 15×n = 10×n + 5×n, every 15 times fact can be built by adding the 10 times fact and the 5 times fact: 15×6 = 60 + 30 = 90." },
        { title: "Always ends in 0 or 5", description: "Because 15 is a multiple of 5, every result in the 15 times table ends in 0 or 5, just like the 5 times table itself." },
        { title: "15 is a triangular number", description: "15 = 1+2+3+4+5, the sum of the first five counting numbers — a different kind of pattern than the times table itself." },
      ],
      16: [
        { title: "Double the 8 times table", description: "Since 16 = 2 × 8, every 16 times fact is exactly double the matching 8 times fact: 16×5 = double(8×5) = double(40) = 80." },
        { title: "16 is 2 to the 4th power", description: "16 = 2×2×2×2, reachable by doubling a number four times in a row: 1→2→4→8→16." },
        { title: "16 is a perfect square", description: "16 = 4×4, making it worth memorizing directly as a landmark fact." },
      ],
      17: [
        { title: "No shortcut — split into 10 + 7", description: "Since 17 is prime, use 17×n = 10×n + 7×n: for 17×6, that's 60 + 42 = 102." },
        { title: "Alternative split: 20 − 3", description: "17×n also equals 20×n − 3×n, which can be faster once the 20 times table (double the 10s) feels automatic." },
      ],
      18: [
        { title: "18 = 20 − 2, times n", description: "Since 18×n = 20×n − 2×n, every 18 times fact can be found by multiplying by 20 and subtracting double the original number: 18×6 = 120 − 12 = 108." },
        { title: "Digit sums divisible by 9", description: "Because 18 = 2 × 9, every multiple of 18 is also a multiple of 9 — so its digits always add up to a multiple of 9: 18×4=72, and 7+2=9." },
        { title: "Double the 9s or triple the 6s", description: "18 can be reached by doubling the 9 times table or tripling the 6 times table, whichever feels more familiar." },
      ],
      19: [
        { title: "19 = 20 − 1, times n", description: "Since 19×n = 20×n − n, every 19 times fact can be found by multiplying by 20 and subtracting the original number once: 19×6 = 120 − 6 = 114." },
        { title: "Results sit just under a multiple of 20", description: "Because 19 is one less than 20, every result in the 19 times table sits exactly n below the matching multiple of 20." },
      ],
      20: [
        { title: "Always ends in 0", description: "Since 20 is a multiple of 10, every result in the 20 times table ends in 0, just like the 10 times table." },
        { title: "Double the 10 times table", description: "Since 20 = 2 × 10, every 20 times fact is exactly double the matching 10 times fact: 20×7 = double(10×7) = double(70) = 140." },
      ],
      21: [
        { title: "21 = 20 + 1, times n", description: "Since 21×n = 20×n + n, every 21 times fact can be found by multiplying by 20 and adding one more group of the original number: 21×6 = 120 + 6 = 126." },
        { title: "Triple the 7 times table", description: "Since 21 = 3 × 7, every 21 times fact is exactly triple the matching 7 times fact: 21×4 = triple(7×4) = triple(28) = 84." },
      ],
      22: [
        { title: "Double the 11 times table", description: "Since 22 = 2 × 11, every 22 times fact is exactly double the matching 11 times fact: 22×4 = double(11×4) = double(44) = 88." },
        { title: "22 = 20 + 2, times n", description: "Since 22×n = 20×n + 2×n, every 22 times fact can also be built by adding the 20 times fact and the 2 times fact together." },
      ],
      23: [
        { title: "No shortcut — split into 20 + 3", description: "Since 23 is prime, use 23×n = 20×n + 3×n: for 23×6, that's 120 + 18 = 138." },
      ],
      24: [
        { title: "Triple the 8 times table", description: "Since 24 = 3 × 8, every 24 times fact is exactly triple the matching 8 times fact: 24×5 = triple(8×5) = triple(40) = 120." },
        { title: "Double the 12 times table", description: "Since 24 = 2 × 12, every 24 times fact is also exactly double the matching 12 times fact." },
        { title: "Always even, always divisible by 4", description: "Because 24 = 2³ × 3, every multiple of 24 is divisible by 2, 4, and 8 as well." },
      ],
      25: [
        { title: "25 = 100 ÷ 4, times n", description: "Since 25×n = (100×n) ÷ 4, every 25 times fact can be found by multiplying by 100 and dividing by 4: 25×8 = 800 ÷ 4 = 200." },
        { title: "Always ends in 00, 25, 50, or 75", description: "Because 25 is a quarter of 100, its multiples cycle through exactly four possible last-two-digit endings." },
        { title: "25 is a perfect square", description: "25 = 5×5, a landmark fact worth memorizing directly." },
      ],
      26: [
        { title: "Double the 13 times table", description: "Since 26 = 2 × 13, every 26 times fact is exactly double the matching 13 times fact: 26×4 = double(13×4) = double(52) = 104." },
        { title: "Always even", description: "Because 26 itself is even, every multiple of 26 is even too." },
      ],
      27: [
        { title: "Triple the 9 times table", description: "Since 27 = 3 × 9, every 27 times fact is exactly triple the matching 9 times fact: 27×4 = triple(9×4) = triple(36) = 108." },
        { title: "27 = 30 − 3, times n", description: "Since 27×n = 30×n − 3×n, every 27 times fact can also be found by multiplying by 30 and subtracting triple the original number." },
        { title: "27 is a perfect cube", description: "27 = 3×3×3, or 3³ — the second perfect cube after 8." },
      ],
      28: [
        { title: "Quadruple the 7 times table", description: "Since 28 = 4 × 7, every 28 times fact is exactly four times the matching 7 times fact: 28×3 = 4×(7×3) = 4×21 = 84." },
        { title: "Double the 14 times table", description: "Since 28 = 2 × 14, every 28 times fact is also exactly double the matching 14 times fact." },
      ],
      29: [
        { title: "29 = 30 − 1, times n", description: "Since 29×n = 30×n − n, every 29 times fact can be found by multiplying by 30 and subtracting the original number once: 29×6 = 180 − 6 = 174." },
      ],
      30: [
        { title: "Triple the 10 times table", description: "Since 30 = 3 × 10, every 30 times fact is exactly triple the matching 10 times fact: 30×6 = triple(10×6) = triple(60) = 180." },
        { title: "Double the 15 times table", description: "Since 30 = 2 × 15, every 30 times fact is also exactly double the matching 15 times fact." },
        { title: "Always ends in 0", description: "Because 30 is a multiple of 10, every result in the 30 times table ends in 0." },
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
      4: [
        { mistake: "Doubling only once instead of twice", solution: "Remember 4 = 2 × 2, so you must double, then double again. 4×6 is NOT 6+6=12 (that's only 2×6) — it's 12 doubled again, which is 24." },
        { mistake: "Confusing 4×7=28 with 4×8=32", solution: "Count up by 4s carefully: 24, 28, 32, 36. Say each one aloud to avoid skipping ahead." },
      ],
      5: [
        { mistake: "Losing track of odd vs. even multipliers", solution: "Odd multipliers (1,3,5,7,9) give results ending in 5; even multipliers (2,4,6,8,10) give results ending in 0. Check the multiplier's parity first." },
        { mistake: "Miscounting when skip counting past 25", solution: "Slow down around the halfway point: ...20, 25, 30... it's easy to accidentally jump to 35 without saying 30." },
      ],
      6: [
        { mistake: "Forgetting to add the extra group when using the 5×n + n trick", solution: "6×n is 5×n PLUS one more n — don't stop at the 5 times answer. 6×8 = 40 + 8 = 48, not 40." },
        { mistake: "Confusing 6×7=42 with 7×7=49 or 6×8=48", solution: "These three facts sit close together. Anchor 6×7=42 by remembering it's one 7 more than 5×7=35." },
      ],
      7: [
        { mistake: "Confusing 7 × 8 = 56 with neighboring facts", solution: "Use the rhyme: 5, 6, 7, 8 — 56 is 7 times 8. The four numbers run in counting order, making it easy to recall under pressure." },
        { mistake: "Swapping 6 × 7 (42), 7 × 7 (49), and 7 × 8 (56)", solution: "These three sit right next to each other and are the most commonly confused. Memorize them as a group: 42, 49, 56 — each is 7 more than the last." },
        { mistake: "Trying to use the last-digit shortcut from the 2 or 5 table", solution: "The 7 times table last digits cycle through all 10 possibilities — there is no short repeating pattern to exploit. Recognize this upfront and memorize the full cycle instead." },
      ],
      8: [
        { mistake: "Losing count partway through the triple doubling", solution: "Say each doubling step out loud and keep track: 'double, double, double' — for 8×5: 5→10→20→40." },
        { mistake: "Confusing 8×7=56 with 7×8=56 as if they were different facts", solution: "Multiplication is commutative — 8×7 and 7×8 always give the same answer, 56. Learning one gives you the other for free." },
      ],
      9: [
        { mistake: "Forgetting to subtract the number itself after using the ×10 shortcut", solution: "9×n = (10×n) − n. Don't stop at the 10 times answer — you still need to subtract n. For 9×7: 70 − 7 = 63, not 70." },
        { mistake: "Miscounting the finger trick", solution: "For 9×n, hold down the nth finger counting from the left. Fingers to the left of the folded one are the tens digit; fingers to the right are the units digit." },
      ],
      10: [
        { mistake: "Adding a zero to the wrong place when the number already has decimals", solution: "The 'add a zero' shortcut applies to whole numbers. For decimals, multiplying by 10 shifts the decimal point one place to the right instead." },
        { mistake: "Treating ×10 and ×100 the same way", solution: "×10 adds one zero; ×100 adds two zeros. Keep count of how many zeros the multiplier itself has." },
      ],
      11: [
        { mistake: "Assuming the mirror pattern continues past 11×9", solution: "The doubled-digit trick only works for multipliers 1 through 9. For 11×10 and beyond, use 11×n = 10×n + n instead." },
        { mistake: "Forgetting to add n after using the ×10 shortcut", solution: "11×n is 10×n PLUS n, not just the 10 times answer. 11×12 = 120 + 12 = 132." },
      ],
      12: [
        { mistake: "Forgetting to add both parts of the 10+2 split", solution: "12×n needs BOTH 10×n and 2×n added together. 12×8 = 80 + 16 = 96 — don't stop after just the 10×n part." },
        { mistake: "Confusing 12×11=132 with 12×12=144", solution: "These two sit right next to each other at the end of the standard table. Anchor 12×12=144 as a perfect square worth memorizing directly." },
      ],
      13: [
        { mistake: "Forgetting to add both parts of the 10+3 split", solution: "13×n needs BOTH 10×n and 3×n added together. 13×7 = 70 + 21 = 91 — don't stop after just the 10×n part." },
        { mistake: "Confusing 13×6=78 with 13×7=91", solution: "Check the split separately for each: 13×6 = 60+18=78, 13×7 = 70+21=91. Recompute both parts rather than guessing between neighbors." },
      ],
      14: [
        { mistake: "Forgetting to double after using the 7s shortcut", solution: "14×n is double the 7 times fact, not the same as it. 14×5 = double(7×5) = double(35) = 70, not 35." },
        { mistake: "Confusing 14×6=84 with 7×6=42", solution: "Remember 14 is exactly twice 7, so every 14 times answer should be exactly double the matching 7 times answer — use that as a built-in check." },
      ],
      15: [
        { mistake: "Adding only one part of the 10+5 split", solution: "15×n needs BOTH 10×n and 5×n added together. 15×7 = 70 + 35 = 105 — don't stop after just the 10×n part." },
        { mistake: "Losing track of odd vs. even multipliers", solution: "Since 15 is a multiple of 5, results still end in 0 or 5 depending on whether the multiplier is even or odd — the same rule as the 5 times table applies." },
      ],
      16: [
        { mistake: "Losing count while doubling four times in a row", solution: "Say each step out loud: 'double, double, double, double' — for 16×3: 3→6→12→24→48." },
        { mistake: "Confusing 16×6=96 with 16×7=112", solution: "Double-check with the 8 times table: 16×6 should be exactly double 8×6=48, which is 96." },
      ],
      17: [
        { mistake: "Forgetting to add both parts of the 10+7 split", solution: "17×n needs BOTH 10×n and 7×n added together. 17×5 = 50 + 35 = 85 — don't stop after just the 10×n part." },
        { mistake: "Trying to find a doubling or tripling shortcut", solution: "17 is prime, so no smaller times table can be doubled or tripled to reach it. The 10+7 split is the most reliable method." },
      ],
      18: [
        { mistake: "Subtracting the wrong amount in the 20−2 trick", solution: "18×n = 20×n − 2×n, not 20×n − 2. Make sure to subtract 2 times the original number, not just 2. 18×5 = 100 − 10 = 90." },
        { mistake: "Confusing 18×9=162 with 18×8=144", solution: "The digit-sum check alone won't tell these apart, since both add up to 9. Recompute using 20×n − 2×n for whichever one you're unsure of." },
      ],
      19: [
        { mistake: "Subtracting the wrong amount in the 20−1 trick", solution: "19×n = 20×n − n, not 20×n − 1. Make sure to subtract the full original number. 19×8 = 160 − 8 = 152." },
        { mistake: "Forgetting 19 is prime and looking for a factoring shortcut", solution: "19 has no smaller times table to double or triple into. The 20−1 split is the most reliable method here." },
      ],
      20: [
        { mistake: "Forgetting to double after using the 10s shortcut", solution: "20×n is double the 10 times fact, not the same number with an extra zero. 20×6 = double(10×6) = double(60) = 120." },
        { mistake: "Confusing 20×n with 2×n", solution: "20×n always ends in 0 and is exactly ten times larger than 2×n. Double-check by comparing: 20×4=80 should be ten times 2×4=8." },
      ],
      21: [
        { mistake: "Forgetting to add the extra group in the 20+1 trick", solution: "21×n is 20×n PLUS one more n — don't stop at the 20 times answer. 21×7 = 140 + 7 = 147, not 140." },
        { mistake: "Confusing 21×n with 12×n", solution: "21 and 12 use the same digits but are very different numbers. Keep the split separate: 21×n = 20×n+n, while 12×n = 10×n+2×n." },
      ],
      22: [
        { mistake: "Forgetting to double after using the 11s shortcut", solution: "22×n is double the 11 times fact. 22×5 = double(11×5) = double(55) = 110, not 55." },
        { mistake: "Assuming the mirror-digit pattern from 11 still applies", solution: "The 11 times table's mirror-digit trick (11×4=44) does not carry over directly to 22 — always double the 11 times fact instead of guessing a pattern." },
      ],
      23: [
        { mistake: "Forgetting to add both parts of the 20+3 split", solution: "23×n needs BOTH 20×n and 3×n added together. 23×6 = 120 + 18 = 138 — don't stop after just the 20×n part." },
        { mistake: "Trying to find a doubling or tripling shortcut", solution: "23 is prime, so no smaller times table can be doubled or tripled to reach it. The 20+3 split is the most reliable method." },
      ],
      24: [
        { mistake: "Mixing up the tripling and doubling shortcuts mid-calculation", solution: "24×n can be found as triple(8×n) OR double(12×n) — both are correct, but don't mix the two methods together in the same calculation." },
        { mistake: "Confusing 24×6=144 with 24×7=168", solution: "Recompute using triple(8×n): 24×6 = triple(48) = 144, and 24×7 = triple(56) = 168 — check both from scratch rather than guessing the difference." },
      ],
      25: [
        { mistake: "Forgetting to divide by 4 after multiplying by 100", solution: "25×n = (100×n) ÷ 4, not just 100×n. 25×6 = 600 ÷ 4 = 150, not 600." },
        { mistake: "Miscounting the last two digits", solution: "25's multiples only ever end in 00, 25, 50, or 75 — if your answer's last two digits don't match one of these, recheck your work." },
      ],
      26: [
        { mistake: "Forgetting to double after using the 13s shortcut", solution: "26×n is double the 13 times fact. 26×5 = double(13×5) = double(65) = 130, not 65." },
        { mistake: "Confusing 26×n with 62×n", solution: "Digit transpositions are an easy slip at this size — always double-check which number is being multiplied before starting." },
      ],
      27: [
        { mistake: "Forgetting to triple, not just double, the 9s shortcut", solution: "27×n is triple the 9 times fact, not double. 27×4 = triple(9×4) = triple(36) = 108, not 72." },
        { mistake: "Subtracting the wrong amount in the 30−3 trick", solution: "27×n = 30×n − 3×n, not 30×n − 3. Make sure to subtract 3 times the original number. 27×5 = 150 − 15 = 135." },
      ],
      28: [
        { mistake: "Forgetting to quadruple, not just double, the 7s shortcut", solution: "28×n is four times the 7 times fact, not two times. 28×3 = 4×(7×3) = 4×21 = 84, not 42." },
        { mistake: "Confusing 28's perfect-number property with a multiplication shortcut", solution: "28 being a perfect number (1+2+4+7+14=28) is a fact about its divisors, not a multiplication trick — keep it separate from calculating the times table itself." },
      ],
      29: [
        { mistake: "Subtracting the wrong amount in the 30−1 trick", solution: "29×n = 30×n − n, not 30×n − 1. Make sure to subtract the full original number. 29×7 = 210 − 7 = 203." },
        { mistake: "Forgetting 29 is prime and looking for a factoring shortcut", solution: "29 has no smaller times table to double or triple into. The 30−1 split is the most reliable method here." },
      ],
      30: [
        { mistake: "Mixing up the tripling and doubling shortcuts mid-calculation", solution: "30×n can be found as triple(10×n) OR double(15×n) — both are correct, but don't mix the two methods together in the same calculation." },
        { mistake: "Forgetting the result always ends in 0", solution: "Every multiple of 30 ends in 0 — if your answer doesn't, you've made an arithmetic error somewhere in the calculation." },
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
      4: [
        "Double the number, then double the result again: for 4×6, double 6 to get 12, then double 12 to get 24.",
        "Practice the 2 times table until it's automatic first — the 4 times table becomes much easier once doubling is instant.",
        "Skip count by 4s out loud: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40.",
        "Use a table shape: a table with 4 legs is a simple visual reminder that 4 comes from counting groups of four.",
      ],
      5: [
        "Take the matching 10 times fact and cut it in half: for 5×7, use 10×7=70, then halve it to get 35.",
        "Count by fives on your fingers, one hand at a time, up to 50.",
        "Say the clock connection aloud: 'Each number on a clock face is 5 minutes, so 5×6 is like 6 numbers around the clock — 30 minutes.'",
        "Skip count out loud: 5, 10, 15, 20, 25, 30, 35, 40, 45, 50.",
      ],
      6: [
        "Use 6×n = 5×n + n: find the 5 times fact first, then add one more group of n.",
        "Or double the 3 times table: 6×7 = double(3×7) = double(21) = 42.",
        "Skip count by 6s out loud: 6, 12, 18, 24, 30, 36, 42, 48, 54, 60.",
        "Picture a standard die: each face has up to 6 dots, and a pair of dice gives a hands-on model for small multiples of 6.",
      ],
      7: [
        "Say '5, 6, 7, 8 — 56 is 7 times 8!' out loud until it is automatic. This covers the hardest single fact in the table.",
        "Treat 7 × 7 = 49 as a standalone landmark to memorize, not something to calculate.",
        "Split 7 into 5 + 2 for any fact you cannot recall: 7 × 6 = (5 × 6) + (2 × 6) = 30 + 12 = 42.",
        "Or use 10 − 3: 7 × 6 = (10 × 6) − (3 × 6) = 60 − 18 = 42. Pick whichever split feels faster.",
        "Once you know 7 × n, you know 14 × n for free — just double the answer.",
      ],
      8: [
        "Double the number three times in a row: for 8×6, go 6→12→24→48.",
        "If you already know the 4 times table well, just double it once: 8×6 = double(4×6) = double(24) = 48.",
        "Skip count by 8s out loud: 8, 16, 24, 32, 40, 48, 56, 64, 72, 80.",
        "Connect it to bytes: a computer byte is 8 bits, a fact many students find memorable once they start using computers.",
      ],
      9: [
        "Use the ×10 minus n trick: multiply by 10, then subtract the original number. 9×8 = 80 − 8 = 72.",
        "Try the finger trick: hold up all 10 fingers, fold down the nth finger for 9×n, and read the tens (left of the fold) and units (right of the fold).",
        "Check your answer with the digit-sum rule: the digits of any 9 times fact (from 9×1 to 9×10) should add up to 9.",
        "Skip count out loud: 9, 18, 27, 36, 45, 54, 63, 72, 81, 90.",
      ],
      10: [
        "Just append a 0 to the end of the number: for 6×10, write 6 then add a 0 to get 60.",
        "Use it as a shortcut for other tables: to check 9×6, calculate 10×6=60 and subtract 6 to get 54.",
        "Practice counting by tens out loud: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100.",
        "Connect it to money: counting $10 bills is the same as multiplying by 10.",
      ],
      11: [
        "For multipliers 1-9, just write the digit twice: 11×6 = 66.",
        "For larger multipliers, use 11×n = 10×n + n: 11×15 = 150 + 15 = 165.",
        "Double-check two-digit multiplications by adding the digits and inserting the sum in the middle (when the digit sum is less than 10): for 11×23, add 2+3=5 and insert it between: 253.",
        "Say the pattern aloud for 1-9 until it's automatic: 11, 22, 33, 44, 55, 66, 77, 88, 99.",
      ],
      12: [
        "Split 12 into 10 + 2: multiply by 10, multiply by 2, then add the results. 12×9 = 90 + 18 = 108.",
        "If you know the 6 times table well, just double it: 12×5 = double(6×5) = double(30) = 60.",
        "Memorize 12×12=144 as a standalone landmark — it's one of the most commonly used facts beyond the standard table.",
        "Connect it to real dozens: a carton of a dozen eggs is a hands-on model for counting in 12s.",
      ],
      13: [
        "Split 13 into 10 + 3: multiply by 10, multiply by 3, then add the results. 13×6 = 60 + 18 = 78.",
        "Say the split aloud each time until it becomes automatic: 'ten sixes plus three sixes.'",
        "Remember 13 is prime, so there's no doubling or tripling shortcut — the 10+3 split is the most reliable method.",
        "Practice with a deck of cards: each suit has 13 cards, giving a hands-on way to picture small multiples of 13.",
      ],
      14: [
        "Double every 7 times fact: 14×n = double(7×n). Master the 7 times table first, then this one comes almost for free.",
        "Connect it to a fortnight: two weeks is 14 days, a useful everyday anchor for the number itself.",
        "Skip count by 14s out loud: 14, 28, 42, 56, 70, 84, 98, 112, 126, 140.",
        "Double-check any 14 times answer by halving it — the result should exactly match the matching 7 times fact.",
      ],
      15: [
        "Split 15 into 10 + 5: multiply by 10, multiply by 5, then add the results. 15×6 = 60 + 30 = 90.",
        "Or triple the 5 times table: 15×6 = triple(5×6) = triple(30) = 90.",
        "Remember results always end in 0 or 5, just like the 5 times table — use this to catch errors quickly.",
        "Connect it to time: 15 minutes is a quarter hour, a familiar everyday anchor for the number.",
      ],
      16: [
        "Double the 8 times table: 16×n = double(8×n). This is usually faster than doubling four separate times.",
        "Or double four times in a row from the original number: for 16×3, go 3→6→12→24→48.",
        "Memorize 16×16=256 as a standalone landmark if you continue past the standard 1-10 range.",
        "Connect it to weight: 16 ounces make a pound, a useful everyday anchor for the number.",
      ],
      17: [
        "Split 17 into 10 + 7: multiply by 10, multiply by 7, then add the results. 17×6 = 60 + 42 = 102.",
        "Or try 20 − 3: multiply by 20, then subtract triple the original number.",
        "Accept that 17 has no shortcut and simply needs extra repetition — say each fact aloud several times.",
        "Skip count by 17s out loud to reinforce the sequence: 17, 34, 51, 68, 85, 102, 119, 136, 153, 170.",
      ],
      18: [
        "Use 18×n = 20×n − 2×n: multiply by 20, then subtract double the original number. 18×6 = 120 − 12 = 108.",
        "Or double the 9 times table: 18×n = double(9×n).",
        "Or triple the 6 times table: 18×n = triple(6×n) — pick whichever smaller table you know best.",
        "Check your answer with the digit-sum rule: the digits of an 18 times fact should always add up to a multiple of 9.",
      ],
      19: [
        "Use 19×n = 20×n − n: multiply by 20, then subtract the original number once. 19×6 = 120 − 6 = 114.",
        "Say it aloud as a habit: 'twenty groups, minus one group.'",
        "Skip count by 19s out loud: 19, 38, 57, 76, 95, 114, 133, 152, 171, 190.",
        "Double-check by comparing to the matching 20 times fact — your answer should always be exactly n less.",
      ],
      20: [
        "Double the 10 times table: 20×n = double(10×n). 20×6 = double(60) = 120.",
        "Or append a zero to the number, then double it: for 6, that's 60, doubled to 120.",
        "Skip count by 20s out loud: 20, 40, 60, 80, 100, 120, 140, 160, 180, 200.",
        "Connect it to the historical term 'score' (meaning 20) for an extra memory anchor.",
      ],
      21: [
        "Use 21×n = 20×n + n: multiply by 20, then add one more group of the original number. 21×6 = 120 + 6 = 126.",
        "Or triple the 7 times table: 21×n = triple(7×n).",
        "Connect it to blackjack: the target score of 21 gives an intuitive sense of what different multiples look like.",
        "Skip count by 21s out loud: 21, 42, 63, 84, 105, 126, 147, 168, 189, 210.",
      ],
      22: [
        "Double the 11 times table: 22×n = double(11×n). 22×5 = double(55) = 110.",
        "Or use 22×n = 20×n + 2×n, adding the 20 times fact and the 2 times fact together.",
        "Connect it to soccer: 22 players total on the pitch (11 per side) is a memorable real-world anchor.",
        "Skip count by 22s out loud: 22, 44, 66, 88, 110, 132, 154, 176, 198, 220.",
      ],
      23: [
        "Split 23 into 20 + 3: multiply by 20, multiply by 3, then add the results. 23×6 = 120 + 18 = 138.",
        "Remember 23 is prime, so there's no doubling or tripling shortcut available.",
        "Connect it to biology: 23 pairs of chromosomes in human DNA is a memorable anchor for the number itself.",
        "Skip count by 23s out loud to reinforce the sequence: 23, 46, 69, 92, 115, 138, 161, 184, 207, 230.",
      ],
      24: [
        "Triple the 8 times table: 24×n = triple(8×n). 24×5 = triple(40) = 120.",
        "Or double the 12 times table: 24×n = double(12×n) — use whichever smaller table you know best.",
        "Connect it to time: 24 hours in a day is a familiar everyday anchor for the number.",
        "Skip count by 24s out loud: 24, 48, 72, 96, 120, 144, 168, 192, 216, 240.",
      ],
      25: [
        "Use 25×n = (100×n) ÷ 4: multiply by 100, then divide by 4. 25×8 = 800 ÷ 4 = 200.",
        "Remember results always end in 00, 25, 50, or 75 — use this to quickly check your work.",
        "Connect it to money: 25 cents is a quarter dollar, a direct everyday model of 25 being a quarter of 100.",
        "Skip count by 25s out loud: 25, 50, 75, 100, 125, 150, 175, 200, 225, 250.",
      ],
      26: [
        "Double the 13 times table: 26×n = double(13×n). 26×4 = double(52) = 104.",
        "Master the 13 times table's 10+3 split first — 26 becomes a simple doubling step after that.",
        "Connect it to the alphabet: 26 letters in English is a familiar everyday anchor for the number.",
        "Skip count by 26s out loud: 26, 52, 78, 104, 130, 156, 182, 208, 234, 260.",
      ],
      27: [
        "Triple the 9 times table: 27×n = triple(9×n). 27×4 = triple(36) = 108.",
        "Or use 27×n = 30×n − 3×n, subtracting triple the original number from the ×30 result.",
        "Memorize 27 = 3³ (3 cubed) as a standalone landmark fact.",
        "Skip count by 27s out loud: 27, 54, 81, 108, 135, 162, 189, 216, 243, 270.",
      ],
      28: [
        "Quadruple the 7 times table: 28×n = 4×(7×n). 28×3 = 4×21 = 84.",
        "Or double the 14 times table: 28×n = double(14×n) — use whichever smaller table you know best.",
        "Connect it to February: 28 days in a non-leap-year February is a familiar everyday anchor.",
        "Skip count by 28s out loud: 28, 56, 84, 112, 140, 168, 196, 224, 252, 280.",
      ],
      29: [
        "Use 29×n = 30×n − n: multiply by 30, then subtract the original number once. 29×6 = 180 − 6 = 174.",
        "Say it aloud as a habit: 'thirty groups, minus one group.'",
        "Connect it to February: 29 days in a leap-year February is a memorable anchor for the number.",
        "Skip count by 29s out loud: 29, 58, 87, 116, 145, 174, 203, 232, 261, 290.",
      ],
      30: [
        "Triple the 10 times table: 30×n = triple(10×n). 30×6 = triple(60) = 180.",
        "Or double the 15 times table: 30×n = double(15×n) — use whichever smaller table you know best.",
        "Remember results always end in 0, just like the 10 times table.",
        "Connect it to the calendar rhyme: '30 days hath September, April, June, and November.'",
      ],
    }

const realLifeExamples: { [key: number]: RealLifeItem[] } = {
      1: [
        { context: "Being 'number one'", detail: "Used across languages and cultures to mean first place, top rank, or best — from race podiums to school rankings." },
        { context: "A single item of anything", detail: "Any time you count one object — one apple, one chair — you are applying the idea that 1 group of something is just that thing." },
        { context: "The first position in a sequence", detail: "Page 1, Day 1, Round 1 — 1 marks the starting point of countless numbered systems." },
      ],
      2: [
        { context: "Pairs of shoes, socks, and gloves", detail: "Most everyday pairs come in sets of 2 — a direct real-world model of doubling." },
        { context: "Eyes and ears", detail: "The human body has 2 eyes and 2 ears, among many other paired features." },
        { context: "Bicycle wheels", detail: "A standard bicycle has 2 wheels, unlike a tricycle (3) or unicycle (1)." },
        { context: "Binary code in computing", detail: "Computers store and process information using binary (base-2), built entirely from just two digits: 0 and 1." },
      ],
      3: [
        { context: "Traffic lights", detail: "Standard traffic signals use 3 colors — red, yellow (amber), and green." },
        { context: "Triangles", detail: "Every triangle has exactly 3 sides and 3 angles, the simplest possible polygon." },
        { context: "Medal podiums", detail: "Olympic and many other competitions award 3 medals — gold, silver, and bronze." },
        { context: "Primary colors", detail: "In traditional color theory taught in schools, red, yellow, and blue are treated as the 3 primary colors." },
      ],
      4: [
        { context: "The four seasons", detail: "Many regions of the world describe the year as having 4 seasons — spring, summer, autumn, and winter." },
        { context: "Cardinal directions", detail: "A compass has 4 main directions: north, south, east, and west." },
        { context: "Table legs", detail: "Most tables and chairs are built with 4 legs for stability." },
        { context: "Card suits", detail: "A standard deck of 52 playing cards is divided into 4 suits: hearts, diamonds, clubs, and spades." },
      ],
      5: [
        { context: "Fingers on one hand", detail: "Most people have 5 fingers per hand, making 5 one of the most natural numbers for early counting." },
        { context: "The five senses", detail: "Sight, hearing, smell, taste, and touch are commonly described as the 5 traditional human senses." },
        { context: "A pentagon", detail: "A pentagon is a five-sided shape, and the U.S. Department of Defense headquarters is famously named for its pentagon shape." },
        { context: "Money in 5s", detail: "Many currencies include a 5-unit coin or bill, such as the U.S. nickel (5 cents) or $5 bill." },
      ],
      6: [
        { context: "Faces on a cube", detail: "A standard six-sided die (a cube) has exactly 6 faces." },
        { context: "Insect legs", detail: "All insects, by definition, have 6 legs — it's one of the traits that separates them from spiders, which have 8." },
        { context: "Guitar strings", detail: "A standard acoustic or electric guitar has 6 strings." },
        { context: "Half a dozen", detail: "Eggs and baked goods are commonly sold by the half-dozen — a pack of 6." },
      ],
      7: [
        { context: "7 days in a week", detail: "Used in nearly every calendar system in the world today." },
        { context: "7 continents", detail: "Africa, Antarctica, Asia, Australia, Europe, North America, and South America — in the model most commonly taught in schools." },
        { context: "7 notes in a musical scale", detail: "A, B, C, D, E, F, G — before the pattern repeats an octave higher." },
        { context: "7 colors in a rainbow", detail: "Red, orange, yellow, green, blue, indigo, and violet — a division first popularized by Isaac Newton." },
        { context: "The Seven Wonders of the Ancient World", detail: "Including the Great Pyramid of Giza (the only one still standing today)." },
      ],
      8: [
        { context: "Spider legs", detail: "Spiders and other arachnids have 8 legs, unlike insects, which have 6." },
        { context: "Octopus arms", detail: "An octopus has 8 arms, which is where its name comes from (Greek 'okto' meaning eight)." },
        { context: "A byte in computing", detail: "In computer science, 8 bits make up 1 byte, the basic unit used to measure digital storage and memory." },
        { context: "A musical octave", detail: "In Western music, an octave spans 8 notes (for example, C to the next C: C, D, E, F, G, A, B, C)." },
      ],
      9: [
        { context: "Baseball innings", detail: "A standard baseball game consists of 9 innings." },
        { context: "A 3×3 square", detail: "9 is a perfect square: a grid of 3 rows and 3 columns contains exactly 9 squares, like a tic-tac-toe board." },
        { context: "The solar system, historically", detail: "For much of the 20th century, students learned there were 9 planets; Pluto was reclassified as a dwarf planet in 2006, leaving 8 recognized planets today." },
      ],
      10: [
        { context: "The decimal number system", detail: "Nearly all modern counting systems are base-10, built entirely around groups of ten." },
        { context: "Fingers and toes", detail: "Most people have 10 fingers and 10 toes, which is widely believed to be part of why base-10 counting became so common historically." },
        { context: "The decathlon", detail: "A decathlon is a track-and-field competition made up of exactly 10 events." },
        { context: "Money in 10s", detail: "Many currencies are structured around units of 10, such as 10-dollar or 10-euro bills." },
      ],
      11: [
        { context: "Players on a football/soccer team", detail: "Each side in a standard game of association football (soccer) fields 11 players." },
        { context: "Two-digit repdigits", detail: "11 is the smallest two-digit number made of a single repeated digit, a pattern that shows up directly in its multiplication table." },
      ],
      12: [
        { context: "Months in a year", detail: "The calendar year is divided into 12 months." },
        { context: "Inches in a foot", detail: "In the imperial measurement system, 1 foot equals 12 inches." },
        { context: "Hours on a clock face", detail: "A standard analog clock face is divided into 12 numbers." },
        { context: "A dozen", detail: "Items like eggs and baked goods are commonly sold by the dozen — a group of 12." },
        { context: "Signs of the zodiac", detail: "The Western zodiac is traditionally divided into 12 signs." },
      ],
      13: [
        { context: "The 13 original American colonies", detail: "The United States began as 13 British colonies along the Atlantic coast before declaring independence." },
        { context: "Cards per suit", detail: "A standard 52-card deck has 13 cards in each of its four suits." },
        { context: "A baker's dozen", detail: "A 'baker's dozen' traditionally means 13 items instead of 12." },
        { context: "Triskaidekaphobia", detail: "13 is the number most associated with bad luck in Western culture — the fear of it even has its own name." },
      ],
      14: [
        { context: "A fortnight", detail: "Two weeks — 14 days — is commonly called a 'fortnight' in British and Commonwealth English." },
        { context: "Valentine's Day", detail: "Valentine's Day falls on February 14th." },
        { context: "Lines in a sonnet", detail: "A traditional sonnet, such as those written by Shakespeare, has exactly 14 lines." },
      ],
      15: [
        { context: "A quarter hour", detail: "15 minutes is a quarter of an hour, one of the most common everyday uses of the number." },
        { context: "Rugby union team size", detail: "A rugby union team fields 15 players, compared to 13 in rugby league." },
      ],
      16: [
        { context: "Ounces in a pound", detail: "In the U.S. customary system, 1 pound equals 16 ounces." },
        { context: "Hexadecimal in computing", detail: "Computer scientists use base-16 (hexadecimal) as a compact way to represent binary data." },
        { context: "Pawns on a chessboard", detail: "A chess set includes 16 pawns in total — 8 for each player." },
        { context: "'Sweet sixteen'", detail: "Turning 16 is treated as a notable birthday milestone in several cultures, often called a 'sweet sixteen.'" },
      ],
      17: [
        { context: "The 'most random-feeling' number", detail: "In informal surveys asking people to pick a 'random' number in a small range, 17 is chosen more often than chance alone would predict — a quirk of human psychology rather than actual randomness." },
      ],
      18: [
        { context: "Age of majority", detail: "18 is the age of legal adulthood in many countries around the world." },
        { context: "Holes on a golf course", detail: "A standard golf course has 18 holes." },
      ],
      19: [
        { context: "The end of the teenage years", detail: "In English, the 'teen' years run from 13 to 19 — 19 is the last of them before turning 20." },
      ],
      20: [
        { context: "20/20 vision", detail: "'20/20 vision' is the standard term for normal visual sharpness, measured at a distance of 20 feet." },
        { context: "A 'score'", detail: "The old English word 'score' means 20, as in Abraham Lincoln's 'four score and seven years ago' (4×20+7=87)." },
        { context: "Fingers and toes combined", detail: "Most people have 10 fingers and 10 toes, totaling 20 digits." },
      ],
      21: [
        { context: "Blackjack", detail: "In the card game blackjack, 21 is the target score players try to reach without going over." },
        { context: "Legal drinking age in the U.S.", detail: "21 is the minimum legal drinking age in the United States, standardized nationwide following a 1984 federal law." },
        { context: "A 21-gun salute", detail: "A 21-gun salute is a traditional military honor used at state ceremonies and funerals." },
      ],
      22: [
        { context: "Players on a soccer pitch", detail: "A full game of association football (soccer) has 22 players on the field — 11 per team." },
        { context: "A cricket pitch", detail: "The playing strip between the two sets of stumps in cricket measures 22 yards." },
        { context: "Catch-22", detail: "'Catch-22,' the title of Joseph Heller's famous novel, has become a common English phrase for a no-win situation." },
      ],
      23: [
        { context: "Human chromosome pairs", detail: "A typical human cell contains 23 pairs of chromosomes — 46 in total." },
      ],
      24: [
        { context: "Hours in a day", detail: "A full day is divided into 24 hours." },
        { context: "24-karat gold", detail: "24-karat gold is considered pure gold, the highest karat rating used in jewelry." },
        { context: "Film frame rate", detail: "24 frames per second has been the standard frame rate for cinema since the era of sound film." },
      ],
      25: [
        { context: "A quarter dollar", detail: "In U.S. currency, a 25-cent coin is called a 'quarter' because it's a quarter of a dollar." },
        { context: "A quarter of 100", detail: "25 is exactly one quarter of 100, which is why percentages and 25 are closely linked." },
      ],
      26: [
        { context: "Letters in the English alphabet", detail: "The English alphabet has 26 letters, from A to Z." },
        { context: "A marathon", detail: "A marathon covers exactly 26.2 miles (26 miles and 385 yards)." },
        { context: "Bones in a human foot", detail: "Each human foot contains 26 bones, according to standard anatomy references." },
      ],
      27: [
        { context: "The '27 Club'", detail: "Several influential musicians — including Jimi Hendrix, Janis Joplin, and Kurt Cobain — died at age 27, a pattern popular culture has dubbed the '27 Club.'" },
      ],
      28: [
        { context: "Days in February", detail: "February has 28 days in every year that isn't a leap year." },
        { context: "The lunar cycle", detail: "The Moon's cycle of phases is often loosely described as about 28 days, though the precise synodic month averages closer to 29.5 days." },
      ],
      29: [
        { context: "Leap year February", detail: "In a leap year, February has 29 days instead of the usual 28." },
      ],
      30: [
        { context: "Months with 30 days", detail: "April, June, September, and November each have 30 days, as captured in the traditional calendar rhyme." },
      ],
    }

const funFacts: { [key: number]: FunFactItem[] } = {
      1: [
        { fact: "1 is the only number that is neither prime nor composite — by definition, a prime number must have exactly two distinct positive divisors, and 1 has only one (itself)." },
        { fact: "Multiplying anything by 1 is called the identity property of multiplication, one of the first formal rules students learn in arithmetic." },
        { fact: "In Roman numerals, 1 is written as a single stroke: I — the simplest symbol in the entire numeral system." },
      ],
      2: [
        { fact: "2 is the only even prime number — every other even number can be divided by 2, which makes it composite." },
        { fact: "Because 2 is the smallest prime number, it's the starting point for the entire concept of prime factorization." },
        { fact: "Doubling is one of the fastest mental math tricks there is — repeatedly doubling a number also shows up in binary computing as powers of 2: 2, 4, 8, 16, 32..." },
      ],
      3: [
        { fact: "The digit-sum divisibility trick for 3 works because 10 leaves a remainder of 1 when divided by 3 — the same underlying reason the trick also works for 9." },
        { fact: "3 is the smallest odd prime number." },
        { fact: "A triangle is the only polygon that is naturally rigid, which is why three-sided shapes are used throughout bridges and building frames." },
      ],
      4: [
        { fact: "4 is the smallest composite number — the first number greater than 1 that isn't prime, since it can be divided evenly by 2." },
        { fact: "4 is a perfect square: 4 = 2 × 2, or 2²." },
        { fact: "Because 4 = 2 × 2, the 4 times table can always be found by doubling the 2 times table — no new memorization needed if you already know your 2s." },
      ],
      5: [
        { fact: "5 is exactly halfway between 0 and 10, which is why the 5 times table is always half of the matching 10 times table." },
        { fact: "5 is a prime number, and it's the only prime number that ends in the digit 5." },
        { fact: "Clocks use 5-minute intervals between numbers, so multiplying by 5 is built into how most people read time without even thinking about it." },
      ],
      6: [
        { fact: "6 is the smallest perfect number — a number whose proper divisors (1, 2, and 3) add up exactly to itself: 1 + 2 + 3 = 6." },
        { fact: "6 = 2 × 3, making it the smallest number that is a product of two different prime numbers." },
        { fact: "Because 6 is even and divisible by 3, every multiple of 6 is automatically divisible by both 2 and 3." },
      ],
      7: [
        { fact: "Seven is a Mersenne prime — it equals 2³ − 1 (2 × 2 × 2, minus 1), making it part of a rare family of primes tied to powers of 2." },
        { fact: "The 7-day week traces back to ancient Babylonian astronomy, which tracked exactly 7 moving objects visible without a telescope: the Sun, the Moon, and five planets — Mercury, Venus, Mars, Jupiter, and Saturn." },
        { fact: "Seven is widely considered lucky across many cultures, which is why it appears so often in games and gambling traditions worldwide." },
        { fact: "James Bond's famous code number is 007, and Snow White lives with exactly seven dwarfs." },
      ],
      8: [
        { fact: "8 = 2³, making it the first cube number greater than 1 (2 × 2 × 2 = 8)." },
        { fact: "The word 'octopus' and the musical term 'octave' both come from the same root meaning eight." },
        { fact: "8 is the only number from 1 to 12 that takes three rounds of doubling to reach from 2 (2 → 4 → 8)." },
      ],
      9: [
        { fact: "9 is a perfect square: 9 = 3 × 3, or 3²." },
        { fact: "No matter how large a multiple of 9 you calculate, repeatedly adding its digits together will always eventually reduce to 9 — a property mathematicians call a 'digital root.'" },
        { fact: "9 is the largest single-digit number, sitting at the very end of the one-digit counting system before place value begins at 10." },
      ],
      10: [
        { fact: "The word 'decathlon' comes from Greek roots meaning 'ten contests.'" },
        { fact: "Multiplying by 10 is the only single-digit times table where every result follows one exact, exception-free rule: append a zero." },
        { fact: "Because most people have 10 fingers, base-10 (decimal) counting is thought to be one of the most common numeral systems throughout human history." },
      ],
      11: [
        { fact: "11 is a prime number — its only factors are 1 and itself." },
        { fact: "11 is the smallest two-digit prime number." },
        { fact: "The mirror-digit pattern (11×4=44, 11×7=77) only works for single-digit multipliers — one of the clearest examples in the times tables of a pattern with a built-in limit." },
      ],
      12: [
        { fact: "12 is a highly composite number — it has more divisors (1, 2, 3, 4, 6, 12) than any smaller positive number." },
        { fact: "The word 'dozen' comes from the Old French 'douzaine,' meaning a group of twelve." },
        { fact: "A group of 144 items — 12 dozen — is traditionally called a 'gross.'" },
      ],
      13: [
        { fact: "13 is a prime number — its only factors are 1 and itself." },
        { fact: "Fear of the number 13 has a formal name: triskaidekaphobia." },
        { fact: "Many buildings skip labeling a 13th floor because of the superstition surrounding the number." },
      ],
      14: [
        { fact: "14 = 2 × 7, so every 14 times fact is simply double the matching 7 times fact." },
        { fact: "The word 'fortnight' is a contraction of 'fourteen nights,' the old English term for two weeks." },
      ],
      15: [
        { fact: "15 is a triangular number — it's the sum of the first five counting numbers: 1+2+3+4+5=15." },
        { fact: "15 = 3 × 5, making it the product of the two smallest odd prime numbers." },
      ],
      16: [
        { fact: "16 = 2⁴, making it the first fourth-power number greater than 1." },
        { fact: "16 is also a perfect square: 16 = 4 × 4." },
        { fact: "Computers commonly use base-16 (hexadecimal) because each hex digit maps neatly onto exactly 4 binary bits." },
      ],
      17: [
        { fact: "17 is a prime number with no smaller times table that can be doubled or tripled to reach it." },
        { fact: "In informal psychological surveys, people asked to name a 'random' number between 1 and 20 pick 17 disproportionately often — a curiosity of human number preference rather than true randomness." },
      ],
      18: [
        { fact: "18 = 2 × 9 = 3 × 6, giving it more than one valid doubling or tripling shortcut." },
        { fact: "Because 18 is a multiple of 9, every multiple of 18 also follows the digit-sum-divisible-by-9 rule." },
      ],
      19: [
        { fact: "19 is a prime number, and it's the last of the 'teen' numbers (13 through 19)." },
        { fact: "19 = 20 − 1, which is why multiplying by 19 is often easier by first multiplying by 20." },
      ],
      20: [
        { fact: "The word 'score,' meaning 20, is an old English counting term still remembered today mainly through phrases like 'four score and seven years ago.'" },
        { fact: "20 = 4 × 5 = 2 × 10, giving it several different factor pairs to build the times table from." },
      ],
      21: [
        { fact: "21 = 3 × 7, the product of two smaller times tables students likely already know." },
        { fact: "In blackjack, the number 21 is the exact target score — going over it means an automatic loss." },
      ],
      22: [
        { fact: "22 = 2 × 11, so its times table is a direct doubling of the 11 times table's mirror-digit pattern." },
        { fact: "The title of Joseph Heller's novel 'Catch-22' has become a standalone English phrase for a paradoxical, no-win situation." },
      ],
      23: [
        { fact: "23 is a prime number — its only factors are 1 and itself." },
        { fact: "Human cells contain 23 pairs of chromosomes, one of the most-cited facts about the number 23 outside of mathematics." },
      ],
      24: [
        { fact: "24 is a highly composite number — it has more divisors (1, 2, 3, 4, 6, 8, 12, 24) than any smaller positive number." },
        { fact: "24 = 2³ × 3, combining a power of 2 with a factor of 3." },
      ],
      25: [
        { fact: "25 is a perfect square: 25 = 5 × 5." },
        { fact: "Because 25 is exactly a quarter of 100, multiplying by 25 is often faster done as ×100 ÷ 4." },
      ],
      26: [
        { fact: "26 = 2 × 13, so its times table is a direct doubling of the 13 times table." },
        { fact: "The 26 letters of the English alphabet make 26 one of the most frequently encountered numbers in everyday written language." },
      ],
      27: [
        { fact: "27 is a perfect cube: 27 = 3 × 3 × 3, or 3³." },
        { fact: "The '27 Club' is a pop-culture term for the number of well-known musicians who died at that age — a pattern widely referenced in music history, though researchers have found no statistical evidence of unusual mortality risk specifically at age 27." },
      ],
      28: [
        { fact: "28 is a perfect number — its proper divisors (1, 2, 4, 7, 14) add up exactly to 28 itself, making it only the second perfect number after 6." },
        { fact: "28 = 4 × 7, connecting it directly to two smaller times tables." },
      ],
      29: [
        { fact: "29 is a prime number — its only factors are 1 and itself." },
        { fact: "29 only appears as a date on the calendar during leap years, when February gains an extra day." },
      ],
      30: [
        { fact: "30 = 2 × 3 × 5, the product of the three smallest prime numbers." },
        { fact: "30 has an unusually large number of small factors for its size, which is part of why it divides evenly into so many everyday measurements." },
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

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

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
      31: "The 31 times table is the first prime number times table beyond 30, and since 31 is prime, there's no smaller table to double or triple into it. The most reliable method is to split 31 into 30 + 1: multiply by 30, then add one more group of the original number. This is the same split-and-add approach used for other primes in this range, and it stays reliable no matter how large the times table gets.",
      32: "The 32 times table is built entirely from powers of 2, since 32 = 2⁵. This means it can be reached by doubling a number five times in a row, making it one of the more mechanical times tables to calculate even though it looks intimidating at first. Because 32 also marks the freezing point of water in Fahrenheit and the number of teeth in a full adult set, it's a number many students already encounter regularly outside of math class.",
      33: "The 33 times table can be reached by splitting 33 into 30 + 3, or by tripling the 11 times table since 33 = 3 × 11. Both methods are equally valid, so it's worth trying each to see which feels faster. The number 33 also carries meaning outside of math — it's commonly cited as the number of vertebrae in the human spine and holds traditional significance in several cultural and religious contexts.",
      34: "The 34 times table doubles a table students likely already know, since 34 = 2 × 17. It can also be split as 30 + 4 for a quick add-and-multiply method. Mathematically, 34 is a Fibonacci number — the sum of the two Fibonacci numbers before it, 13 and 21 — connecting the times table to a completely different, famous number sequence.",
      35: "The 35 times table combines two tables students likely know well, since 35 = 5 × 7. It can be reached by multiplying the 5 times table by 7, multiplying the 7 times table by 5, or splitting it as 30 + 5. Outside of math, 35 is best known through 35mm film, the standard format that shaped photography and cinema for most of the 20th century.",
      36: "The 36 times table is unusually rich in patterns because 36 is both a perfect square (6×6=36) and a triangular number (1+2+...+8=36). It can be reached by multiplying the 9 times table by 4, the 4 times table by 9, or the 6 times table by itself. Because 36 inches make a yard, it's also a number many students already encounter in everyday measurement.",
      37: "The 37 times table has no factoring shortcut, since 37 is prime. The most efficient approach is often 40×n − 3×n: multiply by 40, then subtract triple the original number. Mathematically, 37 has an unusual property — it's a factor of every three-digit repdigit number (111, 222, 333, and so on up through 999), because 37 × 3 = 111.",
      38: "The 38 times table can be reached by splitting 38 into 40 − 2, or by doubling the 19 times table since 38 = 2 × 19. Historically, the number 38 is tied to the 38th parallel, the line of latitude that came to define the boundary between North and South Korea. Recognizing 38 as 'just under 40' makes it one of the more approachable two-digit times tables in this range.",
      39: "The 39 times table can be built by splitting 39 into 40 − 1, or by tripling the 13 times table since 39 = 3 × 13. Because 39 sits just one below the very approachable 40 times table, the subtraction method is usually the fastest way to calculate it in your head.",
      40: "The 40 times table builds directly on the 10 and 4 times tables, since 40 = 4 × 10. Every 40 times fact can be found by multiplying by 10 and then by 4 (or vice versa), making it one of the more mechanical two-digit times tables to calculate. The number 40 also carries deep cultural and linguistic history — it appears repeatedly in biblical narratives, defines the standard work week in many countries, and is the root of the word 'quarantine,' which comes from the Italian for 'forty days.'",
      41: "The 41 times table has no factoring shortcut, since 41 is prime. The most efficient method is 40×n + n: multiply by 40, then add one more group of the original number. Because 41 sits directly next to 43 with only 42 between them, the two form what mathematicians call a twin prime pair — primes that differ by exactly 2.",
      42: "The 42 times table combines three small prime factors at once, since 42 = 2 × 3 × 7. It can be reached by tripling the 14 times table, doubling the 21 times table, or multiplying the 6 and 7 times tables together. Beyond arithmetic, 42 has become a piece of pop-culture trivia as 'the Answer to the Ultimate Question of Life, the Universe, and Everything' in Douglas Adams's novel The Hitchhiker's Guide to the Galaxy.",
      43: "The 43 times table has no factoring shortcut, since 43 is prime. The most efficient method is 40×n + 3×n: multiply by 40, then add triple the original number. Like 41, it forms a twin prime pair — 41 and 43 are separated by exactly one even number, 42.",
      44: "The 44 times table quadruples a table students already know well, since 44 = 4 × 11. Because 44 = 4 × 11, the 11 times table's mirror-digit pattern carries through in a modified form, and the whole table can be found by multiplying the 11 times fact by 4. Barack Obama, the 44th president of the United States, gives the number a memorable modern reference point.",
      45: "The 45 times table can be reached by splitting 45 into 50 − 5, or by recognizing that 45 = 9 × 5. Mathematically, 45 is a triangular number (1+2+...+9=45), and 45° is exactly half of a right angle, giving the number a strong presence in geometry as well as arithmetic. Vinyl 'singles' spinning at 45 RPM also made the number a familiar cultural reference for much of the 20th century.",
      46: "The 46 times table can be reached by splitting 46 into 50 − 4, or by doubling the 23 times table since 46 = 2 × 23. The number 46 also has direct significance in biology — it's the total number of chromosomes in a typical human cell, made up of 23 matching pairs.",
      47: "The 47 times table has no factoring shortcut, since 47 is prime. The most efficient method is 50×n − 3×n: multiply by 50, then subtract triple the original number. The number 47 also has an odd claim to fame in pop culture — it's a running injoke among Star Trek fans and writers, who reportedly wrote it into the background of many episodes.",
      48: "The 48 times table benefits from several shortcuts because 48 = 2⁴ × 3, making it a highly composite number for its size. It can be reached by tripling the 16 times table, quadrupling the 12 times table, or splitting it as 50 − 2. Because 48 hours make exactly two days and 48 states make up the contiguous United States, it's a number many students already recognize from everyday contexts.",
      49: "The 49 times table centers on a single unmissable fact: 49 = 7². It can be reached by squaring the 7 times table, or by splitting 49 as 50 − 1, subtracting the original number once from the ×50 result. Because 7×7=49 is already one of the most heavily memorized facts in the entire multiplication table, students often find this a natural extension rather than a brand-new challenge.",
      50: "The 50 times table is closely tied to the number 100, since 50 is exactly half of it. Every 50 times fact can be found by multiplying by 100 and dividing by 2, which is often faster than direct multiplication. Because there are 50 U.S. states and a 50th anniversary is traditionally called a 'golden' anniversary, 50 is a number with strong cultural associations well beyond arithmetic.",
      51: "The 51 times table can be reached by splitting 51 into 50 + 1, or by recognizing that 51 = 3 × 17. Because 51 sits just one above the very approachable 50 times table, the addition method is usually the fastest way to calculate it mentally. Outside of math, 51 is best known as the number attached to Area 51, one of the most famous classified U.S. military installations.",
      52: "The 52 times table can be reached by splitting 52 into 50 + 2, or by multiplying the 13 times table by 4 since 52 = 4 × 13. Because a year has 52 weeks and a standard deck of cards has 52 cards, this is one of the more instantly recognizable two-digit numbers in everyday life.",
      53: "The 53 times table has no factoring shortcut, since 53 is prime. The most efficient method is 50×n + 3×n: multiply by 50, then add triple the original number, the same 'split near a round number' strategy used for every prime in this range.",
      54: "The 54 times table can be reached by splitting 54 into 50 + 4, or by tripling the 18 times table since 54 = 3 × 18 (and equally, 54 = 2 × 27). Beyond arithmetic, 54 is a concrete, countable number for anyone who has picked up a Rubik's Cube — the classic 3×3 puzzle has exactly 54 colored squares.",
      55: "The 55 times table can be reached by splitting 55 into 50 + 5, or by multiplying the 11 times table by 5 since 55 = 5 × 11. Mathematically, 55 is both a triangular number (1+2+...+10=55) and a Fibonacci number, connecting the times table to two different famous number sequences. For decades, 55 miles per hour was also the maximum speed limit on U.S. highways, a historical anchor many adults still associate with the number.",
      56: "The 56 times table can be reached by splitting 56 into 50 + 6, or by multiplying the 7 times table by 8 since 56 = 7 × 8. Because 7×8=56 is one of the most commonly confused facts in the entire standard multiplication table, students who already have a memory trick for it (like the rhyme '5, 6, 7, 8 — 56 is 7 times 8') often find that fact easiest to recall in this whole table.",
      57: "The 57 times table can be reached by splitting 57 into 60 − 3, or by recognizing that 57 = 3 × 19. The number 57 also carries a well-known piece of marketing history — it's permanently associated with Heinz's famous '57 Varieties' slogan, first used by the company in 1896.",
      58: "The 58 times table can be reached by splitting 58 into 60 − 2, or by doubling the 29 times table since 58 = 2 × 29. Recognizing 58 as 'just under 60' makes it one of the more approachable two-digit times tables in this range.",
      59: "The 59 times table has no factoring shortcut, since 59 is prime. The most efficient method is 60×n − n: multiply by 60, then subtract the original number once — the same 'one less than a round number' strategy that makes 9, 19, 29, and 39 manageable. Fittingly, 59 itself is one less than the 60 seconds that make up a minute.",
      60: "The 60 times table closes out this range as one of the richest in shortcuts, because 60 = 2² × 3 × 5 is a highly composite number. It can be reached by tripling the 20 times table, multiplying the 6 and 10 times tables together, or doubling the 30 times table. The number 60 also has deep historical roots — ancient Babylonian mathematicians used a base-60 (sexagesimal) number system, which is why a minute has 60 seconds and an hour has 60 minutes to this day.",
      61: "The 61 times table has no factoring shortcut, since 61 is prime. The most efficient method is 60×n + n: multiply by 60, then add one more group of the original number — the same 'one more than a round number' strategy that makes primes like 31 and 41 manageable.",
      62: "The 62 times table can be reached by splitting 62 into 60 + 2, or by doubling the 31 times table since 62 = 2 × 31. Recognizing 62 as 'just over 60' makes it one of the more approachable two-digit times tables in this range.",
      63: "The 63 times table can be reached by splitting 63 into 60 + 3, or by multiplying the 7 and 9 times tables together, since 63 = 7 × 9. Mathematically, 63 sits one below 64, which is itself a power of 2 (2⁶) — a relationship worth noticing even though it isn't a calculation shortcut on its own.",
      64: "The 64 times table is unusually rich mathematically because 64 is both a perfect square (8×8) and a perfect cube (4×4×4), and it's also 2 to the 6th power. It can be reached by doubling a number six times in a row, or by squaring the 8 times table. Because a chessboard has 64 squares and classic Crayola boxes famously contain 64 crayons, this is also one of the more culturally recognizable two-digit numbers.",
      65: "The 65 times table can be reached by splitting 65 into 60 + 5, or by recognizing that 65 = 5 × 13. The number 65 also carries strong cultural significance as a traditional retirement age in many countries and as a widely used highway speed limit.",
      66: "The 66 times table can be reached by splitting 66 into 60 + 6, or by multiplying the 11 times table by 6 since 66 = 6 × 11. Outside of math, 66 is inseparable from Route 66, the historic U.S. highway that became a cultural icon of American road travel.",
      67: "The 67 times table has no factoring shortcut, since 67 is prime. The most efficient method is 70×n − 3×n: multiply by 70, then subtract triple the original number.",
      68: "The 68 times table can be reached by splitting 68 into 70 − 2, or by multiplying the 17 times table by 4 since 68 = 4 × 17. Recognizing 68 as 'just under 70' makes it one of the more approachable two-digit times tables in this range.",
      69: "The 69 times table can be built by splitting 69 into 70 − 1, or by recognizing that 69 = 3 × 23. Because 69 sits just one below the very approachable 70 times table, the subtraction method is usually the fastest way to calculate it mentally.",
      70: "The 70 times table builds directly on the 7 and 10 times tables, since 70 = 7 × 10. Every 70 times fact can be found by multiplying by 10 and then by 7 (or vice versa), making it one of the more mechanical two-digit times tables to calculate. The number 70 also has cultural weight as a traditional biblical lifespan ('three score years and ten') and as the UK's standard motorway speed limit.",
      71: "The 71 times table has no factoring shortcut, since 71 is prime. The most efficient method is 70×n + n: multiply by 70, then add one more group of the original number.",
      72: "The 72 times table benefits from several shortcuts, since 72 = 8 × 9 = 2³ × 3². It can be reached by multiplying the 8 and 9 times tables together, tripling the 24 times table, or doubling the 36 times table. Outside of math, 72 shows up in the 'Rule of 72,' a widely used finance shortcut for estimating how many years it takes an investment to double.",
      73: "The 73 times table has no factoring shortcut, since 73 is prime. The most efficient method is 70×n + 3×n: multiply by 70, then add triple the original number. Mathematically, 73 has a couple of unusual claims to fame — it's the 21st prime number, and written in binary (1001001), it reads the same forwards and backwards.",
      74: "The 74 times table can be reached by splitting 74 into 70 + 4, or by doubling the 37 times table since 74 = 2 × 37.",
      75: "The 75 times table can be reached by splitting 75 into 50 + 25, or by recognizing that 75 = 3 × 5². Because 75 is exactly three quarters of 100, it connects closely to percentage calculations and everyday fraction reasoning.",
      76: "The 76 times table can be reached by splitting 76 into 80 − 4, or by multiplying the 19 times table by 4 since 76 = 4 × 19. The number is best known outside math through '76 Trombones,' the famous marching-band song from the musical The Music Man.",
      77: "The 77 times table can be reached by splitting 77 into 70 + 7, or by multiplying the 11 times table by 7 since 77 = 7 × 11. As a number, 77 is a numerical palindrome — it reads the same forwards and backwards, since both digits match.",
      78: "The 78 times table can be reached by splitting 78 into 80 − 2, or by recognizing that 78 = 2 × 3 × 13. Mathematically, 78 is a triangular number (1+2+...+12=78), and historically it's tied to 78 RPM records, the earliest standard format for gramophone discs.",
      79: "The 79 times table has no factoring shortcut, since 79 is prime. The most efficient method is 80×n − n: multiply by 80, then subtract the original number once.",
      80: "The 80 times table builds directly on the 8 and 10 times tables, since 80 = 8 × 10. Every 80 times fact can be found by multiplying by 10 and then by 8 (or vice versa). The number is also familiar from Jules Verne's novel Around the World in Eighty Days, and 80% is a common way of expressing four fifths of a whole.",
      81: "The 81 times table centers on a striking fact: 81 = 9², so it can be reached by squaring the 9 times table. Because 81 is a multiple of 9, the digit-sum rule from the 9 times table carries through — the digits of any 81 times fact always add up to a multiple of 9.",
      82: "The 82 times table can be reached by splitting 82 into 80 + 2, or by doubling the 41 times table since 82 = 2 × 41.",
      83: "The 83 times table has no factoring shortcut, since 83 is prime. The most efficient method is 80×n + 3×n: multiply by 80, then add triple the original number.",
      84: "The 84 times table can be reached by splitting 84 into 80 + 4, or by multiplying the 7 and 12 times tables together, since 84 = 7 × 12. Because 84 = 2² × 3 × 7, it has several valid factoring paths to choose from depending on which smaller table feels most familiar.",
      85: "The 85 times table can be reached by splitting 85 into 90 − 5, or by multiplying the 17 times table by 5 since 85 = 5 × 17.",
      86: "The 86 times table can be reached by splitting 86 into 90 − 4, or by doubling the 43 times table since 86 = 2 × 43. Outside of math, 'eighty-six' or '86' is well-known restaurant and bar slang for discarding an item or removing someone from a venue.",
      87: "The 87 times table can be reached by splitting 87 into 90 − 3, or by tripling the 29 times table since 87 = 3 × 29.",
      88: "The 88 times table can be reached by splitting 88 into 90 − 2, or by multiplying the 11 times table by 8 since 88 = 8 × 11. The number 88 is instantly recognizable to musicians as the number of keys on a standard piano, and to astronomers as the total number of officially recognized constellations.",
      89: "The 89 times table has no factoring shortcut, since 89 is prime. The most efficient method is 90×n − n: multiply by 90, then subtract the original number once. Mathematically, 89 is also a Fibonacci number, equal to the sum of the two Fibonacci numbers before it, 34 and 55.",
      90: "The 90 times table builds directly on the 9 and 10 times tables, since 90 = 9 × 10. Every 90 times fact can be found by multiplying by 10 and then by 9 (or vice versa). Mathematically, 90° defines a right angle, and 90 minutes is the standard playing length of a football (soccer) match, giving the number strong everyday footing beyond arithmetic.",
      91: "The 91 times table can be reached by splitting 91 into 90 + 1, or by recognizing that 91 = 7 × 13. The number 91 has a well-known reputation in math education as a classic 'looks prime but isn't' trick question — it isn't divisible by any small prime up through 5, which leads many students to guess it's prime before discovering it factors as 7 × 13.",
      92: "The 92 times table can be reached by splitting 92 into 90 + 2, or by multiplying the 23 times table by 4 since 92 = 4 × 23. The number 92 also has real significance in chemistry — uranium, with atomic number 92, is traditionally cited as the heaviest naturally occurring element on the periodic table.",
      93: "The 93 times table can be reached by splitting 93 into 90 + 3, or by tripling the 31 times table since 93 = 3 × 31.",
      94: "The 94 times table can be reached by splitting 94 into 90 + 4, or by doubling the 47 times table since 94 = 2 × 47.",
      95: "The 95 times table can be reached by splitting 95 into 100 − 5, or by recognizing that 95 = 5 × 19. Anyone who lived through the 1990s likely also associates the number with Windows 95, the landmark operating system that reshaped personal computing.",
      96: "The 96 times table can be reached by splitting 96 into 100 − 4, or by recognizing that 96 = 2⁵ × 3, making it built almost entirely from powers of 2.",
      97: "The 97 times table has no factoring shortcut, since 97 is prime. The most efficient method is 100×n − 3×n: multiply by 100, then subtract triple the original number. Fittingly, 97 also holds the title of the largest two-digit prime number.",
      98: "The 98 times table can be reached by splitting 98 into 100 − 2, or by recognizing that 98 = 2 × 7², making it closely tied to the 7 and 49 times tables.",
      99: "The 99 times table can be reached by splitting 99 into 100 − 1, or by recognizing that 99 = 9 × 11. Because 99 is a multiple of 9, its digit-sum rule carries through, and because 99 sits just below 100, retailers have long used '.99' pricing as a psychological device to make prices feel meaningfully lower than a round number.",
      100: "The 100 times table is the simplest of all to calculate: since 100 = 10², multiplying by 100 just means appending two zeros to the end of a whole number. As the number that anchors percentages, the metric system, and the very idea of a 'whole' being divided into equal parts, 100 is arguably the single most culturally significant number in this entire range.",
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
      31: [
        { title: "31 = 30 + 1, times n", description: "Since 31×n = 30×n + n, every 31 times fact can be found by multiplying by 30 and adding one more group of the original number: 31×6 = 180 + 6 = 186." },
        { title: "31 is a Mersenne prime", description: "31 = 2⁵ − 1 (32 minus 1), placing it in the same rare family of primes as 3, 7, and 127." },
      ],
      32: [
        { title: "32 is 2 to the 5th power", description: "32 = 2×2×2×2×2, reachable by doubling a number five times in a row: 1→2→4→8→16→32." },
        { title: "Double the 16 times table", description: "Since 32 = 2 × 16, every 32 times fact is exactly double the matching 16 times fact." },
      ],
      33: [
        { title: "33 = 30 + 3, times n", description: "Since 33×n = 30×n + 3×n, every 33 times fact can be built by adding the 30 times fact and the 3 times fact together: 33×6 = 180 + 18 = 198." },
        { title: "Triple the 11 times table", description: "Since 33 = 3 × 11, every 33 times fact is exactly triple the matching 11 times fact, carrying over the 11 times table's mirror-digit pattern for single-digit multipliers: 33×3 = triple(11×3) = triple(33) = 99." },
      ],
      34: [
        { title: "Double the 17 times table", description: "Since 34 = 2 × 17, every 34 times fact is exactly double the matching 17 times fact." },
        { title: "34 = 30 + 4, times n", description: "Since 34×n = 30×n + 4×n, every 34 times fact can also be built by adding the 30 times fact and the 4 times fact together: 34×6 = 180 + 24 = 204." },
      ],
      35: [
        { title: "35 = 30 + 5, times n", description: "Since 35×n = 30×n + 5×n, every 35 times fact can be built by adding the 30 times fact and the 5 times fact together: 35×6 = 180 + 30 = 210." },
        { title: "5 × 7 combination", description: "Since 35 = 5 × 7, the 35 times table can also be reached by multiplying the 7 times table by 5, or the 5 times table by 7." },
        { title: "Always ends in 0 or 5", description: "Because 35 is a multiple of 5, every result in the 35 times table ends in 0 or 5." },
      ],
      36: [
        { title: "36 is a perfect square", description: "36 = 6×6, a landmark fact worth memorizing directly." },
        { title: "Quadruple the 9 times table", description: "Since 36 = 4 × 9, every 36 times fact is exactly four times the matching 9 times fact: 36×3 = 4×(9×3) = 4×27 = 108." },
        { title: "36 is a triangular number", description: "36 = 1+2+3+4+5+6+7+8, the sum of the first eight counting numbers." },
      ],
      37: [
        { title: "37 = 40 − 3, times n", description: "Since 37×n = 40×n − 3×n, every 37 times fact can be found by multiplying by 40 and subtracting triple the original number: 37×6 = 240 − 18 = 222." },
        { title: "Factor of every three-digit repdigit", description: "37 × 3 = 111, and since every three-digit repdigit (111, 222, ..., 999) is a multiple of 111, 37 divides all of them evenly." },
      ],
      38: [
        { title: "38 = 40 − 2, times n", description: "Since 38×n = 40×n − 2×n, every 38 times fact can be found by multiplying by 40 and subtracting double the original number: 38×6 = 240 − 12 = 228." },
        { title: "Double the 19 times table", description: "Since 38 = 2 × 19, every 38 times fact is exactly double the matching 19 times fact." },
      ],
      39: [
        { title: "39 = 40 − 1, times n", description: "Since 39×n = 40×n − n, every 39 times fact can be found by multiplying by 40 and subtracting the original number once: 39×6 = 240 − 6 = 234." },
        { title: "Triple the 13 times table", description: "Since 39 = 3 × 13, every 39 times fact is exactly triple the matching 13 times fact." },
      ],
      40: [
        { title: "40 = 4 × 10, times n", description: "Since 40×n = 4×(10×n), every 40 times fact can be found by multiplying by 10 and then doubling twice: 40×6 = 4×(10×6) = 4×60 = 240." },
        { title: "Always ends in 0", description: "Since 40 is a multiple of 10, every result in the 40 times table ends in 0." },
      ],
      41: [
        { title: "41 = 40 + 1, times n", description: "Since 41×n = 40×n + n, every 41 times fact can be found by multiplying by 40 and adding one more group of the original number: 41×6 = 240 + 6 = 246." },
      ],
      42: [
        { title: "42 = 40 + 2, times n", description: "Since 42×n = 40×n + 2×n, every 42 times fact can be built by adding the 40 times fact and the 2 times fact together: 42×6 = 240 + 12 = 252." },
        { title: "Triple the 14 times table", description: "Since 42 = 3 × 14, every 42 times fact is exactly triple the matching 14 times fact." },
        { title: "Double the 21 times table", description: "Since 42 = 2 × 21, every 42 times fact is also exactly double the matching 21 times fact." },
      ],
      43: [
        { title: "43 = 40 + 3, times n", description: "Since 43×n = 40×n + 3×n, every 43 times fact can be found by multiplying by 40 and adding triple the original number: 43×6 = 240 + 18 = 258." },
      ],
      44: [
        { title: "Quadruple the 11 times table", description: "Since 44 = 4 × 11, every 44 times fact is exactly four times the matching 11 times fact: 44×3 = 4×(11×3) = 4×33 = 132." },
        { title: "Double the 22 times table", description: "Since 44 = 2 × 22, every 44 times fact is also exactly double the matching 22 times fact." },
      ],
      45: [
        { title: "45 = 50 − 5, times n", description: "Since 45×n = 50×n − 5×n, every 45 times fact can be found by multiplying by 50 and subtracting five times the original number: 45×6 = 300 − 30 = 270." },
        { title: "9 × 5 combination", description: "Since 45 = 9 × 5, the 45 times table can also be reached by multiplying the 9 times table by 5, or the 5 times table by 9." },
        { title: "45 is a triangular number", description: "45 = 1+2+3+...+9, the sum of the first nine counting numbers." },
      ],
      46: [
        { title: "46 = 50 − 4, times n", description: "Since 46×n = 50×n − 4×n, every 46 times fact can be found by multiplying by 50 and subtracting four times the original number: 46×6 = 300 − 24 = 276." },
        { title: "Double the 23 times table", description: "Since 46 = 2 × 23, every 46 times fact is exactly double the matching 23 times fact." },
      ],
      47: [
        { title: "47 = 50 − 3, times n", description: "Since 47×n = 50×n − 3×n, every 47 times fact can be found by multiplying by 50 and subtracting triple the original number: 47×6 = 300 − 18 = 282." },
      ],
      48: [
        { title: "48 = 50 − 2, times n", description: "Since 48×n = 50×n − 2×n, every 48 times fact can be found by multiplying by 50 and subtracting double the original number: 48×6 = 300 − 12 = 288." },
        { title: "Quadruple the 12 times table", description: "Since 48 = 4 × 12, every 48 times fact is also exactly four times the matching 12 times fact." },
      ],
      49: [
        { title: "49 = 50 − 1, times n", description: "Since 49×n = 50×n − n, every 49 times fact can be found by multiplying by 50 and subtracting the original number once: 49×6 = 300 − 6 = 294." },
        { title: "49 is a perfect square", description: "49 = 7×7, one of the most heavily memorized facts in the entire standard multiplication table." },
      ],
      50: [
        { title: "50 = 100 ÷ 2, times n", description: "Since 50×n = (100×n) ÷ 2, every 50 times fact can be found by multiplying by 100 and dividing by 2: 50×7 = 700 ÷ 2 = 350." },
        { title: "Always ends in 0", description: "Since 50 is a multiple of 10, every result in the 50 times table ends in 0." },
      ],
      51: [
        { title: "51 = 50 + 1, times n", description: "Since 51×n = 50×n + n, every 51 times fact can be found by multiplying by 50 and adding one more group of the original number: 51×6 = 300 + 6 = 306." },
        { title: "3 × 17 combination", description: "Since 51 = 3 × 17, the 51 times table can also be reached by tripling the 17 times table." },
      ],
      52: [
        { title: "52 = 50 + 2, times n", description: "Since 52×n = 50×n + 2×n, every 52 times fact can be built by adding the 50 times fact and the 2 times fact together: 52×6 = 300 + 12 = 312." },
        { title: "Quadruple the 13 times table", description: "Since 52 = 4 × 13, every 52 times fact is also exactly four times the matching 13 times fact." },
      ],
      53: [
        { title: "53 = 50 + 3, times n", description: "Since 53×n = 50×n + 3×n, every 53 times fact can be found by multiplying by 50 and adding triple the original number: 53×6 = 300 + 18 = 318." },
      ],
      54: [
        { title: "54 = 50 + 4, times n", description: "Since 54×n = 50×n + 4×n, every 54 times fact can be built by adding the 50 times fact and the 4 times fact together: 54×6 = 300 + 24 = 324." },
        { title: "Triple the 18 times table", description: "Since 54 = 3 × 18, every 54 times fact is also exactly triple the matching 18 times fact." },
      ],
      55: [
        { title: "55 = 50 + 5, times n", description: "Since 55×n = 50×n + 5×n, every 55 times fact can be built by adding the 50 times fact and the 5 times fact together: 55×6 = 300 + 30 = 330." },
        { title: "5 × 11 combination", description: "Since 55 = 5 × 11, the 55 times table can also be reached by multiplying the 11 times table by 5." },
        { title: "Always ends in 0 or 5", description: "Because 55 is a multiple of 5, every result in the 55 times table ends in 0 or 5." },
      ],
      56: [
        { title: "56 = 50 + 6, times n", description: "Since 56×n = 50×n + 6×n, every 56 times fact can be built by adding the 50 times fact and the 6 times fact together: 56×6 = 300 + 36 = 336." },
        { title: "7 × 8 combination", description: "Since 56 = 7 × 8, the 56 times table can also be reached by multiplying the 8 times table by 7, or the 7 times table by 8." },
      ],
      57: [
        { title: "57 = 60 − 3, times n", description: "Since 57×n = 60×n − 3×n, every 57 times fact can be found by multiplying by 60 and subtracting triple the original number: 57×6 = 360 − 18 = 342." },
        { title: "3 × 19 combination", description: "Since 57 = 3 × 19, the 57 times table can also be reached by tripling the 19 times table." },
      ],
      58: [
        { title: "58 = 60 − 2, times n", description: "Since 58×n = 60×n − 2×n, every 58 times fact can be found by multiplying by 60 and subtracting double the original number: 58×6 = 360 − 12 = 348." },
        { title: "Double the 29 times table", description: "Since 58 = 2 × 29, every 58 times fact is exactly double the matching 29 times fact." },
      ],
      59: [
        { title: "59 = 60 − 1, times n", description: "Since 59×n = 60×n − n, every 59 times fact can be found by multiplying by 60 and subtracting the original number once: 59×6 = 360 − 6 = 354." },
      ],
      60: [
        { title: "60 = 6 × 10, times n", description: "Since 60×n = 6×(10×n), every 60 times fact can be found by multiplying by 10 and then by 6: 60×7 = 6×(10×7) = 6×70 = 420." },
        { title: "Always ends in 0", description: "Since 60 is a multiple of 10, every result in the 60 times table ends in 0." },
        { title: "Triple the 20 times table", description: "Since 60 = 3 × 20, every 60 times fact is also exactly triple the matching 20 times fact." },
      ],
      61: [
        { title: "61 = 60 + 1, times n", description: "Since 61×n = 60×n + n, every 61 times fact can be found by multiplying by 60 and adding one more group of the original number: 61×6 = 360 + 6 = 366." },
      ],
      62: [
        { title: "62 = 60 + 2, times n", description: "Since 62×n = 60×n + 2×n, every 62 times fact can be built by adding the 60 times fact and the 2 times fact together: 62×6 = 360 + 12 = 372." },
        { title: "Double the 31 times table", description: "Since 62 = 2 × 31, every 62 times fact is exactly double the matching 31 times fact." },
      ],
      63: [
        { title: "63 = 60 + 3, times n", description: "Since 63×n = 60×n + 3×n, every 63 times fact can be built by adding the 60 times fact and the 3 times fact together: 63×6 = 360 + 18 = 378." },
        { title: "7 × 9 combination", description: "Since 63 = 7 × 9, the 63 times table can also be reached by multiplying the 9 times table by 7, or the 7 times table by 9." },
      ],
      64: [
        { title: "64 is 2 to the 6th power", description: "64 = 2×2×2×2×2×2, reachable by doubling a number six times in a row." },
        { title: "64 is both a perfect square and a perfect cube", description: "64 = 8×8 (a perfect square) and also 64 = 4×4×4 (a perfect cube) — a rare double property shared by very few numbers." },
        { title: "Double the 32 times table", description: "Since 64 = 2 × 32, every 64 times fact is exactly double the matching 32 times fact." },
      ],
      65: [
        { title: "65 = 60 + 5, times n", description: "Since 65×n = 60×n + 5×n, every 65 times fact can be built by adding the 60 times fact and the 5 times fact together: 65×6 = 360 + 30 = 390." },
        { title: "5 × 13 combination", description: "Since 65 = 5 × 13, the 65 times table can also be reached by multiplying the 13 times table by 5." },
        { title: "Always ends in 0 or 5", description: "Because 65 is a multiple of 5, every result in the 65 times table ends in 0 or 5." },
      ],
      66: [
        { title: "66 = 60 + 6, times n", description: "Since 66×n = 60×n + 6×n, every 66 times fact can be built by adding the 60 times fact and the 6 times fact together: 66×6 = 360 + 36 = 396." },
        { title: "6 × 11 combination", description: "Since 66 = 6 × 11, the 66 times table can also be reached by multiplying the 11 times table by 6, carrying over the 11 times table's mirror-digit pattern in modified form." },
      ],
      67: [
        { title: "67 = 70 − 3, times n", description: "Since 67×n = 70×n − 3×n, every 67 times fact can be found by multiplying by 70 and subtracting triple the original number: 67×6 = 420 − 18 = 402." },
      ],
      68: [
        { title: "68 = 70 − 2, times n", description: "Since 68×n = 70×n − 2×n, every 68 times fact can be found by multiplying by 70 and subtracting double the original number: 68×6 = 420 − 12 = 408." },
        { title: "Quadruple the 17 times table", description: "Since 68 = 4 × 17, every 68 times fact is also exactly four times the matching 17 times fact." },
      ],
      69: [
        { title: "69 = 70 − 1, times n", description: "Since 69×n = 70×n − n, every 69 times fact can be found by multiplying by 70 and subtracting the original number once: 69×6 = 420 − 6 = 414." },
        { title: "3 × 23 combination", description: "Since 69 = 3 × 23, the 69 times table can also be reached by tripling the 23 times table." },
      ],
      70: [
        { title: "70 = 7 × 10, times n", description: "Since 70×n = 7×(10×n), every 70 times fact can be found by multiplying by 10 and then by 7: 70×6 = 7×(10×6) = 7×60 = 420." },
        { title: "Always ends in 0", description: "Since 70 is a multiple of 10, every result in the 70 times table ends in 0." },
      ],
      71: [
        { title: "71 = 70 + 1, times n", description: "Since 71×n = 70×n + n, every 71 times fact can be found by multiplying by 70 and adding one more group of the original number: 71×6 = 420 + 6 = 426." },
      ],
      72: [
        { title: "8 × 9 combination", description: "Since 72 = 8 × 9, every 72 times fact can be found by multiplying the 9 times table by 8, or the 8 times table by 9: 72×5 = 8×(9×5) = 8×45 = 360." },
        { title: "Double the 36 times table", description: "Since 72 = 2 × 36, every 72 times fact is also exactly double the matching 36 times fact." },
      ],
      73: [
        { title: "73 = 70 + 3, times n", description: "Since 73×n = 70×n + 3×n, every 73 times fact can be found by multiplying by 70 and adding triple the original number: 73×6 = 420 + 18 = 438." },
      ],
      74: [
        { title: "74 = 70 + 4, times n", description: "Since 74×n = 70×n + 4×n, every 74 times fact can be built by adding the 70 times fact and the 4 times fact together: 74×6 = 420 + 24 = 444." },
        { title: "Double the 37 times table", description: "Since 74 = 2 × 37, every 74 times fact is exactly double the matching 37 times fact." },
      ],
      75: [
        { title: "75 = 50 + 25, times n", description: "Since 75×n = 50×n + 25×n, every 75 times fact can be built by adding the 50 times fact and the 25 times fact together: 75×6 = 300 + 150 = 450." },
        { title: "Three quarters of 100", description: "Since 75 = (100×3)÷4, every 75 times fact can also be found by multiplying by 100, tripling, then dividing by 4: 75×4 = (100×4×3)÷4 = 300." },
        { title: "Always ends in 00, 25, 50, or 75", description: "Because 75 is a multiple of 25, its multiples cycle through the same four possible last-two-digit endings as the 25 times table." },
      ],
      76: [
        { title: "76 = 80 − 4, times n", description: "Since 76×n = 80×n − 4×n, every 76 times fact can be found by multiplying by 80 and subtracting four times the original number: 76×6 = 480 − 24 = 456." },
        { title: "Quadruple the 19 times table", description: "Since 76 = 4 × 19, every 76 times fact is also exactly four times the matching 19 times fact." },
      ],
      77: [
        { title: "7 × 11 combination", description: "Since 77 = 7 × 11, every 77 times fact can be found by multiplying the 11 times table by 7, or the 7 times table by 11: 77×5 = 7×(11×5) = 7×55 = 385." },
        { title: "77 = 70 + 7, times n", description: "Since 77×n = 70×n + 7×n, every 77 times fact can also be built by adding the 70 times fact and the 7 times fact together." },
      ],
      78: [
        { title: "78 = 80 − 2, times n", description: "Since 78×n = 80×n − 2×n, every 78 times fact can be found by multiplying by 80 and subtracting double the original number: 78×6 = 480 − 12 = 468." },
        { title: "78 is a triangular number", description: "78 = 1+2+3+...+12, the sum of the first twelve counting numbers." },
      ],
      79: [
        { title: "79 = 80 − 1, times n", description: "Since 79×n = 80×n − n, every 79 times fact can be found by multiplying by 80 and subtracting the original number once: 79×6 = 480 − 6 = 474." },
      ],
      80: [
        { title: "80 = 8 × 10, times n", description: "Since 80×n = 8×(10×n), every 80 times fact can be found by multiplying by 10 and then by 8: 80×6 = 8×(10×6) = 8×60 = 480." },
        { title: "Always ends in 0", description: "Since 80 is a multiple of 10, every result in the 80 times table ends in 0." },
      ],
      81: [
        { title: "81 is a perfect square", description: "81 = 9×9, a landmark fact worth memorizing directly." },
        { title: "81 = 80 + 1, times n", description: "Since 81×n = 80×n + n, every 81 times fact can also be found by multiplying by 80 and adding one more group of the original number: 81×6 = 480 + 6 = 486." },
        { title: "Digit sums divisible by 9", description: "Because 81 is a multiple of 9, every multiple of 81 also has digits that add up to a multiple of 9." },
      ],
      82: [
        { title: "82 = 80 + 2, times n", description: "Since 82×n = 80×n + 2×n, every 82 times fact can be built by adding the 80 times fact and the 2 times fact together: 82×6 = 480 + 12 = 492." },
        { title: "Double the 41 times table", description: "Since 82 = 2 × 41, every 82 times fact is exactly double the matching 41 times fact." },
      ],
      83: [
        { title: "83 = 80 + 3, times n", description: "Since 83×n = 80×n + 3×n, every 83 times fact can be found by multiplying by 80 and adding triple the original number: 83×6 = 480 + 18 = 498." },
      ],
      84: [
        { title: "84 = 80 + 4, times n", description: "Since 84×n = 80×n + 4×n, every 84 times fact can be built by adding the 80 times fact and the 4 times fact together: 84×6 = 480 + 24 = 504." },
        { title: "7 × 12 combination", description: "Since 84 = 7 × 12, every 84 times fact can also be found by multiplying the 12 times table by 7, or the 7 times table by 12." },
      ],
      85: [
        { title: "85 = 90 − 5, times n", description: "Since 85×n = 90×n − 5×n, every 85 times fact can be found by multiplying by 90 and subtracting five times the original number: 85×6 = 540 − 30 = 510." },
        { title: "5 × 17 combination", description: "Since 85 = 5 × 17, every 85 times fact can also be found by multiplying the 17 times table by 5." },
        { title: "Always ends in 0 or 5", description: "Because 85 is a multiple of 5, every result in the 85 times table ends in 0 or 5." },
      ],
      86: [
        { title: "86 = 90 − 4, times n", description: "Since 86×n = 90×n − 4×n, every 86 times fact can be found by multiplying by 90 and subtracting four times the original number: 86×6 = 540 − 24 = 516." },
        { title: "Double the 43 times table", description: "Since 86 = 2 × 43, every 86 times fact is exactly double the matching 43 times fact." },
      ],
      87: [
        { title: "87 = 90 − 3, times n", description: "Since 87×n = 90×n − 3×n, every 87 times fact can be found by multiplying by 90 and subtracting triple the original number: 87×6 = 540 − 18 = 522." },
        { title: "Triple the 29 times table", description: "Since 87 = 3 × 29, every 87 times fact is exactly triple the matching 29 times fact." },
      ],
      88: [
        { title: "8 × 11 combination", description: "Since 88 = 8 × 11, every 88 times fact can be found by multiplying the 11 times table by 8, or the 8 times table by 11: 88×5 = 8×(11×5) = 8×55 = 440." },
        { title: "88 = 90 − 2, times n", description: "Since 88×n = 90×n − 2×n, every 88 times fact can also be found by multiplying by 90 and subtracting double the original number." },
      ],
      89: [
        { title: "89 = 90 − 1, times n", description: "Since 89×n = 90×n − n, every 89 times fact can be found by multiplying by 90 and subtracting the original number once: 89×6 = 540 − 6 = 534." },
      ],
      90: [
        { title: "90 = 9 × 10, times n", description: "Since 90×n = 9×(10×n), every 90 times fact can be found by multiplying by 10 and then by 9: 90×6 = 9×(10×6) = 9×60 = 540." },
        { title: "Always ends in 0", description: "Since 90 is a multiple of 10, every result in the 90 times table ends in 0." },
        { title: "Digit sums divisible by 9", description: "Because 90 is a multiple of 9, every multiple of 90 also has digits that add up to a multiple of 9." },
      ],
      91: [
        { title: "91 = 90 + 1, times n", description: "Since 91×n = 90×n + n, every 91 times fact can be found by multiplying by 90 and adding one more group of the original number: 91×6 = 540 + 6 = 546." },
        { title: "7 × 13 combination", description: "Since 91 = 7 × 13, every 91 times fact can also be found by multiplying the 13 times table by 7, or the 7 times table by 13." },
      ],
      92: [
        { title: "92 = 90 + 2, times n", description: "Since 92×n = 90×n + 2×n, every 92 times fact can be built by adding the 90 times fact and the 2 times fact together: 92×6 = 540 + 12 = 552." },
        { title: "Quadruple the 23 times table", description: "Since 92 = 4 × 23, every 92 times fact is also exactly four times the matching 23 times fact." },
      ],
      93: [
        { title: "93 = 90 + 3, times n", description: "Since 93×n = 90×n + 3×n, every 93 times fact can be found by multiplying by 90 and adding triple the original number: 93×6 = 540 + 18 = 558." },
        { title: "Triple the 31 times table", description: "Since 93 = 3 × 31, every 93 times fact is exactly triple the matching 31 times fact." },
      ],
      94: [
        { title: "94 = 90 + 4, times n", description: "Since 94×n = 90×n + 4×n, every 94 times fact can be built by adding the 90 times fact and the 4 times fact together: 94×6 = 540 + 24 = 564." },
        { title: "Double the 47 times table", description: "Since 94 = 2 × 47, every 94 times fact is exactly double the matching 47 times fact." },
      ],
      95: [
        { title: "95 = 100 − 5, times n", description: "Since 95×n = 100×n − 5×n, every 95 times fact can be found by multiplying by 100 and subtracting five times the original number: 95×6 = 600 − 30 = 570." },
        { title: "5 × 19 combination", description: "Since 95 = 5 × 19, every 95 times fact can also be found by multiplying the 19 times table by 5." },
        { title: "Always ends in 0 or 5", description: "Because 95 is a multiple of 5, every result in the 95 times table ends in 0 or 5." },
      ],
      96: [
        { title: "96 = 100 − 4, times n", description: "Since 96×n = 100×n − 4×n, every 96 times fact can be found by multiplying by 100 and subtracting four times the original number: 96×6 = 600 − 24 = 576." },
        { title: "Triple the 32 times table", description: "Since 96 = 3 × 32, every 96 times fact is also exactly triple the matching 32 times fact." },
      ],
      97: [
        { title: "97 = 100 − 3, times n", description: "Since 97×n = 100×n − 3×n, every 97 times fact can be found by multiplying by 100 and subtracting triple the original number: 97×6 = 600 − 18 = 582." },
      ],
      98: [
        { title: "98 = 100 − 2, times n", description: "Since 98×n = 100×n − 2×n, every 98 times fact can be found by multiplying by 100 and subtracting double the original number: 98×6 = 600 − 12 = 588." },
        { title: "Double the 49 times table", description: "Since 98 = 2 × 49, every 98 times fact is exactly double the matching 49 times fact." },
      ],
      99: [
        { title: "99 = 100 − 1, times n", description: "Since 99×n = 100×n − n, every 99 times fact can be found by multiplying by 100 and subtracting the original number once: 99×6 = 600 − 6 = 594." },
        { title: "9 × 11 combination", description: "Since 99 = 9 × 11, every 99 times fact can also be found by multiplying the 11 times table by 9, or the 9 times table by 11." },
        { title: "Digit sums divisible by 9", description: "Because 99 is a multiple of 9, every multiple of 99 also has digits that add up to a multiple of 9." },
      ],
      100: [
        { title: "Always ends in 00", description: "Every multiple of 100 ends in two zeros, with no exceptions." },
        { title: "Just append two zeros", description: "Multiplying any whole number by 100 is the same as writing that number and adding 00 to the end: 7×100 = 700, 23×100 = 2300." },
        { title: "The reference point for percentages", description: "Because 100 represents 'the whole' in percentage terms, every percentage times table (25%, 50%, 75%) is really just a fraction of the 100 times table." },
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
      31: [
        { mistake: "Forgetting to add the extra group in the 30+1 trick", solution: "31×n is 30×n PLUS one more n — don't stop at the 30 times answer. 31×7 = 210 + 7 = 217, not 210." },
        { mistake: "Trying to find a doubling or tripling shortcut", solution: "31 is prime, so no smaller times table can be doubled or tripled to reach it. The 30+1 split is the most reliable method." },
      ],
      32: [
        { mistake: "Losing count while doubling five times in a row", solution: "Say each step out loud and track it carefully: 'double, double, double, double, double' — for 32×2: 2→4→8→16→32→64." },
        { mistake: "Confusing 32 with 23", solution: "Digit transpositions are an easy slip at this size — always double-check which number is being multiplied before starting." },
      ],
      33: [
        { mistake: "Forgetting to add both parts of the 30+3 split", solution: "33×n needs BOTH 30×n and 3×n added together. 33×5 = 150 + 15 = 165 — don't stop after just the 30×n part." },
        { mistake: "Confusing 33×n with 3×n or 30×n alone", solution: "33 is neither 3 nor 30 — always add both parts of the split, or triple the full 11 times fact instead." },
      ],
      34: [
        { mistake: "Forgetting to double after using the 17s shortcut", solution: "34×n is double the 17 times fact, not the same as it. 34×5 = double(17×5) = double(85) = 170, not 85." },
        { mistake: "Forgetting to add both parts of the 30+4 split", solution: "34×n needs BOTH 30×n and 4×n added together. 34×6 = 180 + 24 = 204 — don't stop after just the 30×n part." },
      ],
      35: [
        { mistake: "Forgetting to add both parts of the 30+5 split", solution: "35×n needs BOTH 30×n and 5×n added together. 35×6 = 180 + 30 = 210 — don't stop after just the 30×n part." },
        { mistake: "Confusing 35×n with the standalone fact 5×7=35", solution: "35×n is a full times table, not the single fact 5×7=35 — don't stop calculating after recognizing the number 35 itself." },
      ],
      36: [
        { mistake: "Forgetting to quadruple, not just double, the 9s shortcut", solution: "36×n is four times the 9 times fact, not two times. 36×3 = 4×(9×3) = 4×27 = 108, not 54." },
        { mistake: "Confusing 36×6=216 with 6×6=36", solution: "36×6 is a different calculation than 6×6 — don't stop at recognizing the perfect square fact when the multiplier isn't also 1." },
      ],
      37: [
        { mistake: "Subtracting the wrong amount in the 40−3 trick", solution: "37×n = 40×n − 3×n, not 40×n − 3. Make sure to subtract 3 times the original number. 37×5 = 200 − 15 = 185." },
        { mistake: "Trying to find a doubling or tripling shortcut", solution: "37 is prime, so no smaller times table can be doubled or tripled to reach it. The 40−3 split is the most reliable method." },
      ],
      38: [
        { mistake: "Subtracting the wrong amount in the 40−2 trick", solution: "38×n = 40×n − 2×n, not 40×n − 2. Make sure to subtract double the original number. 38×5 = 200 − 10 = 190." },
        { mistake: "Forgetting to double after using the 19s shortcut", solution: "38×n is double the 19 times fact. 38×4 = double(19×4) = double(76) = 152, not 76." },
      ],
      39: [
        { mistake: "Subtracting the wrong amount in the 40−1 trick", solution: "39×n = 40×n − n, not 40×n − 1. Make sure to subtract the full original number. 39×7 = 280 − 7 = 273." },
        { mistake: "Forgetting to triple, not just add, when using the 13s shortcut", solution: "39×n is triple the 13 times fact, not the 13 times fact plus something small. 39×4 = triple(13×4) = triple(52) = 156." },
      ],
      40: [
        { mistake: "Multiplying by 10 but forgetting the extra ×4", solution: "40×n is NOT the same as 10×n — it's 4 times larger. 40×6 = 4×(10×6) = 4×60 = 240, not 60." },
        { mistake: "Confusing 40×n with 14×n", solution: "Digit transpositions are an easy slip here — 40 and 14 use the same digits but are very different numbers." },
      ],
      41: [
        { mistake: "Forgetting to add the extra group in the 40+1 trick", solution: "41×n is 40×n PLUS one more n — don't stop at the 40 times answer. 41×7 = 280 + 7 = 287, not 280." },
        { mistake: "Trying to find a doubling or tripling shortcut", solution: "41 is prime, so no smaller times table can be doubled or tripled to reach it. The 40+1 split is the most reliable method." },
      ],
      42: [
        { mistake: "Forgetting to add both parts of the 40+2 split", solution: "42×n needs BOTH 40×n and 2×n added together. 42×6 = 240 + 12 = 252 — don't stop after just the 40×n part." },
        { mistake: "Confusing 42×n with 24×n", solution: "Digit transpositions are an easy slip here — 42 and 24 use the same digits but are very different numbers." },
      ],
      43: [
        { mistake: "Adding the wrong amount in the 40+3 trick", solution: "43×n = 40×n + 3×n, not 40×n + 3. Make sure to add triple the original number. 43×5 = 200 + 15 = 215." },
        { mistake: "Trying to find a doubling or tripling shortcut", solution: "43 is prime, so no smaller times table can be doubled or tripled to reach it. The 40+3 split is the most reliable method." },
      ],
      44: [
        { mistake: "Forgetting to quadruple, not just double, the 11s shortcut", solution: "44×n is four times the 11 times fact, not two times. 44×3 = 4×(11×3) = 4×33 = 132, not 66." },
        { mistake: "Confusing 44×n with 4×n", solution: "44×n is eleven times larger than 4×n — double-check by comparing: 44×3=132 should be eleven times 4×3=12." },
      ],
      45: [
        { mistake: "Subtracting the wrong amount in the 50−5 trick", solution: "45×n = 50×n − 5×n, not 50×n − 5. Make sure to subtract five times the original number. 45×6 = 300 − 30 = 270." },
        { mistake: "Losing track of odd vs. even multipliers", solution: "Since 45 is a multiple of 5, results still end in 0 or 5 depending on whether the multiplier is even or odd — the same rule as the 5 times table applies." },
      ],
      46: [
        { mistake: "Subtracting the wrong amount in the 50−4 trick", solution: "46×n = 50×n − 4×n, not 50×n − 4. Make sure to subtract four times the original number. 46×5 = 250 − 20 = 230." },
        { mistake: "Forgetting to double after using the 23s shortcut", solution: "46×n is double the 23 times fact. 46×4 = double(23×4) = double(92) = 184, not 92." },
      ],
      47: [
        { mistake: "Subtracting the wrong amount in the 50−3 trick", solution: "47×n = 50×n − 3×n, not 50×n − 3. Make sure to subtract triple the original number. 47×5 = 250 − 15 = 235." },
        { mistake: "Trying to find a doubling or tripling shortcut", solution: "47 is prime, so no smaller times table can be doubled or tripled to reach it. The 50−3 split is the most reliable method." },
      ],
      48: [
        { mistake: "Subtracting the wrong amount in the 50−2 trick", solution: "48×n = 50×n − 2×n, not 50×n − 2. Make sure to subtract double the original number. 48×5 = 250 − 10 = 240." },
        { mistake: "Confusing 48×n with 84×n", solution: "Digit transpositions are an easy slip here — always double-check which number is being multiplied before starting." },
      ],
      49: [
        { mistake: "Subtracting the wrong amount in the 50−1 trick", solution: "49×n = 50×n − n, not 50×n − 1. Make sure to subtract the full original number. 49×7 = 350 − 7 = 343." },
        { mistake: "Confusing 49×7 with 7×7", solution: "49×7 is a different calculation than 7×7=49 — don't stop at recognizing the perfect square fact when the multiplier isn't also 7." },
      ],
      50: [
        { mistake: "Forgetting to divide by 2 after multiplying by 100", solution: "50×n = (100×n) ÷ 2, not just 100×n. 50×6 = 600 ÷ 2 = 300, not 600." },
        { mistake: "Confusing 50×n with 5×n", solution: "50×n always ends in 0 and is exactly ten times larger than 5×n. Double-check by comparing: 50×4=200 should be ten times 5×4=20." },
      ],
      51: [
        { mistake: "Forgetting to add the extra group in the 50+1 trick", solution: "51×n is 50×n PLUS one more n — don't stop at the 50 times answer. 51×7 = 350 + 7 = 357, not 350." },
        { mistake: "Confusing 51×n with 15×n", solution: "Digit transpositions are an easy slip here — 51 and 15 use the same digits but are very different numbers." },
      ],
      52: [
        { mistake: "Forgetting to add both parts of the 50+2 split", solution: "52×n needs BOTH 50×n and 2×n added together. 52×6 = 300 + 12 = 312 — don't stop after just the 50×n part." },
        { mistake: "Confusing 52×n with 25×n", solution: "Digit transpositions are an easy slip here — 52 and 25 use the same digits but are very different numbers." },
      ],
      53: [
        { mistake: "Adding the wrong amount in the 50+3 trick", solution: "53×n = 50×n + 3×n, not 50×n + 3. Make sure to add triple the original number. 53×5 = 250 + 15 = 265." },
        { mistake: "Trying to find a doubling or tripling shortcut", solution: "53 is prime, so no smaller times table can be doubled or tripled to reach it. The 50+3 split is the most reliable method." },
      ],
      54: [
        { mistake: "Forgetting to add both parts of the 50+4 split", solution: "54×n needs BOTH 50×n and 4×n added together. 54×6 = 300 + 24 = 324 — don't stop after just the 50×n part." },
        { mistake: "Confusing 54×n with 45×n", solution: "Digit transpositions are an easy slip here — 54 and 45 use the same digits but are very different numbers." },
      ],
      55: [
        { mistake: "Forgetting to add both parts of the 50+5 split", solution: "55×n needs BOTH 50×n and 5×n added together. 55×6 = 300 + 30 = 330 — don't stop after just the 50×n part." },
        { mistake: "Confusing 55 the number with the fact 5×5=25", solution: "55 and the fact 5×5=25 are unrelated — don't let the repeated digit '5' cause confusion between them." },
      ],
      56: [
        { mistake: "Forgetting to add both parts of the 50+6 split", solution: "56×n needs BOTH 50×n and 6×n added together. 56×6 = 300 + 36 = 336 — don't stop after just the 50×n part." },
        { mistake: "Confusing 56×n with the standalone fact 7×8=56", solution: "56×n is a full times table, not the single fact 7×8=56 — don't stop calculating once you recognize the number 56 itself." },
      ],
      57: [
        { mistake: "Subtracting the wrong amount in the 60−3 trick", solution: "57×n = 60×n − 3×n, not 60×n − 3. Make sure to subtract triple the original number. 57×5 = 300 − 15 = 285." },
        { mistake: "Confusing 57×n with 75×n", solution: "Digit transpositions are an easy slip here — always double-check which number is being multiplied before starting." },
      ],
      58: [
        { mistake: "Subtracting the wrong amount in the 60−2 trick", solution: "58×n = 60×n − 2×n, not 60×n − 2. Make sure to subtract double the original number. 58×5 = 300 − 10 = 290." },
        { mistake: "Forgetting to double after using the 29s shortcut", solution: "58×n is double the 29 times fact. 58×4 = double(29×4) = double(116) = 232, not 116." },
      ],
      59: [
        { mistake: "Subtracting the wrong amount in the 60−1 trick", solution: "59×n = 60×n − n, not 60×n − 1. Make sure to subtract the full original number. 59×7 = 420 − 7 = 413." },
        { mistake: "Trying to find a doubling or tripling shortcut", solution: "59 is prime, so no smaller times table can be doubled or tripled to reach it. The 60−1 split is the most reliable method." },
      ],
      60: [
        { mistake: "Multiplying by 10 but forgetting the extra ×6", solution: "60×n is NOT the same as 10×n — it's 6 times larger. 60×5 = 6×(10×5) = 6×50 = 300, not 50." },
        { mistake: "Confusing 60×n with 16×n", solution: "Digit transpositions are an easy slip here — 60 and 16 use similar digits but are very different numbers." },
      ],
      61: [
        { mistake: "Forgetting to add the extra group in the 60+1 trick", solution: "61×n is 60×n PLUS one more n — don't stop at the 60 times answer. 61×7 = 420 + 7 = 427, not 420." },
        { mistake: "Trying to find a doubling or tripling shortcut", solution: "61 is prime, so no smaller times table can be doubled or tripled to reach it. The 60+1 split is the most reliable method." },
      ],
      62: [
        { mistake: "Forgetting to add both parts of the 60+2 split", solution: "62×n needs BOTH 60×n and 2×n added together. 62×6 = 360 + 12 = 372 — don't stop after just the 60×n part." },
        { mistake: "Confusing 62×n with 26×n", solution: "Digit transpositions are an easy slip here — 62 and 26 use the same digits but are very different numbers." },
      ],
      63: [
        { mistake: "Forgetting to add both parts of the 60+3 split", solution: "63×n needs BOTH 60×n and 3×n added together. 63×6 = 360 + 18 = 378 — don't stop after just the 60×n part." },
        { mistake: "Confusing 63×n with the standalone fact 7×9=63", solution: "63×n is a full times table, not the single fact 7×9=63 — don't stop calculating after recognizing the number 63 itself." },
      ],
      64: [
        { mistake: "Losing count while doubling six times in a row", solution: "Say each step out loud and track it carefully — for 64×2: 2→4→8→16→32→64→128." },
        { mistake: "Confusing 64 with 46", solution: "Digit transpositions are an easy slip at this size — always double-check which number is being multiplied before starting." },
      ],
      65: [
        { mistake: "Forgetting to add both parts of the 60+5 split", solution: "65×n needs BOTH 60×n and 5×n added together. 65×6 = 360 + 30 = 390 — don't stop after just the 60×n part." },
        { mistake: "Confusing 65 with 56", solution: "Digit transpositions are an easy slip here — always double-check which number is being multiplied before starting." },
      ],
      66: [
        { mistake: "Forgetting to add both parts of the 60+6 split", solution: "66×n needs BOTH 60×n and 6×n added together. 66×6 = 360 + 36 = 396 — don't stop after just the 60×n part." },
        { mistake: "Assuming 66 follows the same mirror pattern as 11", solution: "The 11 times table's mirror-digit trick doesn't carry over directly to 66 — multiply the 11 times fact by 6 instead of guessing a pattern." },
      ],
      67: [
        { mistake: "Subtracting the wrong amount in the 70−3 trick", solution: "67×n = 70×n − 3×n, not 70×n − 3. Make sure to subtract triple the original number. 67×5 = 350 − 15 = 335." },
        { mistake: "Trying to find a doubling or tripling shortcut", solution: "67 is prime, so no smaller times table can be doubled or tripled to reach it. The 70−3 split is the most reliable method." },
      ],
      68: [
        { mistake: "Subtracting the wrong amount in the 70−2 trick", solution: "68×n = 70×n − 2×n, not 70×n − 2. Make sure to subtract double the original number. 68×5 = 350 − 10 = 340." },
        { mistake: "Forgetting to quadruple, not just double, the 17s shortcut", solution: "68×n is four times the 17 times fact, not two times. 68×3 = 4×(17×3) = 4×51 = 204, not 102." },
      ],
      69: [
        { mistake: "Subtracting the wrong amount in the 70−1 trick", solution: "69×n = 70×n − n, not 70×n − 1. Make sure to subtract the full original number. 69×7 = 490 − 7 = 483." },
        { mistake: "Confusing 69 with 96", solution: "Digit transpositions are an easy slip here — always double-check which number is being multiplied before starting." },
      ],
      70: [
        { mistake: "Multiplying by 10 but forgetting the extra ×7", solution: "70×n is NOT the same as 10×n — it's 7 times larger. 70×5 = 7×(10×5) = 7×50 = 350, not 50." },
        { mistake: "Confusing 70×n with 17×n", solution: "Digit transpositions are an easy slip here — 70 and 17 use similar digits but are very different numbers." },
      ],
      71: [
        { mistake: "Forgetting to add the extra group in the 70+1 trick", solution: "71×n is 70×n PLUS one more n — don't stop at the 70 times answer. 71×7 = 490 + 7 = 497, not 490." },
        { mistake: "Trying to find a doubling or tripling shortcut", solution: "71 is prime, so no smaller times table can be doubled or tripled to reach it. The 70+1 split is the most reliable method." },
      ],
      72: [
        { mistake: "Confusing 72×n with the standalone fact 8×9=72", solution: "72×n is a full times table, not the single fact 8×9=72 — don't stop calculating after recognizing the number 72 itself." },
        { mistake: "Confusing 72 with 27", solution: "Digit transpositions are an easy slip here — always double-check which number is being multiplied before starting." },
      ],
      73: [
        { mistake: "Adding the wrong amount in the 70+3 trick", solution: "73×n = 70×n + 3×n, not 70×n + 3. Make sure to add triple the original number. 73×5 = 350 + 15 = 365." },
        { mistake: "Trying to find a doubling or tripling shortcut", solution: "73 is prime, so no smaller times table can be doubled or tripled to reach it. The 70+3 split is the most reliable method." },
      ],
      74: [
        { mistake: "Forgetting to add both parts of the 70+4 split", solution: "74×n needs BOTH 70×n and 4×n added together. 74×6 = 420 + 24 = 444 — don't stop after just the 70×n part." },
        { mistake: "Forgetting to double after using the 37s shortcut", solution: "74×n is double the 37 times fact. 74×4 = double(37×4) = double(148) = 296, not 148." },
      ],
      75: [
        { mistake: "Forgetting to add both parts of the 50+25 split", solution: "75×n needs BOTH 50×n and 25×n added together. 75×4 = 200 + 100 = 300 — don't stop after just the 50×n part." },
        { mistake: "Mixing up the fraction: 75% is three quarters, not two thirds", solution: "75 is three quarters (3/4) of 100, not two thirds — double-check which fraction you're using before applying the shortcut." },
      ],
      76: [
        { mistake: "Subtracting the wrong amount in the 80−4 trick", solution: "76×n = 80×n − 4×n, not 80×n − 4. Make sure to subtract four times the original number. 76×5 = 400 − 20 = 380." },
        { mistake: "Forgetting to quadruple, not just double, the 19s shortcut", solution: "76×n is four times the 19 times fact, not two times. 76×3 = 4×(19×3) = 4×57 = 228, not 114." },
      ],
      77: [
        { mistake: "Confusing 77×n with the standalone fact 7×11=77", solution: "77×n is a full times table, not the single fact 7×11=77 — don't stop calculating after recognizing the number 77 itself." },
        { mistake: "Assuming 77 follows the same mirror pattern as 11", solution: "The 11 times table's mirror-digit trick doesn't carry over directly to 77 — multiply the 11 times fact by 7 instead of guessing a pattern." },
      ],
      78: [
        { mistake: "Subtracting the wrong amount in the 80−2 trick", solution: "78×n = 80×n − 2×n, not 80×n − 2. Make sure to subtract double the original number. 78×5 = 400 − 10 = 390." },
        { mistake: "Confusing 78 with 87", solution: "Digit transpositions are an easy slip here — always double-check which number is being multiplied before starting." },
      ],
      79: [
        { mistake: "Subtracting the wrong amount in the 80−1 trick", solution: "79×n = 80×n − n, not 80×n − 1. Make sure to subtract the full original number. 79×7 = 560 − 7 = 553." },
        { mistake: "Trying to find a doubling or tripling shortcut", solution: "79 is prime, so no smaller times table can be doubled or tripled to reach it. The 80−1 split is the most reliable method." },
      ],
      80: [
        { mistake: "Multiplying by 10 but forgetting the extra ×8", solution: "80×n is NOT the same as 10×n — it's 8 times larger. 80×5 = 8×(10×5) = 8×50 = 400, not 50." },
        { mistake: "Confusing 80×n with 18×n", solution: "Digit transpositions are an easy slip here — 80 and 18 use similar digits but are very different numbers." },
      ],
      81: [
        { mistake: "Forgetting to add the extra group in the 80+1 trick", solution: "81×n is 80×n PLUS one more n — don't stop at the 80 times answer. 81×7 = 560 + 7 = 567, not 560." },
        { mistake: "Confusing 81×7 with 9×9", solution: "81×7 is a different calculation than 9×9=81 — don't stop at recognizing the perfect square fact when the multiplier isn't also 9." },
      ],
      82: [
        { mistake: "Forgetting to add both parts of the 80+2 split", solution: "82×n needs BOTH 80×n and 2×n added together. 82×6 = 480 + 12 = 492 — don't stop after just the 80×n part." },
        { mistake: "Confusing 82 with 28", solution: "Digit transpositions are an easy slip here — always double-check which number is being multiplied before starting." },
      ],
      83: [
        { mistake: "Adding the wrong amount in the 80+3 trick", solution: "83×n = 80×n + 3×n, not 80×n + 3. Make sure to add triple the original number. 83×5 = 400 + 15 = 415." },
        { mistake: "Trying to find a doubling or tripling shortcut", solution: "83 is prime, so no smaller times table can be doubled or tripled to reach it. The 80+3 split is the most reliable method." },
      ],
      84: [
        { mistake: "Forgetting to add both parts of the 80+4 split", solution: "84×n needs BOTH 80×n and 4×n added together. 84×6 = 480 + 24 = 504 — don't stop after just the 80×n part." },
        { mistake: "Confusing 84×n with the standalone fact 7×12=84", solution: "84×n is a full times table, not the single fact 7×12=84 — don't stop calculating after recognizing the number 84 itself." },
      ],
      85: [
        { mistake: "Subtracting the wrong amount in the 90−5 trick", solution: "85×n = 90×n − 5×n, not 90×n − 5. Make sure to subtract five times the original number. 85×5 = 450 − 25 = 425." },
        { mistake: "Confusing 85 with 58", solution: "Digit transpositions are an easy slip here — always double-check which number is being multiplied before starting." },
      ],
      86: [
        { mistake: "Subtracting the wrong amount in the 90−4 trick", solution: "86×n = 90×n − 4×n, not 90×n − 4. Make sure to subtract four times the original number. 86×5 = 450 − 20 = 430." },
        { mistake: "Forgetting to double after using the 43s shortcut", solution: "86×n is double the 43 times fact. 86×4 = double(43×4) = double(172) = 344, not 172." },
      ],
      87: [
        { mistake: "Subtracting the wrong amount in the 90−3 trick", solution: "87×n = 90×n − 3×n, not 90×n − 3. Make sure to subtract triple the original number. 87×5 = 450 − 15 = 435." },
        { mistake: "Confusing 87 with 78", solution: "Digit transpositions are an easy slip here — always double-check which number is being multiplied before starting." },
      ],
      88: [
        { mistake: "Confusing 88×n with the standalone fact 8×11=88", solution: "88×n is a full times table, not the single fact 8×11=88 — don't stop calculating after recognizing the number 88 itself." },
        { mistake: "Assuming 88 follows the same mirror pattern as 11", solution: "The 11 times table's mirror-digit trick doesn't carry over directly to 88 — multiply the 11 times fact by 8 instead of guessing a pattern." },
      ],
      89: [
        { mistake: "Subtracting the wrong amount in the 90−1 trick", solution: "89×n = 90×n − n, not 90×n − 1. Make sure to subtract the full original number. 89×7 = 630 − 7 = 623." },
        { mistake: "Trying to find a doubling or tripling shortcut", solution: "89 is prime, so no smaller times table can be doubled or tripled to reach it. The 90−1 split is the most reliable method." },
      ],
      90: [
        { mistake: "Multiplying by 10 but forgetting the extra ×9", solution: "90×n is NOT the same as 10×n — it's 9 times larger. 90×5 = 9×(10×5) = 9×50 = 450, not 50." },
        { mistake: "Confusing 90×n with 9×n", solution: "90×n always ends in 0 and is exactly ten times larger than 9×n. Double-check by comparing: 90×4=360 should be ten times 9×4=36." },
      ],
      91: [
        { mistake: "Forgetting to add the extra group in the 90+1 trick", solution: "91×n is 90×n PLUS one more n — don't stop at the 90 times answer. 91×7 = 630 + 7 = 637, not 630." },
        { mistake: "Assuming 91 is prime", solution: "91 is a famous example of a number that looks prime but isn't — it factors as 7 × 13. Don't assume primality without checking factors up through its square root." },
      ],
      92: [
        { mistake: "Forgetting to add both parts of the 90+2 split", solution: "92×n needs BOTH 90×n and 2×n added together. 92×6 = 540 + 12 = 552 — don't stop after just the 90×n part." },
        { mistake: "Forgetting to quadruple, not just double, the 23s shortcut", solution: "92×n is four times the 23 times fact, not two times. 92×3 = 4×(23×3) = 4×69 = 276, not 138." },
      ],
      93: [
        { mistake: "Adding the wrong amount in the 90+3 trick", solution: "93×n = 90×n + 3×n, not 90×n + 3. Make sure to add triple the original number. 93×5 = 450 + 15 = 465." },
        { mistake: "Confusing 93 with 39", solution: "Digit transpositions are an easy slip here — always double-check which number is being multiplied before starting." },
      ],
      94: [
        { mistake: "Forgetting to add both parts of the 90+4 split", solution: "94×n needs BOTH 90×n and 4×n added together. 94×6 = 540 + 24 = 564 — don't stop after just the 90×n part." },
        { mistake: "Confusing 94 with 49", solution: "Digit transpositions are an easy slip here — always double-check which number is being multiplied before starting." },
      ],
      95: [
        { mistake: "Subtracting the wrong amount in the 100−5 trick", solution: "95×n = 100×n − 5×n, not 100×n − 5. Make sure to subtract five times the original number. 95×5 = 500 − 25 = 475." },
        { mistake: "Confusing 95 with 59", solution: "Digit transpositions are an easy slip here — always double-check which number is being multiplied before starting." },
      ],
      96: [
        { mistake: "Subtracting the wrong amount in the 100−4 trick", solution: "96×n = 100×n − 4×n, not 100×n − 4. Make sure to subtract four times the original number. 96×5 = 500 − 20 = 480." },
        { mistake: "Confusing 96 with 69", solution: "Digit transpositions are an easy slip here — always double-check which number is being multiplied before starting." },
      ],
      97: [
        { mistake: "Subtracting the wrong amount in the 100−3 trick", solution: "97×n = 100×n − 3×n, not 100×n − 3. Make sure to subtract triple the original number. 97×5 = 500 − 15 = 485." },
        { mistake: "Trying to find a doubling or tripling shortcut", solution: "97 is prime, so no smaller times table can be doubled or tripled to reach it. The 100−3 split is the most reliable method." },
      ],
      98: [
        { mistake: "Subtracting the wrong amount in the 100−2 trick", solution: "98×n = 100×n − 2×n, not 100×n − 2. Make sure to subtract double the original number. 98×5 = 500 − 10 = 490." },
        { mistake: "Forgetting to double after using the 49s shortcut", solution: "98×n is double the 49 times fact. 98×4 = double(49×4) = double(196) = 392, not 196." },
      ],
      99: [
        { mistake: "Subtracting the wrong amount in the 100−1 trick", solution: "99×n = 100×n − n, not 100×n − 1. Make sure to subtract the full original number. 99×7 = 700 − 7 = 693." },
        { mistake: "Confusing 99×n with the standalone fact 9×11=99", solution: "99×n is a full times table, not the single fact 9×11=99 — don't stop calculating after recognizing the number 99 itself." },
      ],
      100: [
        { mistake: "Adding zeros to the wrong place when the number already has decimals", solution: "The 'append two zeros' shortcut applies to whole numbers. For decimals, multiplying by 100 shifts the decimal point two places to the right instead." },
        { mistake: "Treating ×100 and ×10 the same way", solution: "×100 adds two zeros; ×10 adds only one. Keep count of how many zeros the multiplier itself has." },
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
      31: [
        "Use 31×n = 30×n + n: multiply by 30, then add one more group of the original number. 31×6 = 180 + 6 = 186.",
        "Say it aloud as a habit: 'thirty groups, plus one more.'",
        "Connect it to the calendar: seven months of the year have 31 days, a memorable everyday anchor.",
        "Skip count by 31s out loud: 31, 62, 93, 124, 155, 186, 217, 248, 279, 310.",
      ],
      32: [
        "Double the 16 times table: 32×n = double(16×n).",
        "Or double the number five times in a row: for 32×3, go 3→6→12→24→48→96.",
        "Connect it to the freezing point of water: 32°F is a familiar everyday anchor for the number.",
        "Skip count by 32s out loud: 32, 64, 96, 128, 160, 192, 224, 256, 288, 320.",
      ],
      33: [
        "Split 33 into 30 + 3: multiply by 30, multiply by 3, then add the results. 33×6 = 180 + 18 = 198.",
        "Or triple the 11 times table: 33×n = triple(11×n).",
        "Connect it to the spine: the human spine is commonly described as having 33 vertebrae, though several fuse together by adulthood.",
        "Skip count by 33s out loud: 33, 66, 99, 132, 165, 198, 231, 264, 297, 330.",
      ],
      34: [
        "Double the 17 times table: 34×n = double(17×n).",
        "Or split 34 into 30 + 4: multiply by 30, multiply by 4, then add the results.",
        "Connect it to the Fibonacci sequence: 34 = 13 + 21, the two Fibonacci numbers just before it.",
        "Skip count by 34s out loud: 34, 68, 102, 136, 170, 204, 238, 272, 306, 340.",
      ],
      35: [
        "Split 35 into 30 + 5: multiply by 30, multiply by 5, then add the results. 35×6 = 180 + 30 = 210.",
        "Or multiply the 7 times table by 5: 35×n = 5×(7×n).",
        "Remember results always end in 0 or 5, just like the 5 times table.",
        "Connect it to 35mm film, a standard format in photography and cinema, for an everyday anchor.",
      ],
      36: [
        "Multiply the 9 times table by 4: 36×n = 4×(9×n).",
        "Or multiply the 4 times table by 9: 36×n = 9×(4×n).",
        "Memorize 6×6=36 as a standalone landmark, since it's the most commonly used single fact in this table.",
        "Connect it to measurement: 36 inches make a yard, a useful everyday anchor for the number.",
      ],
      37: [
        "Use 37×n = 40×n − 3×n: multiply by 40, then subtract triple the original number. 37×6 = 240 − 18 = 222.",
        "Say it aloud as a habit: 'forty groups, minus three groups.'",
        "Notice that 37×3=111 — a useful landmark fact that also explains why 37 divides 222, 333, and every other three-digit repdigit.",
        "Skip count by 37s out loud: 37, 74, 111, 148, 185, 222, 259, 296, 333, 370.",
      ],
      38: [
        "Use 38×n = 40×n − 2×n: multiply by 40, then subtract double the original number. 38×6 = 240 − 12 = 228.",
        "Or double the 19 times table: 38×n = double(19×n).",
        "Connect it to history and geography: the 38th parallel is the line associated with the division of Korea.",
        "Skip count by 38s out loud: 38, 76, 114, 152, 190, 228, 266, 304, 342, 380.",
      ],
      39: [
        "Use 39×n = 40×n − n: multiply by 40, then subtract the original number once. 39×6 = 240 − 6 = 234.",
        "Or triple the 13 times table: 39×n = triple(13×n).",
        "Say it aloud as a habit: 'forty groups, minus one group.'",
        "Skip count by 39s out loud: 39, 78, 117, 156, 195, 234, 273, 312, 351, 390.",
      ],
      40: [
        "Multiply by 10, then multiply the result by 4: for 40×6, first get 60, then multiply by 4 to get 240.",
        "Or double the result of ×10 twice in a row: 60 → 120 → 240.",
        "Connect it to the standard work week: 40 hours is a common weekly anchor for the number.",
        "Skip count by 40s out loud: 40, 80, 120, 160, 200, 240, 280, 320, 360, 400.",
      ],
      41: [
        "Use 41×n = 40×n + n: multiply by 40, then add one more group of the original number. 41×6 = 240 + 6 = 246.",
        "Say it aloud as a habit: 'forty groups, plus one more.'",
        "Skip count by 41s out loud: 41, 82, 123, 164, 205, 246, 287, 328, 369, 410.",
        "Notice that 41 and 43 are twin primes — recognizing this pairing can help anchor both numbers in memory together.",
      ],
      42: [
        "Use 42×n = 40×n + 2×n: multiply by 40, then add double the original number. 42×6 = 240 + 12 = 252.",
        "Or triple the 14 times table: 42×n = triple(14×n).",
        "Remember 6×7=42 as a standalone landmark fact from the 6 and 7 times tables.",
        "Skip count by 42s out loud: 42, 84, 126, 168, 210, 252, 294, 336, 378, 420.",
      ],
      43: [
        "Use 43×n = 40×n + 3×n: multiply by 40, then add triple the original number. 43×6 = 240 + 18 = 258.",
        "Say it aloud as a habit: 'forty groups, plus three more.'",
        "Skip count by 43s out loud: 43, 86, 129, 172, 215, 258, 301, 344, 387, 430.",
        "Notice that 41 and 43 are twin primes — recognizing this pairing can help anchor both numbers in memory together.",
      ],
      44: [
        "Multiply the 11 times fact by 4: 44×n = 4×(11×n).",
        "Or double the 22 times table: 44×n = double(22×n).",
        "Connect it to U.S. history: Barack Obama was the 44th president, a memorable anchor for the number.",
        "Skip count by 44s out loud: 44, 88, 132, 176, 220, 264, 308, 352, 396, 440.",
      ],
      45: [
        "Use 45×n = 50×n − 5×n: multiply by 50, then subtract five times the original number. 45×6 = 300 − 30 = 270.",
        "Or multiply the 9 times fact by 5: 45×n = 5×(9×n).",
        "Connect it to vinyl records: singles traditionally spin at 45 RPM, a useful everyday anchor.",
        "Skip count by 45s out loud: 45, 90, 135, 180, 225, 270, 315, 360, 405, 450.",
      ],
      46: [
        "Use 46×n = 50×n − 4×n: multiply by 50, then subtract four times the original number. 46×6 = 300 − 24 = 276.",
        "Or double the 23 times table: 46×n = double(23×n).",
        "Connect it to biology: 46 chromosomes (23 pairs) is a memorable anchor for the number.",
        "Skip count by 46s out loud: 46, 92, 138, 184, 230, 276, 322, 368, 414, 460.",
      ],
      47: [
        "Use 47×n = 50×n − 3×n: multiply by 50, then subtract triple the original number. 47×6 = 300 − 18 = 282.",
        "Say it aloud as a habit: 'fifty groups, minus three.'",
        "Skip count by 47s out loud: 47, 94, 141, 188, 235, 282, 329, 376, 423, 470.",
        "Use the Star Trek trivia as a memory hook: fans have noted the number 47 appearing unusually often throughout the franchise.",
      ],
      48: [
        "Use 48×n = 50×n − 2×n: multiply by 50, then subtract double the original number. 48×6 = 300 − 12 = 288.",
        "Or multiply the 12 times fact by 4: 48×n = 4×(12×n).",
        "Connect it to time: 48 hours make exactly two days, a familiar everyday anchor.",
        "Skip count by 48s out loud: 48, 96, 144, 192, 240, 288, 336, 384, 432, 480.",
      ],
      49: [
        "Use 49×n = 50×n − n: multiply by 50, then subtract the original number once. 49×6 = 300 − 6 = 294.",
        "Anchor everything to 7×7=49, a fact you likely already know well.",
        "Say it aloud as a habit: 'fifty groups, minus one.'",
        "Skip count by 49s out loud: 49, 98, 147, 196, 245, 294, 343, 392, 441, 490.",
      ],
      50: [
        "Use 50×n = (100×n) ÷ 2: multiply by 100, then divide by 2. 50×7 = 700 ÷ 2 = 350.",
        "Or multiply by 5, then add a zero: for 50×6, first get 5×6=30, then add a 0 to get 300.",
        "Connect it to the U.S. states: there are 50 states, a familiar everyday anchor.",
        "Skip count by 50s out loud: 50, 100, 150, 200, 250, 300, 350, 400, 450, 500.",
      ],
      51: [
        "Use 51×n = 50×n + n: multiply by 50, then add one more group of the original number. 51×6 = 300 + 6 = 306.",
        "Or triple the 17 times table: 51×n = triple(17×n).",
        "Say it aloud as a habit: 'fifty groups, plus one more.'",
        "Skip count by 51s out loud: 51, 102, 153, 204, 255, 306, 357, 408, 459, 510.",
      ],
      52: [
        "Use 52×n = 50×n + 2×n: multiply by 50, then add double the original number. 52×6 = 300 + 12 = 312.",
        "Or multiply the 13 times fact by 4: 52×n = 4×(13×n).",
        "Connect it to the calendar: 52 weeks make a year, a familiar everyday anchor.",
        "Skip count by 52s out loud: 52, 104, 156, 208, 260, 312, 364, 416, 468, 520.",
      ],
      53: [
        "Use 53×n = 50×n + 3×n: multiply by 50, then add triple the original number. 53×6 = 300 + 18 = 318.",
        "Say it aloud as a habit: 'fifty groups, plus three more.'",
        "Skip count by 53s out loud: 53, 106, 159, 212, 265, 318, 371, 424, 477, 530.",
        "Accept that 53 has no shortcut beyond the split-and-add method, and rely on repetition to build speed.",
      ],
      54: [
        "Use 54×n = 50×n + 4×n: multiply by 50, then add four times the original number. 54×6 = 300 + 24 = 324.",
        "Or triple the 18 times table: 54×n = triple(18×n).",
        "Connect it to a Rubik's Cube: 9 squares per face × 6 faces = 54, a hands-on everyday anchor.",
        "Skip count by 54s out loud: 54, 108, 162, 216, 270, 324, 378, 432, 486, 540.",
      ],
      55: [
        "Use 55×n = 50×n + 5×n: multiply by 50, then add five times the original number. 55×6 = 300 + 30 = 330.",
        "Or multiply the 11 times fact by 5: 55×n = 5×(11×n).",
        "Remember results always end in 0 or 5, just like the 5 times table.",
        "Skip count by 55s out loud: 55, 110, 165, 220, 275, 330, 385, 440, 495, 550.",
      ],
      56: [
        "Use 56×n = 50×n + 6×n: multiply by 50, then add six times the original number. 56×6 = 300 + 36 = 336.",
        "Or multiply the 8 times fact by 7: 56×n = 7×(8×n).",
        "Anchor 7×8=56 using the rhyme: '5, 6, 7, 8 — 56 is 7 times 8.'",
        "Skip count by 56s out loud: 56, 112, 168, 224, 280, 336, 392, 448, 504, 560.",
      ],
      57: [
        "Use 57×n = 60×n − 3×n: multiply by 60, then subtract triple the original number. 57×6 = 360 − 18 = 342.",
        "Or triple the 19 times table: 57×n = triple(19×n).",
        "Connect it to Heinz's famous '57 Varieties' slogan for an everyday memory anchor.",
        "Skip count by 57s out loud: 57, 114, 171, 228, 285, 342, 399, 456, 513, 570.",
      ],
      58: [
        "Use 58×n = 60×n − 2×n: multiply by 60, then subtract double the original number. 58×6 = 360 − 12 = 348.",
        "Or double the 29 times table: 58×n = double(29×n).",
        "Say it aloud as a habit: 'sixty groups, minus two.'",
        "Skip count by 58s out loud: 58, 116, 174, 232, 290, 348, 406, 464, 522, 580.",
      ],
      59: [
        "Use 59×n = 60×n − n: multiply by 60, then subtract the original number once. 59×6 = 360 − 6 = 354.",
        "Say it aloud as a habit: 'sixty groups, minus one.'",
        "Skip count by 59s out loud: 59, 118, 177, 236, 295, 354, 413, 472, 531, 590.",
        "Connect it to time: 59 is one less than the 60 seconds in a minute, a familiar everyday anchor.",
      ],
      60: [
        "Multiply by 10, then multiply the result by 6: for 60×7, first get 70, then multiply by 6 to get 420.",
        "Or triple the 20 times table: 60×n = triple(20×n).",
        "Connect it to time: 60 seconds in a minute and 60 minutes in an hour are familiar everyday anchors.",
        "Skip count by 60s out loud: 60, 120, 180, 240, 300, 360, 420, 480, 540, 600.",
      ],
      61: [
        "Use 61×n = 60×n + n: multiply by 60, then add one more group of the original number. 61×6 = 360 + 6 = 366.",
        "Say it aloud as a habit: 'sixty groups, plus one more.'",
        "Skip count by 61s out loud: 61, 122, 183, 244, 305, 366, 427, 488, 549, 610.",
        "Accept that 61 has no shortcut beyond the split-and-add method, and rely on repetition to build speed.",
      ],
      62: [
        "Use 62×n = 60×n + 2×n: multiply by 60, then add double the original number. 62×6 = 360 + 12 = 372.",
        "Or double the 31 times table: 62×n = double(31×n).",
        "Say it aloud as a habit: 'sixty groups, plus two more.'",
        "Skip count by 62s out loud: 62, 124, 186, 248, 310, 372, 434, 496, 558, 620.",
      ],
      63: [
        "Use 63×n = 60×n + 3×n: multiply by 60, then add triple the original number. 63×6 = 360 + 18 = 378.",
        "Or multiply the 9 times fact by 7: 63×n = 7×(9×n).",
        "Remember 7×9=63 as a standalone landmark fact from the 7 and 9 times tables.",
        "Skip count by 63s out loud: 63, 126, 189, 252, 315, 378, 441, 504, 567, 630.",
      ],
      64: [
        "Double the 32 times table: 64×n = double(32×n).",
        "Or square the 8 times table result: 64×n = 8×(8×n).",
        "Connect it to a chessboard: 64 squares (8×8) is a familiar visual anchor for the number.",
        "Skip count by 64s out loud: 64, 128, 192, 256, 320, 384, 448, 512, 576, 640.",
      ],
      65: [
        "Use 65×n = 60×n + 5×n: multiply by 60, then add five times the original number. 65×6 = 360 + 30 = 390.",
        "Or multiply the 13 times fact by 5: 65×n = 5×(13×n).",
        "Remember results always end in 0 or 5, just like the 5 times table.",
        "Skip count by 65s out loud: 65, 130, 195, 260, 325, 390, 455, 520, 585, 650.",
      ],
      66: [
        "Multiply the 11 times fact by 6: 66×n = 6×(11×n).",
        "Or split 66 into 60 + 6: multiply by 60, multiply by 6, then add the results.",
        "Connect it to Route 66, the famous historic U.S. highway, for a memorable everyday anchor.",
        "Skip count by 66s out loud: 66, 132, 198, 264, 330, 396, 462, 528, 594, 660.",
      ],
      67: [
        "Use 67×n = 70×n − 3×n: multiply by 70, then subtract triple the original number. 67×6 = 420 − 18 = 402.",
        "Say it aloud as a habit: 'seventy groups, minus three.'",
        "Skip count by 67s out loud: 67, 134, 201, 268, 335, 402, 469, 536, 603, 670.",
        "Accept that 67 has no shortcut beyond the split-and-subtract method, and rely on repetition to build speed.",
      ],
      68: [
        "Use 68×n = 70×n − 2×n: multiply by 70, then subtract double the original number. 68×6 = 420 − 12 = 408.",
        "Or multiply the 17 times fact by 4: 68×n = 4×(17×n).",
        "Say it aloud as a habit: 'seventy groups, minus two.'",
        "Skip count by 68s out loud: 68, 136, 204, 272, 340, 408, 476, 544, 612, 680.",
      ],
      69: [
        "Use 69×n = 70×n − n: multiply by 70, then subtract the original number once. 69×6 = 420 − 6 = 414.",
        "Or triple the 23 times table: 69×n = triple(23×n).",
        "Say it aloud as a habit: 'seventy groups, minus one.'",
        "Skip count by 69s out loud: 69, 138, 207, 276, 345, 414, 483, 552, 621, 690.",
      ],
      70: [
        "Multiply by 10, then multiply the result by 7: for 70×6, first get 60, then multiply by 7 to get 420.",
        "Or multiply the 7 times fact by 10: 70×n = 10×(7×n), appending a zero to the 7 times answer.",
        "Connect it to the UK motorway speed limit of 70 mph for an everyday anchor.",
        "Skip count by 70s out loud: 70, 140, 210, 280, 350, 420, 490, 560, 630, 700.",
      ],
      71: [
        "Use 71×n = 70×n + n: multiply by 70, then add one more group of the original number. 71×6 = 420 + 6 = 426.",
        "Say it aloud as a habit: 'seventy groups, plus one more.'",
        "Skip count by 71s out loud: 71, 142, 213, 284, 355, 426, 497, 568, 639, 710.",
        "Accept that 71 has no shortcut beyond the split-and-add method, and rely on repetition to build speed.",
      ],
      72: [
        "Multiply the 9 times fact by 8: 72×n = 8×(9×n).",
        "Or double the 36 times table: 72×n = double(36×n).",
        "Connect it to the 'Rule of 72' in finance, or to golf, where 72 is a typical par score for 18 holes.",
        "Skip count by 72s out loud: 72, 144, 216, 288, 360, 432, 504, 576, 648, 720.",
      ],
      73: [
        "Use 73×n = 70×n + 3×n: multiply by 70, then add triple the original number. 73×6 = 420 + 18 = 438.",
        "Say it aloud as a habit: 'seventy groups, plus three more.'",
        "Skip count by 73s out loud: 73, 146, 219, 292, 365, 438, 511, 584, 657, 730.",
        "Accept that 73 has no shortcut beyond the split-and-add method, and rely on repetition to build speed.",
      ],
      74: [
        "Use 74×n = 70×n + 4×n: multiply by 70, then add four times the original number. 74×6 = 420 + 24 = 444.",
        "Or double the 37 times table: 74×n = double(37×n).",
        "Say it aloud as a habit: 'seventy groups, plus four more.'",
        "Skip count by 74s out loud: 74, 148, 222, 296, 370, 444, 518, 592, 666, 740.",
      ],
      75: [
        "Use 75×n = 50×n + 25×n: multiply by 50, then add a quarter of 100×n. 75×6 = 300 + 150 = 450.",
        "Or multiply by 100, then take three quarters of the result: for 75×4, that's 400, then three quarters of 400 is 300.",
        "Remember 75 is three quarters of 100 — a useful anchor for percentage-style calculations.",
        "Skip count by 75s out loud: 75, 150, 225, 300, 375, 450, 525, 600, 675, 750.",
      ],
      76: [
        "Use 76×n = 80×n − 4×n: multiply by 80, then subtract four times the original number. 76×6 = 480 − 24 = 456.",
        "Or multiply the 19 times fact by 4: 76×n = 4×(19×n).",
        "Connect it to '76 Trombones' from The Music Man for a memorable everyday anchor.",
        "Skip count by 76s out loud: 76, 152, 228, 304, 380, 456, 532, 608, 684, 760.",
      ],
      77: [
        "Multiply the 11 times fact by 7: 77×n = 7×(11×n).",
        "Or split 77 into 70 + 7: multiply by 70, multiply by 7, then add the results.",
        "Remember 7×11=77 as a standalone landmark fact, and note that 77 itself is a palindrome.",
        "Skip count by 77s out loud: 77, 154, 231, 308, 385, 462, 539, 616, 693, 770.",
      ],
      78: [
        "Use 78×n = 80×n − 2×n: multiply by 80, then subtract double the original number. 78×6 = 480 − 12 = 468.",
        "Say it aloud as a habit: 'eighty groups, minus two.'",
        "Connect it to 78 RPM records, the earliest standard gramophone disc speed, for an everyday anchor.",
        "Skip count by 78s out loud: 78, 156, 234, 312, 390, 468, 546, 624, 702, 780.",
      ],
      79: [
        "Use 79×n = 80×n − n: multiply by 80, then subtract the original number once. 79×6 = 480 − 6 = 474.",
        "Say it aloud as a habit: 'eighty groups, minus one.'",
        "Skip count by 79s out loud: 79, 158, 237, 316, 395, 474, 553, 632, 711, 790.",
        "Accept that 79 has no shortcut beyond the split-and-subtract method, and rely on repetition to build speed.",
      ],
      80: [
        "Multiply by 10, then multiply the result by 8: for 80×6, first get 60, then multiply by 8 to get 480.",
        "Or double the result of ×10 three times in a row: 60 → 120 → 240 → 480.",
        "Connect it to 80% being four fifths of a whole, a useful anchor for percentage-style thinking.",
        "Skip count by 80s out loud: 80, 160, 240, 320, 400, 480, 560, 640, 720, 800.",
      ],
      81: [
        "Use 81×n = 80×n + n: multiply by 80, then add one more group of the original number. 81×6 = 480 + 6 = 486.",
        "Anchor everything to 9×9=81, a fact you likely already know well.",
        "Check your answer with the digit-sum rule: the digits should always add up to a multiple of 9.",
        "Skip count by 81s out loud: 81, 162, 243, 324, 405, 486, 567, 648, 729, 810.",
      ],
      82: [
        "Use 82×n = 80×n + 2×n: multiply by 80, then add double the original number. 82×6 = 480 + 12 = 492.",
        "Or double the 41 times table: 82×n = double(41×n).",
        "Say it aloud as a habit: 'eighty groups, plus two more.'",
        "Skip count by 82s out loud: 82, 164, 246, 328, 410, 492, 574, 656, 738, 820.",
      ],
      83: [
        "Use 83×n = 80×n + 3×n: multiply by 80, then add triple the original number. 83×6 = 480 + 18 = 498.",
        "Say it aloud as a habit: 'eighty groups, plus three more.'",
        "Skip count by 83s out loud: 83, 166, 249, 332, 415, 498, 581, 664, 747, 830.",
        "Accept that 83 has no shortcut beyond the split-and-add method, and rely on repetition to build speed.",
      ],
      84: [
        "Use 84×n = 80×n + 4×n: multiply by 80, then add four times the original number. 84×6 = 480 + 24 = 504.",
        "Or multiply the 12 times fact by 7: 84×n = 7×(12×n).",
        "Remember 7×12=84 as a standalone landmark fact from the 7 and 12 times tables.",
        "Skip count by 84s out loud: 84, 168, 252, 336, 420, 504, 588, 672, 756, 840.",
      ],
      85: [
        "Use 85×n = 90×n − 5×n: multiply by 90, then subtract five times the original number. 85×6 = 540 − 30 = 510.",
        "Or multiply the 17 times fact by 5: 85×n = 5×(17×n).",
        "Remember results always end in 0 or 5, just like the 5 times table.",
        "Skip count by 85s out loud: 85, 170, 255, 340, 425, 510, 595, 680, 765, 850.",
      ],
      86: [
        "Use 86×n = 90×n − 4×n: multiply by 90, then subtract four times the original number. 86×6 = 540 − 24 = 516.",
        "Or double the 43 times table: 86×n = double(43×n).",
        "Connect it to restaurant slang: to '86' something means to discard it or remove it from the menu.",
        "Skip count by 86s out loud: 86, 172, 258, 344, 430, 516, 602, 688, 774, 860.",
      ],
      87: [
        "Use 87×n = 90×n − 3×n: multiply by 90, then subtract triple the original number. 87×6 = 540 − 18 = 522.",
        "Or triple the 29 times table: 87×n = triple(29×n).",
        "Say it aloud as a habit: 'ninety groups, minus three.'",
        "Skip count by 87s out loud: 87, 174, 261, 348, 435, 522, 609, 696, 783, 870.",
      ],
      88: [
        "Multiply the 11 times fact by 8: 88×n = 8×(11×n).",
        "Or use 88×n = 90×n − 2×n: multiply by 90, then subtract double the original number.",
        "Connect it to a piano: 88 keys is a familiar everyday anchor for musicians.",
        "Skip count by 88s out loud: 88, 176, 264, 352, 440, 528, 616, 704, 792, 880.",
      ],
      89: [
        "Use 89×n = 90×n − n: multiply by 90, then subtract the original number once. 89×6 = 540 − 6 = 534.",
        "Say it aloud as a habit: 'ninety groups, minus one.'",
        "Skip count by 89s out loud: 89, 178, 267, 356, 445, 534, 623, 712, 801, 890.",
        "Notice that 89 is a Fibonacci number (34+55=89) for an extra memory anchor.",
      ],
      90: [
        "Multiply by 10, then multiply the result by 9: for 90×6, first get 60, then multiply by 9 to get 540.",
        "Or multiply the 9 times fact by 10: 90×n = 10×(9×n), appending a zero to the 9 times answer.",
        "Connect it to a standard football match: 90 minutes is the regular playing time, a familiar everyday anchor.",
        "Skip count by 90s out loud: 90, 180, 270, 360, 450, 540, 630, 720, 810, 900.",
      ],
      91: [
        "Use 91×n = 90×n + n: multiply by 90, then add one more group of the original number. 91×6 = 540 + 6 = 546.",
        "Or multiply the 13 times fact by 7: 91×n = 7×(13×n).",
        "Remember that 91 = 7 × 13, a fact worth knowing since 91 is often mistaken for a prime number.",
        "Skip count by 91s out loud: 91, 182, 273, 364, 455, 546, 637, 728, 819, 910.",
      ],
      92: [
        "Use 92×n = 90×n + 2×n: multiply by 90, then add double the original number. 92×6 = 540 + 12 = 552.",
        "Or multiply the 23 times fact by 4: 92×n = 4×(23×n).",
        "Connect it to chemistry: uranium's atomic number, 92, is a memorable everyday anchor.",
        "Skip count by 92s out loud: 92, 184, 276, 368, 460, 552, 644, 736, 828, 920.",
      ],
      93: [
        "Use 93×n = 90×n + 3×n: multiply by 90, then add triple the original number. 93×6 = 540 + 18 = 558.",
        "Or triple the 31 times table: 93×n = triple(31×n).",
        "Say it aloud as a habit: 'ninety groups, plus three more.'",
        "Skip count by 93s out loud: 93, 186, 279, 372, 465, 558, 651, 744, 837, 930.",
      ],
      94: [
        "Use 94×n = 90×n + 4×n: multiply by 90, then add four times the original number. 94×6 = 540 + 24 = 564.",
        "Or double the 47 times table: 94×n = double(47×n).",
        "Say it aloud as a habit: 'ninety groups, plus four more.'",
        "Skip count by 94s out loud: 94, 188, 282, 376, 470, 564, 658, 752, 846, 940.",
      ],
      95: [
        "Use 95×n = 100×n − 5×n: multiply by 100, then subtract five times the original number. 95×6 = 600 − 30 = 570.",
        "Or multiply the 19 times fact by 5: 95×n = 5×(19×n).",
        "Remember results always end in 0 or 5, just like the 5 times table.",
        "Skip count by 95s out loud: 95, 190, 285, 380, 475, 570, 665, 760, 855, 950.",
      ],
      96: [
        "Use 96×n = 100×n − 4×n: multiply by 100, then subtract four times the original number. 96×6 = 600 − 24 = 576.",
        "Or triple the 32 times table: 96×n = triple(32×n).",
        "Say it aloud as a habit: 'one hundred groups, minus four.'",
        "Skip count by 96s out loud: 96, 192, 288, 384, 480, 576, 672, 768, 864, 960.",
      ],
      97: [
        "Use 97×n = 100×n − 3×n: multiply by 100, then subtract triple the original number. 97×6 = 600 − 18 = 582.",
        "Say it aloud as a habit: 'one hundred groups, minus three.'",
        "Skip count by 97s out loud: 97, 194, 291, 388, 485, 582, 679, 776, 873, 970.",
        "Remember 97 as the largest two-digit prime — a useful landmark as you approach 100.",
      ],
      98: [
        "Use 98×n = 100×n − 2×n: multiply by 100, then subtract double the original number. 98×6 = 600 − 12 = 588.",
        "Or double the 49 times table: 98×n = double(49×n).",
        "Say it aloud as a habit: 'one hundred groups, minus two.'",
        "Skip count by 98s out loud: 98, 196, 294, 392, 490, 588, 686, 784, 882, 980.",
      ],
      99: [
        "Use 99×n = 100×n − n: multiply by 100, then subtract the original number once. 99×6 = 600 − 6 = 594.",
        "Or multiply the 11 times fact by 9: 99×n = 9×(11×n).",
        "Say it aloud as a habit: 'one hundred groups, minus one.'",
        "Skip count by 99s out loud: 99, 198, 297, 396, 495, 594, 693, 792, 891, 990.",
      ],
      100: [
        "Just append two zeros to the end of the number: for 6×100, write 6 then add 00 to get 600.",
        "Use it as a shortcut for other tables: to check 99×6, calculate 100×6=600 and subtract 6 to get 594.",
        "Practice counting by hundreds out loud: 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000.",
        "Connect it to percentages: 100% represents the whole, a useful everyday anchor for the number.",
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
      31: [
        { context: "Months with 31 days", detail: "January, March, May, July, August, October, and December each have 31 days — seven months in total." },
      ],
      32: [
        { context: "Freezing point of water", detail: "Water freezes at 32°F on the Fahrenheit temperature scale." },
        { context: "Teeth in a full adult set", detail: "A full set of adult human teeth, including wisdom teeth, totals 32." },
        { context: "NFL teams", detail: "The National Football League is made up of 32 teams." },
      ],
      33: [
        { context: "Vertebrae in the human spine", detail: "The human spine is commonly described as having 33 vertebrae, though several fuse together into the sacrum and coccyx by adulthood." },
        { context: "Age of Jesus at crucifixion", detail: "According to widely held Christian tradition, Jesus was 33 years old at the time of the crucifixion." },
      ],
      35: [
        { context: "35mm film", detail: "35mm has long been the standard film format in both still photography and cinema." },
      ],
      36: [
        { context: "Inches in a yard", detail: "In the imperial measurement system, 1 yard equals 36 inches." },
      ],
      38: [
        { context: "The 38th parallel", detail: "This line of latitude became closely associated with the division between North and South Korea." },
      ],
      39: [
        { context: "The 39 Steps", detail: "'The 39 Steps' is a classic 1935 thriller film directed by Alfred Hitchcock, based on a 1915 novel of the same name." },
      ],
      40: [
        { context: "'Forty days and forty nights'", detail: "The number 40 appears repeatedly throughout the Bible, including in the story of the flood in Genesis." },
        { context: "The standard work week", detail: "A 40-hour work week is a common standard in many countries." },
        { context: "The word 'quarantine'", detail: "'Quarantine' comes from the Italian 'quaranta giorni,' meaning 'forty days,' the isolation period historically required of ships during outbreaks of plague." },
      ],
      42: [
        { context: "'The Answer to Life, the Universe, and Everything'", detail: "In Douglas Adams's novel The Hitchhiker's Guide to the Galaxy, a supercomputer calculates the answer to the ultimate question as the number 42." },
        { context: "Dots on a pair of dice", detail: "Each standard die has 21 total pips (1+2+3+4+5+6), so a pair of dice has 42 pips combined." },
      ],
      44: [
        { context: "The 44th U.S. president", detail: "Barack Obama served as the 44th president of the United States." },
      ],
      45: [
        { context: "45 RPM vinyl records", detail: "Vinyl 'singles' were traditionally pressed to spin at 45 revolutions per minute." },
      ],
      46: [
        { context: "Chromosomes in a human cell", detail: "A typical human cell contains 46 chromosomes, organized into 23 matching pairs." },
      ],
      48: [
        { context: "48 hours", detail: "48 hours is exactly two full days." },
        { context: "The contiguous United States", detail: "The 48 contiguous U.S. states exclude only Alaska and Hawaii, which are geographically separate." },
      ],
      50: [
        { context: "U.S. states", detail: "The United States is made up of 50 states." },
        { context: "A golden anniversary", detail: "A 50th wedding anniversary is traditionally called a 'golden' anniversary." },
      ],
      51: [
        { context: "Area 51", detail: "Area 51 is a famous, long-classified U.S. Air Force facility in Nevada, widely referenced in popular culture." },
      ],
      52: [
        { context: "Weeks in a year", detail: "A standard year has 52 weeks." },
        { context: "Cards in a deck", detail: "A standard playing card deck has 52 cards, not counting jokers." },
      ],
      54: [
        { context: "Squares on a Rubik's Cube", detail: "A classic 3×3 Rubik's Cube has 9 colored squares per face across 6 faces, for 54 squares total." },
      ],
      55: [
        { context: "The former U.S. national speed limit", detail: "From 1974 to 1995, 55 miles per hour was the maximum speed limit on U.S. highways under federal law." },
      ],
      57: [
        { context: "Heinz '57 Varieties'", detail: "The H.J. Heinz Company has used '57 Varieties' as a marketing slogan since 1896, long after actually selling more than 57 products." },
      ],
      59: [
        { context: "One second short of a minute", detail: "A minute contains 60 seconds, making 59 the last second before a new minute begins." },
      ],
      60: [
        { context: "Seconds in a minute", detail: "A minute is made up of 60 seconds." },
        { context: "Minutes in an hour", detail: "An hour is made up of 60 minutes." },
      ],
      64: [
        { context: "Squares on a chessboard", detail: "A standard chessboard is an 8×8 grid, containing exactly 64 squares." },
        { context: "A classic Crayola box", detail: "The iconic Crayola 'Big Box' has long included 64 crayon colors." },
        { context: "Nintendo 64", detail: "The Nintendo 64 was a landmark video game console released in the 1990s, named for its 64-bit processor." },
      ],
      65: [
        { context: "A traditional retirement age", detail: "65 has long been used as a standard retirement age in many countries, and remains the eligibility age for U.S. Medicare." },
        { context: "A common highway speed limit", detail: "65 miles per hour is a common speed limit on highways in many U.S. states." },
      ],
      66: [
        { context: "Route 66", detail: "Route 66 was one of the original U.S. highways, running from Chicago to Santa Monica, and became a cultural symbol of American road travel." },
      ],
      70: [
        { context: "'Three score years and ten'", detail: "This traditional phrase for a lifespan of 70 years comes from the Bible (Psalm 90:10)." },
        { context: "UK motorway speed limit", detail: "70 miles per hour is the standard speed limit on UK motorways." },
      ],
      72: [
        { context: "The 'Rule of 72'", detail: "In finance, dividing 72 by an interest rate gives a rough estimate of how many years it takes an investment to double." },
        { context: "72 hours", detail: "72 hours is exactly three full days." },
        { context: "Par in golf", detail: "Many golf courses use a par of 72 for a standard 18-hole round." },
      ],
      75: [
        { context: "A 75th anniversary", detail: "In some commemorative traditions, a 75th anniversary is referred to as a 'diamond' anniversary, though the term is most famously associated with 60-year milestones, such as Queen Elizabeth II's Diamond Jubilee in 2012." },
      ],
      76: [
        { context: "'76 Trombones'", detail: "'Seventy-Six Trombones' is the famous marching-band song from the 1957 musical The Music Man." },
      ],
      78: [
        { context: "78 RPM records", detail: "78 RPM was the earliest standard playback speed for gramophone records, before 33⅓ and 45 RPM formats became common." },
      ],
      80: [
        { context: "Around the World in Eighty Days", detail: "Jules Verne's classic 1873 novel follows a race to circle the globe in 80 days." },
      ],
      86: [
        { context: "Restaurant slang '86'", detail: "In restaurant and bar slang, to '86' an item means to discard it or take it off the menu, and can also mean removing a disruptive customer." },
      ],
      88: [
        { context: "Keys on a standard piano", detail: "A standard modern piano has 88 keys." },
        { context: "Officially recognized constellations", detail: "The International Astronomical Union recognizes 88 official constellations." },
      ],
      90: [
        { context: "A standard football (soccer) match", detail: "A regulation football match lasts 90 minutes, split into two 45-minute halves." },
        { context: "A right angle", detail: "A right angle measures exactly 90 degrees." },
      ],
      92: [
        { context: "Uranium's atomic number", detail: "Uranium, atomic number 92, is traditionally cited as the heaviest naturally occurring element on the periodic table." },
      ],
      95: [
        { context: "Windows 95", detail: "Windows 95 was a landmark Microsoft operating system released in 1995 that helped popularize personal computing." },
      ],
      99: [
        { context: "'.99' pricing", detail: "Retailers commonly price items at amounts ending in .99 (like $19.99) because the price is perceived as meaningfully lower than the next round number." },
      ],
      100: [
        { context: "A century", detail: "100 years is called a century." },
        { context: "100% as 'the whole'", detail: "Percentages are built around 100 as the reference point for a complete whole." },
        { context: "U.S. Senate", detail: "The U.S. Senate has 100 members — two from each of the 50 states." },
        { context: "Cents in a dollar", detail: "There are 100 cents in a U.S. dollar." },
        { context: "Boiling point of water", detail: "Water boils at 100°C at standard atmospheric pressure." },
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
      31: [
        { fact: "31 is a prime number — its only factors are 1 and itself." },
        { fact: "31 = 2⁵ − 1, making it a Mersenne prime, the same family of primes that includes 3, 7, and 127." },
      ],
      32: [
        { fact: "32 = 2⁵, the fifth power of 2." },
        { fact: "32 is exactly double 16, which is itself double 8 — part of an unbroken doubling chain all the way back to 1." },
      ],
      33: [
        { fact: "33 = 3 × 11, so its times table is a direct tripling of the 11 times table's mirror-digit pattern." },
      ],
      34: [
        { fact: "34 is a Fibonacci number — it equals the sum of the two Fibonacci numbers before it, 13 and 21." },
        { fact: "In a 4×4 magic square, every row, column, and diagonal adds up to 34 — the smallest possible magic constant for a 4×4 grid." },
      ],
      35: [
        { fact: "35 = 5 × 7, the product of two of the smaller times tables students learn earlier." },
      ],
      36: [
        { fact: "36 is both a perfect square (6×6) and a triangular number (1+2+...+8), a combination only a handful of numbers share." },
      ],
      37: [
        { fact: "37 is a prime number — its only factors are 1 and itself." },
        { fact: "37 × 3 = 111, which is why 37 evenly divides every three-digit repdigit number: 111, 222, 333, all the way through 999." },
      ],
      38: [
        { fact: "38 = 2 × 19, so its times table is a direct doubling of the 19 times table." },
      ],
      39: [
        { fact: "39 = 3 × 13, the product of two smaller times tables students likely already know." },
      ],
      40: [
        { fact: "40 = 2³ × 5, combining a power of 2 with a factor of 5." },
      ],
      41: [
        { fact: "41 is a prime number — its only factors are 1 and itself." },
        { fact: "41 and 43 are twin primes, meaning they differ by exactly 2 with no prime numbers between them." },
      ],
      42: [
        { fact: "42 = 2 × 3 × 7, combining three of the smallest prime numbers used in the standard times tables." },
      ],
      43: [
        { fact: "43 is a prime number — its only factors are 1 and itself." },
        { fact: "43 is the larger of the twin prime pair (41, 43), two primes that differ by exactly 2." },
      ],
      44: [
        { fact: "44 = 4 × 11, so its times table is a direct quadrupling of the 11 times table." },
      ],
      45: [
        { fact: "45° is exactly half of a 90° right angle, which is why 45-degree angles appear constantly in geometry and design." },
        { fact: "45 is both a triangular number (1+2+...+9) and the product of two smaller times tables, 9 and 5." },
      ],
      46: [
        { fact: "46 = 2 × 23, so its times table is a direct doubling of the 23 times table." },
      ],
      47: [
        { fact: "47 is a prime number — its only factors are 1 and itself." },
        { fact: "47 is famously said to appear unusually often throughout the Star Trek franchise, a long-running injoke reportedly started by one of the show's writers." },
      ],
      48: [
        { fact: "48 is a highly composite number — its divisors (1, 2, 3, 4, 6, 8, 12, 16, 24, 48) outnumber those of any smaller positive number." },
      ],
      49: [
        { fact: "49 is a perfect square: 49 = 7 × 7." },
        { fact: "7×7=49 is one of the most frequently memorized single facts across the entire standard multiplication table." },
      ],
      50: [
        { fact: "50 = 2 × 5², combining a single factor of 2 with the square of 5." },
      ],
      51: [
        { fact: "51 = 3 × 17, the product of two smaller prime numbers." },
      ],
      52: [
        { fact: "52 = 4 × 13, so its times table is a direct quadrupling of the 13 times table." },
      ],
      53: [
        { fact: "53 is a prime number — its only factors are 1 and itself." },
      ],
      54: [
        { fact: "54 = 2 × 3³, combining a single factor of 2 with 3 cubed." },
      ],
      55: [
        { fact: "55 is both a triangular number (1+2+...+10) and a Fibonacci number, a combination shared by only a few numbers." },
      ],
      56: [
        { fact: "56 = 2³ × 7, combining a power of 2 with a factor of 7." },
        { fact: "7×8=56 is one of the most frequently confused single facts in the entire standard multiplication table." },
      ],
      57: [
        { fact: "57 = 3 × 19, the product of two smaller prime numbers." },
      ],
      58: [
        { fact: "58 = 2 × 29, so its times table is a direct doubling of the 29 times table." },
      ],
      59: [
        { fact: "59 is a prime number — its only factors are 1 and itself." },
      ],
      60: [
        { fact: "60 is a highly composite number — its divisors (1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60) outnumber those of any smaller positive number." },
        { fact: "The ancient Babylonians used a base-60 (sexagesimal) number system, which is why time and angles are still divided into units of 60 today." },
      ],
      61: [
        { fact: "61 is a prime number — its only factors are 1 and itself." },
      ],
      62: [
        { fact: "62 = 2 × 31, so its times table is a direct doubling of the 31 times table." },
      ],
      63: [
        { fact: "63 = 3² × 7, combining the square of 3 with a factor of 7." },
        { fact: "63 = 2⁶ − 1 (64 minus 1), sitting exactly one below the power of 2 that follows it." },
      ],
      64: [
        { fact: "64 is both a perfect square (8²) and a perfect cube (4³) — one of the few numbers with both properties." },
      ],
      65: [
        { fact: "65 = 5 × 13, the product of two smaller times tables." },
      ],
      66: [
        { fact: "66 = 2 × 3 × 11, combining three of the smaller times tables." },
      ],
      67: [
        { fact: "67 is a prime number — its only factors are 1 and itself." },
      ],
      68: [
        { fact: "68 = 4 × 17, so its times table is a direct quadrupling of the 17 times table." },
      ],
      69: [
        { fact: "69 = 3 × 23, the product of two smaller times tables." },
      ],
      70: [
        { fact: "70 = 2 × 5 × 7, combining three of the smallest prime numbers used in the standard times tables." },
      ],
      71: [
        { fact: "71 is a prime number — its only factors are 1 and itself." },
      ],
      72: [
        { fact: "72 = 2³ × 3², combining a power of 2 with the square of 3." },
      ],
      73: [
        { fact: "73 is a prime number — its only factors are 1 and itself. It's also the 21st prime in the sequence starting from 2." },
        { fact: "Written in binary, 73 is 1001001 — a palindrome that reads the same forwards and backwards." },
      ],
      74: [
        { fact: "74 = 2 × 37, so its times table is a direct doubling of the 37 times table." },
      ],
      75: [
        { fact: "75 = 3 × 5², combining a factor of 3 with the square of 5." },
      ],
      76: [
        { fact: "76 = 4 × 19, so its times table is a direct quadrupling of the 19 times table." },
      ],
      77: [
        { fact: "77 = 7 × 11, the product of two smaller times tables." },
        { fact: "77 is a numerical palindrome — it reads the same forwards and backwards." },
      ],
      78: [
        { fact: "78 = 2 × 3 × 13, combining three of the smaller times tables." },
      ],
      79: [
        { fact: "79 is a prime number — its only factors are 1 and itself." },
      ],
      80: [
        { fact: "80 = 2⁴ × 5, combining a power of 2 with a factor of 5." },
        { fact: "80% is equivalent to four fifths (4/5) of a whole." },
      ],
      81: [
        { fact: "81 is a perfect square (9×9) and also equals 3⁴ (3 to the 4th power)." },
      ],
      82: [
        { fact: "82 = 2 × 41, so its times table is a direct doubling of the 41 times table." },
      ],
      83: [
        { fact: "83 is a prime number — its only factors are 1 and itself." },
      ],
      84: [
        { fact: "84 = 2² × 3 × 7, combining a power of 2 with factors of 3 and 7." },
      ],
      85: [
        { fact: "85 = 5 × 17, the product of two smaller times tables." },
      ],
      86: [
        { fact: "86 = 2 × 43, so its times table is a direct doubling of the 43 times table." },
      ],
      87: [
        { fact: "87 = 3 × 29, the product of two smaller times tables." },
      ],
      88: [
        { fact: "88 = 8 × 11, the product of two smaller times tables." },
      ],
      89: [
        { fact: "89 is a prime number — its only factors are 1 and itself." },
        { fact: "89 is a Fibonacci number — it equals the sum of the two Fibonacci numbers before it, 34 and 55." },
      ],
      90: [
        { fact: "90 = 2 × 3² × 5, combining a power of 2, the square of 3, and a factor of 5." },
      ],
      91: [
        { fact: "91 = 7 × 13, making it a famous example in math education of a number that looks prime but isn't." },
      ],
      92: [
        { fact: "92 = 4 × 23, so its times table is a direct quadrupling of the 23 times table." },
      ],
      93: [
        { fact: "93 = 3 × 31, the product of two smaller times tables." },
      ],
      94: [
        { fact: "94 = 2 × 47, so its times table is a direct doubling of the 47 times table." },
      ],
      95: [
        { fact: "95 = 5 × 19, the product of two smaller times tables." },
      ],
      96: [
        { fact: "96 = 2⁵ × 3, combining a power of 2 with a single factor of 3." },
      ],
      97: [
        { fact: "97 is a prime number — its only factors are 1 and itself." },
        { fact: "97 is the largest prime number below 100." },
      ],
      98: [
        { fact: "98 = 2 × 7², combining a single factor of 2 with the square of 7." },
      ],
      99: [
        { fact: "99 = 9 × 11, the product of two smaller times tables." },
        { fact: "Because 99 is a multiple of 9, the digits of any multiple of 99 always add up to a multiple of 9." },
      ],
      100: [
        { fact: "100 = 10², the square of 10, and also equals 4 × 25." },
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

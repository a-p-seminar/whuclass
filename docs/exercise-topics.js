// Section numbers match the exercise bank in course-content.js.
const courseExerciseTopics = {
  graphs: { sections: ["1.1", "1.2", "1.3"] },
  limits: { sections: ["2.1", "2.2", "2.3", "2.4"] },
  continuity: { sections: ["2.5"] },
  derivative: { sections: ["3.1", "3.2", "3.3", "3.4", "3.6", "3.7"] },
  extrema: { sections: ["4.1", "4.5"] },
  "mean-value": { sections: ["4.2"] },
  monotonicity: { sections: ["4.3"] },
  riemann: { sections: ["5.1", "5.2", "5.3", "5.4", "5.5", "5.6"] },
  lhopital: { sections: ["7.5"] },
  parts: { sections: ["8.2"] },
  sequence: { sections: ["10.1"] },
  "infinite-series": { sections: ["10.2", "10.3", "10.4", "10.5", "10.6"] },
  "power-series": { sections: ["10.7", "10.8"] },
  binomial: {
    supplement: [
      {
        question: [
          "From six students, choose a two-person team and appoint one member as captain. How many outcomes are possible?",
          "从 6 名学生中选出 2 人组成小组，再从中指定 1 人为组长。共有多少种选法？"
        ],
        answer: [
          String.raw`Choose the pair, then choose the captain. There are \(\binom{6}{2}\cdot 2=30\) outcomes.`,
          String.raw`先选出两名成员，再指定组长，共有 \(\binom{6}{2}\cdot 2=30\) 种选法。`
        ]
      },
      {
        question: [
          "How many five-digit integers can be formed by using each of the digits 0, 1, 2, 3 and 4 once?",
          "用 0、1、2、3、4 五个数字组成五位整数，每个数字恰好用一次。共有多少个这样的整数？"
        ],
        answer: [
          String.raw`The first digit has four choices. The remaining digits can be arranged in \(4!\) ways, giving \(4\cdot4!=96\).`,
          String.raw`首位有 4 种选择，其余 4 个数字有 \(4!\) 种排法，共有 \(4\cdot4!=96\) 个整数。`
        ]
      },
      {
        question: [
          String.raw`Find the coefficient of \(x^3\) in \((1-2x)^6\).`,
          String.raw`求 \((1-2x)^6\) 展开式中 \(x^3\) 的系数。`
        ],
        answer: [
          String.raw`Choose the term \(-2x\) from three factors. The coefficient is \(\binom{6}{3}(-2)^3=-160\).`,
          String.raw`从 6 个因式中选 3 个取 \(-2x\)，所以系数为 \(\binom{6}{3}(-2)^3=-160\)。`
        ]
      },
      {
        question: [
          String.raw`For an integer \(m\ge 1\), find \(\sum\limits_{k=0}^{m}\binom{2m}{2k}\).`,
          String.raw`设 \(m\ge 1\) 为整数，求 \(\sum\limits_{k=0}^{m}\binom{2m}{2k}\)。`
        ],
        answer: [
          String.raw`Add the binomial expansions of \((1+1)^{2m}\) and \((1-1)^{2m}\). The odd-indexed terms cancel, so the sum of the even-indexed terms is \(2^{2m-1}\).`,
          String.raw`将 \((1+1)^{2m}\) 和 \((1-1)^{2m}\) 的展开式相加，奇数下标的项抵消，再除以 2 得 \(2^{2m-1}\)。`
        ]
      },
      {
        question: [
          "How many distinct arrangements use all the letters of ENGINEERING?",
          "将 ENGINEERING 的所有字母重新排列，共有多少种不同的排列？"
        ],
        answer: [
          String.raw`The word has \(11\) letters. E and N each occur \(3\) times, and G and I each occur \(2\) times. The number of arrangements is \(\frac{11!}{3!\,3!\,2!\,2!}=277{,}200\).`,
          String.raw`共有 \(11\) 个字母。E 和 N 各出现 \(3\) 次，G 和 I 各出现 \(2\) 次。因此有 \(\frac{11!}{3!\,3!\,2!\,2!}=277{,}200\) 种排列。`
        ]
      },
      {
        question: [
          String.raw`Find the constant term of \(\left(2x^2-\frac{1}{x}\right)^6\), where \(x\ne0\).`,
          String.raw`当 \(x\ne0\) 时，求 \(\left(2x^2-\frac{1}{x}\right)^6\) 展开式中的常数项。`
        ],
        answer: [
          String.raw`Choosing \(-\frac{1}{x}\) from \(k\) factors gives a power of \(x\) equal to \(12-3k\). The constant term comes from \(k=4\) and equals \(\binom{6}{4}2^2(-1)^4=60\).`,
          String.raw`从 \(k\) 个因式中选择 \(-\frac{1}{x}\)，所得项的 \(x\) 的次数为 \(12-3k\)。当 \(k=4\) 时得到常数项，其值为 \(\binom{6}{4}2^2(-1)^4=60\)。`
        ]
      }
    ]
  }
};

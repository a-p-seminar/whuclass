const courseContent = {
  "overview": {
    "title": [
      "Advanced Mathematics",
      "高等数学"
    ],
    "affiliation": [
      "School of Mathematics and Statistics, Wuhan University",
      "武汉大学数学与统计学院"
    ],
    "intro": [
      "This English-medium foundation course introduces single-variable calculus to international undergraduates. We study functions, limits, derivatives, integrals and series, with examples from economics and management.",
      "本课程面向来华留学本科生，是一门全英文授课的公共基础课。课程讲授函数、极限、导数、积分和级数，并结合经济与管理中的例子。"
    ],
    "preparation": [
      "High school algebra, elementary functions and trigonometry.",
      "高中代数、初等函数和三角函数。"
    ]
  },
  "course": {
    "textbooks": [
      {
        "id": "thomas",
        "authors": "Joel Hass, Christopher Heil, Maurice D. Weir",
        "title": [
          "Thomas’ Calculus",
          "托马斯微积分"
        ],
        "edition": [
          "14th ed. Main text.",
          "第 14 版，主教材。"
        ],
        "url": "https://github.com/a-p-seminar/whuclass/releases/download/textbooks/Thomas-Calculus-14e.pdf"
      },
      {
        "id": "stewart",
        "authors": "James Stewart",
        "title": [
          "Calculus",
          "斯图尔特微积分"
        ],
        "edition": [
          "7th ed. Reference.",
          "第 7 版，参考教材。"
        ],
        "url": "https://github.com/a-p-seminar/whuclass/releases/download/textbooks/Stewart-Calculus-7e.pdf"
      }
    ],
    "modules": [
      {
        "id": "foundations",
        "title": [
          "Functions & Limits",
          "函数与极限"
        ]
      },
      {
        "id": "differentiation",
        "title": [
          "Differentiation",
          "导数及其应用"
        ]
      },
      {
        "id": "integration",
        "title": [
          "Integration",
          "积分及其应用"
        ]
      },
      {
        "id": "series",
        "title": [
          "Sequences & Series",
          "数列与级数"
        ]
      }
    ],
    "materials": [
      {
        "id": "graphs",
        "module": "foundations",
        "title": [
          "Functions and Their Graphs",
          "函数及其图像"
        ],
        "file": "240925_Functions-and-Their-Graphs.pdf",
        "author": "Ma Jihua",
        "reading": "§§ 1.1–1.3"
      },
      {
        "id": "binomial",
        "module": "foundations",
        "title": [
          "Basic Combinatorics and Binomial Theorem",
          "基础组合计数与二项式定理"
        ],
        "file": "250927_Basic-Combinatorics-and-Binomial-Theorem.pdf",
        "author": "Ma Jihua",
        "type": "supplement"
      },
      {
        "id": "limits",
        "module": "foundations",
        "title": [
          "Limits of Functions",
          "函数的极限"
        ],
        "file": "261014_Limits-of-Functions.pdf",
        "author": "Ma Jihua",
        "reading": "§§ 2.2–2.4"
      },
      {
        "id": "continuity",
        "module": "foundations",
        "title": [
          "Continuity of Functions",
          "函数的连续性"
        ],
        "file": "261027_Continuity-of-Functions.pdf",
        "author": "Ma Jihua",
        "reading": "§ 2.5"
      },
      {
        "id": "derivative",
        "module": "differentiation",
        "title": [
          "The Derivative of Functions",
          "函数的导数"
        ],
        "file": "261031_The-Derivative-of-Functions.pdf",
        "author": "Ma Jihua",
        "reading": "§§ 3.1–3.4, 3.6"
      },
      {
        "id": "mean-value",
        "module": "differentiation",
        "title": [
          "Mean Value Theorems",
          "微分中值定理"
        ],
        "file": "251209_Mean-Value-Theorems.pdf",
        "author": "Ma Jihua",
        "reading": "§ 4.2"
      },
      {
        "id": "monotonicity",
        "module": "differentiation",
        "title": [
          "Monotonicity of Functions",
          "函数的单调性"
        ],
        "file": "261119_Monotonicity-of-Functions.pdf",
        "author": "Ma Jihua",
        "reading": "§ 4.3"
      },
      {
        "id": "extrema",
        "module": "differentiation",
        "title": [
          "Maximum and Minimum Values",
          "最大值与最小值"
        ],
        "file": "241204_Maximum-and-Minimum-Values.pdf",
        "author": "Ma Jihua",
        "reading": "§§ 4.1, 4.5"
      },
      {
        "id": "lhopital",
        "module": "differentiation",
        "title": [
          "Applications of L’Hôpital’s Rule",
          "洛必达法则的应用"
        ],
        "file": "261119_Applications-of-LHopitals-Rule.pdf",
        "author": "Ma Jihua",
        "reading": "§ 7.5"
      },
      {
        "id": "riemann",
        "module": "integration",
        "title": [
          "Riemann Integration",
          "黎曼积分"
        ],
        "file": "260318_Riemann-Integration.pdf",
        "author": "Ma Jihua",
        "reading": "§§ 4.7, 5.1–5.5",
        "exerciseChapter": 5
      },
      {
        "id": "parts",
        "module": "integration",
        "title": [
          "Integration by Parts",
          "分部积分公式"
        ],
        "file": "260510_Integration-by-Parts-Formula.pdf",
        "author": "Ma Jihua",
        "reading": "§ 8.2"
      },
      {
        "id": "sequence",
        "module": "series",
        "title": [
          "Limits of Sequences",
          "数列的极限"
        ],
        "file": "261013_Limits-of-Sequences.pdf",
        "author": "Ma Jihua",
        "reading": "§ 10.1"
      },
      {
        "id": "infinite-series",
        "module": "series",
        "title": [
          "Infinite Series",
          "无穷级数"
        ],
        "file": "260609_Infinite-Series.pdf",
        "author": "Ma Jihua",
        "reading": "§§ 10.2–10.6"
      },
      {
        "id": "power-series",
        "module": "series",
        "title": [
          "Power Series",
          "幂级数"
        ],
        "file": "260510_A-Primer-of-Power-Series.pdf",
        "reading": "§§ 10.7–10.8",
        "page": 3
      }
    ],
    "team": [
      {
        "name": [
          "Jihua Ma",
          "马际华"
        ],
        "role": "lead"
      },
      {
        "name": [
          "Lingmin Liao",
          "廖灵敏"
        ],
        "role": "member"
      },
      {
        "name": [
          "Yueli Yu",
          "余月力"
        ],
        "role": "member"
      },
      {
        "name": [
          "Shanna Li",
          "李姗娜"
        ],
        "role": "member"
      }
    ]
  },
  "syllabus": {
    "information": [
      {
        "label": [
          "Course type",
          "课程类型"
        ],
        "value": [
          "General foundation course",
          "公共基础课"
        ]
      },
      {
        "label": [
          "Audience",
          "授课对象"
        ],
        "value": [
          "International undergraduate students",
          "来华留学本科生"
        ]
      },
      {
        "label": [
          "Teaching language",
          "授课语言"
        ],
        "value": [
          "English",
          "英语"
        ]
      },
      {
        "label": [
          "Prerequisites",
          "先修知识"
        ],
        "value": [
          "High school algebra, elementary functions and trigonometry",
          "高中代数、初等函数和三角函数"
        ]
      }
    ],
    "outcomes": [
      [
        "Read and sketch elementary graphs, evaluate limits, and check continuity using one-sided limits and function values.",
        "读懂和绘制初等函数图像，计算极限，根据单侧极限与函数值判断连续性。"
      ],
      [
        "Compute derivatives and use the mean value theorem and derivative signs to justify monotonicity, compare extrema and solve simple optimization problems.",
        "计算导数，运用中值定理和导数符号判断单调性、比较最值，并解决简单的优化问题。"
      ],
      [
        "Apply the fundamental theorem of calculus, substitution and integration by parts, and interpret a definite integral as signed area or total change.",
        "运用微积分基本定理、换元积分和分部积分，解释定积分表示的带符号面积或总变化量。"
      ],
      [
        "Distinguish sequence limits from series sums, select convergence tests, find the interval of convergence of a power series, and use a Taylor polynomial for a local approximation.",
        "区分数列极限与级数的和，选择收敛判别方法，确定幂级数的收敛区间，并用泰勒多项式作局部近似。"
      ],
      [
        "State the conditions for a method and explain each step of a mathematical argument in English, with units when the result describes a quantity.",
        "用英语说明方法的适用条件和推导步骤，在结果表示实际量时写明单位。"
      ]
    ],
    "content": {
      "foundations": {
        "topics": [
          "Elementary functions and graphs, rates of change, one-sided limits, the precise definition of a limit, continuity and the intermediate value theorem. Counting principles and the binomial theorem are available as supplementary review.",
          "初等函数与图像、变化率、单侧极限、极限的精确定义、连续性和介值定理。基础组合计数与二项式定理作为选读。"
        ],
        "reading": "§§ 1.1–1.3, 2.1–2.5"
      },
      "differentiation": {
        "topics": [
          "The derivative as a limit and a rate of change. Differentiation rules, the chain rule, the mean value theorems, monotonicity, extrema and optimization, and L’Hôpital’s rule. Implicit differentiation is included as supplementary practice.",
          "导数的极限定义与变化率意义，求导法则、链式法则、微分中值定理、单调性、最值与优化，以及洛必达法则。隐函数求导作为补充练习。"
        ],
        "reading": "§§ 3.1–3.4, 3.6–3.7, 4.1–4.3, 4.5, 7.5"
      },
      "integration": {
        "topics": [
          "Antiderivatives, Riemann sums and definite integrals. The fundamental theorem of calculus, substitution and integration by parts. Signed area, area between curves and accumulation.",
          "原函数、黎曼和与定积分，微积分基本定理、换元积分和分部积分，带符号面积、曲线间面积和累积量。"
        ],
        "reading": "§§ 4.7, 5.1–5.6, 8.2"
      },
      "series": {
        "topics": [
          "Limits of sequences, partial sums and convergence tests for series. Power series, radius and interval of convergence, and Taylor approximation.",
          "数列极限、部分和与级数的收敛判别，幂级数的收敛半径和收敛区间，以及泰勒近似。"
        ],
        "reading": "§§ 10.1–10.10"
      }
    },
    "teaching": [
      [
        "Before class, read the textbook sections and complete the preparation tasks listed in the lesson plan.",
        "课前阅读教案所列的教材章节，并完成预习任务。"
      ],
      [
        "In class, compare graphs with formulas, work through one example on the board and explain the reasoning in English. Short checks expose common errors before independent practice.",
        "课堂上对照图像与公式，板书推演代表性例题，用英语说明推理过程。通过随堂小题检查理解，再进入独立练习。"
      ],
      [
        "After class, try the practice problems and use the worked answers to check the choice of method, calculation and conclusion.",
        "课后先独立完成习题，再用参考解答检查方法选择、计算过程和结论。"
      ]
    ]
  },
  "lessonPlans": {
    "graphs": {
      "objectives": [
        [
          "Use the vertical line test to decide whether a graph defines a function of its horizontal coordinate.",
          "用竖直线检验判断一幅图像是否表示以横坐标为自变量的函数。"
        ],
        [
          "Sketch a transformed graph and identify its domain, range and intercepts.",
          "画出基本函数经过平移后的图像，指出定义域、值域以及与坐标轴的交点。"
        ]
      ],
      "focus": [
        "Ask students to project the graph onto each axis. A common mix-up is to read the domain from the vertical axis.",
        "让学生把图像分别投影到两个坐标轴上。学生容易把纵轴投影误读为定义域。"
      ],
      "preparation": [
        "Read §§ 1.1–1.3 and sketch \\(y=x^2\\), \\(y=|x|\\) and \\(y=\\sqrt{x}\\) from a few points.",
        "阅读 §§ 1.1–1.3，为 \\(y=x^2\\)、\\(y=|x|\\) 和 \\(y=\\sqrt{x}\\) 各取几个点，画出大致图像。"
      ],
      "steps": [
        {
          "title": [
            "Read inputs and outputs",
            "从图像读输入和输出"
          ],
          "detail": [
            "Draw the unit circle and the upper semicircle. Trace the vertical line \\(x=0\\) through both sketches and count the possible outputs. Repeat at \\(x=1\\).",
            "画出单位圆和它的上半圆。用竖直线 \\(x=0\\) 分别截两幅图，数一数这个输入对应几个输出，再用 \\(x=1\\) 验证。"
          ]
        },
        {
          "title": [
            "Work through a translated square root",
            "平移平方根函数的图像"
          ],
          "detail": [
            "Sketch \\(g(x)=\\sqrt{x+2}-1\\) by shifting the square root graph left by 2 and down by 1. The starting point is \\((-2,-1)\\). Read the domain \\([-2,\\infty)\\) and range \\([-1,\\infty)\\), then solve \\(g(x)=0\\) to find the point \\((-1,0)\\).",
            "把平方根函数的图像向左平移 2 个单位，再向下平移 1 个单位，得到 \\(g(x)=\\sqrt{x+2}-1\\) 的图像。起点是 \\((-2,-1)\\)，定义域为 \\([-2,\\infty)\\)，值域为 \\([-1,\\infty)\\)。解 \\(g(x)=0\\)，得到与横轴的交点 \\((-1,0)\\)。"
          ]
        },
        {
          "title": [
            "Check a sketch with a partner",
            "同伴互查图像"
          ],
          "detail": [
            "Sketch \\(y=-(x-2)^2+3\\). Mark the vertex and the vertical intercept. Ask a partner to recover the domain and range from the sketch and check the intercept by substitution.",
            "画出 \\(y=-(x-2)^2+3\\) 的图像，标出顶点和与纵轴的交点。请同伴从图像读出定义域和值域，并代入 \\(x=0\\) 核对交点。"
          ]
        }
      ],
      "check": [
        "Give the vertex, domain and range of \\(h(x)=|x-1|+2\\).",
        "写出 \\(h(x)=|x-1|+2\\) 的图像顶点、定义域和值域。"
      ],
      "expected": [
        "The vertex is \\((1,2)\\), the domain is \\(\\mathbb R\\) and the range is \\([2,\\infty)\\).",
        "顶点是 \\((1,2)\\)，定义域为 \\(\\mathbb R\\)，值域为 \\([2,\\infty)\\)。"
      ],
      "followUp": [
        "Sketch \\(y=2-\\sqrt{x-1}\\). Label the starting point and any intercepts, and state the domain and range.",
        "画出 \\(y=2-\\sqrt{x-1}\\) 的图像，标出起点，并说明与两个坐标轴是否相交。写出定义域和值域。"
      ]
    },
    "binomial": {
      "objectives": [
        [
          "Count selections with and without order and explain when to use a binomial coefficient.",
          "分别计算考虑顺序和不考虑顺序的选取方式数，并说明何时使用二项式系数。"
        ],
        [
          "Find a specified coefficient in a binomial expansion and account for its sign.",
          "求二项式展开式中指定幂次的系数，并说明系数的符号。"
        ]
      ],
      "focus": [
        "Decide whether changing the order creates a new outcome before choosing a counting formula. An unordered selection is easily counted more than once.",
        "选公式前先判断交换顺序是否会产生新结果。不考虑顺序时，学生容易重复计数。"
      ],
      "preparation": [
        "Review the handout’s multiplication principle and factorial notation. List the two-letter arrangements from \\(\\{A,B,C\\}\\) without repetition.",
        "复习讲义中的乘法计数原理和阶乘记号。从 \\(\\{A,B,C\\}\\) 中选两个不同字母，列出所有排列。"
      ],
      "steps": [
        {
          "title": [
            "Count arrangements and selections",
            "分别计算排列与组合"
          ],
          "detail": [
            "With five distinct books, count the ordered displays of three as \\(5\\cdot4\\cdot3=60\\). Each set of three gives \\(3!=6\\) displays. Ask students to use that fact to get \\(\\binom53=10\\) sets.",
            "从五本不同的书中选三本并依次摆放，共有 \\(5\\cdot4\\cdot3=60\\) 种排法。每组三本书都有 \\(3!=6\\) 种排法。让学生据此算出共有 \\(\\binom53=10\\) 种选法。"
          ]
        },
        {
          "title": [
            "Find a coefficient by choosing terms from the factors",
            "从各因子取项求展开式系数"
          ],
          "detail": [
            "Find the coefficient of \\(x^3\\) in \\((2-x)^5\\). Choose \\(-x\\) from three factors and \\(2\\) from the other two. The coefficient is \\(\\binom53(-1)^3 2^2=-40\\).",
            "求 \\((2-x)^5\\) 展开式中 \\(x^3\\) 的系数。从三个因子中选 \\(-x\\)，从其余两个因子中选 \\(2\\)，得系数 \\(\\binom53(-1)^3 2^2=-40\\)。"
          ]
        },
        {
          "title": [
            "Explain the general term",
            "解释展开式的通项"
          ],
          "detail": [
            "Use the same selection argument to obtain \\(\\binom nk a^{n-k}b^k\\) in \\((a+b)^n\\). Ask pairs to explain why \\(\\binom nk=\\binom n{n-k}\\) by looking at the complementary choice.",
            "沿用刚才的选法，写出 \\((a+b)^n\\) 展开式中的项 \\(\\binom nk a^{n-k}b^k\\)。同桌互相解释为什么选出 \\(k\\) 个位置等价于确定余下的 \\(n-k\\) 个位置，由此说明 \\(\\binom nk=\\binom n{n-k}\\)。"
          ]
        }
      ],
      "check": [
        "Find the coefficient of \\(x^2\\) in \\((1+2x)^4\\).",
        "求 \\((1+2x)^4\\) 展开式中 \\(x^2\\) 的系数。"
      ],
      "expected": [
        "Choose two of the four factors to supply \\(2x\\). The coefficient is \\(\\binom42 2^2=24\\).",
        "从四个因子里选出两个取 \\(2x\\)，系数为 \\(\\binom42 2^2=24\\)。"
      ],
      "followUp": [
        "Find the constant term of \\((x+\\frac{1}{x})^6\\) for \\(x\\ne0\\) and explain how the powers cancel.",
        "求 \\((x+\\frac{1}{x})^6\\)（\\(x\\ne0\\)）展开式的常数项，解释 \\(x\\) 的幂次如何相消。"
      ]
    },
    "limits": {
      "objectives": [
        [
          "Use one-sided limits to decide whether a two-sided limit exists.",
          "利用左右极限判断双侧极限是否存在。"
        ],
        [
          "Evaluate a finite limit after simplifying a quotient on a punctured neighborhood.",
          "在去心邻域内化简分式，求化简后的函数极限。"
        ]
      ],
      "focus": [
        "Use values with the input close to the target on either side. Students often use the function value at the target to decide the limit.",
        "在目标点两侧取靠近该点的自变量值。学生容易用函数在该点的取值判断极限。"
      ],
      "preparation": [
        "Read §§ 2.2–2.4 and factor \\(x^2-9\\). Practice reading the notation \\(x\\to a^-\\) and \\(x\\to a^+\\) aloud.",
        "阅读 §§ 2.2–2.4，把 \\(x^2-9\\) 分解因式，并练习口头解释记号 \\(x\\to a^-\\) 和 \\(x\\to a^+\\)。"
      ],
      "steps": [
        {
          "title": [
            "Approach a point from both sides",
            "从左右两侧趋近同一点"
          ],
          "detail": [
            "Make a short table for \\(f(x)=\\frac{x}{|x|}\\) using negative and positive inputs near zero. Sketch the two branches. The left limit is \\(-1\\) and the right limit is \\(1\\), so the two-sided limit fails to exist.",
            "在零点附近取几个负数和正数，为 \\(f(x)=\\frac{x}{|x|}\\) 列表，再画出两侧的图像。左极限是 \\(-1\\)，右极限是 \\(1\\)，因此双侧极限不存在。"
          ]
        },
        {
          "title": [
            "Simplify a quotient near the target",
            "在目标点附近化简分式"
          ],
          "detail": [
            "Evaluate \\(\\lim\\limits_{x\\to3}\\frac{x^2-9}{x-3}\\). Factor the numerator. At every nearby point with \\(x\\ne3\\), the quotient equals \\(x+3\\), so the limit is \\(6\\). Mark the open circle at \\((3,6)\\) on the sketch.",
            "求 \\(\\lim\\limits_{x\\to3}\\frac{x^2-9}{x-3}\\)。将分子分解因式。在目标点附近，只要 \\(x\\ne3\\)，分式就等于 \\(x+3\\)，因此极限为 \\(6\\)。在图像的 \\((3,6)\\) 处标一个空心点。"
          ]
        },
        {
          "title": [
            "Describe closeness using an inequality",
            "用不等式说明趋近"
          ],
          "detail": [
            "For the quotient in the example, the distance from the limit is \\(|(x+3)-6|=|x-3|\\). Ask what bound on \\(|x-3|\\) guarantees an output within \\(0.01\\) of \\(6\\), then replace \\(0.01\\) by any \\(\\varepsilon>0\\).",
            "对上例中的分式，输出与极限的距离为 \\(|(x+3)-6|=|x-3|\\)。问学生怎样限制 \\(|x-3|\\)，才能使输出与 \\(6\\) 的距离小于 \\(0.01\\)，再把 \\(0.01\\) 换成任意 \\(\\varepsilon>0\\)。"
          ]
        }
      ],
      "check": [
        "Find \\(\\lim\\limits_{x\\to0}\\frac{\\sqrt{1+x}-1}{x}\\). Show the algebraic step that lets you substitute \\(x=0\\).",
        "求 \\(\\lim\\limits_{x\\to0}\\frac{\\sqrt{1+x}-1}{x}\\)，写出使化简后的式子可以代入 \\(x=0\\) 的步骤。"
      ],
      "expected": [
        "Multiply numerator and denominator by \\(\\sqrt{1+x}+1\\) and cancel \\(x\\). For \\(x\\ne0\\) near zero, the quotient becomes \\(\\frac{1}{\\sqrt{1+x}+1}\\), whose limit is \\(\\frac{1}{2}\\).",
        "分子、分母同乘共轭式，约去 \\(x\\)。在零点附近且 \\(x\\ne0\\) 时，原式等于 \\(\\frac{1}{\\sqrt{1+x}+1}\\)，极限为 \\(\\frac{1}{2}\\)。"
      ],
      "followUp": [
        "Find the two one-sided limits of \\(\\frac{|x-2|}{x-2}\\) at \\(2\\), and sketch a graph that agrees with your answer.",
        "求 \\(\\frac{|x-2|}{x-2}\\) 在 \\(2\\) 处的左极限和右极限，并画出图像核对。"
      ]
    },
    "continuity": {
      "objectives": [
        [
          "Check continuity at a point by comparing the limit with the function value.",
          "比较函数在一点处的极限与函数值，判断该点处是否连续。"
        ],
        [
          "Verify the hypotheses of the intermediate value theorem and use it to locate an interval containing a root.",
          "核对介值定理的条件，指出一个含有方程根的区间。"
        ]
      ],
      "focus": [
        "Have students write the limit and the function value on separate lines. A filled point in a graph can give a value even when the graph breaks there.",
        "让学生分行写出极限和函数值。图像上的实心点给出函数值，但该点仍可能是间断点。"
      ],
      "preparation": [
        "Read § 2.5. Review one-sided limits and draw a graph with a single removable discontinuity.",
        "阅读 § 2.5，复习左右极限，并画出一个只有一个可去间断点的函数图像。"
      ],
      "steps": [
        {
          "title": [
            "Check continuity at a point",
            "逐项检查一点处的连续性"
          ],
          "detail": [
            "Mark an open circle at \\((1,2)\\) on the line \\(y=x+1\\), and put a filled point at \\((1,4)\\). Read the left limit, right limit and function value. Decide which values must agree for continuity at \\(1\\).",
            "在直线 \\(y=x+1\\) 的 \\((1,2)\\) 处挖去一个点，另在 \\((1,4)\\) 处画一个实心点。读出左极限、右极限和函数值，再指出在 \\(1\\) 处连续要求哪些值相等。"
          ]
        },
        {
          "title": [
            "Fill a hole by choosing the value",
            "选取函数值补上空点"
          ],
          "detail": [
            "For \\(f(x)=\\frac{x^2-1}{x-1}\\) when \\(x\\ne1\\) and \\(f(1)=k\\), simplify to \\(x+1\\) near \\(1\\). Both one-sided limits are \\(2\\), so \\(k=2\\) gives continuity.",
            "设 \\(x\\ne1\\) 时 \\(f(x)=\\frac{x^2-1}{x-1}\\)，且 \\(f(1)=k\\)。在 \\(1\\) 附近化简分式得到 \\(x+1\\)。两个单侧极限均为 \\(2\\)，所以取 \\(k=2\\) 就能使函数在 \\(1\\) 处连续。"
          ]
        },
        {
          "title": [
            "Locate a root using continuity",
            "利用连续性确定根所在的区间"
          ],
          "detail": [
            "For \\(p(x)=x^3+x-1\\), continuity on \\([0,1]\\) and the endpoint values \\(p(0)=-1\\), \\(p(1)=1\\) place a root in \\((0,1)\\). Have pairs use the sign of \\(p(\\frac{1}{2})\\) to narrow that interval.",
            "多项式 \\(p(x)=x^3+x-1\\) 在 \\([0,1]\\) 上连续，且 \\(p(0)=-1\\)、\\(p(1)=1\\)，由介值定理知 \\((0,1)\\) 内有根。同桌合作，利用 \\(p(\\frac{1}{2})\\) 的符号缩小根所在的区间。"
          ]
        }
      ],
      "check": [
        "Suppose \\(g(x)=2x+k\\) for \\(x<1\\) and \\(g(x)=x^2+3\\) for \\(x\\ge1\\). Find \\(k\\) for continuity at \\(1\\).",
        "设 \\(x<1\\) 时 \\(g(x)=2x+k\\)，\\(x\\ge1\\) 时 \\(g(x)=x^2+3\\)。求使 \\(g\\) 在 \\(1\\) 处连续的 \\(k\\)。"
      ],
      "expected": [
        "The left limit is \\(2+k\\). The right limit and \\(g(1)\\) both equal \\(4\\), so \\(k=2\\).",
        "左极限为 \\(2+k\\)，右极限和 \\(g(1)\\) 均为 \\(4\\)，所以 \\(k=2\\)。"
      ],
      "followUp": [
        "Use the intermediate value theorem to prove \\(x^3+x=5\\) has a solution in \\((1,2)\\). State the continuity and sign conditions in your argument.",
        "用介值定理证明方程 \\(x^3+x=5\\) 在 \\((1,2)\\) 内有解，并写出所用的连续性和端点异号条件。"
      ]
    },
    "derivative": {
      "objectives": [
        [
          "Compute a derivative at a point from the difference quotient and write the tangent line.",
          "用差商的极限求函数在一点处的导数，并写出切线方程。"
        ],
        [
          "Apply the chain rule to a composition and identify the inner derivative.",
          "用链式法则求复合函数的导数，指出内层函数的导数。"
        ]
      ],
      "focus": [
        "At a corner, compare the two limits of the difference quotient. The graph of \\(y=|x|\\) shows why continuity alone cannot guarantee differentiability.",
        "在图像有尖角的位置，比较差商的左右极限。用 \\(y=|x|\\) 的图像说明，仅有连续性还不足以保证可导。"
      ],
      "preparation": [
        "Read §§ 3.1–3.4. Review the slope formula and draw a secant through two points on \\(y=x^2\\).",
        "阅读 §§ 3.1–3.4，复习斜率公式，并画出经过 \\(y=x^2\\) 图像上两点的割线。"
      ],
      "steps": [
        {
          "title": [
            "Let the secant approach the tangent",
            "从割线斜率过渡到切线斜率"
          ],
          "detail": [
            "Fix one point at \\((2,4)\\) on \\(y=x^2\\). Move the second point toward it from each side and write the slopes using the horizontal increment \\(h\\).",
            "在 \\(y=x^2\\) 的图像上固定 \\((2,4)\\)，让第二个点分别从左右两侧向它移动。把横坐标的增量记为 \\(h\\)，写出割线斜率。"
          ]
        },
        {
          "title": [
            "Compute a tangent from the definition",
            "由导数定义求切线"
          ],
          "detail": [
            "For \\(f(x)=x^2\\), the difference quotient at \\(2\\) simplifies to \\(\\frac{(2+h)^2-4}{h}=4+h\\) for \\(h\\ne0\\). Its limit is \\(4\\), which gives \\(y=4+4(x-2)\\). Then have students find the one-sided difference quotient limits at zero for \\(y=|x|\\).",
            "对 \\(f(x)=x^2\\)，当 \\(h\\ne0\\) 时，\\(2\\) 处的差商为 \\(\\frac{(2+h)^2-4}{h}=4+h\\)，极限为 \\(4\\)，得到切线 \\(y=4+4(x-2)\\)。接着让学生求 \\(y=|x|\\) 在零点处差商的左右极限。"
          ]
        },
        {
          "title": [
            "Differentiate a composition",
            "用链式法则求导"
          ],
          "detail": [
            "Break \\(g(x)=(1+x^2)^3\\) into \\(u=1+x^2\\) and \\(g=u^3\\). Multiply the outer and inner derivatives to obtain \\(g'(x)=6x(1+x^2)^2\\). Ask students to point to the factor that comes from \\(u'(x)\\).",
            "把 \\(g(x)=(1+x^2)^3\\) 写成 \\(u=1+x^2\\) 与 \\(g=u^3\\)。将外层和内层的导数相乘，得 \\(g'(x)=6x(1+x^2)^2\\)。请学生指出哪个因子来自 \\(u'(x)\\)。"
          ]
        }
      ],
      "check": [
        "Find \\(g'(0)\\) and the tangent line at \\(0\\) for \\(g(x)=(1+3x)^2\\).",
        "设 \\(g(x)=(1+3x)^2\\)，求 \\(g'(0)\\) 以及图像在 \\(x=0\\) 处的切线方程。"
      ],
      "expected": [
        "The chain rule gives \\(g'(x)=6(1+3x)\\). Since \\(g'(0)=6\\) and \\(g(0)=1\\), the line is \\(y=1+6x\\).",
        "由链式法则得 \\(g'(x)=6(1+3x)\\)。因为 \\(g'(0)=6\\)、\\(g(0)=1\\)，所以切线方程为 \\(y=1+6x\\)。"
      ],
      "followUp": [
        "Differentiate \\(h(x)=xe^{x^2}\\). Mark where you use the product rule and where you use the chain rule.",
        "求 \\(h(x)=xe^{x^2}\\) 的导数，标出使用乘积法则和链式法则的步骤。"
      ]
    },
    "mean-value": {
      "objectives": [
        [
          "Verify the hypotheses of Rolle’s theorem and the mean value theorem for a function on an interval.",
          "对给定函数与区间，逐项核对罗尔定理和拉格朗日中值定理的条件。"
        ],
        [
          "Solve for an interior point where the tangent and secant have the same slope.",
          "求出区间内切线斜率等于割线斜率的点。"
        ]
      ],
      "focus": [
        "Check continuity on the closed interval and differentiability on the open interval. A corner inside the interval can prevent the conclusion.",
        "在闭区间上检查连续性，在开区间上检查可导性。区间内部的尖角可能使中值定理的结论失效。"
      ],
      "preparation": [
        "Read § 4.2 and calculate the secant slope from \\(x=1\\) to \\(x=3\\) on \\(y=x^2\\).",
        "阅读 § 4.2，计算 \\(y=x^2\\) 图像上 \\(x=1\\) 与 \\(x=3\\) 对应两点之间的割线斜率。"
      ],
      "steps": [
        {
          "title": [
            "Match the two slopes",
            "比较割线与切线的斜率"
          ],
          "detail": [
            "Draw the secant between the endpoints of a smooth curve. Have students predict where a parallel tangent might occur. State \\(f'(c)=\\frac{f(b)-f(a)}{b-a}\\) for some \\(c\\in(a,b)\\) under the theorem’s hypotheses.",
            "连接光滑曲线的两个端点作割线，让学生估计可能出现平行切线的位置。指出满足定理条件时，存在 \\(c\\in(a,b)\\) 使 \\(f'(c)=\\frac{f(b)-f(a)}{b-a}\\)。"
          ]
        },
        {
          "title": [
            "Find the point guaranteed by the theorem",
            "求中值定理给出的点"
          ],
          "detail": [
            "For \\(f(x)=x^2\\) on \\([1,3]\\), check the hypotheses using polynomial continuity and differentiability. The secant slope is \\(\\frac{9-1}{3-1}=4\\). Solving \\(2c=4\\) gives \\(c=2\\), inside the interval.",
            "取 \\(f(x)=x^2\\)，区间为 \\([1,3]\\)。利用多项式的连续性和可导性核对条件。割线斜率为 \\(\\frac{9-1}{3-1}=4\\)，解 \\(2c=4\\)，得 \\(c=2\\)，在区间内部。"
          ]
        },
        {
          "title": [
            "Test the conditions for Rolle’s theorem",
            "核对罗尔定理的条件"
          ],
          "detail": [
            "Compare \\(x^2\\) and \\(|x|\\) on \\([-1,1]\\). Both functions have equal endpoint values. The parabola has a horizontal tangent at \\(0\\). For \\(|x|\\), the only interior point where the slope could change is the corner, where the derivative is undefined.",
            "比较 \\(x^2\\) 和 \\(|x|\\) 在 \\([-1,1]\\) 上的情形。两个函数在各自的两个端点处取值相等。抛物线在 \\(0\\) 处的切线是水平的，而 \\(|x|\\) 的斜率只在尖角处由 \\(-1\\) 变为 \\(1\\)，该点的导数不存在。"
          ]
        }
      ],
      "check": [
        "For \\(f(x)=x^3\\) on \\([0,2]\\), check the conditions and find the point \\(c\\) given by the mean value theorem.",
        "取 \\(f(x)=x^3\\)，区间为 \\([0,2]\\)。核对拉格朗日中值定理的条件，求该定理给出的点 \\(c\\)。"
      ],
      "expected": [
        "The polynomial is continuous on \\([0,2]\\) and differentiable on \\((0,2)\\). The secant slope is \\(4\\). The equation \\(3c^2=4\\) gives \\(c=\\frac{2}{\\sqrt{3}}\\) in \\((0,2)\\).",
        "多项式在 \\([0,2]\\) 上连续，在 \\((0,2)\\) 内可导。割线斜率为 \\(4\\)，由 \\(3c^2=4\\) 得 \\((0,2)\\) 内的解 \\(c=\\frac{2}{\\sqrt{3}}\\)。"
      ],
      "followUp": [
        "Apply Rolle’s theorem to \\(f(x)=x^2-4x+3\\) on \\([1,3]\\). State the hypotheses and recover \\(c\\) from a sketch and from \\(f'(c)=0\\).",
        "对 \\(f(x)=x^2-4x+3\\) 在 \\([1,3]\\) 上应用罗尔定理。写出成立的条件，再分别根据图像和方程 \\(f'(c)=0\\) 找到 \\(c\\)。"
      ]
    },
    "monotonicity": {
      "objectives": [
        [
          "Use a derivative sign chart to find intervals of increase and decrease.",
          "用导数符号表确定函数的单调递增与单调递减区间。"
        ],
        [
          "Explain how the mean value theorem links the sign of a derivative to the order of two function values.",
          "用拉格朗日中值定理说明导数符号如何决定两个函数值的大小关系。"
        ]
      ],
      "focus": [
        "Examine the derivative on each side of a stationary point. An isolated zero of the derivative can occur inside a strictly increasing interval.",
        "在驻点左右分别检查导数的符号。严格递增的区间内部也可能有孤立的导数零点。"
      ],
      "preparation": [
        "Read § 4.3. Factor \\(3x^2-3\\) and mark its zeros on a number line.",
        "阅读 § 4.3，将 \\(3x^2-3\\) 分解因式，在数轴上标出它的零点。"
      ],
      "steps": [
        {
          "title": [
            "Connect the derivative to change across an interval",
            "用导数判断区间内的函数变化"
          ],
          "detail": [
            "Take \\(x_1<x_2\\) in an interval where \\(f'>0\\). The mean value theorem gives \\(f(x_2)-f(x_1)=f'(c)(x_2-x_1)>0\\) for an intermediate \\(c\\). Repeat the reasoning with \\(f'<0\\).",
            "在 \\(f'>0\\) 的区间内取 \\(x_1<x_2\\)。由拉格朗日中值定理，存在介于两点之间的 \\(c\\)，使 \\(f(x_2)-f(x_1)=f'(c)(x_2-x_1)>0\\)。让学生用同样的方法处理 \\(f'<0\\) 的情形。"
          ]
        },
        {
          "title": [
            "Build a derivative sign chart",
            "填写导数符号表"
          ],
          "detail": [
            "For \\(f(x)=x^3-3x\\), factor \\(f'(x)=3(x-1)(x+1)\\). The signs across the intervals split by \\(-1\\) and \\(1\\) are positive, negative and positive. Sketch a curve consistent with those three intervals.",
            "设 \\(f(x)=x^3-3x\\)，将导数写为 \\(f'(x)=3(x-1)(x+1)\\)。用 \\(-1\\) 和 \\(1\\) 将数轴分为三段，导数符号从左到右依次为正、负、正。根据三个区间的单调性画出草图。"
          ]
        },
        {
          "title": [
            "Check an isolated zero of the derivative",
            "检查导数的孤立零点"
          ],
          "detail": [
            "For \\(g(x)=x^3\\), show that \\(g'(x)>0\\) on both sides of zero. Have students compare values across zero using \\(g(0)=0\\) to justify strict increase on all of \\(\\mathbb R\\).",
            "对 \\(g(x)=x^3\\)，先说明零点两侧均有 \\(g'(x)>0\\)，再让学生借助 \\(g(0)=0\\) 比较分处两侧的函数值，说明 \\(g\\) 在整个 \\(\\mathbb R\\) 上严格递增。"
          ]
        }
      ],
      "check": [
        "Find where \\(h(x)=x+\\frac{4}{x}\\) increases and decreases on \\(x>0\\).",
        "求 \\(h(x)=x+\\frac{4}{x}\\) 在 \\(x>0\\) 上的递增和递减区间。"
      ],
      "expected": [
        "The derivative \\(1-\\frac{4}{x^2}\\) is negative for \\(0<x<2\\) and positive for \\(x>2\\). Thus \\(h\\) decreases on \\((0,2]\\) and increases on \\([2,\\infty)\\).",
        "导数 \\(1-\\frac{4}{x^2}\\) 在 \\(0<x<2\\) 时为负，在 \\(x>2\\) 时为正，所以 \\(h\\) 在 \\((0,2]\\) 上严格递减，在 \\([2,\\infty)\\) 上严格递增。"
      ],
      "followUp": [
        "Build a sign chart for \\(f(x)=x^4-4x^2\\), then label the intervals of increase and decrease on a sketch.",
        "为 \\(f(x)=x^4-4x^2\\) 制作导数符号表，并在草图上标出递增和递减区间。"
      ]
    },
    "extrema": {
      "objectives": [
        [
          "Find absolute extrema of a continuous function on a closed interval by comparing all candidate values.",
          "比较所有候选点的函数值，找出连续函数在闭区间上的最大值和最小值。"
        ],
        [
          "Classify an interior critical point using the sign of the derivative on either side.",
          "根据临界点两侧导数的符号判断该点是否为局部极值点。"
        ]
      ],
      "focus": [
        "Include the endpoints and interior points where the derivative vanishes or is undefined. Solving only the derivative equation can miss an absolute extremum.",
        "候选点须包括区间端点、导数为零的内点和导数不存在的内点。只解导数为零的方程容易漏掉最大值或最小值。"
      ],
      "preparation": [
        "Read §§ 4.1 and 4.5. Review the first derivative test and sketch a continuous function whose maximum is at an endpoint.",
        "阅读 §§ 4.1、4.5，复习用一阶导数判断极值的方法，再画出一个在区间端点取得最大值的连续函数图像。"
      ],
      "steps": [
        {
          "title": [
            "Find all candidates",
            "找齐极值候选点"
          ],
          "detail": [
            "Use the extreme value theorem to explain why a continuous function on a closed, bounded interval attains both extrema. Mark each endpoint and interior critical point on a sketch before comparing values.",
            "用最值定理说明连续函数为什么能在有界闭区间上取得最大值和最小值。先在草图上标出两个端点和区间内部的临界点，再比较函数值。"
          ]
        },
        {
          "title": [
            "Find the extrema of a function with a corner",
            "求带尖角函数的最大值和最小值"
          ],
          "detail": [
            "For \\(f(x)=|x-1|\\) on \\([-1,2]\\), the derivative is undefined at \\(1\\). Compare \\(f(-1)=2\\), \\(f(1)=0\\) and \\(f(2)=1\\). The absolute maximum is \\(2\\) at \\(-1\\), and the absolute minimum is \\(0\\) at \\(1\\).",
            "在 \\([-1,2]\\) 上考察 \\(f(x)=|x-1|\\)。函数在 \\(1\\) 处不可导。比较 \\(f(-1)=2\\)、\\(f(1)=0\\) 和 \\(f(2)=1\\)，得到最大值 \\(2\\) 在 \\(-1\\) 处取得，最小值 \\(0\\) 在 \\(1\\) 处取得。"
          ]
        },
        {
          "title": [
            "Classify an interior critical point",
            "判断内点处的局部极值"
          ],
          "detail": [
            "Mark the derivative signs for the absolute value example on both sides of \\(1\\) and explain the local minimum. Then ask students to classify the stationary point of \\(g(x)=x^3\\) using its positive derivative on both sides.",
            "标出绝对值函数在 \\(1\\) 两侧的导数符号，说明为什么该点取得局部极小值。再考察 \\(g(x)=x^3\\)，让学生根据驻点两侧导数均为正判断该点是否取得局部极值。"
          ]
        }
      ],
      "check": [
        "Find the absolute maximum and minimum of \\(g(x)=x^2-2x\\) on \\([0,3]\\), and state where each is attained.",
        "求 \\(g(x)=x^2-2x\\) 在 \\([0,3]\\) 上的最大值和最小值，并写出它们各自在哪个点取得。"
      ],
      "expected": [
        "Compare \\(g(0)=0\\), \\(g(1)=-1\\) and \\(g(3)=3\\). The minimum is \\(-1\\) at \\(x=1\\), and the maximum is \\(3\\) at \\(x=3\\).",
        "比较 \\(g(0)=0\\)、\\(g(1)=-1\\) 和 \\(g(3)=3\\)，最小值为 \\(-1\\)，在 \\(x=1\\) 处取得，最大值为 \\(3\\)，在 \\(x=3\\) 处取得。"
      ],
      "followUp": [
        "For a rectangle of perimeter \\(20\\), model its area as \\(A(x)=x(10-x)\\). Maximize \\(A\\) on \\([0,10]\\) and report both side lengths of the rectangle of largest area.",
        "周长为 \\(20\\) 的矩形，面积可写为 \\(A(x)=x(10-x)\\)。在 \\([0,10]\\) 上求 \\(A\\) 的最大值，并写出面积最大的矩形的两条边长。"
      ]
    },
    "lhopital": {
      "objectives": [
        [
          "Recognize \\(\\frac{0}{0}\\) and \\(\\frac{\\infty}{\\infty}\\) forms and evaluate a limit using L’Hôpital’s rule when its hypotheses hold.",
          "识别 \\(\\frac{0}{0}\\) 型与 \\(\\frac{\\infty}{\\infty}\\) 型未定式，并在满足条件时用洛必达法则求极限。"
        ],
        [
          "Transform an indeterminate power using logarithms and evaluate the resulting limit.",
          "对幂指型未定式取对数，化成可求极限的形式，再求原幂式的极限。"
        ]
      ],
      "focus": [
        "Check the form before each application. Students sometimes differentiate a quotient as a single function. The rule uses the ratio of the derivatives of numerator and denominator.",
        "每次应用前都要判断未定式的类型。学生容易按商的求导法则处理。这里应对分子和分母分别求导，再取导数之比的极限。"
      ],
      "preparation": [
        "Read § 7.5 and review the derivatives of \\(e^x\\), \\(\\ln x\\) and \\(\\frac{1}{x}\\). Identify which side of zero is in the domain of \\(\\ln x\\).",
        "阅读 § 7.5，复习 \\(e^x\\)、\\(\\ln x\\) 和 \\(\\frac{1}{x}\\) 的导数，指出趋近零点时应在哪一侧考察 \\(\\ln x\\)。"
      ],
      "steps": [
        {
          "title": [
            "Check when the rule applies",
            "判断何时可用洛必达法则"
          ],
          "detail": [
            "Classify a quotient by the separate limits of its numerator and denominator. For \\(\\frac{0}{0}\\) or \\(\\frac{\\infty}{\\infty}\\), check differentiability and that the denominator’s derivative is nonzero on the punctured interval of approach, then look for a limit of \\(\\frac{f'}{g'}\\).",
            "根据分子、分母各自的极限判断商的类型。对于 \\(\\frac{0}{0}\\) 型或 \\(\\frac{\\infty}{\\infty}\\) 型，检查分子和分母在去心邻域内是否可导、分母的导数是否处处非零，再考察 \\(\\frac{f'}{g'}\\) 的极限。单侧极限只需检查相应的一侧。"
          ]
        },
        {
          "title": [
            "Recheck the form before applying the rule again",
            "再次使用法则前重查未定式"
          ],
          "detail": [
            "To find \\(\\lim\\limits_{x\\to0}\\frac{e^x-1-x}{x^2}\\), check the \\(\\frac{0}{0}\\) form and use the derivative ratio \\(\\frac{e^x-1}{2x}\\). This is again \\(\\frac{0}{0}\\). A second application gives a limit of \\(\\frac{1}{2}\\) from \\(\\frac{e^x}{2}\\).",
            "求 \\(\\lim\\limits_{x\\to0}\\frac{e^x-1-x}{x^2}\\)。确认是 \\(\\frac{0}{0}\\) 型后，得到导数之比 \\(\\frac{e^x-1}{2x}\\)。它仍是 \\(\\frac{0}{0}\\) 型，再用一次洛必达法则，由 \\(\\frac{e^x}{2}\\) 得极限 \\(\\frac{1}{2}\\)。"
          ]
        },
        {
          "title": [
            "Take logarithms to handle a power",
            "对幂式先取对数"
          ],
          "detail": [
            "For \\(x^x\\) as \\(x\\to0^+\\), rewrite its logarithm \\(x\\ln x\\) as \\(\\frac{\\ln x}{\\frac{1}{x}}\\). The derivative ratio is \\(-x\\), which tends to \\(0\\). Exponentiate to conclude \\(x^x\\to1\\).",
            "求 \\(x\\to0^+\\) 时 \\(x^x\\) 的极限。先取对数，将 \\(x\\ln x\\) 写成 \\(\\frac{\\ln x}{\\frac{1}{x}}\\)。分子和分母的导数之比为 \\(-x\\)，趋于 \\(0\\)。取指数后得 \\(x^x\\to1\\)。"
          ]
        }
      ],
      "check": [
        "State the indeterminate form and evaluate \\(\\lim\\limits_{x\\to\\infty}\\frac{\\ln x}{x}\\).",
        "指出 \\(\\lim\\limits_{x\\to\\infty}\\frac{\\ln x}{x}\\) 的未定式类型并求极限。"
      ],
      "expected": [
        "This is an \\(\\frac{\\infty}{\\infty}\\) form. The derivative ratio is \\(\\frac{1}{x}\\), whose limit is \\(0\\).",
        "这是 \\(\\frac{\\infty}{\\infty}\\) 型未定式，分子和分母的导数之比是 \\(\\frac{1}{x}\\)，极限为 \\(0\\)。"
      ],
      "followUp": [
        "Evaluate \\(\\lim\\limits_{x\\to0}(1+2x)^{\\frac{1}{x}}\\). Take the logarithm, state the form of the resulting quotient and justify returning to the original power.",
        "求 \\(\\lim\\limits_{x\\to0}(1+2x)^{\\frac{1}{x}}\\)。先取对数，指出所得商的未定式类型，并说明如何由对数的极限得到原幂式的极限。"
      ]
    },
    "riemann": {
      "objectives": [
        [
          "Write a right-endpoint Riemann sum and take its limit in a simple case.",
          "写出用右端点取样的黎曼和，并求一个简单例子的极限。"
        ],
        [
          "Use an antiderivative to evaluate a definite integral and interpret the result as signed area.",
          "借助原函数计算定积分，并用带符号的面积解释结果。"
        ]
      ],
      "focus": [
        "In a Riemann sum, rectangles below the horizontal axis have negative heights. Adding their unsigned areas is a common error when computing a definite integral.",
        "黎曼和中，位于横轴下方的矩形取负高度。计算定积分时，学生容易把下方的面积也按正值相加。"
      ],
      "preparation": [
        "Read §§ 4.7 and 5.1–5.5. Review the sum of the first \\(n\\) squares and differentiate \\(\\frac{x^3}{3}\\).",
        "阅读 §§ 4.7、5.1–5.5，复习前 \\(n\\) 个正整数的平方和公式，并对 \\(\\frac{x^3}{3}\\) 求导。"
      ],
      "steps": [
        {
          "title": [
            "Build a sum from rectangles",
            "用矩形构造黎曼和"
          ],
          "detail": [
            "Partition \\([a,b]\\) into subintervals, mark a sample point \\(x_i^*\\) in each one, and form \\(\\sum\\limits_i f(x_i^*)\\Delta x_i\\). Describe how the largest subinterval width tends to zero in the Riemann integral.",
            "把 \\([a,b]\\) 划分成小区间，在每个小区间内取样点 \\(x_i^*\\)，写出 \\(\\sum\\limits_i f(x_i^*)\\Delta x_i\\)。说明求黎曼积分时，划分中最长的小区间长度趋于零。"
          ]
        },
        {
          "title": [
            "Compute the integral from a limit",
            "通过求和取极限计算积分"
          ],
          "detail": [
            "For \\(f(x)=x^2\\) on \\([0,1]\\), use \\(n\\) equal intervals with right endpoints \\(\\frac{i}{n}\\). The sum is \\(\\frac{1}{n^3}\\sum\\limits_{i=1}^n i^2\\), which tends to \\(\\frac{1}{3}\\) by the sum-of-squares formula. Verify the same value using \\([\\frac{x^3}{3}]_0^1\\).",
            "求 \\(f(x)=x^2\\) 在 \\([0,1]\\) 上的积分。把区间等分为 \\(n\\) 份，取右端点 \\(\\frac{i}{n}\\)。黎曼和为 \\(\\frac{1}{n^3}\\sum\\limits_{i=1}^n i^2\\)，用平方和公式知极限为 \\(\\frac{1}{3}\\)。再用 \\([\\frac{x^3}{3}]_0^1\\) 核对。"
          ]
        },
        {
          "title": [
            "Read the sign from a sketch",
            "从图像判断定积分的符号"
          ],
          "detail": [
            "Sketch \\(f(x)=x\\) on \\([-1,1]\\). Label the two triangles with their signed contributions and use them to predict the value of the definite integral.",
            "画出 \\(f(x)=x\\) 在 \\([-1,1]\\) 上的图像，给两个三角形标出带符号的面积，据此判断定积分等于多少。"
          ]
        }
      ],
      "check": [
        "Find \\(\\int_{-1}^{2} x\\,dx\\) and the total geometric area between the line and the horizontal axis on that interval.",
        "计算 \\(\\int_{-1}^{2} x\\,dx\\)，并求该区间内直线与横轴之间的几何面积。"
      ],
      "expected": [
        "The signed contributions are \\(-\\frac{1}{2}\\) and \\(2\\), so the integral is \\(\\frac{3}{2}\\). The geometric area is \\(\\frac{1}{2}+2=\\frac{5}{2}\\).",
        "横轴上下两部分的带符号面积分别为 \\(2\\) 和 \\(-\\frac{1}{2}\\)，所以定积分为 \\(\\frac{3}{2}\\)。几何面积为 \\(\\frac{1}{2}+2=\\frac{5}{2}\\)。"
      ],
      "followUp": [
        "Evaluate \\(\\int_1^3(2x+1)\\,dx\\) from an equal-width right-endpoint sum. Then check your result with an antiderivative.",
        "用等分区间、右端点取样的黎曼和计算 \\(\\int_1^3(2x+1)\\,dx\\)，再用原函数核对结果。"
      ]
    },
    "parts": {
      "objectives": [
        [
          "Derive the integration by parts formula from the product rule.",
          "由乘积求导法则推导分部积分公式。"
        ],
        [
          "Choose factors that simplify the remaining integral and evaluate a definite integral with its boundary term.",
          "选择合适的因子以简化剩余积分，并在计算定积分时正确代入边界项。"
        ]
      ],
      "focus": [
        "Keep the minus sign in \\(uv-\\int v\\,du\\). For a definite integral, evaluate \\(uv\\) at both bounds before combining it with the remaining integral.",
        "注意 \\(uv-\\int v\\,du\\) 中容易漏写的负号。计算定积分时，先对 \\(uv\\) 代入上下限，再与剩下的定积分合并。"
      ],
      "preparation": [
        "Read § 8.2. Differentiate a product and recall antiderivatives of \\(\\cos x\\), \\(\\sin x\\) and \\(e^x\\).",
        "阅读 § 8.2，复习乘积求导法则和 \\(\\cos x\\)、\\(\\sin x\\)、\\(e^x\\) 的原函数。"
      ],
      "steps": [
        {
          "title": [
            "Recover the formula from the product rule",
            "从乘积求导法则推出分部积分"
          ],
          "detail": [
            "Integrate \\((uv)'=u'v+uv'\\) and rearrange to obtain \\(\\int u\\,dv=uv-\\int v\\,du\\). Ask which choice of \\(u\\) and \\(dv\\) will make the integral on the right easier.",
            "对 \\((uv)'=u'v+uv'\\) 积分并移项，得到 \\(\\int u\\,dv=uv-\\int v\\,du\\)。让学生讨论怎样选取 \\(u\\) 和 \\(dv\\) 才能简化右端的积分。"
          ]
        },
        {
          "title": [
            "Evaluate the boundary term",
            "计算分部积分的边界项"
          ],
          "detail": [
            "In \\(\\int_0^\\pi x\\sin x\\,dx\\), take \\(u=x\\) and \\(dv=\\sin x\\,dx\\). Then \\(v=-\\cos x\\), the boundary term \\([-x\\cos x]_0^\\pi\\) is \\(\\pi\\), and the remaining \\(\\int_0^\\pi\\cos x\\,dx\\) is \\(0\\). The result is \\(\\pi\\).",
            "计算 \\(\\int_0^\\pi x\\sin x\\,dx\\) 时，取 \\(u=x\\)、\\(dv=\\sin x\\,dx\\)，得 \\(v=-\\cos x\\)。边界项 \\([-x\\cos x]_0^\\pi\\) 等于 \\(\\pi\\)，剩下的 \\(\\int_0^\\pi\\cos x\\,dx\\) 等于 \\(0\\)，故原积分为 \\(\\pi\\)。"
          ]
        },
        {
          "title": [
            "Use one as a factor",
            "把常数 1 作为一个因子"
          ],
          "detail": [
            "Read \\(\\ln x\\) as \\((\\ln x)\\cdot1\\) for \\(x>0\\). With \\(u=\\ln x\\) and \\(dv=dx\\), obtain \\(x\\ln x-x+C\\). Differentiate this result to check it.",
            "在 \\(x>0\\) 时，把 \\(\\ln x\\) 看成 \\((\\ln x)\\cdot1\\)。取 \\(u=\\ln x\\)、\\(dv=dx\\)，得原函数 \\(x\\ln x-x+C\\)。对结果求导，核对是否得到 \\(\\ln x\\)。"
          ]
        }
      ],
      "check": [
        "Use integration by parts to find \\(\\int_0^1 xe^x\\,dx\\).",
        "用分部积分计算 \\(\\int_0^1 xe^x\\,dx\\)。"
      ],
      "expected": [
        "Take \\(u=x\\) and \\(dv=e^x\\,dx\\). This gives \\([xe^x]_0^1-[e^x]_0^1=e-(e-1)=1\\).",
        "取 \\(u=x\\)、\\(dv=e^x\\,dx\\)，得 \\([xe^x]_0^1-[e^x]_0^1=e-(e-1)=1\\)。"
      ],
      "followUp": [
        "Integrate \\(x^2e^x\\) by parts twice and check the resulting antiderivative by differentiation.",
        "对 \\(x^2e^x\\) 连续使用两次分部积分法，并对所得原函数求导核对。"
      ]
    },
    "sequence": {
      "objectives": [
        [
          "Find and justify a threshold \\(N\\) for a given tolerance in a sequence limit.",
          "对给定的误差容许量，求出数列极限定义中的一个 \\(N\\)，并验证它满足要求。"
        ],
        [
          "Prove convergence of a recursive sequence by checking monotonicity and boundedness.",
          "验证递推数列的单调性和有界性，据此证明数列收敛。"
        ]
      ],
      "focus": [
        "A convergence bound must control every term from some index onward. Merely staying between two fixed numbers can leave a sequence oscillating.",
        "要证明数列收敛，必须控制某一项之后的所有项与极限的距离。有界数列仍可能一直振荡。"
      ],
      "preparation": [
        "Read § 10.1. Write the first five terms of \\(\\frac{n}{n+1}\\) and \\((-1)^n\\), starting at \\(n=1\\).",
        "阅读 § 10.1。从 \\(n=1\\) 起，分别写出 \\(\\frac{n}{n+1}\\) 和 \\((-1)^n\\) 的前五项。"
      ],
      "steps": [
        {
          "title": [
            "Plot terms and predict their behavior",
            "描点观察数列的变化"
          ],
          "detail": [
            "Plot the prepared terms as points \\((n,a_n)\\). The first sequence approaches \\(1\\) from below. The second keeps returning to both \\(-1\\) and \\(1\\). Ask students to describe what eventually within a tolerance means.",
            "把课前写出的项表示为点 \\((n,a_n)\\)。第一个数列从下方逼近 \\(1\\)，第二个数列在 \\(-1\\) 和 \\(1\\) 之间交替。让学生用自己的话说出什么叫从某一项开始始终落在误差范围内。"
          ]
        },
        {
          "title": [
            "Find a threshold for any tolerance",
            "为任意误差容许量确定起始下标"
          ],
          "detail": [
            "For \\(a_n=\\frac{n}{n+1}\\), write \\(|a_n-1|=\\frac{1}{n+1}\\). Given \\(\\varepsilon>0\\), pick an integer \\(N>\\frac{1}{\\varepsilon}\\). Then every \\(n\\ge N\\) has \\(|a_n-1|<\\varepsilon\\), proving \\(a_n\\to1\\).",
            "对 \\(a_n=\\frac{n}{n+1}\\)，有 \\(|a_n-1|=\\frac{1}{n+1}\\)。任给 \\(\\varepsilon>0\\)，取整数 \\(N>\\frac{1}{\\varepsilon}\\)。当 \\(n\\ge N\\) 时，都有 \\(|a_n-1|<\\varepsilon\\)，所以 \\(a_n\\to1\\)。"
          ]
        },
        {
          "title": [
            "Prove convergence using monotonicity and a bound",
            "用单调性和有界性证明收敛"
          ],
          "detail": [
            "For \\(b_1=1\\) and \\(b_{n+1}=\\frac{b_n+2}{2}\\), show by induction that \\(b_n<2\\). Then \\(b_{n+1}-b_n=\\frac{2-b_n}{2}>0\\). The sequence converges by the monotone convergence theorem, and its limit solves \\(L=\\frac{L+2}{2}\\), giving \\(L=2\\).",
            "设 \\(b_1=1\\)、\\(b_{n+1}=\\frac{b_n+2}{2}\\)。用归纳法证明 \\(b_n<2\\)，再由 \\(b_{n+1}-b_n=\\frac{2-b_n}{2}>0\\) 得到递增性。由单调有界定理知数列收敛。对递推式取极限，解 \\(L=\\frac{L+2}{2}\\) 得 \\(L=2\\)。"
          ]
        }
      ],
      "check": [
        "For \\(a_n=\\frac{3n+1}{n+1}\\), find the limit and give an \\(N\\) such that the error is below \\(\\frac{1}{10}\\) for every \\(n\\ge N\\).",
        "求 \\(a_n=\\frac{3n+1}{n+1}\\) 的极限，并给出一个 \\(N\\)，使得 \\(n\\ge N\\) 时误差始终小于 \\(\\frac{1}{10}\\)。"
      ],
      "expected": [
        "The limit is \\(3\\) since \\(|a_n-3|=\\frac{2}{n+1}\\). For example, \\(N=20\\) works since \\(\\frac{2}{21}<\\frac{1}{10}\\).",
        "由 \\(|a_n-3|=\\frac{2}{n+1}\\) 可知极限是 \\(3\\)。可以取 \\(N=20\\)，因为这时误差至多为 \\(\\frac{2}{21}<\\frac{1}{10}\\)。"
      ],
      "followUp": [
        "Show that \\(c_n=\\frac{(-1)^n}{n}\\) converges to zero by bounding \\(|c_n|\\). Give an explicit threshold that works for every \\(\\varepsilon>0\\).",
        "通过估计 \\(|c_n|\\)，证明 \\(c_n=\\frac{(-1)^n}{n}\\) 收敛到零。对每个 \\(\\varepsilon>0\\)，写出一个满足要求的 \\(N\\)。"
      ]
    },
    "infinite-series": {
      "objectives": [
        [
          "Use a formula for the partial sums to find the sum of a telescoping series.",
          "利用部分和的公式求裂项相消级数的和。"
        ],
        [
          "Choose a convergence test and distinguish absolute from conditional convergence in an alternating series.",
          "选择适当的收敛判别法，区分交错级数的绝对收敛与条件收敛。"
        ]
      ],
      "focus": [
        "Check the partial sums even when \\(a_n\\to0\\). The harmonic series has terms tending to zero and divergent partial sums.",
        "即使 \\(a_n\\to0\\)，也要判断部分和是否收敛。调和级数的通项趋于零，部分和数列却发散。"
      ],
      "preparation": [
        "Read §§ 10.2–10.6. Write the first four partial sums for the geometric series \\(\\sum\\limits_{n=1}^{\\infty}2^{-n}\\).",
        "阅读 §§ 10.2–10.6，写出几何级数 \\(\\sum\\limits_{n=1}^{\\infty}2^{-n}\\) 的前四个部分和。"
      ],
      "steps": [
        {
          "title": [
            "Distinguish terms from partial sums",
            "区分通项与部分和"
          ],
          "detail": [
            "Put \\(a_n\\) and \\(S_N=\\sum\\limits_{n=1}^N a_n\\) in separate columns for the geometric series. Ask which column must have a finite limit for the series to converge. Use \\(a_N=S_N-S_{N-1}\\) to explain why convergence forces \\(a_N\\to0\\).",
            "为课前的几何级数分两列列出 \\(a_n\\) 和 \\(S_N=\\sum\\limits_{n=1}^N a_n\\)。问学生哪一列必须趋于有限极限，级数才收敛。再根据 \\(a_N=S_N-S_{N-1}\\) 说明级数收敛为何推出 \\(a_N\\to0\\)。"
          ]
        },
        {
          "title": [
            "Compute a telescoping sum",
            "裂项相消求和"
          ],
          "detail": [
            "Write \\(\\frac{1}{n(n+1)}=\\frac{1}{n}-\\frac{1}{n+1}\\). In \\(S_N\\), the intermediate terms cancel and leave \\(1-\\frac{1}{N+1}\\). Taking the limit proves that the series sums to \\(1\\).",
            "把通项写成 \\(\\frac{1}{n(n+1)}=\\frac{1}{n}-\\frac{1}{n+1}\\)。在 \\(S_N\\) 中，中间项相消，只剩 \\(1-\\frac{1}{N+1}\\)。对部分和取极限，得级数的和为 \\(1\\)。"
          ]
        },
        {
          "title": [
            "Select a test based on the terms",
            "根据通项选择判别法"
          ],
          "detail": [
            "The comparison \\(\\frac{1}{n^2+1}\\le\\frac{1}{n^2}\\) bounds the terms by those of a convergent \\(p\\)-series. For \\(\\sum\\limits_{n=1}^{\\infty}\\frac{(-1)^{n-1}}{n}\\), the magnitudes decrease to zero. The alternating series test gives convergence, and the harmonic series shows it is conditional.",
            "由 \\(\\frac{1}{n^2+1}\\le\\frac{1}{n^2}\\)，用收敛的 \\(p\\) 级数作比较，得到相应的正项级数收敛。再考察 \\(\\sum\\limits_{n=1}^{\\infty}\\frac{(-1)^{n-1}}{n}\\)，其通项的绝对值单调趋于零，由交错级数判别法知它收敛。绝对值构成调和级数，故原级数条件收敛。"
          ]
        }
      ],
      "check": [
        "Does \\(\\sum\\limits_{n=1}^{\\infty}\\frac{(-1)^{n-1}}{\\sqrt n}\\) converge absolutely, converge conditionally or diverge? Justify the classification.",
        "判断 \\(\\sum\\limits_{n=1}^{\\infty}\\frac{(-1)^{n-1}}{\\sqrt n}\\) 是绝对收敛、条件收敛还是发散，并写出依据。"
      ],
      "expected": [
        "It converges conditionally. The magnitudes decrease to zero, so the alternating series converges. The absolute-value series is a divergent \\(p\\)-series with \\(p=\\frac{1}{2}\\).",
        "该级数条件收敛。通项的绝对值单调趋于零，由交错级数判别法知原级数收敛。取绝对值后得到 \\(p=\\frac{1}{2}\\) 的 \\(p\\) 级数，它发散。"
      ],
      "followUp": [
        "Test \\(\\sum\\limits_{n=1}^\\infty \\frac{n}{3^n}\\) by the ratio test and \\(\\sum\\limits_{n=1}^\\infty \\frac{1}{n+\\sqrt n}\\) by limit comparison with the harmonic series.",
        "用比值判别法判断 \\(\\sum\\limits_{n=1}^\\infty \\frac{n}{3^n}\\) 的敛散性，再将 \\(\\sum\\limits_{n=1}^\\infty \\frac{1}{n+\\sqrt n}\\) 与调和级数作极限比较。"
      ]
    },
    "power-series": {
      "objectives": [
        [
          "Find a power series’ center, radius and interval of convergence, with a separate test at each endpoint.",
          "确定幂级数的中心、收敛半径和收敛区间，并分别检验两个端点。"
        ],
        [
          "Approximate a function near zero using its degree-two Maclaurin polynomial.",
          "用二次麦克劳林多项式近似计算函数在零点附近的值。"
        ]
      ],
      "focus": [
        "The radius gives the distance from the center to the endpoints. Students often leave both endpoints open without testing the series at either value.",
        "收敛半径给出中心到端点的距离。学生常把两个端点直接排除，忘记逐个代入检验。"
      ],
      "preparation": [
        "Read the archive handout from page 3 alongside §§ 10.7–10.8. Review the ratio test, the harmonic series and the alternating series test.",
        "从归档讲义第 3 页开始阅读，并参照 §§ 10.7–10.8。复习比值判别法、调和级数及交错级数判别法。"
      ],
      "steps": [
        {
          "title": [
            "Identify the center and coefficients",
            "识别幂级数的中心和系数"
          ],
          "detail": [
            "Write \\(\\sum\\limits_{n=0}^{\\infty}a_n(x-c)^n\\) and ask students to read its first three terms. Mark \\(c\\), \\(c-R\\) and \\(c+R\\) on a number line for a finite positive radius \\(R\\).",
            "写出 \\(\\sum\\limits_{n=0}^{\\infty}a_n(x-c)^n\\)，请学生写出前三项。当收敛半径 \\(R\\) 为有限正数时，在数轴上标出中心 \\(c\\) 和两个端点 \\(c-R\\)、\\(c+R\\)。"
          ]
        },
        {
          "title": [
            "Find the radius and test both endpoints",
            "求收敛半径并检验两个端点"
          ],
          "detail": [
            "For \\(\\sum\\limits_{n=1}^{\\infty}\\frac{(x-2)^n}{n}\\), the ratio test away from the center gives absolute convergence for \\(|x-2|<1\\) and divergence for \\(|x-2|>1\\). At \\(x=2\\), all terms are zero. At \\(x=1\\) the alternating harmonic series converges, and at \\(x=3\\) the harmonic series diverges. Thus \\(R=1\\) and the interval is \\([1,3)\\).",
            "考察 \\(\\sum\\limits_{n=1}^{\\infty}\\frac{(x-2)^n}{n}\\)。在中心以外用比值判别法，得 \\(|x-2|<1\\) 时绝对收敛，\\(|x-2|>1\\) 时发散。\\(x=2\\) 时各项均为零。代入 \\(x=1\\) 得到收敛的交错调和级数，代入 \\(x=3\\) 得到发散的调和级数。因此 \\(R=1\\)，收敛区间为 \\([1,3)\\)。"
          ]
        },
        {
          "title": [
            "Approximate with the first three terms",
            "用展开式的前三项作近似"
          ],
          "detail": [
            "Use the handout’s expansion for \\(e^x\\). Keeping terms through degree two gives \\(e^{0.1}\\approx1+0.1+0.005=1.105\\). Ask students to calculate the first omitted term and say whether this polynomial underestimates \\(e^{0.1}\\).",
            "利用讲义中的 \\(e^x\\) 展开式，保留到二次项，得 \\(e^{0.1}\\approx1+0.1+0.005=1.105\\)。让学生算出第一个省略项，并判断二次多项式的值是否小于 \\(e^{0.1}\\)。"
          ]
        }
      ],
      "check": [
        "Find the center, radius and interval of convergence of \\(\\sum\\limits_{n=1}^{\\infty}\\frac{(x+1)^n}{2^n n^2}\\).",
        "求 \\(\\sum\\limits_{n=1}^{\\infty}\\frac{(x+1)^n}{2^n n^2}\\) 的中心、收敛半径和收敛区间。"
      ],
      "expected": [
        "The center is \\(-1\\). The limiting ratio away from the center is \\(\\frac{|x+1|}{2}\\), which gives \\(R=2\\). At both \\(x=-3\\) and \\(x=1\\), the absolute values of the terms are \\(\\frac{1}{n^2}\\), so the series converges absolutely at both endpoints. The interval is \\([-3,1]\\).",
        "中心为 \\(-1\\)。中心以外，相邻项绝对值之比的极限为 \\(\\frac{|x+1|}{2}\\)，所以 \\(R=2\\)。在 \\(x=-3\\) 和 \\(x=1\\) 处，通项的绝对值均为 \\(\\frac{1}{n^2}\\)，所以两端点都绝对收敛，收敛区间为 \\([-3,1]\\)。"
      ],
      "followUp": [
        "Integrate the geometric series for \\(\\frac{1}{1+x}\\) from \\(0\\) to \\(x\\), with \\(|x|<1\\). Use the first three nonzero terms of the resulting series to approximate \\(\\ln(1.1)\\).",
        "在 \\(|x|<1\\) 内，将 \\(\\frac{1}{1+x}\\) 的几何级数从 \\(0\\) 到 \\(x\\) 逐项积分。用所得级数的前三个非零项近似计算 \\(\\ln(1.1)\\)。"
      ]
    }
  },
  "exercises": [
    {
      "chapter": 1,
      "title": [
        "Functions",
        "函数"
      ],
      "items": [
        {
          "section": "1.1",
          "question": [
            "Sketch \\(f(x)=\\sqrt{9-x^2}-1\\). Give its domain, range and intercepts with both axes.",
            "画出 \\(f(x)=\\sqrt{9-x^2}-1\\) 的图像，写出定义域、值域以及与两条坐标轴的交点。"
          ],
          "answer": [
            "Shift the upper semicircle of radius \\(3\\) down one unit. The domain is \\([-3,3]\\), and the range is \\([-1,2]\\). The vertical intercept is \\((0,2)\\). Setting \\(f(x)=0\\) gives \\(9-x^2=1\\), so the horizontal intercepts are \\((-2\\sqrt 2,0)\\) and \\((2\\sqrt 2,0)\\).",
            "把半径为 \\(3\\) 的上半圆向下平移一个单位。定义域为 \\([-3,3]\\)，值域为 \\([-1,2]\\)。图像与纵轴交于 \\((0,2)\\)。令 \\(f(x)=0\\)，得 \\(9-x^2=1\\)，所以与横轴的交点为 \\((-2\\sqrt 2,0)\\) 和 \\((2\\sqrt 2,0)\\)。"
          ]
        },
        {
          "section": "1.1",
          "question": [
            "Sketch the piecewise function and mark each open or filled endpoint. Find \\(p(0)\\) and the range.\n          \\[p(x)=\\begin{cases}\n          x+2,&-2\\le x<0,\\\\\n          x^2-1,&0\\le x\\le2.\n          \\end{cases}\\]",
            "画出下列分段函数的图像，用空心点或实心点标出各段端点。求 \\(p(0)\\) 和值域。\n          \\[p(x)=\\begin{cases}\n          x+2,&-2\\le x<0,\\\\\n          x^2-1,&0\\le x\\le2.\n          \\end{cases}\\]"
          ],
          "answer": [
            "Draw a line from the filled point \\((-2,0)\\) to the open point \\((0,2)\\). Draw the parabolic arc with filled endpoints \\((0,-1)\\) and \\((2,3)\\). Then \\(p(0)=-1\\). The two branches have ranges \\([0,2)\\) and \\([-1,3]\\), whose union is \\([-1,3]\\).",
            "画出从实心点 \\((-2,0)\\) 到空心点 \\((0,2)\\) 的线段，再画出端点为 \\((0,-1)\\) 和 \\((2,3)\\) 的抛物线段，这两个端点都取实心点。于是 \\(p(0)=-1\\)。两段的值域分别为 \\([0,2)\\) 和 \\([-1,3]\\)，并集为 \\([-1,3]\\)。"
          ]
        },
        {
          "section": "1.1",
          "question": [
            "Find the domain of \\(f(x)=\\frac{\\sqrt{9-x}}{x-2}\\).",
            "求 \\(f(x)=\\frac{\\sqrt{9-x}}{x-2}\\) 的定义域。"
          ],
          "answer": [
            "The square root requires \\(x\\le 9\\), and the denominator requires \\(x\\ne2\\). The domain is \\((-\\infty,2)\\cup(2,9]\\).",
            "根号要求 \\(x\\le9\\)，分母要求 \\(x\\ne2\\)，所以定义域是 \\((-\\infty,2)\\cup(2,9]\\)。"
          ]
        },
        {
          "section": "1.1",
          "question": [
            "Is \\(f(x)=\\frac{x}{1+x^2}\\) even, odd, or neither? Find its intercepts.",
            "判断 \\(f(x)=\\frac{x}{1+x^2}\\) 的奇偶性，并求图像与坐标轴的交点。"
          ],
          "answer": [
            "Its domain is \\(\\mathbb R\\), and \\(f(-x)=-f(x)\\), so it is odd. It meets both axes at \\((0,0)\\).",
            "定义域为 \\(\\mathbb R\\)，且 \\(f(-x)=-f(x)\\)，所以是奇函数。图像只在 \\((0,0)\\) 处与两坐标轴相交。"
          ]
        },
        {
          "section": "1.1",
          "question": [
            "For \\(p(x)=3x^2-7x+2\\), find its degree, its zeros, and the point where its graph meets the \\(y\\)-axis.",
            "求多项式 \\(p(x)=3x^2-7x+2\\) 的次数、零点，以及图像与 \\(y\\) 轴的交点。"
          ],
          "answer": [
            "The degree is \\(2\\). Factoring gives \\(p(x)=(3x-1)(x-2)\\), so the zeros are \\(\\frac{1}{3}\\) and \\(2\\). Since \\(p(0)=2\\), the \\(y\\)-intercept is \\((0,2)\\).",
            "这是二次多项式。因式分解得 \\(p(x)=(3x-1)(x-2)\\)，所以零点为 \\(\\frac{1}{3}\\) 和 \\(2\\)。由 \\(p(0)=2\\) 得图像与 \\(y\\) 轴交于 \\((0,2)\\)。"
          ]
        },
        {
          "section": "1.2",
          "question": [
            "Let \\(f(t)=\\sqrt{t+1}\\) and \\(g(x)=4-x^2\\). Find \\(f\\circ g\\) and \\(g\\circ f\\), and give the domain of each composition.",
            "设 \\(f(t)=\\sqrt{t+1}\\)，\\(g(x)=4-x^2\\)。求 \\(f\\circ g\\) 和 \\(g\\circ f\\) 的表达式及各自的定义域。"
          ],
          "answer": [
            "\\((f\\circ g)(x)=\\sqrt{5-x^2}\\), which requires \\(5-x^2\\ge0\\). Its domain is \\([-\\sqrt 5,\\sqrt 5]\\). For the other composition, \\((g\\circ f)(x)=4-(\\sqrt{x+1})^2=3-x\\). The inner square root requires \\(x\\ge-1\\), so the domain is \\([-1,\\infty)\\).",
            "\\((f\\circ g)(x)=\\sqrt{5-x^2}\\)，要求 \\(5-x^2\\ge0\\)，定义域为 \\([-\\sqrt 5,\\sqrt 5]\\)。另一个复合函数为 \\((g\\circ f)(x)=4-(\\sqrt{x+1})^2=3-x\\)。内层的平方根要求 \\(x\\ge-1\\)，所以定义域为 \\([-1,\\infty)\\)。"
          ]
        },
        {
          "section": "1.2",
          "question": [
            "Starting with \\(y=|x|\\), describe the transformations that give \\(y=-2|x+1|+3\\). Find the new vertex and the horizontal intercepts.",
            "从 \\(y=|x|\\) 的图像出发，说明怎样变换得到 \\(y=-2|x+1|+3\\) 的图像。求新图像的顶点和与横轴的交点。"
          ],
          "answer": [
            "Shift left one unit, stretch vertically by a factor of \\(2\\), reflect across the horizontal axis and shift up three units. The vertex is \\((-1,3)\\). At a horizontal intercept, \\(|x+1|=\\frac{3}{2}\\), so the intercepts are \\((-\\frac{5}{2},0)\\) and \\((\\frac{1}{2},0)\\).",
            "先向左平移一个单位，沿纵向拉伸到原来的 \\(2\\) 倍，再关于横轴翻转，最后向上平移三个单位。顶点为 \\((-1,3)\\)。由 \\(|x+1|=\\frac{3}{2}\\) 得与横轴的交点为 \\((-\\frac{5}{2},0)\\) 和 \\((\\frac{1}{2},0)\\)。"
          ]
        },
        {
          "section": "1.2",
          "question": [
            "Let \\(f(x)=2x-3\\) and \\(g(x)=x^2+1\\). Find \\(f\\circ g\\) and \\(g\\circ f\\).",
            "设 \\(f(x)=2x-3\\)，\\(g(x)=x^2+1\\)，求 \\(f\\circ g\\) 和 \\(g\\circ f\\)。"
          ],
          "answer": [
            "Substituting in the indicated order gives \\((f\\circ g)(x)=2x^2-1\\) and \\((g\\circ f)(x)=4x^2-12x+10\\).",
            "按复合次序代入，得 \\((f\\circ g)(x)=2x^2-1\\)，\\((g\\circ f)(x)=4x^2-12x+10\\)。"
          ]
        },
        {
          "section": "1.2",
          "question": [
            "Set \\(f(x)=x^2-5\\) and \\(g(x)=\\frac{1}{x-4}\\). Find \\(g\\circ f\\) and specify its domain.",
            "设 \\(f(x)=x^2-5\\)，\\(g(x)=\\frac{1}{x-4}\\)。求 \\(g\\circ f\\) 及其定义域。"
          ],
          "answer": [
            "Substitution gives \\((g\\circ f)(x)=\\frac{1}{x^2-9}\\). The outer function requires \\(f(x)\\ne4\\), so the domain is \\(\\mathbb R\\setminus\\{-3,3\\}\\).",
            "代入得 \\((g\\circ f)(x)=\\frac{1}{x^2-9}\\)。外层函数要求 \\(f(x)\\ne4\\)，因此定义域为 \\(\\mathbb R\\setminus\\{-3,3\\}\\)。"
          ]
        },
        {
          "section": "1.3",
          "question": [
            "For \\(T(t)=4+3\\cos(2t-\\frac{\\pi}{3})\\), find the amplitude and period. Find when the maximum and minimum occur on \\(0\\le t<\\pi\\), and give both values.",
            "求 \\(T(t)=4+3\\cos(2t-\\frac{\\pi}{3})\\) 的振幅和周期。求它在 \\(0\\le t<\\pi\\) 上的最大值、最小值以及取得这两个值时的 \\(t\\)。"
          ],
          "answer": [
            "The amplitude is \\(3\\) and the period is \\(\\frac{2\\pi}{2}=\\pi\\). On the given interval, the cosine is \\(1\\) when \\(2t-\\frac{\\pi}{3}=0\\) and \\(-1\\) when \\(2t-\\frac{\\pi}{3}=\\pi\\). Thus the maximum is \\(7\\) at \\(t=\\frac{\\pi}{6}\\), and the minimum is \\(1\\) at \\(t=\\frac{2\\pi}{3}\\).",
            "振幅为 \\(3\\)，周期为 \\(\\frac{2\\pi}{2}=\\pi\\)。在给定区间内，当 \\(2t-\\frac{\\pi}{3}=0\\) 时，余弦值为 \\(1\\)，当 \\(2t-\\frac{\\pi}{3}=\\pi\\) 时，余弦值为 \\(-1\\)。所以最大值 \\(7\\) 在 \\(t=\\frac{\\pi}{6}\\) 处取得，最小值 \\(1\\) 在 \\(t=\\frac{2\\pi}{3}\\) 处取得。"
          ]
        },
        {
          "section": "1.3",
          "question": [
            "For \\(h(t)=5-2\\sin(\\pi t)\\), find the amplitude, period, range, and the time of the minimum on \\([0,2)\\).",
            "求 \\(h(t)=5-2\\sin(\\pi t)\\) 的振幅、周期、值域，以及它在 \\([0,2)\\) 上取得最小值的时刻。"
          ],
          "answer": [
            "The amplitude is \\(2\\), the period is \\(2\\), and the range is \\([3,7]\\). The minimum occurs when \\(\\sin(\\pi t)=1\\), at \\(t=\\frac{1}{2}\\) on this interval.",
            "振幅为 \\(2\\)，周期为 \\(2\\)，值域为 \\([3,7]\\)。当 \\(\\sin(\\pi t)=1\\) 时取最小值，即区间内的 \\(t=\\frac{1}{2}\\)。"
          ]
        }
      ]
    },
    {
      "chapter": 2,
      "title": [
        "Limits and Continuity",
        "极限与连续性"
      ],
      "items": [
        {
          "section": "2.1",
          "question": [
            "A cart’s position along a straight track is \\(s(t)=t^2+2t\\) meters at time \\(t\\) seconds. Find its average velocity between \\(t=2\\) and \\(t=2+h\\) for small \\(h\\ne0\\). Use a limit to find the instantaneous velocity at \\(t=2\\).",
            "一辆小车沿直轨道行驶，\\(t\\) 秒时的位置为 \\(s(t)=t^2+2t\\) 米。设 \\(h\\ne0\\) 且接近零，求 \\(t=2\\) 与 \\(t=2+h\\) 两时刻之间的平均速度，再用极限求 \\(t=2\\) 时的瞬时速度。"
          ],
          "answer": [
            "Since \\(s(2+h)-s(2)=6h+h^2\\), the average velocity is \\(6+h\\) meters per second. The instantaneous velocity in meters per second is\n          \\[\\lim\\limits_{h\\to0}(6+h)=6.\\]",
            "因为 \\(s(2+h)-s(2)=6h+h^2\\)，所以平均速度为 \\(6+h\\) 米每秒。取极限得瞬时速度为 \\(6\\) 米每秒。\n          \\[\\lim\\limits_{h\\to0}(6+h)=6.\\]"
          ]
        },
        {
          "section": "2.2",
          "question": [
            "Evaluate the limit and describe the feature of the quotient’s graph at \\(x=2\\).\n          \\[\\lim\\limits_{x\\to2}\\frac{x^2-4}{x-2}\\]",
            "求下面的极限，并说明该分式函数的图像在 \\(x=2\\) 处有什么特征。\n          \\[\\lim\\limits_{x\\to2}\\frac{x^2-4}{x-2}\\]"
          ],
          "answer": [
            "Factor \\(x^2-4=(x-2)(x+2)\\). For \\(x\\ne2\\), cancel \\(x-2\\) to get \\(x+2\\), so the limit is \\(4\\). The graph is the line \\(y=x+2\\) with an open circle at \\((2,4)\\).",
            "把分子分解为 \\(x^2-4=(x-2)(x+2)\\)。当 \\(x\\ne2\\) 时，约去 \\(x-2\\) 得 \\(x+2\\)，所以极限为 \\(4\\)。图像是直线 \\(y=x+2\\)，在 \\((2,4)\\) 处有一个空心点。"
          ]
        },
        {
          "section": "2.2",
          "question": [
            "Evaluate \\(\\lim\\limits_{x\\to3}\\frac{\\sqrt{x+6}-3}{x-3}\\) by rationalizing the numerator.",
            "用分子有理化求 \\(\\lim\\limits_{x\\to3}\\frac{\\sqrt{x+6}-3}{x-3}\\)。"
          ],
          "answer": [
            "For \\(x\\ne3\\), the quotient simplifies to \\(\\frac{1}{\\sqrt{x+6}+3}\\). The limit is \\(\\frac{1}{6}\\).",
            "当 \\(x\\ne3\\) 时，原式化为 \\(\\frac{1}{\\sqrt{x+6}+3}\\)，所以极限为 \\(\\frac{1}{6}\\)。"
          ]
        },
        {
          "section": "2.2",
          "question": [
            "Use the standard trigonometric limit to find \\(\\lim\\limits_{x\\to0}\\frac{\\sin(5x)}{2x}\\).",
            "利用基本三角极限求 \\(\\lim\\limits_{x\\to0}\\frac{\\sin(5x)}{2x}\\)。"
          ],
          "answer": [
            "Write the quotient as \\(\\frac{5}{2}\\cdot\\frac{\\sin(5x)}{5x}\\). The second factor tends to \\(1\\), so the answer is \\(\\frac{5}{2}\\).",
            "将原式写成 \\(\\frac{5}{2}\\cdot\\frac{\\sin(5x)}{5x}\\)，后一个因子趋于 \\(1\\)，故极限为 \\(\\frac{5}{2}\\)。"
          ]
        },
        {
          "section": "2.2",
          "question": [
            "Factor the numerator and denominator to evaluate \\(\\lim\\limits_{x\\to2}\\frac{x^3-8}{x^2-4}\\).",
            "将分子、分母因式分解，求 \\(\\lim\\limits_{x\\to2}\\frac{x^3-8}{x^2-4}\\)。"
          ],
          "answer": [
            "Cancel \\(x-2\\) for \\(x\\ne2\\). The remaining expression is \\(\\frac{x^2+2x+4}{x+2}\\), which tends to \\(3\\).",
            "当 \\(x\\ne2\\) 时约去公因子 \\(x-2\\)，得到 \\(\\frac{x^2+2x+4}{x+2}\\)，它在 \\(x\\to2\\) 时趋于 \\(3\\)。"
          ]
        },
        {
          "section": "2.2",
          "question": [
            "Let \\(a\\ne0\\) be fixed. Evaluate \\[\\lim\\limits_{h\\to0}\\frac{\\frac{1}{a+2h}-\\frac{1}{a}}{h}.\\]",
            "设 \\(a\\ne0\\) 为常数，求 \\[\\lim\\limits_{h\\to0}\\frac{\\frac{1}{a+2h}-\\frac{1}{a}}{h}.\\]"
          ],
          "answer": [
            "Combining the two reciprocals gives \\(\\frac{-2h}{a(a+2h)}\\) in the numerator. After cancellation the quotient tends to \\(-\\frac{2}{a^2}\\).",
            "分子通分得 \\(\\frac{-2h}{a(a+2h)}\\)。约去 \\(h\\) 后取极限，结果为 \\(-\\frac{2}{a^2}\\)。"
          ]
        },
        {
          "section": "2.3",
          "question": [
            "Prove the limit using the \\(\\varepsilon\\)-\\(\\delta\\) definition. Give a choice of \\(\\delta\\) for each \\(\\varepsilon>0\\).\n          \\[\\lim\\limits_{x\\to1}(x^2+2x)=3\\]",
            "用 \\(\\varepsilon\\)-\\(\\delta\\) 定义证明下列极限。对任意 \\(\\varepsilon>0\\)，给出一个合适的 \\(\\delta\\)。\n          \\[\\lim\\limits_{x\\to1}(x^2+2x)=3\\]"
          ],
          "answer": [
            "Factor the error as \\(|x^2+2x-3|=|x-1||x+3|\\). When \\(|x-1|<1\\), we have \\(0<x<2\\), so \\(|x+3|<5\\). Choose \\(\\delta=\\min\\{1,\\frac{\\varepsilon}{5}\\}\\). Then \\(0<|x-1|<\\delta\\) gives \\(|x^2+2x-3|<5\\delta\\le\\varepsilon\\).",
            "将误差写成 \\(|x^2+2x-3|=|x-1||x+3|\\)。若 \\(|x-1|<1\\)，则 \\(0<x<2\\)，所以 \\(|x+3|<5\\)。取 \\(\\delta=\\min\\{1,\\frac{\\varepsilon}{5}\\}\\)。当 \\(0<|x-1|<\\delta\\) 时，便有 \\(|x^2+2x-3|<5\\delta\\le\\varepsilon\\)。"
          ]
        },
        {
          "section": "2.3",
          "question": [
            "Prove \\(\\lim\\limits_{x\\to2}(4x-1)=7\\) using the \\(\\varepsilon\\)-\\(\\delta\\) definition.",
            "用 \\(\\varepsilon\\)-\\(\\delta\\) 定义证明 \\(\\lim\\limits_{x\\to2}(4x-1)=7\\)。"
          ],
          "answer": [
            "Given \\(\\varepsilon>0\\), take \\(\\delta=\\frac{\\varepsilon}{4}\\). Then \\(0<|x-2|<\\delta\\) implies \\(|(4x-1)-7|=4|x-2|<\\varepsilon\\).",
            "给定 \\(\\varepsilon>0\\)，取 \\(\\delta=\\frac{\\varepsilon}{4}\\)。若 \\(0<|x-2|<\\delta\\)，则 \\(|(4x-1)-7|=4|x-2|<\\varepsilon\\)。"
          ]
        },
        {
          "section": "2.4",
          "question": [
            "For \\(x\\ne3\\), let \\(g(x)=\\frac{|x-3|}{x-3}+\\frac{x+1}{2}\\). Find the left and right limits at \\(3\\), and decide whether the two-sided limit exists.",
            "设 \\(x\\ne3\\) 时 \\(g(x)=\\frac{|x-3|}{x-3}+\\frac{x+1}{2}\\)。求 \\(g\\) 在 \\(3\\) 处的左极限和右极限，判断双侧极限是否存在。"
          ],
          "answer": [
            "The absolute-value quotient equals \\(-1\\) on the left and \\(1\\) on the right. The term \\(\\frac{x+1}{2}\\) approaches \\(2\\) from either side.\n          \\[\n          \\begin{aligned}\n            \\lim\\limits_{x\\to3^-}g(x)&=1,\\\\\n            \\lim\\limits_{x\\to3^+}g(x)&=3.\n          \\end{aligned}\n          \\]\n          Since the limits differ, the two-sided limit fails to exist.",
            "含绝对值的分式在 \\(3\\) 的左侧等于 \\(-1\\)，在右侧等于 \\(1\\)。两侧的 \\(\\frac{x+1}{2}\\) 都趋于 \\(2\\)。\n          \\[\n          \\begin{aligned}\n            \\lim\\limits_{x\\to3^-}g(x)&=1,\\\\\n            \\lim\\limits_{x\\to3^+}g(x)&=3.\n          \\end{aligned}\n          \\]\n          左右极限不相等，故双侧极限不存在。"
          ]
        },
        {
          "section": "2.4",
          "question": [
            "Find both one-sided limits of \\(\\lfloor x\\rfloor\\) at \\(x=2\\). Does the two-sided limit exist? Here \\(\\lfloor x\\rfloor\\) is the greatest integer at most \\(x\\).",
            "设 \\(\\lfloor x\\rfloor\\) 为不超过 \\(x\\) 的最大整数。求它在 \\(x=2\\) 处的左、右极限，并判断双侧极限是否存在。"
          ],
          "answer": [
            "Immediately to the left of \\(2\\) the value is \\(1\\). Immediately to the right it is \\(2\\). The one-sided limits differ, so the two-sided limit does not exist.",
            "在 \\(2\\) 的左侧附近函数值为 \\(1\\)，在右侧附近为 \\(2\\)。左右极限不相等，双侧极限不存在。"
          ]
        },
        {
          "section": "2.5",
          "question": [
            "Find the value of \\(a\\) that makes \\(f\\) continuous at \\(x=1\\). With that choice, where is \\(f\\) continuous?\n          \\[f(x)=\\begin{cases}\n          2x+1,&x<1,\\\\\n          a+x^2-1,&x\\ge1.\n          \\end{cases}\\]",
            "求使 \\(f\\) 在 \\(x=1\\) 处连续的 \\(a\\)。取该值后，\\(f\\) 在哪些点连续？\n          \\[f(x)=\\begin{cases}\n          2x+1,&x<1,\\\\\n          a+x^2-1,&x\\ge1.\n          \\end{cases}\\]"
          ],
          "answer": [
            "The one-sided limits and the function value satisfy\n          \\[\n          \\begin{aligned}\n            \\lim\\limits_{x\\to1^-}f(x)&=3,\\\\\n            \\lim\\limits_{x\\to1^+}f(x)&=f(1)=a.\n          \\end{aligned}\n          \\]\n          Set \\(a=3\\). Both branches are polynomial expressions, so this choice makes \\(f\\) continuous on all of \\(\\mathbb R\\).",
            "左右极限与函数值分别为\n          \\[\n          \\begin{aligned}\n            \\lim\\limits_{x\\to1^-}f(x)&=3,\\\\\n            \\lim\\limits_{x\\to1^+}f(x)&=f(1)=a.\n          \\end{aligned}\n          \\]\n          取 \\(a=3\\) 即可。两段表达式都是多项式，因此此时 \\(f\\) 在整个 \\(\\mathbb R\\) 上连续。"
          ]
        },
        {
          "section": "2.5",
          "question": [
            "Use the Intermediate Value Theorem to show that \\(x^3+2x-6=0\\) has a root in \\((1,2)\\). Evaluate the polynomial at \\(x=\\frac{3}{2}\\) to find a smaller interval containing a root.",
            "用介值定理证明 \\(x^3+2x-6=0\\) 在 \\((1,2)\\) 内有根。再将 \\(x=\\frac{3}{2}\\) 代入多项式，找出一个更小的含根区间。"
          ],
          "answer": [
            "The polynomial \\(p(x)=x^3+2x-6\\) is continuous on \\([1,2]\\). Since \\(p(1)=-3\\) and \\(p(2)=6\\), the theorem gives a root in \\((1,2)\\). Also \\(p(\\frac{3}{2})=\\frac{3}{8}>0\\), so the sign change between \\(1\\) and \\(\\frac{3}{2}\\) gives a root in \\((1,\\frac{3}{2})\\).",
            "多项式 \\(p(x)=x^3+2x-6\\) 在 \\([1,2]\\) 上连续，且 \\(p(1)=-3\\)、\\(p(2)=6\\)。由介值定理，\\((1,2)\\) 内有根。又因为 \\(p(\\frac{3}{2})=\\frac{3}{8}>0\\)，在 \\(1\\) 与 \\(\\frac{3}{2}\\) 处函数值异号，所以 \\((1,\\frac{3}{2})\\) 内有根。"
          ]
        },
        {
          "section": "2.5",
          "question": [
            "Find \\(a\\) and \\(b\\) so that \\(f\\) is continuous on \\(\\mathbb R\\). \\[f(x)=\\begin{cases}x+1,&x<1,\\\\ax+b,&1\\le x\\le3,\\\\x^2-2,&x>3.\\end{cases}\\]",
            "求 \\(a,b\\)，使 \\(f\\) 在 \\(\\mathbb R\\) 上连续。 \\[f(x)=\\begin{cases}x+1,&x<1,\\\\ax+b,&1\\le x\\le3,\\\\x^2-2,&x>3.\\end{cases}\\]"
          ],
          "answer": [
            "Matching values at \\(1\\) and \\(3\\) gives \\(a+b=2\\) and \\(3a+b=7\\). Solving gives \\(a=\\frac{5}{2}\\) and \\(b=-\\frac{1}{2}\\).",
            "在 \\(1\\) 和 \\(3\\) 处令两侧值相等，得到 \\(a+b=2\\)、\\(3a+b=7\\)。解得 \\(a=\\frac{5}{2}\\)，\\(b=-\\frac{1}{2}\\)。"
          ]
        },
        {
          "section": "2.5",
          "question": [
            "What value should be assigned to \\(f(4)\\) to make \\(f(x)=\\frac{x^2-16}{x-4}\\), for \\(x\\ne4\\), continuous at \\(4\\)?",
            "已知 \\(x\\ne4\\) 时 \\(f(x)=\\frac{x^2-16}{x-4}\\)。怎样定义 \\(f(4)\\) 才能使函数在 \\(4\\) 处连续？"
          ],
          "answer": [
            "Away from \\(4\\), \\(f(x)=x+4\\), which tends to \\(8\\). Set \\(f(4)=8\\).",
            "当 \\(x\\ne4\\) 时 \\(f(x)=x+4\\)，其在 \\(4\\) 处的极限为 \\(8\\)，因此取 \\(f(4)=8\\)。"
          ]
        },
        {
          "section": "2.5",
          "question": [
            "Use the Intermediate Value Theorem to show that \\(\\cos x=x\\) has a solution in \\((0,\\frac{\\pi}{2})\\).",
            "用介值定理证明 \\(\\cos x=x\\) 在 \\((0,\\frac{\\pi}{2})\\) 内有解。"
          ],
          "answer": [
            "The continuous function \\(g(x)=\\cos x-x\\) satisfies \\(g(0)=1>0\\) and \\(g(\\frac{\\pi}{2})=-\\frac{\\pi}{2}<0\\). It therefore has a zero in the interval.",
            "\\(g(x)=\\cos x-x\\) 连续，且 \\(g(0)=1>0\\)、\\(g(\\frac{\\pi}{2})=-\\frac{\\pi}{2}<0\\)。由介值定理，区间内存在零点。"
          ]
        },
        {
          "section": "2.5",
          "question": [
            "Give the maximal intervals on which \\(\\tan x\\) is continuous.",
            "求 \\(\\tan x\\) 连续的所有最大区间。"
          ],
          "answer": [
            "The denominator \\(\\cos x\\) vanishes at \\(\\frac{\\pi}{2}+k\\pi\\). The maximal intervals are \\((-\\frac{\\pi}{2}+k\\pi,\\frac{\\pi}{2}+k\\pi)\\) for \\(k\\in\\mathbb Z\\).",
            "分母 \\(\\cos x\\) 在 \\(\\frac{\\pi}{2}+k\\pi\\) 处为零。最大连续区间为 \\((-\\frac{\\pi}{2}+k\\pi,\\frac{\\pi}{2}+k\\pi)\\)，其中 \\(k\\in\\mathbb Z\\)。"
          ]
        },
        {
          "section": "2.5",
          "question": [
            "For \\(x\\ne-2,2\\), define \\(f(x)=\\frac{x^4-16}{x^2-4}\\). Assign values at both excluded points so the extended function is continuous on \\(\\mathbb R\\).",
            "当 \\(x\\ne-2,2\\) 时，设 \\(f(x)=\\frac{x^4-16}{x^2-4}\\)。分别补定义 \\(f(-2)\\)、\\(f(2)\\)，使函数在 \\(\\mathbb R\\) 上连续。"
          ],
          "answer": [
            "The numerator factors as \\((x^2-4)(x^2+4)\\). The simplified expression has value \\(8\\) at both excluded points. Set \\(f(-2)=f(2)=8\\).",
            "分子可分解为 \\((x^2-4)(x^2+4)\\)。约分后的表达式在这两点都取值 \\(8\\)，故定义 \\(f(-2)=f(2)=8\\)。"
          ]
        },
        {
          "section": "2.5",
          "question": [
            "Classify the discontinuities of \\(g(x)=\\frac{x-3}{(x-3)(x+2)}\\) at \\(x=3\\) and \\(x=-2\\). Can either be removed by defining a value there?",
            "判断 \\(g(x)=\\frac{x-3}{(x-3)(x+2)}\\) 在 \\(x=3\\) 和 \\(x=-2\\) 处的间断类型。哪一处可通过补定义消去间断？"
          ],
          "answer": [
            "Away from the excluded points, \\(g(x)=\\frac{1}{x+2}\\). At \\(3\\) the limit is \\(\\frac{1}{5}\\), so the discontinuity is removable. At \\(-2\\) the one-sided limits are unbounded, so assigning a finite value cannot make it continuous.",
            "在这两点以外，\\(g(x)=\\frac{1}{x+2}\\)。它在 \\(3\\) 处的极限为 \\(\\frac{1}{5}\\)，是可去间断点。在 \\(-2\\) 处，单侧极限无界，补定义有限值也不能使它连续。"
          ]
        }
      ]
    },
    {
      "chapter": 3,
      "title": [
        "Derivatives",
        "导数"
      ],
      "items": [
        {
          "section": "3.1",
          "question": [
            "Use the limit definition to find \\(f'(4)\\) for \\(f(x)=\\sqrt{2x+1}\\). Then write the tangent line at \\(x=4\\).",
            "设 \\(f(x)=\\sqrt{2x+1}\\)，由导数的极限定义求 \\(f'(4)\\)，再写出图像在 \\(x=4\\) 处的切线方程。"
          ],
          "answer": [
            "Multiply by the conjugate and cancel \\(h\\) for \\(h\\ne0\\).\n          \\[\n          \\begin{aligned}\n            f'(4)&=\\lim\\limits_{h\\to0}\\frac{\\sqrt{9+2h}-3}{h}\\\\\n            &=\\lim\\limits_{h\\to0}\\frac{2}{\\sqrt{9+2h}+3}=\\frac{1}{3}.\n          \\end{aligned}\n          \\]\n          The tangent passes through \\((4,3)\\), so its equation is \\(y-3=\\frac{x-4}{3}\\).",
            "分子、分母同乘共轭式，再在 \\(h\\ne0\\) 时约去 \\(h\\)。\n          \\[\n          \\begin{aligned}\n            f'(4)&=\\lim\\limits_{h\\to0}\\frac{\\sqrt{9+2h}-3}{h}\\\\\n            &=\\lim\\limits_{h\\to0}\\frac{2}{\\sqrt{9+2h}+3}=\\frac{1}{3}.\n          \\end{aligned}\n          \\]\n          切线经过 \\((4,3)\\)，方程为 \\(y-3=\\frac{x-4}{3}\\)。"
          ]
        },
        {
          "section": "3.1",
          "question": [
            "Use the difference quotient to find the slope and equation of the tangent line to \\(f(x)=3x^2-x\\) at \\(x=-1\\).",
            "用差商的极限求 \\(f(x)=3x^2-x\\) 在 \\(x=-1\\) 处的切线斜率，并写出切线方程。"
          ],
          "answer": [
            "\\(f(-1)=4\\) and \\(\\frac{f(-1+h)-f(-1)}{h}=-7+3h\\). The slope is \\(-7\\), so the tangent line is \\(y=4-7(x+1)\\).",
            "\\(f(-1)=4\\)，且 \\(\\frac{f(-1+h)-f(-1)}{h}=-7+3h\\)。斜率为 \\(-7\\)，切线为 \\(y=4-7(x+1)\\)。"
          ]
        },
        {
          "section": "3.1",
          "question": [
            "A sphere has volume \\(V(r)=\\frac{4\\pi}{3}r^3\\). Use a difference quotient to find the rate of change of volume with radius at \\(r=2\\).",
            "球的体积为 \\(V(r)=\\frac{4\\pi}{3}r^3\\)。用差商的极限求半径 \\(r=2\\) 时，体积关于半径的变化率。"
          ],
          "answer": [
            "Expand \\((2+h)^3-8\\) to obtain \\(h(12+6h+h^2)\\). The difference quotient tends to \\(\\frac{4\\pi}{3}\\cdot12=16\\pi\\).",
            "将 \\((2+h)^3-8\\) 展开得 \\(h(12+6h+h^2)\\)。代入差商并取极限，得 \\(\\frac{4\\pi}{3}\\cdot12=16\\pi\\)。"
          ]
        },
        {
          "section": "3.2",
          "question": [
            "Find the derivative of \\(f(x)=|x-2|\\) on each side of \\(2\\). Is \\(f\\) differentiable at \\(2\\)?",
            "求 \\(f(x)=|x-2|\\) 在 \\(2\\) 的两侧的导数，并判断 \\(f\\) 在 \\(2\\) 处是否可导。"
          ],
          "answer": [
            "The derivative is \\(-1\\) for \\(x<2\\) and \\(1\\) for \\(x>2\\). The corresponding one-sided difference quotients at \\(2\\) have different limits.",
            "当 \\(x<2\\) 时导数为 \\(-1\\)，当 \\(x>2\\) 时为 \\(1\\)。在 \\(2\\) 处这也是左、右差商的极限，两者不同，故不可导。"
          ]
        },
        {
          "section": "3.3",
          "question": [
            "Differentiate \\(g(x)=\\frac{x^2+1}{2x-1}\\) using the quotient rule. Then find \\(g'(1)\\).",
            "用商的求导法则求 \\(g(x)=\\frac{x^2+1}{2x-1}\\) 的导数，再计算 \\(g'(1)\\)。"
          ],
          "answer": [
            "For \\(x\\ne\\frac{1}{2}\\), the quotient rule gives\n          \\[\n          \\begin{aligned}\n            g'(x)&=\\frac{2x(2x-1)-2(x^2+1)}{(2x-1)^2}\\\\\n            &=\\frac{2x^2-2x-2}{(2x-1)^2}.\n          \\end{aligned}\n          \\]\n          Substituting \\(x=1\\) gives \\(g'(1)=-2\\).",
            "当 \\(x\\ne\\frac{1}{2}\\) 时，由商的求导法则得\n          \\[\n          \\begin{aligned}\n            g'(x)&=\\frac{2x(2x-1)-2(x^2+1)}{(2x-1)^2}\\\\\n            &=\\frac{2x^2-2x-2}{(2x-1)^2}.\n          \\end{aligned}\n          \\]\n          代入 \\(x=1\\)，得 \\(g'(1)=-2\\)。"
          ]
        },
        {
          "section": "3.4",
          "question": [
            "A production cost in yuan is \\(C(q)=\\frac{q^2}{20}+8q+120\\). Find the marginal cost at \\(q=40\\) and interpret it.",
            "某产品的总成本为 \\(C(q)=\\frac{q^2}{20}+8q+120\\) 元。求产量 \\(q=40\\) 时的边际成本，并解释其含义。"
          ],
          "answer": [
            "\\(C'(q)=\\frac{q}{10}+8\\), so \\(C'(40)=12\\) yuan per unit. Near \\(40\\) units, increasing output by one unit increases cost by about \\(12\\) yuan.",
            "\\(C'(q)=\\frac{q}{10}+8\\)，故 \\(C'(40)=12\\) 元每件。在产量为 \\(40\\) 件附近，多生产一件的成本约为 \\(12\\) 元。"
          ]
        },
        {
          "section": "3.6",
          "question": [
            "For \\(F(x)=(2+\\sin(3x))^4\\), use the chain rule to find \\(F'(x)\\) and \\(F'(0)\\).",
            "设 \\(F(x)=(2+\\sin(3x))^4\\)，用链式法则求 \\(F'(x)\\) 和 \\(F'(0)\\)。"
          ],
          "answer": [
            "The derivative of the inner function \\(2+\\sin(3x)\\) is \\(3\\cos(3x)\\). Multiply it by \\(4(2+\\sin(3x))^3\\) to obtain \\(F'(x)=12(2+\\sin(3x))^3\\cos(3x)\\). At \\(x=0\\), \\(F'(0)=12\\cdot 2^3=96\\).",
            "内层函数 \\(2+\\sin(3x)\\) 的导数为 \\(3\\cos(3x)\\)。将它乘以 \\(4(2+\\sin(3x))^3\\)，得 \\(F'(x)=12(2+\\sin(3x))^3\\cos(3x)\\)。代入 \\(x=0\\)，得 \\(F'(0)=12\\cdot 2^3=96\\)。"
          ]
        },
        {
          "section": "3.6",
          "question": [
            "Differentiate \\(y=(1+(2x-1)^2)^{\\frac{5}{2}}\\) using the chain rule.",
            "用链式法则求 \\(y=(1+(2x-1)^2)^{\\frac{5}{2}}\\) 的导数。"
          ],
          "answer": [
            "The inner derivative is \\(4(2x-1)\\). Multiplying by the derivative of the outer power gives \\(y'=10(2x-1)(1+(2x-1)^2)^{\\frac{3}{2}}\\).",
            "内层导数为 \\(4(2x-1)\\)，乘以外层幂函数的导数，得 \\(y'=10(2x-1)(1+(2x-1)^2)^{\\frac{3}{2}}\\)。"
          ]
        },
        {
          "section": "3.6",
          "question": [
            "Find the tangent line to \\(f(x)=\\sqrt{5x^2+4}\\) at \\(x=1\\).",
            "求 \\(f(x)=\\sqrt{5x^2+4}\\) 在 \\(x=1\\) 处的切线方程。"
          ],
          "answer": [
            "The chain rule gives \\(f'(x)=\\frac{5x}{\\sqrt{5x^2+4}}\\). At \\(x=1\\), the function value is \\(3\\) and the slope is \\(\\frac{5}{3}\\). The line is \\(y=3+\\frac{5}{3}(x-1)\\).",
            "由链式法则，\\(f'(x)=\\frac{5x}{\\sqrt{5x^2+4}}\\)。在 \\(x=1\\) 处函数值为 \\(3\\)，斜率为 \\(\\frac{5}{3}\\)，切线为 \\(y=3+\\frac{5}{3}(x-1)\\)。"
          ]
        },
        {
          "section": "3.6",
          "question": [
            "Suppose \\(f\\) is differentiable on \\(\\mathbb R\\). Use the chain rule to determine the parity of \\(f'\\) when \\(f\\) is even and when \\(f\\) is odd.",
            "设 \\(f\\) 在 \\(\\mathbb R\\) 上可导。用链式法则分别判断 \\(f\\) 为偶函数和奇函数时，\\(f'\\) 的奇偶性。"
          ],
          "answer": [
            "For even \\(f\\), differentiate \\(f(-x)=f(x)\\) to get \\(-f'(-x)=f'(x)\\), so \\(f'\\) is odd. For odd \\(f\\), differentiating \\(f(-x)=-f(x)\\) gives \\(f'(-x)=f'(x)\\), so \\(f'\\) is even.",
            "若 \\(f\\) 为偶函数，对 \\(f(-x)=f(x)\\) 两边求导得 \\(-f'(-x)=f'(x)\\)，所以 \\(f'\\) 为奇函数。若 \\(f\\) 为奇函数，对 \\(f(-x)=-f(x)\\) 两边求导得 \\(f'(-x)=f'(x)\\)，所以 \\(f'\\) 为偶函数。"
          ]
        },
        {
          "section": "3.7",
          "question": [
            "Use implicit differentiation to find the tangent line to the curve \\(x^2+xy+2y^2=4\\) at \\((1,1)\\).",
            "用隐函数求导法求曲线 \\(x^2+xy+2y^2=4\\) 在 \\((1,1)\\) 处的切线方程。"
          ],
          "answer": [
            "Differentiate with respect to \\(x\\), using the product rule on \\(xy\\). This gives \\(2x+y+xy'+4yy'=0\\), so\n          \\[y'=-\\frac{2x+y}{x+4y}.\\]\n          The slope at \\((1,1)\\) is \\(-\\frac{3}{5}\\). The tangent is \\(y-1=-\\frac{3(x-1)}{5}\\).",
            "对 \\(x\\) 求导，对 \\(xy\\) 使用乘积法则，得 \\(2x+y+xy'+4yy'=0\\)，故\n          \\[y'=-\\frac{2x+y}{x+4y}.\\]\n          在 \\((1,1)\\) 处，切线斜率为 \\(-\\frac{3}{5}\\)，切线方程为 \\(y-1=-\\frac{3(x-1)}{5}\\)。"
          ]
        }
      ]
    },
    {
      "chapter": 4,
      "title": [
        "Applications of Derivatives",
        "导数的应用"
      ],
      "items": [
        {
          "section": "4.1",
          "question": [
            "Find the absolute maximum and minimum of \\(f(x)=x^3-12x+4\\) on \\([-4,5]\\). List every point where either value occurs.",
            "求 \\(f(x)=x^3-12x+4\\) 在 \\([-4,5]\\) 上的最大值和最小值，并列出取得这两个值的所有 \\(x\\)。"
          ],
          "answer": [
            "The derivative \\(f'(x)=3x^2-12\\) vanishes at \\(-2\\) and \\(2\\). Compare the critical points and endpoints.\n          \\[\n          \\begin{aligned}\n            f(-4)&=-12,& f(-2)&=20,\\\\\n            f(2)&=-12,& f(5)&=69.\n          \\end{aligned}\n          \\]\n          The maximum is \\(69\\) at \\(x=5\\). The minimum is \\(-12\\) at both \\(x=-4\\) and \\(x=2\\).",
            "导数 \\(f'(x)=3x^2-12\\) 在 \\(-2\\) 和 \\(2\\) 处为零。比较临界点和端点的函数值。\n          \\[\n          \\begin{aligned}\n            f(-4)&=-12,& f(-2)&=20,\\\\\n            f(2)&=-12,& f(5)&=69.\n          \\end{aligned}\n          \\]\n          最大值 \\(69\\) 在 \\(x=5\\) 处取得。最小值 \\(-12\\) 在 \\(x=-4\\) 和 \\(x=2\\) 两处取得。"
          ]
        },
        {
          "section": "4.1",
          "question": [
            "Find the absolute maximum and minimum of \\(f(x)=x^4-4x^2\\) on \\([-1,2]\\). Give every point where each is attained.",
            "求 \\(f(x)=x^4-4x^2\\) 在 \\([-1,2]\\) 上的最大值和最小值，并指出各自的取值点。"
          ],
          "answer": [
            "The interior critical points are \\(0\\) and \\(\\sqrt2\\). The values at \\(-1,0,\\sqrt2,2\\) are \\(-3,0,-4,0\\). The maximum is \\(0\\) at \\(0,2\\), and the minimum is \\(-4\\) at \\(\\sqrt2\\).",
            "区间内的临界点为 \\(0,\\sqrt2\\)。在 \\(-1,0,\\sqrt2,2\\) 处的函数值依次为 \\(-3,0,-4,0\\)。最大值 \\(0\\) 在 \\(0,2\\) 处取得，最小值 \\(-4\\) 在 \\(\\sqrt2\\) 处取得。"
          ]
        },
        {
          "section": "4.1",
          "question": [
            "Find the absolute extrema of \\(f(x)=|x-2|+\\frac{x}{2}\\) on \\([0,5]\\).",
            "求 \\(f(x)=|x-2|+\\frac{x}{2}\\) 在 \\([0,5]\\) 上的最大值与最小值。"
          ],
          "answer": [
            "The function decreases up to \\(2\\) and increases after \\(2\\). Compare \\(f(0)=2,\\ f(2)=1,\\ f(5)=\\frac{11}{2}\\). The minimum is \\(1\\) at \\(2\\), and the maximum is \\(\\frac{11}{2}\\) at \\(5\\).",
            "函数在 \\(2\\) 左侧递减、右侧递增。比较 \\(f(0)=2,\\ f(2)=1,\\ f(5)=\\frac{11}{2}\\)，得最小值为 \\(1\\)，在 \\(2\\) 处取得。最大值为 \\(\\frac{11}{2}\\)，在 \\(5\\) 处取得。"
          ]
        },
        {
          "section": "4.1",
          "question": [
            "Locate all absolute extrema of \\(f(x)=|x+2|+|x-1|\\) on \\([-4,3]\\).",
            "求 \\(f(x)=|x+2|+|x-1|\\) 在 \\([-4,3]\\) 上的最大值、最小值及全部取值点。"
          ],
          "answer": [
            "The two absolute values measure distances to \\(-2\\) and \\(1\\). Their sum is \\(3\\) on \\([-2,1]\\) and increases away from that interval. Both endpoints \\(-4\\) and \\(3\\) give the maximum \\(7\\).",
            "两个绝对值分别表示到 \\(-2\\) 和 \\(1\\) 的距离。在 \\([-2,1]\\) 上，距离之和恒为 \\(3\\)，离开该区间后随距离增大而增大。端点 \\(-4\\) 和 \\(3\\) 处都取得最大值 \\(7\\)。"
          ]
        },
        {
          "section": "4.2",
          "question": [
            "Use the Mean Value Theorem for \\(f(x)=\\sqrt{x}\\) on \\([36,39]\\) to show that\n          \\[\\frac{3}{2\\sqrt{39}}<\\sqrt{39}-6<\\frac{1}{4}.\\]",
            "对 \\(f(x)=\\sqrt{x}\\) 在 \\([36,39]\\) 上应用拉格朗日中值定理，证明\n          \\[\\frac{3}{2\\sqrt{39}}<\\sqrt{39}-6<\\frac{1}{4}.\\]"
          ],
          "answer": [
            "The square root is continuous on \\([36,39]\\) and differentiable on \\((36,39)\\). Thus some \\(c\\in(36,39)\\) satisfies \\(\\sqrt{39}-6=3f'(c)=\\frac{3}{2\\sqrt c}\\). Since \\(6<\\sqrt c<\\sqrt{39}\\), taking reciprocals and multiplying by \\(\\frac{3}{2}\\) gives the requested bounds.",
            "平方根函数在 \\([36,39]\\) 上连续，在 \\((36,39)\\) 内可导。由中值定理，存在 \\(c\\in(36,39)\\) 使 \\(\\sqrt{39}-6=3f'(c)=\\frac{3}{2\\sqrt c}\\)。因为 \\(6<\\sqrt c<\\sqrt{39}\\)，取倒数再乘以 \\(\\frac{3}{2}\\)，即得所求不等式。"
          ]
        },
        {
          "section": "4.2",
          "question": [
            "For \\(f(x)=x^2+1\\) on \\([-1,3]\\), find every \\(c\\) that satisfies the conclusion of the Mean Value Theorem.",
            "对 \\([-1,3]\\) 上的 \\(f(x)=x^2+1\\)，求所有满足中值定理结论的 \\(c\\)。"
          ],
          "answer": [
            "The secant slope is \\(\\frac{10-2}{3-(-1)}=2\\). Solving \\(f'(c)=2c=2\\) gives \\(c=1\\).",
            "割线斜率为 \\(\\frac{10-2}{3-(-1)}=2\\)。解 \\(f'(c)=2c=2\\)，得 \\(c=1\\)。"
          ]
        },
        {
          "section": "4.2",
          "question": [
            "The endpoints of \\(f(x)=|x-1|\\) on \\([0,2]\\) have equal values. Which hypothesis of Rolle's theorem fails?",
            "\\(f(x)=|x-1|\\) 在 \\([0,2]\\) 的两个端点取值相等。它不满足罗尔定理的哪条条件？"
          ],
          "answer": [
            "At \\(x=1\\) the one-sided derivatives are \\(-1\\) and \\(1\\). The function fails to be differentiable throughout \\((0,2)\\).",
            "在 \\(x=1\\) 处的左、右导数分别为 \\(-1\\) 和 \\(1\\)，所以不满足在 \\((0,2)\\) 上处处可导的条件。"
          ]
        },
        {
          "section": "4.2",
          "question": [
            "Find all points \\(c\\) given by the Mean Value Theorem for \\(f(x)=x^3-7x\\) on \\([-3,3]\\).",
            "对 \\([-3,3]\\) 上的 \\(f(x)=x^3-7x\\)，求所有满足中值定理结论的 \\(c\\)。"
          ],
          "answer": [
            "The endpoint values are \\(-6\\) and \\(6\\), so the secant slope is \\(2\\). The equation \\(3c^2-7=2\\) gives \\(c=\\pm\\sqrt3\\), both in the open interval.",
            "两端函数值为 \\(-6\\) 和 \\(6\\)，割线斜率为 \\(2\\)。由 \\(3c^2-7=2\\) 得 \\(c=\\pm\\sqrt3\\)，两点均在开区间内。"
          ]
        },
        {
          "section": "4.2",
          "question": [
            "Suppose \\(f\\) is continuous on \\([3,7]\\), differentiable on \\((3,7)\\), \\(f(3)=1\\), and \\(2\\le f'(x)\\le5\\) on \\((3,7)\\). Find bounds for \\(f(7)\\).",
            "设 \\(f\\) 在 \\([3,7]\\) 上连续，在 \\((3,7)\\) 上可导，且 \\(f(3)=1\\)、\\(2\\le f'(x)\\le5\\)。求 \\(f(7)\\) 的上下界。"
          ],
          "answer": [
            "By the Mean Value Theorem, \\(f(7)-1=4f'(c)\\) for some \\(c\\in(3,7)\\). Thus \\(9\\le f(7)\\le21\\).",
            "由中值定理，存在 \\(c\\in(3,7)\\) 使 \\(f(7)-1=4f'(c)\\)，故 \\(9\\le f(7)\\le21\\)。"
          ]
        },
        {
          "section": "4.2",
          "question": [
            "On \\([0,2]\\), set \\(f(x)=x\\) for \\(x<2\\) and \\(f(2)=5\\). Test the hypotheses of the Mean Value Theorem and decide whether its conclusion holds.",
            "在 \\([0,2]\\) 上，设 \\(x<2\\) 时 \\(f(x)=x\\)，而 \\(f(2)=5\\)。检查微分中值定理的条件，并判断其结论是否成立。"
          ],
          "answer": [
            "The function is differentiable in \\((0,2)\\) but fails to be continuous at \\(2\\). Its secant slope is \\(\\frac{5}{2}\\), while every interior derivative is \\(1\\). No interior point satisfies the conclusion.",
            "函数在 \\((0,2)\\) 内可导，但在端点 \\(2\\) 处不连续。割线斜率为 \\(\\frac{5}{2}\\)，区间内部的导数恒为 \\(1\\)，因此没有点满足中值定理的结论。"
          ]
        },
        {
          "section": "4.2",
          "question": [
            "Apply the Mean Value Theorem to \\(f(x)=\\frac{2}{x-1}\\) on \\([2,5]\\) and find the point \\(c\\). Which hypotheses would fail on \\([0,2]\\)?",
            "对 \\([2,5]\\) 上的 \\(f(x)=\\frac{2}{x-1}\\) 使用微分中值定理，求 \\(c\\)。改用区间 \\([0,2]\\) 时，哪些条件不成立？"
          ],
          "answer": [
            "On \\([2,5]\\) the secant slope is \\(-\\frac{1}{2}\\). Solve \\(-\\frac{2}{(c-1)^2}=-\\frac{1}{2}\\) and keep the root \\(c=3\\). On \\([0,2]\\) the function is undefined at \\(1\\), so it fails both continuity on the closed interval and differentiability throughout the open interval.",
            "在 \\([2,5]\\) 上割线斜率为 \\(-\\frac{1}{2}\\)。解 \\(-\\frac{2}{(c-1)^2}=-\\frac{1}{2}\\)，得到区间内的解 \\(c=3\\)。在 \\([0,2]\\) 上函数在 \\(1\\) 处无定义，因此既不满足闭区间连续，也不满足开区间处处可导。"
          ]
        },
        {
          "section": "4.3",
          "question": [
            "Find the intervals of increase and decrease for \\(g(x)=x^5-5x^3\\). Use the first derivative test to classify each critical point.",
            "求 \\(g(x)=x^5-5x^3\\) 的递增和递减区间，并用一阶导数判别法判断各临界点是否取得局部极值。"
          ],
          "answer": [
            "The derivative \\(g'(x)=5x^2(x^2-3)\\) is zero at \\(-\\sqrt 3\\), \\(0\\) and \\(\\sqrt 3\\). It is positive for \\(|x|>\\sqrt 3\\) and negative for \\(0<|x|<\\sqrt 3\\). The decreasing pieces join at \\(0\\) by continuity. Thus \\(g\\) increases on \\((-\\infty,-\\sqrt 3]\\) and \\([\\sqrt 3,\\infty)\\), and decreases on \\([-\\sqrt 3,\\sqrt 3]\\). The local maximum is \\(6\\sqrt 3\\) at \\(-\\sqrt 3\\), and the local minimum is \\(-6\\sqrt 3\\) at \\(\\sqrt 3\\). At \\(0\\) the derivative stays negative on both sides, so the function continues decreasing.",
            "导数 \\(g'(x)=5x^2(x^2-3)\\) 在 \\(-\\sqrt 3\\)、\\(0\\) 和 \\(\\sqrt 3\\) 处为零。当 \\(|x|>\\sqrt 3\\) 时导数为正，当 \\(0<|x|<\\sqrt 3\\) 时导数为负。由 \\(0\\) 处的连续性，两侧递减区间可以合并。因此 \\(g\\) 在 \\((-\\infty,-\\sqrt 3]\\) 和 \\([\\sqrt 3,\\infty)\\) 上递增，在 \\([-\\sqrt 3,\\sqrt 3]\\) 上递减。极大值 \\(6\\sqrt 3\\) 在 \\(-\\sqrt 3\\) 处取得，极小值 \\(-6\\sqrt 3\\) 在 \\(\\sqrt 3\\) 处取得。\\(0\\) 两侧的导数均为负，函数经过 \\(0\\) 时继续递减。"
          ]
        },
        {
          "section": "4.3",
          "question": [
            "Find the intervals of increase and decrease of \\(f(x)=x^3-3x^2\\), and classify its critical points.",
            "求 \\(f(x)=x^3-3x^2\\) 的单调区间，并判断各临界点的类型。"
          ],
          "answer": [
            "\\(f'(x)=3x(x-2)\\). The function increases on \\((-\\infty,0)\\) and \\((2,\\infty)\\), and decreases on \\((0,2)\\). It has a local maximum at \\(0\\) and a local minimum at \\(2\\).",
            "\\(f'(x)=3x(x-2)\\)。函数在 \\((-\\infty,0)\\) 和 \\((2,\\infty)\\) 上递增，在 \\((0,2)\\) 上递减。在 \\(0\\) 处取局部最大值，在 \\(2\\) 处取局部最小值。"
          ]
        },
        {
          "section": "4.3",
          "question": [
            "Use the first derivative test to decide whether \\(f(x)=(x-1)^3\\) has a local extremum at \\(x=1\\).",
            "用一阶导数判别法判断 \\(f(x)=(x-1)^3\\) 在 \\(x=1\\) 处是否有局部极值。"
          ],
          "answer": [
            "\\(f'(x)=3(x-1)^2\\) is positive on both sides of \\(1\\). The function increases through \\(1\\) and has no local extremum there.",
            "\\(f'(x)=3(x-1)^2\\) 在 \\(1\\) 的两侧均为正。函数经过 \\(1\\) 时仍递增，因此在该点没有局部极值。"
          ]
        },
        {
          "section": "4.3",
          "question": [
            "For \\(f(x)=x+\\frac{4}{x}\\) on \\(x>0\\), find the intervals of monotonicity and the minimum value, if one exists.",
            "对 \\(x>0\\) 上的 \\(f(x)=x+\\frac{4}{x}\\)，求单调区间，并判断是否有最小值。"
          ],
          "answer": [
            "\\(f'(x)=1-\\frac{4}{x^2}\\) is negative on \\((0,2)\\) and positive on \\((2,\\infty)\\). The global minimum is \\(f(2)=4\\).",
            "\\(f'(x)=1-\\frac{4}{x^2}\\) 在 \\((0,2)\\) 上为负，在 \\((2,\\infty)\\) 上为正，所以最小值为 \\(f(2)=4\\)。"
          ]
        },
        {
          "section": "4.3",
          "question": [
            "Suppose \\(f'(x)=(x+2)(x-1)^2(x-3)\\). Classify the critical points \\(-2,1,3\\) using the sign of \\(f'\\).",
            "已知 \\(f'(x)=(x+2)(x-1)^2(x-3)\\)。用导数符号判断临界点 \\(-2,1,3\\) 的类型。"
          ],
          "answer": [
            "The sign changes from positive to negative at \\(-2\\), and from negative to positive at \\(3\\). These are a local maximum and a local minimum, respectively. At \\(1\\) the derivative stays negative on both sides.",
            "\\(f'\\) 在 \\(-2\\) 处由正变负，故为局部极大点。在 \\(3\\) 处由负变正，故为局部极小点。\\(1\\) 两侧的导数都为负，此处没有局部极值。"
          ]
        },
        {
          "section": "4.3",
          "question": [
            "A differentiable function satisfies \\(f'(x)<0\\) for \\(x<-2\\), \\(f'(x)>0\\) for \\(-2<x<1\\) and \\(x>1\\), and \\(f'(-2)=f'(1)=0\\). Give the intervals of monotonicity and classify the two stationary points.",
            "一个可导函数在 \\(x<-2\\) 时满足 \\(f'(x)<0\\)，在 \\(-2<x<1\\) 和 \\(x>1\\) 时满足 \\(f'(x)>0\\)，且 \\(f'(-2)=f'(1)=0\\)。求单调区间，并判断两个驻点是否为极值点。"
          ],
          "answer": [
            "The function is decreasing on \\((-\\infty,-2)\\) and increasing on \\((-2,\\infty)\\). The derivative changes from negative to positive at \\(-2\\), giving a local minimum. The derivative stays positive on either side of \\(1\\), so \\(1\\) is stationary without a local extremum.",
            "函数在 \\((-\\infty,-2)\\) 上递减，在 \\((-2,\\infty)\\) 上递增。导数在 \\(-2\\) 处从负变正，故该点为局部极小点。导数在 \\(1\\) 的两侧均为正，所以 \\(1\\) 为驻点但不是极值点。"
          ]
        },
        {
          "section": "4.3",
          "question": [
            "Suppose \\(g\\) is differentiable and \\(g'(x)=(x-2)(x+1)\\). From this derivative alone, determine where \\(g\\) increases, where it decreases, and which stationary point is a local maximum.",
            "设 \\(g\\) 可导，且 \\(g'(x)=(x-2)(x+1)\\)。仅根据导数判断 \\(g\\) 的递增、递减区间，并指出哪个驻点为局部极大点。"
          ],
          "answer": [
            "The derivative is positive outside \\([-1,2]\\) and negative between the roots. Thus \\(g\\) increases on \\((-\\infty,-1)\\) and \\((2,\\infty)\\), decreases on \\((-1,2)\\), and attains a local maximum at \\(-1\\).",
            "导数在两根之外为正、两根之间为负。故 \\(g\\) 在 \\((-\\infty,-1)\\) 和 \\((2,\\infty)\\) 上递增，在 \\((-1,2)\\) 上递减，并在 \\(-1\\) 处取得局部极大值。"
          ]
        },
        {
          "section": "4.5",
          "question": [
            "The profit from selling \\(q\\) kilograms of a product is \\(P(q)=12q-q^2\\), measured in hundreds of yuan, for \\(0\\le q\\le10\\). Find the sales quantity that maximizes profit and the corresponding profit in yuan.",
            "某产品销售 \\(q\\) 千克时的利润为 \\(P(q)=12q-q^2\\)，单位为百元，且 \\(0\\le q\\le10\\)。求使利润最大的销售量，并算出最大利润是多少元。"
          ],
          "answer": [
            "Solve \\(P'(q)=12-2q=0\\) to get \\(q=6\\). Comparing \\(P(0)=0\\), \\(P(6)=36\\) and \\(P(10)=20\\) shows that selling \\(6\\) kilograms gives the maximum profit of \\(3{,}600\\) yuan.",
            "解 \\(P'(q)=12-2q=0\\)，得 \\(q=6\\)。比较 \\(P(0)=0\\)、\\(P(6)=36\\) 和 \\(P(10)=20\\)，可知销售 \\(6\\) 千克时利润最大，为 \\(3{,}600\\) 元。"
          ]
        },
        {
          "section": "4.5",
          "question": [
            "A rectangular garden borders a straight wall. A \\(36\\)-meter fence encloses the other three sides. Which dimensions give the greatest area?",
            "一块矩形花园的一边靠墙，另三边用 \\(36\\) 米长的围栏围起。怎样选取长和宽才能使面积最大？"
          ],
          "answer": [
            "For width \\(w\\) perpendicular to the wall, the area is \\(A(w)=w(36-2w)\\) on \\(0\\le w\\le18\\). Its maximum is at \\(w=9\\), so the side along the wall is \\(18\\) meters and the area is \\(162\\) square meters.",
            "设垂直于墙的边长为 \\(w\\)，则 \\(A(w)=w(36-2w)\\)，其中 \\(0\\le w\\le18\\)。当 \\(w=9\\) 时面积最大，此时沿墙边长为 \\(18\\) 米，面积为 \\(162\\) 平方米。"
          ]
        },
        {
          "section": "4.5",
          "question": [
            "Cut squares of side \\(x\\) from the four corners of a cardboard square of side \\(18\\) cm and fold the sides into an open box. Find the cut size and maximum volume.",
            "从边长 \\(18\\) 厘米的正方形纸板四角各剪去一个边长为 \\(x\\) 的小正方形，再折成无盖盒。求使体积最大的 \\(x\\) 和最大体积。"
          ],
          "answer": [
            "The volume is \\(V(x)=x(18-2x)^2\\). Its derivative is \\((18-2x)(18-6x)\\) for \\(0<x<9\\). The critical point \\(x=3\\) gives \\(432\\) cubic centimeters, and the endpoint volumes are zero.",
            "体积为 \\(V(x)=x(18-2x)^2\\)，在 \\(0<x<9\\) 上有 \\(V'(x)=(18-2x)(18-6x)\\)。临界点 \\(x=3\\) 给出 \\(432\\) 立方厘米，两端体积为零，故这是最大值。"
          ]
        },
        {
          "section": "4.5",
          "question": [
            "A crate has a square base of side \\(s\\) and height \\(h\\), with \\(2s+h=48\\) cm. Find the dimensions of the crate of greatest volume.",
            "一个箱子底面是边长为 \\(s\\) 的正方形，高为 \\(h\\)，满足 \\(2s+h=48\\) 厘米。求使体积最大的尺寸。"
          ],
          "answer": [
            "The volume is \\(V(s)=s^2(48-2s)\\) for \\(0<s<24\\). The derivative \\(V'(s)=6s(16-s)\\) changes from positive to negative at \\(s=16\\). Thus \\(s=h=16\\) cm and the volume is \\(4096\\) cubic centimeters.",
            "体积为 \\(V(s)=s^2(48-2s)\\)，其中 \\(0<s<24\\)。导数 \\(V'(s)=6s(16-s)\\) 在 \\(s=16\\) 处由正变负，因此 \\(s=h=16\\) 厘米，最大体积为 \\(4096\\) 立方厘米。"
          ]
        }
      ]
    },
    {
      "chapter": 5,
      "title": [
        "Integrals",
        "积分"
      ],
      "items": [
        {
          "section": "5.1",
          "question": [
            "Estimate the area under \\(f(x)=2+x^2\\) on \\([0,2]\\) using four equal subintervals and their midpoints.",
            "将 \\([0,2]\\) 等分为四段，用中点法估计 \\(f(x)=2+x^2\\) 与 \\(x\\) 轴之间的面积。"
          ],
          "answer": [
            "The width is \\(\\frac{1}{2}\\), and the sample points are \\(\\frac{1}{4},\\frac{3}{4},\\frac{5}{4},\\frac{7}{4}\\). The midpoint sum is \\(\\frac{1}{2}(8+\\frac{1+9+25+49}{16})=\\frac{53}{8}\\).",
            "每段宽为 \\(\\frac{1}{2}\\)，取样点依次为 \\(\\frac{1}{4},\\frac{3}{4},\\frac{5}{4},\\frac{7}{4}\\)。中点和为 \\(\\frac{1}{2}(8+\\frac{1+9+25+49}{16})=\\frac{53}{8}\\)。"
          ]
        },
        {
          "section": "5.1",
          "question": [
            "Approximate \\(\\int_1^4(x+2)\\,dx\\) by left and right sums with three equal subintervals. Compare each sum with the exact integral.",
            "将 \\([1,4]\\) 三等分，用左端点和右端点估算 \\(\\int_1^4(x+2)\\,dx\\)，并与精确值比较。"
          ],
          "answer": [
            "The subinterval width is \\(1\\). The left sum is \\(3+4+5=12\\), and the right sum is \\(4+5+6=15\\). The exact integral is \\(\\frac{27}{2}\\), so the left sum is too low and the right sum is too high.",
            "每段宽度为 \\(1\\)。左端点和为 \\(3+4+5=12\\)，右端点和为 \\(4+5+6=15\\)。精确积分为 \\(\\frac{27}{2}\\)，所以左端点和偏小，右端点和偏大。"
          ]
        },
        {
          "section": "5.2",
          "question": [
            "Divide \\([0,2]\\) into \\(n\\) equal subintervals. Find the right-endpoint Riemann sum \\(S_n\\) for \\(f(x)=x^2\\) and its limit as \\(n\\) tends to infinity.",
            "将 \\([0,2]\\) 等分为 \\(n\\) 个小区间。写出 \\(f(x)=x^2\\) 以右端点为取样点的黎曼和 \\(S_n\\)，并求 \\(n\\) 趋于无穷时的极限。"
          ],
          "answer": [
            "Each subinterval has width \\(\\frac{2}{n}\\), and the \\(k\\)th right endpoint is \\(\\frac{2k}{n}\\). The \\(k\\)th rectangle has area \\(\\frac{8k^2}{n^3}\\). The formula for the sum of squares gives\n          \\[\n          \\begin{aligned}\n            S_n&=\\frac{8}{n^3}\\sum\\limits_{k=1}^{n}k^2\\\\\n            &=\\frac{4(n+1)(2n+1)}{3n^2}.\n          \\end{aligned}\n          \\]\n          Divide the numerator and denominator by \\(n^2\\) to obtain\n          \\[\\lim\\limits_{n\\to\\infty}S_n=\\frac{8}{3}.\\]",
            "每个小区间的宽度为 \\(\\frac{2}{n}\\)，第 \\(k\\) 个小区间的右端点为 \\(\\frac{2k}{n}\\)，对应的矩形面积为 \\(\\frac{8k^2}{n^3}\\)。由平方和公式得\n          \\[\n          \\begin{aligned}\n            S_n&=\\frac{8}{n^3}\\sum\\limits_{k=1}^{n}k^2\\\\\n            &=\\frac{4(n+1)(2n+1)}{3n^2}.\n          \\end{aligned}\n          \\]\n          分子、分母同除以 \\(n^2\\)，得到\n          \\[\\lim\\limits_{n\\to\\infty}S_n=\\frac{8}{3}.\\]"
          ]
        },
        {
          "section": "5.2",
          "question": [
            "Find the left-endpoint Riemann sum for \\(f(x)=1+3x\\) on \\([1,3]\\) with \\(n\\) equal subintervals, and take its limit.",
            "将 \\([1,3]\\) 等分为 \\(n\\) 段，求 \\(f(x)=1+3x\\) 的左端点黎曼和及其极限。"
          ],
          "answer": [
            "The width is \\(\\frac{2}{n}\\) and the \\(i\\)-th sample point is \\(1+\\frac{2(i-1)}{n}\\). Thus \\(L_n=\\frac{2}{n}\\sum\\limits_{i=1}^{n}(4+\\frac{6(i-1)}{n})=14-\\frac{6}{n}\\), so the limit is \\(14\\).",
            "每段宽为 \\(\\frac{2}{n}\\)，第 \\(i\\) 个左端点为 \\(1+\\frac{2(i-1)}{n}\\)。因此 \\(L_n=\\frac{2}{n}\\sum\\limits_{i=1}^{n}(4+\\frac{6(i-1)}{n})=14-\\frac{6}{n}\\)，极限为 \\(14\\)。"
          ]
        },
        {
          "section": "5.2",
          "question": [
            "Recognize the expression as a Riemann sum and evaluate its limit. \\[\\lim\\limits_{n\\to\\infty}\\frac{\\pi}{2n}\\sum\\limits_{k=1}^{n}\\sin\\left(\\frac{\\pi k}{2n}\\right)\\]",
            "将下式识别为黎曼和，并求其极限。 \\[\\lim\\limits_{n\\to\\infty}\\frac{\\pi}{2n}\\sum\\limits_{k=1}^{n}\\sin\\left(\\frac{\\pi k}{2n}\\right)\\]"
          ],
          "answer": [
            "The width is \\(\\frac{\\pi}{2n}\\) and each sample point is the right endpoint. The limit equals \\(\\int_0^{\\frac{\\pi}{2}}\\sin x\\,dx=[-\\cos x]_0^{\\frac{\\pi}{2}}=1\\).",
            "小区间宽为 \\(\\frac{\\pi}{2n}\\)，取样点是各段右端点。该极限等于 \\(\\int_0^{\\frac{\\pi}{2}}\\sin x\\,dx=[-\\cos x]_0^{\\frac{\\pi}{2}}=1\\)。"
          ]
        },
        {
          "section": "5.3",
          "question": [
            "Evaluate \\(\\int_{-2}^{3}(x-1)\\,dx\\) as a signed area.",
            "用带符号的面积计算 \\(\\int_{-2}^{3}(x-1)\\,dx\\)。"
          ],
          "answer": [
            "On \\([-2,1]\\) the triangle has signed area \\(-\\frac{9}{2}\\). On \\([1,3]\\) the triangle has area \\(2\\). Their sum is \\(-\\frac{5}{2}\\).",
            "\\([-2,1]\\) 上的三角形在 \\(x\\) 轴下方，贡献 \\(-\\frac{9}{2}\\)。\\([1,3]\\) 上的三角形贡献 \\(2\\)，两者相加为 \\(-\\frac{5}{2}\\)。"
          ]
        },
        {
          "section": "5.4",
          "question": [
            "Use the Fundamental Theorem of Calculus to evaluate\n          \\[\\int_{-1}^{2}(3x^2-4x)\\,dx.\\]",
            "利用微积分基本定理计算\n          \\[\\int_{-1}^{2}(3x^2-4x)\\,dx.\\]"
          ],
          "answer": [
            "An antiderivative is \\(F(x)=x^3-2x^2\\). The definite integral equals\n          \\[F(2)-F(-1)=0-(-3)=3.\\]",
            "被积函数的一个原函数是 \\(F(x)=x^3-2x^2\\)。由微积分基本定理，定积分的值为\n          \\[F(2)-F(-1)=0-(-3)=3.\\]"
          ]
        },
        {
          "section": "5.4",
          "question": [
            "Find \\(F'(x)\\) for the function\n          \\[F(x)=\\int_x^{x^2}\\sqrt{1+t^2}\\,dt.\\]",
            "设\n          \\[F(x)=\\int_x^{x^2}\\sqrt{1+t^2}\\,dt.\\]\n          求 \\(F'(x)\\)。"
          ],
          "answer": [
            "Let \\(G(u)=\\int_0^u\\sqrt{1+t^2}\\,dt\\). Then \\(F(x)=G(x^2)-G(x)\\), and the Fundamental Theorem gives \\(G'(u)=\\sqrt{1+u^2}\\). Apply the chain rule to obtain\n          \\[F'(x)=2x\\sqrt{1+x^4}-\\sqrt{1+x^2}.\\]",
            "令 \\(G(u)=\\int_0^u\\sqrt{1+t^2}\\,dt\\)，则 \\(F(x)=G(x^2)-G(x)\\)。由微积分基本定理得 \\(G'(u)=\\sqrt{1+u^2}\\)，再用链式法则可得\n          \\[F'(x)=2x\\sqrt{1+x^4}-\\sqrt{1+x^2}.\\]"
          ]
        },
        {
          "section": "5.4",
          "question": [
            "For \\(x>0\\), find the derivative of \\(F(x)=\\int_1^{\\sqrt{x}}(t^3+1)\\,dt\\).",
            "当 \\(x>0\\) 时，求 \\(F(x)=\\int_1^{\\sqrt{x}}(t^3+1)\\,dt\\) 的导数。"
          ],
          "answer": [
            "The Fundamental Theorem of Calculus gives the integrand at \\(t=\\sqrt{x}\\). Apply the chain rule to obtain \\(F'(x)=\\frac{x^{\\frac{3}{2}}+1}{2\\sqrt{x}}\\).",
            "由微积分基本定理，先在 \\(t=\\sqrt{x}\\) 处求被积函数的值，再用链式法则得 \\(F'(x)=\\frac{x^{\\frac{3}{2}}+1}{2\\sqrt{x}}\\)。"
          ]
        },
        {
          "section": "5.5",
          "question": [
            "Use substitution to find the indefinite integral.\n          \\[\\int x^2(1+2x^3)^4\\,dx\\]",
            "用换元积分法计算\n          \\[\\int x^2(1+2x^3)^4\\,dx.\\]"
          ],
          "answer": [
            "Set \\(u=1+2x^3\\), so \\(du=6x^2\\,dx\\). After integrating and substituting back, we get\n          \\[\n          \\begin{aligned}\n            \\frac{1}{6}\\int u^4\\,du&=\\frac{u^5}{30}+C\\\\\n            &=\\frac{(1+2x^3)^5}{30}+C.\n          \\end{aligned}\n          \\]",
            "令 \\(u=1+2x^3\\)，则 \\(du=6x^2\\,dx\\)。对 \\(u\\) 积分后代回原变量，得到\n          \\[\n          \\begin{aligned}\n            \\frac{1}{6}\\int u^4\\,du&=\\frac{u^5}{30}+C\\\\\n            &=\\frac{(1+2x^3)^5}{30}+C.\n          \\end{aligned}\n          \\]"
          ]
        },
        {
          "section": "5.6",
          "question": [
            "Find the points where \\(y=x^2\\) and \\(y=2x\\) intersect. Then find the area they enclose.",
            "求 \\(y=x^2\\) 与 \\(y=2x\\) 的交点，并计算两条曲线围成的面积。"
          ],
          "answer": [
            "Solving \\(x^2=2x\\) gives the points \\((0,0)\\) and \\((2,4)\\). Between them, \\(2x-x^2=x(2-x)\\ge0\\), so the area is\n          \\[\n          \\begin{aligned}\n            \\int_0^2(2x-x^2)\\,dx\n            &=\\left[x^2-\\frac{x^3}{3}\\right]_0^2\\\\\n            &=\\frac{4}{3}.\n          \\end{aligned}\n          \\]",
            "由 \\(x^2=2x\\) 得到交点 \\((0,0)\\) 和 \\((2,4)\\)。在 \\(0\\le x\\le2\\) 时有 \\(2x-x^2=x(2-x)\\ge0\\)，所以面积为\n          \\[\n          \\begin{aligned}\n            \\int_0^2(2x-x^2)\\,dx\n            &=\\left[x^2-\\frac{x^3}{3}\\right]_0^2\\\\\n            &=\\frac{4}{3}.\n          \\end{aligned}\n          \\]"
          ]
        }
      ]
    },
    {
      "chapter": 7,
      "title": [
        "Transcendental Functions",
        "超越函数"
      ],
      "items": [
        {
          "section": "7.5",
          "question": [
            "Identify the indeterminate form and use L’Hôpital’s rule to evaluate\n          \\[\\lim\\limits_{x\\to0}\\frac{e^x-1}{x}.\\]",
            "指出下列极限的未定式类型，并用洛必达法则求值。\n          \\[\\lim\\limits_{x\\to0}\\frac{e^x-1}{x}\\]"
          ],
          "answer": [
            "The numerator and denominator both tend to zero, giving the \\(\\frac{0}{0}\\) form. L’Hôpital’s rule gives\n          \\[\\lim\\limits_{x\\to0}\\frac{e^x-1}{x}=\\lim\\limits_{x\\to0} e^x=1.\\]",
            "分子和分母都趋于零，属于 \\(\\frac{0}{0}\\) 型未定式。由洛必达法则得\n          \\[\\lim\\limits_{x\\to0}\\frac{e^x-1}{x}=\\lim\\limits_{x\\to0} e^x=1.\\]"
          ]
        },
        {
          "section": "7.5",
          "question": [
            "Rewrite the product as a quotient and use L’Hôpital’s rule to find\n          \\[\\lim\\limits_{x\\to0^+}x\\ln x.\\]",
            "先将乘积改写为商，再用洛必达法则计算\n          \\[\\lim\\limits_{x\\to0^+}x\\ln x.\\]"
          ],
          "answer": [
            "Write \\(x\\ln x=\\frac{\\ln x}{\\frac{1}{x}}\\). As \\(x\\) approaches zero from the right, the numerator tends to \\(-\\infty\\) and the denominator to \\(+\\infty\\). By L’Hôpital’s rule,\n          \\[\n          \\begin{aligned}\n            \\lim\\limits_{x\\to0^+}x\\ln x&=\\lim\\limits_{x\\to0^+}\\frac{\\frac{1}{x}}{-\\frac{1}{x^2}}\\\\\n            &=\\lim\\limits_{x\\to0^+}(-x)=0.\n          \\end{aligned}\n          \\]",
            "将 \\(x\\ln x\\) 写成 \\(\\frac{\\ln x}{\\frac{1}{x}}\\)。当 \\(x\\) 从右侧趋于零时，分子趋于 \\(-\\infty\\)，分母趋于 \\(+\\infty\\)。由洛必达法则得\n          \\[\n          \\begin{aligned}\n            \\lim\\limits_{x\\to0^+}x\\ln x&=\\lim\\limits_{x\\to0^+}\\frac{\\frac{1}{x}}{-\\frac{1}{x^2}}\\\\\n            &=\\lim\\limits_{x\\to0^+}(-x)=0.\n          \\end{aligned}\n          \\]"
          ]
        },
        {
          "section": "7.5",
          "question": [
            "Identify the indeterminate form and evaluate \\(\\lim\\limits_{x\\to0}\\frac{\\ln(1+3x)}{x}\\).",
            "判断未定式类型，并求 \\(\\lim\\limits_{x\\to0}\\frac{\\ln(1+3x)}{x}\\)。"
          ],
          "answer": [
            "This has form \\(\\frac{0}{0}\\). Differentiating numerator and denominator gives the quotient \\(\\frac{3}{1+3x}\\), whose limit is \\(3\\).",
            "这是 \\(\\frac{0}{0}\\) 型未定式。分子、分母分别求导后，所得商为 \\(\\frac{3}{1+3x}\\)，极限为 \\(3\\)。"
          ]
        },
        {
          "section": "7.5",
          "question": [
            "Evaluate \\(\\lim\\limits_{x\\to0}\\frac{e^{2x}-1-2x}{x^2}\\) using L’Hôpital’s rule.",
            "用洛必达法则求 \\(\\lim\\limits_{x\\to0}\\frac{e^{2x}-1-2x}{x^2}\\)。"
          ],
          "answer": [
            "After one differentiation the quotient is \\(\\frac{2e^{2x}-2}{2x}\\), still of form \\(\\frac{0}{0}\\). A second application gives \\(\\lim\\limits_{x\\to0}2e^{2x}=2\\).",
            "第一次使用洛必达法则得到 \\(\\frac{2e^{2x}-2}{2x}\\)，仍为 \\(\\frac{0}{0}\\) 型。再次使用可得 \\(\\lim\\limits_{x\\to0}2e^{2x}=2\\)。"
          ]
        },
        {
          "section": "7.5",
          "question": [
            "Evaluate \\(\\lim\\limits_{x\\to\\infty}\\frac{x^2}{e^{\\frac{x}{2}}}\\).",
            "求 \\(\\lim\\limits_{x\\to\\infty}\\frac{x^2}{e^{\\frac{x}{2}}}\\)。"
          ],
          "answer": [
            "The form is \\(\\frac{\\infty}{\\infty}\\). Two applications of L’Hôpital’s rule reduce it to \\(\\lim\\limits_{x\\to\\infty}\\frac{8}{e^{\\frac{x}{2}}}=0\\).",
            "这是 \\(\\frac{\\infty}{\\infty}\\) 型未定式。两次使用洛必达法则，得到 \\(\\lim\\limits_{x\\to\\infty}\\frac{8}{e^{\\frac{x}{2}}}=0\\)。"
          ]
        },
        {
          "section": "7.5",
          "question": [
            "Evaluate \\(\\lim\\limits_{x\\to0^+}(1+4x)^{\\frac{1}{x}}\\) by taking logarithms.",
            "先取对数，再求 \\(\\lim\\limits_{x\\to0^+}(1+4x)^{\\frac{1}{x}}\\)。"
          ],
          "answer": [
            "Writing \\(y=(1+4x)^{\\frac{1}{x}}\\), we have \\(\\ln y=\\frac{\\ln(1+4x)}{x}\\). Its limit is \\(4\\) by L’Hôpital’s rule, so the original limit is \\(e^4\\).",
            "设 \\(y=(1+4x)^{\\frac{1}{x}}\\)，则 \\(\\ln y=\\frac{\\ln(1+4x)}{x}\\)。用洛必达法则得对数的极限为 \\(4\\)，所以原极限为 \\(e^4\\)。"
          ]
        },
        {
          "section": "7.5",
          "question": [
            "Use L’Hôpital’s rule to evaluate \\(\\lim\\limits_{x\\to0}\\frac{1-\\cos(3x)}{x\\sin x}\\).",
            "用洛必达法则求 \\(\\lim\\limits_{x\\to0}\\frac{1-\\cos(3x)}{x\\sin x}\\)。"
          ],
          "answer": [
            "The numerator and denominator both vanish at \\(0\\), as do their first derivatives. Differentiating twice gives the quotient \\(\\frac{9\\cos(3x)}{2\\cos x-x\\sin x}\\), whose limit is \\(\\frac{9}{2}\\).",
            "分子和分母在 \\(0\\) 处都为零，它们的一阶导数在 \\(0\\) 处也都为零。两次使用洛必达法则后得到 \\(\\frac{9\\cos(3x)}{2\\cos x-x\\sin x}\\)，极限为 \\(\\frac{9}{2}\\)。"
          ]
        },
        {
          "section": "7.5",
          "question": [
            "First combine the terms, then evaluate \\(\\lim\\limits_{x\\to0^+}\\left(\\frac{1}{\\ln(1+x)}-\\frac{1}{x}\\right)\\).",
            "先通分，再求 \\(\\lim\\limits_{x\\to0^+}\\left(\\frac{1}{\\ln(1+x)}-\\frac{1}{x}\\right)\\)。"
          ],
          "answer": [
            "The combined fraction is \\(\\frac{x-\\ln(1+x)}{x\\ln(1+x)}\\). Both numerator and denominator vanish at \\(0\\), and so do their first derivatives. Their second derivatives tend to \\(1\\) and \\(2\\), respectively. The limit is \\(\\frac{1}{2}\\).",
            "通分得 \\(\\frac{x-\\ln(1+x)}{x\\ln(1+x)}\\)。分子和分母以及各自的一阶导数都趋于零。各自的二阶导数分别趋于 \\(1\\) 和 \\(2\\)，故所求极限为 \\(\\frac{1}{2}\\)。"
          ]
        }
      ]
    },
    {
      "chapter": 8,
      "title": [
        "Techniques of Integration",
        "积分技巧"
      ],
      "items": [
        {
          "section": "8.2",
          "question": [
            "Find the general antiderivative of \\(xe^x\\) by integration by parts.",
            "用分部积分法求 \\(xe^x\\) 的一般原函数。"
          ],
          "answer": [
            "Choose \\(u=x\\) and \\(dv=e^x\\,dx\\), so \\(du=dx\\) and \\(v=e^x\\). Integration by parts gives\n          \\[\n          \\begin{aligned}\n            \\int xe^x\\,dx&=xe^x-\\int e^x\\,dx\\\\\n            &=(x-1)e^x+C.\n          \\end{aligned}\n          \\]",
            "取 \\(u=x\\)、\\(dv=e^x\\,dx\\)，则 \\(du=dx\\)、\\(v=e^x\\)。由分部积分公式得\n          \\[\n          \\begin{aligned}\n            \\int xe^x\\,dx&=xe^x-\\int e^x\\,dx\\\\\n            &=(x-1)e^x+C.\n          \\end{aligned}\n          \\]"
          ]
        },
        {
          "section": "8.2",
          "question": [
            "Use integration by parts to evaluate\n          \\[\\int_1^e \\ln x\\,dx.\\]",
            "用分部积分法计算\n          \\[\\int_1^e \\ln x\\,dx.\\]"
          ],
          "answer": [
            "Take \\(u=\\ln x\\) and \\(dv=dx\\). Then \\(du=\\frac{dx}{x}\\) and \\(v=x\\), so \\(v\\,du=dx\\). It follows that\n          \\[\n          \\begin{aligned}\n            \\int_1^e\\ln x\\,dx&=\\bigl[x\\ln x-x\\bigr]_1^e\\\\\n            &=0-(-1)=1.\n          \\end{aligned}\n          \\]",
            "取 \\(u=\\ln x\\)、\\(dv=dx\\)，则 \\(du=\\frac{dx}{x}\\)、\\(v=x\\)，因此 \\(v\\,du=dx\\)。由分部积分公式得\n          \\[\n          \\begin{aligned}\n            \\int_1^e\\ln x\\,dx&=\\bigl[x\\ln x-x\\bigr]_1^e\\\\\n            &=0-(-1)=1.\n          \\end{aligned}\n          \\]"
          ]
        },
        {
          "section": "8.2",
          "question": [
            "Evaluate \\(\\int x\\sin(2x)\\,dx\\) by integration by parts.",
            "用分部积分法求 \\(\\int x\\sin(2x)\\,dx\\)。"
          ],
          "answer": [
            "Take \\(u=x\\), \\(dv=\\sin(2x)\\,dx\\), so \\(v=-\\frac{\\cos(2x)}{2}\\). The result is \\(-\\frac{x\\cos(2x)}{2}+\\frac{\\sin(2x)}{4}+C\\).",
            "取 \\(u=x\\)、\\(dv=\\sin(2x)\\,dx\\)，得 \\(v=-\\frac{\\cos(2x)}{2}\\)。代入公式得 \\(-\\frac{x\\cos(2x)}{2}+\\frac{\\sin(2x)}{4}+C\\)。"
          ]
        },
        {
          "section": "8.2",
          "question": [
            "Use integration by parts to evaluate \\(\\int_0^1 xe^{2x}\\,dx\\).",
            "用分部积分法计算 \\(\\int_0^1 xe^{2x}\\,dx\\)。"
          ],
          "answer": [
            "An antiderivative is \\(e^{2x}(\\frac{x}{2}-\\frac{1}{4})\\). Evaluating at \\(1\\) and \\(0\\) gives \\(\\frac{e^2+1}{4}\\).",
            "一个原函数为 \\(e^{2x}(\\frac{x}{2}-\\frac{1}{4})\\)。代入上下限，得 \\(\\frac{e^2+1}{4}\\)。"
          ]
        },
        {
          "section": "8.2",
          "question": [
            "For \\(x>0\\), find \\(\\int x^2\\ln x\\,dx\\).",
            "当 \\(x>0\\) 时，求 \\(\\int x^2\\ln x\\,dx\\)。"
          ],
          "answer": [
            "Take \\(u=\\ln x\\) and \\(dv=x^2\\,dx\\). Then \\(uv=\\frac{x^3\\ln x}{3}\\), and \\(\\int v\\,du=\\frac{x^3}{9}\\). The result is \\(\\frac{x^3\\ln x}{3}-\\frac{x^3}{9}+C\\).",
            "取 \\(u=\\ln x\\)、\\(dv=x^2\\,dx\\)，得 \\(uv=\\frac{x^3\\ln x}{3}\\)、\\(\\int v\\,du=\\frac{x^3}{9}\\)。故原积分为 \\(\\frac{x^3\\ln x}{3}-\\frac{x^3}{9}+C\\)。"
          ]
        },
        {
          "section": "8.2",
          "question": [
            "Evaluate \\(\\int e^{2x}\\cos x\\,dx\\) using integration by parts twice.",
            "用两次分部积分求 \\(\\int e^{2x}\\cos x\\,dx\\)。"
          ],
          "answer": [
            "If \\(I\\) denotes the integral, two integrations by parts give \\(I=\\frac{e^{2x}\\cos x}{2}+\\frac{e^{2x}\\sin x}{4}-\\frac{I}{4}\\), up to an additive constant. Hence \\(I=\\frac{e^{2x}(2\\cos x+\\sin x)}{5}+C\\).",
            "记原积分为 \\(I\\)。两次分部积分得到 \\(I=\\frac{e^{2x}\\cos x}{2}+\\frac{e^{2x}\\sin x}{4}-\\frac{I}{4}\\)，暂略去积分常数。移项得 \\(I=\\frac{e^{2x}(2\\cos x+\\sin x)}{5}+C\\)。"
          ]
        },
        {
          "section": "8.2",
          "question": [
            "Apply integration by parts twice to compute \\(\\int_1^{e^2}(\\ln x)^2\\,dx\\).",
            "用两次分部积分计算 \\(\\int_1^{e^2}(\\ln x)^2\\,dx\\)。"
          ],
          "answer": [
            "Taking \\(u=(\\ln x)^2\\) and \\(dv=dx\\) leaves \\(\\int \\ln x\\,dx\\) in the remaining term. Applying parts again gives the antiderivative \\(x((\\ln x)^2-2\\ln x+2)\\). Evaluating at the endpoints gives \\(2e^2-2\\).",
            "取 \\(u=(\\ln x)^2\\)、\\(dv=dx\\)，剩下的积分是 \\(\\int\\ln x\\,dx\\) 的常数倍。再用一次分部积分得原函数 \\(x((\\ln x)^2-2\\ln x+2)\\)。代入上下限得 \\(2e^2-2\\)。"
          ]
        },
        {
          "section": "8.2",
          "question": [
            "Compute \\(\\int x^2\\sin(2x)\\,dx\\) by reducing the power of \\(x\\) at each step.",
            "每次分部积分将 \\(x\\) 的次数降低一次，求 \\(\\int x^2\\sin(2x)\\,dx\\)。"
          ],
          "answer": [
            "Taking \\(u=x^2\\) gives \\(-\\frac{x^2\\cos(2x)}{2}+\\int x\\cos(2x)\\,dx\\). A second application gives \\(-\\frac{x^2\\cos(2x)}{2}+\\frac{x\\sin(2x)}{2}+\\frac{\\cos(2x)}{4}+C\\).",
            "先取 \\(u=x^2\\)，得 \\(-\\frac{x^2\\cos(2x)}{2}+\\int x\\cos(2x)\\,dx\\)。再分部积分一次，得 \\(-\\frac{x^2\\cos(2x)}{2}+\\frac{x\\sin(2x)}{2}+\\frac{\\cos(2x)}{4}+C\\)。"
          ]
        }
      ]
    },
    {
      "chapter": 10,
      "title": [
        "Infinite Sequences and Series",
        "无穷数列与级数"
      ],
      "items": [
        {
          "section": "10.1",
          "question": [
            "Find the limit of the sequence \\(a_n=\\sqrt{n^2+5n}-n\\).",
            "求数列 \\(a_n=\\sqrt{n^2+5n}-n\\) 的极限。"
          ],
          "answer": [
            "Multiply the numerator and denominator by the conjugate \\(\\sqrt{n^2+5n}+n\\), then cancel a factor of \\(n\\).\n          \\[\n          \\begin{aligned}\n            a_n&=\\frac{5n}{\\sqrt{n^2+5n}+n}\\\\\n            &=\\frac{5}{\\sqrt{1+\\frac{5}{n}}+1}.\n          \\end{aligned}\n          \\]\n          The denominator tends to \\(2\\), so\n          \\[\\lim\\limits_{n\\to\\infty}a_n=\\frac{5}{2}.\\]",
            "将分子、分母同乘共轭式 \\(\\sqrt{n^2+5n}+n\\)，再约去公因子 \\(n\\)。\n          \\[\n          \\begin{aligned}\n            a_n&=\\frac{5n}{\\sqrt{n^2+5n}+n}\\\\\n            &=\\frac{5}{\\sqrt{1+\\frac{5}{n}}+1}.\n          \\end{aligned}\n          \\]\n          分母趋于 \\(2\\)，所以\n          \\[\\lim\\limits_{n\\to\\infty}a_n=\\frac{5}{2}.\\]"
          ]
        },
        {
          "section": "10.1",
          "question": [
            "Find \\(\\lim\\limits_{n\\to\\infty}\\frac{5n^2-4}{2n^2+n}\\).",
            "求 \\(\\lim\\limits_{n\\to\\infty}\\frac{5n^2-4}{2n^2+n}\\)。"
          ],
          "answer": [
            "Divide numerator and denominator by \\(n^2\\). The quotient tends to \\(\\frac{5}{2}\\).",
            "分子、分母同除以 \\(n^2\\)，所得极限为 \\(\\frac{5}{2}\\)。"
          ]
        },
        {
          "section": "10.1",
          "question": [
            "Determine whether \\(a_n=(-1)^n(1+\\frac{2}{n})\\) converges. Justify your answer using subsequences.",
            "判断数列 \\(a_n=(-1)^n(1+\\frac{2}{n})\\) 是否收敛，并用子数列说明理由。"
          ],
          "answer": [
            "The even subsequence tends to \\(1\\), and the odd subsequence tends to \\(-1\\). Their limits differ, so the sequence diverges.",
            "偶数项子数列趋于 \\(1\\)，奇数项子数列趋于 \\(-1\\)。两个极限不同，因此原数列发散。"
          ]
        },
        {
          "section": "10.1",
          "question": [
            "Let \\(a_1=2\\) and \\(a_{n+1}=\\frac{a_n+6}{2}\\). Show that \\((a_n)\\) is increasing and bounded above, and find its limit.",
            "设 \\(a_1=2\\)，\\(a_{n+1}=\\frac{a_n+6}{2}\\)。证明数列递增且有上界，并求其极限。"
          ],
          "answer": [
            "The recurrence gives \\(6-a_{n+1}=\\frac{6-a_n}{2}\\), hence \\(a_n=6-\\frac{4}{2^{n-1}}\\). It increases toward \\(6\\), which is an upper bound.",
            "由递推式得 \\(6-a_{n+1}=\\frac{6-a_n}{2}\\)，故 \\(a_n=6-\\frac{4}{2^{n-1}}\\)。数列递增，且以 \\(6\\) 为上界，极限为 \\(6\\)。"
          ]
        },
        {
          "section": "10.1",
          "question": [
            "Use the squeeze theorem to find \\(\\lim\\limits_{n\\to\\infty}\\frac{\\sin n}{n+2}\\).",
            "用夹逼定理求 \\(\\lim\\limits_{n\\to\\infty}\\frac{\\sin n}{n+2}\\)。"
          ],
          "answer": [
            "The absolute value is bounded by \\(\\frac{1}{n+2}\\), which tends to zero. The limit is \\(0\\).",
            "绝对值不超过 \\(\\frac{1}{n+2}\\)，而它趋于 \\(0\\)，故所求极限为 \\(0\\)。"
          ]
        },
        {
          "section": "10.1",
          "question": [
            "Suppose \\(a_1=4\\) and \\(a_n=a_{n-1}+2n\\) for \\(n\\ge2\\). Find an explicit formula and determine the behavior of \\(a_n\\) as \\(n\\) increases.",
            "设 \\(a_1=4\\)，当 \\(n\\ge2\\) 时 \\(a_n=a_{n-1}+2n\\)。求通项，并判断 \\(n\\) 增大时数列的变化。"
          ],
          "answer": [
            "Summing the increments gives \\(a_n=4+2\\sum\\limits_{k=2}^{n}k=n(n+1)+2\\). It is strictly increasing and tends to \\(+\\infty\\).",
            "将各项增量相加，得 \\(a_n=4+2\\sum\\limits_{k=2}^{n}k=n(n+1)+2\\)。数列严格递增并趋于 \\(+\\infty\\)。"
          ]
        },
        {
          "section": "10.1",
          "question": [
            "Determine whether \\(a_n=\\frac{3^{n+1}}{7^n}\\), \\(n\\ge1\\), is monotone and bounded. Find its limit.",
            "判断数列 \\(a_n=\\frac{3^{n+1}}{7^n}\\)（\\(n\\ge1\\)）的单调性和有界性，并求其极限。"
          ],
          "answer": [
            "Write \\(a_n=3(\\frac{3}{7})^n\\). It decreases because the ratio is \\(\\frac{3}{7}\\). Its terms lie between \\(0\\) and \\(\\frac{9}{7}\\), and its limit is \\(0\\).",
            "写成 \\(a_n=3(\\frac{3}{7})^n\\)。由于公比为 \\(\\frac{3}{7}\\)，数列递减，且有上下界 \\(0\\) 和 \\(\\frac{9}{7}\\)。极限为 \\(0\\)。"
          ]
        },
        {
          "section": "10.2",
          "question": [
            "Determine whether the geometric series converges. If it does, find its sum.\n          \\[\\sum\\limits_{n=1}^{\\infty}4\\left(-\\frac{2}{3}\\right)^{n-1}\\]",
            "判断下列等比级数是否收敛。若收敛，求其和。\n          \\[\\sum\\limits_{n=1}^{\\infty}4\\left(-\\frac{2}{3}\\right)^{n-1}\\]"
          ],
          "answer": [
            "The first term is \\(4\\) and the common ratio is \\(r=-\\frac{2}{3}\\). Since \\(|r|<1\\), the series converges to\n          \\[\\sum\\limits_{n=1}^{\\infty}4r^{n-1}=\\frac{4}{1-r}=\\frac{12}{5}.\\]",
            "首项为 \\(4\\)，公比为 \\(r=-\\frac{2}{3}\\)。由于 \\(|r|<1\\)，级数收敛，其和为\n          \\[\\sum\\limits_{n=1}^{\\infty}4r^{n-1}=\\frac{4}{1-r}=\\frac{12}{5}.\\]"
          ]
        },
        {
          "section": "10.2",
          "question": [
            "Find the sum of the telescoping series. \\[\\sum\\limits_{n=1}^{\\infty}\\left(\\frac{1}{n+1}-\\frac{1}{n+2}\\right)\\]",
            "求这个裂项相消级数的和。 \\[\\sum\\limits_{n=1}^{\\infty}\\left(\\frac{1}{n+1}-\\frac{1}{n+2}\\right)\\]"
          ],
          "answer": [
            "The partial sum through \\(N\\) is \\(\\frac{1}{2}-\\frac{1}{N+2}\\), which tends to \\(\\frac{1}{2}\\).",
            "前 \\(N\\) 项相消后得 \\(\\frac{1}{2}-\\frac{1}{N+2}\\)，其极限为 \\(\\frac{1}{2}\\)。"
          ]
        },
        {
          "section": "10.2",
          "question": [
            "Is \\(\\sum\\limits_{n=1}^{\\infty}\\frac{(-3)^n}{5^{n+1}}\\) absolutely convergent? Find its sum if it converges.",
            "判断 \\(\\sum\\limits_{n=1}^{\\infty}\\frac{(-3)^n}{5^{n+1}}\\) 是否绝对收敛。若收敛，求其和。"
          ],
          "answer": [
            "The absolute term ratio is \\(\\frac{3}{5}<1\\), so the series converges absolutely. Its first term is \\(-\\frac{3}{25}\\) and its common ratio is \\(-\\frac{3}{5}\\), giving the sum \\(-\\frac{3}{40}\\).",
            "相邻项的绝对值之比为 \\(\\frac{3}{5}<1\\)，所以级数绝对收敛。首项为 \\(-\\frac{3}{25}\\)，公比为 \\(-\\frac{3}{5}\\)，由等比级数求和公式得 \\(-\\frac{3}{40}\\)。"
          ]
        },
        {
          "section": "10.3",
          "question": [
            "Find the limit of the sequence \\(a_n=\\frac{1}{n}\\). Then use the integral test to decide whether the harmonic series converges.\n          \\[\\sum\\limits_{n=1}^{\\infty}\\frac{1}{n}\\]",
            "先求数列 \\(a_n=\\frac{1}{n}\\) 的极限，再用积分判别法判断调和级数是否收敛。\n          \\[\\sum\\limits_{n=1}^{\\infty}\\frac{1}{n}\\]"
          ],
          "answer": [
            "The denominators of the terms grow without bound, so\n          \\[\\lim\\limits_{n\\to\\infty}\\frac{1}{n}=0.\\]\n          The function \\(\\frac{1}{x}\\) is positive, continuous, and decreasing for \\(x\\ge1\\), and\n          \\[\\int_1^\\infty\\frac{dx}{x}=\\lim\\limits_{b\\to\\infty}\\ln b=+\\infty.\\]\n          The integral test therefore gives divergence of the harmonic series.",
            "通项的分母随 \\(n\\) 增大而趋于无穷，因此\n          \\[\\lim\\limits_{n\\to\\infty}\\frac{1}{n}=0.\\]\n          函数 \\(\\frac{1}{x}\\) 在 \\([1,\\infty)\\) 上连续、为正且递减，并且\n          \\[\\int_1^\\infty\\frac{dx}{x}=\\lim\\limits_{b\\to\\infty}\\ln b=+\\infty.\\]\n          因此，由积分判别法可知调和级数发散。"
          ]
        },
        {
          "section": "10.3",
          "question": [
            "Use the integral test to determine whether the series converges. \\[\\sum\\limits_{n=2}^{\\infty}\\frac{1}{n(\\ln n)^2}\\]",
            "用积分判别法判断该级数是否收敛。 \\[\\sum\\limits_{n=2}^{\\infty}\\frac{1}{n(\\ln n)^2}\\]"
          ],
          "answer": [
            "The corresponding function is positive, continuous and decreasing for \\(x\\ge2\\). With \\(u=\\ln x\\), the integral from \\(2\\) to infinity equals \\(\\frac{1}{\\ln2}\\). Thus the series converges.",
            "对应函数在 \\(x\\ge2\\) 上正、连续且递减。以 \\(u=\\ln x\\) 换元，得从 \\(2\\) 到无穷的积分为 \\(\\frac{1}{\\ln2}\\)，故级数收敛。"
          ]
        },
        {
          "section": "10.4",
          "question": [
            "Use limit comparison to determine whether the series converges.\n          \\[\\sum\\limits_{n=1}^{\\infty}\\frac{3n+1}{n^3+4}\\]",
            "用极限比较判别法判断下列级数是否收敛。\n          \\[\\sum\\limits_{n=1}^{\\infty}\\frac{3n+1}{n^3+4}\\]"
          ],
          "answer": [
            "For the positive terms \\(a_n=\\frac{3n+1}{n^3+4}\\), compare with \\(b_n=\\frac{1}{n^2}\\). The ratio satisfies\n          \\[\\lim\\limits_{n\\to\\infty}\\frac{a_n}{b_n}=\\lim\\limits_{n\\to\\infty}\\frac{3+\\frac{1}{n}}{1+\\frac{4}{n^3}}=3.\\]\n          The \\(p\\)-series with terms \\(b_n\\) converges, so limit comparison gives convergence of the given series.",
            "将正项 \\(a_n=\\frac{3n+1}{n^3+4}\\) 与 \\(b_n=\\frac{1}{n^2}\\) 比较。两者的比值满足\n          \\[\\lim\\limits_{n\\to\\infty}\\frac{a_n}{b_n}=\\lim\\limits_{n\\to\\infty}\\frac{3+\\frac{1}{n}}{1+\\frac{4}{n^3}}=3.\\]\n          以 \\(b_n\\) 为通项的 \\(p\\) 级数收敛，因此由极限比较判别法可知原级数收敛。"
          ]
        },
        {
          "section": "10.4",
          "question": [
            "Use limit comparison to determine whether the series converges. \\[\\sum\\limits_{n=1}^{\\infty}\\frac{1}{\\sqrt{n^2+3}}\\]",
            "用极限比较判别法判断该级数是否收敛。 \\[\\sum\\limits_{n=1}^{\\infty}\\frac{1}{\\sqrt{n^2+3}}\\]"
          ],
          "answer": [
            "Compare with \\(\\frac{1}{n}\\). The ratio \\(\\frac{n}{\\sqrt{n^2+3}}\\) tends to \\(1\\). Since the harmonic series diverges, the given series diverges.",
            "与 \\(\\frac{1}{n}\\) 比较，比值 \\(\\frac{n}{\\sqrt{n^2+3}}\\) 趋于 \\(1\\)。调和级数发散，所以所给级数发散。"
          ]
        },
        {
          "section": "10.4",
          "question": [
            "The terms of \\(\\sum\\limits_{n=1}^{\\infty}\\frac{1}{3n+2}\\) tend to zero. Decide whether the series converges, and justify your answer with a comparison.",
            "级数 \\(\\sum\\limits_{n=1}^{\\infty}\\frac{1}{3n+2}\\) 的通项趋于零。用比较判别法判断该级数是否收敛。"
          ],
          "answer": [
            "The ratio of its terms to \\(\\frac{1}{n}\\) tends to \\(\\frac{1}{3}\\). By limit comparison with the harmonic series, the series diverges.",
            "将通项与 \\(\\frac{1}{n}\\) 相比，所得比值趋于 \\(\\frac{1}{3}\\)。调和级数发散，由极限比较判别法知原级数也发散。"
          ]
        },
        {
          "section": "10.5",
          "question": [
            "Use the ratio test to determine whether the series converges.\n          \\[\\sum\\limits_{n=1}^{\\infty}\\frac{n^2}{3^n}\\]",
            "用比值判别法判断下列级数是否收敛。\n          \\[\\sum\\limits_{n=1}^{\\infty}\\frac{n^2}{3^n}\\]"
          ],
          "answer": [
            "Let \\(a_n=\\frac{n^2}{3^n}\\). For these positive terms,\n          \\[\n          \\begin{aligned}\n            \\lim\\limits_{n\\to\\infty}\\frac{a_{n+1}}{a_n}\n            &=\\lim\\limits_{n\\to\\infty}\\frac{(1+\\frac{1}{n})^2}{3}\\\\\n            &=\\frac{1}{3}.\n          \\end{aligned}\n          \\]\n          The limit is less than \\(1\\), so the series converges by the ratio test.",
            "令 \\(a_n=\\frac{n^2}{3^n}\\)。相邻两项之比的极限为\n          \\[\n          \\begin{aligned}\n            \\lim\\limits_{n\\to\\infty}\\frac{a_{n+1}}{a_n}\n            &=\\lim\\limits_{n\\to\\infty}\\frac{(1+\\frac{1}{n})^2}{3}\\\\\n            &=\\frac{1}{3}.\n          \\end{aligned}\n          \\]\n          该极限小于 \\(1\\)，由比值判别法知级数收敛。"
          ]
        },
        {
          "section": "10.5",
          "question": [
            "Determine convergence using the root test. \\[\\sum\\limits_{n=1}^{\\infty}\\left(\\frac{2n+1}{3n}\\right)^n\\]",
            "用根值判别法判断收敛性。 \\[\\sum\\limits_{n=1}^{\\infty}\\left(\\frac{2n+1}{3n}\\right)^n\\]"
          ],
          "answer": [
            "The \\(n\\)-th root of the term is \\(\\frac{2n+1}{3n}\\), with limit \\(\\frac{2}{3}<1\\). The series converges.",
            "通项的 \\(n\\) 次方根为 \\(\\frac{2n+1}{3n}\\)，极限 \\(\\frac{2}{3}<1\\)，故级数收敛。"
          ]
        },
        {
          "section": "10.6",
          "question": [
            "Classify the series as absolutely convergent, conditionally convergent, or divergent. If it converges, give an upper bound for the error after the first five terms.\n          \\[\\sum\\limits_{n=1}^{\\infty}\\frac{(-1)^{n-1}}{2n+1}\\]",
            "判断下列级数是绝对收敛、条件收敛，还是发散。若收敛，给出用前五项的和近似级数和时的误差上界。\n          \\[\\sum\\limits_{n=1}^{\\infty}\\frac{(-1)^{n-1}}{2n+1}\\]"
          ],
          "answer": [
            "The magnitudes \\(b_n=\\frac{1}{2n+1}\\) decrease to zero, so the alternating series converges. For \\(n\\ge1\\), \\(b_n\\ge\\frac{1}{3n}\\), so the series of magnitudes diverges by comparison with one third of the harmonic series. The original series converges conditionally. The alternating series remainder estimate bounds the error by \\(b_6=\\frac{1}{13}\\).",
            "各项的绝对值 \\(b_n=\\frac{1}{2n+1}\\) 单调递减并趋于零，由交错级数判别法知原级数收敛。当 \\(n\\ge1\\) 时，\\(b_n\\ge\\frac{1}{3n}\\)，与调和级数的三分之一比较可知，各项取绝对值后所得的级数发散。因此原级数条件收敛。由交错级数余项估计，误差的绝对值至多为 \\(b_6=\\frac{1}{13}\\)。"
          ]
        },
        {
          "section": "10.6",
          "question": [
            "Classify the series as absolutely convergent, conditionally convergent, or divergent. Give a bound on the error after \\(N\\) terms if the series converges. \\[\\sum\\limits_{n=1}^{\\infty}\\frac{(-1)^n}{n+4}\\]",
            "判断该级数绝对收敛、条件收敛还是发散。若收敛，给出取前 \\(N\\) 项的误差上界。 \\[\\sum\\limits_{n=1}^{\\infty}\\frac{(-1)^n}{n+4}\\]"
          ],
          "answer": [
            "The positive magnitudes decrease to zero, so the alternating series converges. The series of magnitudes is a tail of the harmonic series, so convergence is conditional. The error is at most \\(\\frac{1}{N+5}\\).",
            "通项的绝对值递减到零，由交错级数判别法知原级数收敛。绝对值级数是调和级数去掉有限项所得，故原级数条件收敛。误差不超过 \\(\\frac{1}{N+5}\\)。"
          ]
        },
        {
          "section": "10.7",
          "question": [
            "Find the radius and interval of convergence. Check both endpoints.\n          \\[\\sum\\limits_{n=1}^{\\infty}\\frac{x^n}{n}\\]",
            "求下列幂级数的收敛半径和收敛区间，并分别判断两个端点处的敛散性。\n          \\[\\sum\\limits_{n=1}^{\\infty}\\frac{x^n}{n}\\]"
          ],
          "answer": [
            "For \\(x\\ne0\\), let \\(a_n=\\frac{x^n}{n}\\) and compute the ratio limit.\n          \\[\\lim\\limits_{n\\to\\infty}\\left|\\frac{a_{n+1}}{a_n}\\right|=\\lim\\limits_{n\\to\\infty}\\frac{|x|n}{n+1}=|x|.\\]\n          The ratio test gives absolute convergence for \\(0<|x|<1\\) and divergence for \\(|x|>1\\). At \\(x=0\\), all terms vanish. At \\(x=-1\\), the alternating harmonic series converges. At \\(x=1\\), the harmonic series diverges. Thus the radius is \\(1\\) and the interval is \\([-1,1)\\).",
            "当 \\(x\\ne0\\) 时，令 \\(a_n=\\frac{x^n}{n}\\)，计算相邻两项绝对值的比的极限。\n          \\[\\lim\\limits_{n\\to\\infty}\\left|\\frac{a_{n+1}}{a_n}\\right|=\\lim\\limits_{n\\to\\infty}\\frac{|x|n}{n+1}=|x|.\\]\n          由比值判别法可知，\\(0<|x|<1\\) 时绝对收敛，\\(|x|>1\\) 时发散。\\(x=0\\) 时各项均为零。\\(x=-1\\) 时得到收敛的交错调和级数，\\(x=1\\) 时得到发散的调和级数。因此收敛半径为 \\(1\\)，收敛区间为 \\([-1,1)\\)。"
          ]
        },
        {
          "section": "10.7",
          "question": [
            "Find the radius and interval of convergence, and the sum on that interval. \\[\\sum\\limits_{n=0}^{\\infty}\\left(\\frac{x-2}{3}\\right)^n\\]",
            "求这个幂级数的收敛半径、收敛区间，以及区间内的和函数。 \\[\\sum\\limits_{n=0}^{\\infty}\\left(\\frac{x-2}{3}\\right)^n\\]"
          ],
          "answer": [
            "The geometric ratio has magnitude less than one for \\(-1<x<5\\). At each endpoint the terms fail to tend to zero. Thus \\(R=3\\), the interval is \\((-1,5)\\), and the sum is \\(\\frac{3}{5-x}\\).",
            "当 \\(-1<x<5\\) 时，公比的绝对值小于 \\(1\\)。两端点通项都不趋于零，所以 \\(R=3\\)，收敛区间为 \\((-1,5)\\)，和为 \\(\\frac{3}{5-x}\\)。"
          ]
        },
        {
          "section": "10.7",
          "question": [
            "Find the interval of convergence. Check both endpoints. \\[\\sum\\limits_{n=1}^{\\infty}\\frac{(x+1)^n}{n2^n}\\]",
            "求该幂级数的收敛区间，并检验两个端点。 \\[\\sum\\limits_{n=1}^{\\infty}\\frac{(x+1)^n}{n2^n}\\]"
          ],
          "answer": [
            "The ratio test gives \\(|x+1|<2\\). At \\(x=-3\\) the series is alternating harmonic and converges. At \\(x=1\\) it is harmonic and diverges. The interval is \\([-3,1)\\).",
            "比值判别法给出 \\(|x+1|<2\\)。当 \\(x=-3\\) 时为交错调和级数，收敛。当 \\(x=1\\) 时为调和级数，发散。收敛区间为 \\([-3,1)\\)。"
          ]
        },
        {
          "section": "10.7",
          "question": [
            "Represent \\(f(x)=\\frac{1}{1+9x^2}\\) by a power series centered at \\(0\\). Give its interval of convergence.",
            "将 \\(f(x)=\\frac{1}{1+9x^2}\\) 在 \\(0\\) 处展开为幂级数，并给出收敛区间。"
          ],
          "answer": [
            "Use the geometric ratio \\(-9x^2\\). The expansion is \\(\\sum\\limits_{n=0}^{\\infty}(-9)^n x^{2n}\\). The magnitude condition gives \\(|x|<\\frac{1}{3}\\), and at equality the terms fail to tend to zero. The interval is \\((-\\frac{1}{3},\\frac{1}{3})\\).",
            "取等比级数的公比为 \\(-9x^2\\)，展开式为 \\(\\sum\\limits_{n=0}^{\\infty}(-9)^n x^{2n}\\)。公比的绝对值小于 \\(1\\) 等价于 \\(|x|<\\frac{1}{3}\\)，两端的通项都不趋于零，故收敛区间为 \\((-\\frac{1}{3},\\frac{1}{3})\\)。"
          ]
        },
        {
          "section": "10.8",
          "question": [
            "Write the Taylor series of \\(f(x)=\\sin x\\) centered at \\(a=\\frac{\\pi}{2}\\). Give its degree-four Taylor polynomial.",
            "写出 \\(f(x)=\\sin x\\) 在 \\(a=\\frac{\\pi}{2}\\) 处的泰勒级数及其四次泰勒多项式。"
          ],
          "answer": [
            "Set \\(h=x-\\frac{\\pi}{2}\\). The function and its successive derivatives repeat in the order \\(\\sin x,\\cos x,-\\sin x,-\\cos x\\). Evaluating at \\(a=\\frac{\\pi}{2}\\) gives \\(f^{(2k)}(a)=(-1)^k\\) and \\(f^{(2k+1)}(a)=0\\) for \\(k\\ge0\\). Using the coefficients \\(\\frac{f^{(n)}(a)}{n!}\\) gives the Taylor series\n          \\[\\sum\\limits_{k=0}^{\\infty}\\frac{(-1)^k h^{2k}}{(2k)!}.\\]\n          Its terms through degree four give\n          \\[P_4(x)=1-\\frac{h^2}{2!}+\\frac{h^4}{4!}.\\]",
            "令 \\(h=x-\\frac{\\pi}{2}\\)。函数及其各阶导数按 \\(\\sin x,\\cos x,-\\sin x,-\\cos x\\) 循环。代入 \\(a=\\frac{\\pi}{2}\\)，得 \\(f^{(2k)}(a)=(-1)^k\\)、\\(f^{(2k+1)}(a)=0\\)，其中 \\(k\\ge0\\)。用 \\(\\frac{f^{(n)}(a)}{n!}\\) 作系数，得到泰勒级数\n          \\[\\sum\\limits_{k=0}^{\\infty}\\frac{(-1)^k h^{2k}}{(2k)!}.\\]\n          取到四次项，得到\n          \\[P_4(x)=1-\\frac{h^2}{2!}+\\frac{h^4}{4!}.\\]"
          ]
        },
        {
          "section": "10.8",
          "question": [
            "Write the Maclaurin series for \\(e^{-2x}\\). Give its first four nonzero terms and its interval of convergence.",
            "写出 \\(e^{-2x}\\) 的麦克劳林级数、前四个非零项和收敛区间。"
          ],
          "answer": [
            "Substitute \\(-2x\\) into the series for \\(e^x\\) to get \\(\\sum\\limits_{n=0}^{\\infty}\\frac{(-2)^nx^n}{n!}\\). It starts with \\(1-2x+2x^2-\\frac{4}{3}x^3\\) and converges for every real \\(x\\).",
            "在 \\(e^x\\) 的级数中代入 \\(-2x\\)，得到 \\(\\sum\\limits_{n=0}^{\\infty}\\frac{(-2)^nx^n}{n!}\\)。前四项为 \\(1-2x+2x^2-\\frac{4}{3}x^3\\)，在整个实数轴上收敛。"
          ]
        },
        {
          "section": "10.8",
          "question": [
            "Find the degree-three Taylor polynomial of \\(\\ln x\\) centered at \\(x=2\\).",
            "求 \\(\\ln x\\) 在 \\(x=2\\) 处的三次泰勒多项式。"
          ],
          "answer": [
            "The first three derivatives at \\(2\\) are \\(\\frac{1}{2},-\\frac{1}{4},\\frac{1}{4}\\). Dividing by the corresponding factorials gives \\(P_3(x)=\\ln2+\\frac{x-2}{2}-\\frac{(x-2)^2}{8}+\\frac{(x-2)^3}{24}\\).",
            "在 \\(2\\) 处的一至三阶导数为 \\(\\frac{1}{2},-\\frac{1}{4},\\frac{1}{4}\\)。分别除以相应阶乘，得 \\(P_3(x)=\\ln2+\\frac{x-2}{2}-\\frac{(x-2)^2}{8}+\\frac{(x-2)^3}{24}\\)。"
          ]
        },
        {
          "section": "10.8",
          "question": [
            "Find the Taylor polynomial through degree \\(3\\) for \\(f(x)=\\cos(2x)\\) at \\(x=0\\). Use it to approximate \\(\\cos(\\frac{1}{5})\\).",
            "求 \\(f(x)=\\cos(2x)\\) 在 \\(x=0\\) 处到三阶的泰勒多项式，并用它近似计算 \\(\\cos(\\frac{1}{5})\\)。"
          ],
          "answer": [
            "At zero the value is \\(1\\), the second derivative is \\(-4\\), and the odd derivatives through order \\(3\\) vanish. The polynomial is \\(1-2x^2\\). Substitute \\(x=\\frac{1}{10}\\) to obtain \\(\\cos(\\frac{1}{5})\\approx\\frac{49}{50}\\).",
            "函数在 \\(0\\) 处取值 \\(1\\)，二阶导数为 \\(-4\\)，一阶与三阶导数均为零。多项式为 \\(1-2x^2\\)。代入 \\(x=\\frac{1}{10}\\)，得 \\(\\cos(\\frac{1}{5})\\approx\\frac{49}{50}\\)。"
          ]
        }
      ]
    }
  ]
};

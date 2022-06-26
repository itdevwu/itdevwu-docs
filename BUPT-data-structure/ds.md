---
title: 北邮数据结构实验
slug: /
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

# 北京邮电大学计算机专业“数据结构”课程实验/大作业

[![GitHub](https://img.shields.io/github/license/itdevwu/BUPT-data-structure?style=for-the-badge&logo=github)](https://github.com/itdevwu/BUPT-data-structure/blob/master/LICENSE)
[![Website](https://img.shields.io/website?down_color=red&down_message=offline&up_color=blue&up_message=online&url=https%3A%2F%2Fdocs.itdevwu.com%2FBUPT-data-structure&style=for-the-badge)](https://docs.itdevwu.com/BUPT-data-structure)
![GitHub top language](https://img.shields.io/github/languages/top/itdevwu/BUPT-data-structure?style=for-the-badge&logo=cplusplus)

## 实验一：约瑟夫问题/约瑟夫环

本实验属于线性表实验。

### 问题

据说著名犹太历史学家 Josephus 有过以下的故事：在罗马人占领乔塔帕特后，39 个犹太
人与 Josephus 及他的朋友躲到一个洞中，39 个犹太人决定宁愿死也不要被敌人抓到，于是决
定了一个自杀方式 41 个人排成一个圆圈，由第 1 个人开始报数，每报数到第 3 人该人就必须
自杀，然后再由下一个重新报数，直到所有人都自杀身亡为止。然而 Josephus 和他的朋友并
不想遵从，Josephus 要他的朋友先假装遵从，他将朋友与自己安排在第 16 个与第 31 个位置，
于是逃过了这场死亡游戏。
17 世纪的法国数学家加斯帕在《数目的游戏问题》中讲了这样一个故事: 15 个教徒和 15
个非教徒在深海上遇险，必须将一半的人投入海中，其余的人才能幸免于难，于是想了一个办
法: 30 个人围成一圆圈，从第一个人开始依次报数，每数到第九个人就将他扔入大海，如此循
环进行直到仅余 15 个人为止。问怎样排法，才能使每次投入大海的都是非教徒。

### 要求

1. 从键盘输入人数 N (N < 50) 及 N 个人的编号（整型）、姓名、性别和年龄，正向建立带头节点的循环链表；
2. 输出循环链表各结点的值；
3. 输入开始报数的人的编号 S 、间隔的个数 M 和剩余人数 X；
4. 在循环链表中查找到编号为 S 的结点；
5. 从 1 开始向后报数，将报 M 的人（结点）从循环链表中删除，并输出该人的编号；
6. 从刚才被删除人的下一个人开始重复步骤 5，直至最后只剩下 X 个人为止；
7. 输出最后剩余的人的编号、姓名、性别和年龄；
8. 能够处理异常输入输出。

### 样例

N 个人围成一圈，从第 S 个开始报数，每隔第 M 个将被杀掉，最后剩下 X 个，其余人
都将被杀掉。例如 N = 6, S = 1, M = 5 ，被杀掉的人的序号为 5, 4, 6, 2, 3 ，最后剩下 1 号。

### 思路

通过链表存储约瑟夫环的结构，加入时直接加入链表末端。之后，将链表首尾相接，首节
点的前指针指向末节点，末节点的后指针指向首节点。之后每次删除时，从链表中删除数据
（前一节点的后指针指向后一节点，后一节点的前指针指向前一节点）并释放内存，最后当人
数等于剩余人数时，输出结果。

### 编译运行

#### 使用脚本

<Tabs>
  <TabItem value="bash" label="Bash" default>

```bash
./build_run_unix.sh
```

</TabItem>
  <TabItem value="cmdps" label="CMD/PS">

```bash
build_run_win
```

  </TabItem>
</Tabs>

#### 手动运行

<Tabs>
  <TabItem value="bash" label="Bash" default>

```bash
g++ lab1.cpp -std=c++14 -O2 -Wall -o lab1
./lab1
```

  </TabItem>

  <TabItem value="cmdps" label="CMD/PS">

```powershell
g++ lab1.cpp -std=c++14 -O2 -Wall -o lab1
./lab1
```

  </TabItem>
</Tabs>

## 实验二：迷宫问题/最短路

本实验属于栈实验。

### 问题

迷宫（希腊文：λαβυνρινθωσ，拉丁转写：labyrinthos）在希腊神话中是一座精心制作的建筑物，由名匠代达罗斯为克里特岛的国王米诺斯所设计，建造于克诺索斯。Labyrinth这个词经常可以和maze（迷路园）互换使用，但现代专门学者使用更严格的定义。对他们而言，maze是一个游览拼图参观的形式，有着可以选择不同路径与方向的复杂分歧通道；而单一路径的labyrinth只有一条唯一的欧拉路径到达中心。（摘自：[迷宫 - 维基百科](https://zh.wikipedia.org/wiki/迷宫)）。

此处是图论的迷宫问题（类似maze）：在一个无向图中，找到指定起点到终点的最短路。

:::warning
由于课程要求，这一图论问题不得使用图论中的最短路算法解决
:::

### 要求

1. 从开始位置start找出到出口end的通路，并从start到end输出；输出路径的长度。
2. 可以将节点进行编号，从1开始编号，编号次序从上到下，从左到右；保存每条边，根据两个节点之间是否有边，来决定是否能够走通；
3. 将边保存在文件中，用2个端点来表示一条边，第三个数表示边权；
4. 每点的分支数不一样，要求根据分支数决定遍历的方向数，不能用恒定的遍历方向数；
5. 补充：当迷宫有多个出口应该如何找到最近的出口。

### 样例

#### 约定输入格式

第1行输入1个整数m，代表无向图的总边数；接下来m行，每行3个整数，其中第i(i= 1,2,···, m)行的三个整数ui, vi, wi，分别表示第i条边的起点、终点、边权；接下来1行输入1个整数s，代表迷宫的起点；接下来1行输入一个整数n，代表迷宫终点的个数；最后1行输入n个整数t1, t2,···, tn，每个数均为一个可行的终点。

#### 样例

```
4
1 2 1
2 3 4
3 4 2
2 4 6
1
2
3 4
```

对应答案：不难发现，最短路径为1→2→3，总边权和为5。

### 思路

用栈模拟DFS，方法如下：
1. 判断DFS栈是否为空，若为空则结束DFS，否则继续；
2. 取DFS栈顶一点并弹出DFS栈顶；
3. 判断该点是否为终点：

    若不是：
    1. 遍历每一个该点的出度的终点；
    2. 若该终点不存在于当前点的对应路径中，则将该终点加入栈顶；
    
    若是：
    1. 比较当前点的对应路径与已知最短路径；
    1. 若当前路径比已知最短路径要短，则将当前路径设置为最短路径

### 编译运行

#### 使用脚本

<Tabs>
  <TabItem value="bash" label="Bash" default>

```bash
./build_run_unix.sh
```

  </TabItem>

  <TabItem value="cmdps" label="CMD/PS">

```bash
build_run_win
```

  </TabItem>
</Tabs>

#### 手动运行

<Tabs>
  <TabItem value="bash" label="Bash" default>

```bash
g++ lab2.cpp -std=c++14 -O2 -Wall -o lab2
./lab2
```

  </TabItem>

  <TabItem value="cmdps" label="CMD/PS">

```powershell
g++ lab2.cpp -std=c++14 -O2 -Wall -o lab2
./lab2
```

  </TabItem>
</Tabs>

## 版权

版权所有 © 2021 Zhenglong WU (itdevwu).

本项目“BUPT-data-structure”的文档采用<a rel="license" href="http://creativecommons.org/licenses/by/4.0/">知识共享署名 4.0 国际许可协议</a>进行许可。

本项目的代码采用 [MIT](https://github.com/itdevwu/BUPT-data-structure/blob/master/LICENSE) 协议进行许可。
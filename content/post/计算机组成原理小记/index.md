---
title: 计算机组成原理小记
summary: 计算机组成原理复习资料
date: 2023-06-01
---
# 第一章 计算机抽象及相关技术

## 性能

### 性能的定义

吞吐率：也叫带宽，表示单位时间内完成的任务数量。

响应时间：也叫执行时间，挂钟时间，表示计算机完成某任务所需的总时间，包括硬盘访问，内存访问，$\operatorname{I/O}$ 活动，操作系统开销和 $\operatorname{CPU}$ 执行时间等。

### 性能的度量

$\operatorname{CPU}$ 执行时间：简称为 $\operatorname{CPU}$ 时间，表示执行某一任务在 $\operatorname{CPU}$ 上所花费的时间。

$\operatorname{CPU}$ 执行时间又可以进一步分为**用于用户程序的时间**和**操作系统为用户程序执行相关任务所花去的 $\operatorname{CPU}$ 时间**。

前者称为用户 $\operatorname{CPU}$ 时间：程序本身所花费的 $\operatorname{CPU}$ 时间，我们用术语 **$\operatorname{CPU}$ 性能**来描述。

后者称为系统 $\operatorname{CPU}$ 时间：为执行程序而花费在操作系统上的时间，我们用术语**系统性能**来描述。

时钟周期数：也叫（时钟）周期长度，为计算机一个时钟周期的时间，通常是指处理器时钟，并在固定频率下运行，例如 $250\operatorname{ps}$。

时钟频率：时钟周期（长度）的倒数，例如 $4\operatorname{GHz}$。

### CPU 性能及其度量因素

$$
程序的 \operatorname{CPU} 执行时间=程序的 \operatorname{CPU} 时钟周期数 \times 时钟周期长度
$$

由于时钟频率和时钟周期长度互为倒数，我们又有：

$$
程序的 \operatorname{CPU} 执行时间=\frac{程序的 \operatorname{CPU} 时钟周期数 }{时钟频率}
$$

### 指令性能

一个程序需要的时钟周期数可以写为：

$$
\operatorname{CPU}时钟周期数=程序的指令数\times 指令平均时钟周期数
$$

指令平均时钟周期数：表示某个程序或者某个程序片断执行每条指令所需的时钟周期平均数，缩写为 $\operatorname{CPI}$，上述的公式也可以写为：

$$
\operatorname{CPU}时钟周期数=程序的指令数\times \operatorname{CPI}
$$

### 经典的 CPU 性能公式

$$
程序的 \operatorname{CPU} 执行时间=程序的指令数\times \operatorname{CPI} \times 时钟周期长度
$$

由于时钟频率和时钟周期长度互为倒数，我们又有：

$$
程序的 \operatorname{CPU} 执行时间=\frac{程序的指令数\times \operatorname{CPI}}{时钟频率}
$$

基于每条指令的 $\operatorname{CPI}$ 和该指令的数目，我们可以计算出每个代码序列的总时钟周期数：

$$
\operatorname{CPU} 时钟周期数=\sum_{i}(\operatorname{CPI}_i\times \operatorname{C}_i)
$$

## 功耗墙

当前在集成电路技术中占统治地位的是 $\operatorname{CMOS}$，其主要的能耗来源是动态能耗，即晶体管在开关的过程中产生的能耗，一个晶体管消耗的能量为：

$$
能耗\propto 1/2 \times 负载电容 \times 电压^2
$$

每个晶体管需要的功耗是一次翻转需要的能耗和开关频率的乘积：

$$
功耗\propto 1/2 \times 负载电容 \times 电压^2 \times 开关频率
$$

## SPEC 分值

$\operatorname{SPEC}$ 分值：将参考处理器的执行时间除以被测计算机的执行时间，这样的归一化结果产生的一个测量值，显然 $\operatorname{SPEC}$ 分值越大，表示性能越好。

几何平均值：

$$
^n\sqrt{\prod_i执行时间比_i}
$$

## 谬误与陷阱

不要使用性能公式的一个子集去度量性能，例如每秒百万条指令数，即 $\operatorname{MIPS}$：

$$
\operatorname{MIPS}=\frac{指令数}{执行时间\times 10^6}
$$

我们将经典的 $\operatorname{CPU}$ 性能公式代入，得到：

$$
\operatorname{MIPS}=\frac{指令数}{\frac{指令数\times \operatorname{CPI}}{时钟频率}\times 10^6}=\frac{时钟频率}{\operatorname{CPI}\times10^6}
$$

显然 $\operatorname{MIPS}$ 会受程序的指令数的影响，所以其可能会独立于性能而发生变化。

# 第二章 指令：计算机的语言

## 计算机硬件的操作数

双字：计算机中一种访问基本单位，通常是 $64$ 位一组；对应于 $\operatorname{RISC-V}$ 体系结构中寄存器的大小。

单字：计算机中一种访问基本单位，通常是 $32$ 位一组。

### 存储器操作数

$\operatorname{RISC-V}$ 指令中的**算术运算**只作用于**寄存器**。

数据传输指令：在内存和寄存器之间传送数据的命令。

要访问内存中的字或双字，指令必须提供**内存地址**。

地址：用于描述内存数组中特定数据元素位置的值。

由于 **$8$ 位字节**在许多程序中非常有用，所以几乎所有的体系结构都是按单个字节寻址的，例如$\operatorname{RISC-V}$ 就使用**字节寻址**，因此**顺序双字访问相差 $8$，**下图为实际的 $\operatorname{RISC-V}$ 内存地址和这些内存中双字的内容。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f3bc2cad-dd34-4f87-ad83-6762054330c2/Untitled.png)

计算机分为两种，一种使用最左边或 “大端” 字节的地址作为双字地址，另一种使用最右端或 “小端” 字节的地址作为双字地址，根据上面的讲述，我们知道 $\operatorname{RISC-V}$ 属于小端编址。

在许多体系结构中，字的起始地址必须是 $4$ 的倍数，双字的起始地址必须是 $8$ 的倍数，该要求称为**对齐限制**，$\operatorname{RISC-V}$ 没有对齐限制。

对齐限制：数据在内存中要与自然边界对齐的要求。

## 有符号数与无符号数

最低有效位：以 $\operatorname{RISC-V}$ 为例，指双字中最右边的位。

最高有效位：以 $\operatorname{RISC-V}$ 为例，指双字中最左边的位。

## 计算机中的指令表示

指令格式：由二进制数字字段组成的指令表示形式。

$\operatorname{RISC-V}$ 指令都是 $32$ 位，刚好是一个字或一个双字的一半。

机器语言：用于计算机系统内通信的二进制表示，即指令的数字表示。

首先给出六种不同指令类型的**指令格式**：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0e652f3b-7402-498b-8121-fb9f659b02c8/Untitled.png)

### R 型指令

所有 $\operatorname{R}$ 型指令的 $\operatorname{opcode}$ 都一样，利用功能码来区分不同的 $\operatorname{R}$ 型指令。

$\operatorname{rd}$：目的操作数寄存器，用来**存放**操作的结果。

$\operatorname{rs1},\operatorname{rs2}$：源操作数寄存器。

如下的指令包含于 $\operatorname{R}$ 型指令：

- $\operatorname{ADD}/\operatorname{SUB}$：`add/sub rd, rs1, rs2` ，将 `rd` 赋值为 `rs1+rs2` 或 `rs1-rs2`。
- $\operatorname{SLT}/\operatorname{SLTU}$：`slt/sltu rd, rs1, rs2` ，比较有符号数/无符号数 `rs1` 和 `rs2` ，如果 `rs1<rs2` 则将 `rd`  赋值为 `1` ，否则赋值为 `0` 。
- $\operatorname{AND}/\operatorname{OR}/\operatorname{XOR}$：`and/or/xor rd, rs1, rs2` ，将 `rd` 赋值为 `rs1&rs2` ，`rs1|rs2` 或 `rs1^rs2` 。
- $\operatorname{SLL}/\operatorname{SRL}/\operatorname{SRA}$：`sll/srl/sra rd, rs1, rs2` ，逻辑左移 `rd=rs1<<rs2` ，逻辑右移 `rd=rs1>>rs2` 和算术右移 `rd=rs1>>rs2` ，**其中 `rs2` 中最低的 `5` 位表示位移量。**
- $\operatorname{NOP}$：一般 $\operatorname{NOP}$ 指令会被编码为 `add x0, x0, 0` 来代替。

各个 $\operatorname{R}$ 型指令的指令格式如下图所示：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a869be4f-adbe-4005-bc09-7a7f15abdf75/Untitled.png)

### I 型指令

如下的指令包含于 $\operatorname{I}$ 型指令：

- $\operatorname{ADDI}$：`addi rd, rs1, simm12` ，将 `rd` 赋值为 `rs1+simm12` 。
- $\operatorname{SLTI},\operatorname{SLTIU}$：`slti/sltui rd, rs1, simm12` ，将 `simm12` 扩展为 `32` 位有符号数/无符号数后与 `rs1` 进行比较，如果 `rs1<constant` ，则将 `rd` 赋值为 `1` ，否则将 `rd` 赋值为 `0` 。
- $\operatorname{ANDI}/\operatorname{ORI}/\operatorname{XORI}$：`andi/ori/xori rd, rs1, simm12` ，将 `rd` 赋值为 `rs1&simm12` ，`rs1|simm12` 或 `rs1^simm12` 。
- $\operatorname{SLLI}/\operatorname{SRLI}/\operatorname{SRAI}$：`slli/srli/srai rd, rs1, uimm5` ，这三条指令比较特殊，立即数只有**最低的五位起作用**，表示一个无符号的整数 $0\sim 31$，即偏移量，剩余的高位立即数对于不同的指令可相同可不同。
- $\operatorname{LW}/\operatorname{LH}/\operatorname{LHU}/\operatorname{LB}/\operatorname{LBU}$：`lw/lh/lhu/lb/lbu rd, simm12(rs1)` ，将内存中地址为 `rs1+simm12` 的数据加载到 `rd` 寄存器中，其中加载的数据形式如下：
    - $\operatorname{LW}$：取单字，$32$ 位。
    - $\operatorname{LH}$：取半字，符号扩展，$16$ 位。
    - $\operatorname{LHU}$：取半字（无符号数），零扩展，$16$ 位。
    - $\operatorname{LB}$：取字节，符号扩展，$8$ 位。
    - $\operatorname{LBU}$：取字节（无符号数），零扩展，$8$ 位。
- $\operatorname{JALR}$：`jalr rd, simm12(rs1)` ，跳转到地址 `rs1+simm12` ，并将跳转前的 $\operatorname{PC+4}$ 赋值到寄存器 `rd` 中。

各个 $\operatorname{I}$ 型指令的指令格式如下图所示：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4b880292-28a1-40e7-bc72-dfade0c3cd3f/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d2c0a5d3-01c8-47a8-997b-708c9a2d1f05/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/37fccd41-559e-4b4b-9c58-43992ae1ff4d/Untitled.png)

### S 型指令

如下的指令包含于 $\operatorname{S}$ 型指令：

- $\operatorname{SW}/\operatorname{SH}/\operatorname{SB}$：`sw rs2, simm12(rs1)` ，将 `rs2` 寄存器的内容写入地址为 `rs1+simm12` 的内存中。

各个 $\operatorname{S}$ 型指令的指令格式如下图所示：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/87519dae-8346-4776-8378-6f35dab5f77e/Untitled.png)

### B(SB) 型指令

如下的指令包含于 $\operatorname{B}$ 型指令：

- $\operatorname{BEQ}/\operatorname{BNE}$：`beq/bne rs1, rs2, simm12` ，比较 `rs1` 和 `rs2` 是否相等/不相等，如果相等/不相等的话跳转到地址 $\operatorname{PC+2\times simm12}$。
- $\operatorname{BLT}/\operatorname{BLTU}$：`blt/bltu rs1, rs2, simm12` ，有符号/无符号比较 `rs1` 和 `rs2` 的大小关系，如果 `rs1<rs2` 那么就跳转到地址 $\operatorname{PC+2\times simm12}$。
- $\operatorname{BGE}/\operatorname{BGEU}$：`bge/bgeu rs1, rs2, simm12` ，有符号/无符号比较 `rs1` 和 `rs2` 的大小关系，如果 `rs1>=rs2` 那么就跳转到地址 $\operatorname{PC+2\times simm12}$。

注意这里的 $\operatorname{simm12}$ 指的是按照指令格式直接拼接得到的立即数，事实上由于 **$\operatorname{B}$ 型指令可取的立即数必须是偶数**，所以我们实际上跳转时候的立即数需要左移一位（即乘 $2$）。

各个 $\operatorname{B}$ 型指令的指令格式如下图所示：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/53266692-dea9-4c12-89ee-bdd882409426/Untitled.png)

### U 型指令

如下的指令包含于 $\operatorname{U}$ 型指令：

- $\operatorname{LUI}$：`lui rd, uimm20` ，取左移 `12` 位后的 `20` 位立即数，赋值给 `rd` 。
    
    举例说明，`lui x5, 0x12345` ，含义为 `x5=0x12345000` 。
    
- $\operatorname{AUIPC}$：`auipc rd, uimm20` ，取左移 `12` 位后的 `20` 位立即数加到 $\operatorname{PC}$ 上，并将结果写入 `rd` 寄存器中。

各个 $\operatorname{U}$ 型指令的指令格式如下图所示：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/73422948-2f7c-4db7-9934-3070017186a6/Untitled.png)

### J 型指令

如下的指令包含于 $\operatorname{J}$ 型指令：

- $\operatorname{JAL}$：`jal rd, simm20` ，跳转到地址 `PC+simm20` ，并将跳转前的 $\operatorname{PC+4}$ 赋值到寄存器 `rd` 中。
    
    一般在函数调用过程中，通过 `x1` 寄存器来保存返回的地址，即 `rd` 。而对于仅仅是做跳转指令而并非函数调用的情况，一边通过指令 `jal x0, simm20` 来实现即可。
    

各个 $\operatorname{J}$ 型指令的指令格式如下图所示：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/940b0b68-be45-4f8d-b56e-7aaccff07078/Untitled.png)

## 计算机硬件对过程的支持

过程：一个根据给定参数执行特定任务的已存储的子程序。

$\operatorname{RISC-V}$ 软件为过程调用分配寄存器时遵循以下约定：

- $x_{10} \sim x_{17}$：八个参数寄存器，用于传递参数或返回值，**按照函数参数的顺序一一对应**。
- $x_1$：一个**返回地址寄存器**，用于返回到起始点。

程序计数器：也叫指令地址寄存器，包含程序中正在执行指令地址的寄存器，在 $\operatorname{RISC-V}$ 体系结构中缩写为 $\operatorname{PC}$。

$\operatorname{PC}$ 并不包含于 $32$ 个通用寄存器中，不包含于寄存器文件中，宽度与通用寄存器一样。

### 使用更多的寄存器

栈指针：指示栈中最新分配的地址的值，用于指示应该被换出的寄存器的位置，或者寄存器旧值存放的位置，在 $\operatorname{RISC-V}$ 中为寄存器 `x2` 或者 $\operatorname{sp}$。

栈按照每个被保存或恢复的寄存器**按双字进行调整**。

按照历史惯例，**栈按照从高到低的地址顺序增长**，也就是可以通过**减小栈指针将值压栈**，通过**增加栈指针缩小栈，从而弹出栈中的值**。

在过程调用中会使用到寄存器，为了避免保存和恢复一个其值从未被使用过的寄存器（通常临时寄存器），$\operatorname{RISC-V}$ 软件将 $19$ 个寄存器分成两组：

- $x_5 \sim x_7$ 以及 $x_{28} \sim x_{31}$：临时寄存器，在过程调用中不被**被调用者**保存。
- $x_8 \sim x_9$ 以及 $x_{18} \sim x_{27}$：保存寄存器，在过程调用中**必须被保存**。（一旦使用，由被调用者保存并恢复）

### 嵌套过程

在嵌套过程中（被调用者调用其他过程），**调用者**要将所有**调用后还需要的参数寄存器（$x_{10} \sim x_{17}$）或临时寄存器（$x_5\sim x_7$ 和 $x_{28}\sim x_{31}$）**压栈，**被调用者**要将**返回地址寄存器 $x_1$ 和被调用者使用的保存寄存器（$x_8\sim x_9$ 和 $x_{18}\sim x_{27}$）**压栈，调整栈指针 $\operatorname{sp}$ 以计算压栈寄存器的数量，返回时从存储器中恢复寄存器并重新调整栈指针。

$\operatorname{C}$ 语言有两种存储方式：动态的和静态的，在**所有过程之外声明的 $\operatorname{C}$ 变量**以及**使用关键字 $\operatorname{static}$ 声明的所有变量**，都被认为是**静态的**。为了简化静态数据的访问，一些 $\operatorname{RISC-V}$ 编译器保留一个寄存器 `x3` 用作全局指针或 $\operatorname{gp}$。

全局指针：指向静态数据区的保存寄存器。

### 在栈中为新数据分配空间

过程帧：也称作活动记录。栈中包含过程所保存的寄存器和局部变量的段。

如果在过程中栈内没有局部变量，编译器将不设置和不回复帧指针以节省时间，通过稳定的帧指针可以更容易的引用变量。

帧指针：指向给定过程的局部变量和保存的寄存器地址的值。

一些 $\operatorname{RISC-V}$ 编译器使用**帧指针 `fp` 或者寄存器 `x8`** 来**指向过程帧的第一个双字**。

下图为过程调用之前、之中和之后栈的分配情况。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f4394e6e-64e7-403b-ba47-afb361ef888e/Untitled.png)

### 在堆中为新数据分配空间

除了**动态变量（对于过程局部有效）**之外，还需要为**静态变量**和**动态数据结构**分配内存空间，存放数组和链表这类数据结构的段通常称为**堆**，下图为程序和数据的 $\operatorname{RISC-V}$ 内存分配。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/17225e26-d773-4cf9-bdce-354c7f5c833d/Untitled.png)

这种分配允许**栈和堆相向而长**，从而随着这两个段的此消彼长达到内存的高效使用。

下图总结了 $\operatorname{RISC-V}$ 汇编语言的寄存器约定，这种约定使得**大多数过程**可以使用多达 $8$ 个参数寄存器、$12$ 个保留寄存器和 $7$ 个临时寄存器而**无需进入内存**。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/80c3c623-0a32-4aae-a1c4-6c6acfb9bc88/Untitled.png)

如果参数超过 $8$ 个，$\operatorname{RISC-V}$ 约定将栈中额外的参数放在帧指针的上方，过程期望前 $8$ 个参数在寄存器 $x_{10}$ 到 $x_{17}$ 中，其余参数在内存中，可通过帧指针寻址。

## 对大立即数的 RISC-V 编址和寻址

### 分支中的寻址

$\operatorname{PC}$ 相对寻址：一种寻址方式，它的地址是 $\operatorname{PC}$ 和指令中的常量之和。

### RISC-V 寻址模式总结

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3df3a958-1dbd-4eb5-be1f-a938c31fbe54/Untitled.png)

通过双指令序列 `lui` 和 `jalr` ，$\operatorname{RISC-V}$ 支持跳转到任何的 $32$ 位地址。

## 原子交换

```nasm
LOCK:
addi x12, x0, 1 // 设置变量 x12=1
again: lr.d x10, (x20) // 读取 (x20) 位置的锁变量
bne x10, x0, again // 如果目前被锁上了就继续读取
sc.d x11, x12, (x20) // 试图将 (x20) 位置的锁变量变为 1
bne x11, x0, again // 如果原子操作失败则继续操作
UNLOCK:
sd x0, 0(x20) // 解除 (x20) 位置的锁定
```

其中 $x_{10}$ 用于确认 $x_{20}$ 是否被上锁，$x_{11}$ 用于指示原子操作失败或成功，$x_{20}$ 是锁变量。

# 第三章 计算机的算术运算

## RISC-V 核心指令系统

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c4355b1f-4130-4b90-ba39-e21c3a29d047/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/360da431-7686-49f8-8d59-7dfcbac1d843/Untitled.png)

## 浮点运算

规格化：没有前导 $0$ 的浮点表示法。

### 浮点表示

尾数：该值通常在 $0$ 和 $1$ 之间，放置在尾数字段中。

指数：在浮点运算的数值表示系统中，放置在指数字段中的值。

通常来讲，浮点可以表示为：

$$
(-1)^{\operatorname{S}}\times \operatorname{F}\times 2^{\operatorname{E}}
$$

$\operatorname{S}$ 是符号位，$\operatorname{F}$ 是尾数字段中表示的值，$\operatorname{E}$ 是指数字段表示的值。

双精度：以 $64$ 位双字表示的浮点值。

双精度浮点数需要一个 $\operatorname{RISC-V}$ 双字才能表示。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4cc5e6b8-5b4e-4c32-979c-74803e980628/Untitled.png)

单精度：以 $32$ 位字表示的浮点值。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e05f4542-b9e5-4416-8bf8-3849fbd5f2da/Untitled.png)

$\operatorname{IEEE}754$ 浮点数的编码如下图所示：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c66496dc-3f69-4d5f-8ed4-ce1215a6e9df/Untitled.png)

对于规格化数，浮点数表示的值实际上是：

$$
(-1)^{\operatorname{S}}\times (1+有效位数)\times2^{(指数-偏移值)}
$$

其中单精度数的偏移值为 $127$，双精度数的偏移值为 $1023$。

### 浮点加减法

1. 将指数较**小**的数**向**指数较**大**的数**对阶**
2. 浮点数相加减
3. 浮点数**规格化**（移位操作，可能左移也可能右移）
4. 检测上溢或者下溢
5. 舍入（如果舍入的时候进位到了小数点前的位，需要重新开始执行第三步）

流程图如下所示：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/afbb55a3-4075-402b-b948-c0fb4438a8ef/Untitled.png)

### 浮点数乘法

1. 将指数相加，注意要**减去一个偏移值**
2. 有效数位部分进行相乘
3. 浮点数规格化
4. 检测上溢或者下溢
5. 舍入
6. 判断符号位

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7a87c682-f52c-483a-ac38-f64b1c17f228/Untitled.png)

### RISC-V 中的浮点指令

$\operatorname{RISC-V}$ 中添加了独立的浮点寄存器，称为 $\operatorname{f_0},\operatorname{f_1},...,\operatorname{f_{31}}$，浮点操作数和浮点汇编语言的图表如下所示：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1656c8ea-cf34-4a77-9c88-be4fdb3f061e/Untitled.png)

# 第四章 处理器

多选器：也叫数据选择器，根据控制信号从多个输入中进行选择。

## 逻辑设计的一般方法

组合逻辑单元：一个处理数据值的操作单元，输出仅依赖于输入，给定**相同的输入**，组合逻辑单元总是**产生相同的输出**。

状态单元：一个存储单元，有内部存储功能，如指令存储器、数据存储器以及寄存器。

一个状态单元**至少有两个输入和一个输出**，必须的输入是要**写入状态单元的数据值**和**决定何时写入数据值的时钟信号**，状态单元的**输出**提供了**在前一个时钟周期写入单元的数据值**。

### 时钟同步方法

时钟同步方法：用来确定数据相对于时钟何时稳定和有效的方法，**规定了信号可以读出和写入的时间**。

边沿触发的时钟：所有**状态的改变发生于时钟边沿**的机制。

控制信号：用来决定多选器选择或指示功能单元操作的信号。

如果状态单元在每个有效时钟边沿都进行写入，则可以忽略写控制信号。否则如果状态单元不是在每个时钟边沿都更新，那么它需要一个写控制信号，**时钟信号和写控制信号都是输入**，只有**边沿到来**并且**写控制信号都有效时**，**状态单元才改变状态**。

本章所有状态单元（包括存储器）都假定为上升沿触发。

**边沿触发**的时钟同步方法，支持状态单元**在同一个时钟周期内读和写**。

## 建立数据通路

数据通路单元：一个用来操作或保存处理器中数据的单元，包括组合逻辑单元和状态单元。

寄存器堆：包含一系列寄存器的状态单元，可通过所提供的寄存器号进行读写，包含 $32$ 个通用寄存器。

### 寄存器堆

寄存器堆总共需要**四个输入（三个寄存器编号和一个数据）**和**两个输出（两个数据）**，而**数据输入总线和两个数据输出总线均为 $64$ 位宽**。

下图为寄存器堆图示：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/372e9d0f-8b5f-41cd-89c3-84e08a79ed54/Untitled.png)

### 算术逻辑单元

由于 $\operatorname{RISC-V}$ 寄存器为 $64$ 位宽，因此需要一个 $64$ 位宽的 $\operatorname{ALU}$。

下图为完整的 $64$ 位 $\operatorname{ALU}$ 的原理图：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fb598e29-beab-4733-bbb4-12cea5eac7dc/Untitled.png)

一般在数据通路中，$\operatorname{ALU}$ 的符号表示为下图：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b9604b07-b886-467b-b18d-66b391acc679/Untitled.png)

- $\operatorname{Result}$：运算器单元得到的结果
- $\operatorname{Zero}$：比较 $a$ 和 $b$ 是否相等
- $\operatorname{Overflow}$：判断运算结果是否溢出
- $\operatorname{ALU~Operation}$：影响 $\operatorname{ALU}$ 操作

三条 $\operatorname{ALU}$ 控制线：

1. $\operatorname{Ainvert}$ 线
2. $\operatorname{Bnegate}$ 线
3. $\operatorname{Operation}$ 线

三条 $\operatorname{ALU}$ 控制线共同影响 $\operatorname{ALU}$ 操作，下图为三条控制线不同取值所对应的 $\operatorname{ALU}$ 功能。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5565f9cb-959b-4233-98ca-1241169a5129/Untitled.png)

### 数据存储单元

数据存储单元是一个**状态单元**，它有**地址输入**和**写数据输入**，以及**读取结果的单个输出**。**读、写信号相互独立**，但**仅有一个可以在任意给定的时钟上有效**。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/11c2315e-7b4e-4322-a8b1-dff9a353f13d/Untitled.png)

### 立即数生成单元

符号扩展：为增加数据的长度，将原数据的最高位复制到新数据多出来的高位。

立即数生成单元有一个 $**32$ 位指令的输入**，如果是**载入**、**存储**和**分支条件成立时的分支指令**，它**将指令中的一个 $12$ 位字段符号扩展为 $64$ 位结果输出**。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1e354b66-5246-4dd6-b981-59ce9c4e7fdf/Untitled.png)

对于 `beq` 等分支指令，指令体系结构说明了计算分支目标地址时，**将偏移量左移 $1$ 位**，如下图所示：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/49fe691a-01d1-437b-a932-68075acf74fd/Untitled.png)

### 建立一个简单的数据通路

为在两个不同指令之间共享数据通路单元，需要允许一个单元有多个输入，我们用**多路选择器**和**控制信号**在多个输入中进行选择。

## 一个简单的实现方案

### ALU 控制

对于**不同的指令类型**，$\operatorname{ALU}$ 需要执行**不同的功能**，这个**通过一个 $4$ 位的 $\operatorname{ALU}$ 输入控制信号进行控制**，控制信号可由一个小型控制单元产生，输入为指令的 $\operatorname{funct7}$ 和 $\operatorname{funct3}$ 字段以及 $2$ 位的 $\operatorname{ALUOp}$ 字段，下图说明了如果根据以上的输入来设置输入控制信号，其中 $**\operatorname{ALUOp}$ 由主控制单元来生成**。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/036046e4-56a4-4c1a-a0e7-da186dabfe96/Untitled.png)

上图的第一列是指令，它决定了 $\operatorname{ALUOp}$ 位。根据观察可以发现，**当 $\operatorname{ALUOp}$ 为 $00_2$ 或 $01_2$ 时，$\operatorname{ALU}$ 操作并不依赖于 $\operatorname{funct7}$ 和 $\operatorname{funct3}$ 字段**，而**当 $\operatorname{ALUOp}$ 为 $10_2$ 时，根据 $\operatorname{funct7}$ 和 $\operatorname{funct3}$ 字段来设置 $\operatorname{ALU}$ 的输入控制信号**。

而对于上表的实现，我们可以列出使 $\operatorname{ALU}$ 控制信号有值的部分真值表，然后对其优化并转化为门电路。

无关项：逻辑函数的一个元素，其输入无论取何值都不影响输出。

### 设计主控制单元

操作码：表示指令操作和格式的字段。

下图为常用的四种类型的指令的指令格式：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d0768bea-8ee0-49d1-aa53-fe9134a7e2de/Untitled.png)

下图给出了 $6$ 根 $1$ 位控制线和 $2$ 位 $\operatorname{ALUOp}$ 控制信号的具体含义：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3bf484c2-cdec-4275-8e4d-b8459b1e2984/Untitled.png)

下图为带有控制单元的简单数据通路：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bd706e52-1de1-4a2c-aa49-a06c7404cb77/Untitled.png)

控制单元的输入是指令的 $7$ 位操作码字段，输出包含**两个控制多路选择器的 $1$ 位信号（$\operatorname{ALUSrc}$ 和 $\operatorname{MemtoReg}$）**、**三个控制寄存器堆和数据存储器读写的信号（$\operatorname{RegWrite}$、$\operatorname{MemRead}$ 和 $\operatorname{MemWrite}$）**、**一个确定是否分支的 $1$ 位信号（$\operatorname{Branch}$）**和**一个 $\operatorname{ALU}$ 的 $2$ 位控制信号（$\operatorname{ALUOp}$）**，其中**分支控制信号与 $\operatorname{ALU}$ 的零输出信号一起送入一个与门，其输出 $\operatorname{PCSrc}$ 控制下一个 $\operatorname{PC}$ 的选择**，由于是衍生信号，所以在图中没有标出。

下图为几个基本的指令格式对应的所有信号的输出：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5914221e-8bff-432c-94a9-a696790baa6c/Untitled.png)

注意当 $\operatorname{RegWrite}$ 信号为 $0$ 的时候，$\operatorname{MemtoReg}$ 字段无关紧要：因为寄存器没有被写入，寄存器写端口的数据值不被使用，所以最后两行中的 $\operatorname{MemtoReg}$ 值由于不被关心而被 $\operatorname{X}$ 取代。

### 数据通路操作

- $\operatorname{R}$ 型指令的数据通路操作，例如 `add x1, x2, x3` ，按照以下步骤进行：
    1. 取出指令，$\operatorname{PC}$ 自增。
    2. 从寄存器堆中读出两个寄存器 `x2` 和 `x3` ，同时主控制单元在此步骤计算控制信号。
    3. 根据部分操作码确定 $\operatorname{ALU}$ 的功能，对从寄存器堆读出的数据进行操作。
    4. 将 $\operatorname{ALU}$ 的结果写入寄存器堆中的目标寄存器 `x1` 。
    
    下图为执行 $\operatorname{R}$ 型指令时数据通路的操作：
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6448b345-f8d8-4ea1-9ae2-87027904f04e/Untitled.png)
    
- $\operatorname{load}$ 指令的数据通路操作，例如 `ld x1, offset(x2)` ，按照以下步骤进行：
    1. 取出指令，$\operatorname{PC}$ 自增。
    2. 从寄存器堆读出寄存器 `x2` 的值。
    3. $\operatorname{ALU}$ 将寄存器堆中读出的值和符号扩展后的指令中的 $12$ 位（偏移量）相加。
    4. 将 $\operatorname{ALU}$ 的结果用作数据存储器的地址。
    5. 将存储器读出的数据写入寄存器堆 `x1` 。
    
    下图为执行 $\operatorname{load}$ 型指令时数据通路的操作：
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d60493e6-df6a-46e4-af80-b4a06d1479fd/Untitled.png)
    
- $\operatorname{store}$ 指令的数据通路操作与 $\operatorname{load}$ 指令类似，主要区别在于**存储器控制将指明操作是写而不是读**，**读出的第二个寄存器的值将作为要存储的数据**，并且**不存在将数据存储器的内容写入寄存器堆的操作**。
- $\operatorname{beq}$ 指令的数据通路操作，例如 `beq x1, x2, offset` ，按照以下步骤进行：
    1. 取出指令，$\operatorname{PC}$ 自增。
    2. 从寄存器中读出两个寄存器 `x1` 和 `x2` 。
    3. $\operatorname{ALU}$ 将从寄存器堆读出的两数相减。$\operatorname{PC}$ 与左移一位、符号扩展的指令中的 $12$ 位（偏移）相加，结果是分支目标地址。
    4. $\operatorname{ALU}$ 的零输出决定将哪个加法器的结果写入 $\operatorname{PC}$。
    
    下图为执行 $\operatorname{beq}$ 型指令时数据通路的操作：
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/adbed237-7b4d-48ed-801e-340a123f5ee3/Untitled.png)
    

## 流水线概述

流水线：一种实现多条指令重叠执行的技术，与生产流水线类似。

$\operatorname{RISC-V}$ 指令执行通常包含五个步骤：

1. $\operatorname{IF}$：从存储器中取出指令
2. $\operatorname{ID}$：读寄存器并译码指令
3. $\operatorname{EX}$：执行操作或计算地址
4. $\operatorname{MEM}$：访问数据存储器中的操作数（如有必要）
5. $\operatorname{WB}$：将结果写入寄存器（如有必要）

下图为单周期的指令执行和流水线的指令执行，在这种情况下，我们看到指令的平均执行时间从 $\operatorname{800ps}$ 降低到 $\operatorname{200ps}$，速度提高了 $4$ 倍。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d510b571-15c7-47ca-bb06-31e5166e0ba6/Untitled.png)

事实上，在本例中性能并没有达到所预期的四倍，这是因为指令的数量不够多，当指令的数目足够多的时候，真是程序执行时间的比值接近于指令执行时间的比值，**性能提升的倍数**逼近于**流水线级数**。

**流水线技术**通过**提高指令吞吐率来提高性能**，而**不是减少单个指令的执行时间**。

### 流水线冒险

冒险：流水线中有一种情况，在下一个时钟周期中下一条指令无法执行。

流水线停顿：也称为气泡，为了解决冒险而实施的一种阻塞。

- 结构冒险
    
    结构冒险：因缺乏硬件支持而导致指令不能在预定的时钟周期内执行的情况。
    
    假设流水线结构只有一个而不是两个存储器，比如如果有四条指令，若第一条指令**从存储器取数据**的同时第四条指令**从同一存储器取指令**，流水线就会发生结构冒险。
    
    **存数据与取指令结构冒险**的解决方法：
    
    1. 有不同的存储器，分为指令寄存器和数据寄存器
    2. 打气泡
    
    比如如果有四条指令，则会发生第一条指令**从寄存器写数据**的同时第四条指令**从寄存器读数据**，流水线就会发生结构冒险。
    
    **寄存器读写结构冒险**的解决方法：
    
    1. 寄存器读写较快，可以让前半个时钟周期写，后半个时钟周期读。
- 数据冒险
    
    数据冒险：因无法提供指令执行所需数据而导致指令不能在预期的时钟周期内执行。
    
    比如下述的两条指令，这一数据冒险会严重的阻碍流水线，直到 `add` 的第五个阶段写结果才能继续运行下一条指令。
    
    ```nasm
    add x19, x0, x1
    sub x2, x19, x3
    ```
    
    前递或旁路：一种解决数据冒险的方法，**提前从内部缓冲中取到数据**，而**不是等到数据到达程序员可见的寄存器或存储器**。
    
    一般通过前递解决的数据冒险如下图所示：
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2beed0ca-c248-45df-8fd7-ec2624308a81/Untitled.png)
    
    但是，有这样的一类特殊的数据冒险，我们一般称为**载入-使用型数据冒险**：
    
    ```nasm
    ld x1, 0(x2)
    sub x4, x1, x5
    ```
    
    载入-使用型数据冒险：一种特定形式的数据冒险，指当载入指令要取的数据还没取回时，其他指令就需要该数据的情况。
    
    即仅当目标阶段在时间上晚于源阶段时，前递路径才有效。
    
    而对于这一类数据冒险，我们一般使用**硬件检测和停顿**，或由**软件对代码进行重新排序**以尽量避免载入-使用型流水线停顿。
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e4f3c64b-5a96-4e41-9faf-3dc1bd5d15c0/Untitled.png)
    
- 控制冒险
    
    控制冒险：也称为分支冒险，由于取到的指令并不是所需要的，或者指令地址的流向不是流水线所预期的，导致正确的指令无法在正确的时钟周期内执行。
    
    有两种办法可以解决洗衣问题中的控制冒险：
    
    1. 停顿
        
        我们假设加入了足够多的额外硬件，使得在流水线第二个阶段能够完成测试寄存器、计算分支目标地址和更新 $\operatorname{PC}$。
        
        通过这些硬件资源，包含条件分支指令的流水线如下图所示，这里每**遇到条件分支指令就停顿以避免控制冒险**。
        
        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/57e97be2-8592-4ada-85fe-ad6fc20f9ebf/Untitled.png)
        
        对于较长的流水线而言，通常无法在第二阶段解决分支指令的问题，那么就会导致更严重的速度下降。
        
    2. 预测
        
        分支预测：一种解决分支冒险的办法。它预测分支的结果并沿预测方向执行，而不是等分支结果确定后才开始执行。
        
        在计算机程序中，循环底部是条件分支指令，并会跳转回到循环的顶部。由于它们很可能发生分支并且向回跳转，所以可以预测发生分支并跳到靠前的地址处。
        
        但是这种方法依赖于不变的行为，没有考虑到特定分支指令的特点，而**动态硬件预测器**根据每个条件分支指令的行为进行预测，并**在程序生命周期内可能改变条件分支的预测结果**。
        
        当**预测错误**时，流水线控制必须**确保预测错误的条件分支指令之后的指令执行不会生效**，并且必须**从正确的分支地址处重新启动流水线**。
        

## 流水线数据通路和控制

下图为单周期数据通路划分成五个部分的五级流水线的数据通路。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/53b34ef9-9fea-4c4c-b4da-a0b2f01b5032/Untitled.png)

指令执行的每一步都从左至右地映射到数据通路中，唯一例外是 **$\operatorname{PC}$ 更新**与**写回寄存器堆的步骤**。

为了保留在其他四个阶段中指令的值，必须把从指令寄存器中读取的数据保存在寄存器中，类似的理由适用于每个流水线阶段，所以我们**必须将寄存器放置在每个阶段之间的分隔线上**，如下图所示：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c6d730c7-a9b1-4177-a6c2-4d65fd5b6653/Untitled.png)

接下来我们以 `ld` 指令为例，展示其在流水线中的五个阶段：

1. 取指：使用 $\operatorname{PC}$ 中的地址从存储器中读取指令，然后将指令放入 $\operatorname{IF/ID}$ 流水线寄存器中。$\operatorname{PC}$ 中的地址自增 $4$，然后写回 $\operatorname{PC}$，以为下一时钟周期做准备，这个 $\operatorname{PC}$ 值也保存在 $\operatorname{IF/ID}$ 流水线寄存器中，以备后续的指令使用（例如 `beq`）。
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2cd83420-a82b-4fd5-8e28-1e4a14ba8818/Untitled.png)
    
2. 指令译码和读寄存器堆：$\operatorname{IF/ID}$ 流水线寄存器的指令部分提供一个 $64$ 位符号扩展的立即数字段，以及两个将要读取的寄存器编号。所有这三个值都与 $\operatorname{PC}$ 地址一起存储在 $\operatorname{ID/EX}$ 流水线寄存器中，这里我们再次向右传递在之后的时钟周期内指令可能用到的所有信息。
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/517bf8a3-03c3-4923-88c6-d95f04e1d59b/Untitled.png)
    
3. 执行或地址计算：加载指令从 $\operatorname{ID/EX}$ 流水线寄存器中读取一个寄存器的值和一个符号扩展的立即数，并且使用 $\operatorname{ALU}$ 部件将它们相加，它们的和被存储在 $\operatorname{EX/MEM}$ 流水线寄存器中。
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c433655f-8abe-477d-8ab2-d938adebb988/Untitled.png)
    
4. 存储器访问：加载指令使用来自 $\operatorname{EX/MEM}$ 流水线寄存器中的地址读取数据存储器，并将数据存入 $\operatorname{MEM/WB}$ 流水线寄存器中。
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/48cfc721-a8e3-4163-999a-3c39575f6f09/Untitled.png)
    
5. 从 $\operatorname{MEM/WB}$ 流水线寄存器中读取数据，并将它写入图中间的寄存器堆中。

上图中存在一个错误，在最后 $\operatorname{WB}$ 阶段的时候，改写的寄存器号是由 $\operatorname{IF/ID}$ 提供的，而这并非是原 `ld` 指令写回的寄存器号，所以我们做如下的修改。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c74e1ebe-a8f8-4734-8c5d-33671a7f76c1/Untitled.png)

### 流水线控制

为了详细说明流水线的控制，我们要在每个流水线阶段上设置值。由于每条控制线都只与一个流水线阶段中的功能部件相关，因此我们可以根据流水线阶段将控制线也划分为五组。

1. 取指：读指令寄存器和写 $\operatorname{PC}$ 的控制信号总是有效的，因此本阶段没有特别的控制内容。
2. 指令译码/读寄存器堆：在 $\operatorname{RISC-V}$ 指令格式中两个源寄存器总是位于相同的位置，因此本阶段没有特别的控制内容。
3. 执行/地址计算：要设置的信号是 $\operatorname{ALUOp}$ 和 $\operatorname{ALUSrc}$，分别用于判断 $\operatorname{ALU}$ 的操作和判断第二个 $\operatorname{ALU}$ 操作数是来自于 $\operatorname{Read~Data~2}$ 还是来自于立即数扩展。
4. 存储器访问：要设置的信号是 $\operatorname{Branch}$、$\operatorname{MemRead}$ 和 $\operatorname{MemWrite}$，这些信号分别由相等则分支、加载和存储指令进行设置。还有 $\operatorname{PCSrc}$，除非控制电路标示这是一条分支指令并且 $\operatorname{ALU}$ 输出为 $0$，否则将选择线性地址的下一条指令作为 $\operatorname{PCSrc}$ 信号。
5. 写回：要设置的信号是 $\operatorname{MemtoReg}$ 和 $\operatorname{RegWrite}$，$\operatorname{MemtoReg}$ 决定是将 $\operatorname{ALU}$ 结果还是将存储器值发送到寄存器堆中，$\operatorname{RegWrite}$ 写入所选值。

根据上述的过程，我们给出下图的流水线数据通路，将控制信号连接到流水线寄存器的控制部分，**在译码阶段创建之后三个阶段的控制值**，然后将其**置于 $\operatorname{ID/EX}$ 流水线寄存器中**，流水线**每个阶段使用相应的控制线**，**其余的控制线被传递到下一个流水线阶段中**，大致如下图所示：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/194793ed-c689-44df-85b6-e993fb826b75/Untitled.png)

## 数据冒险：前递与停顿

在前面的内容中，我们讨论过两类不同的数据冒险，这里，我们首先详细的讨论下第一种可以通过前推解决的数据冒险，我们还是可以将他们分为两类：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/af318d26-5feb-4db3-92e6-2f72a85f5b02/Untitled.png)

- $\operatorname{EX}$ 冒险（上图中第一条指令与第二条指令产生的数据冒险）：
    
    判断方法：通过判断 $**\operatorname{ID/EX}$ 流水线寄存器中的源寄存器号**和 $**\operatorname{EX/MEM}$ 流水线寄存器中的目的寄存器号**是否相等，注意还要判断不为 $0$ 号寄存器并且指令需要写回寄存器，即：
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/326b6d92-b7e1-4231-a403-b6a739653d61/Untitled.png)
    
    解决这一类的冒险，我们只需要将 $\operatorname{ALU}$ 的操作数替换为来自上一个 $\operatorname{ALU}$ 计算结果的前递即可。
    
- $\operatorname{MEM}$ 冒险（上图中第一条指令与第三条指令产生的数据冒险）：
    
    判断方法：通过判断 $\operatorname{ID/EX}$ **流水线寄存器中的源寄存器号**和 $**\operatorname{MEM/WB}$ 流水线寄存器中的目的寄存器号**是否相等，剩余条件与 $\operatorname{EX}$ 冒险相同，即：
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/32205e33-8c90-4cb7-94e4-c2823780c0a3/Untitled.png)
    
    解决这一类的冒险，我们只需要将 $\operatorname{ALU}$ 的操作数替换为来自数据储存器或者更早的 $\operatorname{ALU}$ 计算结果的前递即可。
    

~~不难发现~~两种冒险的判断方法会产生冲突，例如如下的情况：

```nasm
add x1, x1, x2
add x1, x1, x3
add x1, x1, x4
```

这时候我们就需要考虑优先级的问题，所以我们修正 $\operatorname{MEM}$ 冒险的判断条件：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e531adb2-7413-4a21-8362-4c41ea479147/Untitled.png)

下图为各个多选器的控制值：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/62331f94-78c6-48d7-b9f4-2cd24fe52ff8/Untitled.png)

最后我们将前递单元加入到我们之前的流水线数据通路中，$\operatorname{ALU}$ 左上的多选器对应的是 $\operatorname{ForwardA}$，左下对应的是 $\operatorname{ForwardB}$：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/996a01d4-1cf4-4a88-a885-9f385b324494/Untitled.png)

而正如我们之前提到的那样，有一类叫**载入-使用型**的数据冒险并不能通过上述的前推的方法来解决，针对于这样的一类冒险，我们只能通过阻塞流水线（加入空指令）的方法来解决，如下图所示：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f9d34523-e08a-4893-b572-e69a9e1a5f1c/Untitled.png)

空指令：一种不执行任何操作、不改变任何状态的指令。

我们这里直接给出检测这样一类冒险的判断方法：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/525b7095-3477-4c4a-b177-a94d7c3b8b7a/Untitled.png)

检测的这样一类冒险的时候，我们只要加入一个冒险检测单元，如果检测到就将 $\operatorname{ID/EX}$ 流水线寄存器的值清空，并重置 $\operatorname{PCWrite}$ 和 $\operatorname{IF/IDWrite}$ 即可，如下图所示：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/24477849-aadf-458c-9f83-2f58b52c4079/Untitled.png)

## 控制冒险

### 假设分支不发生

正如之前提到的那样，阻塞流水线直到分支完成的策略非常耗时，一种提升分支阻塞效率的方法就是**预测分支不发生并继续执行下面的指令**，一旦分支指令发生就丢弃掉已经被读取和译码的指令，流水线继续从分支处开始执行。

对于丢弃指令，我们只要**将初始控制值变为 $0$** 即可，就如上面载入-使用型指令的解决策略，但是这里我们需要**等到分支指令到达 $\operatorname{MEM}$ 阶段的时候才能判断**，意味着我们需要**同时丢弃目前 $\operatorname{IF}$、$\operatorname{ID}$ 和 $\operatorname{EX}$ 阶段的三条指令**。

### 缩短分支延迟

为了减少发生分支时所需的代价，我们需要将两个操作提早发生：**计算分支目标地址**和**判断分支条件**。

- 计算分支目标地址：将分支地址提前进行计算是相对简单的，由于我们在 $\operatorname{IF/ID}$ 流水线寄存器中已经得到了 $\operatorname{PC}$ 值和立即数字段，这样我们只要将分支地址的计算从 $\operatorname{EX}$ 阶段提前到 $\operatorname{ID}$ 阶段即可。
- 判断分支条件：这部分比较困难，对于相等时跳转指令，需要在 $\operatorname{ID}$ 阶段比较两个寄存器中的值是否相等。将分支检测移动到 $\operatorname{ID}$ 阶段还需要额外的前递和冒险检测硬件，因为我们还需要保证在优化后依然正确（考虑优化后可能产生的数据冒险以及对于前递的影响），具体看书。

同时，为了清除 $\operatorname{IF}$ 阶段的指令，我们还需要增加一条 $\operatorname{IF.Flush}$ 的控制线，将 $\operatorname{IF/ID}$ 流水线寄存器的指令字段设置为 $0$。

例：

```nasm
36 sub x10, x4, x8
40 beq x1, x3, 16 // PC-relative branch to 40+16*2=72
44 and x12, x2, x5
48 or x13, x2, x6
52 add x14, x4, x2
56 sub x15, x6, x7
...
72 ld x4, 50(x7)
```

下图分别展示了条件分支是否发生的流水线情况。

不发生跳转：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5cf75b58-566f-42bd-aaec-2e08b39fe57c/Untitled.png)

发生跳转：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4a84debc-19ea-4542-88aa-5ccad351d233/Untitled.png)

### 动态分支预测

动态分支预测：在程序运行时使用运行信息进行分支预测。

分支预测缓存：也称分支历史表，一块按照分支指令的低位地址定位的小容量存储器，包含一个或多个比特以表明一个分支最近是否发生了跳转。

- 一位预测：对于预测的指令，如果预测发生了错误就将预测位置为相反值。
- 二位预测：如下图所示
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c13b91ad-70ac-4861-9c35-4111d7b5030c/Untitled.png)
    
    关于下图的实现，我们可以考虑将 $2$ 位预测位编码到四个状态上，该预测器在**分支跳转时加 $1$**，在**分支不跳转时减 $1$**，并且**使用表示范围的中位数作为预测分值跳转与不跳转之间的分界点**。
    
    注意：虽然分支预测器可以告知我们条件分支是否会发生跳转，但是我们仍然需要对分支目标地址进行计算。
    

相关预测器：一种组合了特殊分支指令的局部行为和最近执行的一些分支指令的全局行为信息的分支预测器。

锦标赛预测器：一个对于每个分支具有多种预测的分支预测器，其具有一种选择机制，该机制选择对于给定分支选择哪个最佳的预测器作为预测结果。

## 流水线总结

下图为本章最终的数据通路和控制图：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2bdc74da-8d36-4de6-b9e3-eb774a6c0a02/Untitled.png)

## 例外

下图为不同例外来源的事件在 $\operatorname{RISC-V}$ 中的表示：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c00ac87c-42a7-47ed-8144-0ad9b0023fde/Untitled.png)

### RISC-V 体系结构中如何处理例外

1. 首先检测例外。
2. 保存相关的信息：
    
    **例外指令的地址（处理完例外后的返回地址）**保存在 **$\operatorname{SEPC}$ 寄存器（系统例外程序计数器）**中。
    
    **例外发生的原因**保存在 **$\operatorname{SCAUSE}$ 寄存器（系统例外原因寄存器）**中。
    
3. 将处理器控制权转交给操作系统，操作系统进行例外的处理。
4. 返回。

向量式例外（中断）：一种中断处理机制，这种方法用基址寄存器加上例外原因（作为偏移）作为目标地址来完成控制流转换。

$\operatorname{RISC-V}$ 没有利用向量式例外的处理机制，而是通过添加一些额外寄存器和控制信号，并稍微拓展控制逻辑，比如添加了如下的两个寄存器：

$\operatorname{SEPC}$：$64$ 位寄存器，用来保存引起例外的指令的地址。（该寄存器在向量式例外中也需要使用）

$\operatorname{SCAUSE}$：用来记录例外原因的寄存器。

$\operatorname{RISC-V}$ 中使用统一入口的方式实现例外处理，设置该地址为 $0000~0000~\operatorname{1C09}~0000_{16}$（一个固定的地址）。

### 流水线实现中的例外

1. 停止指令执行：**将取指阶段的指令变为空操作** $\operatorname{nop}$。
2. **清空流水线中的指令**，可以参考处理分支预测错误时，不同的是，例外会引起系统状态的变化：
    - 对于进入译码阶段的指令，增加新逻辑控制译码阶段的多选器使输出为 $0$，流水线停顿。添加一个新的控制信号 $\operatorname{ID.Flush}$，与来自冒险检测单元的 $\operatorname{stall}$ 信号进行或操作，使用该信号对于进入译码阶段的指令进行清除。
    - 对于进入执行阶段的指令，使用一个新的控制信号 $\operatorname{EX.Flush}$，使得多选器输出为 $0$，我们再为 $\operatorname{PC}$ 新增一个新的输入，保证能将例外入口的地址传给 $\operatorname{PC}$。
3. **将例外指令的地址写入 $\operatorname{SEPC}$，将例外的原因写入 $\operatorname{SCAUSE}$**。
4. **跳转到例外入口**。

例外处理的数据通路和控制信号如下图所示：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3ecf0491-85c2-460f-a597-fc3a3fa7491e/Untitled.png)

# 第五章 存储器

## 引言

时间局部性：如果某个数据项被访问，那么在不就的将来它很可能再次被访问。

空间局部性：如果某个数据项被访问，那么与它地址相邻的数据项可能很快也将被访问。

存储层次结构：多级存储采用的结构，即与处理器的距离越远，存储的容量越大，但访问速度越慢。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1eea3d9b-d835-4c86-9d0f-e5f635cc873d/Untitled.png)

层次化存储可以由不同的层次组成，但是**数据只能在相邻两个层次之间进行复制**。

在相邻两个层次之间进行信息交换的最小单元称为**块**或**行**，通常，我们**在相邻层次之间进行拷贝**的时候，都是**传输一个完整的块**。

块或行：在缓存中存储信息的最小单位。

命中率：在访问某个存储层次时命中的次数占访问总次数的比例。

失效率：在访问某个存储层次时失效的次数占访问总次数的比例。

命中时间：访问某个存储层次所需的时间，**包括判断命中或失效的时间**。

失效损失：将数据块从下层存储复制至某层所需的时间，包括**数据块的访问时间**、**传输时间**、**写入目标层时间**和**将数据块返回给请求者的时间**。

在大多数系统中，层次化存储是真实存在的。这意味着数据只有先在第 $i+1$ 层出现，才能在第 $i$ 层出现。

## 存储技术

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1fc500c0-c43b-4dca-aed5-cdabae8da670/Untitled.png)

### 磁盘

磁道：磁盘表面上千同心圆中的一个。

扇区：磁盘磁道上的一段，扇区是读写磁盘信息的最小单位。

寻道：将读写头定位到磁盘上正确的磁道上方的过程。

磁盘的存储顺序：**自上而下**的，**先正面后反面**的。

操作系统通过**三步**完成对于磁盘的数据访问（访问时间即为三者之和）：

- 寻道时间：将磁头移动到所需磁道上方的时间，一般会取**平均寻道时间**（一个固定值）。
- 旋转延时：也称旋转延迟，即**磁盘上所需扇区旋转到读写磁头下的时间**，**通常假设为旋转半周的时间（平均旋转延时）**。
    
    平均旋转延时的计算方式，假设磁盘的转速为 $5400$ 转/分钟：
    
    $$
    \begin{align*} 平均旋转延时 &= \frac{0.5转}{5400（转/分钟）} \\& = \frac{0.5转}{5400（转/分钟）/60（秒/分钟）} \\ &=0.0056秒 \\ &=5.6毫秒 \end{align*}
    $$
    
- 传输时间：即传输数据块的时间，通过**访问的数据的总大小**和**传输速率**可以计算出来。

## Cache 基础

**注意考试的时候只要考虑 $\operatorname{tag},\operatorname{valid},\operatorname{data}$ 即可。**

### 直接映射

直接映射 $\operatorname{cache}$：一种 $\operatorname{cache}$ 结构，其中每个存储地址都映射到 $\operatorname{cache}$ 的确定位置。

一般通过下列方法找到对应的数据块：

$$
（块地址）\operatorname{mod}（\operatorname{cache}中的数据块数量）
$$

如果 $\operatorname{cache}$ 的块数是 $2$ 的幂，则取模运算很简单，只需要取地址的最低若干位即可，例如下图一个 $8$ 个字的直接映射 $\operatorname{cache}$：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/331c8547-bc63-42d0-b4d8-6606cfda885c/Untitled.png)

地址 $\operatorname{X}$ 对应的 $\operatorname{cache}$ 的位置为 $\operatorname{X~mod~8}$，也就是说，低 $3$ 位都被用来作为 $\operatorname{index}$。

标签：存储层次中的表项位，用来确定 $\operatorname{cache}$ 中的数据块是否是所需的数据块。

有效位：存储层次中的表项位，用来表示该层次的对应数据块中是否保存了有效数据。

通过添加有效位，可以**解决启动时 $\operatorname{cache}$ 中留存的无效数据的问题**以及**对于某些空的表项内容可以仅通过一位来判断不合法**。

### Cache 访问

对于一个容量为 $1024$ 个单字（$4~\operatorname{KiB}$）的 $\operatorname{cache}$，我们在本章中假设使用 $64$ 位地址，由于 $\operatorname{cache}$ 的容量为 $2^{10}$ 单字，而每个数据块的大小为单字，所以我们使用 $10$ 位地址来索引 $\operatorname{cache}$，由于一个单字为 $4$ 字节 $\operatorname{Byte}$（$1\operatorname{Byte}=8\operatorname{bits}$），需要 $2$ 位的 $\operatorname{Byte~offset}$ 用于索引字节，则剩余的 $64-10-2=52$ 位与标签进行比较，如果索引到的数据块的标签和地址的高 $52$ 位相等，同时对应的有效位有效，则该访存请求在 $\operatorname{cache}$ 中命中。

上面例举的 $\operatorname{cache}$ 的图示如下所示：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9052db42-1554-4fa3-b5ac-43d59f3154f3/Untitled.png)

上述的 $\operatorname{cache}$ 是一种特殊情况，对于一般的 $\operatorname{cache}$，我们对于一个索引的数据块可能存放着若干个字，这时我们就需要一个块偏移（$\operatorname{Block~Offset}$）来在块内进行寻址，如下图所示：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/167a7f78-7598-4598-8e7f-1fac9314d108/Untitled.png)

上图为一个 $32$ 位地址的处理器，$\operatorname{cache}$ 包含 $256$ 个索引地址，每个索引位置的数据块包含 $16$ 个字，其中 $4$ 位（$2\sim 5$ 位）用来在数据块中选择所需的字，则 $\operatorname{tag}$ 字段为 $32-8-4-2=18$ 位。

根据上面的例子，我们总结下与 $\operatorname{cache}$ 容量有关的问题，这里再举个别的例子进行说明，对于如下情况的 $\operatorname{cache}$：

- $64$ 位地址
- 直接映射 $\operatorname{cache}$
- $\operatorname{cache}$ 共有 $2^n$ 个数据块，因此索引字段 $\operatorname{Index}$ 为 $n$ 位
- 数据块包含 $2^m$ 个单字，因此在单个数据块中使用 $m$ 位 $\operatorname{Block~Offset}$ 来索引单字，使用最低的 $2$ 位 $\operatorname{Byte~Offset}$ 来索引字节

则我们可以计算标签字段的大小为：

$$
64-(n+m+2)
$$

那么该直接映射 $\operatorname{cache}$ 的总容量为：

$$
2^n\times（单个数据块容量+标签字段大小+有效位大小）
$$

单个数据块容量为 $2^m$ 个单字（$2^{m+5}$ 位），使用 $1$ 位来表示有效位，因此上述的 $\operatorname{cache}$ 的容量大小为：

$$
2^n\times(2^m\times32+(64-n-m-2)+1)
$$

虽然这是 $\operatorname{cache}$ 的真实容量，但是 $\operatorname{cache}$ 的命名规范中一般只考虑数据的大小，并不考虑标签和有效位的大小，所以**本节最初例举**的 $\operatorname{cache}$ 被称为 $4\operatorname{KiB}$ $\operatorname{cache}$。

### 处理 Cache 失效

$\operatorname{cache}$ 失效：由于所需数据不在 $\operatorname{cache}$ 中，对 $\operatorname{cache}$ 发出的数据请求不能被响应。

$\operatorname{cache}$ 的失效处理与两部分协同工作：一部分是**处理器的控制单元**，另一部分是**单独的控制器**，**用来初始化内存访问和重填 $\operatorname{cache}$**。

$**\operatorname{cache}$ 的失效处理会引发流水线的停顿**，这与例外或者中断处理不同，**例外和中断处理需要保存所有寄存器的状态**，而 **$\operatorname{cache}$ 失效将会停顿整个处理器来等待内存返回数据**，特别是**冻结临时寄存器和程序员可见的寄存器的内容**。

乱序执行的处理器在等待 $\operatorname{cache}$ 失效处理时允许继续执行指令，不过本节的按序处理器都假设在 $\operatorname{cache}$ 失效时停顿流水线。

处理**指令 $\operatorname{cache}$ 失效**可以按照如下的步骤：

1. 将 $\operatorname{PC}$ 的原始值（当前 $\operatorname{PC}-4$，由于失效指令目前处于 $\operatorname{ID}$ 阶段）发送到内存。
2. 对主存进行读操作，等待主存完成本次访问。
3. 写 $\operatorname{cache}$ 表项，将内存获得的数据写入到该表项的数据部分，将地址的高位（来自于 $\operatorname{ALU}$）写入标签字段，并将有效位变为有效。
4. 重启指令执行。这将会重新取指，本次取指将会在指令 $\operatorname{cache}$ 中命中。

**处理数据 $\operatorname{cache}$ 失效的方法与处理指令 $\operatorname{cache}$ 失效的方法本质上是相同的，一旦失效，简单地暂停处理器，直到内存返回数据。**

### 处理写操作

以存储指令进行举例，如果我们只把数据写入数据 $\operatorname{cache}$（不改变主存），那么完成 $\operatorname{cache}$ 的操作后，主存中的数据将与 $\operatorname{cache}$ 中的数据不同，为了解决这个问题，有如下的两种策略：

- 写穿透法/写直达法：为了保持 $\operatorname{cache}$ 和主存的一致性，我们**总是将数据写回主存和 $\operatorname{cache}$**。
    
    虽然以上的策略能简单的处理写操作，但是性能不佳，解决这个问题的方法之一是使用**写缓冲**。
    
    写缓冲：一个保存等待写入主存的数据的队列。
    
    写缓冲中保存着等待写回主存的数据，数据写入 $\operatorname{cache}$ 的同时也写入写缓冲中，之后处理器继续执行，当写入主存的操作完成后，写缓冲中的表项将被释放。如果写缓冲满了，处理器就必须停顿流水线直到写缓冲中出现空闲表项。
    
- 写返回法：处理写操作时，只更新 $\operatorname{cache}$ 中对应数据块的数值，当该数据块被替换时，再将更新后的数据块写入下一级存储。

## Cache 的性能评估和改进

$$
\operatorname{CPU}时间=(\operatorname{CPU}执行的时钟周期数+等待存储访问的时钟周期数）\times 时钟周期
$$

$$
等待存储访问的时钟周期数=读操作带来的停顿周期数+写操作带来的停顿周期数
$$

读操作带来的停顿周期数可以由**每个程序的读操作次数**、**读操作失效率**和**读操作的失效代价**来定义：

$$
读操作带来的停顿周期数=每个程序的读操作次数\times 读失效率 \times 读操作失效代价
$$

写操作要更复杂一些，对于写穿透策略，有两个停顿的的来源：一个是**写失效**，通常在连续写之前需要将数据块取回。另一个是**写缓冲停顿**，通常在**写缓冲满时进行写操作会引发该停顿**，因此写操作带来的停顿周期数等于下面两部分的总和：

$$
写操作带来的停顿周期数=每个程序的写操作次数 \times 写失效率\times 写失效代价+写缓存满时的停顿周期
$$

**写返回**策略也会**额外增加停顿**，主要来源于**数据块被替换**并需要**将其写回到主存时**。

由于在大多数**写穿透的 $\operatorname{cache}$ 的结构**中，**读和写的失效代价是相同的**，我们假设写缓冲停顿是忽略不计的，我们就可以用失效率和失效代价来同时刻画读操作和写操作：

$$
等待存储访问的时钟周期数=每个程序访存操作的数目\times 失效率 \times 失效代价
$$

平均存储访问时间：考虑了命中、失效以及不同访问频度的影响后的平均访存时间，定义为$\operatorname{AMAT}=命中时间+失效率\times 失效代价$。

### 使用更灵活的替换策略降低 Cache 失效率

全相联 $\operatorname{cache}$：$\operatorname{cache}$ 的一种组织结构，数据块可以存放在 $\operatorname{cache}$ 的任意位置。

即主存中的**某个数据块和 $\operatorname{cache}$ 中的任意表项都可能有关联**，所以在全相联 $\operatorname{cache}$ 中查找给定的数据块，**所有的表项都必须进行比对**，因为数据块可以**存放在任意位置**。

为了让对比过程更实际，**每个 $\operatorname{cache}$ 表项都有一个比较器可以并行地进行比较**，这些比较器显然**增加了硬件开销**，这使得**全相联策略只能用于那种小容量的 $\operatorname{cache}$**。

介于**直接映射**和**全相联**之间的组织结构称为**组相联**。

组相联 $\operatorname{cache}$：$\operatorname{cache}$ 的一种组织结构，**每个数据块在 $\operatorname{cache}$ 中存放的位置数量具有固定值**（至少为 $2$）。

**每个数据块有 $n$ 个位置可放**的组相联 $\operatorname{cache}$ 称为 **$n$ 路组相联 $\operatorname{cache}$**，一个 $n$ 路组相联 $\operatorname{cache}$ 中**包含有 $n$ 个数据块**。主存中的每个数据块**通过索引位映射到 $\operatorname{cache}$ 中对应的组**，数据块**可以存放在该组中的任何位置**。

对于三种不同的组织结构，下图举例给出数据块 $12$ 在 $\operatorname{cache}$ 中的位置：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7fb20b6e-34b2-4a12-8479-56979090674e/Untitled.png)

在组相联 $\operatorname{cache}$ 中，包含主存块的组号位

$$
（数据块号）\operatorname{mod}（\operatorname{cache}中的组数）
$$

由于数据块可以放置在该组内的任意位置，所以**组内所有元素的所有标签都必须被检查**。

提高相联度的好处是通常可以降低失效率，但问题在于可能会增加

### 选择替换的数据块

最近最少使用：一种替换策略，该策略中，**最长时间未被使用的数据块将被替换，**最近最少使用替换策略也叫 $\operatorname{LRU}$。

**提高相联度需要更多的比较器**，每一个 $\operatorname{cache}$ 块**对应的标签位**也越多。

### 使用多级 Cache 减少失效代价

二级 $\operatorname{cache}$ 一般与一级 $\operatorname{cache}$ 封装在同一颗芯片中，一级失效后就会访问下一级缓存。如果二级 $\operatorname{cache}$ 中有所需数据，那么一级 $\operatorname{cache}$ 的失效代价就是二级 $\operatorname{cache}$ 的访问时间，这比访问主存的时间少很多，但是如果一级或二级 $\operatorname{cache}$ 中都没有包含所需数据，就需要访问主存，这样失效代价就会增大。

全局失效率：对于多级 $\operatorname{cache}$，在所有 $\operatorname{cache}$ 层次上都失效的访问数目所占比例。

局部失效率：对于多级 $\operatorname{cache}$，在某一个 $\operatorname{cache}$ 层次上失效的访问数目所占比例。

### 纠正 1 位错，检测 2 位错的汉明编码

奇偶校验：判断编码中 $1$ 的数目，通过奇偶校验的奇偶性来检查是否发生错误。

错误检测编码：计算汉明距离（两个等长二进制数对应位置不同的位的数量），这种编码方式能够检测出数据中有 $1$ 位错误，但是不能对错误位置进行精确定位，因此不能纠正错误。

**汉明纠错码（$\operatorname{ECC}$）**的步骤：

例如 $10011010_2$，我们按照如下过程，这里按照从左到右为从低位到高位的顺序：

| H1 | H2 | H3 | H4 | H5 | H6 | H7 | H8 | H9 | H10 | H11 | H12 | H13 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| P1 | P2 | 1 | P3 | 0 | 0 | 1 | P4 | 1 | 0 | 1 | 0 | P5 |

其中不是 $\operatorname{p}$ 的位置是数据位，剩下的是校验位。

$$
\begin{align*} & \operatorname{P}_1=\operatorname{H}_3 \oplus \operatorname{H}_5 \oplus \operatorname{H}_7 \oplus \operatorname{H}_9 \oplus \operatorname{H}_{11} \\ &\operatorname{P}_2=\operatorname{H}_3 \oplus \operatorname{H}_6 \oplus \operatorname{H}_7 \oplus \operatorname{H}_{10} \oplus \operatorname{H}_{11} \\ &\operatorname{P}_3=\operatorname{H}_5 \oplus \operatorname{H}_6 \oplus \operatorname{H}_7 \oplus \operatorname{H}_{12} \\ & \operatorname{P}_4=\operatorname{H}_9 \oplus \operatorname{H}_{10} \oplus \operatorname{H}_{11} \oplus \operatorname{H}_{12} \end{align*}
$$

其中 **$\operatorname{P}_1$ 包含二进制最低位为 $1$ 的位置**，$**\operatorname{P}_2$ 包含二进制次低位为 $1$ 的位置**，以此类推，其中 **$\operatorname{P}_5$ 为所有的数据位异或起来**。

如果这时候我们得到一个需要校验的码，我们同样的将这个码按照上述形式写入到表中，然后用我们刚刚得到的校验位 $\operatorname{P}$ 和目前的 $\operatorname{H}$ 来进行校验，具体如下：

$$
\begin{align*} & \operatorname{S}_1=\operatorname{P}_1\oplus \operatorname{H}_3 \oplus \operatorname{H}_5 \oplus \operatorname{H}_7 \oplus \operatorname{H}_9 \oplus \operatorname{H}_{11} \\ &\operatorname{S}_2=\operatorname{P}_2 \oplus\operatorname{H}_3 \oplus \operatorname{H}_6 \oplus \operatorname{H}_7 \oplus \operatorname{H}_{10} \oplus \operatorname{H}_{11} \\ &\operatorname{S}_3=\operatorname{P}_3 \oplus\operatorname{H}_5 \oplus \operatorname{H}_6 \oplus \operatorname{H}_7 \oplus \operatorname{H}_{12} \\ & \operatorname{S}_4=\operatorname{P}_4 \oplus\operatorname{H}_9 \oplus \operatorname{H}_{10} \oplus \operatorname{H}_{11} \oplus \operatorname{H}_{12} \end{align*}
$$

其中 **$\operatorname{S}_5$ 也是 $\operatorname{P}_5$ 异或上所有的数据位**。

这样我们就可以进行一位纠错，二位检测了，具体如下所示：

1. 如果出现**一位错误**，那么 **$\operatorname{S}_4\operatorname{S}_3\operatorname{S}_2\operatorname{S}_1$ 则为错误的一位**。
2. 如果出现**两位错误**，那么 **$\operatorname{S}_4\operatorname{S}_3\operatorname{S}_2\operatorname{S}_1$ 不为 $0$，并且 $\operatorname{S}_5$ 为** $0$。

## 虚拟内存

在实际的运行过程中，程序会遇到一些问题：

- 申请一些连续的内存，或者释放它们。但是大家都要连续的内存，在物理内存的分配策略上就很棘手
- 程序需要的内存大小可能超过机器的内存大小，这意味着程序只能在特定的机器上面运行。

为了解决上述的两个问题，虚拟内存技术被提出来。虚拟内存技术提供**一种虚拟地址到实际物理地址的映射**，将连续的虚拟地址暴露给程序，而实际上他们在物理内存（比如内存条）上面是不连续的。

比如，虚拟内存还能解决内存不够用的情况，物理内存不够时，开辟一块磁盘空间作为额外的“内存”强行使用。如图：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/48cd4dc1-b0c8-41c1-abf8-78989737e41d/Untitled.png)

### 页表

上文提到通过地址映射来进行虚拟地址到实际地址的换算。页表就是这样一种辅助换算的结构。我们人为地将内存分为一页一页，**页是访问的最小单位**（类似 $\operatorname{cache}$ 行的概念）

页表使用虚拟地址的页号作为索引，以找到实际物理储存器中的页号。每个程序都有一张自己的页表。索引的过程如下图：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5412b021-6d26-4253-aef0-f5bfa70b6c44/Untitled.png)

页大小为 $2^{12}=4\operatorname{KiB}$，由于物理页号有 $28$ 位，内存中物理页数为 $2^{28}$，因此主存的最大容量为 $1\operatorname{TiB}$，而虚拟地址空间为 $256\operatorname{TiB}$。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c8f43f09-7a2e-4eb7-ab3e-51a274db2688/Untitled.png)

**全相联放置**、采用**写回策略**。

### 缺页

因为虚拟内存允许应用程序使用超出其物理内存大小的虚拟地址，那么意味着总有一些内存访问会向 磁盘要数据。

页表中会有一个标志位（有效位），当其为1时表示当前页在内存中。为 $0$ 则表示当前页在磁盘中。当标志位为 $0$ 时，无法直接向内存取数据，而是要访问磁盘。这个行为称为**缺页**。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ec130f9b-7b1e-49ce-8e40-d56fa1f43f77/Untitled.png)

要完全准确地执行 $\operatorname{LRU}$ 算法的代价太高，为了帮操作系统估算最近最少使用的页，$\operatorname{RISC-V}$ 计算机提供了一个引用位，当一页被访问时该位被置位。操作系统定期将引用位清零，然后再重新记录。

### 支持大虚拟地址空间的虚拟存储

以下五个技术从两个角度解决问题，一是减少存放页表所需的最大存储空间，二是减少用于存放页表的存储空间。

- 保留界限寄存器，限制给定进程的页表大小。
- 两个大小可拓展的区域，允许地址空间朝多个方向增长。
- 对虚拟地址应用哈希函数——反向页表
- 页表再分页
- 多级页表

### 替换

缺页发生时，必须向磁盘要数据。根据存储器的层次结构，我们要想向磁盘要数据，必然是将数据读入内存，再从内存中读取。

如果有效位是 $1$ 那么直接读取（下图绿色标记）：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8b0bf0bf-3d61-43b3-913e-7a29fd055954/Untitled.png)

如果有效位为 $0$，那么发生缺页（下图红色标记）。首先从磁盘中读取数据到内存（下图绿色标记）这个读会覆盖一页的数据。假设初始情况如下 ：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c15334c9-473e-4433-8de1-8bde95b524a4/Untitled.png)

覆盖（替换）之后，数据 $\operatorname{L}$ 被读入内存中的某一页（$2$ 号页）：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ceaafd1f-b814-41aa-bff7-8d5cfc4b2f71/Untitled.png)

然后 **重写** 页表的标志位和页号，因为此时 $\operatorname{L}$ 数据已经在内存了（下图绿色标记）那么下一次根据页表去内存就可以直接找到数据了：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2768cac5-2ccf-4562-8998-64dd244d7fac/Untitled.png)

这个替换遵守最近最少使用原则 （LRU，least recently use），即替换掉最近最不常用的页。

### TLB

上文提到使用页表进行虚拟地址的转换。值得注意的是，页表也存在内存中。这意味着读取慢。前文提到 $\operatorname{cache}$ 可以加速内存的读取，于是我们引入一种特殊的 $\operatorname{cache}$ 来加速页表的访问。

现代 $\operatorname{CPU}$ 都包含一张名为 $\operatorname{TLB}$（Transfer Look-aside Table），叫做**快表**，或者高速地址变址缓存，以加速对于页表的访问。加入 $\operatorname{TLB}$ 之后的完整地址映射长这样：

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0b1bd7dd-d1c8-4bb5-8973-a28bce9019ca/Untitled.png)

那么对于一次存取 ，就会有分 $3$ 级的情况：

1. $\operatorname{TLB}$ $\operatorname{hit}$，直接访问内存取数据
2. $\operatorname{TLB}$ $\operatorname{miss}$，但是在内存中有对应页
3. $\operatorname{TLB}$ $\operatorname{miss}$，同时内存中没有对应页，发生缺页

$\operatorname{TLB}$ 和 $\operatorname{cache}$ 实现从虚拟地址到数据项的转换过程。

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/74682491-c5c0-4134-8f4b-c5c9d6f03c45/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b851a552-fda8-46f7-9ef1-06e70be6d548/Untitled.png)

| TLB | 页表 | cache | 可能与否的描述 |
| --- | --- | --- | --- |
| 命中 | 命中 | 失效 | 可能，但是如果 TLB 命中则不会检查页表 |
| 失效 | 命中 | 命中 | TLB 失效，页表中找到了，重试后在 cache 中找到了 |
| 失效 | 命中 | 失效 | TLB 失效，页表中找到了，重试后在 cache 中没找到 |
| 失效 | 失效 | 失效 | TLB 失效，发生缺页失效，重试后在 cache 中没找到 |
| 命中 | 失效 | 失效 | 不可能，如果页不在内存中，TLB 中没有此转换 |
| 命中 | 失效 | 命中 | 同上 |
| 失效 | 失效 | 命中 | 不可能，若页不在主存中，数据不允许在 cache 中存在 |
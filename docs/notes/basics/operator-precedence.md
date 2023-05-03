---
tags:
  - Операции
---

# Приоритет выполнения операций

Ниже, операции перечислены в порядке уменьшения приоритета. Операции с более высоким приоритетом выполняются до выполнения операций с более низким приоритетом. Операции, указанные в одной строке, имеют одинаковый приоритет и выполняются слева направо (кроме степени).

| Операция                                                         | Описание                                                                                             |
|------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| `**`                                                             | Возведение в степень                                                                                 |
| `+x`, `-x`, `~x`                                                 | Унарные "плюс" и "минус", побитовое НЕ                                                               |
| `*`, `@`, `/`, `//`, `%`                                         | Умножение, [матричное умножение](matmul-operator.md), деление, целочисленное деление, взятие остатка |
| `+`, `-`                                                         | Сложение, вычитание                                                                                  |
| `<<`, `>>`                                                       | Побитовые сдвиги влево и вправо                                                                      |
| `&`                                                              | Побитовое И                                                                                          |
| `^`                                                              | Побитовое исключающее ИЛИ (XOR)                                                                      |
| <code>&#124;</code>                                              | Побитовое ИЛИ                                                                                        |
| `in`, `not in`, `is`, `is not`, `<`, `<=`, `>`, `>=`, `!=`, `==` | Вхождение, идентичность, операторы сравнения                                                         |
| `not x`                                                          | Логическое НЕ                                                                                        |
| `and`                                                            | Логическое И                                                                                         |
| `or`                                                             | Логическое ИЛИ                                                                                       |

## Примеры

- `-2**-1` --> `-(2**(-1))` <br/>сначала степень, затем унарный оператор
- `2 + -2 = 0` --> `2 + (-2) = 0` <br/>сначала унарный оператор, затем сложение
- `1 + 10 * 20 / 4 // 5 - 9` --> `(1 + (((10 * 20) / 4) // 5) - 9` <br/>сначала умножение и деление, затем сложение и вычитание
- `x >> 2 << 2 ^ 3 & 7 | 2` --> `(((x >> 2) << 2) ^ (3 & 7)) | 2` <br/>сначала сдвиги, затем И, затем ИЛИ-НЕ, затем ИЛИ
- `7 + 5 == 48 / 4 in (10, 11, 12)` --> `((7 + 5) == (48 / 4)) in (10, 11, 12)` <br/>сначала арифметика, затем сравнение и вхождение
- `A and B or C or not D and E` --> `((A and B) or C) or ((not D) and E)` <br/>сначала НЕ, затем И, затем ИЛИ

## Связанные заметки
- [Выполнение операций под надзором ast](operator-precedence-ast.md)

## Ссылки

- [Документация. Expressions — Operator precedence](https://docs.python.org/3/reference/expressions.html#operator-precedence)
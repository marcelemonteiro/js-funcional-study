let r

const I = a => a

r = I(3)
r // 3

r = I(I)
r // [λ: I]

const SELF = f => f(f)

r = SELF(I)
r // [λ: I]

const PRI = a => b => a

r = PRI(3)(10)
r // 3

const ULT = a => b => b

r = ULT(7)(11)
r // 11

const FLIP = f => a => b => f(b)(a)

r = FLIP(ULT)(7)(11)
r // 7

r = FLIP(PRI)(3)(10)
r // 10

// Funções TRUE e FALSE
// TRUE ? <PRI> : ULT
// FALSE ? PRI : <ULT>

const T = PRI
const F = ULT

T.inspect = () => 'Verdadeiro (PRI)'
T // Verdadeiro (PRI)

F.inspect = () => 'Falso (ULT)'
F // Falso (ULT)

// NOT
const NOT = a => a(F)(T)

r = NOT(F)
r // Verdadeiro (PRI)

// END
const END = a => b => a(b)(F)

r = END(T)(T)
r // Verdadeiro (PRI)

r = END(F)(T)
r // Falso (ULT)

r = END(T)(F)
r // Falso (ULT)

r = END(F)(F)
r // Falso (ULT)

// OR
const OR = a => b => a(T)(b)

r = OR(T)(T)
r // Verdadeiro (PRI)

r = OR(F)(T)
r // Verdadeiro (PRI)

r = OR(T)(F)
r // Verdadeiro (PRI)

r = OR(F)(F)
r // Falso (ULT)

// Igualdade lógica
// const EQ = a => b => a(b)(b(F)(T))
const EQ = a => b => a(b)(NOT(b))

r = EQ(F)(F)
r // Verdadeiro (PRI)

r = EQ(T)(T)
r // Verdadeiro (PRI)

r = EQ(F)(T)
r // Falso (ULT)

r = EQ(T)(F)
r // Falso (ULT)

// XOR (OU exclusivo)
const XOR = a => b => NOT(EQ(a)(b))

r = XOR(F)(F)
r // Falso (ULT)

r = XOR(T)(T)
r // Falso (ULT)

r = XOR(F)(T)
r // Verdadeiro (PRI)

r = XOR(T)(F)
r // Verdadeiro (PRI)

import array as arr

from sympy import mod_inverse
mystr = "128 63 242 87 151 147 50 369 239 248 205 346 299 73 335 189 105 293 37 214 333 137"

# mystrArr = arr.array('i', mystr.split(" "))
mystrArr = []
mystrArr = list(map(int, mystr.split(" ")))
# mystrArr = [k for k in mystr.split(" ")]
alph = ".ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_"
print(len(alph))
kk = ""
for i in mystrArr:
    kk += alph[mod_inverse(i, 41)]
    # kk += str(i % 41)

print(kk)
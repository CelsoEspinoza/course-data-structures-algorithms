
def reverse(str):
    if not str:
        return None
    return str[::-1]

def reverse2(str):
    reversedWord = ''
    for i in range(len(str)):
        reversedWord = str[i] + reversedWord
    return "".join(reversedWord)

def reverse3(str):
    if (len(str) == 1):
        return str
    
    return str[len(str) - 1] + reverse3(str[:-1])

print(reverse(''))
print(reverse('Hola, mi nombre es Celso'))
print(reverse2('Hola, mi nombre es Celso'))
print(reverse3('Hola, mi nombre es Celso'))
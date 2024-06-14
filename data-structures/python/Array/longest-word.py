import re

def LongestWord(sen):
    longestWord = ""
    word = ""
    for char in sen:
        if re.search('[@_!#$%^&*()<>?/\|}{~:]', char):
            continue

        if char == " ":
            if len(word) > len(longestWord):
                longestWord = word
            word = ""
        else:
            word = word + char

    if len(word) > len(longestWord):
        longestWord = word

    return longestWord

# keep this function call here 
print(LongestWord("Hola, mi nombreeee!#@#!@#!@#!@#!@# es Celsoooooooo"))
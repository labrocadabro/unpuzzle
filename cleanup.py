cleaned_words = set()

with open('raw_words.txt', 'r') as f:
    words = f.readlines()
for word in words:
    word = word.strip().lower()
    if not word.isalpha():
        continue
    if all(char == word[0] for char in word):
        continue
    cleaned_words.add(word)

with open('site/words.txt', 'w') as f:
    for word in sorted(cleaned_words):
        f.write(word + '\n')

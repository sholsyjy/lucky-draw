import os

f = open('src/name_list.csv', 'r')
data = f.readlines()
f.close()
f = open('src/name_list.ts', 'w')
f.write('const nameList = [\n    ')
d = data[0].replace('\n', '')
f.write("'"+d+"'")
data.pop(0)
for name in data:
    n = name.replace('\n', '')
    f.write(", '"+n+"'")
f.write('\n]\n\nexport default nameList;\n')
f.close()

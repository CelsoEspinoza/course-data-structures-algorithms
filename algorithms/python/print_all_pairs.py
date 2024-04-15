# print all pairs

boxes = [1,2,3,4,5,6,7]

for i, valuei in enumerate(boxes):
    boxes_len = len(boxes)
    for valuej in boxes[i+1::]:
        print(f'[{valuei}, {valuej}], ')

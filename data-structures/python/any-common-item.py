# find the common item between the arrays.

a = ['a', 'b', 'd', 'e', 'f', '323', '1']
b = ['x', 'y', 'z', 'x', '3']

# time complexity O(n)
# space complexity O(a+b)
def hasAnyCommonItem(arr1, arr2):
    len1 = len(arr1)
    len2 = len(arr2)
    greater_len = len1 if (len1 > len2) else len2

    dict1 = {}
    dict2 = {}
    item_common = None
    for i in range(greater_len):
        if (i < len1):
            item1 = arr1[i]
            item_common = dict2.get(item1)
            if (item_common == None):
                dict1[item1] = True
            else:
                return True
        if (i < len2):
            item2 = arr2[i]
            item_common = dict1.get(item2)
            if (item_common == None):
                dict2[item2] = True
            else:
                return True
    return False

print(hasAnyCommonItem(a, b))
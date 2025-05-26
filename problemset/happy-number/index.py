def isHappy(n: int) -> bool:
  res = n == 1
  arr = [n]
  while n != 1:
    sum = 0
    for i in str(n):
      sum += int(i) ** 2
    if sum in arr:
      break 
    if sum == 1:
      res = True 
      break 
    n = sum
    arr.append(sum)
  return res

print(99, isHappy(99))
print(19, isHappy(19))
print(2, isHappy(2))

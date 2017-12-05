import csv
import math

def checkSumRowMinMax(row):
    max = -math.inf
    min = math.inf
    for numberString in row:
        number = int(numberString)
        if (number > max):
            max = number
        if (number < min):
            min = number
    return max - min


def checkSumEvens(row):
    for i in range(len(row) - 1):
        dividend = int(row[i])
        for divisorString in row[i+1:]:
            divisor = int(divisorString)
            if (dividend % divisor == 0):
                return dividend / divisor
            if (divisor % dividend == 0 ):
                return divisor / dividend

with open('data.tsv', 'r') as dataFile:
    reader = csv.reader(dataFile, delimiter='\t')
    sumMinMax = 0
    sumEvens = 0
    for row in reader:
        sumMinMax += checkSumRowMinMax(row)
        sumEvens += checkSumEvens(row)
    print(sumMinMax)
    print(sumEvens)

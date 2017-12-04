import csv

with open('data.tsv', 'r') as dataFile:
    reader = csv.reader(dataFile, delimiter='\t')
    for row in reader:
        print(row)

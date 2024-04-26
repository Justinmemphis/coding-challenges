'''
Basic subclasses - Adam and Eve
Codewars
8kyu

Description:


According to the creation myths of the Abrahamic religions, Adam and Eve were the first Humans to wander the Earth.

You have to do God's job. The creation method must return an array of length 2 containing objects (representing Adam and Eve). The first object in the array should be an instance of the class Man. The second should be an instance of the class Woman. Both objects have to be subclasses of Human. Your job is to implement the Human, Man and Woman classes.
Fundamentals
Object-oriented Programming
'''

# Solution:
# PREP - Parameters, Results, Example, Pseudocode
# Parameters - none
# Results - return a class with two sub-classes
# Example - n/a
# Pseudocode:
#   create class and then two subclasses

# didn't solve - see favorite answer below:
def God():
    return [Man(), Woman()]

class Human(object):
    pass

class Man(Human):
    pass

class Woman(Human):
    pass


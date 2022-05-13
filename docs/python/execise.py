import inspect
class Person:
    
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def get_name(self):
        return self.name
    
    def set_name(self, name):
        self.name = name
    
    def get_age(self):
        return self.age
    
    def set_age(self, age):
        self.age = age

def is_string(x):
    if isinstance(x,str):
        return True
    else:
        return False

if __name__ == "__main__":
    
    # print(inspect.getmembers(Person))

    person = Person('bob',25)
    # print(inspect.getmembers(person))
    
    # print(inspect.getmembers(person,is_string))

    path = r'E:\dev\HTML5\202204\vuepress-starter\docs\python\execise.py'
    print(inspect.getmodulename(path))
    print(inspect.ismodule(path))
    print(inspect.isclass(Person))
    print(inspect.ismethod(person.get_name))
    print(inspect.isfunction(is_string))
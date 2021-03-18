# remember to destroy previous records to prevent duplicates
StudySession.destroy_all
Teacher.destroy_all
Student.destroy_all

t1 = Teacher.create(name: "Angelo" , subject: "JavaScript" )
t2 = Teacher.create(name: "Antonio", subject: "Rails" )
t3 = Teacher.create(name: "Raul", subject: "Ruby" )

s1 = Student.create(name: "Hadi", grade: 100)
s2 = Student.create(name: "Luis", grade: 100)
s3 = Student.create(name: "Emily", grade: 100)
s4 = Student.create(name: "Adri", grade: 100)
s5 = Student.create(name: "Udenna", grade: 100)

# t.string :date
# t.string :location
# t.integer :length
# t.integer :teacher_id
# t.integer :student_id 

StudySession.create(date: "3-18-21", location: "zoom", length: 45, teacher: t1, student: s1)
# StudySession.create()
# StudySession.create()
# StudySession.create()


puts "seed file ran"
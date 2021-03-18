# Sinatra : getting started! 

## Run `bundle install`

We want at least a one to many relationship (two models)
With full CRUD functionality on ONE  model


teacher ---< study_session >-----  students

teacher  has_many study_sessions

student has_many study_sessions

teacher has_many students through study_sessions

student has_many teachers through study_sessions

study_session belongs_to teacher 

study_session belongs_to student


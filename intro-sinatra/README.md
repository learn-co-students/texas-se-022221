# Sinatra and MVC

### LGs:
- [x] Explain the Model View Controller (MVC) pattern and give an example
- [x] Implement one model that inherit from ActiveRecord
- [x] Implement one controller to route and process requests
- [x] Implement ERB template and get it to render data from controller and model
- [x] Identify the connection between REST and CRUD

#### **Explain the Model View Controller (MVC) pattern and give an example**
* How and Why we use the MVC pattern?
![](https://i.imgur.com/HlICHEU.png)
    * Separation of concerns
    * Model: interacts with our database, how we create instances
    * Controller: go-between
    * View: html that renders a web page
* Sinatra from scratch
* config .ru

**TASK:** Take 3 min and discuss the MVC pattern
    
#### **Implement one model that inherit from ActiveRecord**
* Model
    * A class (template for objects) which represents a table
    * Where business logic goes

**TASK:** Implement artist migration with name and age columns
    
#### **Implement one controller to route and process requests**
* Controller
    * Where the path is driven!
    * Analogies:
        * Model would be the kitchen, view would be the customers, and the controller would be the server
        * Model would be the factory, view would be the end user, and the controller would be the distributor
    * `get '/'`

**TASK:** Create route for `/home` that displays "Hi!!!"

#### **Implement ERB template and get it to render data from controller and model**
* create `home.erb` view file
* display message "Hi!!!" using instance variable
* create `index.erb` to display all the artists

**TASK:** create route and erb to display single artist information
* View info on an individual book
    * get '/artists/:id'
    * how the params hash changes and where the data comes from?
    * show.erb

#### **Identify the connection between REST and CRUD**
* What REST stands for?
    * REpresentational State Transfer
        * http://www.espn.com/nba/players
    * Index page
    * Show page
    * New page
        * form
        * methods
        * how params hash is build?
    * Create route
    * Edit page
        * methods
        * set :method_override, true
    * Update route
    * Delete route


### Deliverables:
* View all the artists
    * get /artists
* View info on an individual artist
    * get /artists/:id
* Create a new artist
    * get /artists/new
    * post /artists
* edit an existing artist
    * get /artists/:id/edit
    * patch /artists/:id
* delete an existing artist
    * delete /artists/:id

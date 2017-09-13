# Gf-Frontend
Remove sudo if using OSX

## Clone
```
$ git clone git@github.com:berryhill/gf-frontend.git
```

## Install / Build / Run

Install the dependencies and start the server (Containerized).

```
$ sudo docker build -t gcr.io/fifth-marker-132121/gf-frontend .
$ sudo docker run -i -t -p 3000:3000 gcr.io/fifth-marker-132121/gf-frontend
```

## Stage
You can also visit `http://35.186.230.161/` with the API running locally

## API
Find API [here](https://github.com/berryhill/gf-api)

# Tasks

### Completed
+ **Dockerize**
+ **Searching**
+ **Pagination**
+ **Continuous Integration / Continuous Deployment**
+ **Nginx**
+ **Footer**

### WIP
+ Filters
  + **UI**
  + Redux
  + Router
  + Query params
+ Social Media Icons

### TODO
+ Tests
+ Email list
+ Item Detail view
+ SEO
+ Home Page Splash
+ Mobile Friendly

**I. Project introduction**
The website is used to introduce movies.
Frontend: React, Bootstrap, link: https://github.com/TuyetAnh82198/movie-app-frontend
Backend: NodeJS, Express, link: https://github.com/TuyetAnh82198/movie-app-backend
Database: MongoDB
Performance optimization: useCallback, React.memo, helmet, compression
Language: English, Vietnamese
_(In file app.js of backend, I used Nodejs to process a given list of movies
in json before uploading it to the database. I just tried it out, I've converted the code into comments)_


**II. Functional description**

1. Display a banner with information about a movie randomly taken from the list of 20 most recently released movies.

2. Display movie list by many categories: popular, high rated, genre.

3. Some basic effects will be activated when the user scrolls down or hovering over the movie's image.

4. Pagination

5. Users can view a movie's details such as title, release date, vote, description.
They can also view movie's trailer or teaser,
(if there is no trailer or teaser, movie's image will be displayed instead),
and search for movies.


**III. Demo link**
https://movie-app-frontend-8zde.onrender.com

**IV. Deployment guide (on local)**

1. We need to install NodeJS 

2. Frontend:
npm start (localhost 3000) 

3. Backend:
npm start (localhost 5000)


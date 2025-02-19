**LearnLingo**

Project Overview

LearnLingo is a web application designed for a company that offers online language learning services with professional tutors. The app allows users to browse a list of available tutors, filter them based on specific criteria, and manage a personal list of favorite tutors.

_Features_

- Home Page: Displays company benefits and a call-to-action link that redirects to the "Teachers" page.

- Teachers Page: Lists available tutors with filtering options by teaching language, student level, and hourly rate.

- Favorites Page (Private): Allows authenticated users to save and view their favorite tutors.

- User Authentication: Registration, login, and logout using Firebase Authentication.

- Dynamic Data Fetching: Tutor data is retrieved from Firebase Realtime Database.

- Tutor Cards: Displays tutor details including name, languages, rating, price, and reviews.

_Favorite Tutors:_

- Non-authenticated users receive a prompt to log in.

- Authenticated users can add/remove tutors from favorites, with data persistence.

**Tutor Details Modal:** Clicking "Read more" expands tutor details.

**Trial Lesson Booking:** A modal form allows users to schedule a trial lesson.

**Accent Color Customization:** Users can change accent colors in the UI.

Technologies Used

Frontend: React, React Router, React Hook Form, Yup

State Management: useState, useEffect, Context API

Authentication & Database: Firebase Authentication, Firebase Realtime Database

Styling: CSS Modules, Modern Normalize

Build Tool: Vite

Installation & Setup

Clone the repository:

git clone https://github.com/d-sofiika/LearnLingo.git
cd LearnLingo

Install dependencies:

npm install

Create a .env file and add Firebase configuration:

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_DATABASE_URL=your_database_url
VITE_FIREBASE_PROJECT_ID=your_project_id

Start the development server:

npm run dev

License

This project is open-source and available under the MIT License.

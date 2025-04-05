# CAPSTONE PROJECT
## HOSPITAL MANAGEMENT SYSTEM!
___
Project Overview:
      The goal is to create a website where patients can select a disease, choose an appropriate doctor, pick an available time slot, and book an appointment.

Key Features:
   Disease Selection:
          A list of common diseases will be displayed on the website.
          Patients can select the disease they are suffering from to get more specific information and recommendations.
    Doctor Selection:
          Based on disease selected, the website will show a list of available doctors who        specialize in that disease
    Patients can view doctor profiles, including their qualifications, experience, and specialty.
  
  Select Time and Date:
    After selecting the doctor, the patient can choose a convenient date and time slot for the appointment.
    The website will show available slots for the selected doctor.
  
  Book Appointment:
    Once the patient selects the doctor, date, and time, they can confirm the booking.
    The system will send confirmation to the patient and update the doctor’s schedule accordingly.
  
  Admin Panel (for doctors and admin):
    Admin will manage the list of diseases, doctors, and appointments.
    Doctors can update their availability (time slots) and view their scheduled appointments.

Steps to Implement:

Front-end:
 Disease List Page:
     Display the diseases and allow users to select the one they are suffering from.
 
 Doctor Selection Page:
     Filter doctors based on the disease selected and display their details(e.g., specialization ,qualifications).
 
 Appointment Scheduling Page:
     Allow patients to choose the date and time slot available for the doctor.
 
 Confirmation Page:
     Show the final details before confirming the appointment.
 
Back-end:
 
 Database Design:
     Disease Collection: List of diseases with associated doctors.
     Doctor Collection: Doctor details, specialties, and available time slots.
     Appointments Collection: Store booked appointments with patient details and selected doctor, date, and time.

 Endpoints:
     Get diseases and associated doctors.
     Get available time slots for the selected doctor.
     Book an appointment and update doctor availability.
 
 Admin Interface:
     Add, update, or remove diseases and doctors.
     Manage appointment bookings.

Technologies Stack Recommendations:
 
     Front-end: React or Angular for building the user interface.
     Back-end: Node.js with Express for the server-side API.
     Database: MongoDB (for handling doctor and patient data, as well as appointment information).
     Authentication: JWT (JSON Web Token) or session-based authentication for secure access.

DAILY PLAN:
3nd Mar : Submitting a project idea + plan
4rd Mar : Low Fid Design
5th Mar : High Fid Design
6th Mar : Setting up a github project
7th Mar : Manage all daily tasks and project milestone progress via github projects
8th Mar : GET api used
9th Mar : POST api used
10th Mar : PUT api used
11th Mar : Deploying backend server
12th Mar : Creating database schema
13th Mar : Database read and write performed
14th Mar : Implemented relationships between entities in database
15th Mar : Initializing React application
16th Mar : Deploying frontend
17th Mar : Creating frontend components in react
18th Mar : Initialized a react/frontend application
19th Mar : Implemented file upload functionality in the application
20th Mar : Implemented authentication (username / password) in application
21st Mar : implemented authentication (3rd party - like google) in application
22nd Mar : Implementing 'update' and 'delete' an entity in React app
23rd Mar : Updated bruno/API templates in application repo
24th Mar : Using JWTs in application
25th Mar : Using JWTs in application
26th Mar : Manage all daily tasks and project milestone progress via github projects
27th Mar : Matching design and end state 
28th Mar : API integration (OTP provider)
29th Mar : API integration (OTP provider)
30th Mar : Get certificate from Microsoft Applied Skills.


netlify link : https://musical-lollipop-d882a1.netlify.app/
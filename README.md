# Hotel Scheduling Application

![1](https://github.com/SadiqHarry/Hotel-Scheduling-Web-Application/assets/116308353/6142d9e3-a2e7-4fe2-bfed-a28f06fce79f)


Welcome to the Hotel Scheduling Application! The application's purpose is to facilitate hotel reservations and scheduling, catering to the needs of both hotel staff and guests. The project has been customized to meet new requirements under new management for a hotel located in Toronto, Canada.

## Technologies Leveraged
- Angular/Typescript 
- Springboot/Java
- HTML/CSS
- NodeJS
- Docker
- Intellij
- VSCode

## Features

- **Localization and Internationalization**: The application supports English and French languages to comply with Canadian law. It displays a welcome message in both languages.
- **Currency Display**: Reservation prices are displayed in U.S. dollars ($), Canadian dollars (C$), and euros (€) on separate lines.
- **Time Zone Conversion**: The application provides the time of online live presentations at the Landon Hotel in Eastern Time (ET), Mountain Time (MT), and Coordinated Universal Time (UTC) zones.

## Screenshots
![2](https://github.com/SadiqHarry/Hotel-Scheduling-Web-Application/assets/116308353/6602de6b-bbaa-42a7-9c1e-63fc80736d2d)

![3](https://github.com/SadiqHarry/Hotel-Scheduling-Web-Application/assets/116308353/0716bd7f-1303-4d93-92d5-7e61470b8b6e)


## Setup Guide

To set up the Hotel Scheduling Application locally, follow these steps:

1. Clone this repository to your local machine using the following command: `git clone <repository_url>`

2. Install the necessary dependencies for the backend (Spring Boot) and frontend (Angular) components.

3. Build and run the Spring Boot backend using your preferred IDE or by running the following command in the project root directory: `mvn spring-boot:run`

4. Build and run the Angular frontend using the following commands in the `frontend` directory: `npm install, ng serve`

5. Access the application by opening a web browser and navigating to `http://localhost:4200`.

## Angular Component Explanation

The main Angular component of this application is the `AppComponent`. This component handles the interaction with the backend API for room reservations and displays the necessary information on the frontend.

The component's code includes the following functionality:

- Fetching the welcome message for English and French languages using HTTP requests.
- Initializing the room search form and capturing the check-in and check-out dates.
- Calculating and displaying reservation prices in different currencies.
- Converting and displaying times in various time zones for online live presentations.

## How to Contribute

Contributions to the Hotel Scheduling Application are welcome! If you'd like to contribute, follow these steps:

1. Fork the repository to your own GitHub account.

2. Create a new branch for your changes: `git checkout -b feature/your-feature-name`

3. Make your changes and commit them with descriptive messages.

4. Push your changes to your forked repository.

5. Create a pull request to the main repository, detailing your changes and explaining the purpose of the pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any inquiries or feedback, please feel free to contact me:
sadiqharry@gmail.com

Please note that this README will be updated periodically as new features and improvements are added to the Hotel Scheduling Application. Thank you for your interest in our project!









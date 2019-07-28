<!-- PROJECT SHIELDS -->
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<br />
<p align="center">
  <h3 align="center">Aviation News Scrapper</h3>

  <p align="center">
    Searches Google News for related airplane, aviation, aerospace news News Scrapper.
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Contact](#contact)



<!-- BUILT WITH -->
## Built With

* [Node.js](https://nodejs.org)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* Node.js - [Download](https://nodejs.org)
* npm
```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo
  ```sh
  git clone https:://github.com/othneildrew/aviation-news-scrapper.git
  ```
2. Install NPM packages
  ```sh
  npm install
  ```


<!-- USAGE EXAMPLES -->
## Usage

Run `scrapper.js`
  ```sh
  node scrapper.js
  ```

Returns 10 articles
  ```js
  [
    {
      id: 1,
      link: 'http...',
      title: 'Do airplane contrails add to climate change? Yes, and the problem ...',
      img: 'http...',
      snippet: 'And so it will remain the largest impact on the climate, " outpacing ...',
      source: 'NBCNews.com',
      time: '10 hours ago',
    },
    ...
  ]
  ```



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- CONTACT -->
## Contact

Othneil Drew - [LinkedIn](https://linkedin.com/in/othneildrew) - codeguydrew@gmail.com

Project Link: [https://github.com/othneildrew/aviation-news-scrapper](https://github.com/othneildrew/aviation-news-scrapper)









<!-- MARKDOWN LINKS & IMAGES -->
[license-shield]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: https://choosealicense.com/licenses/mit
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew

# freeds-selection

![html](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![css3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![js](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black) ![scss](https://img.shields.io/badge/SCss-CC6699?style=for-the-badge&logo=sass&logoColor=white) ![eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white) ![prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E) ![markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white) ![tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

## Screenshots

![freeds-selection-input-popup-screen](freeds-selection-input-popup-screen.png)

## Deploy link

<https://thirdmadman.github.io/freeds-selection/>

## Description

This is SPA, tool for finding free servers with given parameters from list of servers given by Dcimanager 6 API.

To use this tool, you need to get a link to api-like server (it must have CORS policy headers), to get json data, which dcimgr provides.

This data can be received from dcimgr API, under Administrator access.

Link to dcimgr API with needed parameters

/api/dci/v3/server?orderby=owner_email%20asc&limit=0,400&where=(owner_email%20IS%20null)+AND+is_new%20EQ%20false

## Usage

Get link to json file and open app. Input link in field in shown popup and press "Load data" button.

After successful load, you will be provided with filter configs and table of servers.

Use sliders and input fields to filter table.


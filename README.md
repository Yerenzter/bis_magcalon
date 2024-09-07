# Barangay Magcalon Information System

Free and open-source resident information system for managing and tracking residents information quick and easy to use GUI.

### Features
- Interactive dashboard
- Resident and Account Registration
- Resident and Account Management
- Realtime notifications
- System Settings
- Login system

### Technologies
- Bun.js (Backend)
- React (Frontend)
- Express (Web server)
- Axios (API)
- MariaDB (Database)

### Other utilities
- MaterializeCSS (UI library)
- Material Icons (Icon)
- TailwindCSS (CSS configurations)


### Prerequisites
You need to download the following tools before proceeding to our next step:

- Bun.js
- MariaDB (HeideSQL) or XAMPP
- Git
- Curl

### Setup and Installation
For GNU/Linux platform:

**Step 1:** Update and install Git and Curl packages
  - Debian/Ubuntu:
    `
    apt update && apt install git curl
    `
  - Arch:
    `
    pacman -Syu && pacman -S git curl
    `
  - Alpine
    `
    apk update && apk add git curl
    `
  - RHEL/Fedora/CentOS:
    `
    dnf update && dnf install git curl
    `
  - Void:
    `
    xbps-install -u && xbps-install -S git curl
    `
    
**Step 2:**: Open terminal and nstall Bun.js runtime
  `curl -fsSL https://bun.sh/install`

**Step 3**: Open XAMPP and start all the services

**Step 4:** Open your browser like Chrome or Firefox and enther their address
`http://localhost/phpmyadmin`

**Step 5:** Go to SQL tab and type the SQL commands for creating our database:
`CREATE DATABASE bis_magcalon` and press go at the bottom rightside.

**Step 6:** Tap bis_magcalon and find the tab ***IMPORT***

**Step 7:** Select file and go to the folder **bis_magcalon** and find and select **bis_magcalon.sql**.

**Step 8:** Scroll and fin the **Import** button at bottom right side then click

**Step 9**: Open the terminal

**Step 10**: Clone our repository:
`git clone https://github.com/Yerenzter/bis_magcalon`

**Step 11:** Locate the API directory in the cloned project:
`cd bis_magcalon/api`

**Step 12:** New tab by pressing <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>T</kbd> or open the new terminal and type the following:
`clear && bun run server.js`

**Step 13:**: Follow again back to Step 12 (don't tupe the command again)

**Step 14:** Locate the cloned project:
`cd bis_magcalon`

**Step 15:** Finally, run and open our system project, Enjoy!:
`clear && bun run vite -- dev --open`

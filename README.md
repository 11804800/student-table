# Student Data Viewer

A responsive web application for displaying student data using **React**, **TypeScript**, **Tailwind CSS**, and the **shadcn/ui** library. The app supports both desktop and mobile views, with paginated data and a clean, modular codebase.

---

## Features

- **Responsive Design**: 
  - Desktop view displays data in a table format.
  - Mobile view displays data as individual cards.
- **Pagination**: Navigate through student data with ease (10 students per page).
- **Shadcn UI Components**: Elegant and reusable UI powered by the shadcn/ui Data Table.
- **TypeScript**: Provides type safety and improved code quality.
- **Mock API**: Data is fetched using a simulated API call.
- **Tailwind CSS**: Modern, utility-first styling for a visually appealing design.
---

## Tech Stack

- **Framework**: React (with Vite)
- **Language**: TypeScript
- **UI Library**: shadcn/ui
- **Styling**: Tailwind CSS
- **Data Handling**: Mock JSON data and simulated API

---

## Setup and Installation


### Installation Steps
1. **Clone the repository**:
   ```bash
   git clone [https://github.com/11804800/student-table.git]
   cd student-table
   ```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```
```bash
 src/
├── pages/
│   ├── StudentTable.tsx  # Desktop table view
│   ├── PageNavigation.tsx    # Pagination component
├──/
utils.tsx    # Mock API function
├── data/
├──students.json         # Mock data file
├── App.tsx               # Main application component

```

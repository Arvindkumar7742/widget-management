
# Dashboard Page

## Overview
This project involves creating a dynamic dashboard page where users can manage widgets within categories. The dashboard will be built based on a JSON structure and will allow users to add, remove, and search widgets. The main functionalities include dynamic widget management and interactive category handling.


## Features

- JSON Structure: Build the dashboard and widgets dynamically using JSON.
- Dynamic Widget Management: Add and remove widgets from categories.
- Widget Text: Use random text for widget content.
- Add Widget: Users can add widgets with a name and text to selected categories.
- Remove Widget: Widgets can be removed via a cross icon or by deselecting from the category list.
- Edit Widget: We can also edit widgets from edit widget button, where we can remove all unchecked widgets.
- Search Functionality: Search through the list of widgets using widget name.


## JSON Structure

Here is a sample JSON structure:

```{
    "category": [
        {
            "id": 1,
            "name": "Sales Analytics Dashboard",
            "short_name": "Sales Analytics",
            "widgets": [
                {
                    "id": 1,
                    "wid_name": "Revenue Overview",
                    "wid_text": "Displays current and projected revenue."
                },
                {
                    "id": 2,
                    "wid_name": "Sales Performance",
                    "wid_text": "Tracks sales performance across regions."
                },
                {
                    "id": 3,
                    "wid_name": "Top Products",
                    "wid_text": "Lists top-performing products by sales."
                }
            ]
        },
    ]
}
```

## Running Locally

Follow these steps to run the project locally:

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/Arvindkumar7742/widget-management.git
    cd mini-page-builder
    ```

2. **Install Dependencies**:

    ```bash
    npm install
    ```

3. **Run the Application**:

    ```bash
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000`.
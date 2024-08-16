import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    category: [
        {
            id: 1,
            name: "Sales Analytics Dashboard",
            short_name: "Sales Analytics",
            widgets: [
                {
                    id: 1,
                    wid_name: "Revenue Overview",
                    wid_text: "Displays current and projected revenue."
                },
                {
                    id: 2,
                    wid_name: "Sales Performance",
                    wid_text: "Tracks sales performance across regions."
                },
                {
                    id: 3,
                    wid_name: "Top Products",
                    wid_text: "Lists top-performing products by sales."
                }
            ]
        },
        {
            id: 2,
            name: "Marketing Insights Dashboard",
            short_name: "Marketing Insights",
            widgets: [
                {
                    id: 1,
                    wid_name: "Campaign Performance",
                    wid_text: "Analyzes the performance of marketing campaigns."
                },
                {
                    id: 2,
                    wid_name: "Audience Demographics",
                    wid_text: "Shows demographic breakdown of the audience."
                },
                {
                    id: 3,
                    wid_name: "Lead Conversion Rate",
                    wid_text: "Displays the conversion rate of leads."
                }
            ]
        },
        {
            id: 3,
            name: "Product Management Dashboard",
            short_name: "Product Management",
            widgets: [
                {
                    id: 1,
                    wid_name: "Product Roadmap",
                    wid_text: "Visualizes the product development timeline."
                },
                {
                    id: 2,
                    wid_name: "Feature Requests",
                    wid_text: "Lists user-submitted feature requests."
                },
                {
                    id: 3,
                    wid_name: "Bug Tracking",
                    wid_text: "Monitors reported bugs and their status."
                }
            ]
        },
        {
            id: 4,
            name: "Customer Support Dashboard",
            short_name: "Customer Support",
            widgets: [
                {
                    id: 1,
                    wid_name: "Ticket Overview",
                    wid_text: "Displays the status of support tickets."
                },
                {
                    id: 2,
                    wid_name: "Response Time Analysis",
                    wid_text: "Analyzes the average response time to tickets."
                },
                {
                    id: 3,
                    wid_name: "Customer Satisfaction",
                    wid_text: "Tracks customer satisfaction scores."
                }
            ]
        }
    ]
}


const CategorySlice = createSlice({
    name: "category",
    initialState: initialState,
    reducers: {
        addWidget: (state, action) => {
            const cat_id = action.payload.id;
            const widget = action.payload.widget;
            state.category[cat_id-1].widgets.push(widget);
        },
        removeWidget: (state, action) => {
            const cat_id = action.payload.id;
            const wid_id = action.payload.widget_id;
            const filteredWidgets = state.category[cat_id - 1].widgets.filter((widget) => (widget.id !== wid_id));
            state.category[cat_id - 1].widgets = filteredWidgets;
        }
    }
})

export const { addWidget, removeWidget } = CategorySlice.actions;
export default CategorySlice.reducer;
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    category: [
        {
            id: 1,
            name: "CSPM Excutive dashboard",
            widgets: [
                {
                    id: 1,
                    wid_name: "first widget",
                    wid_text: "first widget text",
                },
                {
                    id: 2,
                    wid_name: "second widget",
                    wid_text: "second widget text",
                },
                {
                    id: 3,
                    wid_name: "third widget",
                    wid_text: "third widget text",
                }
            ]
        },
        {
            id: 2,
            name: "CWPP Excutive dashboard",
            widgets: [
                {
                    id: 1,
                    wid_name: "first widget",
                    wid_text: "first widget text",
                },
                {
                    id: 2,
                    wid_name: "second widget",
                    wid_text: "second widget text",
                },
                {
                    id: 3,
                    wid_name: "third widget",
                    wid_text: "third widget text",
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
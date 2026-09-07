# State Management and toggle functionality in `MenuItem.jsx` file.

## recursion (specially Recursive Component) is the core concept being used here.

`<MenuList>` renders `<MenuItem>`, and then `<MenuItem>` calls `<MenuList>` again inside itself to render child items.


# Steps

### Page load (initial objects created)

Direct children of the menuList are mounted (in this case) : `home`,`About us`, `services`, `register`, `contact`.

Each one has its own object, onclick event and state management.



Whenever you click on any component to expand it (open it), it mounts its children (recursion) (menuList called MenuItem, MenuItem got a click event ---> by click event, toggle function invoked that updated the state ---> because of state is updated, it reRender the component ---> now condition for rendering MenuItem becomes true and this way MenuItem called MenuList for children array).



same for children, Each child has its own state, object, click event.

child's click event happen, it toggles the condition for that specific child, (expanding or collapsing its children according to the condition)



But if you try to close a parent (collaps it), if its children has their own children or deeply nested data. Even if all the children tree has been expanded by the user and only tried to collaps the parent of all of these children, all the children will be reset to the initial state of empty object, useState with initial value of empty object.
This is because when you have closed the parent component, the condition that let the children to mount has now become false.

Example : 

- `About Us` Clicked (expanded)
- `Our Team` and `Career` got Mounted
- `Our Team` is clicked (expanded)
- `Leadership` and `Engineering` got Mounted
- Now `About Us` is Clicked again (collapsed)
- Condition that let the `Our Team` & `Career` mount becomes false.
- `Our Team` & `Career` both unmounted from UI
- Even if `Our Team` had a state of `true` that let it mount its children. If it got unmounted.
- Next time when `Our Team` will be expanded again, its children will have a new identity (new Empty Object, useState with empty object)